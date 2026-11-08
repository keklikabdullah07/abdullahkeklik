# Plan 0003 — Spec 0003 Uygulama Planı

> ANEW: "Plan before build."

## Metadata
- **Spec:** [`../active/0003-lenis-ve-partridge-etkilesimi.md`](../active/0003-lenis-ve-partridge-etkilesimi.md)
- **Durum:** Done
- **Tarih:** 2026-11-08
- **Risk Seviyesi:** STANDARD

## 1. Strateji
`lenis` paketini kurarak tüm sayfayı akışkan pürüzsüz kaydırmaya (smooth scroll) kavuşturmak. Hero alanında kuşu (AK monogramını) fare açısına ve ışığa duyarlı hale getiren `BirdEmblem.tsx` bileşenini yazmak; ardından teknoloji etiketlerini dokunsal manyetik pullara dönüştürmek.

## 2. Etkilenen Dosyalar
- **Yeni:**
  - `src/components/SmoothScrollProvider.tsx` — Lenis React 19 yaşam döngüsü ve RAF döngüsü
  - `src/components/BirdEmblem.tsx` — Kuş formu ve metalik kanat ışığı etkileşim bileşeni
  - `src/components/MagneticPill.tsx` — Manyetik fiziksel teknoloji pulu
- **Değişen:**
  - `package.json` — `lenis` bağımlılığı
  - `src/app/page.tsx` — SmoothScrollProvider ve yeni bileşenlerin entegrasyonu
  - `src/components/HeroSection.tsx` — BirdEmblem ve MagneticPill entegrasyonu
  - `tests/e2e/home.spec.ts` — Lenis ve BirdEmblem doğrulamaları

## 3. Adımlar
1. `feature/0003-lenis-ve-partridge-etkilesimi` dalını oluşturmak.
2. `pnpm add lenis` ile paketi kurmak.
3. `SmoothScrollProvider.tsx` ile Lenis motorunu bağlamak.
4. `BirdEmblem.tsx` ile farenin konumuna göre parlayan ve kanat çırpan kuş monogramını oluşturmak.
5. `MagneticPill.tsx` ile teknoloji etiketlerine dokunsal fizik kazandırmak.
6. `scripts/check.ps1` ve Playwright testlerini koşturup yeşil kanıt üretmek.

## 4. Doğrulama
- `powershell -ExecutionPolicy Bypass -File scripts/check.ps1` (5/5)
- Playwright E2E testleri
- Görsel hakikat screenshot'ı
