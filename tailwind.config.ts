import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#F4EFE6", // Nahit Taşı & Keten Kemik zemin
          alt: "#181311",    // İsli Gece Toprağı (Grand Finale zemin)
        },
        surface: {
          DEFAULT: "#EAE1D2", // Sıcak Kumtaşı mat yüzey / kartlar
          raised: "#F0E8DC",
          sunken: "#DFD5C4",
        },
        ink: {
          DEFAULT: "#1C1613", // Kavrulmuş Espresso (H1 & Başlıklar)
          body: "#4A4038",    // Keten Vizonu & Sıcak Kül (Gövde metinleri)
          muted: "#85776B",   // Mineral Taşı (Künye / Metadatalar)
        },
        primary: {
          DEFAULT: "#C8532B", // Kınalı Keklik Kınası & Harran Kili (Primary CTA)
          hover: "#A94220",
          active: "#8F3517",
          contrast: "#FAF6F0",
        },
        amber: {
          DEFAULT: "#D88934", // Mezopotamya Kehribarı
          subtle: "rgba(216, 137, 52, 0.12)",
        },
        hairline: {
          DEFAULT: "rgba(200, 83, 43, 0.16)", // Pişmiş Toprak kılcal hat
          warm: "rgba(28, 22, 19, 0.08)",     // Sıcak taş ayracı
          strong: "rgba(200, 83, 43, 0.5)",
        },
      },
      fontFamily: {
        display: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        hairline: "0 0 0 1px rgba(200, 83, 43, 0.16)",
        warm: "0 10px 30px -10px rgba(28, 22, 19, 0.08)",
        card: "0 16px 36px -12px rgba(28, 22, 19, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
