"use client";

import { ArrowUpRight, Compass, Cpu, Layers, Sparkles } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { RevealOnScroll } from "./MotionWrapper";

interface Discipline {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const disciplines: Discipline[] = [
  {
    id: "disc-1",
    number: "01",
    title: "Creative Web Architecture",
    subtitle: "Awwwards SOTD Düzeyinde Yaşayan Arayüzler",
    description:
      "Statik şablonları reddeden; eylemsiz kaydırma ritmi (Lenis), maskeli kinetik tipografi ve dokunsal mikro-etkileşimlerle akıcı dijital vitrinler.",
    stack: ["React 19", "Next.js", "Framer Motion", "Lenis", "Tailwind"],
    icon: Sparkles,
  },
  {
    id: "disc-2",
    number: "02",
    title: "High-Performance Systems",
    subtitle: "Sıfır Bellek Baskısı & 60 FPS Garantisi",
    description:
      "Arka planda çöp toplayıcı (GC) duraksamalarını sıfırlayan nesne havuzu (object pooling), Rust FFI entegrasyonları ve yüksek verimli veri hatları.",
    stack: ["TypeScript", "Rust / WASM", "Go", "Kafka", "PostgreSQL"],
    icon: Cpu,
  },
  {
    id: "disc-3",
    number: "03",
    title: "Tactile Design Systems",
    subtitle: "WCAG 2.1 AA Uyumlu Tipografik Sözlük",
    description:
      "Tasarım token'larını (DESIGN.md) koda mühürleyen, klavye ile kusursuz gezilebilen ve görme engelli erişilebilirliğini ön planda tutan mimari.",
    stack: ["Design Tokens", "Radix Primitives", "A11y-First", "Storybook"],
    icon: Layers,
  },
  {
    id: "disc-4",
    number: "04",
    title: "Desktop-Grade Web Studios",
    subtitle: "Figma & pdfme Kalibresinde Tarayıcı Araçları",
    description:
      "Kök SVG ve dinamik tuval üzerinde 8 noktalı tutamaçlarla boyutlandırılabilen, sürükle-bırak destekli eklenti tabanlı görsel stüdyo editörleri.",
    stack: ["SVG Primitives", "Canvas Transforms", "Schema Plugins", "Zod"],
    icon: Compass,
  },
];

export function TypographicManifesto() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="manifesto"
      className="relative w-full py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-hairline"
    >
      {/* 2 Sütunlu Asimetrik Editoryal Izgara */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Sol Sütun: Heykelsi Manifesto & Zanaat Felsefesi */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <RevealOnScroll>
            <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              <span>SECTION [03] — ETHOS &amp; CRAFT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-sans leading-[1.08]">
              Bin yıllık taş işçiliği ile modern web kodları.
            </h2>

            <div className="mt-8 space-y-5 text-sm sm:text-base font-sans text-ink-body leading-relaxed">
              <p>
                Mezopotamya&apos;nın ilk yazılı taş tabletlerindeki dingin geometriyi; modern web
                mühendisliği, sıfır-çöp bellek disiplini ve masaüstü sınıfı etkileşimlerle
                harmanlıyoruz.
              </p>
              <p className="text-ink-muted text-sm">
                Yapay zekanın ürettiği tekdüze mor gradyanlar ve 3 kutucuklu klişeler yerine; sessiz
                lüks, taktil sıcaklık ve tavizsiz mühendislik kalitesi.
              </p>
            </div>

            {/* Künye & Felsefe İmzası */}
            <div className="mt-10 pt-8 border-t border-hairline flex items-center justify-between text-xs font-mono text-ink-muted">
              <span className="text-ink font-medium">ABDULLAH KEKLİK</span>
              <span className="text-primary font-medium">[DISCIPLINE CODEX]</span>
            </div>
          </RevealOnScroll>
        </div>

        {/* Sağ Sütun: 1px Kılcal Çizgilerle Ayrılmış 4 Uzmanlık Alanı */}
        <div className="lg:col-span-7 divide-y divide-hairline">
          {disciplines.map((disc, idx) => {
            const isHovered = hoveredId === disc.id;
            const Icon = disc.icon;

            return (
              <RevealOnScroll key={disc.id} delay={idx * 0.08}>
                <div
                  onMouseEnter={() => setHoveredId(disc.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`py-8 md:py-10 transition-all duration-300 ${
                    isHovered ? "bg-surface/50 px-6 -mx-6 rounded-xl" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-primary font-bold">
                        [{disc.number}]
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight font-sans">
                        {disc.title}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border border-hairline flex items-center justify-center transition-colors duration-200 ${
                        isHovered
                          ? "bg-primary border-primary text-primary-contrast"
                          : "text-ink-muted"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-xs font-mono text-amber mt-2 tracking-wide">
                    {disc.subtitle}
                  </div>

                  <p className="text-sm font-sans text-ink-body mt-3 leading-relaxed">
                    {disc.description}
                  </p>

                  {/* Teknoloji Künyesi */}
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-hairline/60">
                    {disc.stack.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-canvas border border-hairline text-ink-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
