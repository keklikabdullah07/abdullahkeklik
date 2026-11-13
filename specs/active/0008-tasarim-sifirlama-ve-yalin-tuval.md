# Spec 0008 — Tasarım Sıfırlama ve Yalın Başlangıç Tuvali

> **Durum:** Approved (Kullanıcı doğrudan "tasarımla ilgili ne bulduysan kaldır baştan başlayacağız" talimatı verdi)
> **Risk Seviyesi:** STANDARD (Görsel katmanların ve önceki tasarım bileşenlerinin temizlenmesi, sıfır tuval)
> **Yazar:** Partridge Agent & Co-Architect
> **Tarih:** 2026-11-13
> **Mod:** READ / OPERATE (Geçiş fazı: Tamamen sıfırlanmış nötr tuval)
> **Yüzey(ler):** Ana Sayfa (`/`), `src/app/page.tsx`, `src/app/globals.css`

---

## 1. Problem
Kullanıcı mevcut tasarımı (Chukar paleti, preloader, Matter.js fizik arenası, parçacıklar, spotlight, kinetic tipografi vb.) beğenmemiş ve tasarımla ilgili tüm bileşenlerin kaldırılarak yeni bir tasarım vizyonu için tamamen sıfırdan ("baştan başlayacağız") başlanmasını talep etmiştir.

## 2. Kapsam
### İçinde (In Scope)
1. **Sayfa Sıfırlama (`src/app/page.tsx`):**
   - Preloader, NoiseOverlay, WingParticlesCanvas, Navbar, SpotlightContainer, HeroSection, ShowcaseGrid, ApproachSection, PhysicsTotemArena ve Footer bileşenlerinin sayfadan kaldırılması.
   - Sayfanın herhangi bir stil/tasarım karmaşası içermeyen, tamamen yalın bir başlangıç tuvaline (`<main><h1>Partridge</h1><p>Temiz başlangıç tuvali.</p></main>`) dönüştürülmesi.
2. **Global CSS Temizliği (`src/app/globals.css`):**
   - Karmaşık arka plan radyal degradelerinin, özel noise katmanlarının ve eski tasarım renklerinin kaldırılıp standart Tailwind iskeletine çekilmesi.
3. **Bileşenlerin Temizliği / Arşivlenmesi (`src/components/`):**
   - Eski tasarıma ait kullanılmayan görsel bileşenlerin sayfadan ve projeden arındırılması.
4. **Test ve Derleme Sağlamlığı:**
   - Eski bileşenlere bağımlı testlerin (`tests/unit/awwwards.test.ts` vb.) temiz tuvali doğrulayacak şekilde güncellenmesi.
   - TypeScript (`npm run typecheck`), Biome (`npx biome check .`) ve birim testlerin yeşil kalması.

### Dışında (Out of Scope)
- Yeni tasarımın inşası (Kullanıcının vereceği yeni tasarım direktiflerine göre `Spec 0009` olarak planlanacaktır).

---

## 3. Kabul Kriterleri (Acceptance Criteria)
- [ ] **AC-1:** Ekranda (`/`) hiçbir eski tasarım bileşeni (preloader, fizik arenası, parçacıklar, neon/parıltı efektleri, bento kartlar) render edilmemelidir.
- [ ] **AC-2:** `src/app/page.tsx` yalın, hatasız ve temiz bir başlangıç iskeleti sunmalıdır.
- [ ] **AC-3:** `src/app/globals.css` gereksiz degrade ve eski tema CSS karmaşasından arındırılmalıdır.
- [ ] **AC-4:** `npm run typecheck` 0 hata ile geçmelidir.
- [ ] **AC-5:** `npx biome check .` lint kurallarına tam uymalıdır.
- [ ] **AC-6:** Birim testler (`vitest`) hatasız tamamlanmalıdır.
