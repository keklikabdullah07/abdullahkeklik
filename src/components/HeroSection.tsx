"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Terminal } from "lucide-react";
import Image from "next/image";
import type React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* İmzalı Logo Monogramı */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex justify-center"
        >
          <div className="relative group p-3">
            <div className="absolute inset-0 bg-brand/15 blur-2xl rounded-full opacity-60 group-hover:opacity-90 transition-opacity" />
            <Image
              src="/logo.png"
              alt="Abdullah Keklik"
              width={260}
              height={147}
              className="relative h-20 sm:h-24 w-auto object-contain filter drop-shadow-[0_8px_24px_rgba(255,255,255,0.12)]"
              priority
            />
          </div>
        </motion.div>

        {/* Durum ve Unvan Rozeti */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-silver-glow bg-surface/90 backdrop-blur-md text-xs text-ink mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand shadow-[0_0_8px_#10b981]" />
          </span>
          <span className="font-mono text-xs tracking-wide">
            Sistem Mimarı & Creative Technologist
          </span>
        </motion.div>

        {/* Karakterli ve Özgün Başlık */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 max-w-3xl"
        >
          <span className="text-silver-chrome">Yüksek verimli mimariler,</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-glow to-emerald-300">
            akışkan mikro-etkileşimler.
          </span>
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

        {/* Yüksek Kontrastlı Parlayan CTA Butonları */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#showcase"
            className="btn-emerald-glow inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold rounded-lg transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer"
          >
            <Sparkles className="w-4 h-4 fill-current text-canvas" aria-hidden="true" />
            <span className="tracking-wide text-canvas">İnteraktif Vitrini İncele</span>
            <ArrowDown className="w-4 h-4 text-canvas" aria-hidden="true" />
          </a>

          <a
            href="#contact"
            className="btn-silver-glow inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-brand" aria-hidden="true" />
            <span>İletişime Geç</span>
          </a>
        </motion.div>

        {/* Teknoloji Çipleri */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-ink-subtle"
        >
          <span className="px-3 py-1 rounded-full bg-surface/60 border border-hairline hover:border-silver-glow transition-colors">
            Next.js 15
          </span>
          <span className="px-3 py-1 rounded-full bg-surface/60 border border-hairline hover:border-silver-glow transition-colors">
            TypeScript
          </span>
          <span className="px-3 py-1 rounded-full bg-surface/60 border border-hairline hover:border-silver-glow transition-colors">
            Go / Rust
          </span>
          <span className="px-3 py-1 rounded-full bg-surface/60 border border-hairline hover:border-silver-glow transition-colors">
            Framer Motion
          </span>
          <span className="px-3 py-1 rounded-full bg-surface/60 border border-hairline hover:border-silver-glow transition-colors">
            Tailwind CSS
          </span>
        </motion.div>
      </div>
    </section>
  );
};
