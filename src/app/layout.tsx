import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    <html lang="tr">
      <body className="antialiased">
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
