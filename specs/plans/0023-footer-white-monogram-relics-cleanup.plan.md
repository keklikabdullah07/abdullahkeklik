# Plan: 0023 — Footer Beyaz AK Monogramı ve Eski Logo Kalıntılarının Temizlenmesi

## Değişecek Dosyalar
1. `src/components/GrandFinaleContact.tsx`:
   - `ChukarLogo` importu kaldırılacak, `next/image` eklenecek.
   - `ABDULLAH KEKLİK STUDIO` künyesinin yanına `src="/logo-monogram.png"` beyaz AK monogramı (`h-10 w-[60px] sm:h-12 sm:w-[72px]`, `unoptimized`) eklenecek.
2. `src/app/works/[slug]/page.tsx`:
   - `ChukarLogo` yerine `next/image` ile `/logo-monogram-ar.png` ve ana sayfa marka kilidi entegre edilecek.
3. `src/app/works/[slug]/not-found.tsx`:
   - `ChukarLogo` yerine `next/image` ile `/chukar_partridge_luxury_emblem.jpg` madalyonu entegre edilecek.
4. `tests/unit/contact.test.ts`:
   - Footer künyesinde beyaz AK monogramının ve stüdyo metninin yer aldığını doğrulayan birim testi yazılacak.
5. Doğrulama:
   - `./scripts/check` çalıştırılacak ve tüm kapılar yeşil geçecek.
