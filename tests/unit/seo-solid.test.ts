import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import {
  getAllProjects,
  getFilteredProjects,
  getNextProject,
  getProjectBySlug,
  getProjectCounts,
  isSystemsProject,
} from "@/services/projectService";
import { describe, expect, it } from "vitest";

describe("SOLID Refactoring & ProjectService Layer", () => {
  it("getAllProjects tüm vitrin projelerini eksiksiz döner", () => {
    const projects = getAllProjects();
    expect(projects.length).toBeGreaterThanOrEqual(5);
  });

  it("getProjectBySlug geçerli slug için doğru projeyi bulur", () => {
    const chukar = getProjectBySlug("chukar-engine");
    expect(chukar).toBeDefined();
    expect(chukar?.title).toBe("Chukar High-Speed Engine");

    const nonExistent = getProjectBySlug("non-existent-slug");
    expect(nonExistent).toBeUndefined();
  });

  it("getNextProject döngüsel olarak sıradaki projeyi hesaplar", () => {
    const projects = getAllProjects();
    const firstSlug = projects[0].slug;
    const { project: nextProject, nextIndex, total } = getNextProject(firstSlug);

    expect(nextProject.slug).toBe(projects[1].slug);
    expect(nextIndex).toBe(2);
    expect(total).toBe(projects.length);

    // Son projede başa dönmeli
    const lastSlug = projects[projects.length - 1].slug;
    const { project: wrappedProject, nextIndex: wrappedIndex } = getNextProject(lastSlug);
    expect(wrappedProject.slug).toBe(projects[0].slug);
    expect(wrappedIndex).toBe(1);
  });

  it("isSystemsProject sınıflandırması OCP kuralına uygun çalışır", () => {
    const chukar = getProjectBySlug("chukar-engine");
    const bloodseal = getProjectBySlug("bloodseal");
    const kidscare = getProjectBySlug("kidscare");

    expect(chukar).toBeDefined();
    expect(bloodseal).toBeDefined();
    expect(kidscare).toBeDefined();

    if (chukar && bloodseal && kidscare) {
      expect(isSystemsProject(chukar)).toBe(true);
      expect(isSystemsProject(bloodseal)).toBe(true);
      expect(isSystemsProject(kidscare)).toBe(false);
    }
  });

  it("getFilteredProjects ve getProjectCounts tutarlı sayılar üretir", () => {
    const counts = getProjectCounts();
    const all = getFilteredProjects("all");
    const systems = getFilteredProjects("systems");
    const web = getFilteredProjects("web");

    expect(all.length).toBe(counts.all);
    expect(systems.length).toBe(counts.systems);
    expect(web.length).toBe(counts.web);
    expect(counts.systems + counts.web).toBe(counts.all);
  });
});

describe("SEO - Robots & Sitemap Generation", () => {
  it("robots() geçerli arama motoru kuralları ve sitemap URL'i tanımlar", () => {
    const config = robots();
    expect(config.rules).toBeDefined();
    expect(config.sitemap).toContain("/sitemap.xml");
  });

  it("sitemap() ana sayfa ve tüm vaka sayfalarını öncelikleriyle listeler", () => {
    const routes = sitemap();
    const projects = getAllProjects();

    expect(routes.length).toBe(projects.length + 1);

    const homeRoute = routes.find((r) => !r.url.includes("/works/"));
    expect(homeRoute).toBeDefined();
    expect(homeRoute?.priority).toBe(1.0);

    for (const project of projects) {
      const projectRoute = routes.find((r) => r.url.endsWith(`/works/${project.slug}`));
      expect(projectRoute).toBeDefined();
      expect(projectRoute?.priority).toBe(0.8);
    }
  });
});
