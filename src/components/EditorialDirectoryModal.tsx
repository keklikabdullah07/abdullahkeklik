"use client";

import { useI18n } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type React from "react";
import { useEffect } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { EASE_EDITORIAL } from "./MotionWrapper";

interface EditorialDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  timeString: string;
}

export function EditorialDirectoryModal({
  isOpen,
  onClose,
  timeString,
}: EditorialDirectoryModalProps) {
  const { t } = useI18n();

  const directoryItems = [
    {
      number: "01",
      label: t.directoryModal.worksLabel,
      sublabel: t.directoryModal.worksSub,
      anchor: "#curated-works",
      meta: t.directoryModal.worksMeta,
    },
    {
      number: "02",
      label: t.directoryModal.manifestoLabel,
      sublabel: t.directoryModal.manifestoSub,
      anchor: "#manifesto",
      meta: t.directoryModal.manifestoMeta,
    },
    {
      number: "03",
      label: t.directoryModal.bioLabel,
      sublabel: t.directoryModal.bioSub,
      anchor: "#about",
      meta: t.directoryModal.bioMeta,
    },
    {
      number: "04",
      label: t.directoryModal.contactLabel,
      sublabel: t.directoryModal.contactSub,
      anchor: "#contact",
      meta: t.directoryModal.contactMeta,
    },
  ];

  // ESC tuşunu dinle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleSelect = (anchor: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={t.directoryModal.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
          className="fixed inset-0 z-50 bg-canvas/95 backdrop-blur-2xl text-ink flex flex-col justify-between p-6 sm:p-10 md:p-14 overflow-y-auto"
        >
          {/* Üst Mimari Künye & Kapat Butonu */}
          <div className="flex items-center justify-between border-b border-hairline pb-6 text-xs font-mono uppercase tracking-wider text-ink-muted">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-ink font-semibold">{t.directoryModal.title}</span>
              <span className="hidden md:inline text-ink-muted">· [FOLIO 2026]</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface hover:bg-surface-raised border border-hairline text-ink transition-all duration-200 active:scale-95"
            >
              <span className="text-[11px] font-mono tracking-widest text-ink-muted group-hover:text-primary transition-colors">
                {t.directoryModal.close}
              </span>
              <div className="w-5 h-5 rounded-full bg-canvas border border-hairline flex items-center justify-center text-ink group-hover:text-primary transition-colors">
                <X className="w-3 h-3" />
              </div>
            </button>
          </div>

          {/* Ana Heykelsi Dizin Listesi (Büyük Tipografi) */}
          <div className="my-auto py-12 max-w-5xl w-full mx-auto">
            <div className="divide-y divide-hairline">
              {directoryItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 * (index + 1),
                    ease: EASE_EDITORIAL,
                  }}
                  className="group py-6 sm:py-8 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => handleSelect(item.anchor)}
                    className="w-full text-left flex flex-col md:flex-row md:items-baseline justify-between gap-3 group-hover:pl-3 transition-all duration-300"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-8">
                      <span className="font-mono text-sm sm:text-lg text-primary font-bold">
                        [{item.number}]
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors font-sans">
                          {item.label}
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-ink-muted mt-1 group-hover:text-ink-body transition-colors">
                          {item.sublabel}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 self-end md:self-auto pt-2 md:pt-0">
                      <span className="text-[11px] font-mono text-ink-muted px-2.5 py-1 rounded bg-surface border border-hairline">
                        {item.meta}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center text-ink-muted group-hover:bg-primary group-hover:border-primary group-hover:text-primary-contrast group-hover:rotate-45 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Modal İçi Dil Seçimi */}
            <div className="mt-12 pt-8 border-t border-hairline/60 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
                {t.directoryModal.selectLanguage}:
              </span>
              <LanguageSwitcher size="md" />
            </div>
          </div>

          {/* Alt Künye & Canlı Telemetri */}
          <div className="pt-6 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
            <div className="flex items-center gap-4">
              <span>URFA 37°09&apos;N</span>
              <span>·</span>
              <span>
                LOCAL TIME: {timeString} {t.header.localTime}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/keklikabdullah07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GITHUB
              </a>
              <a
                href="https://gitlab.com/keklikabdullah07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GITLAB
              </a>
              <a
                href="https://www.linkedin.com/in/keklikabdullah/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
