"use client";

import { useI18n } from "@/context/LanguageContext";
import { initialProjects } from "@/data/projects";
import type { Project, ProjectSource } from "@/types/project";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  GitBranch,
  Github,
  Sparkles,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";
import { EASE_EDITORIAL, RevealOnScroll } from "./MotionWrapper";

type FilterCategory = "all" | "github" | "gitlab";

export function CuratedWorks() {
  const { t } = useI18n();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredProjects = initialProjects.filter((project) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "github") return project.source === "github";
    if (selectedFilter === "gitlab") return project.source === "gitlab";
    return true;
  });

  const countAll = initialProjects.length;
  const countGithub = initialProjects.filter((p) => p.source === "github").length;
  const countGitlab = initialProjects.filter((p) => p.source === "gitlab").length;

  return (
    <section
      id="curated-works"
      className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-hairline"
    >
      {/* Üst Editoryal Başlık ve NDC Arşiv Künyesi */}
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-hairline">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
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
            onClick={() => setSelectedFilter("github")}
            className={`relative px-3 sm:px-4 py-2 rounded-md font-mono text-xs uppercase tracking-wider transition-colors duration-200 flex items-center gap-2 ${
              selectedFilter === "github"
                ? "text-primary-contrast font-semibold"
                : "bg-surface hover:bg-surface-raised text-ink-muted hover:text-ink border border-hairline"
            }`}
          >
            {selectedFilter === "github" && (
              <motion.span
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-primary rounded-md shadow-xs -z-0"
                transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
              />
            )}
            <Github className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10">GITHUB</span>
            <span className="hidden sm:inline relative z-10">
              {t.curatedWorks.tabGithub.replace("GITHUB", "")}
            </span>
            <span className="relative z-10 opacity-80">
              [{String(countGithub).padStart(2, "0")}]
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedFilter("gitlab")}
            className={`relative px-3 sm:px-4 py-2 rounded-md font-mono text-xs uppercase tracking-wider transition-colors duration-200 flex items-center gap-2 ${
              selectedFilter === "gitlab"
                ? "text-canvas font-semibold"
                : "bg-surface hover:bg-surface-raised text-ink-muted hover:text-ink border border-hairline"
            }`}
          >
            {selectedFilter === "gitlab" && (
              <motion.span
                layoutId="activeFilterPill"
                className="absolute inset-0 bg-amber rounded-md shadow-xs -z-0"
                transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
              />
            )}
            <GitBranch className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10">GITLAB</span>
            <span className="hidden sm:inline relative z-10">
              {t.curatedWorks.tabGitlab.replace("GITLAB", "")}
            </span>
            <span className="relative z-10 opacity-80">
              [{String(countGitlab).padStart(2, "0")}]
            </span>
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
                    <span className="hidden lg:inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-surface border border-hairline text-ink">
                      <Sparkles className="w-3 h-3 text-amber" />
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

      {/* Awwwards Seviyesi: Floating Magnetic Cursor Preview Kartı (Desktop) */}
      {activeProject && (
        <div
          className="hidden md:flex fixed pointer-events-none z-50 flex-col w-84 p-5 rounded-xl bg-surface border border-primary/30 shadow-card backdrop-blur-lg transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${mousePosition.x + 24}px, ${mousePosition.y - 120}px, 0)`,
          }}
        >
          <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted border-b border-hairline pb-2 mb-3">
            <span className="flex items-center gap-1.5 text-primary font-medium">
              <Terminal className="w-3.5 h-3.5" />
              <span>
                {activeProject.source === "gitlab" ? "GITLAB ENTERPRISE" : "GITHUB REPOSITORY"}
              </span>
            </span>
            <span className="font-semibold">{activeProject.year}</span>
          </div>

          <div className="flex items-center justify-between">
            <h4 className="text-base font-bold text-ink leading-snug">{activeProject.title}</h4>
            {activeProject.language && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas border border-hairline text-primary font-medium">
                {activeProject.language}
              </span>
            )}
          </div>

          <p className="text-xs text-ink-body mt-2 leading-relaxed line-clamp-3">
            {activeProject.description}
          </p>

          <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-hairline">
            {activeProject.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas border border-hairline text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {activeProject.highlightMetric && (
            <div className="mt-3 py-1.5 px-2 rounded bg-amber/10 border border-amber/20 text-amber text-[11px] font-mono font-medium flex items-center justify-between">
              <span>METRIC / HIGHLIGHT:</span>
              <span>{activeProject.highlightMetric}</span>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
