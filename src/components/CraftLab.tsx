"use client";

import { useI18n } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Activity, Cpu, Move, RotateCcw, Volume2 } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

interface CryptoChunk {
  id: string;
  label: string;
  chunk: string;
}

export function CraftLab() {
  const { t } = useI18n();

  // --- DENEY 1: Yay Fiziği Parametreleri ---
  const [stiffness, setStiffness] = useState<number>(260);
  const [damping, setDamping] = useState<number>(22);
  const [mass, setMass] = useState<number>(1);
  const [dragKey, setDragKey] = useState<number>(0);

  const resetSpring = () => {
    setStiffness(260);
    setDamping(22);
    setMass(1);
    setDragKey((prev) => prev + 1);
  };

  // --- DENEY 2: Kriptografik Bloklar ---
  const [cryptoInput, setCryptoInput] = useState<string>("Partridge // .NET 9 & Rust");
  const [hashBlocks, setHashBlocks] = useState<CryptoChunk[]>([]);

  useEffect(() => {
    let isMounted = true;
    const computeHash = async () => {
      try {
        const encoder = new TextEncoder();
        const data = encoder.encode(cryptoInput || "empty");
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

        // 8 blok halinde 4'er byte grupla
        const chunks: CryptoChunk[] = [];
        for (let i = 0; i < hex.length; i += 8) {
          const idx = i / 8;
          chunks.push({
            id: `chunk-block-${idx}`,
            label: `BLOCK [${idx.toString().padStart(2, "0")}]`,
            chunk: hex.substring(i, i + 8),
          });
        }
        if (isMounted) setHashBlocks(chunks);
      } catch {
        // Fallback simülasyon
        if (isMounted) {
          const fallbackHex = [
            "e3b0c442",
            "98fc1c14",
            "9afbf4c8",
            "996fb924",
            "27ae41e4",
            "649b934c",
            "a495991b",
            "7852b855",
          ];
          setHashBlocks(
            fallbackHex.map((val, idx) => ({
              id: `chunk-fallback-${idx}`,
              label: `BLOCK [${idx.toString().padStart(2, "0")}]`,
              chunk: val,
            })),
          );
        }
      }
    };

    computeHash();
    return () => {
      isMounted = false;
    };
  }, [cryptoInput]);

  // --- DENEY 3: Akustik Taktil Sentez (Web Audio API) ---
  const [audioFired, setAudioFired] = useState<boolean>(false);

  const playTactileClick = useCallback(() => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Mekanik deklanşör tınısı (120Hz sönümlü sinüs dalgası)
      osc.type = "sine";
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(38, ctx.currentTime + 0.04);

      // Rezonans filtresi
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1400, ctx.currentTime);
      filter.Q.setValueAtTime(4, ctx.currentTime);

      // Kazanç zarfı (Attack: 2ms, Decay: 38ms)
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.002);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.045);

      setAudioFired(true);
      setTimeout(() => setAudioFired(false), 200);
    } catch {
      // AudioContext engellenirse sessizce devam et
    }
  }, []);

  return (
    <section
      id="craft-lab"
      aria-label={t.craftLab.title}
      className="w-full py-24 sm:py-32 px-6 md:px-12 border-b border-hairline/60 bg-canvas transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Başlık Alanı */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface border border-hairline font-mono text-[11px] uppercase tracking-wider text-ink-muted">
            <Activity className="w-3.5 h-3.5 text-primary" />
            <span>{t.craftLab.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink font-sans">
            {t.craftLab.title}
          </h2>
          <p className="text-sm sm:text-base font-sans text-body-muted leading-relaxed">
            {t.craftLab.subtitle}
          </p>
        </div>

        {/* Deney Bento Izgarası (3 Kolon / Kart) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* DENEY 1: Yay Fiziği Laboratuvarı (5 Kolon) */}
          <div className="lg:col-span-5 bg-surface/70 border border-hairline rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">
                  {t.craftLab.exp1Title}
                </span>
                <span className="text-[10px] font-mono text-ink-muted uppercase">
                  60 FPS SPRING
                </span>
              </div>
              <p className="text-xs font-sans text-body-muted mb-6 leading-relaxed">
                {t.craftLab.exp1Desc}
              </p>

              {/* İnteraktif Yay Tuvali */}
              <div className="relative h-44 sm:h-52 w-full rounded-xl bg-canvas border border-hairline overflow-hidden flex items-center justify-center p-4 select-none">
                <div className="absolute inset-0 bg-[radial-gradient(var(--color-hairline)_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                <motion.div
                  key={dragKey}
                  drag
                  dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
                  dragElastic={0.25}
                  whileDrag={{ scale: 1.05 }}
                  transition={{
                    type: "spring",
                    stiffness,
                    damping,
                    mass,
                  }}
                  className="relative z-10 px-5 py-3 rounded-lg bg-surface-raised border border-primary/50 text-ink shadow-md cursor-grab active:cursor-grabbing flex items-center gap-2.5 font-mono text-xs font-semibold"
                >
                  <Move className="w-4 h-4 text-primary" />
                  <span>NAHİT TAŞI {"//"} SÜRÜKLE &amp; FIRLAT</span>
                </motion.div>
              </div>
            </div>

            {/* Fizik Parametreleri Ayar Çubukları */}
            <div className="mt-6 pt-4 border-t border-hairline/60 space-y-3 font-mono text-xs">
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-ink-muted">
                  <span>{t.craftLab.stiffnessLabel}</span>
                  <span className="text-ink font-semibold">{stiffness}</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="500"
                  value={stiffness}
                  onChange={(e) => setStiffness(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer h-1.5 bg-surface-sunken rounded"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-ink-muted">
                  <span>{t.craftLab.dampingLabel}</span>
                  <span className="text-ink font-semibold">{damping}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  value={damping}
                  onChange={(e) => setDamping(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer h-1.5 bg-surface-sunken rounded"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-ink-muted">
                  <span>{t.craftLab.massLabel}</span>
                  <span className="text-ink font-semibold">{mass}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="4"
                  step="0.5"
                  value={mass}
                  onChange={(e) => setMass(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer h-1.5 bg-surface-sunken rounded"
                />
              </div>

              <button
                type="button"
                onClick={resetSpring}
                className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-mono text-ink-muted hover:text-ink underline uppercase cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>[VARSAYILAN PARAMETRELERE DÖN]</span>
              </button>
            </div>
          </div>

          {/* DENEY 2: Kriptografik Deterministik Bloklar (4 Kolon) */}
          <div className="lg:col-span-4 bg-surface/70 border border-hairline rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">
                  {t.craftLab.exp2Title}
                </span>
                <Cpu className="w-4 h-4 text-ink-muted" />
              </div>
              <p className="text-xs font-sans text-body-muted mb-4 leading-relaxed">
                {t.craftLab.exp2Desc}
              </p>

              {/* Metin Giriş Alanı */}
              <div className="mb-4">
                <input
                  type="text"
                  value={cryptoInput}
                  onChange={(e) => setCryptoInput(e.target.value)}
                  placeholder={t.craftLab.hashInputPlaceholder}
                  className="w-full px-3 py-2 rounded-lg bg-canvas border border-hairline font-mono text-xs text-ink placeholder:text-body-muted outline-none focus:border-primary"
                />
              </div>

              {/* Hash Blok Matrisi */}
              <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
                {hashBlocks.map((item) => (
                  <div
                    key={item.id}
                    className="p-2.5 rounded-md bg-canvas border border-hairline flex flex-col justify-between"
                  >
                    <span className="text-[9px] text-ink-muted font-bold tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-primary font-bold tracking-widest mt-1">
                      {item.chunk}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-hairline/60 text-[10px] font-mono text-ink-muted flex items-center justify-between">
              <span>ALGO: SHA-256</span>
              <span>DETERMINISTIC ENTROPY</span>
            </div>
          </div>

          {/* DENEY 3: Akustik Taktil Sentez (Web Audio API) (3 Kolon) */}
          <div className="lg:col-span-3 bg-surface/70 border border-hairline rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-primary uppercase tracking-wider">
                  {t.craftLab.exp3Title}
                </span>
                <Volume2 className="w-4 h-4 text-ink-muted" />
              </div>
              <p className="text-xs font-sans text-body-muted mb-6 leading-relaxed">
                {t.craftLab.exp3Desc}
              </p>

              {/* Taktil Buton ve Rezonans Tuvali */}
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={playTactileClick}
                  className={`w-full py-5 px-4 rounded-xl border text-center transition-all duration-150 active:scale-95 shadow-xs font-mono text-xs font-bold tracking-wider uppercase cursor-pointer flex flex-col items-center justify-center gap-2 ${
                    audioFired
                      ? "bg-primary text-primary-contrast border-primary shadow-md scale-95"
                      : "bg-canvas hover:bg-surface-raised border-hairline text-ink hover:border-primary/50"
                  }`}
                >
                  <Volume2
                    className={`w-5 h-5 ${audioFired ? "animate-bounce" : "text-primary"}`}
                  />
                  <span>{audioFired ? t.craftLab.tactilePlaying : t.craftLab.tactileTrigger}</span>
                </button>

                <div className="p-3 rounded-lg bg-canvas border border-hairline space-y-1 font-mono text-[10px] text-ink-muted">
                  <div className="flex justify-between">
                    <span>OSC TYPE:</span>
                    <span className="text-ink font-semibold">SINE (140Hz → 38Hz)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DECAY TIME:</span>
                    <span className="text-ink font-semibold">40 MS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>FILTER:</span>
                    <span className="text-ink font-semibold">LOWPASS 1400Hz</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-hairline/60 text-[10px] font-mono text-ink-muted text-center">
              {"// SIFIR HARİCİ ASSET · SAF WEBAUDIO"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
