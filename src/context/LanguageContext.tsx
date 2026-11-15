"use client";

import enDict from "@/locales/en.json";
import kuDict from "@/locales/ku.json";
import trDict from "@/locales/tr.json";
import type { SupportedLocale, TranslationDictionary } from "@/types/i18n";
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const dictionaries: Record<SupportedLocale, TranslationDictionary> = {
  tr: trDict,
  en: enDict,
  ku: kuDict,
};

interface LanguageContextValue {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>("tr");
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem("partridge_locale") as SupportedLocale | null;
      if (saved && (saved === "tr" || saved === "en" || saved === "ku")) {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const setLocale = useCallback((newLocale: SupportedLocale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("partridge_locale", newLocale);
      document.cookie = `partridge_locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      document.documentElement.lang = newLocale;
    } catch {
      // Ignore
    }
  }, []);

  const t = useMemo(() => {
    return dictionaries[locale] || dictionaries.tr;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
  );
}

export function useI18n() {
  try {
    const context = useContext(LanguageContext);
    if (context) return context;
  } catch {
    // Outside React render lifecycle (e.g. direct function call in unit test)
  }
  return {
    locale: "tr" as SupportedLocale,
    setLocale: () => {},
    t: dictionaries.tr,
  };
}
