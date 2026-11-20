import fs from "node:fs";
import path from "node:path";
import { CraftLab } from "@/components/CraftLab";
import enDict from "@/locales/en.json";
import kuDict from "@/locales/ku.json";
import trDict from "@/locales/tr.json";
import { describe, expect, it } from "vitest";

describe("Craft Lab & Micro-Physics (Deneysel Zanaat ve Arayüz Fiziği)", () => {
  it("CraftLab geçerli bir React bileşen fonksiyonudur", () => {
    expect(typeof CraftLab).toBe("function");
  });

  it("Ana sayfa (page.tsx) CraftLab bileşenini içerir", () => {
    const pagePath = path.resolve(process.cwd(), "src/app/page.tsx");
    expect(fs.existsSync(pagePath)).toBe(true);

    const source = fs.readFileSync(pagePath, "utf-8");
    expect(source).toContain("CraftLab");
  });

  it("CraftLab kaynak kodunda 3 deneyin temel yapıları mevcuttur", () => {
    const compPath = path.resolve(process.cwd(), "src/components/CraftLab.tsx");
    expect(fs.existsSync(compPath)).toBe(true);

    const source = fs.readFileSync(compPath, "utf-8");
    expect(source).toContain('id="craft-lab"');
    // Deney 1: Yay Fiziği
    expect(source).toContain("stiffness");
    expect(source).toContain("damping");
    expect(source).toContain("mass");
    // Deney 2: Kriptografik Bloklar
    expect(source).toContain("SHA-256");
    // Deney 3: Web Audio Taktil Sentez
    expect(source).toContain("AudioContext");
  });

  it("CraftLab kaynak kodunda kesinlikle AI slop ikonu bulunmaz", () => {
    const compPath = path.resolve(process.cwd(), "src/components/CraftLab.tsx");
    const source = fs.readFileSync(compPath, "utf-8");

    expect(source).not.toContain("Sparkles");
    expect(source).not.toContain("Wand");
    expect(source).not.toContain("Bot");
    expect(source).not.toContain("Brain");
  });

  it("Tüm dil dosyaları (TR, EN, KU) craftLab anahtarlarını eksiksiz içerir", () => {
    const dicts = [trDict, enDict, kuDict];
    for (const dict of dicts) {
      expect(dict.craftLab).toBeDefined();
      expect(dict.craftLab.sectionBadge.length).toBeGreaterThan(0);
      expect(dict.craftLab.title.length).toBeGreaterThan(0);
      expect(dict.craftLab.subtitle.length).toBeGreaterThan(0);
      expect(dict.craftLab.exp1Title.length).toBeGreaterThan(0);
      expect(dict.craftLab.exp1Desc.length).toBeGreaterThan(0);
      expect(dict.craftLab.exp2Title.length).toBeGreaterThan(0);
      expect(dict.craftLab.exp3Title.length).toBeGreaterThan(0);
    }
  });
});
