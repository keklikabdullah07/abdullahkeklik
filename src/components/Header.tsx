"use client";

import { ArrowDownRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { InteractiveMedallion } from "./InteractiveMedallion";

export function Header() {
  const [timeString, setTimeString] = useState<string>("17:47");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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

  // Escape tuşuyla mobil menüyü kapatma
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navigateTo = (anchor: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

        {/* Orta Alan: Editoryal Menü (Lenis Smooth Scroll Anchor) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono tracking-wider">
          <a
            href="#curated-works"
            className="text-ink-body hover:text-primary transition-colors py-1"
          >
            [01] İŞLER
          </a>
          <a href="#manifesto" className="text-ink-body hover:text-primary transition-colors py-1">
            [02] MANİFESTO
          </a>
          <a href="#about" className="text-ink-body hover:text-primary transition-colors py-1">
            [03] HAKKIMDA
          </a>
          <a href="#contact" className="text-ink-body hover:text-primary transition-colors py-1">
            [04] İLETİŞİM
          </a>
        </nav>

        {/* Sağ Alan: Kınalı Keklik Amblemi & Stüdyo Rozeti & Mobil Menü Butonu */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-xs font-mono uppercase tracking-wider text-ink font-semibold">
              ABDULLAH KEKLİK
            </span>
            <span className="text-[11px] font-mono text-ink-muted">CREATIVE TECHNOLOGIST</span>
          </div>

          <InteractiveMedallion size={44} />

          {/* Mobil Menü Aç/Kapat Butonu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg border border-hairline bg-surface hover:bg-surface-raised active:bg-surface-sunken text-ink transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Navigasyon menüsünü kapat" : "Navigasyon menüsünü aç"}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobil Editoryal Dizin Perdesi */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-hairline bg-canvas/98 backdrop-blur-xl px-6 py-8 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-6">
            <div className="text-[11px] font-mono text-ink-muted uppercase tracking-widest border-b border-hairline pb-2 flex items-center justify-between">
              <span>EDİTORYAL DİZİN / DIRECTORY</span>
              <span className="text-primary font-medium">INDEX 2026</span>
            </div>

            <nav className="flex flex-col gap-3 text-sm font-mono">
              <button
                type="button"
                onClick={() => navigateTo("#curated-works")}
                className="w-full flex items-center justify-between text-ink hover:text-primary transition-colors py-2.5 border-b border-hairline/40 active:translate-x-1 text-left"
              >
                <span>[01] SEÇİLMİŞ İŞLER &amp; ARŞİV</span>
                <ArrowDownRight className="w-4 h-4 text-primary" />
              </button>
              <button
                type="button"
                onClick={() => navigateTo("#manifesto")}
                className="w-full flex items-center justify-between text-ink hover:text-primary transition-colors py-2.5 border-b border-hairline/40 active:translate-x-1 text-left"
              >
                <span>[02] MANİFESTO &amp; ZANAAT</span>
                <ArrowDownRight className="w-4 h-4 text-primary" />
              </button>
              <button
                type="button"
                onClick={() => navigateTo("#about")}
                className="w-full flex items-center justify-between text-ink hover:text-primary transition-colors py-2.5 border-b border-hairline/40 active:translate-x-1 text-left"
              >
                <span>[03] ZANAAT &amp; BİYOGRAFİ</span>
                <ArrowDownRight className="w-4 h-4 text-primary" />
              </button>
              <button
                type="button"
                onClick={() => navigateTo("#contact")}
                className="w-full flex items-center justify-between text-ink hover:text-primary transition-colors py-2.5 border-b border-hairline/40 active:translate-x-1 text-left"
              >
                <span>[04] İLETİŞİM &amp; COMMISSIONS</span>
                <ArrowDownRight className="w-4 h-4 text-primary" />
              </button>
            </nav>

            {/* Mobil Sosyal & Künye Alanı */}
            <div className="pt-3 border-t border-hairline flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-ink-muted">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/keklikabdullah07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GITHUB
                </a>
                <span>·</span>
                <a
                  href="https://gitlab.com/keklikabdullah07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GITLAB
                </a>
                <span>·</span>
                <a
                  href="https://www.linkedin.com/in/keklikabdullah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LINKEDIN
                </a>
              </div>
              <span className="text-primary font-medium">[OPEN TO WORK]</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
