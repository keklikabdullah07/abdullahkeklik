import { EditorialBio } from "@/components/EditorialBio";
import { describe, expect, it } from "vitest";

describe("EditorialBio Component", () => {
  it("EditorialBio bileşeni geçerli bir React bileşen fonksiyonudur", () => {
    expect(typeof EditorialBio).toBe("function");
  });

  it("bileşen çağrıldığında geçerli bir JSX ağacı üretir", () => {
    const vnode = EditorialBio();
    expect(vnode).toBeDefined();
    expect(vnode.type).toBe("section");
    expect(vnode.props.id).toBe("about");
  });
});
