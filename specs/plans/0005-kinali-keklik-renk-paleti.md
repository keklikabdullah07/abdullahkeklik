# Plan 0005 — Spec 0005 Uygulama Planı

> ANEW: "Plan before build."

## Metadata
- **Spec:** [`../active/0005-kinali-keklik-renk-paleti.md`](../active/0005-kinali-keklik-renk-paleti.md)
- **Durum:** Done
- **Tarih:** 2026-11-09
- **Risk Seviyesi:** STANDARD

## 1. Strateji
Tüm sitenin renk omurgasını Kınalı Kekliğin (Chukar Partridge) toprak, kül mavisi kayalık ve mercan kırmızısı gaga/göz halkası renklerine dönüştürmek.

## 2. Etkilenen Dosyalar
- `DESIGN.md` — Token tanımları
- `tailwind.config.ts` — Brand ve canvas renkleri
- `src/app/globals.css` — CSS değişkenleri ve parlama stilleri
- `src/components/SpotlightContainer.tsx` — Işık rengi
- `src/components/HeroSection.tsx` — Başlık gradyanı ve CTA butonları
- `src/components/BirdEmblem.tsx` — Aura ve amblem parlaması
- `src/components/WingParticlesCanvas.tsx` — Tüy parçacık renkleri
- `src/components/PhysicsTotemArena.tsx` — Pul renkleri ve ışıkları
- `src/components/ShowcaseGrid.tsx` — Bento kart vurguları
- `src/components/Navbar.tsx` & `Footer.tsx` — Durum ışığı ve bağlantılar

## 3. Doğrulama
- `powershell -ExecutionPolicy Bypass -File scripts/check.ps1`
- Playwright E2E
- Görsel hakikat screenshot'ı
