"use client";

import { useI18n } from "@/context/LanguageContext";
import { type RadarTier, TECH_RADAR_DATA, type TechRadarItem } from "@/data/techRadar";
import { AnimatePresence, motion } from "framer-motion";
import { Layers } from "lucide-react";
import React, { useMemo, useState } from "react";

export function ArsenalTechRadar() {
  const { t, locale } = useI18n();
  const [activeTierFilter, setActiveTierFilter] = useState<"all" | RadarTier>("all");
  const [selectedItemId, setSelectedItemId] = useState<string | null>("dotnet-csharp");

  const filteredItems = useMemo(() => {
    if (activeTierFilter === "all") return TECH_RADAR_DATA;
    return TECH_RADAR_DATA.filter((item) => item.tier === activeTierFilter);
  }, [activeTierFilter]);

  const selectedItem = useMemo(() => {
    return TECH_RADAR_DATA.find((item) => item.id === selectedItemId) || TECH_RADAR_DATA[0];
  }, [selectedItemId]);

  const getTierBadge = (tier: RadarTier) => {
    switch (tier) {
      case "adopt":
        return {
          label: "[ADOPT]",
          dotClass: "bg-emerald-600",
          colorClass: "bg-emerald-500/10 text-emerald-800 border-emerald-600/30",
        };
      case "trial":
        return {
          label: "[TRIAL]",
          dotClass: "bg-amber",
          colorClass: "bg-amber/10 text-amber border-amber/30",
        };
      case "avoid":
        return {
          label: "[AVOID]",
          dotClass: "bg-primary",
          colorClass: "bg-primary/10 text-primary border-primary/30",
        };
    }
  };

  return (
    <section
      id="tech-radar"
      aria-label={t.techRadar.title}
      className="w-full py-24 sm:py-32 px-6 md:px-12 border-b border-hairline/60 bg-canvas transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Bölüm Başlığı & Editoryal Künye */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface border border-hairline font-mono text-[11px] uppercase tracking-wider text-ink-muted">
              <Layers className="w-3.5 h-3.5 text-primary" />
              <span>{t.techRadar.sectionBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink font-sans">
              {t.techRadar.title}
            </h2>
            <p className="text-sm sm:text-base font-sans text-body-muted leading-relaxed">
              {t.techRadar.subtitle}
            </p>
          </div>

          {/* Filtre Sekmeleri */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface border border-hairline rounded-lg font-mono text-xs">
            <button
              type="button"
              onClick={() => setActiveTierFilter("all")}
              className={`px-3 py-1.5 rounded-md transition-all duration-150 uppercase tracking-wider ${
                activeTierFilter === "all"
                  ? "bg-canvas text-ink font-semibold shadow-xs border border-hairline"
                  : "text-body-muted hover:text-ink"
              }`}
            >
              [TÜMÜ / ALL]
            </button>
            <button
              type="button"
              onClick={() => setActiveTierFilter("adopt")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-150 uppercase tracking-wider ${
                activeTierFilter === "adopt"
                  ? "bg-canvas text-emerald-800 font-semibold shadow-xs border border-emerald-600/30"
                  : "text-body-muted hover:text-ink"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              ADOPT
            </button>
            <button
              type="button"
              onClick={() => setActiveTierFilter("trial")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-150 uppercase tracking-wider ${
                activeTierFilter === "trial"
                  ? "bg-canvas text-amber font-semibold shadow-xs border border-amber/30"
                  : "text-body-muted hover:text-ink"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              TRIAL
            </button>
            <button
              type="button"
              onClick={() => setActiveTierFilter("avoid")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-150 uppercase tracking-wider ${
                activeTierFilter === "avoid"
                  ? "bg-canvas text-primary font-semibold shadow-xs border border-primary/30"
                  : "text-body-muted hover:text-ink"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              AVOID
            </button>
          </div>
        </div>

        {/* Ana Izgara: Sol taraf kartlar, Sağ taraf derinlikli mimari gerekçe paneli */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sol Kolon: Bento Kartlar */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const isSelected = item.id === selectedItem.id;
                const badgeInfo = getTierBadge(item.tier);
                const localized = item[locale] || item.tr;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedItemId(item.id)}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[170px] ${
                        isSelected
                          ? "bg-surface-raised border-primary shadow-sm ring-1 ring-primary/40 -translate-y-0.5"
                          : "bg-surface/60 hover:bg-surface border-hairline hover:border-hairline-strong"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider border ${badgeInfo.colorClass}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${badgeInfo.dotClass}`} />
                            {badgeInfo.label}
                          </span>
                          <span className="text-[10px] font-mono text-ink-muted uppercase tracking-wider">
                            {item.badge}
                          </span>
                        </div>

                        <h3 className="font-mono text-base font-bold text-ink tracking-tight mb-1.5">
                          {item.name}
                        </h3>

                        <p className="text-xs font-sans text-body line-clamp-2 leading-relaxed">
                          {localized.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-hairline/40 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                        <span>{item.focus}</span>
                        <span
                          className={`text-[10px] uppercase font-semibold ${isSelected ? "text-primary" : ""}`}
                        >
                          {isSelected ? "● [İNCELE]" : "DETAY →"}
                        </span>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Sağ Kolon: Heykelsi Mimari Gerekçe İnceleme Paneli (Sticky Inspector) */}
          <div className="lg:col-span-5 sticky top-28 bg-surface-raised border border-hairline-strong rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="space-y-6">
              {/* Üst Bilgi Rozetleri */}
              <div className="flex items-center justify-between border-b border-hairline pb-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${getTierBadge(selectedItem.tier).dotClass}`}
                  />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                    {selectedItem.tier === "adopt" && t.techRadar.tierAdopt}
                    {selectedItem.tier === "trial" && t.techRadar.tierTrial}
                    {selectedItem.tier === "avoid" && t.techRadar.tierAvoid}
                  </span>
                </div>
                <span className="font-mono text-xs text-ink-muted">{selectedItem.badge}</span>
              </div>

              {/* Seçili Başlık */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-ink mb-2">
                  {selectedItem.name}
                </h3>
                <p className="text-xs font-mono text-primary uppercase tracking-wider">
                  {selectedItem.focus}
                </p>
              </div>

              {/* Tanım */}
              <div className="space-y-1.5">
                <p className="text-sm font-sans text-body leading-relaxed">
                  {(selectedItem[locale] || selectedItem.tr).description}
                </p>
              </div>

              {/* Mimari Gerekçe Kutusu */}
              <div className="p-4 sm:p-5 rounded-xl bg-canvas border border-hairline space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-mono text-primary font-bold uppercase tracking-wider">
                  <span className="text-primary font-mono select-none">{"//"}</span>
                  <span>{t.techRadar.rationaleLabel}</span>
                </div>
                <blockquote className="text-xs sm:text-sm font-mono text-ink italic leading-relaxed">
                  &ldquo;{(selectedItem[locale] || selectedItem.tr).rationale}&rdquo;
                </blockquote>
              </div>

              {/* Kademe Açıklaması */}
              <div className="pt-2 text-[11px] font-mono text-body-muted leading-relaxed border-t border-hairline/60">
                {selectedItem.tier === "adopt" && t.techRadar.tierAdoptSub}
                {selectedItem.tier === "trial" && t.techRadar.tierTrialSub}
                {selectedItem.tier === "avoid" && t.techRadar.tierAvoidSub}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
