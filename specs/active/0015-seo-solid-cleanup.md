# Şartname 0015: SEO Mimarisi, SOLID Refactoring ve Kod/Varlık Temizliği

> **Durum:** Approved (Kullanıcı "onaylıyorum" teyidi verdi)
> **Risk Seviyesi:** STANDARD (SEO ekleme, tip temizliği, bileşen refactoring)
> **Tarih:** 2026-11-16
> **Mod:** REFACTOR & ARCHITECTURE

---

## 1. Problem ve Hedefler

1. **Temizlik (Dead Code & Assets):**
   - Kullanılmayan `matter-js` ve `@types/matter-js` bağımlılıkları `package.json`'dan kaldırılmalı.
   - `src/types/project.ts` ve `src/data/projects.ts` içindeki artık `bentoSpan` alanı temizlenmeli.
   - `public/` dizininde kalmış, kod tarafından çağrılmayan ~40MB'lık deneme video ve görselleri temizlenmeli.

2. **SEO & Keşfedilebilirlik:**
   - `src/app/robots.ts` ve `src/app/sitemap.ts` dosyaları Next.js 15 App Router standardında oluşturulmalı.
   - `src/app/layout.tsx` içine zengin OpenGraph, Twitter Card ve JSON-LD (Person & WebSite Schema) eklenmeli.
   - `src/app/works/[slug]/page.tsx` içine her vaka analizi projesi için dinamik `generateMetadata()` eklenmeli.

3. **SOLID Refactoring:**
   - **SRP:** `Header.tsx` içerisindeki saat interval mantığı `src/hooks/useLocalTime.ts` içine çıkarılmalı.
   - **SRP:** `CuratedWorks.tsx` içerisindeki fare takip eden manyetik önizleme kartı `src/components/ProjectHoverPreview.tsx` olarak ayrıştırılmalı.
   - **OCP:** Proje kategorizasyonunda hardcoded dil kontrolleri yerine tip güvenli sınıflandırıcı veya veri modeli alanı kullanılmalı.
   - **DIP:** Projelere erişim için `src/services/projectService.ts` soyutlama katmanı oluşturulmalı.

---

## 2. Kabul Kriterleri (AC)

- [x] **AC-1:** `matter-js` ve `@types/matter-js` kaldırılmış, `npm run build` ve `npm run typecheck` hatasız olmalı.
- [x] **AC-2:** `Project` tipinden `bentoSpan` kaldırılmış olmalı.
- [x] **AC-3:** `src/app/robots.ts` ve `src/app/sitemap.ts` tüm dinamik rotaları (`/works/[slug]`) kapsayacak şekilde tanımlanmalı.
- [x] **AC-4:** `src/app/layout.tsx` OpenGraph, Twitter Card ve JSON-LD yapısal verilerini içermeli.
- [x] **AC-5:** `src/app/works/[slug]/page.tsx` dinamik `generateMetadata()` üretmeli.
- [x] **AC-6:** `useLocalTime` ve `ProjectHoverPreview` bileşenleri SRP ilkelerine göre ayrıştırılmalı.
- [x] **AC-7:** Tüm testler (`npm run test`) ve tip kontrolü (`npm run typecheck`) yeşil olmalı.
