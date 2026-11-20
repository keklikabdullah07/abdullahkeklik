# Spec 0029 — Interactive System Architecture Blueprint (İnteraktif Sistem Mimarisi Şeması)

## Metadata
- **Durum:** `Shipped`
- **Risk Seviyesi:** `STANDARD`
- **Yazar:** Abdullah Keklik & AI Chief Architect
- **Tarih:** 2026-11-20
- **Mod:** EXPERIENCE
- **Yüzey(ler):** Main Page / Architecture Blueprint Section / Interactive Pipeline
- **İlişkili karar:** `docs/ROADMAP.md` & `DESIGN.md`

## 1. Problem
Arka uç ve dağıtık sistem mühendisliği (dağıtık kuyruklar, L1/L2 önbellekleme, CQRS ve transactional outbox kalıpları) web arayüzünde doğrudan görünmez. Bir sistem mimarının (Staff/Principal Engineer) sistem tasarım derinliğini, gecikme (latency) bütçelerini ve veri akışını teknik liderlere somutlaştıran interaktif bir mimari blueprint şeması gerekmektedir.

## 2. Kapsam
### İçinde (In Scope)
- 6 düğümlü (Node) uçtan uca mimari istek boru hattı:
  1. `Edge Gateway & Rate Limiter` (Anycast, Token Bucket, TLS 1.3)
  2. `Auth & Tenant Guard` (Stateless JWT, Tenant İzolasyonu)
  3. `L1/L2 Cache Layer` (Single-Flight Mutex, Redis)
  4. `.NET 9 Core Engine` (Zero-Allocation Channels, CQRS)
  5. `Event Stream & Outbox` (Transactional Outbox, Idempotent Consumer)
  6. `PostgreSQL Primary/Replica` (UUIDv7, JSON Audit Log)
- İnteraktif Blueprint UI:
  - Canlı akan veri paketleri animasyonu (CSS/Framer Motion).
  - Tıklanan düğümün sağdaki heykelsi panelde anında açılması:
    - Metrikler: Gecikme süresi (Latency), İşlem hacmi (Throughput).
    - Mimari Tasarım Kalıbı (Pattern).
    - Detaylı mühendislik gerekçesi (`// MİMARİ KARAR`).
- Çoklu dil (`tr.json`, `en.json`, `ku.json`) ve `src/types/i18n.ts` desteği.
- Command Palette entegrasyonu: `#system-architecture` kısayolu.
- Sıfır AI ikonu; saf mimari ve monospaced editoryal düzen.

### Dışında (Out of Scope)
- Harici ağır diyagram araçları (Mermaid canvas vs. kullanılmayacak; projenin Nahit taşı paletine uygun saf React/Tailwind/Framer Motion ile çizilecek).

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] AC-1: Ana sayfada `CuratedWorks` ile `TypographicManifesto` arasında `ArchitectureDiagram` bölümü yer almalıdır.
- [x] AC-2: Boru hattındaki 6 mimari düğüm görsel olarak bağlantılı olmalı ve akış yönünü göstermelidir.
- [x] AC-3: Bir düğüme tıklandığında veya klavyeyle odaklanıldığında o düğümün mimari detayları ve metrikleri inspector panelinde güncellenmelidir.
- [x] AC-4: Çoklu dil (TR, EN, KU) sözlüklerinde tüm düğüm açıklamaları eksiksiz yer almalıdır.
- [x] AC-5: Command Palette içine `#system-architecture` kısayolu eklenmelidir.
- [x] AC-6: Birim testleri yazılmalı ve `./scripts/check` 5 aşamadan da yeşil geçmelidir.

## 4. Tasarım Notu (UI ise)
- Mode: EXPERIENCE
- Density: 7
- DESIGN.md referansı: Nahit Taşı (`#F4EFE6`), Kumtaşı (`#EAE1D2`), Kavrulmuş Espresso (`#1C1613`), Terracotta vurgu (`#C8532B`).

## 5. Test Stratejisi
- **Unit:** `tests/unit/architecture-diagram.test.ts` ile veri modeli, düğümlerin varlığı ve i18n anahtarlarının doğrulanması.

## 6. Bağımlılıklar
- `framer-motion`, `lucide-react`. Sıfır harici paket.
