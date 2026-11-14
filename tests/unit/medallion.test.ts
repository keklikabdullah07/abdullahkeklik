import fs from "node:fs";
import path from "node:path";
import { InteractiveMedallion } from "@/components/InteractiveMedallion";
import { describe, expect, it } from "vitest";

describe("InteractiveMedallion Component & Assets", () => {
  it("InteractiveMedallion bileşeni geçerli bir React fonksiyonudur", () => {
    expect(typeof InteractiveMedallion).toBe("function");
  });

  it("madalyon için gereken görsel varlıklar (avatar.webp ve logo-monogram.png) mevcuttur", () => {
    const avatarPath = path.resolve(process.cwd(), "public/avatar.webp");
    const monogramPath = path.resolve(process.cwd(), "public/logo-monogram.png");

    expect(fs.existsSync(avatarPath)).toBe(true);
    expect(fs.existsSync(monogramPath)).toBe(true);

    const avatarStats = fs.statSync(avatarPath);
    const monogramStats = fs.statSync(monogramPath);

    expect(avatarStats.size).toBeGreaterThan(1000);
    expect(monogramStats.size).toBeGreaterThan(1000);
  });
});
