import fs from "node:fs";
import path from "node:path";
import { EditorialPreloader } from "@/components/EditorialPreloader";
import { describe, expect, it } from "vitest";

describe("EditorialPreloader Component & Architecture", () => {
  it("EditorialPreloader geçerli bir React bileşen fonksiyonudur", () => {
    expect(typeof EditorialPreloader).toBe("function");
  });

  it("kaynak kodda Awwwards shutter ease eğrisi mevcuttur", () => {
    const sourcePath = path.resolve(process.cwd(), "src/components/EditorialPreloader.tsx");
    expect(fs.existsSync(sourcePath)).toBe(true);

    const source = fs.readFileSync(sourcePath, "utf-8");
    // Awwwards iconic shutter ease
    expect(source).toContain("0.76, 0, 0.24, 1");
  });

  it("kaynak kodda telemetri, sessionStorage ve erişilebilirlik öznitelikleri tanımlıdır", () => {
    const sourcePath = path.resolve(process.cwd(), "src/components/EditorialPreloader.tsx");
    const source = fs.readFileSync(sourcePath, "utf-8");

    // Telemetri ve marka
    expect(source).toContain("ABDULLAH KEKLİK");
    expect(source).toContain("URFA, MESOPOTAMIA");
    expect(source).toContain("partridge_preloader_seen");
    expect(source).toContain('role="status"');
    expect(source).toContain('aria-live="polite"');
  });

  it("layout.tsx içinde EditorialPreloader bileşeni çağrılmaktadır", () => {
    const layoutPath = path.resolve(process.cwd(), "src/app/layout.tsx");
    expect(fs.existsSync(layoutPath)).toBe(true);

    const layoutSource = fs.readFileSync(layoutPath, "utf-8");
    expect(layoutSource).toContain("<EditorialPreloader />");
  });
});
