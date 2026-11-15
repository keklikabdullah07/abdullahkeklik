"use client";

import { useI18n } from "@/context/LanguageContext";
import { Award, Check, Compass, Cpu, Feather, History, Shield, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";
import { RevealOnScroll } from "./MotionWrapper";

interface Principle {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Shield;
}

const principles: Principle[] = [
  {
    number: "01",
    title: "Boring Technology & Sağlam Omurga",
    subtitle: "Rüştünü İspatlamış Temeller",
    description:
      "Her gün yeni çıkan kırılgan kütüphaneler yerine; PostgreSQL, Linux, TypeScript ve LTS standartlarıyla kaya gibi sağlam, 10 yıl sonra da dimdik ayakta duracak sistemler inşa ederim.",
    icon: Shield,
  },
  {
    number: "02",
    title: "Craft Over Noise (Sessiz Lüks)",
    subtitle: "Yapay Zeka Şablonlarının Reddi",
    description:
      "Tekdüze mor-mavi gradyanları, sahte süsleri ve ruhsuz AI şablonlarını reddederim. Keten dokusu, Nahit Taşı sıcaklığı ve saf tipografinin heykelsi gücüne inanırım.",
    icon: Feather,
  },
  {
    number: "03",
    title: "Zero-GC / 60 FPS Titizliği",
    subtitle: "Düşük Seviyeli Performans Hassasiyeti",
    description:
      "Kullanıcının gözü 16 milisaniyelik gecikmeyi hisseder. Bellek tahsisini optimize eden, çöp toplayıcı duraklamalarını sıfırlayan ve tarayıcıyı kasmayan kod yazarım.",
    icon: Cpu,
  },
];

interface Milestone {
  year: string;
  role: string;
  organization: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2026",
    role: "Creative Technologist & Bağımsız Mühendis",
    organization: "Abdullah Keklik Studio · Urfa / Global",
    description:
      "Awwwards kalitesinde yaşayan editoryal vitrinler, tipografik tasarım sistemleri ve sıfır-GC Chukar açık kaynak kural motoru mimarisi.",
  },
  {
    year: "2025",
    role: "Sistem & Etkileşim Mühendisliği",
    organization: "Açık Kaynak & Bağımsız Girişimler",
    description:
      "C# .NET 9 ile kriptografik veri mühürleme omurgası (BloodSeal) ve gerçek zamanlı işbirliği ekosistemi (weCAN) geliştirilmesi.",
  },
  {
    year: "2024",
    role: "Frontend Mimarisi & Analitik Arayüzler",
    organization: "Özel Tasarım & Web Çözümleri",
    description:
      "KidsCare çocuk gelişim pedagoji arayüzü, Ismail Portfoy finansal analiz paneli ve Next.js tabanlı taktil bileşen mimarileri.",
  },
];

