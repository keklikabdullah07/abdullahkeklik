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
          DEFAULT: "#090D16",
          alt: "#FAF9F6",
        },
        surface: {
          DEFAULT: "#111726",
          raised: "#1A2234",
          sunken: "#06090F",
        },
        brand: {
          DEFAULT: "#10B981",
          hover: "#059669",
          active: "#047857",
          glow: "#34D399",
        },
        ink: {
          DEFAULT: "#F3F4F6",
          muted: "#9CA3AF",
          subtle: "#6B7280",
        },
        hairline: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          strong: "rgba(16, 185, 129, 0.4)",
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
