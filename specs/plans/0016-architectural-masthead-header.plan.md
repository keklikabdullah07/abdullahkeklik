# Uygulama Planı: 0016 — Architectural Split Masthead & Editoryal Dizin Perdesi

## Değişecek Dosyalar
1. `src/components/Header.tsx`:
   - Yeniden yapılandırılacak:
     - Sol: `ABDULLAH KEKLİK` + `[CREATIVE TECH]` rozeti.
     - Orta: Minimal canlı konum ve saat göstergesi.
     - Sağ: Durum boncuğu (`OPEN FOR WORK`), doğrudan `İletişim` butonu ve manyetik `DIRECTORY [04]` tetikleyici butonu.
     - Awwwards seviyesinde tam ekran editoryal dizin modal/overlay'i (`AnimatePresence` + `framer-motion`).
     - Tıklanınca Lenis ile ilgili bölüme sinematik geçiş.
2. `src/components/EditorialDirectoryModal.tsx` (veya `Header.tsx` içinde modüler yapı):
   - Tam ekran editoryal dizin bileşeni.
3. Test dosyaları:
   - Header ve navigasyon etkileşimlerini doğrulayan birim testleri.

## Doğrulama
1. Biome lint (`npm run lint:fix`)
2. TypeScript typecheck (`npm run typecheck`)
3. Vitest testleri (`npm run test`)
4. Canlı tarayıcı doğrulama
