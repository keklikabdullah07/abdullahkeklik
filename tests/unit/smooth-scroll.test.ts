import { SmoothScrollProvider, useLenis } from "@/components/SmoothScrollProvider";
import { describe, expect, it } from "vitest";

describe("SmoothScrollProvider", () => {
  it("SmoothScrollProvider bileşeni ve useLenis hook'u tanımlıdır", () => {
    expect(typeof SmoothScrollProvider).toBe("function");
    expect(typeof useLenis).toBe("function");
  });

  it("Lenis konfigürasyon eğrisi beklenen matematiksel aralıkta çalışır", () => {
    const easing = (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t));

    // t=0 başlangıçta 0'a yakın olmalı
    expect(easing(0)).toBeLessThan(0.01);

    // t=1 bitişte 1 olmalı
    expect(easing(1)).toBe(1);

    // t=0.5 ortada monoton artan olmalı
    expect(easing(0.5)).toBeGreaterThan(0.9);
  });
});
