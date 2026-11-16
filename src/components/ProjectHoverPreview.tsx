"use client";

import type { Project } from "@/types/project";
import { Terminal } from "lucide-react";

interface ProjectHoverPreviewProps {
  project: Project | null;
  position: { x: number; y: number };
}

export function ProjectHoverPreview({ project, position }: ProjectHoverPreviewProps) {
  if (!project) return null;

  return (
    <div
      className="hidden md:flex fixed pointer-events-none z-50 flex-col w-84 p-5 rounded-xl bg-surface border border-primary/30 shadow-card backdrop-blur-lg transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x + 24}px, ${position.y - 120}px, 0)`,
      }}
    >
      <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted border-b border-hairline pb-2 mb-3">
        <span className="flex items-center gap-1.5 text-primary font-medium">
          <Terminal className="w-3.5 h-3.5" />
          <span>{project.source === "gitlab" ? "GITLAB REPOSITORY" : "GITHUB REPOSITORY"}</span>
        </span>
        <span className="font-semibold">{project.year}</span>
      </div>

      <div className="flex items-center justify-between">
        <h4 className="text-base font-bold text-ink leading-snug">{project.title}</h4>
        {project.language && (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas border border-hairline text-primary font-medium">
            {project.language}
          </span>
        )}
      </div>

      <p className="text-xs text-ink-body mt-2 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-hairline">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas border border-hairline text-ink-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.highlightMetric && (
        <div className="mt-3 py-1.5 px-2 rounded bg-amber/10 border border-amber/20 text-amber text-[11px] font-mono font-medium flex items-center justify-between">
          <span>METRIC / HIGHLIGHT:</span>
          <span>{project.highlightMetric}</span>
        </div>
      )}
    </div>
  );
}
