import fs from "node:fs";
import path from "node:path";
import { Header } from "@/components/Header";
import { describe, expect, it } from "vitest";

describe("Header Component & Brand Lockup", () => {
  it("Header geçerli bir React bileşen fonksiyonudur", () => {
    expect(typeof Header).toBe("function");
  });

  it("Header kaynak kodunda AR monogramı ve ABDULLAH KEKLİK marka kilidi mevcuttur", () => {
    const headerPath = path.resolve(process.cwd(), "src/components/Header.tsx");
    expect(fs.existsSync(headerPath)).toBe(true);

    const source = fs.readFileSync(headerPath, "utf-8");
    expect(source).toContain("logo-monogram-ar.png");
    expect(source).toContain("ABDULLAH KEKLİK");
    expect(source).toContain("Parlak Siyah ve Bakır AR Monogramı");
  });

  it("Header içinde dizin butonu ve erişilebilirlik öznitelikleri mevcuttur", () => {
    const headerPath = path.resolve(process.cwd(), "src/components/Header.tsx");
    const source = fs.readFileSync(headerPath, "utf-8");

    expect(source).toContain('aria-label="Editoryal dizini aç"');
    expect(source).toContain("LanguageSwitcher");
  });
});
