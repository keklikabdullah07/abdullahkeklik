import { Github, Gitlab, Mail } from "lucide-react";
import Image from "next/image";
import type React from "react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#090D16] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-monogram.png"
              alt="Abdullah Keklik Monogram"
              width={48}
              height={32}
              className="h-7 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
            />
            <div className="border-l border-white/15 pl-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FAF9F6] font-semibold block">
                Abdullah Keklik
              </span>
              <p className="text-[11px] text-[#94A3B8]">
                Senior Software Engineer &amp; Creative Technologist
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@abdullahkeklik.dev"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-[#FAF9F6] bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#D9532F]" aria-hidden="true" />
              <span>contact@abdullahkeklik.dev</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-[#94A3B8] hover:text-[#FAF9F6] rounded-full hover:bg-white/5 transition-colors"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://gitlab.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitLab Profile"
              className="p-2 text-[#94A3B8] hover:text-[#FAF9F6] rounded-full hover:bg-white/5 transition-colors"
            >
              <Gitlab className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7265] gap-4">
          <p>&copy; {new Date().getFullYear()} Abdullah Keklik. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D9532F] shadow-[0_0_8px_#D9532F]" />
            <span className="font-mono text-[11px] text-[#FAF9F6]">
              ANEW 3-Katmanlı Mimari Standardı
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
