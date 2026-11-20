import fs from "node:fs";
import path from "node:path";
import { ArsenalTechRadar } from "@/components/ArsenalTechRadar";
import { TECH_RADAR_DATA } from "@/data/techRadar";
import enDict from "@/locales/en.json";
import kuDict from "@/locales/ku.json";
import trDict from "@/locales/tr.json";
import { describe, expect, it } from "vitest";

describe("Arsenal & Tech Radar (Mühendislik Radarı ve Mimari Tercihler)", () => {
  it("ArsenalTechRadar geçerli bir React bileşen fonksiyonudur", () => {
    expect(typeof ArsenalTechRadar).toBe("function");
  });

  it("TECH_RADAR_DATA her 3 kademeyi de (adopt, trial, avoid) eksiksiz içerir", () => {
    const adoptItems = TECH_RADAR_DATA.filter((i) => i.tier === "adopt");
    const trialItems = TECH_RADAR_DATA.filter((i) => i.tier === "trial");
    const avoidItems = TECH_RADAR_DATA.filter((i) => i.tier === "avoid");

    expect(adoptItems.length).toBeGreaterThanOrEqual(3);
    expect(trialItems.length).toBeGreaterThanOrEqual(2);
    expect(avoidItems.length).toBeGreaterThanOrEqual(3);
  });

  it("Tüm radar maddeleri TR, EN ve KU dillerinde açıklama ve mimari gerekçeye sahiptir", () => {
    for (const item of TECH_RADAR_DATA) {
      expect(item.tr.description.length).toBeGreaterThan(0);
      expect(item.tr.rationale.length).toBeGreaterThan(0);
      expect(item.en.description.length).toBeGreaterThan(0);
      expect(item.en.rationale.length).toBeGreaterThan(0);
      expect(item.ku.description.length).toBeGreaterThan(0);
      expect(item.ku.rationale.length).toBeGreaterThan(0);
    }
  });

  it("Ana sayfa (page.tsx) ArsenalTechRadar bileşenini içerir", () => {
    const pagePath = path.resolve(process.cwd(), "src/app/page.tsx");
    expect(fs.existsSync(pagePath)).toBe(true);

    const source = fs.readFileSync(pagePath, "utf-8");
    expect(source).toContain("ArsenalTechRadar");
  });

  it("ArsenalTechRadar kaynak kodunda erişilebilirlik ve editoryal bölümler mevcuttur", () => {
    const compPath = path.resolve(process.cwd(), "src/components/ArsenalTechRadar.tsx");
    expect(fs.existsSync(compPath)).toBe(true);

    const source = fs.readFileSync(compPath, "utf-8");
    expect(source).toContain('id="tech-radar"');
    expect(source).toContain("ADOPT");
    expect(source).toContain("TRIAL");
    expect(source).toContain("AVOID");
  });

  it("Tüm dil dosyaları (TR, EN, KU) techRadar anahtarlarını eksiksiz içerir", () => {
    const dicts = [trDict, enDict, kuDict];
    for (const dict of dicts) {
      expect(dict.techRadar).toBeDefined();
      expect(dict.techRadar.sectionBadge.length).toBeGreaterThan(0);
      expect(dict.techRadar.title.length).toBeGreaterThan(0);
      expect(dict.techRadar.subtitle.length).toBeGreaterThan(0);
      expect(dict.techRadar.tierAdopt.length).toBeGreaterThan(0);
      expect(dict.techRadar.tierTrial.length).toBeGreaterThan(0);
      expect(dict.techRadar.tierAvoid.length).toBeGreaterThan(0);
      expect(dict.techRadar.rationaleLabel.length).toBeGreaterThan(0);
    }
  });
});
