# Spec 0007 — Partridge Awwwards Seviyesi Yeniden Tasarımı ve Kinetik Deneyim Yüzeyi

> **Durum:** Approved (Kullanıcı tarafından onaylandı)
> **Risk Seviyesi:** HIGH (Ana vitrin ve tüm bileşenlerin Awwwards standartlarında yeniden tasarımı)
> **Yazar:** Partridge Agent & Co-Architect
> **Tarih:** 2026-11-11
> **Mod:** EXPERIENCE (DESIGN.md § 1 & SOTD Rehberi)
> **Yüzey(ler):** Ana Sayfa (`/`), Navbar, Hero, Showcase Grid, Physics Totem Arena, Approach, Footer

---

## 1. Problem
Mevcut vitrin sayfası işlevsel bileşenlere (Matter.js, Lenis, Parçacıklar) sahip olsa da; sayfa açılış koreografisi (preloader/curtain reveal), kinetik editoryal tipografi (SplitType maskeli harf/kelime reveal), scroll-pinned derinlik sahneleri ve Awwwards jürisini etkileyecek üst düzey görsel cila (film grain, mikro-etkileşimler, ritmik editoryal kompozisyon) henüz bir bütün halinde "Site of the Day" seviyesine kilitlenmemiştir.

## 2. Kapsam
### İçinde (In Scope)
1. **Preloader & Curtain Reveal:** Sayfa ilk yüklendiğinde Awwwards standardı minimalist yüzdelik sayaç ve pürüzsüz perde açılış animasyonu.
2. **Kinetik Tipografi (SplitType + GSAP):** Hero ve ana başlıkların alttan maskeli çizgilerle süzülerek açılması (`KineticHeading`).
3. **Organik Atmosfer & Doku:** Arka planda zarif SVG `<feTurbulence>` film greni, Obsidian (#090D16) zemin, Terracotta (#D9532F) ve Keten (#FAF9F6) editoryal renk dengesi, hairline cam bordürler (`border-white/10`).
4. **Scroll-Pinned & Parallax Bento Showcase:** Proje kartlarının fare odaklı Spotlight aydınlatması, mikro etiketler ve yüksek kontrastlı etkileşimli CTA'larla zenginleştirilmesi.
5. **Manyetik Butonlar & Dokunsal Etkileşim:** CTA butonlarında ve interaktif haplarda pürüzsüz `gsap` kütleçekim etkisi.
6. **Matter.js Totem & Parçacık Harmonisi:** Fizik arenası ve kanat parçacıklarının arka planla pürüzsüz kaynaşması ve 60 FPS performansı.
7. **Erişilebilirlik ve Reduced Motion:** `prefers-reduced-motion: reduce` durumunda tüm uzamsal fırlamaların kapanması, WCAG AA kontrastı ve klavye odağı.

### Dışında (Out of Scope)
- Harici backend/veritabanı şema değişiklikleri veya kimlik doğrulama.
- Çok sayfalı yönetim paneli (Dashboard) CRUD geliştirmesi.

---

## 3. Kabul Kriterleri (Acceptance Criteria)
- [ ] **AC-1:** Sayfa yüklendiğinde zarif bir preloader/curtain reveal animasyonu çalışmalı, tamamlandığında sayfa içeriği akıcı bir şekilde sahneye girmelidir.
- [ ] **AC-2:** Hero başlığı ve bölüm başlıkları `KineticHeading` (SplitType maskeli reveal) ile harf/satır bazında akıcı biçimde sahnelenmelidir.
- [ ] **AC-3:** Arka planda `NoiseOverlay` (SVG film grain) dokusu bulunmalı, düz dijital CSS hissiyatı organik bir sinematik derinliğe dönüşmelidir.
- [ ] **AC-4:** Showcase Grid kartları imleç takipli `Spotlight` aydınlatmasına ve etkileşimli mikro-detaylara sahip olmalıdır.
- [ ] **AC-5:** Manyetik butonlar (`MagneticButton` / `MagneticPill`) imleci yumuşak bir yay fiziğiyle takip etmeli ve fare ayrıldığında elastik şekilde geri dönmelidir.
- [ ] **AC-6:** `prefers-reduced-motion: reduce` aktifken tüm GSAP kinetik hareketleri ve parçacık fırlamaları yumuşak statik/fade görünümüne geçmelidir.
- [ ] **AC-7:** `./scripts/check` (Typecheck + Lint + Unit testler) 0 hata ile yeşil sonuç vermelidir.
- [ ] **AC-8:** Headless Playwright testi ile sayfa boş kalmadığı (`toBeVisible()`, `boundingBox() > 0`) ve 60 FPS bütçesine uyulduğu görsel olarak doğrulanmalıdır.

---

## 4. Tasarım Notu
- **Mode:** EXPERIENCE
- **Visual Density:** 4 (Editoryal, geniş negatif boşluklar, odaklı vitrin)
- **Renk Paleti:** Kınalı Keklik Doğal Paleti — Deep Obsidian (`#090D16`), Terracotta Crimson (`#D9532F`), Chukar Slate (`#7A7265`), Sand / Keten (`#FAF9F6`), Muted Slate (`#94A3B8`).
- **Referans:** `DESIGN.md` § 1, `docs/guides/04_Awwwards_Kreatif_Frontend_ve_Hareket_Mimarisi.md` ve `awwwards-creative-dev` becerisi.

---

## 5. Test Stratejisi
- **Unit & Component (Vitest):** Preloader, KineticHeading, MagneticButton ve ShowcaseGrid bileşen render testleri.
- **E2E / Visual Ground Truth (Playwright):** Sayfanın açılışı, preloader sonrası vitrinin görünürlüğü ve interaktif öğelerin DOM üzerinde doğru pozisyonlanması.

---

## 6. Bağımlılıklar
- `gsap`, `@studio-freight/react-lenis`, `split-type`, `lucide-react`, `matter-js` (halihazırda projede mevcut).

---

## 7. Bilinmeyenler ve Riskler
- **Bilinmeyenler:** Tümü çözüldü (Kullanıcı mülakatında Koyu Obsidyen, Hibrit Kinetik ve Ana Vitrin Kapsamı seçildi).
- **Risk 1:** SplitType SSR/Hydration sırasında metin titremesi (FOUC).
  - *Mitigation:* `useLayoutEffect` veya `useEffect` içinde DOM hazır olduğunda split edilmesi ve unmount sırasında `split.revert()` çağrılması.
- **Risk 2:** Parçacıklar + Matter.js + Lenis aynı anda çalışırken düşük donanımlı cihazlarda FPS düşüşü.
  - *Mitigation:* `gsap.ticker.lagSmoothing(0)`, Lenis rAF kilidi, mobilde parçacık sayısının %50 azaltılması ve reduced-motion kontrolü.
