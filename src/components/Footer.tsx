import { Github, Gitlab, Mail } from "lucide-react";
import Image from "next/image";
import type React from "react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-hairline bg-surface-sunken/60 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-hairline/60">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-monogram.png"
              alt="Abdullah Keklik Monogram"
              width={48}
              height={32}
              className="h-7 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.06)]"
            />
            <div className="border-l border-hairline pl-3">
              <span className="font-mono text-xs uppercase tracking-widest text-ink font-semibold block">
                Abdullah Keklik
              </span>
              <p className="text-[11px] text-ink-muted">
                Senior Software Engineer & Creative Technologist
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@abdullahkeklik.dev"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-ink bg-surface hover:bg-surface-raised border border-hairline rounded-md transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
              <span>contact@abdullahkeklik.dev</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-ink-muted hover:text-ink transition-colors"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://gitlab.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitLab Profile"
              className="p-2 text-ink-muted hover:text-ink transition-colors"
            >
              <Gitlab className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-subtle gap-4">
          <p>© {new Date().getFullYear()} Abdullah Keklik. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand shadow-[0_0_8px_#e05238]" />
            <span className="font-mono text-[11px]">ANEW 3-Katmanlı Mimari Standardı</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
