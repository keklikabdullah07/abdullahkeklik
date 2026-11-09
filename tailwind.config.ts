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
          DEFAULT: "#0D111A", // Dağ Külü Obsidyeni
          alt: "#FAF5EB",    // Keten / Fildişi
        },
        surface: {
          DEFAULT: "#141A26", // Dağ Kayası Antrasiti
          raised: "#1D2536",
          sunken: "#080B12",
        },
        brand: {
          DEFAULT: "#E05238", // Kınalı Keklik Kırmızısı / Mercan
          hover: "#D94828",
          active: "#BF3B1D",
          glow: "#F87154",
        },
        ink: {
          DEFAULT: "#F4F5F7",
          muted: "#A1A7B5",
          subtle: "#71798A",
        },
        hairline: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          strong: "rgba(224, 82, 56, 0.5)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        hairline: "0 0 0 1px rgba(255, 255, 255, 0.08)",
        panel: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        button: "0 2px 0 0 rgba(4, 120, 87, 0.8)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
