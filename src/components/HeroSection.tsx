"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Terminal } from "lucide-react";
import type React from "react";
import { BirdEmblem } from "./BirdEmblem";
import { KineticHeading } from "./KineticHeading";
import { MagneticButton } from "./MagneticButton";
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
    <section className="relative pt-12 pb-16 md:pt-24 md:pb-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Kuş & Yazılım Etkileşimli Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <BirdEmblem />
        </motion.div>

        {/* Durum Rozeti */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-[#121722]/80 backdrop-blur-md text-xs text-[#FAF9F6] mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D9532F] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D9532F] shadow-[0_0_8px_#D9532F]" />
          </span>
          <span className="font-mono text-xs tracking-wide text-[#7A7265] font-medium">
            Sistem Mimarı &amp; Creative Technologist
          </span>
        </motion.div>

        {/* Karakterli Kinetik Editoryal Başlık */}
        <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 max-w-3xl">
          <KineticHeading as="h1" className="justify-center text-[#FAF9F6]" delay={0.2}>
            Yüksek verimli mimariler,
          </KineticHeading>
          <br className="hidden sm:inline" />
          <KineticHeading as="span" className="justify-center text-[#D9532F]" delay={0.35}>
            akışkan mikro-etkileşimler.
          </KineticHeading>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed mb-10"
        >
          Dağıtık arka uç omurgasından Awwwards kalitesinde web deneyimlerine; rüştünü ispatlamış
          teknolojiler ve derin mühendislik zanaatıyla fikirleri yaşayan dijital ürünlere
          dönüştürüyorum.
        </motion.p>

        {/* Chukar Dokunsal & Manyetik CTA Butonları */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <MagneticButton href="#showcase" variant="primary" ariaLabel="İnteraktif Vitrini İncele">
            <Sparkles className="w-4 h-4 fill-current text-white" aria-hidden="true" />
            <span>İnteraktif Vitrini İncele</span>
            <ArrowDown className="w-4 h-4 text-white" aria-hidden="true" />
          </MagneticButton>

          <MagneticButton href="#contact" variant="outline" ariaLabel="İletişime Geç">
            <Terminal className="w-4 h-4 text-[#D9532F]" aria-hidden="true" />
            <span>İletişime Geç</span>
          </MagneticButton>
        </motion.div>

        {/* Dokunsal / Manyetik Fiziksel Teknoloji Pulları */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
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
