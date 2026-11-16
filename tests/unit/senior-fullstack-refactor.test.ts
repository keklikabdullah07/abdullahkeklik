import fs from "node:fs";
import path from "node:path";
import en from "@/locales/en.json";
import ku from "@/locales/ku.json";
import tr from "@/locales/tr.json";
import { describe, expect, it } from "vitest";

describe("Senior Full-Stack Refactor & Yellow Dot Purge (SPEC-0025)", () => {
  it("temizlenen bileşenlerde yapay sarı/kehribar ve animasyonlu durum noktası bulunmamalıdır", () => {
    const componentsToCheck = [
      "src/components/CuratedWorks.tsx",
      "src/components/TypographicManifesto.tsx",
      "src/components/EditorialBio.tsx",
      "src/components/InteractiveMedallion.tsx",
      "src/components/GrandFinaleContact.tsx",
      "src/components/EditorialDirectoryModal.tsx",
      "src/components/EditorialPreloader.tsx",
      "src/app/works/[slug]/page.tsx",
    ];

    for (const relPath of componentsToCheck) {
      const fullPath = path.resolve(process.cwd(), relPath);
      const content = fs.readFileSync(fullPath, "utf-8");

      // bg-amber dekoratif noktalar temizlenmiş olmalı
      expect(content).not.toMatch(/rounded-full bg-amber/);
      // animate-pulse durum noktaları temizlenmiş olmalı
      expect(content).not.toMatch(/rounded-full bg-primary animate-pulse/);
    }
  });

  it("Header'da canlı atölye durum noktası kaldırılmış, marka logosundaki imza nokta korunmuş olmalıdır", () => {
    const headerPath = path.resolve(process.cwd(), "src/components/Header.tsx");
    const content = fs.readFileSync(headerPath, "utf-8");

    // Canlı durum rozetindeki animate-pulse noktası temizlendi
    expect(content).not.toMatch(/rounded-full bg-primary animate-pulse/);
    // Marka logosu "ABDULLAH KEKLİK." imza noktası korunuyor
    expect(content).toMatch(/ABDULLAH KEKLİK[\s\S]*?rounded-full bg-primary/);
  });

  it("EditorialHero'da Abdullah KEKLİK. imza noktası yerinde durmalıdır", () => {
    const heroPath = path.resolve(process.cwd(), "src/components/EditorialHero.tsx");
    const content = fs.readFileSync(heroPath, "utf-8");

    // İmza bitiş noktası
    expect(content).toMatch(/rounded-full bg-primary ml-2\.5/);
  });

  it("Dil dosyaları (TR, EN, KU) kıdemli Full-Stack mühendisliği konumlanmasına sahip olmalıdır", () => {
    // TR
    expect(tr.header.discipline).toBe("FULL-STACK SYSTEMS & ARCHITECTURE");
    expect(tr.hero.quote).toContain("arka uç");
    expect(tr.manifesto.p1).not.toContain("Mezopotamya'nın ilk yazılı taş tabletlerindeki");
    expect(tr.bio.title1).toBe("Mühendislik Refleksi &");

    // EN
    expect(en.header.discipline).toBe("FULL-STACK SYSTEMS & ARCHITECTURE");
    expect(en.hero.quote).toContain("resilient backends");
    expect(en.bio.title1).toBe("Engineering Rigor &");

    // KU
    expect(ku.header.discipline).toBe("FULL-STACK SYSTEMS & ARCHITECTURE");
    expect(ku.hero.quote).toContain("Sîstemên pişta bihêz");
    expect(ku.bio.title1).toBe("Refleksa Endezyariyê Û");
  });
});
