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
          DEFAULT: "#0F1217", // Onyx Kohl (Derin İs Kömürü)
          alt: "#F6F1E8",    // Chalk Cream (Tebeşir Keten)
        },
        surface: {
          DEFAULT: "#171A23", // Slate Plum gölgeli antrasit yüzey
          raised: "#222634",
          sunken: "#0B0D11",
        },
        fawn: {
          DEFAULT: "#CBB89F", // Warm Fawn (Kuş Kanadı Tüy Beji)
          subtle: "rgba(203, 184, 159, 0.16)",
        },
        plum: {
          DEFAULT: "#3E3947", // Slate Plum (Kül Leylak)
        },
        brand: {
          DEFAULT: "#E84D38", // Chukar Coral Red (Kınalı Mercan Kırmızısı)
          hover: "#D73C27",
          active: "#BF321F",
          glow: "#E84D38",
        },
        ink: {
          DEFAULT: "#F6F1E8", // Chalk Cream
          muted: "#9E9AA6",  // Gövde kül tonu
          subtle: "#787480",
        },
        hairline: {
          DEFAULT: "rgba(203, 184, 159, 0.16)", // Warm Fawn Hairline
          strong: "rgba(232, 77, 56, 0.6)",
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
