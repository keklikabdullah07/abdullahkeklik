"use client";

import { useI18n } from "@/context/LanguageContext";
import {
  type ProjectFilterCategory,
  getFilteredProjects,
  getProjectCounts,
} from "@/services/projectService";
import type { Project } from "@/types/project";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code2, GitBranch, Github, Terminal } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";
import { EASE_EDITORIAL, RevealOnScroll } from "./MotionWrapper";
import { ProjectHoverPreview } from "./ProjectHoverPreview";

export function CuratedWorks() {
  const { t } = useI18n();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<ProjectFilterCategory>("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredProjects = getFilteredProjects(selectedFilter);
  const { all: countAll, systems: countSystems, web: countWeb } = getProjectCounts();

  return (
    <section
      id="curated-works"
      className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-hairline"
    >
      {/* Üst Editoryal Başlık ve NDC Arşiv Künyesi */}
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-hairline">
          <div>
            <div className="text-xs font-mono text-ink-muted uppercase tracking-widest mb-3">
              <span>{t.curatedWorks.sectionBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink font-sans">
              {t.curatedWorks.title}
            </h2>
          </div>

          <p className="text-sm font-sans text-ink-muted max-w-md leading-relaxed">
            {t.curatedWorks.subtitle}
          </p>
        </div>
      </RevealOnScroll>

      {/* Editoryal Kategori Filtre Çubuğu (Tabs with Smooth Sliding Pill) */}
      <RevealOnScroll delay={0.1}>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-8 border-b border-hairline">
          <button
            type="button"
            onClick={() => setSelectedFilter("all")}
            className={`relative px-4 py-2 rounded-md font-mono text-xs uppercase tracking-wider transition-colors duration-200 flex items-center gap-2 ${
              selectedFilter === "all"
                ? "text-canvas font-semibold"
                : "bg-surface hover:bg-surface-raised text-ink-muted hover:text-ink border border-hairline"
            }`}
          >
            {selectedFilter === "all" && (
              <motion.span
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-ink rounded-md shadow-xs -z-0"
                transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
              />
            )}
            <span className="relative z-10">{t.curatedWorks.tabAll}</span>
            <span className="relative z-10 opacity-70">[{String(countAll).padStart(2, "0")}]</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedFilter("systems")}
            className={`relative px-3 sm:px-4 py-2 rounded-md font-mono text-xs uppercase tracking-wider transition-colors duration-200 flex items-center gap-2 ${
              selectedFilter === "systems"
                ? "text-primary-contrast font-semibold"
                : "bg-surface hover:bg-surface-raised text-ink-muted hover:text-ink border border-hairline"
            }`}
          >
            {selectedFilter === "systems" && (
              <motion.span
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-primary rounded-md shadow-xs -z-0"
                transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
              />
            )}
            <Terminal className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10">{t.curatedWorks.tabSystems}</span>
            <span className="relative z-10 opacity-80">
              [{String(countSystems).padStart(2, "0")}]
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedFilter("web")}
            className={`relative px-3 sm:px-4 py-2 rounded-md font-mono text-xs uppercase tracking-wider transition-colors duration-200 flex items-center gap-2 ${
              selectedFilter === "web"
                ? "text-canvas font-semibold"
                : "bg-surface hover:bg-surface-raised text-ink-muted hover:text-ink border border-hairline"
            }`}
          >
            {selectedFilter === "web" && (
              <motion.span
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-amber rounded-md shadow-xs -z-0"
                transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
              />
            )}
            <Code2 className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10">{t.curatedWorks.tabWeb}</span>
            <span className="relative z-10 opacity-80">[{String(countWeb).padStart(2, "0")}]</span>
          </button>
        </div>
      </RevealOnScroll>

      {/* Proje İndeks Tablosu / Liste (FLIP Layout Motion) */}
      <motion.div layout className="divide-y divide-hairline">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const indexFormatted = String(index + 1).padStart(2, "0");
            const isHovered = activeProject?.id === project.id;
            const directRepoUrl = project.githubUrl || project.gitlabUrl;

            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: EASE_EDITORIAL }}
                onMouseEnter={() => setActiveProject(project)}
                onMouseLeave={() => setActiveProject(null)}
                className={`group relative py-8 md:py-10 transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  isHovered ? "bg-surface/40 px-4 -mx-4 rounded-lg" : ""
                }`}
              >
                {/* Sol: İndeks Numarası & Başlık & Tagline */}
                <div className="flex items-baseline gap-6 md:gap-10 flex-1">
                  <span className="font-mono text-xs md:text-sm text-ink-muted group-hover:text-primary transition-colors">
                    [{indexFormatted}]
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/works/${project.slug}`}
                        className="text-xl sm:text-2xl md:text-3xl font-semibold text-ink group-hover:text-primary group-hover:translate-x-2 transition-all duration-200 inline-flex items-center gap-2"
                      >
                        <span>{project.title}</span>
                      </Link>

                      {project.language && (
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded border border-hairline bg-surface text-ink-muted">
                          {project.language}
                        </span>
                      )}
                    </div>

                    <div className="text-xs font-mono text-ink-muted mt-1.5 flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="text-ink font-medium">{project.client}</span>
                      <span className="inline-block w-1 h-1 rounded-full bg-hairline" />
                      <span className="text-ink-body font-sans">{project.tagline}</span>
                    </div>
                  </div>
                </div>

                {/* Sağ: Metrik, Disiplin, Canlı Git Butonları */}
                <div className="flex items-center gap-3 sm:gap-4 self-end md:self-auto">
                  {project.highlightMetric && (
                    <span className="hidden lg:inline-flex items-center text-xs font-mono px-2.5 py-1 rounded bg-surface border border-hairline text-ink-muted">
                      {project.highlightMetric}
                    </span>
                  )}

                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber/10 border border-amber/20 text-amber font-medium">
                    {project.discipline || "Systems"}
                  </span>

                  {/* Harici Repo Linki (Varsa) */}
                  {directRepoUrl && (
                    <a
                      href={directRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={project.source === "gitlab" ? "GitLab Deposu" : "GitHub Deposu"}
                      className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center text-ink-muted hover:text-primary hover:border-primary transition-colors"
                    >
                      {project.source === "gitlab" ? (
                        <GitBranch className="w-4 h-4" />
                      ) : (
                        <Github className="w-4 h-4" />
                      )}
                    </a>
                  )}

                  {/* Vaka Çalışması Detayı */}
                  <Link
                    href={`/works/${project.slug}`}
                    title="Detaylı Vaka İncelemesi"
                    className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center text-ink-muted group-hover:text-primary-contrast group-hover:bg-primary group-hover:border-primary group-hover:rotate-45 transition-all duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Mobil Uyumlu Açılır Detay Paneli */}
                <div className="md:hidden pt-2">
                  <p className="text-xs text-ink-body leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface border border-hairline text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Awwwards Seviyesi: Floating Magnetic Cursor Preview Kartı (SRP Bileşeni) */}
      <ProjectHoverPreview project={activeProject} position={mousePosition} />
    </section>
  );
}
