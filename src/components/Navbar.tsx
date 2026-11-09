import { ArrowUpRight, Github, Gitlab } from "lucide-react";
import Image from "next/image";
import type React from "react";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-hairline bg-canvas/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 text-ink font-semibold tracking-tight hover:opacity-90 transition-opacity"
          aria-label="Abdullah Keklik Ana Sayfa"
        >
          <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_8px_rgba(224,82,56,0.8)] shrink-0" />
          <Image
            src="/logo-monogram.png"
            alt="Abdullah Keklik Monogram"
            width={52}
            height={34}
            className="h-7 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.08)]"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-muted">
          <a href="#showcase" className="hover:text-ink transition-colors focus-visible:text-brand">
            Vitrin
          </a>
          <a
            href="#experience"
            className="hover:text-ink transition-colors focus-visible:text-brand"
          >
            Yaklaşım
          </a>
          <a href="#about" className="hover:text-ink transition-colors focus-visible:text-brand">
            Hakkımda
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profilini Ziyaret Et"
            className="p-2 text-ink-muted hover:text-ink hover:bg-surface rounded-md transition-colors"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="https://gitlab.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitLab Profilini Ziyaret Et"
            className="p-2 text-ink-muted hover:text-ink hover:bg-surface rounded-md transition-colors"
          >
            <Gitlab className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-brand hover:bg-brand-hover active:bg-brand-active rounded-md shadow-[0_0_15px_rgba(224,82,56,0.5)] transition-colors"
          >
            <span>Bağlantı Kur</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
};
