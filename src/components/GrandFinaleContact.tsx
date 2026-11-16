"use client";

import { useI18n } from "@/context/LanguageContext";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { RevealOnScroll } from "./MotionWrapper";

export function GrandFinaleContact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  const email = "keklikabdullah07@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-canvas-alt text-canvas pt-28 md:pt-36 pb-16 px-6 md:px-12 mt-16 transition-colors overflow-hidden"
    >
      {/* İnce Arka Plan Taktil Işıltısı */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between">
        {/* Üst Dizin Künyesi */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-8 text-xs font-mono uppercase tracking-widest text-canvas/60">
          <div className="flex items-center gap-3">
            <span>{t.contact.sectionBadge}</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">{t.contact.statusBadge}</span>
            <span className="text-amber font-medium">[OPEN TO WORK]</span>
          </div>
        </div>

        {/* Delta Cafés Cesaretinde Devasa Başlık */}
        <RevealOnScroll>
          <div className="my-20 md:my-28">
            <p className="text-sm md:text-base font-mono text-primary uppercase tracking-wider mb-6">
              {t.contact.tagline}
            </p>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-canvas leading-[0.95] select-none font-sans">
              LET&apos;S CRAFT
              <br />
              <span className="text-canvas/40 hover:text-primary transition-colors duration-300">
                TOGETHER.
              </span>
            </h2>

            {/* İletişim Aksiyon Alanı: Doğrudan Mailto ve Kopyala Butonları */}
            <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-contrast font-mono text-xs md:text-sm uppercase tracking-wider transition-all duration-200 shadow-md active:translate-y-[1px]"
              >
                <Mail className="w-4 h-4" />
                <span>{t.contact.sendEmail}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-md bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 text-canvas font-mono text-xs md:text-sm uppercase tracking-wider transition-all duration-200 active:translate-y-[1px]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">{t.contact.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-canvas/60" />
                    <span>
                      {t.contact.copyEmail} <span className="hidden sm:inline">({email})</span>
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Alt Künye, Kınalı Keklik Mührü & Ağ Bağlantıları */}
        <div className="pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end text-xs font-mono text-canvas/60">
          {/* Sol: Beyaz AK Monogramı & Stüdyo Künyesi */}
          <div className="md:col-span-5 flex items-center gap-4">
            <div className="relative h-10 w-[60px] sm:h-12 sm:w-[72px] shrink-0 flex items-center justify-center">
              <Image
                src="/logo-monogram.png"
                alt="Abdullah Keklik Beyaz AK Monogramı"
                width={72}
                height={48}
                className="object-contain w-full h-full filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.18)]"
                unoptimized
              />
            </div>
            <div>
              <div className="text-canvas font-medium tracking-wide">{t.contact.footerTitle}</div>
              <div className="text-canvas/50 text-[11px] mt-0.5">{t.contact.footerLoc}</div>
            </div>
          </div>

          {/* Orta: Ağ Bağlantıları */}
          <div className="md:col-span-4 flex flex-wrap gap-4 sm:gap-6 uppercase">
            <a
              href="https://github.com/keklikabdullah07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="https://gitlab.com/keklikabdullah07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>GITLAB</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="https://www.linkedin.com/in/keklikabdullah/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Sağ: Telif & Mühür */}
          <div className="md:col-span-3 text-left md:text-right text-[11px] text-canvas/40">
            <div>© 2026 ABDULLAH KEKLİK</div>
            <div className="mt-0.5 text-primary/80 font-medium">{t.contact.footerPatience}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
