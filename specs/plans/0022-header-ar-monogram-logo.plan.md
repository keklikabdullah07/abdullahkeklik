# Implementation Plan - 0022: Header Parlak Siyah ve Bakır AR Monogramı

## Değişecek ve Eklenecek Dosyalar
1. `public/logo-monogram-ar.png` (Görsel kopyası): `Parlak Siyah ve Bakır AR Monogramı.png` dosyasının web-safe versiyonu.
2. `src/components/Header.tsx` (Düzenleme): Logonun cömert ebatta (`h-10 sm:h-12 w-auto`, ~44-48px) saydam olarak marka kilidine yerleştirilmesi.
3. `tests/unit/header.test.ts` (Güncelleme): Yeni monogram görseli ve test özniteliklerinin doğrulanması.

## Adımlar
1. `feature/0022-header-ar-monogram-logo` dalında çalışmayı başlat.
2. `Header.tsx` içinde logo kaynağını ve genişletilmiş boyutlandırmayı uygula.
3. `tests/unit/header.test.ts` testini güncelle.
4. `npx biome check --write .` ve `bash scripts/check` ile tüm kontrolleri sağla.
5. `next build` ile üretim derlemesini onayla.
6. Dalı `developer`'a merge et.
