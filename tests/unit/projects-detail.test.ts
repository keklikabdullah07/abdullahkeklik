import { generateStaticParams } from "@/app/works/[slug]/page";
import { initialProjects } from "@/data/projects";
import { describe, expect, it } from "vitest";

describe("Projects Detail & Case Study", () => {
  it("generateStaticParams tüm projelerin slug'larını statik olarak üretir", async () => {
    const params = await generateStaticParams();
    expect(params).toHaveLength(initialProjects.length);
    expect(params.map((p) => p.slug)).toEqual(initialProjects.map((p) => p.slug));
  });

  it("her proje vaka analizi (Case Study) alanlarına eksiksiz sahiptir", () => {
    for (const project of initialProjects) {
      expect(project.slug).toBeDefined();
      expect(project.slug.length).toBeGreaterThan(0);
      expect(project.challenge).toBeDefined();
      expect(project.challenge?.length).toBeGreaterThan(20);
      expect(project.solution).toBeDefined();
      expect(project.solution?.length).toBeGreaterThan(20);
      expect(project.impact).toBeDefined();
      expect(project.impact?.length).toBeGreaterThanOrEqual(3);
      expect(project.deliverables).toBeDefined();
      expect(project.deliverables?.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("tüm slug'lar benzersiz ve URL dostudur", () => {
    const slugs = initialProjects.map((p) => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(slugs.length);

    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9-]+$/);
    }
  });
});
