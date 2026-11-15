import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = localFont({
  src: [
    {
      path: "../../public/fonts/CormorantGaramond-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/CormorantGaramond-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdullah Keklik — Creative Technologist & Digital Studio",
  description:
    "Mezopotamya'nın sakin mimarisi ve modern web mühendisliğiyle şekillenen editoryal portfolyo.",
};

export const viewport: Viewport = {
  themeColor: "#F4EFE6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased font-sans">
        <SmoothScrollProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neutral-900 focus:text-white focus:rounded"
          >
            Doğrudan ana içeriğe geç
          </a>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
