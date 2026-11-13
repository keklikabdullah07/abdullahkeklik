# Spec 0004 — Grail Seviyesi Fizik Arenası ve Partridge Parçacık Sahnesi

> ANEW: "No spec, no code."

## Metadata
- **Durum:** Shipped
- **Risk Seviyesi:** STANDARD
- **Yazar:** Abdullah Keklik & Sistem Mimarı
- **Tarih:** 2026-11-09
- **Mod:** EXPERIENCE
- **Yüzey(ler):** Arka Plan (Partridge Particle Wing Trail), Teknoloji Arenası (Matter.js Physics Playground), Sinematik Bento Kartları
- **İlişkili karar:** [`../../docs/decisions/0001-proje-temel-mimarisi.md`](../../docs/decisions/0001-proje-temel-mimarisi.md)

## 1. Problem
İlk prototiplerdeki statik kart ve çip düzeni, sitenin Awwwards / Site of the Day kalitesinde bir dijital sahneye dönüşmesini engellemektedir. Grail'deki gibi yerçekimi ve çarpışma fiziğine sahip interaktif bir teknoloji arenası (Matter.js), fareyi takip eden akışkan gümüş/zümrüt kanat parçacıkları ve sinematik derinlik gerekmektedir.

## 2. Kapsam
### İçinde (In Scope)
- **Partridge Wing Particle Trail (`WingParticlesCanvas.tsx`):** Fare hareketine ve scroll ivmesine duyarlı, ekranda sönerek kaybolan 60 FPS Canvas tabanlı gümüş/zümrüt tüy ve ışık parçacıkları.
- **Matter.js Fiziksel Teknoloji Arenası (`PhysicsTotemArena.tsx`):**
  - Teknoloji pullarının (Rust, TypeScript, Go, Next.js, Kafka, PostgreSQL, Docker, Tailwind) yerçekimiyle sahneye dökülmesi.
  - Ziyaretçinin fareyle (MouseConstraint) pulları tutup fırlatabilmesi, çarpıştırması.
  - "Yeni Pul Ekle" ve "Yerçekimini Sıfırla" gibi etkileşimli kontroller.
- **Sinematik Kavisli Bento Sahnesi:** Kartların üzerine gelindiğinde derinlik kazandığı (perspective + scale) ve önizlemelerin öne çıktığı düzen.
- **Performans & Erişilebilirlik (WCAG AA):**
  - `prefers-reduced-motion: reduce` ayarında fizik motoru ve parçacıkların donup temiz statik karta dönüşmesi.
  - Sayfa görünür olmadığında (offscreen) Matter.js döngüsünün uykuya (sleep) geçmesi.
- `scripts/check.ps1` 5 aşamalı kanıt zincirinin yeşil kalması.

### Dışında (Out of Scope)
- WebGL tabanlı ağır 3D GLTF model yüklemeleri.

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] AC-1: `matter-js` ve `@types/matter-js` bağımlılıkları yüklenmeli, TypeScript ve Biome denetimlerinden temiz geçmelidir.
- [x] AC-2: Ziyaretçi fareyi hareket ettirdiğinde Canvas üzerinde süzülen ve sönen organik gümüş/zümrüt kanat parçacıkları oluşmalıdır.
- [x] AC-3: `PhysicsTotemArena` bileşeni yerçekimli, sınırları belirlenmiş bir alanda teknoloji pullarını fiziksel olarak çarpıştırmalı ve fareyle tutulup fırlatılmasına izin vermelidir.
- [x] AC-4: `prefers-reduced-motion` algılandığında parçacık efekti ve fizik simülasyonu otomatik olarak statik görünüme geçmelidir.
- [x] AC-5: `scripts/check.ps1` 5 aşamalı kanıt zinciri ve Playwright testleri başarıyla tamamlanmalı, görsel hakikat screenshot'ı alınmalıdır.

## 4. Tasarım Notu
- Mode: EXPERIENCE
- Density: 4
- Motion: 9
- Variance: 8

## 5. Doğrulama
- [x] `scripts/check.ps1` (5/5 temiz)
- [x] Playwright E2E testi geçti
- [x] Görsel hakikat screenshot'ı alındı (`artifacts/visual/.../final-gate.png`)
- [x] Spec durumu `Shipped` yapıldı
