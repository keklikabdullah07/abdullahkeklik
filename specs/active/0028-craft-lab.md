# Spec 0028 — Craft Lab & Micro-Physics (Deneysel Zanaat ve Arayüz Fiziği Laboratuvarı)

## Metadata
- **Durum:** `Shipped`
- **Risk Seviyesi:** `STANDARD`
- **Yazar:** Abdullah Keklik & AI Chief Architect
- **Tarih:** 2026-11-20
- **Mod:** EXPERIENCE
- **Yüzey(ler):** Main Page / Craft Lab Bento Section / Component Playground
- **İlişkili karar:** `docs/ROADMAP.md` & `DESIGN.md`

## 1. Problem
Üst düzey tasarım mühendisliği (Design Engineering) portföylerinde kurumsal işler kısıtlıdır; form ve veri listelerinden ibarettir. Teknik liderlerin (CTO, Lead Architect) bir mühendisin saf matematik, yay fiziği (spring kinetics), 60 FPS kare bütçesi ve deterministik sistem refleksi seviyesini test edebileceği kısıtsız bir zanaat laboratuvarı (Craft Lab) gerekmektedir.

## 2. Kapsam
### İçinde (In Scope)
- Editoryal `SECTION [05] — CRAFT LAB & MICRO-PHYSICS` bölümü.
- **Deney 1: Spring Kinetics & Inertia Engine (Yay Fiziği Laboratuvarı):**
  - Sürüklenebilir (drag & drop), bırakıldığında yay formülleriyle yerine oturan taktil taş plaka.
  - Canlı fizik ayarları: `Stiffness (Gerilim)`, `Damping (Sönümleme)`, `Mass (Kütle)`.
  - Canlı telemetri: Gerçek zamanlı koordinat sapması ve hız.
- **Deney 2: Cryptographic Block Visualizer (Deterministik Hash Blokları):**
  - Girdinin anlık SHA-256 / hex bloklarına ayrışmasını gösteren monospaced kriptografik kart.
- **Deney 3: Tactile Audio Synthesis (Akustik Taktil Geri Bildirim):**
  - Web Audio API ile sıfır harici ses dosyası olmaksızın üretilen 40ms 120Hz sönümlü Leica deklanşör/kadran klik sesi (varsayılan sessiz, kullanıcı tıklamasıyla çalar).
- Sıfır AI ikonu; saf tipografi, Nahit Taşı & Kumtaşı zeminleri (`bg-surface/80`, `border-hairline`).
- Çoklu dil (`tr.json`, `en.json`, `ku.json`) ve `src/types/i18n.ts` desteği.
- Command Palette entegrasyonu: `#craft-lab` kısayolu.

### Dışında (Out of Scope)
- Ağır oyun motorları veya harici fizik kütüphaneleri (saf Framer Motion springs ve native Web APIs).

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] AC-1: Ana sayfada `EditorialBio` ile `GrandFinaleContact` arasında `CraftLab` bölümü yer almalıdır.
- [x] AC-2: Deney 1'deki taktil plaka fare/dokunma ile sürüklenebilmeli, bırakıldığında ayarlanan fizik parametrelerine göre yaylanarak yerine dönmelidir.
- [x] AC-3: Deney 2'de kullanıcı metin girdiğinde kriptografik bloklar gerçek zamanlı güncellenmelidir.
- [x] AC-4: Deney 3'teki ses sentezi tarayıcı izinlerine uygun olmalı ve hata fırlatmamalıdır.
- [x] AC-5: Hiçbir AI slop ikonu (`Sparkles`, `Wand`, `Bot`) bulunmamalıdır.
- [x] AC-6: Birim testleri yazılmalı ve `./scripts/check` 5 aşamadan da yeşil geçmelidir.

## 4. Tasarım Notu (UI ise)
- Mode: EXPERIENCE
- Density: 7
- DESIGN.md referansı: Nahit Taşı (`#F4EFE6`), Kumtaşı yüzey (`#EAE1D2`), Kavrulmuş Espresso (`#1C1613`), Terracotta vurgu (`#C8532B`).

## 5. Test Stratejisi
- **Unit:** `tests/unit/craft-lab.test.ts` ile bileşen montajı, deney fonksiyonları ve i18n çevirilerinin doğrulanması.

## 6. Bağımlılıklar
- `framer-motion`, `lucide-react` (yalnızca standart zanaat ikonları).
