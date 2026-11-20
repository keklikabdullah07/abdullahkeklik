import fs from "node:fs";
import path from "node:path";
import { CommandPalette } from "@/components/CommandPalette";
import enDict from "@/locales/en.json";
import kuDict from "@/locales/ku.json";
import trDict from "@/locales/tr.json";
import { describe, expect, it } from "vitest";

describe("Architectural Command Palette (Cmd + K & Control Center)", () => {
  it("CommandPalette geçerli bir React bileşen fonksiyonudur", () => {
    expect(typeof CommandPalette).toBe("function");
  });

  it("Header.tsx bileşeni CommandPalette ve Cmd+K tetikleyicisini içerir", () => {
    const headerPath = path.resolve(process.cwd(), "src/components/Header.tsx");
    expect(fs.existsSync(headerPath)).toBe(true);

    const source = fs.readFileSync(headerPath, "utf-8");
    expect(source).toContain("CommandPalette");
    expect(source).toContain("commandPaletteOpen");
    expect(source).toContain("setCommandPaletteOpen");
    expect(source).toContain("metaKey");
    expect(source).toContain("ctrlKey");
    expect(source).toContain("t.commandPalette.triggerLabel");
    expect(source).toContain("t.commandPalette.shortcutBadge");
  });

  it("CommandPalette kaynak kodunda erişilebilirlik ve klavye gezintisi mevcuttur", () => {
    const palettePath = path.resolve(process.cwd(), "src/components/CommandPalette.tsx");
    expect(fs.existsSync(palettePath)).toBe(true);

    const source = fs.readFileSync(palettePath, "utf-8");
    expect(source).toContain('role="dialog"');
    expect(source).toContain('aria-modal="true"');
    expect(source).toContain("ArrowDown");
    expect(source).toContain("ArrowUp");
    expect(source).toContain("Escape");
    expect(source).toContain("Enter");
  });

  it("CommandPalette içinde mimari CLI komutları (> whoami, > stack, > keklik) mevcuttur", () => {
    const palettePath = path.resolve(process.cwd(), "src/components/CommandPalette.tsx");
    const source = fs.readFileSync(palettePath, "utf-8");

    expect(source).toContain("> whoami");
    expect(source).toContain("> stack");
    expect(source).toContain("> keklik");
    expect(source).toContain("CHUKAR PARTRIDGE / KINALI KEKLİK");
  });

  it("Tüm dil dosyaları (TR, EN, KU) commandPalette çevirilerini eksiksiz içerir", () => {
    const dicts = [trDict, enDict, kuDict];
    for (const dict of dicts) {
      expect(dict.commandPalette).toBeDefined();
      expect(dict.commandPalette.triggerLabel.length).toBeGreaterThan(0);
      expect(dict.commandPalette.placeholder.length).toBeGreaterThan(0);
      expect(dict.commandPalette.shortcutBadge.length).toBeGreaterThan(0);
      expect(dict.commandPalette.sectionsHeading.length).toBeGreaterThan(0);
      expect(dict.commandPalette.systemHeading.length).toBeGreaterThan(0);
      expect(dict.commandPalette.cliHeading.length).toBeGreaterThan(0);
      expect(dict.commandPalette.noResults.length).toBeGreaterThan(0);
      expect(dict.commandPalette.closeHint.length).toBeGreaterThan(0);
      expect(dict.commandPalette.navigateHint.length).toBeGreaterThan(0);
      expect(dict.commandPalette.selectHint.length).toBeGreaterThan(0);
    }
  });
});
