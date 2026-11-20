"use client";

import { useI18n } from "@/context/LanguageContext";
import { FIELD_NOTES_DATA, type FieldNote } from "@/data/fieldNotes";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Calendar, Clock, X } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

export function FieldNotes() {
  const { t, locale } = useI18n();
  const [activeArticle, setActiveArticle] = useState<FieldNote | null>(null);

  // ESC dinleyicisi
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeArticle) {
        setActiveArticle(null);
      }
    };
    if (activeArticle) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeArticle]);

  return (
    <section
      id="field-notes"
      aria-label={t.fieldNotes.title}
      className="w-full py-24 sm:py-32 px-6 md:px-12 border-b border-hairline/60 bg-canvas transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Bölüm Başlığı */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface border border-hairline font-mono text-[11px] uppercase tracking-wider text-ink-muted">
            <BookOpen className="w-3.5 h-3.5 text-primary" />
            <span>{t.fieldNotes.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink font-sans">
            {t.fieldNotes.title}
          </h2>
          <p className="text-sm sm:text-base font-sans text-body-muted leading-relaxed">
            {t.fieldNotes.subtitle}
          </p>
        </div>

        {/* 3 Sütunlu Editoryal Makale Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {FIELD_NOTES_DATA.map((article, index) => {
            const localized = article[locale] || article.tr;

            return (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="bg-surface/60 hover:bg-surface border border-hairline hover:border-hairline-strong rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group"
              >
                <div>
                  {/* Kategori ve Okuma Süresi */}
                  <div className="flex items-center justify-between gap-2 mb-4 text-[10px] font-mono text-ink-muted uppercase">
                    <span className="px-2 py-0.5 rounded bg-canvas border border-hairline text-primary font-semibold">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 tabular-nums">
                      <Clock className="w-3 h-3 text-ink-muted" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Başlık */}
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-ink tracking-tight mb-3 leading-snug group-hover:text-primary transition-colors">
                    {localized.title}
                  </h3>

                  {/* Özet */}
                  <p className="text-xs sm:text-sm font-sans text-body-muted leading-relaxed line-clamp-3 mb-6">
                    {localized.excerpt}
                  </p>
                </div>

                {/* Alt Kısım: Tarih ve Oku Butonu */}
                <div className="pt-4 border-t border-hairline/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-[11px] text-ink-muted tabular-nums">{article.date}</span>

                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1.5 text-primary hover:text-ink font-semibold uppercase tracking-wider transition-colors cursor-pointer text-[11px]"
                  >
                    <span>{t.fieldNotes.readArticle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Editoryal Okuma Modalı (Drawer / Reader) */}
      <AnimatePresence>
        {activeArticle && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={(activeArticle[locale] || activeArticle.tr).title}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="fixed inset-0 bg-ink/50 backdrop-blur-sm"
            />

            {/* Okuma Konteyneri */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 15 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-canvas border border-hairline-strong rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Üst Çubuk */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-hairline bg-surface/50">
                <div className="flex items-center gap-3 font-mono text-xs text-ink-muted">
                  <span className="px-2 py-0.5 rounded bg-surface border border-hairline text-primary font-semibold text-[10px] uppercase">
                    {activeArticle.category}
                  </span>
                  <span>{activeArticle.readTime}</span>
                  <span>·</span>
                  <span className="tabular-nums">{activeArticle.date}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-surface transition-colors cursor-pointer"
                  aria-label={t.fieldNotes.closeArticle}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Makale Gövdesi */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6">
                <h1 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-ink leading-tight">
                  {(activeArticle[locale] || activeArticle.tr).title}
                </h1>

                {/* Özet Vurgusu */}
                <div className="p-4 rounded-xl bg-surface/70 border border-hairline font-sans text-sm sm:text-base text-ink italic leading-relaxed">
                  {(activeArticle[locale] || activeArticle.tr).excerpt}
                </div>

                {/* Paragraflar */}
                <div className="space-y-4 font-sans text-sm sm:text-base text-body leading-relaxed">
                  {(activeArticle[locale] || activeArticle.tr).content.map((paragraph, idx) => (
                    <p key={`para-${activeArticle.id}-${idx}`}>{paragraph}</p>
                  ))}
                </div>

                {/* Temel Mimari Çıkarımlar Kutusu */}
                <div className="mt-8 p-5 sm:p-6 rounded-xl bg-surface border border-hairline-strong space-y-3 font-mono">
                  <div className="text-xs text-primary font-bold uppercase tracking-wider">
                    {`// ${t.fieldNotes.keyTakeawaysLabel}`}
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-ink list-disc list-inside">
                    {(activeArticle[locale] || activeArticle.tr).takeaways.map((point, pIdx) => (
                      <li key={`takeaway-${activeArticle.id}-${pIdx}`} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Alt Bilgi */}
              <div className="px-6 py-3 border-t border-hairline bg-surface/30 flex items-center justify-between text-xs font-mono text-ink-muted">
                <span>ABDULLAH KEKLİK {"//"} ENGINEERING ESSAY</span>
                <span>{t.fieldNotes.closeArticle}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
