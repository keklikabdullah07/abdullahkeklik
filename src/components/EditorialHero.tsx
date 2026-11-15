"use client";

import { ArrowDownRight } from "lucide-react";
import type React from "react";
import { HeroMedallionVideo } from "./HeroMedallionVideo";

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

      {/* Ana Heykelsi Tipografi ve 3D Madalyon Alanı */}
      <div className="my-16 md:my-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-16">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-ink leading-[0.92] select-none text-left w-full lg:w-auto">
            ABDULLAH
            <br />
            <span className="inline-block relative">
              KEKLİK
              <span className="inline-block w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary ml-3 md:ml-6 align-baseline" />
            </span>
          </h1>

          <div className="flex-shrink-0 flex items-center justify-center">
            <HeroMedallionVideo />
          </div>
        </div>

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
    </section>
  );
}
