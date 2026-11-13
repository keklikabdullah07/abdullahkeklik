# Plan 0001 — Spec 0001 Uygulama Planı

> ANEW: "Plan before build."

## Metadata
- **Spec:** [`../active/0001-scaffold-ve-vitrin-kabugu.md`](../active/0001-scaffold-ve-vitrin-kabugu.md)
- **Durum:** Done
- **Tarih:** 2026-11-08
- **Risk Seviyesi:** STANDARD

## 1. Strateji
Next.js (App Router) ve Tailwind CSS altyapısını kurup `DESIGN.md` token'larıyla tam uyumlu hale getirmek; ardından Framer Motion ile desteklenen akıcı bir Hero ve Bento-Grid vitrin kabuğu inşa etmek. `scripts/check.ps1` (TypeScript, Biome, Vitest, Bilinmeyenler ve Drift) 5 aşamalı kanıt kapısını yeşile çevirmek ve Playwright testi ile doğrulamak.

## 2. Etkilenen Dosyalar
- **Yeni:**
  - `package.json` — Temel bağımlılıklar ve script'ler
  - `tsconfig.json` — TypeScript yapılandırması
  - `postcss.config.mjs` & `tailwind.config.ts` — Tailwind ve renk token'ları
  - `playwright.config.ts` — Playwright E2E yapılandırması
  - `src/app/layout.tsx` — Kök düzen, meta etiketleri ve font tanımları
  - `src/app/page.tsx` — Ana vitrin sayfası
  - `src/app/globals.css` — Obsidyen tema, CSS değişkenleri ve erişilebilirlik
  - `src/components/HeroSection.tsx` — Hero giriş alanı ve eylem butonları
  - `src/components/ShowcaseGrid.tsx` — Bento grid vitrin kartları
  - `src/components/EmptyState.tsx` — Boş liste savunmacı UI bileşeni
  - `src/data/projects.ts` — Mock vitrin projeleri (bireysel + kurumsal)
  - `tests/unit/projects.test.ts` — Vitrin verisi ve EmptyState testleri
  - `tests/e2e/home.spec.ts` — Playwright ana sayfa erişilebilirlik ve render testi
- **Değişen:**
  - `biome.json` — Next.js ve test dizinlerine uygun lint kuralları
  - `vitest.config.ts` — React/DOM test ortamı uyumu

## 3. Adımlar
1. **Adım 1:** Git üzerinde `feature/0001-scaffold-ve-vitrin-kabugu` dalını oluşturmak.
2. **Adım 2:** `package.json`, `tsconfig.json`, `tailwind.config.ts` ve `playwright.config.ts` yapılandırmalarını oluşturmak; bağımlılıkları yüklemek.
3. **Adım 3:** `src/app/globals.css` ve `layout.tsx` içinde `DESIGN.md` token'larını (Obsidyen, Keten, Zümrüt) bağlamak.
4. **Adım 4:** Hero ve Bento-Grid vitrin bileşenlerini (`HeroSection.tsx`, `ShowcaseGrid.tsx`, `EmptyState.tsx`) inşa etmek.
5. **Adım 5:** Vitest birim testlerini ve Playwright E2E testlerini yazmak.
6. **Adım 6:** `scripts/check.ps1` ile 5 aşamalı kalite kontrolünü koşup yeşil kanıt üretmek.

## 4. Doğrulama
- `powershell -ExecutionPolicy Bypass -File scripts/check.ps1` → 5/5 Yeşil
- Playwright E2E testleri → Başarılı
- Spec AC-1 ... AC-6 tek tek doğrulanacak

## 5. Geri Alma (Rollback)
- Dalı silmek veya önceki commite `git reset --hard` dönmek.

## 6. İnsan Onayı
- [x] Spec sahibi: Partridge & AI Co-Architect · Tarih: 2026-11-08
