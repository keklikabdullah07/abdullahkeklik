"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Terminal } from "lucide-react";
import Image from "next/image";
import type React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* İmzalı Monogram Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex justify-center"
        >
          <div className="relative group p-2">
            <div className="absolute inset-0 bg-brand/10 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
            <Image
              src="/logo.png"
              alt="Abdullah Keklik"
              width={260}
              height={147}
              className="relative h-20 sm:h-24 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(255,255,255,0.08)]"
              priority
            />
          </div>
        </motion.div>

        {/* Durum Rozeti */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-hairline bg-surface/80 backdrop-blur-sm text-xs text-ink-muted mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
          </span>
          <span className="font-mono text-xs">Açık Kaynak & Kurumsal İnovasyon</span>
        </motion.div>

        {/* Başlık ve Manifesto */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ink leading-[1.1] mb-6 max-w-3xl"
        >
          Yüksek performanslı sistemler ve{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-glow to-emerald-400">
            akıcı deneyimler
          </span>{" "}
          inşa ediyorum.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed mb-10"
        >
          Bireysel açık kaynak projelerden kurumsal yüksek ölçekli dağıtık mimarilere; kararlı
          modernizm, sıfır yapay süsleme ve derin mühendislik zanaatı ile çözümler üretiyorum.
        </motion.p>

        {/* Eylem Butonları (Tek Etkileşimli Varlık İlkesi) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-canvas bg-brand hover:bg-brand-hover active:bg-brand-active active:translate-y-[1px] rounded-lg shadow-button transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Projeleri İncele</span>
            <ArrowDown className="w-4 h-4 opacity-75" aria-hidden="true" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-ink bg-surface hover:bg-surface-raised border border-hairline rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Terminal className="w-4 h-4 text-brand" aria-hidden="true" />
            <span>İletişime Geç</span>
          </a>
        </motion.div>

        {/* Teknoloji Rozetleri */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-ink-subtle"
        >
          <span className="px-2.5 py-1 rounded bg-surface/40 border border-hairline">
            Next.js 15
          </span>
          <span className="px-2.5 py-1 rounded bg-surface/40 border border-hairline">
            TypeScript
          </span>
          <span className="px-2.5 py-1 rounded bg-surface/40 border border-hairline">Go</span>
          <span className="px-2.5 py-1 rounded bg-surface/40 border border-hairline">Rust</span>
          <span className="px-2.5 py-1 rounded bg-surface/40 border border-hairline">
            Framer Motion
          </span>
          <span className="px-2.5 py-1 rounded bg-surface/40 border border-hairline">
            Tailwind CSS
          </span>
        </motion.div>
      </div>
    </section>
  );
};
