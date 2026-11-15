# Şartname: 0023 — Footer Beyaz AK Monogramı ve Eski Logo Kalıntılarının Temizlenmesi

## 1. Amaç ve Kapsam
Kullanıcının paylaştığı ekran görüntüsündeki (`Screenshot 2026-11-16 010424.png`) sayfa altı footer künyesinde (`ABDULLAH KEKLİK STUDIO`) yer alan eski/yapay vektör kuş ikonu (`ChukarLogo`) tamamen kaldırılacak; yerine koyu zeminle tam kontrast sağlayan orijinal **Beyaz / Gümüş AK Monogramı** (`public/logo-monogram.png`) yerleştirilecektir. Ayrıca sitede kalan tüm eski logo artıkları (`works/[slug]/page.tsx` ve `not-found.tsx`) temizlenip lüks Kınalı Keklik arması (`chukar_partridge_luxury_emblem.jpg`) ve resmi marka varlıkları ile değiştirilecektir.

## 2. Kabul Kriterleri (Acceptance Criteria)
1. **Footer Künyesi (GrandFinaleContact):**
   - Eski `<ChukarLogo />` ve koyu kutucuk kaldırılmalı.
   - Yerine `public/logo-monogram.png` (Beyaz/Gümüş AK Monogramı) cömert bir ebatla (`h-10 w-[60px] sm:h-12 sm:w-[72px]`, doğal ~1.52:1 oranında) ve zarif bir beyaz parıltı filtresiyle (`drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]`) yerleştirilmeli.
   - `ABDULLAH KEKLİK STUDIO` ve `37°09'N / 38°47'E – URFA, MESOPOTAMIA` künye tipografisiyle kusursuz dikey hizalanmalı.
2. **Vaka Analizi Başlığı (works/[slug]/page.tsx):**
   - Header'daki ana sayfaya dönüş ikonunda yer alan `<ChukarLogo />` yerine kurumsal AR Monogramı (`/logo-monogram-ar.png`) veya lüks Chukar arması entegre edilmeli.
3. **404 Hata Sayfası (works/[slug]/not-found.tsx):**
   - Vektör kuş yerine lüks Kınalı Keklik madalyon arması (`/chukar_partridge_luxury_emblem.jpg`, `rounded-full border border-hairline/80 shadow-warm`) kullanılmalı.
4. **Kalite & Doğrulama:**
   - `./scripts/check` (Typecheck, Biome Lint, Vitest 27+ test) %100 yeşil geçmeli.
   - `ChukarLogo.tsx` tamamen temizlenmeli veya yönlendirilmeli.
