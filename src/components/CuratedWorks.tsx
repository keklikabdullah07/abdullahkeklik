"use client";

import { initialProjects } from "@/data/projects";
import type { Project } from "@/types/project";
import { ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

export function CuratedWorks() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="curated-works"
      className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-hairline"
    >
      {/* Üst Editoryal Başlık ve NDC Arşiv Künyesi */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-hairline">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>SECTION [02] — SELECTED WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink font-sans">
            Seçilmiş Projeler &amp; Arşiv
          </h2>
        </div>

        <p className="text-sm font-sans text-ink-muted max-w-md leading-relaxed">
          Nippon Design Center arşiv disiplininde dizilen sistem mühendisliği, yaratıcı kodlama ve
          masaüstü sınıfı web altyapıları.
        </p>
      </div>

      {/* Proje İndeks Tablosu / Liste */}
      <div className="divide-y divide-hairline">
        {initialProjects.map((project, index) => {
          const indexFormatted = String(index + 1).padStart(2, "0");
          const isHovered = activeProject?.id === project.id;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
              className={`group relative py-8 md:py-10 transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer ${
                isHovered ? "bg-surface/40 px-4 -mx-4 rounded-lg" : ""
              }`}
            >
              {/* Sol: İndeks Numarası & Başlık */}
              <div className="flex items-baseline gap-6 md:gap-10">
                <span className="font-mono text-xs md:text-sm text-ink-muted group-hover:text-primary transition-colors">
                  [{indexFormatted}]
                </span>

                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-ink group-hover:text-primary group-hover:translate-x-2 transition-all duration-200">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-ink-muted mt-1.5 flex items-center gap-3">
                    <span>{project.client}</span>
                    <span className="inline-block w-1 h-1 rounded-full bg-hairline" />
                    <span className="text-ink-body font-sans">{project.tagline}</span>
                  </div>
                </div>
              </div>

              {/* Sağ: Rozet, Metrik, Yıl & İkon */}
              <div className="flex items-center gap-4 sm:gap-6 self-end md:self-auto">
                {project.highlightMetric && (
                  <span className="hidden lg:inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-surface border border-hairline text-ink">
                    <Sparkles className="w-3 h-3 text-amber" />
                    {project.highlightMetric}
                  </span>
                )}

                <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber/10 border border-amber/20 text-amber font-medium">
                  {project.discipline || "Creative Tech"}
                </span>

                <span className="text-xs font-mono text-ink-muted tracking-wider">
                  {project.year || "2026"}
                </span>

                <div className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center text-ink-muted group-hover:text-primary-contrast group-hover:bg-primary group-hover:border-primary group-hover:rotate-45 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
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
            </div>
          );
        })}
      </div>

      {/* Awwwards Seviyesi: Floating Magnetic Cursor Preview Kartı (Desktop) */}
      {activeProject && (
        <div
          className="hidden md:flex fixed pointer-events-none z-50 flex-col w-80 p-5 rounded-xl bg-surface border border-primary/30 shadow-card backdrop-blur-lg transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${mousePosition.x + 24}px, ${mousePosition.y - 120}px, 0)`,
          }}
        >
          <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted border-b border-hairline pb-2 mb-3">
            <span className="flex items-center gap-1.5 text-primary font-medium">
              <Terminal className="w-3.5 h-3.5" />
              <span>LIVE ARCHIVE</span>
            </span>
            <span>{activeProject.year}</span>
          </div>

          <h4 className="text-base font-bold text-ink leading-snug">{activeProject.title}</h4>
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
              <span>METRIC:</span>
              <span>{activeProject.highlightMetric}</span>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
