"use client";

import type { Project, ProjectCategory } from "@/types/project";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, ExternalLink, Github, Gitlab, Layers, UserCheck } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { EmptyState } from "./EmptyState";

interface ShowcaseGridProps {
  projects: Project[];
}

export const ShowcaseGrid: React.FC<ShowcaseGridProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="showcase" className="py-16 md:py-24 border-t border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık ve Filtre Menüsü */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Seçkin Projeler</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight">
              Vitrin & Çalışmalar
            </h2>
            <p className="text-sm text-ink-muted mt-1 max-w-xl">
              Fikir aşamasından canlıya alınmış; ölçeklenebilir, temiz mimariye sahip bireysel ve
              kurumsal projeler.
            </p>
          </div>

          {/* Filtre Butonları */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg border border-hairline bg-surface/60 backdrop-blur-sm self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              aria-pressed={activeFilter === "all"}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeFilter === "all"
                  ? "bg-brand text-canvas font-semibold shadow-sm"
                  : "text-ink-muted hover:text-ink hover:bg-surface-raised"
              }`}
            >
              Tümü ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("individual")}
              aria-pressed={activeFilter === "individual"}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeFilter === "individual"
                  ? "bg-brand text-canvas font-semibold shadow-sm"
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
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                activeFilter === "corporate"
                  ? "bg-brand text-canvas font-semibold shadow-sm"
                  : "text-ink-muted hover:text-ink hover:bg-surface-raised"
              }`}
            >
              <Briefcase className="w-3 h-3" aria-hidden="true" />
              <span>Kurumsal ({projects.filter((p) => p.category === "corporate").length})</span>
            </button>
          </div>
        </div>

        {/* Bento Grid Kartları */}
        {filteredProjects.length === 0 ? (
          <EmptyState
            title="Bu kategoride proje bulunamadı"
            description="Seçilen filtrede henüz sergilenen bir proje yok. Tüm projeleri görüntüleyebilirsiniz."
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
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-lg bg-surface border border-hairline hover:border-brand/40 shadow-sm hover:shadow-panel transition-all ${
                    project.bentoSpan ?? "col-span-1"
                  }`}
                >
                  <div>
                    {/* Üst Bilgi Barı */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 text-[11px] font-mono font-medium rounded border ${
                            project.category === "corporate"
                              ? "bg-blue-950/40 text-blue-300 border-blue-800/40"
                              : "bg-emerald-950/40 text-emerald-300 border-emerald-800/40"
                          }`}
                        >
                          {project.category === "corporate"
                            ? "Kurumsal Çözüm"
                            : "Açık Kaynak / Bireysel"}
                        </span>
                      </div>

                      {project.highlightMetric && (
                        <span className="font-mono text-xs text-brand font-semibold">
                          {project.highlightMetric}
                        </span>
                      )}
                    </div>

                    {/* Proje Başlığı ve Açıklama */}
                    <h3 className="text-xl font-bold text-ink tracking-tight mb-2 group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs font-mono text-brand/90 mb-3">{project.tagline}</p>

                    <p className="text-sm text-ink-muted leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Teknoloji Etiketleri */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-mono text-ink-subtle bg-surface-sunken/80 rounded border border-hairline"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Alt Aksiyon Butonları (Tek Etkileşimli Varlık) */}
                    <div className="flex items-center justify-between pt-4 border-t border-hairline/60">
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} GitHub Deposu`}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-ink-muted hover:text-ink hover:bg-surface-raised rounded transition-colors"
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
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-ink-muted hover:text-ink hover:bg-surface-raised rounded transition-colors"
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
                          className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:text-brand-glow hover:underline transition-colors ml-auto"
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
