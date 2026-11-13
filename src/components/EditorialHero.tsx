"use client";

import { ArrowDownRight } from "lucide-react";
import type React from "react";

export function EditorialHero() {
  return (
    <section className="relative w-full pt-16 md:pt-28 pb-20 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-between">
      {/* Üst İndeks Künyesi */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-6 text-xs font-mono text-ink-muted uppercase tracking-wider">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-surface border border-hairline text-ink font-medium">
            INDEX / 2026
          </span>
          <span>FOLIO OF ABDULLAH KEKLİK</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline">DISCIPLINE: CREATIVE TECH & DESIGN</span>
          <span className="text-primary font-medium">[ARCHIVE V4]</span>
        </div>
      </div>

      {/* Ana Heykelsi Tipografi Alanı */}
      <div className="my-16 md:my-24">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-ink leading-[0.92] select-none">
          ABDULLAH
          <br />
          <span className="inline-block relative">
            KEKLİK
            <span className="inline-block w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary ml-3 md:ml-6 align-baseline" />
          </span>
        </h1>

        {/* Editoryal Manifesto & Zanaat Açıklaması */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <p className="text-xl sm:text-2xl md:text-3xl font-normal text-ink-body leading-relaxed font-sans">
              Mezopotamya&apos;nın kadim taş işçiliği ve sakin mimarisini, çağdaş dijital etkileşim
              mühendisliğiyle buluşturan yaşayan portfolyo.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col justify-between gap-6 md:border-l md:border-hairline md:pl-8">
            <p className="text-sm text-ink-muted leading-relaxed">
              Jenerik yapay zeka şablonları yerine; sessiz lüks, cömert negatif alan, saf tipografi
              ve pürüzsüz eylemsiz kaydırma disiplini.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#curated-works"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-md bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-contrast font-mono text-xs uppercase tracking-wider transition-all duration-200 shadow-sm active:translate-y-[1px]"
              >
                <span>ARŞİVİ KEŞFET</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3.5 rounded-md bg-surface hover:bg-surface-raised border border-hairline text-ink font-mono text-xs uppercase tracking-wider transition-all duration-200 active:translate-y-[1px]"
              >
                <span>İLETİŞİM</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Onaylanan 5 Renk Paleti İmzası (Görsel Zemin Doğrulaması) */}
      <div className="pt-8 border-t border-hairline grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="p-3 rounded-lg bg-canvas border border-hairline">
          <div className="text-[10px] font-mono text-ink-muted uppercase">ZEMİN</div>
          <div className="text-xs font-mono font-medium text-ink mt-1">#F4EFE6</div>
          <div className="text-[11px] text-ink-muted">Nahit Taşı & Keten</div>
        </div>

        <div className="p-3 rounded-lg bg-surface border border-hairline">
          <div className="text-[10px] font-mono text-ink-muted uppercase">YÜZEY / KART</div>
          <div className="text-xs font-mono font-medium text-ink mt-1">#EAE1D2</div>
          <div className="text-[11px] text-ink-muted">Sıcak Kumtaşı</div>
        </div>

        <div className="p-3 rounded-lg bg-surface border border-hairline">
          <div className="text-[10px] font-mono text-ink-muted uppercase">TİPOGRAFİ</div>
          <div className="text-xs font-mono font-medium text-ink mt-1">#1C1613</div>
          <div className="text-[11px] text-ink-muted">Kavrulmuş Espresso</div>
        </div>

        <div className="p-3 rounded-lg bg-primary text-primary-contrast">
          <div className="text-[10px] font-mono opacity-80 uppercase">BİRİNCİL VURGU</div>
          <div className="text-xs font-mono font-medium mt-1">#C8532B</div>
          <div className="text-[11px] opacity-90">Kınalı Keklik Kınası</div>
        </div>

        <div className="p-3 rounded-lg bg-surface border border-hairline">
          <div className="text-[10px] font-mono text-amber uppercase">İKİNCİL VURGU</div>
          <div className="text-xs font-mono font-medium text-ink mt-1">#D88934</div>
          <div className="text-[11px] text-ink-muted">Mezopotamya Kehribarı</div>
        </div>
      </div>
    </section>
  );
}
