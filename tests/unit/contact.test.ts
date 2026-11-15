import fs from "node:fs";
import path from "node:path";
import { GrandFinaleContact } from "@/components/GrandFinaleContact";
import { describe, expect, it } from "vitest";

describe("GrandFinaleContact & Footer White Monogram Lockup", () => {
  it("GrandFinaleContact geçerli bir React bileşen fonksiyonudur", () => {
    expect(typeof GrandFinaleContact).toBe("function");
  });

  it("Footer künyesinde Beyaz AK Monogramı (/logo-monogram.png) yer almalıdır", () => {
    const contactFilePath = path.join(process.cwd(), "src/components/GrandFinaleContact.tsx");
    const fileContent = fs.readFileSync(contactFilePath, "utf-8");

    // /logo-monogram.png ve alt metni doğrulaması
    expect(fileContent).toContain('src="/logo-monogram.png"');
    expect(fileContent).toContain('alt="Abdullah Keklik Beyaz AK Monogramı"');
    expect(fileContent).toContain("t.contact.footerTitle");
  });

  it("Footer bileşeninde eski vektör ChukarLogo kalıntısı bulunmamalıdır", () => {
    const contactFilePath = path.join(process.cwd(), "src/components/GrandFinaleContact.tsx");
    const fileContent = fs.readFileSync(contactFilePath, "utf-8");

    expect(fileContent).not.toContain("ChukarLogo");
  });
});
