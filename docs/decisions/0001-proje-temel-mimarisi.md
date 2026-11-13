# ADR 0001 — Partridge Geliştirici Vitrini Temel Mimarisi ve Teknoloji Seçimi

> **Mimari Karar Kaydı (Architectural Decision Record)**
> Michael Nygard kalıbı: Context → Decision → Consequences.

## Metadata
- **Durum:** Accepted
- **Tarih:** 2026-11-08
- **Karar veren:** Partridge & Sistem Mimarı

## 1. Context (Bağlam)
Partridge, yazılımcının GitHub ve GitLab üzerindeki bireysel ve kurumsal projelerini, deneyimlerini ve teknik yetkinliğini sergileyen yüksek kaliteli, şık, akıcı animasyonlara sahip bir vitrin (portfolio/showcase) web sitesidir.
Sitenin yönetim paneline ihtiyacı yoktur; herkese açık, performanslı ve SEO uyumlu bir reklam/vitrin deneyimi sunmalıdır.
Ziyaretçiyi büyüleyen mikro-etkileşimler (spring animasyonları, layout geçişleri, bento grid vitrin) barındırmalı ve ANEW 3 Katmanlı Harness anayasasına tam uyumlu olmalıdır.

## 2. Decision (Karar)
1. **Platform & Framework:** Next.js (App Router, TypeScript, React 19). Yüksek SEO performansı, OpenGraph desteği ve statik/ISR üretim kabiliyeti için seçildi.
2. **Tasarım & UI Sistemi:** Tailwind CSS + Radix UI primitifleri. `DESIGN.md` token'ları (Derin Obsidyen `#090D16`, Keten `#FAF9F6`, Zümrüt Yeşili `#10B981` vurgusu) ile 15 anti-slop kuralı işletilecektir.
3. **Tasarım Arketipi:** `EXPERIENCE` modu (Görsel yoğunluk: 3/10, Hareket derinliği: 7/10, Asimetri: 6/10).
4. **Animasyon Motoru:** Framer Motion (Motion). 60 FPS spring animasyonları, scroll-driven reveal ve yumuşak bento-kart etkileşimleri.
5. **Veri Modeli:** GitHub GraphQL / REST ve GitLab REST API entegrasyonu; API anahtarlarının sunucu tarafında tutulduğu (Server Components) ve API kısıtlamalarına karşı yerel Markdown/JSON fallback mekanizması.
6. **Erişilebilirlik & Test:** WCAG AA uyumu, Playwright e2e testleri (`getByRole` a11y-first), Biome linter ve Vitest birim testleri.
7. **Çoklu Dil (i18n):** TR / EN dil desteği.

## 3. Etkilenen Dosyalar ve Doğrulama
### Etkilenen Dosyalar
- `AGENTS.md`
- `DESIGN.md`
- `package.json`
- `playwright.config.ts`
- `vitest.config.ts`
- `biome.json`
- `src/app/layout.tsx`
- `src/app/page.tsx`

### Doğrulama
- `npx tsx scripts/check-adr-drift.ts` (Harness invariant kontrolü)
- `powershell -ExecutionPolicy Bypass -File scripts/check.ps1` (5 aşamalı kanıt kapısı)

## 4. Consequences (Sonuçlar)
### Olumlu
- Mükemmel Core Web Vitals ve sayfa yükleme performansı.
- Ziyaretçilerde hayranlık bırakan modern, akıcı ve erişilebilir kullanıcı deneyimi.
- Veritabanı ve sunucu maliyeti olmadan sıfır bakım yükü.
- Keten ve obsidyen paletiyle yapay zeka jenerik şablonlarından (AI slop) uzak, özgün tasarım.

### Olumsuz
- API kotalarını aşmamak için GitHub/GitLab yanıtlarının ISR veya önbellek ile yönetilmesi gerekir.
- Yoğun animasyonlarda düşük donanımlı cihazlar için `prefers-reduced-motion` hassasiyeti şarttır.

### Nötr
- İçerik güncellemeleri kod repository'si veya bağlı Git servisleri üzerinden tetiklenir.

## 5. Alternatifler (Düşünülen ve Reddedilen)
- **Astro / Vanilla Vite:** Düşünüldü ancak Next.js App Router'ın dinamik Server-Side API maskeleme ve Framer Motion ile olgun ekosistem birlikteliği tercih edildi.
- **Relational DB / Headless CMS:** Vitrin için aşırı mühendislik ve bakım maliyeti getireceği için reddedildi.

## 6. Tarihçe
- 2026-11-08: Mülakat tamamlandı ve kabul edildi (Accepted).
