"use client";

import { useI18n } from "@/context/LanguageContext";
import type { SupportedLocale } from "@/types/i18n";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Code2,
  Copy,
  ExternalLink,
  Globe,
  Hash,
  Search,
  Terminal,
  X,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  category: "sections" | "system" | "cli";
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  shortcut?: string;
  onSelect: () => void;
  keywords?: string[];
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const { t, locale, setLocale } = useI18n();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cliOutput, setCliOutput] = useState<{
    command: string;
    output: React.ReactNode;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Sayfa içi yumuşak kaydırma
  const scrollTo = useCallback(
    (anchor: string) => {
      onClose();
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    },
    [onClose],
  );

  // E-posta kopyalama
  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("keklikabdullah73@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  }, [onClose]);

  // CLI Komut Yürütücüleri
  const runCliWhoami = useCallback(() => {
    setCliOutput({
      command: "> whoami",
      output: (
        <div className="space-y-1.5 text-xs font-mono text-ink">
          <p className="font-bold text-primary">
            ABDULLAH KEKLİK — SENIOR FULL-STACK SYSTEMS ENGINEER
          </p>
          <p className="text-body">37°09&apos;N / 38°47&apos;E · Urfa, Mesopotamia</p>
          <p className="text-body-muted">
            Dağıtık sistemler, .NET 9, tip korumalı arka uç mimarisi ve 60 FPS akıcı taktil arayüz
            zanaatı.
          </p>
        </div>
      ),
    });
  }, []);

  const runCliStack = useCallback(() => {
    setCliOutput({
      command: "> stack",
      output: (
        <div className="space-y-1 text-xs font-mono text-ink">
          <p className="font-bold text-primary uppercase">[ ÜRETİM OMURGASI & ARAÇ SETİ ]</p>
          <p className="text-body">
            <span className="text-primary font-semibold">Spine:</span> C# · .NET 9 · TypeScript ·
            Next.js · PostgreSQL · Linux
          </p>
          <p className="text-body">
            <span className="text-primary font-semibold">Performance:</span> Rust · WebAssembly ·
            Lenis · Tailwind CSS · Biome
          </p>
          <p className="text-body-muted">
            Mimari Kural: Sıfır runtime hatası, kilitli 60 FPS ve tip güvenliği.
          </p>
        </div>
      ),
    });
  }, []);

  const runCliKeklik = useCallback(() => {
    setCliOutput({
      command: "> keklik",
      output: (
        <div className="space-y-2 text-xs font-mono text-ink">
          <pre className="text-[10px] sm:text-xs text-primary leading-none select-none font-mono">
            {`      .---.
     /     \\      [ CHUKAR PARTRIDGE / KINALI KEKLİK ]
    | () () |     "Yalnızca zamana direnen şeyler kalıcıdır."
     \\  ^  /      Nahit Taşı & Mezopotamya Kültürel Mührü
      |||||
     (     )
      \`---\``}
          </pre>
          <p className="text-body-muted text-[11px]">
            Kadim Mezopotamya kayalıklarında yaşayan; çevikliği, dayanıklılığı ve toprağa bağlılığı
            temsil eden editoryal ilham kaynağı.
          </p>
        </div>
      ),
    });
  }, []);

  // Tüm komut listesi
  const commands = useMemo<CommandItem[]>(() => {
    const items: CommandItem[] = [
      // BÖLÜMLER
      {
        id: "nav-works",
        category: "sections",
        title: t.directoryModal.worksLabel,
        subtitle: t.directoryModal.worksSub,
        icon: <Hash className="w-4 h-4 text-primary" />,
        shortcut: "#01",
        onSelect: () => scrollTo("#curated-works"),
        keywords: ["works", "projeler", "depolar", "repo", "github", "works"],
      },
      {
        id: "nav-manifesto",
        category: "sections",
        title: t.directoryModal.manifestoLabel,
        subtitle: t.directoryModal.manifestoSub,
        icon: <Hash className="w-4 h-4 text-primary" />,
        shortcut: "#02",
        onSelect: () => scrollTo("#manifesto"),
        keywords: ["manifesto", "ethos", "ilkeler", "craft", "felsefe"],
      },
      {
        id: "nav-bio",
        category: "sections",
        title: t.directoryModal.bioLabel,
        subtitle: t.directoryModal.bioSub,
        icon: <Hash className="w-4 h-4 text-primary" />,
        shortcut: "#03",
        onSelect: () => scrollTo("#about"),
        keywords: ["bio", "biyografi", "hakkinda", "about", "keklik"],
      },
      {
        id: "nav-contact",
        category: "sections",
        title: t.directoryModal.contactLabel,
        subtitle: t.directoryModal.contactSub,
        icon: <Hash className="w-4 h-4 text-primary" />,
        shortcut: "#04",
        onSelect: () => scrollTo("#contact"),
        keywords: ["contact", "iletisim", "tekil", "commission", "email"],
      },

      // SİSTEM & EYLEMLER
      {
        id: "sys-copy-email",
        category: "system",
        title: copied ? t.commandPalette.copyEmailSuccess : t.contact.copyEmail,
        subtitle: "keklikabdullah73@gmail.com",
        icon: copied ? (
          <Check className="w-4 h-4 text-emerald-600" />
        ) : (
          <Copy className="w-4 h-4 text-ink-muted" />
        ),
        shortcut: "COPY",
        onSelect: handleCopyEmail,
        keywords: ["email", "eposta", "kopyala", "copy", "mail"],
      },
      {
        id: "sys-lang-tr",
        category: "system",
        title: "Dil: Türkçe (TR)",
        subtitle: locale === "tr" ? "Aktif Dil" : "Türkçe arayüze geç",
        icon: <Globe className="w-4 h-4 text-ink-muted" />,
        shortcut: "TR",
        onSelect: () => {
          setLocale("tr");
          onClose();
        },
        keywords: ["dil", "language", "turkce", "tr"],
      },
      {
        id: "sys-lang-en",
        category: "system",
        title: "Language: English (EN)",
        subtitle: locale === "en" ? "Active Language" : "Switch to English",
        icon: <Globe className="w-4 h-4 text-ink-muted" />,
        shortcut: "EN",
        onSelect: () => {
          setLocale("en");
          onClose();
        },
        keywords: ["language", "english", "ingilizce", "en"],
      },
      {
        id: "sys-lang-ku",
        category: "system",
        title: "Ziman: Kurdî (KU)",
        subtitle: locale === "ku" ? "Zimanê Çalak" : "Derbasî Kurdî bibe",
        icon: <Globe className="w-4 h-4 text-ink-muted" />,
        shortcut: "KU",
        onSelect: () => {
          setLocale("ku");
          onClose();
        },
        keywords: ["ziman", "kurdi", "kurdish", "kurtce", "ku"],
      },
      {
        id: "sys-github",
        category: "system",
        title: "GitHub Profile",
        subtitle: "github.com/keklikabdullah",
        icon: <ExternalLink className="w-4 h-4 text-ink-muted" />,
        shortcut: "EXT",
        onSelect: () => {
          window.open("https://github.com/keklikabdullah", "_blank", "noreferrer");
          onClose();
        },
        keywords: ["github", "kod", "git", "acik kaynak"],
      },
      {
        id: "sys-gitlab",
        category: "system",
        title: "GitLab Profile",
        subtitle: "gitlab.com/keklikabdullah",
        icon: <ExternalLink className="w-4 h-4 text-ink-muted" />,
        shortcut: "EXT",
        onSelect: () => {
          window.open("https://gitlab.com/keklikabdullah", "_blank", "noreferrer");
          onClose();
        },
        keywords: ["gitlab", "repos", "kaynak"],
      },

      // MİMARİ TERMİNAL (CLI)
      {
        id: "cli-whoami",
        category: "cli",
        title: "> whoami",
        subtitle: t.commandPalette.cliWhoamiDesc,
        icon: <Terminal className="w-4 h-4 text-primary" />,
        shortcut: "CLI",
        onSelect: runCliWhoami,
        keywords: ["> whoami", "whoami", "kimim", "about", "muhendis"],
      },
      {
        id: "cli-stack",
        category: "cli",
        title: "> stack",
        subtitle: t.commandPalette.cliStackDesc,
        icon: <Code2 className="w-4 h-4 text-primary" />,
        shortcut: "CLI",
        onSelect: runCliStack,
        keywords: ["> stack", "stack", "teknoloji", "yigin", "tools", "c#", "rust"],
      },
      {
        id: "cli-keklik",
        category: "cli",
        title: "> keklik",
        subtitle: t.commandPalette.cliKeklikDesc,
        icon: <Terminal className="w-4 h-4 text-primary" />,
        shortcut: "CLI",
        onSelect: runCliKeklik,
        keywords: ["> keklik", "keklik", "chukar", "totem", "ascii"],
      },
    ];

    return items;
  }, [
    t,
    locale,
    setLocale,
    copied,
    scrollTo,
    handleCopyEmail,
    runCliWhoami,
    runCliStack,
    runCliKeklik,
    onClose,
  ]);

  // Filtrelenmiş komutlar
  const filteredCommands = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((cmd) => {
      const matchTitle = cmd.title.toLowerCase().includes(q);
      const matchSub = cmd.subtitle?.toLowerCase().includes(q);
      const matchKeywords = cmd.keywords?.some((k) => k.toLowerCase().includes(q));
      return matchTitle || matchSub || matchKeywords;
    });
  }, [commands, query]);

  // Odaklanma ve ESC dinleyicisi
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setCliOutput(null);
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // Klavye Navigasyonu (Yukarı, Aşağı, Enter, Escape)
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        if (cliOutput) {
          setCliOutput(null);
        } else {
          onClose();
        }
        return;
      }

      if (filteredCommands.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const selected = filteredCommands[selectedIndex];
        if (selected) {
          selected.onSelect();
        }
      }
    },
    [filteredCommands, selectedIndex, cliOutput, onClose],
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.commandPalette.triggerLabel}
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 sm:px-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/40 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-canvas border border-hairline-strong rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] z-10"
          >
            {/* Header / Arama Çubuğu */}
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 border-b border-hairline bg-surface/40">
              <Search className="w-4 h-4 text-primary shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                  if (cliOutput) setCliOutput(null);
                }}
                onKeyDown={handleKeyDown}
                placeholder={t.commandPalette.placeholder}
                className="w-full bg-transparent text-sm sm:text-base font-mono text-ink placeholder:text-body-muted outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                className="p-1 text-ink-muted hover:text-ink transition-colors rounded"
                aria-label={t.commandPalette.closeHint}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* CLI Çıktı Paneli (Varsa) */}
            {cliOutput && (
              <div className="px-5 py-4 border-b border-hairline bg-surface/70 animate-in fade-in duration-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-primary font-bold uppercase tracking-wider">
                    {cliOutput.command}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCliOutput(null)}
                    className="text-[10px] font-mono text-ink-muted hover:text-ink uppercase tracking-wider underline cursor-pointer"
                  >
                    [Temizle]
                  </button>
                </div>
                {cliOutput.output}
              </div>
            )}

            {/* Komut Listesi */}
            <div
              ref={listRef}
              className="flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-hairline/40 focus:outline-none"
            >
              {filteredCommands.length === 0 ? (
                <div className="py-12 text-center text-xs font-mono text-body-muted">
                  {t.commandPalette.noResults}
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      type="button"
                      key={cmd.id}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => cmd.onSelect()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full group flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left cursor-pointer transition-all duration-150 ${
                        isSelected
                          ? "bg-surface-raised border border-primary/40 text-ink shadow-xs"
                          : "text-body hover:bg-surface/50 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`p-1.5 rounded-md shrink-0 transition-colors ${
                            isSelected
                              ? "bg-primary text-primary-contrast"
                              : "bg-surface border border-hairline text-ink-muted group-hover:text-ink"
                          }`}
                        >
                          {cmd.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="font-mono text-xs sm:text-sm font-medium tracking-tight text-ink flex items-center gap-2">
                            <span>{cmd.title}</span>
                            {isSelected && (
                              <ArrowRight className="w-3 h-3 text-primary animate-pulse hidden sm:inline" />
                            )}
                          </div>
                          {cmd.subtitle && (
                            <div className="text-[11px] font-sans text-body-muted truncate mt-0.5">
                              {cmd.subtitle}
                            </div>
                          )}
                        </div>
                      </div>

                      {cmd.shortcut && (
                        <div className="shrink-0 ml-3">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border ${
                              isSelected
                                ? "bg-surface border-primary/50 text-primary font-bold"
                                : "bg-surface/60 border-hairline text-body-muted"
                            }`}
                          >
                            {cmd.shortcut}
                          </span>
                        </div>
                      )}
                    </button>
                  );
                })
              )}
            </div>

            {/* Alt Bilgi & Klavye İpuçları (Footer) */}
            <div className="px-4 py-2.5 border-t border-hairline bg-surface/30 flex items-center justify-between text-[11px] font-mono text-body-muted">
              <div className="flex items-center gap-4">
                <span>{t.commandPalette.navigateHint}</span>
                <span>{t.commandPalette.selectHint}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>{t.commandPalette.closeHint}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
