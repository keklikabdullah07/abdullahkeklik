"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const STAGES = [
  { threshold: 0, code: "01/04", label: "EDİTORYAL KILAVUZ & TİPOGRAFİ" },
  { threshold: 25, code: "02/04", label: "ÇOK DİLLİ METİN ARŞİVİ (TR · EN · KU)" },
  { threshold: 58, code: "03/04", label: "SEÇİLMİŞ ÇALIŞMALAR & PROJELER" },
  { threshold: 88, code: "04/04", label: "DİJİTAL ATÖLYE SERGİSİ HAZIR" },
  { threshold: 100, code: "STANDBY", label: "SERGİ AÇILIYOR" },
];

export function EditorialPreloader() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setMounted(true);

    // 1. Session check: Skip on subsequent navigations in the same session
    try {
      const alreadySeen = window.sessionStorage.getItem("partridge_preloader_seen");
      if (alreadySeen === "true") {
        setIsVisible(false);
        return;
      }
    } catch {
      // Ignore sessionStorage errors (e.g. strict privacy mode)
    }

    // 2. Reduced motion check
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(false);
      return;
    }

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 3. Smooth organic counter interpolation (~1600ms)
    let animationFrameId: number;
    const duration = 1600;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - (1 - t) ** 3;
      const currentVal = Math.floor(eased * 100);

      setProgress(currentVal);

      if (t < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        setIsComplete(true);
        try {
          window.sessionStorage.setItem("partridge_preloader_seen", "true");
        } catch {
          // Ignore
        }
        // Small pause at 100% before shutter lifts
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = originalOverflow;
        }, 280);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVisible(false);
        document.body.style.overflow = originalOverflow;
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!mounted || !isVisible) {
    return null;
  }

  // Active micro-stage
  const currentStage =
    [...STAGES].reverse().find((stage) => progress >= stage.threshold) || STAGES[0];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="editorial-preloader"
          role="status"
          aria-live="polite"
          aria-label={`Yükleniyor: ${progress}%`}
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1], // Awwwards iconic shutter ease
            },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-canvas text-ink p-6 md:p-12 select-none overflow-hidden"
          onClick={() => {
            // Allow skip on click for power users
            setIsVisible(false);
            document.body.style.overflow = "";
          }}
        >
          {/* Top Architectural Telemetry Bar */}
          <div className="flex items-center justify-between border-b border-hairline/60 pb-4 text-xs font-mono uppercase tracking-widest text-ink-muted">
            <div className="flex items-center gap-3">
              <span className="font-bold text-ink tracking-tight font-sans text-sm">
                ABDULLAH KEKLİK
              </span>
              <span className="text-primary font-bold">·</span>
              <span className="hidden sm:inline">FOLIO [2026]</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-[11px]">
              <span>URFA, MESOPOTAMIA</span>
            </div>
          </div>

          {/* Central Monolithic Numeral & Dynamic Stage */}
          <div className="my-auto flex flex-col items-center justify-center text-center">
            <div className="relative flex items-baseline">
              <motion.span
                className="font-mono text-8xl sm:text-[12rem] md:text-[16rem] font-bold tracking-tighter tabular-nums leading-none text-ink drop-shadow-xs"
                initial={{ opacity: 0.8, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {progress.toString().padStart(2, "0")}
              </motion.span>
              <span className="font-mono text-3xl sm:text-5xl md:text-6xl text-primary font-light ml-2">
                %
              </span>
            </div>

            {/* Dynamic Stage Ticker */}
            <div className="mt-6 md:mt-8 flex flex-col items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-hairline text-xs font-mono tracking-widest text-ink-muted">
                <span className="text-primary font-semibold">[{currentStage.code}]</span>
                <span className="text-ink">{currentStage.label}</span>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry & Progress Hairline */}
          <div className="flex flex-col gap-4">
            {/* Hairline Progress Gauge */}
            <div className="relative w-full h-[2px] bg-surface overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-ink-muted pt-2">
              <span>CREATIVE TECH &amp; DIGITAL STUDIO</span>
              <span className="text-ink-muted/60 hidden sm:inline">[CLICK TO SKIP]</span>
              <span className="tabular-nums">
                {isComplete ? "STANDBY · 100%" : `${progress}% YÜKLENDİ`}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
