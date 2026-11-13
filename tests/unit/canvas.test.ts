import Home from "@/app/page";
import { describe, expect, it } from "vitest";

describe("Temiz Başlangıç Tuvali", () => {
  it("Home bileşeni tanımlı ve fonksiyon olmalıdır", () => {
    expect(Home).toBeDefined();
    expect(typeof Home).toBe("function");
  });
});
