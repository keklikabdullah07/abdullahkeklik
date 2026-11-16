import { initialProjects } from "@/data/projects";
import type { Project } from "@/types/project";

export type ProjectFilterCategory = "all" | "systems" | "web";

/**
 * Systems projesi sınıflandırıcı stratejisi (OCP).
 * Yeni bir düşük seviyeli teknoloji eklendiğinde bu kural kümesi genişletilebilir.
 */
const SYSTEMS_LANGUAGES = new Set(["Rust", "C#", "Go", "C++", "Zig"]);
const SYSTEMS_TAGS = new Set(["Cryptography", "WASM", "Zero-GC", "Zero-Trust", "Security"]);

export function isSystemsProject(project: Project): boolean {
  if (project.language && SYSTEMS_LANGUAGES.has(project.language)) {
    return true;
  }
  return project.tags.some((tag) => SYSTEMS_TAGS.has(tag));
}

/**
 * Tüm küratörlü vitrin projelerini döndürür (DIP).
 */
export function getAllProjects(): Project[] {
  return initialProjects;
}

/**
 * Slug değerine göre tek bir proje getirir.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return initialProjects.find((p) => p.slug === slug);
}

/**
 * İndekse göre sıradaki döngüsel projeyi getirir.
 */
export function getNextProject(currentSlug: string): {
  project: Project;
  nextIndex: number;
  total: number;
} {
  const currentIndex = initialProjects.findIndex((p) => p.slug === currentSlug);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  const nextIndex = (safeIndex + 1) % initialProjects.length;

  return {
    project: initialProjects[nextIndex],
    nextIndex: nextIndex + 1,
    total: initialProjects.length,
  };
}

/**
 * Kategoriye göre filtrelenmiş projeleri döndürür.
 */
export function getFilteredProjects(filter: ProjectFilterCategory): Project[] {
  if (filter === "all") return initialProjects;
  if (filter === "systems") return initialProjects.filter(isSystemsProject);
  if (filter === "web") return initialProjects.filter((p) => !isSystemsProject(p));
  return initialProjects;
}

/**
 * Filtre sekme sayılarını döndürür.
 */
export function getProjectCounts() {
  const all = initialProjects.length;
  const systems = initialProjects.filter(isSystemsProject).length;
  const web = all - systems;

  return { all, systems, web };
}
