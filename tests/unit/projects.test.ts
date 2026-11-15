import { initialProjects } from "@/data/projects";
import { describe, expect, it } from "vitest";

describe("Vitrin Projeleri Veri Bütünlüğü ve Git Entegrasyonu", () => {
  it("en az 5 adet gerçek vitrin projesi tanımlanmış olmalıdır", () => {
    expect(initialProjects.length).toBeGreaterThanOrEqual(5);
  });

  it("tüm projeler keklikabdullah07 GitHub reposuna ait ve doğrulanabilir olmalıdır", () => {
    const githubProjects = initialProjects.filter((p) => p.source === "github");
    expect(githubProjects.length).toBe(initialProjects.length);

    for (const project of initialProjects) {
      expect(project.githubUrl).toBeDefined();
      expect(project.githubUrl).toContain("github.com/keklikabdullah07/");
    }
  });

  it("kurgusal veya uydurma demo URL'leri bulunmamalıdır", () => {
    for (const project of initialProjects) {
      if (project.demoUrl) {
        expect(project.demoUrl).not.toContain("omnilogistics");
        expect(project.demoUrl).not.toContain("engine.abdullahkeklik.dev");
      }
    }
  });

  it("her projenin zorunlu alanları, dili ve etiketleri eksiksiz olmalıdır", () => {
    for (const project of initialProjects) {
      expect(project.id).toBeDefined();
      expect(project.title).toBeTruthy();
      expect(project.slug).toBeTruthy();
      expect(project.tagline).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.client).toBeTruthy();
      expect(project.discipline).toBeTruthy();
    }
  });
});
