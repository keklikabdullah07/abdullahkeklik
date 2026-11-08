import { initialProjects } from "@/data/projects";
import { describe, expect, it } from "vitest";

describe("Vitrin Projeleri Veri Bütünlüğü", () => {
  it("en az 4 adet vitrin projesi tanımlanmış olmalıdır", () => {
    expect(initialProjects.length).toBeGreaterThanOrEqual(4);
  });

  it("hem bireysel hem de kurumsal kategorilerde proje bulunmalıdır", () => {
    const individual = initialProjects.filter((p) => p.category === "individual");
    const corporate = initialProjects.filter((p) => p.category === "corporate");

    expect(individual.length).toBeGreaterThan(0);
    expect(corporate.length).toBeGreaterThan(0);
  });

  it("her projenin zorunlu alanları ve etiketleri eksiksiz olmalıdır", () => {
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
