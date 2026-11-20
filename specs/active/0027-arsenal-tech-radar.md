# Spec 0027 — Arsenal & Tech Radar (Mühendislik Radarı ve Mimari Tercihler)

## Metadata
- **Durum:** `Shipped`
- **Risk Seviyesi:** `STANDARD`
- **Yazar:** Abdullah Keklik & AI Chief Architect
- **Tarih:** 2026-11-20
- **Mod:** EXPERIENCE
- **Yüzey(ler):** Main Page / Bento Section / Tech Radar Component
- **İlişkili karar:** `docs/ROADMAP.md` & `DESIGN.md`

## 1. Problem
Geleneksel geliştirici portföylerinde yer alan çocukça yüzde çubukları ("%90 C#") hem teknik gerçeklikten uzaktır hem de kıdemli mühendislik ve mimari ağırlığı temsil etmez. Sektör standardı ThoughtWorks Teknoloji Radarı metodolojisiyle; üretimde güvenilen omurga (Adopt), performans ve zanaatta derinleşilen araçlar (Trial), ve sistem sağlığı için bilinçli olarak reddedilen yaklaşımların (Avoid/Hold) gerekçeleriyle sergilendiği editoryal bir Bento Grid gereklidir.

## 2. Kapsam
### İçinde (In Scope)
- ThoughtWorks disiplininde 3 ana kademe:
  1. **ADOPT (Üretim Omurgası):** .NET 9, C#, TypeScript, PostgreSQL, Linux, Next.js, Tailwind CSS.
  2. **TRIAL / ASSESS (Keşif & Yüksek Zanaat):** Rust, WebAssembly (WASM), WebGPU, Biome.
  3. **HOLD / AVOID (Bilinçli Olarak Reddedilenler):** Aşırı katmanlı şişkin ORM'ler, mikro-ön yüz kaosu, kontrolsüz npm paket bağımlılığı, yüzeysel AI slop şablonları.
- Editoryal Bento Grid tasarımı:
  - Nahit Taşı & Sıcak Kumtaşı mat yüzeyler (`bg-surface/80`, `border-hairline`, `font-mono`).
  - Her teknoloji/yaklaşım için tıklandığında veya fare üzerine geldiğinde açılan editoryal mimari gerekçe notu ("Neden buradayız?").
  - Kategori filtreleri veya doğrudan 3 sütunlu / bento kart düzeni.
- Çoklu dil (`tr.json`, `en.json`, `ku.json`) ve `src/types/i18n.ts` desteği.
- Command Palette entegrasyonu: Command Palette'e `#tech-radar` hızlı atlama komutu ekleme.
- Erişilebilirlik (WCAG AA): `role="region"`, `aria-label`, klavye gezintisi ve odak halkaları.

### Dışında (Out of Scope)
- Harici karmaşık radar grafik kütüphaneleri (saf CSS/Tailwind ve Framer Motion ile sıfır bağımlılık).

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] AC-1: Ana sayfada `TypographicManifesto` ile `EditorialBio` arasında `ArsenalTechRadar` bileşeni yer almalıdır.
- [x] AC-2: Bileşen 3 kademeyi (Adopt, Trial, Hold/Avoid) editoryal bir bento düzeninde net olarak sergilemelidir.
- [x] AC-3: Her öğe seçildiğinde veya odaklandığında mimari gerekçe metni görünmelidir.
- [x] AC-4: Çoklu dil (TR, EN, KU) metinleri tüm dillerde eksiksiz olmalıdır.
- [x] AC-5: Command Palette ve Directory Modal içinde `#tech-radar` hedefi gezilebilir olmalıdır.
- [x] AC-6: Birim testleri yazılmalı ve `./scripts/check` 5 aşamadan da yeşil geçmelidir.

## 4. Tasarım Notu (UI ise)
- Mode: EXPERIENCE
- Density: 7
- DESIGN.md referansı: Nahit Taşı (`#F4EFE6`), Kumtaşı yüzey (`#EAE1D2`), Kavrulmuş Espresso (`#1C1613`), Terracotta vurgu (`#C8532B`).

## 5. Test Stratejisi
- **Unit:** `tests/unit/tech-radar.test.ts` ile veri bütünlüğü, kademelerin varlığı ve i18n anahtarlarının doğrulanması.

## 6. Bağımlılıklar
- `framer-motion`, `lucide-react`. Sıfır yeni bağımlılık.
