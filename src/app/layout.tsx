import { EditorialPreloader } from "@/components/EditorialPreloader";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { LanguageProvider } from "@/context/LanguageContext";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abdullahkeklik.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdullah Keklik — Creative Technologist & Digital Studio",
    template: "%s · Abdullah Keklik",
  },
  description:
    "Mezopotamya'nın sakin mimarisi ve modern web mühendisliğiyle şekillenen editoryal portfolyo.",
  keywords: [
    "Abdullah Keklik",
    "Creative Technologist",
    "Full-Stack Engineer",
    "Rust",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Awwwards",
    "Editoryal Tasarım",
  ],
  authors: [{ name: "Abdullah Keklik", url: siteUrl }],
  creator: "Abdullah Keklik",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Abdullah Keklik — Digital Studio",
    title: "Abdullah Keklik — Creative Technologist & Digital Studio",
    description:
      "Mezopotamya'nın sakin mimarisi ve modern web mühendisliğiyle şekillenen editoryal portfolyo.",
    images: [
      {
        url: "/logo-monogram-ar.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Keklik — Creative Technologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Keklik — Creative Technologist & Digital Studio",
    description:
      "Mezopotamya'nın sakin mimarisi ve modern web mühendisliğiyle şekillenen editoryal portfolyo.",
    images: ["/logo-monogram-ar.png"],
    creator: "@keklikabdullah",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Abdullah Keklik",
      jobTitle: "Creative Technologist & Full-Stack Engineer",
      url: siteUrl,
      image: `${siteUrl}/logo-monogram-ar.png`,
      sameAs: [
        "https://github.com/keklikabdullah07",
        "https://gitlab.com/keklikabdullah07",
        "https://www.linkedin.com/in/keklikabdullah/",
      ],
      description:
        "Full-stack mühendisliği, sistem mimarisi ve Awwwards kalitesinde editoryal web deneyimleri üreten bağımsız yaratıcı teknolojist.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Şanlıurfa",
        addressCountry: "TR",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Abdullah Keklik",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
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
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Static trusted JSON-LD structured data for SEO
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <EditorialPreloader />
          <SmoothScrollProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neutral-900 focus:text-white focus:rounded"
            >
              Doğrudan ana içeriğe geç
            </a>
            {children}
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
