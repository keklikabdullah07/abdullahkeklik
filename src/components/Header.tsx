"use client";

import { useEffect, useState } from "react";
import { ChukarLogo } from "./ChukarLogo";

export function Header() {
  const [timeString, setTimeString] = useState<string>("17:47");

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
    <header className="w-full border-b border-hairline bg-canvas/80 backdrop-blur-md sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Sol Alan: Künye, Konum & Canlı Saat */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              URFA 37°09&apos;N
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 border-l border-hairline pl-6">
            <span className="text-xs font-mono text-ink-muted uppercase">LOCAL:</span>
            <span className="text-xs font-mono text-ink font-medium tracking-wider">
              {timeString}
            </span>
          </div>
        </div>

        {/* Sağ Alan: Kınalı Keklik Amblemi & Stüdyo Rozeti */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-xs font-mono uppercase tracking-wider text-ink font-semibold">
              ABDULLAH KEKLİK
            </span>
            <span className="text-[11px] font-mono text-ink-muted">CREATIVE TECHNOLOGIST</span>
          </div>

          <div className="p-2 rounded-lg bg-surface border border-hairline/60 flex items-center justify-center">
            <ChukarLogo size={32} />
          </div>
        </div>
      </div>
    </header>
  );
}
