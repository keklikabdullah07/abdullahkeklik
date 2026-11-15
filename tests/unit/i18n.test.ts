import enDict from "@/locales/en.json";
import kuDict from "@/locales/ku.json";
import trDict from "@/locales/tr.json";
import type { TranslationDictionary } from "@/types/i18n";
import { describe, expect, it } from "vitest";

describe("i18n Multilingual Integrity (TR / EN / KU)", () => {
  it("all 3 dictionaries should have matching top-level keys", () => {
    const trKeys = Object.keys(trDict).sort();
    const enKeys = Object.keys(enDict).sort();
    const kuKeys = Object.keys(kuDict).sort();

    expect(enKeys).toEqual(trKeys);
    expect(kuKeys).toEqual(trKeys);
  });

  it("header translations should exist and be non-empty", () => {
    const locales = [trDict, enDict, kuDict];
    for (const dict of locales) {
      expect(dict.header.discipline.length).toBeGreaterThan(0);
      expect(dict.header.openToWork.length).toBeGreaterThan(0);
      expect(dict.header.contact.length).toBeGreaterThan(0);
      expect(dict.header.directory.length).toBeGreaterThan(0);
    }
  });

  it("kurdish (Kurmanci) dictionary should contain authentic Hawar terms", () => {
    expect(kuDict.header.contact).toBe("TÊKILÎ");
    expect(kuDict.curatedWorks.tabAll).toBe("HEMÛ");
    expect(kuDict.contact.sendEmail).toBe("E-POSTA BIŞÎNIN");
  });

  it("directory modal translations should have all 4 sections in all languages", () => {
    const locales: TranslationDictionary[] = [trDict, enDict, kuDict];
    for (const dict of locales) {
      expect(dict.directoryModal.worksLabel).toBeTruthy();
      expect(dict.directoryModal.manifestoLabel).toBeTruthy();
      expect(dict.directoryModal.bioLabel).toBeTruthy();
      expect(dict.directoryModal.contactLabel).toBeTruthy();
      expect(dict.directoryModal.close).toBeTruthy();
    }
  });
});
