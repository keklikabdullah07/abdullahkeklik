"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Terminal } from "lucide-react";
import type React from "react";
import { BirdEmblem } from "./BirdEmblem";
import { MagneticPill } from "./MagneticPill";

export const HeroSection: React.FC = () => {
  const techPills = [
    "Next.js 15 (App Router)",
    "TypeScript",
    "Go & Rust",
    "Framer Motion",
    "Tailwind CSS",
    "Distributed Systems",
  ];

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Kuş & Yazılım Etkileşimli Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <BirdEmblem />
        </motion.div>

        {/* Durum Rozeti */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-fawn-subtle bg-surface/90 backdrop-blur-md text-xs text-ink mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand shadow-[0_0_6px_#e84d38]" />
          </span>
          <span className="font-mono text-xs tracking-wide text-fawn font-medium">
            Sistem Mimarı & Creative Technologist
          </span>
        </motion.div>

        {/* Karakterli ve Editoryal Başlık */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.14] mb-6 max-w-3xl"
        >
          <span className="text-[#F6F1E8]">Yüksek verimli mimariler,</span>{" "}
          <br className="hidden sm:inline" />
          <span className="text-brand">akışkan mikro-etkileşimler.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed mb-10"
        >
          Dağıtık arka uç omurgasından Awwwards kalitesinde web deneyimlerine; rüştünü ispatlamış
          teknolojiler ve derin mühendislik zanaatıyla fikirleri yaşayan dijital ürünlere
          dönüştürüyorum.
        </motion.p>

        {/* Chukar Dokunsal Mercan & Keten CTA Butonları */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#showcase"
            className="btn-coral inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold rounded-xl transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer"
          >
            <Sparkles className="w-4 h-4 fill-current text-white" aria-hidden="true" />
            <span className="tracking-wide text-white">İnteraktif Vitrini İncele</span>
            <ArrowDown className="w-4 h-4 text-white" aria-hidden="true" />
          </a>

          <a
            href="#contact"
            className="btn-fawn-outline inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-brand" aria-hidden="true" />
            <span>İletişime Geç</span>
          </a>
        </motion.div>

        {/* Dokunsal / Manyetik Fiziksel Teknoloji Pulları */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-2.5"
        >
          {techPills.map((pill) => (
            <MagneticPill key={pill} label={pill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
