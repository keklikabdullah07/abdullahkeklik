# Spec 0001 — Proje İskelesi, Tasarım Sistemi ve Ana Vitrin Kabuğu

> ANEW: "No spec, no code."

## Metadata
- **Durum:** Shipped
- **Risk Seviyesi:** STANDARD
- **Yazar:** Partridge & Sistem Mimarı
- **Tarih:** 2026-11-08
- **Mod:** EXPERIENCE
- **Yüzey(ler):** Ana Sayfa (`/`), Vitrin Hero, Bento Grid
- **İlişkili karar:** [`../../docs/decisions/0001-proje-temel-mimarisi.md`](../../docs/decisions/0001-proje-temel-mimarisi.md)

## 1. Problem
Ziyaretçilerin (işverenler, geliştirici topluluğu) görebileceği, yüksek performanslı, akıcı animasyonlara ve bento-grid yapısına sahip bir geliştirici vitrinine ihtiyaç vardır. Şu an projede henüz kaynak kod, tasarım token entegrasyonu ve vitrin bileşenleri bulunmamaktadır.

## 2. Kapsam
### İçinde (In Scope)
- Next.js (App Router, TypeScript) iskeletinin kurulması
- Tailwind CSS yapılandırması ve `DESIGN.md` token'larının (Derin Obsidyen `#090D16`, Keten `#FAF9F6`, Zümrüt `#10B981`) CSS değişkenlerine/temaya bağlanması
- Framer Motion animasyon altyapısı ve 60 FPS mikro-etkileşimler
- Ana sayfa Hero bölümü (Geliştirici unvanı, dinamik durum rozeti, manifesto, eylem butonları)
- Bento Grid Vitrin bölümü (Öne çıkan 4 proje kartı: 2 kurumsal, 2 açık kaynak)
- `<EmptyState />` bileşeni (Savunmacı UI)
- Biome linter, Vitest birim testleri ve Playwright E2E yapılandırması
- `scripts/check.ps1` 5 aşamalı kanıt kapısının yeşile çekilmesi

### Dışında (Out of Scope)
- GitHub / GitLab canlı GraphQL/REST API bağlantısı (Sonraki spec)
- Çoklu dil (i18n) sözlükleri ve dil değiştirici (Sonraki spec)
- İletişim formu SMTP gönderimi (Sonraki spec)

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] AC-1: Proje TypeScript (`tsconfig.json`), Biome (`biome.json`), Vitest (`vitest.config.ts`) ve Playwright (`playwright.config.ts`) ile derlenmeli ve `scripts/check.ps1` sorunsuz yeşil dönmelidir.
- [x] AC-2: Sayfa arka planı `DESIGN.md` anayasasına uygun `#090D16` (Derin Obsidyen) olmalı, saf siyah veya jenerik mor-mavi gradyan kullanılmamalıdır.
- [x] AC-3: Hero alanında geliştirici unvanı, durumu ("Open to opportunities"), bio/manifesto ve projelere kaydırma / iletişim CTA butonları bulunmalıdır.
- [x] AC-4: Bento grid vitrininde en az 4 adet örnek proje kartı (teknoloji rozetleri, açıklama, harici link ikonu) bulunmalı; kartlar mikro-etkileşimli hover ve yumuşak fade-in animasyonu içermelidir.
- [x] AC-5: `prefers-reduced-motion: reduce` ayarı algılandığında tüm Framer Motion animasyonları devre dışı kalmalı veya ani geçişe dönmelidir (WCAG AA).
- [x] AC-6: Playwright testi sayfanın başarıyla render edildiğini ve hero başlığı ile bento kartlarının `getByRole` ile erişilebilir olduğunu doğrulamalıdır.

## 4. Tasarım Notu (UI ise)
- Mode: EXPERIENCE
- Density: 3
- Motion: 7
- Variance: 6
- DESIGN.md referansı: [`../../DESIGN.md`](../../DESIGN.md) § 2 (Token Paleti) & § 5 (15 Anti-Slop Kuralı)

## 5. Test Stratejisi
- **Unit (Vitest):** Proje kartı veri tipleri, filtreleme yardımcı fonksiyonları ve EmptyState render testi.
- **E2E (Playwright):** Sayfanın açılışı, Hero metinlerinin görünürlüğü, Bento kartlarının DOM hiyerarşisi ve erişilebilirlik rolleri.

## 6. Bağımlılıklar
- `next`, `react`, `react-dom`
- `tailwindcss`, `clsx`, `tailwind-merge`
- `framer-motion`
- `lucide-react` (erişilebilir ve hafif ikonlar)
- `@playwright/test`, `vitest`

## 7. Bilinmeyenler ve Riskler
### Bilinmeyenler (Bu spec Approved olmadan önce tümü 'çözüldü' olmalıdır)
- [x] UNK-1: Proje ilk vitrinde harici API bekleyecek mi? → Sahibi: Kullanıcı → Çözüm: Çözüldü. İlk aşamada yerel mock vitrin verisi kullanılacak, API sonraki aşamada entegre edilecek.

### Riskler
- Next.js ve Framer Motion SSR hidrasyon uyuşmazlığı → Çözüm: Animasyonlu vitrin bileşenleri `'use client'` ile izole edilecek.

## 8. Kanıt (Ship sırasında doldurulur)
- [x] `scripts/check.ps1` çıktısı temiz (5/5)
- [x] Tüm AC'ler doğrulandı
- [x] E2E testi başarılı (Playwright 1 passed)
- [x] Görsel hakikat doğrulaması tamamlandı (`artifacts/visual/.../final-gate.png`)
- [x] Spec durumu `Shipped` yapıldı
