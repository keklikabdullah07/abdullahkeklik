# Implementation Plan - 0019: Editoryal Sayaç & Shutter Perde

## Değişecek ve Eklenecek Dosyalar
1. `src/components/EditorialPreloader.tsx` (Yeni bileşen): Sayaç, telemetri, Framer Motion perde geçişi, sessionStorage yönetimi.
2. `src/app/layout.tsx` (Değişiklik): `<EditorialPreloader />` bileşeninin sayfa köküne entegrasyonu.
3. `tests/unit/preloader.test.ts` (Yeni test): Bileşenin montajı, sayaç mantığı ve accessibility özniteliklerinin doğrulanması.

## Adımlar
1. `feature/0019-editorial-preloader-counter` dalını aç.
2. `EditorialPreloader.tsx` bileşenini tasarla ve uygula.
3. `layout.tsx` içine yerleştir.
4. `tests/unit/preloader.test.ts` birim testini yaz.
5. Biome linter, TypeScript typecheck ve Vitest testlerini çalıştır.
6. `next build` ile üretim derlemesini doğrula.
7. İncele ve `developer` dalına merge et.
