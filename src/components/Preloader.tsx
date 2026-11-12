"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type React from "react";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsFinished(true);
      onComplete?.();
      return;
    }

    const duration = 1200; // ms
    const intervalTime = 25;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step + Math.random() * 2;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            onComplete?.();
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [shouldReduceMotion, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader-curtain"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1], // Silk curtain reveal
            },
          }}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#090D16] p-8 sm:p-12 text-[#FAF9F6]"
          aria-live="polite"
          aria-busy={!isFinished}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#FAF9F6]/40">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D9532F] animate-pulse" />
              Partridge Studio
            </span>
            <span>Atelier &copy; 2026</span>
          </div>

          {/* Center Brand Identity */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#FAF9F6] font-display">
                PARTRIDGE
              </h2>
              <p className="mt-2 text-xs font-mono text-[#D9532F] tracking-widest uppercase">
                Chukar Kinetic Architecture
              </p>
            </motion.div>
          </div>

          {/* Bottom Counter & Bar */}
          <div className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between font-mono text-sm sm:text-base">
              <span className="text-xs text-[#FAF9F6]/50">INITIALIZING CANVAS</span>
              <span className="text-2xl sm:text-4xl font-bold tracking-tight text-[#FAF9F6]">
                {Math.round(progress).toString().padStart(3, "0")}
                <span className="text-xs font-normal text-[#D9532F] ml-1">%</span>
              </span>
            </div>
            <div className="h-[2px] w-full overflow-hidden bg-white/10 rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-[#D9532F] via-[#E27D60] to-[#FAF9F6]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
