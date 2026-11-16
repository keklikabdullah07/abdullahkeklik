import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("AI Slop & Cliché Purge Verification", () => {
  it("CuratedWorks, Works Detail ve Manifesto bileşenlerinde Sparkles ikonu kalmamalıdır", () => {
    const curatedPath = path.join(process.cwd(), "src/components/CuratedWorks.tsx");
    const detailPath = path.join(process.cwd(), "src/app/works/[slug]/page.tsx");
    const manifestoPath = path.join(process.cwd(), "src/components/TypographicManifesto.tsx");
    const bioPath = path.join(process.cwd(), "src/components/EditorialBio.tsx");

    const curated = fs.readFileSync(curatedPath, "utf-8");
    const detail = fs.readFileSync(detailPath, "utf-8");
    const manifesto = fs.readFileSync(manifestoPath, "utf-8");
    const bio = fs.readFileSync(bioPath, "utf-8");

    expect(curated).not.toContain("Sparkles");
    expect(detail).not.toContain("Sparkles");
    expect(manifesto).not.toContain("Sparkles");
    expect(bio).not.toContain("Sparkles");
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
