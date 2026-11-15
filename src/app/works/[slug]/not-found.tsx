import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WorkNotFound() {
  return (
    <main className="min-h-screen bg-canvas text-ink flex flex-col items-center justify-center px-6 py-24 selection:bg-primary selection:text-primary-contrast">
      <div className="max-w-md w-full text-center space-y-8 p-8 sm:p-12 rounded-2xl bg-surface border border-hairline shadow-warm">
        <div className="flex justify-center">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-hairline/80 shadow-md">
            <Image
              src="/chukar_partridge_luxury_emblem.jpg"
              alt="Partridge Madalyon Arması"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono text-primary uppercase tracking-widest block">
            [ HATA 404 — ARŞİVDE BULUNAMADI ]
          </span>
          <h1 className="text-3xl font-bold font-sans tracking-tight text-ink">
            Proje Kaydı Mevcut Değil
          </h1>
          <p className="text-sm font-sans text-ink-muted leading-relaxed">
            İncelemek istediğiniz vaka analizi arşivde yer almıyor veya henüz kamuya açılmamış
            olabilir.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/#curated-works"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-contrast font-mono text-xs uppercase tracking-wider transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ARŞİVE GERİ DÖN</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
