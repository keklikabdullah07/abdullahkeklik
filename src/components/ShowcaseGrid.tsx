"use client";

import type { Project, ProjectCategory } from "@/types/project";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ExternalLink, Github, Gitlab, Layers, UserCheck } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { EmptyState } from "./EmptyState";
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
    <section id="showcase" className="py-20 md:py-28 border-t border-hairline relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık ve Filtre Menüsü */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
              <span>Awwwards Standardında Mühendislik</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              <span className="text-silver-chrome">İnteraktif Bento</span> Vitrini
            </h2>
            <p className="text-sm text-ink-muted mt-2 max-w-xl leading-relaxed">
              Yalnızca kod değil; çalışan mikro-terminal demoları, canlı telemetri dalgaları ve
              dokunsal UI bileşenleriyle yaşayan mimari.
            </p>
          </div>

          {/* Filtre Menüsü */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl border border-silver-glow bg-surface/80 backdrop-blur-md self-start md:self-auto shadow-sm">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              aria-pressed={activeFilter === "all"}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === "all"
                  ? "bg-brand text-white font-bold shadow-[0_0_15px_rgba(224,82,56,0.5)]"
                  : "text-ink-muted hover:text-ink hover:bg-surface-raised"
              }`}
            >
              Tümü ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("individual")}
              aria-pressed={activeFilter === "individual"}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === "individual"
                  ? "bg-brand text-white font-bold shadow-[0_0_15px_rgba(224,82,56,0.5)]"
                  : "text-ink-muted hover:text-ink hover:bg-surface-raised"
              }`}
            >
              <UserCheck className="w-3 h-3" aria-hidden="true" />
              <span>Bireysel ({projects.filter((p) => p.category === "individual").length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("corporate")}
              aria-pressed={activeFilter === "corporate"}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === "corporate"
                  ? "bg-brand text-white font-bold shadow-[0_0_15px_rgba(224,82,56,0.5)]"
                  : "text-ink-muted hover:text-ink hover:bg-surface-raised"
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
                  className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-surface/90 border border-hairline hover:border-silver-glow transition-all shadow-panel hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)] ${
                    project.bentoSpan ?? "col-span-1"
                  }`}
                >
                  {/* Kart Arka Plan Hover Işığı */}
                  <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    {/* Üst Kategori ve Metrik Barı */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-full border ${
                          project.category === "corporate"
                            ? "bg-slate-900/60 text-slate-300 border-slate-700/60"
                            : "bg-red-950/40 text-red-300 border-red-800/40"
                        }`}
                      >
                        {project.category === "corporate"
                          ? "Kurumsal Çözüm"
                          : "Açık Kaynak / Bireysel"}
                      </span>

                      {project.highlightMetric && (
                        <span className="font-mono text-xs text-brand font-semibold px-2 py-0.5 rounded bg-brand/10 border border-brand/20">
                          {project.highlightMetric}
                        </span>
                      )}
                    </div>

                    {/* Proje Başlığı ve Tagline */}
                    <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-1.5 group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs font-mono text-brand/90 mb-3">{project.tagline}</p>

                    <p className="text-sm text-ink-muted leading-relaxed mb-4">
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
                          className="px-2.5 py-0.5 text-[11px] font-mono text-ink-subtle bg-surface-sunken/80 rounded border border-hairline"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Aksiyon Butonları */}
                    <div className="flex items-center justify-between pt-4 border-t border-hairline/80">
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} GitHub Deposu`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-ink-muted hover:text-ink hover:bg-surface-raised rounded-md transition-colors"
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
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-ink-muted hover:text-ink hover:bg-surface-raised rounded-md transition-colors"
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
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-brand bg-brand/10 hover:bg-brand/20 border border-brand/30 rounded-md transition-all ml-auto"
                        >
                          <span>Canlı İncele</span>
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};
