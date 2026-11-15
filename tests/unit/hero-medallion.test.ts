import fs from "node:fs";
import path from "node:path";
import { HeroMedallionVideo } from "@/components/HeroMedallionVideo";
import { describe, expect, it } from "vitest";

describe("HeroMedallionVideo Component & Assets", () => {
  it("HeroMedallionVideo bileşeni geçerli bir React fonksiyonudur", () => {
    expect(typeof HeroMedallionVideo).toBe("function");
  });

  it("3D madalyon video dosyası (3D_medallion_animation_sequence_1ec22850_1080p.mp4) public dizininde mevcuttur", () => {
    const videoPath = path.resolve(
      process.cwd(),
      "public/3D_medallion_animation_sequence_1ec22850_1080p.mp4",
    );
    expect(fs.existsSync(videoPath)).toBe(true);

    const stats = fs.statSync(videoPath);
    // 3.3MB video boyutu 1MB'tan büyük olmalı
    expect(stats.size).toBeGreaterThan(1_000_000);
  });
});
