# Plan 0007 — Partridge Awwwards Seviyesi Yeniden Tasarımı ve Kinetik Deneyim Yüzeyi

> **Spec:** [`specs/active/0007-awwwards-redesign-experience.md`](../active/0007-awwwards-redesign-experience.md)
> **Durum:** Approved (Kullanıcı tercihlerine göre hazırlandı)
> **Tarih:** 2026-11-11
> **Risk Seviyesi:** HIGH

---

## 1. Strateji
Awwwards standardında bir dijital deneyim inşa etmek için 6 temel sütun hayata geçirilecektir:
1. **Preloader / Curtain Reveal:** Sayfa yüklenişinde pürüzsüz %0-%100 sayacı ve yukarı çekilen perde.
2. **Kinetik Tipografi:** `SplitType` + `gsap.fromTo` maskeli reveal ile `KineticHeading` bileşeni.
3. **Organik Film Greni & Atmosfer:** `NoiseOverlay` (SVG `feTurbulence`) ve hairline cam bordürler (`border-white/10`).
4. **Manyetik Butonlar:** `gsap` kütleçekim fiziği ile imleci çeken ve elastik dönen `MagneticButton`.
5. **Spotlight & Bento Card Geliştirmesi:** Kartlara imleç odaklı radial-gradient ışık huzmesi ve lüks editoryal hiyerarşi.
6. **Mevcut Bölümlerin Entegrasyonu:** `HeroSection`, `ShowcaseGrid`, `PhysicsTotemArena`, `ApproachSection`, `Navbar` ve `Footer` bileşenlerinin yeni kinetik mimariye ve Kınalı Keklik (Obsidyen & Terracotta) paletine tam uyumlu hale getirilmesi.

---

## 2. Etkilenen Dosyalar
- **Yeni:**
  - `src/components/NoiseOverlay.tsx` — Sinematik film grain katmanı.
  - `src/components/Preloader.tsx` — Awwwards perde ve sayaç açılış sekansı.
  - `src/components/KineticHeading.tsx` — SplitType maskeli harf/kelime açılışı.
  - `src/components/MagneticButton.tsx` — Yay fiziğine sahip manyetik buton bileşeni.
  - `tests/unit/AwwwardsMotion.test.tsx` — Kinetik ve preloader bileşen birim testleri.
- **Değişen:**
  - `src/app/page.tsx` — Preloader, NoiseOverlay ve yenilenmiş akışın entegrasyonu.
  - `src/components/HeroSection.tsx` — Kinetik tipografi, editoryal chukar kimliği ve magnetic CTA entegrasyonu.
  - `src/components/ShowcaseGrid.tsx` — Spotlight ve editoryal kart estetiği güçlendirmesi.
  - `src/components/PhysicsTotemArena.tsx` — Renk ve atmosfer uyumu, reduced motion optimizasyonu.
  - `src/components/ApproachSection.tsx` — Editoryal ritim ve kinetik başlık entegrasyonu.
  - `src/components/Navbar.tsx` — Minimalist hairline cam navigasyon ve durum göstergesi.
  - `src/components/Footer.tsx` — Büyük tipografi kapanışı ve editoryal imza.
  - `docs/PROJECT-MAP.md` — Yeni spec ve bileşenlerin haritaya işlenmesi.

---

## 3. Adımlar
1. **Adım 1: Temel Awwwards Hareket Primitifleri (Noise, Preloader, KineticHeading, MagneticButton)**
   - `NoiseOverlay.tsx`, `Preloader.tsx`, `KineticHeading.tsx`, `MagneticButton.tsx` bileşenlerini oluştur.
2. **Adım 2: Hero ve Ana Yüzeylerin Editoryal Dönüşümü**
   - `HeroSection.tsx`, `Navbar.tsx`, `ShowcaseGrid.tsx`, `ApproachSection.tsx`, `Footer.tsx` bileşenlerini güncelle.
3. **Adım 3: Sayfa Orkestrasyonu ve globals.css Entegrasyonu**
   - `src/app/page.tsx` ve `src/app/globals.css` içinde Lenis + GSAP ticker ve preloader zincirini bağla.
4. **Adım 4: Testler ve Doğrulama**
   - Vitest birim testlerini ekle, `./scripts/check` (Typecheck, Lint, Unit Test) çalıştır.
   - Headless tarayıcı (Playwright) ile sayfa görünürlüğünü ve görsel doğruluğunu test et.

---

## 4. Doğrulama
- `./scripts/check` → 0 hata
- E2E / Playwright testi ile sayfanın 60 FPS çalıştığı ve preloader sonrası tüm bölümlerin DOM üzerinde render edildiği doğrulanacak.