export function EditorialBio() {
  const { t } = useI18n();

  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-hairline transition-colors"
    >
      {/* Üst Dizin Künyesi */}
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-hairline">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-ink-muted uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" />
              <span>{t.bio.sectionBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink font-sans leading-[1.05]">
              {t.bio.title1}
              <br />
              <span className="text-ink-body font-light">{t.bio.title2}</span>
            </h2>
          </div>

          <p className="text-sm font-sans text-ink-muted max-w-md leading-relaxed">
            {t.bio.subtitle}
          </p>
        </div>
      </RevealOnScroll>

      {/* 1. Katman: Kadim Kökler & Manifestal Anlatı (2 Kolon) */}
      <RevealOnScroll delay={0.1}>
        <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-b border-hairline">
          {/* Sol: Büyük Alıntı & Amblem */}
          <div className="lg:col-span-5 space-y-8">
            {/* Müze Kalitesinde Zanaat Plaketi & Lüks Kınalı Keklik Amblemi */}
            <div className="p-6 rounded-2xl bg-surface border border-hairline shadow-warm flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:border-primary/50 transition-all duration-300">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-canvas border border-hairline/80 shadow-md ring-1 ring-primary/20 group-hover:ring-primary/60 transition-all duration-500">
                <Image
                  src="/chukar_partridge_luxury_emblem.jpg"
                  alt="Kınalı Keklik (Chukar Partridge) Lüks Zanaat Amblemi"
                  fill
                  sizes="(max-width: 640px) 112px, 128px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-amber/10 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col justify-between h-full py-1 text-center sm:text-left">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-[10px] font-mono text-primary uppercase tracking-widest mb-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span>{t.bio.specimenLabel}</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink font-sans">{t.bio.totemTitle}</h3>
                  <p className="text-xs font-sans text-ink-muted mt-1 leading-relaxed">
                    {t.bio.totemDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-hairline/60 flex items-center justify-center sm:justify-start gap-3 text-[11px] font-mono text-ink-muted">
                  <span>37°09&apos;N</span>
                  <span className="inline-block w-1 h-1 rounded-full bg-hairline" />
                  <span>{t.bio.totemMeta}</span>
                </div>
              </div>
            </div>

            <blockquote className="text-2xl sm:text-3xl font-light text-ink font-sans leading-snug">
              &ldquo;{t.bio.quote}{" "}
              <span className="font-semibold text-primary">{t.bio.quoteHighlight}</span>
              &rdquo;
            </blockquote>

            <div className="flex items-center gap-4 text-xs font-mono text-ink-muted pt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              <span>{t.bio.chukarLabel}</span>
            </div>
          </div>

          {/* Sağ: Biyografik Anlatı */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-ink-body font-sans leading-relaxed">
            <p>{t.bio.narrativeP1}</p>
            <p>{t.bio.narrativeP2}</p>
            <p className="text-sm font-mono text-ink-muted pt-4 border-t border-hairline/60">
              {t.bio.narrativeFocus}
            </p>
          </div>
        </div>
      </RevealOnScroll>

      {/* 2. Katman: 3 Çelik İlke (3 Kolonlu Kart Izgarası) */}
      <div className="py-16 md:py-24 border-b border-hairline">
        <RevealOnScroll>
          <div className="flex items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-2">
                {t.bio.principlesBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-sans">
                {t.bio.principlesTitle}
              </h3>
            </div>
            <span className="hidden sm:inline text-xs font-mono text-ink-muted">
              [ 03 DEĞİŞMEZ KURAL ]
            </span>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <RevealOnScroll key={principle.number} delay={idx * 0.1}>
                <div className="group p-8 rounded-xl bg-surface border border-hairline hover:border-primary transition-all duration-300 hover:shadow-warm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono text-primary font-semibold">
                        [{principle.number}]
                      </span>
                      <div className="p-2.5 rounded-lg bg-canvas border border-hairline text-ink-muted group-hover:text-primary transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-ink font-sans tracking-tight mb-2 group-hover:text-primary transition-colors">
                      {principle.title}
                    </h4>
                    <div className="text-xs font-mono text-amber font-medium mb-4">
                      {principle.subtitle}
                    </div>

                    <p className="text-sm text-ink-body font-sans leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>

      {/* 3. Katman: Seçilmiş Dönüm Noktaları (Zaman Çizelgesi) */}
      <RevealOnScroll>
        <div className="pt-16 md:pt-24">
          <div className="flex items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono text-amber uppercase tracking-widest block mb-2">
                {t.bio.timelineBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-sans">
                {t.bio.timelineTitle}
              </h3>
            </div>
            <span className="text-xs font-mono text-ink-muted">[ 2024 — 2026 ]</span>
          </div>

          <div className="border border-hairline rounded-2xl divide-y divide-hairline bg-surface/50 overflow-hidden">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-surface transition-colors"
              >
                <div className="flex items-baseline gap-6 md:gap-10 md:w-1/3">
                  <span className="font-mono text-lg font-bold text-primary">[{m.year}]</span>
                  <div>
                    <h4 className="text-base font-bold text-ink font-sans">{m.role}</h4>
                    <p className="text-xs font-mono text-ink-muted mt-1">{m.organization}</p>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <p className="text-sm font-sans text-ink-body leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
