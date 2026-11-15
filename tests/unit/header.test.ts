import fs from "node:fs";
import path from "node:path";
import { Header } from "@/components/Header";
import { describe, expect, it } from "vitest";

describe("Header Component & Brand Lockup", () => {
  it("Header geçerli bir React bileşen fonksiyonudur", () => {
    expect(typeof Header).toBe("function");
  });

  it("Header kaynak kodunda partridgelogo.png ve ABDULLAH KEKLİK marka kilidi mevcuttur", () => {
    const headerPath = path.resolve(process.cwd(), "src/components/Header.tsx");
    expect(fs.existsSync(headerPath)).toBe(true);

    const source = fs.readFileSync(headerPath, "utf-8");
    expect(source).toContain("/partridgelogo.png");
    expect(source).toContain("ABDULLAH KEKLİK");
    expect(source).toContain("Abdullah Keklik Marka Logosu");
  });

  it("Header içinde dizin butonu ve erişilebilirlik öznitelikleri mevcuttur", () => {
    const headerPath = path.resolve(process.cwd(), "src/components/Header.tsx");
    const source = fs.readFileSync(headerPath, "utf-8");

    expect(source).toContain('aria-label="Editoryal dizini aç"');
    expect(source).toContain("LanguageSwitcher");
  });
});
