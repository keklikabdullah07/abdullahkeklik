import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("AI Slop & Cliché Purge Verification", () => {
  it("CuratedWorks, Works Detail ve Manifesto bileşenlerinde Sparkles ikonu kalmamalıdır", () => {
    const curatedPath = path.join(process.cwd(), "src/components/CuratedWorks.tsx");
    const detailPath = path.join(process.cwd(), "src/app/works/[slug]/page.tsx");
    const manifestoPath = path.join(process.cwd(), "src/components/TypographicManifesto.tsx");
    const bioPath = path.join(process.cwd(), "src/components/EditorialBio.tsx");
    const radarPath = path.join(process.cwd(), "src/components/ArsenalTechRadar.tsx");

    const curated = fs.readFileSync(curatedPath, "utf-8");
    const detail = fs.readFileSync(detailPath, "utf-8");
    const manifesto = fs.readFileSync(manifestoPath, "utf-8");
    const bio = fs.readFileSync(bioPath, "utf-8");
    const radar = fs.readFileSync(radarPath, "utf-8");

    expect(curated).not.toContain("Sparkles");
    expect(detail).not.toContain("Sparkles");
    expect(manifesto).not.toContain("Sparkles");
    expect(bio).not.toContain("Sparkles");
    expect(radar).not.toContain("Sparkles");
  });

  it("Tüm src dizini genelinde hiçbir bileşende Sparkles, Wand, Bot gibi AI klişe ikonları bulunamaz", () => {
    const walkSync = (dir: string): string[] => {
      let results: string[] = [];
      const list = fs.readdirSync(dir);
      for (const file of list) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          results = results.concat(walkSync(fullPath));
        } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
          results.push(fullPath);
        }
      }
      return results;
    };

    const allSourceFiles = walkSync(path.join(process.cwd(), "src"));
    const forbiddenIcons = ["Sparkles", "Wand", "Bot", "Brain"];

    for (const filePath of allSourceFiles) {
      const content = fs.readFileSync(filePath, "utf-8");
      for (const icon of forbiddenIcons) {
        // Exclude schema.org googleBot definition
        if (icon === "Bot" && content.includes("googleBot")) continue;
        const hasForbiddenImport = new RegExp(`\\b${icon}\\b`).test(content);
        if (hasForbiddenImport && content.includes("lucide-react")) {
          throw new Error(
            `❌ [AI SLOP İHLALİ] ${filePath} dosyasında '${icon}' ikonu bulundu! Proje anayasası gereği yasaktır.`,
          );
        }
      }
    }
  });

  it("Preloader bileşeninde sahte sci-fi/NASA telemetri dizgileri bulunmamalıdır", () => {
    const preloaderPath = path.join(process.cwd(), "src/components/EditorialPreloader.tsx");
    const preloader = fs.readFileSync(preloaderPath, "utf-8");

    expect(preloader).not.toContain("CALIBRATING HIGH-FIDELITY SHADERS");
    expect(preloader).not.toContain("ALL SYSTEMS GO");
    expect(preloader).not.toContain("INITIALIZING ARCHITECTURAL GRID");
    expect(preloader).toContain("EDİTORYAL KILAVUZ & TİPOGRAFİ");
  });

  it("Çeviri dosyalarında AI savunmacı klişe metinler yer almamalıdır", () => {
    const trPath = path.join(process.cwd(), "src/locales/tr.json");
    const enPath = path.join(process.cwd(), "src/locales/en.json");

    const tr = fs.readFileSync(trPath, "utf-8");
    const en = fs.readFileSync(enPath, "utf-8");

    expect(tr).not.toContain("Jenerik yapay zeka şablonları yerine");
    expect(tr).not.toContain("Yapay zekanın ürettiği tekdüze mor gradyanlar");
    expect(en).not.toContain("Rejecting generic AI templates");
  });
});
