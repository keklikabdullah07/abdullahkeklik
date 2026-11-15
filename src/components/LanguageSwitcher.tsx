"use client";

import { useI18n } from "@/context/LanguageContext";
import type { SupportedLocale } from "@/types/i18n";
import { motion } from "framer-motion";
import type React from "react";
import { EASE_EDITORIAL } from "./MotionWrapper";

const languages: { code: SupportedLocale; label: string; full: string }[] = [
  { code: "tr", label: "TR", full: "Türkçe" },
  { code: "en", label: "EN", full: "English" },
  { code: "ku", label: "KU", full: "Kurdî" },
];

interface LanguageSwitcherProps {
  className?: string;
  size?: "sm" | "md";
}

export function LanguageSwitcher({ className = "", size = "sm" }: LanguageSwitcherProps) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      role="radiogroup"
      aria-label="Dil seçimi / Language selector"
      className={`inline-flex items-center p-0.5 rounded-md bg-surface/90 border border-hairline text-ink-muted ${className}`}
    >
      {languages.map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            role="radio"
            aria-checked={isActive}
            title={lang.full}
            onClick={() => setLocale(lang.code)}
            className={`relative font-mono uppercase tracking-wider transition-colors duration-200 z-10 ${
              size === "sm" ? "px-2 py-1 text-[11px]" : "px-3 py-1.5 text-xs"
            } ${isActive ? "text-canvas font-semibold" : "hover:text-ink text-ink-muted"}`}
          >
            {isActive && (
              <motion.span
                layoutId="activeLangPill"
                className="absolute inset-0 bg-ink rounded-[4px] -z-10 shadow-xs"
                transition={{ duration: 0.3, ease: EASE_EDITORIAL }}
              />
            )}
            <span>{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
}
