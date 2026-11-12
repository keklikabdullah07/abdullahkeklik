import { ArrowUpRight, Github, Gitlab } from "lucide-react";
import Image from "next/image";
import type React from "react";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#090D16]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-3 text-[#FAF9F6] font-semibold tracking-tight hover:opacity-90 transition-opacity group"
          aria-label="Abdullah Keklik Ana Sayfa"
        >
          <span className="w-2 h-2 rounded-full bg-[#D9532F] shadow-[0_0_8px_rgba(217,83,47,0.8)] shrink-0 transition-transform group-hover:scale-125" />
          <Image
            src="/logo-monogram.png"
            alt="Abdullah Keklik Monogram"
            width={52}
            height={34}
            className="h-7 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[#94A3B8]">
          <a
            href="#showcase"
            className="hover:text-[#FAF9F6] transition-colors focus-visible:text-[#D9532F]"
          >
            Vitrin
          </a>
          <a
            href="#experience"
            className="hover:text-[#FAF9F6] transition-colors focus-visible:text-[#D9532F]"
          >
            Yaklaşım
          </a>
          <a
            href="#about"
            className="hover:text-[#FAF9F6] transition-colors focus-visible:text-[#D9532F]"
          >
            Hakkımda
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profilini Ziyaret Et"
            className="p-2 text-[#94A3B8] hover:text-[#FAF9F6] hover:bg-white/5 rounded-full transition-colors"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="https://gitlab.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitLab Profilini Ziyaret Et"
            className="p-2 text-[#94A3B8] hover:text-[#FAF9F6] hover:bg-white/5 rounded-full transition-colors"
          >
            <Gitlab className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#FAF9F6] bg-[#D9532F] hover:bg-[#B73D1E] active:scale-95 rounded-full shadow-[0_2px_12px_rgba(217,83,47,0.35)] transition-all cursor-pointer"
          >
            <span>Bağlantı Kur</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
};
