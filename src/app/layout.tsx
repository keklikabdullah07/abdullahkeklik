import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdullah Keklik — Senior Software Engineer & Creative Technologist",
  description:
    "Yüksek performanslı sistemler, mimari ve akıcı kullanıcı deneyimleri üreten yazılımcı vitrini.",
  keywords: [
    "Abdullah Keklik",
    "Software Engineer",
    "Full-Stack",
    "Portfolio",
    "Next.js",
    "TypeScript",
    "Architecture",
  ],
  authors: [{ name: "Abdullah Keklik" }],
  openGraph: {
    title: "Abdullah Keklik — Senior Software Engineer & Creative Technologist",
    description: "Yüksek performanslı sistemler ve akıcı kullanıcı deneyimleri inşa ediyorum.",
    type: "website",
    locale: "tr_TR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090D16",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-canvas text-ink antialiased selection:bg-brand/30 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-canvas focus:font-semibold focus:rounded-md shadow-panel"
        >
          Doğrudan ana içeriğe geç
        </a>
        <div className="relative min-h-screen flex flex-col bg-grid-pattern">
          <div className="pointer-events-none fixed inset-0 bg-radial-vignette" />
          <div className="relative z-10 flex-1 flex flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
