# Implementation Plan - 0021: Header Renkli Marka Logosu

## Değişecek ve Eklenecek Dosyalar
1. `src/components/Header.tsx` (Düzenleme): `next/image` içe aktarımı, sol kanattaki Link içine `partridgelogo.png` çerçevesinin eklenmesi.
2. `tests/unit/header.test.ts` (Yeni test): Header bileşeninin render edilmesi, logo ve isim varlığının doğrulanması.

## Adımlar
1. `feature/0021-header-brand-logo` dalında çalışmayı başlat.
2. `src/components/Header.tsx` dosyasında `Image` bileşeniyle `partridgelogo.png`'yi entegre et.
3. `tests/unit/header.test.ts` birim testini yaz.
4. `npx biome check --write .` ve `bash scripts/check` ile tip, lint, test ve drift kontrollerini koş.
5. `next build` ile üretim derlemesini doğrula.
6. Dalı `developer`'a merge et.
