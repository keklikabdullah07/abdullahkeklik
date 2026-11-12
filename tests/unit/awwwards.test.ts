import { KineticHeading } from "@/components/KineticHeading";
import { MagneticButton } from "@/components/MagneticButton";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { Preloader } from "@/components/Preloader";
import { describe, expect, it } from "vitest";

describe("Awwwards Motion Bileşenleri ve Yapı Doğrulaması", () => {
  it("Preloader bileşeni tanımlı ve fonksiyon olmalıdır", () => {
    expect(Preloader).toBeDefined();
    expect(typeof Preloader).toBe("function");
  });

  it("KineticHeading bileşeni tanımlı ve fonksiyon olmalıdır", () => {
    expect(KineticHeading).toBeDefined();
    expect(typeof KineticHeading).toBe("function");
  });

  it("MagneticButton bileşeni tanımlı ve fonksiyon olmalıdır", () => {
    expect(MagneticButton).toBeDefined();
    expect(typeof MagneticButton).toBe("function");
  });

  it("NoiseOverlay bileşeni tanımlı ve fonksiyon olmalıdır", () => {
    expect(NoiseOverlay).toBeDefined();
    expect(typeof NoiseOverlay).toBe("function");
  });
});
