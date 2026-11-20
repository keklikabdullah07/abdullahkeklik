# Spec 0030 — Field Notes & Engineering Essays (Saha Notları ve Mimari Makaleler)

## Metadata
- **Durum:** `Shipped`
- **Risk Seviyesi:** `STANDARD`
- **Yazar:** Abdullah Keklik & AI Chief Architect
- **Tarih:** 2026-11-20
- **Mod:** EXPERIENCE
- **Yüzey(ler):** Main Page / Field Notes Section / Article Reading Drawer
- **İlişkili karar:** `docs/ROADMAP.md` & `DESIGN.md`

## 1. Problem
Üst düzey Staff/Principal mühendislerin portföylerinde yüzeysel bloglar yerine, gerçek sistem mimarisi ve zanaat kararlarını literatür derinliğinde açıklayan teknik saha notları (Field Notes) aranır. Ziyaretçilerin (CTO, Mühendislik Direktörleri) Abdullah Keklik'in zihinsel derinliğini, mimari refleksini ve problem çözme metodolojisini inceleyebileceği bir makale dizini gerekmektedir.

## 2. Kapsam
### İçinde (In Scope)
- Editoryal `SECTION [06] — FIELD NOTES & ESSAYS` bölümü.
- 3 adet derinlemesine teknik makale:
  1. `dual-write-outbox`: *"Dağıtık Sistemlerde Çift Yazma (Dual-Write) Tuzağı ve Transactional Outbox Çözümü"* (.NET 9 & Olay Güvenilirliği).
  2. `tactile-frame-budget`: *"Taktil Web Arayüzlerinde 16.6ms Kare Bütçesi ve Yay Fiziği"* (60 FPS Arayüz Zanaatı & Spring Dynamics).
  3. `zero-runtime-exceptions`: *"Sıfır Çalışma Anı Hatası: C# ve TypeScript'te Katı Tip Güvenliği"* (Deterministik Tip Güvenliği).
- Makale Kartları:
  - Okuma süresi (örn: `8 MIN READ`), yayın tarihi, konu rozetleri.
  - Özet ve temel mimari çıkarımlar.
- Tam Ekran / Drawer Editoryal Okuma Modalı:
  - Kitap ve editoryal dergi kalitesinde tipografi (`prose`, Nahit taşı paleti, monospaced kod alıntıları).
  - `Escape` ile veya kapat butonuyla yumuşak kapanış.
- Çoklu dil (`tr.json`, `en.json`, `ku.json`) ve `src/types/i18n.ts` desteği.
- Command Palette entegrasyonu: `#field-notes` kısayolu.
- Sıfır AI ikonu; saf editoryal zanaat.

### Dışında (Out of Scope)
- Harici CMS/Headless backend (makaleler tip güvenli veri dosyasında tutulur, sıfır harici ağ gecikmesi).

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] AC-1: Ana sayfada `CraftLab` ile `GrandFinaleContact` arasında `FieldNotes` bölümü yer almalıdır.
- [x] AC-2: Bölüm 3 makaleyi editoryal kartlar halinde sergilemelidir.
- [x] AC-3: Bir makaleye tıklandığında tam metin okuma penceresi (drawer) açılmalıdır.
- [x] AC-4: Çoklu dil (TR, EN, KU) sözlüklerinde tüm başlık ve özetler yer almalıdır.
- [x] AC-5: Command Palette içine `#field-notes` kısayolu eklenmelidir.
- [x] AC-6: Birim testleri yazılmalı ve `./scripts/check` 5 aşamadan da yeşil geçmelidir.

## 4. Tasarım Notu (UI ise)
- Mode: EXPERIENCE
- Density: 7
- DESIGN.md referansı: Nahit Taşı (`#F4EFE6`), Kumtaşı (`#EAE1D2`), Kavrulmuş Espresso (`#1C1613`), Terracotta vurgu (`#C8532B`).

## 5. Test Stratejisi
- **Unit:** `tests/unit/field-notes.test.ts` ile veri modeli, makale sayısı, modal açma ve i18n anahtarlarının doğrulanması.

## 6. Bağımlılıklar
- `framer-motion`, `lucide-react`. Sıfır harici kütüphane.
