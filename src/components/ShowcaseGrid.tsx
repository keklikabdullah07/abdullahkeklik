"use client";

import type { Project, ProjectCategory } from "@/types/project";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ExternalLink, Github, Gitlab, Layers, UserCheck } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { EmptyState } from "./EmptyState";
import { KineticHeading } from "./KineticHeading";
import { SpotlightContainer } from "./SpotlightContainer";
import { KinesisUIRef } from "./bento/KinesisUIRef";
import { SecurityAuditBadge } from "./bento/SecurityAuditBadge";
import { TelemetryPreview } from "./bento/TelemetryPreview";
import { TerminalPreview } from "./bento/TerminalPreview";

interface ShowcaseGridProps {
  projects: Project[];
}

export const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  const renderBentoInteractive = (projectId: string) => {
    switch (projectId) {
      case "proj-1":
        return <TerminalPreview />;
      case "proj-2":
        return <TelemetryPreview />;
      case "proj-3":
        return <KinesisUIRef />;
      case "proj-4":
        return <SecurityAuditBadge />;
      default:
        return null;
    }
  };

  return (
    <section id="showcase" className="py-20 md:py-28 border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık ve Filtre Menüsü */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D9532F] uppercase tracking-wider mb-2 font-bold">
              <Layers className="w-3.5 h-3.5 text-[#D9532F]" aria-hidden="true" />
              <span>Awwwards Standardında Mühendislik</span>
            </div>
            <KineticHeading
              as="h2"
              className="text-3xl sm:text-4xl font-extrabold text-[#FAF9F6] tracking-tight"
            >
              İnteraktif Bento Vitrini
            </KineticHeading>
            <p className="text-sm text-[#94A3B8] mt-2 max-w-xl leading-relaxed">
              Yalnızca kod değil; çalışan mikro-terminal demoları, canlı telemetri dalgaları ve
              dokunsal UI bileşenleriyle yaşayan mimari.
            </p>
          </div>

          {/* Filtre Menüsü */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl border border-white/10 bg-[#121722]/80 backdrop-blur-md self-start md:self-auto shadow-sm">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              aria-pressed={activeFilter === "all"}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#D9532F] text-[#FAF9F6] font-bold shadow-[0_2px_10px_rgba(217,83,47,0.35)]"
                  : "text-[#94A3B8] hover:text-[#FAF9F6] hover:bg-white/5"
              }`}
            >
              Tümü ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("individual")}
              aria-pressed={activeFilter === "individual"}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeFilter === "individual"
                  ? "bg-[#D9532F] text-[#FAF9F6] font-bold shadow-[0_2px_10px_rgba(217,83,47,0.35)]"
                  : "text-[#94A3B8] hover:text-[#FAF9F6] hover:bg-white/5"
              }`}
            >
              <UserCheck className="w-3 h-3" aria-hidden="true" />
              <span>Bireysel ({projects.filter((p) => p.category === "individual").length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("corporate")}
              aria-pressed={activeFilter === "corporate"}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeFilter === "corporate"
                  ? "bg-[#D9532F] text-[#FAF9F6] font-bold shadow-[0_2px_10px_rgba(217,83,47,0.35)]"
                  : "text-[#94A3B8] hover:text-[#FAF9F6] hover:bg-white/5"
              }`}
            >
              <Briefcase className="w-3 h-3" aria-hidden="true" />
              <span>Kurumsal ({projects.filter((p) => p.category === "corporate").length})</span>
            </button>
          </div>
        </div>

        {/* Asimetrik Bento Izgarası */}
        {filteredProjects.length === 0 ? (
          <EmptyState
            title="Bu kategoride proje bulunamadı"
            description="Seçilen filtre kriterlerine uygun bir proje yer almıyor. Tüm projeleri listeleyebilirsiniz."
            actionText="Tüm Projeleri Göster"
            onAction={() => setActiveFilter("all")}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative flex flex-col justify-between rounded-2xl bg-[#121722]/90 border border-white/10 hover:border-[#D9532F]/40 transition-all duration-300 shadow-panel hover:shadow-[0_12px_36px_-12px_rgba(9,13,22,0.9)] overflow-hidden ${
                    project.bentoSpan ?? "col-span-1"
                  }`}
                >
                  <SpotlightContainer className="p-6 sm:p-7 h-full flex flex-col justify-between">
                    <div className="relative z-10">
                      {/* Üst Kategori ve Metrik Barı */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-white/5 text-[#FAF9F6] border border-white/10">
                          {project.category === "corporate"
                            ? "Kurumsal Çözüm"
                            : "Açık Kaynak / Bireysel"}
                        </span>

                        {project.highlightMetric && (
                          <span className="font-mono text-xs text-[#D9532F] font-semibold px-2 py-0.5 rounded bg-[#D9532F]/10 border border-[#D9532F]/20">
                            {project.highlightMetric}
                          </span>
                        )}
                      </div>

                      {/* Proje Başlığı ve Tagline */}
                      <h3 className="text-xl sm:text-2xl font-bold text-[#FAF9F6] tracking-tight mb-1.5 group-hover:text-[#D9532F] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs font-mono text-[#D9532F] mb-3">{project.tagline}</p>

                      <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Canlı İnteraktif Bento Önizlemesi */}
                      {renderBentoInteractive(project.id)}
                    </div>

                    <div className="relative z-10 mt-6">
                      {/* Teknoloji Etiketleri */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 text-[11px] font-mono text-[#7A7265] bg-[#090D16] rounded border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Aksiyon Butonları */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} GitHub Deposu`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-[#FAF9F6] hover:bg-white/5 rounded-md transition-colors"
                            >
                              <Github className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>GitHub</span>
                            </a>
                          )}

                          {project.gitlabUrl && (
                            <a
                              href={project.gitlabUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.title} GitLab Deposu`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-[#FAF9F6] hover:bg-white/5 rounded-md transition-colors"
                            >
                              <Gitlab className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>GitLab</span>
                            </a>
                          )}
                        </div>

                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} Canlı İncele`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-[#FAF9F6] hover:text-[#D9532F] bg-[#090D16] hover:bg-[#121722] border border-white/10 rounded-md transition-all ml-auto"
                          >
                            <span>Canlı İncele</span>
                            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  </SpotlightContainer>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};
