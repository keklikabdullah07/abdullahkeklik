import fs from "node:fs";
import path from "node:path";
import { FieldNotes } from "@/components/FieldNotes";
import { FIELD_NOTES_DATA } from "@/data/fieldNotes";
import enDict from "@/locales/en.json";
import kuDict from "@/locales/ku.json";
import trDict from "@/locales/tr.json";
import { describe, expect, it } from "vitest";

describe("Field Notes & Engineering Essays (Saha Notları ve Mühendislik Makaleleri)", () => {
  it("FieldNotes geçerli bir React bileşen fonksiyonudur", () => {
    expect(typeof FieldNotes).toBe("function");
  });

  it("FIELD_NOTES_DATA 3 adet derinlemesine mühendislik makalesi içerir", () => {
    expect(FIELD_NOTES_DATA.length).toBe(3);
    const slugs = FIELD_NOTES_DATA.map((note) => note.slug);
    expect(slugs).toContain("dual-write-outbox");
    expect(slugs).toContain("tactile-frame-budget");
    expect(slugs).toContain("zero-runtime-exceptions");
  });

  it("Tüm makaleler TR, EN ve KU dillerinde title, excerpt, content ve takeaways içerir", () => {
    for (const note of FIELD_NOTES_DATA) {
      expect(note.date.length).toBeGreaterThan(0);
      expect(note.readTime.length).toBeGreaterThan(0);
      expect(note.category.length).toBeGreaterThan(0);

      // TR
      expect(note.tr.title.length).toBeGreaterThan(0);
      expect(note.tr.excerpt.length).toBeGreaterThan(0);
      expect(note.tr.content.length).toBeGreaterThanOrEqual(3);
      expect(note.tr.takeaways.length).toBeGreaterThanOrEqual(3);

      // EN
      expect(note.en.title.length).toBeGreaterThan(0);
      expect(note.en.excerpt.length).toBeGreaterThan(0);
      expect(note.en.content.length).toBeGreaterThanOrEqual(3);
      expect(note.en.takeaways.length).toBeGreaterThanOrEqual(3);

      // KU
      expect(note.ku.title.length).toBeGreaterThan(0);
      expect(note.ku.excerpt.length).toBeGreaterThan(0);
      expect(note.ku.content.length).toBeGreaterThanOrEqual(3);
      expect(note.ku.takeaways.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("Ana sayfa (page.tsx) FieldNotes bileşenini içerir", () => {
    const pagePath = path.resolve(process.cwd(), "src/app/page.tsx");
    expect(fs.existsSync(pagePath)).toBe(true);

    const source = fs.readFileSync(pagePath, "utf-8");
    expect(source).toContain('import { FieldNotes } from "@/components/FieldNotes"');
    expect(source).toContain("<FieldNotes />");
  });

  it("FieldNotes bileşeninde #field-notes çapa kimliği (anchor id) bulunur", () => {
    const componentPath = path.resolve(process.cwd(), "src/components/FieldNotes.tsx");
    expect(fs.existsSync(componentPath)).toBe(true);

    const source = fs.readFileSync(componentPath, "utf-8");
    expect(source).toContain('id="field-notes"');
  });

  it("i18n sözlüklerinde fieldNotes anahtarları eksiksiz yer alır", () => {
    const dicts = [
      { lang: "TR", dict: trDict },
      { lang: "EN", dict: enDict },
      { lang: "KU", dict: kuDict },
    ];

    for (const { lang, dict } of dicts) {
      expect(dict).toHaveProperty("fieldNotes");
      const fn = (dict as unknown as { fieldNotes: Record<string, string> }).fieldNotes;
      expect(fn.sectionBadge, `${lang} sectionBadge eksik`).toBeDefined();
      expect(fn.title, `${lang} title eksik`).toBeDefined();
      expect(fn.subtitle, `${lang} subtitle eksik`).toBeDefined();
      expect(fn.readArticle, `${lang} readArticle eksik`).toBeDefined();
      expect(fn.closeArticle, `${lang} closeArticle eksik`).toBeDefined();
      expect(fn.keyTakeawaysLabel, `${lang} keyTakeawaysLabel eksik`).toBeDefined();
      expect(fn.publishedOn, `${lang} publishedOn eksik`).toBeDefined();
    }
  });

  it("CommandPalette içinde #field-notes bağlantısı tanımlıdır", () => {
    const cmdPalettePath = path.resolve(process.cwd(), "src/components/CommandPalette.tsx");
    const source = fs.readFileSync(cmdPalettePath, "utf-8");
    expect(source).toContain("#field-notes");
    expect(source).toContain("nav-field-notes");
  });

  it("FieldNotes kaynak kodunda yapay zeka klişesi ikonları kesinlikle bulunmaz", () => {
    const componentPath = path.resolve(process.cwd(), "src/components/FieldNotes.tsx");
    const source = fs.readFileSync(componentPath, "utf-8");
    const forbidden = ["Sparkles", "Wand", "Bot", "Brain"];
    for (const icon of forbidden) {
      expect(source).not.toContain(icon);
    }
  });
});
