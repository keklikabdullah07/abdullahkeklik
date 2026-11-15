import { initialProjects } from "@/data/projects";
import { describe, expect, it } from "vitest";

describe("Vitrin Projeleri Veri Bütünlüğü ve Git Entegrasyonu", () => {
  it("en az 4 adet vitrin projesi tanımlanmış olmalıdır", () => {
    expect(initialProjects.length).toBeGreaterThanOrEqual(4);
  });

  it("hem GitHub hem de GitLab kaynaklı projeler bulunmalıdır", () => {
    const githubProjects = initialProjects.filter((p) => p.source === "github");
    const gitlabProjects = initialProjects.filter((p) => p.source === "gitlab");

    expect(githubProjects.length).toBeGreaterThan(0);
    expect(gitlabProjects.length).toBeGreaterThan(0);
  });

  it("keklikabdullah07 gerçek kullanıcı adına ait repolar mevcut olmalıdır", () => {
    const userRepos = initialProjects.filter(
      (p) => p.githubUrl?.includes("keklikabdullah07") || p.gitlabUrl?.includes("keklikabdullah07"),
    );
    expect(userRepos.length).toBeGreaterThanOrEqual(6);
  });

  it("her projenin zorunlu alanları, dili ve etiketleri eksiksiz olmalıdır", () => {
    for (const project of initialProjects) {
      expect(project.id).toBeDefined();
      expect(project.title).toBeTruthy();
      expect(project.slug).toBeTruthy();
      expect(project.tagline).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.githubUrl || project.gitlabUrl).toBeDefined();
    }
  });
});
