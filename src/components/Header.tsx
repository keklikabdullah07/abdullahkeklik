"use client";

import { Compass, Menu, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EditorialDirectoryModal } from "./EditorialDirectoryModal";

export function Header() {
  const [timeString, setTimeString] = useState<string>("16:32");
  const [directoryOpen, setDirectoryOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("tr-TR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className="w-full border-b border-hairline/60 bg-canvas/80 backdrop-blur-md sticky top-0 z-40 transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-6">
          {/* Sol Kanat: Heykelsi Marka & Zanaat Kimliği */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex items-baseline gap-2 text-ink hover:text-primary transition-colors"
            >
              <span className="font-bold text-base md:text-lg tracking-tight font-sans">
                ABDULLAH KEKLİK
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
            </Link>

            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded bg-surface border border-hairline text-[10px] font-mono text-ink-muted uppercase tracking-wider">
              CREATIVE TECH &amp; SYSTEMS
            </span>
          </div>

          {/* Orta Alan: Cömert Negatif Alan & Muted Telemetri */}
          <div className="hidden md:flex items-center gap-3 text-xs font-mono text-ink-muted">
            <span>37°09&apos;N</span>
            <span className="text-hairline">·</span>
            <span>URFA, MESOPOTAMIA</span>
            <span className="text-hairline">·</span>
            <span className="text-ink font-medium tabular-nums">{timeString} TRT</span>
          </div>

          {/* Sağ Kanat: Durum Boncuğu, İletişim & DIRECTORY [04] Tetikleyici */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Canlı Durum Boncuğu (Masaüstü) */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-hairline text-[11px] font-mono text-ink-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>OPEN TO COMMISSIONS</span>
            </div>

            {/* Hızlı İletişim Butonu */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-surface hover:bg-surface-raised border border-hairline text-ink font-mono text-xs uppercase tracking-wider transition-all duration-200 active:translate-y-[1px]"
            >
              <span>İLETİŞİM</span>
            </a>

            {/* Awwwards Seviyesi: DIRECTORY [04] Heykelsi Tetikleyici */}
            <button
              type="button"
              onClick={() => setDirectoryOpen(true)}
              className="group flex items-center gap-2.5 px-4 py-2 rounded-md bg-ink text-canvas hover:bg-primary hover:text-primary-contrast transition-all duration-200 active:scale-95 shadow-xs font-mono text-xs tracking-wider uppercase"
              aria-label="Editoryal dizini aç"
              aria-expanded={directoryOpen}
            >
              <Menu className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
              <span>DIRECTORY [04]</span>
            </button>
          </div>
        </div>
      </header>

      {/* Tam Ekran Editoryal Dizin Perdesi */}
      <EditorialDirectoryModal
        isOpen={directoryOpen}
        onClose={() => setDirectoryOpen(false)}
        timeString={timeString}
      />
    </>
  );
}
