import fs from "node:fs";
import path from "node:path";
import { CommissionInquiryForm } from "@/components/CommissionInquiryForm";
import { GrandFinaleContact } from "@/components/GrandFinaleContact";
import enDict from "@/locales/en.json";
import kuDict from "@/locales/ku.json";
import trDict from "@/locales/tr.json";
import { describe, expect, it } from "vitest";

describe("Omnichannel Contact & Commission Inquiry (Çok Kanallı İletişim & Talep Formu)", () => {
  it("CommissionInquiryForm ve GrandFinaleContact geçerli bileşen fonksiyonlarıdır", () => {
    expect(typeof CommissionInquiryForm).toBe("function");
    expect(typeof GrandFinaleContact).toBe("function");
  });

  it("GrandFinaleContact bileşeninde WhatsApp, Telegram, Instagram ve E-posta kanalları eksiksiz yer alır", () => {
    const contactPath = path.resolve(process.cwd(), "src/components/GrandFinaleContact.tsx");
    expect(fs.existsSync(contactPath)).toBe(true);
    const source = fs.readFileSync(contactPath, "utf-8");

    // WhatsApp
    expect(source).toContain("wa.me/");
    expect(source).toContain("905531675669");
    expect(source).toContain("+90 553 167 56 69");

    // Telegram
    expect(source).toContain("t.me/+");

    // Instagram
    expect(source).toContain("instagram.com/");
    expect(source).toContain("_keklikabdullah");

    // E-posta
    expect(source).toContain("keklikabdullah07@gmail.com");

    // Alt ağ bağlantıları
    expect(source).toContain("INSTAGRAM");
    expect(source).toContain("TELEGRAM");
  });

  it("CommissionInquiryForm bileşeni form alanlarını ve çift gönderim aksiyonunu içerir", () => {
    const formPath = path.resolve(process.cwd(), "src/components/CommissionInquiryForm.tsx");
    expect(fs.existsSync(formPath)).toBe(true);
    const source = fs.readFileSync(formPath, "utf-8");

    // Form inputları
    expect(source).toContain('id="inquiry-name"');
    expect(source).toContain('id="inquiry-contact"');
    expect(source).toContain('id="inquiry-message"');

    // WhatsApp ve E-posta aksiyonları
    expect(source).toContain("wa.me/905531675669");
    expect(source).toContain("mailto:keklikabdullah07@gmail.com");
  });

  it("i18n sözlüklerinde contactForm anahtarları eksiksiz yer alır", () => {
    const dicts = [
      { lang: "TR", dict: trDict },
      { lang: "EN", dict: enDict },
      { lang: "KU", dict: kuDict },
    ];

    for (const { lang, dict } of dicts) {
      expect(dict).toHaveProperty("contactForm");
      const cf = (dict as unknown as { contactForm: Record<string, string> }).contactForm;
      expect(cf.badge, `${lang} badge eksik`).toBeDefined();
      expect(cf.title, `${lang} title eksik`).toBeDefined();
      expect(cf.subtitle, `${lang} subtitle eksik`).toBeDefined();
      expect(cf.nameLabel, `${lang} nameLabel eksik`).toBeDefined();
      expect(cf.contactLabel, `${lang} contactLabel eksik`).toBeDefined();
      expect(cf.disciplineLabel, `${lang} disciplineLabel eksik`).toBeDefined();
      expect(cf.disciplineArchitecture, `${lang} disciplineArchitecture eksik`).toBeDefined();
      expect(cf.disciplineFullstack, `${lang} disciplineFullstack eksik`).toBeDefined();
      expect(cf.disciplineAdvisory, `${lang} disciplineAdvisory eksik`).toBeDefined();
      expect(cf.messageLabel, `${lang} messageLabel eksik`).toBeDefined();
      expect(cf.submitWhatsApp, `${lang} submitWhatsApp eksik`).toBeDefined();
      expect(cf.submitEmail, `${lang} submitEmail eksik`).toBeDefined();
      expect(cf.validationError, `${lang} validationError eksik`).toBeDefined();
      expect(cf.directChannelsHeading, `${lang} directChannelsHeading eksik`).toBeDefined();
    }
  });

  it("CommandPalette içinde WhatsApp, Telegram ve Instagram bağlantıları mevcuttur", () => {
    const cmdPalettePath = path.resolve(process.cwd(), "src/components/CommandPalette.tsx");
    const source = fs.readFileSync(cmdPalettePath, "utf-8");

    expect(source).toContain("sys-whatsapp");
    expect(source).toContain("wa.me/905531675669");
    expect(source).toContain("sys-telegram");
    expect(source).toContain("t.me/+905531675669");
    expect(source).toContain("sys-instagram");
    expect(source).toContain("instagram.com/_keklikabdullah");
    expect(source).toContain("keklikabdullah07@gmail.com");
  });

  it("İletişim ve form bileşenlerinde yapay zeka klişesi ikonları kesinlikle bulunmaz", () => {
    const files = [
      "src/components/GrandFinaleContact.tsx",
      "src/components/CommissionInquiryForm.tsx",
    ];
    const forbidden = ["Sparkles", "Wand", "Bot", "Brain"];

    for (const file of files) {
      const source = fs.readFileSync(path.resolve(process.cwd(), file), "utf-8");
      for (const icon of forbidden) {
        expect(source).not.toContain(icon);
      }
    }
  });
});
