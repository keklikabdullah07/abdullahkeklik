# Spec 0026 — Architectural Command Palette (Cmd + K & Taktil Kontrol Merkezi)

## Metadata
- **Durum:** `Shipped`
- **Risk Seviyesi:** `STANDARD`
- **Yazar:** Abdullah Keklik & AI Chief Architect
- **Tarih:** 2026-11-20
- **Mod:** EXPERIENCE
- **Yüzey(ler):** Global Layout / Header / Command Palette Modal
- **İlişkili karar:** `docs/ROADMAP.md` & `specs/active/0016-architectural-masthead-header.md`

## 1. Problem
Ziyaretçiler ve teknik karar vericiler (CTO, Mühendislik Direktörleri) siteyi gezerken klavye odaklı (power-user) bir hız ve taktil masaüstü uygulama hissi bekler. Klasik web menüleri yerine, doğrudan `Cmd + K` veya `Ctrl + K` ile açılan, tüm site içi navigasyonu, dil değişimlerini, dış profil bağlantılarını ve mimari CLI komutlarını içeren heykelsi bir Command Palette gerekmektedir.

## 2. Kapsam
### İçinde (In Scope)
- Global `Cmd+K` ve `Ctrl+K` klavye kısayolu dinleyicisi.
- Header üzerinde şık, monospaced `⌘K` / `Ctrl+K` tetikleyici butonu (Directory butonu ile uyumlu).
- Editoryal & Quiet Luxury tasarım dilinde (`bg-canvas/95`, `border-hairline`, `font-mono`) arama ve komut penceresi.
- Kategorize edilmiş komutlar:
  - **Navigasyon:** `Curated Works` (#curated-works), `Manifesto` (#manifesto), `Bio` (#about), `Contact` (#contact).
  - **Sistem & Tercihler:** Dil değiştirme (`TR`, `EN`, `KU`), e-posta panoya kopyalama, GitHub ve GitLab profillerini yeni sekmede açma.
  - **Mimari CLI (Easter Egg):** `> whoami`, `> stack`, `> keklik` (ASCII Chukar sanatı).
- Ok tuşlarıyla (`ArrowUp`, `ArrowDown`) gezinme, `Enter` ile seçme ve `Escape` ile kapatma.
- Erişilebilirlik (WCAG AA): `role="dialog"`, `aria-label`, klavye odak halkaları ve `focus-trap`.
- Çoklu dil (`tr.json`, `en.json`, `ku.json`) desteği.

### Dışında (Out of Scope)
- Ağır 3. parti kütüphaneler (cmdk gibi gereksiz bundle yükleri kurulmayacak; saf React + Framer Motion ile sıfır bağımlılıkla inşa edilecek).

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] AC-1: `Cmd+K` (Mac) veya `Ctrl+K` (Windows/Linux) tuşlarına basıldığında Command Palette modalı açılmalıdır.
- [x] AC-2: Header'da `⌘K` / `Ctrl+K` görsel tetikleyicisi bulunmalı ve tıklandığında modalı açmalıdır.
- [x] AC-3: Arama kutusuna yazılan metne göre komutlar gerçek zamanlı filtrelenmelidir.
- [x] AC-4: `ArrowDown` ve `ArrowUp` tuşlarıyla komutlar arasında gezinilmeli, `Enter` ile seçilen eylem yürütülmelidir.
- [x] AC-5: `Escape` tuşuna basıldığında veya backdrop'a tıklandığında modal kapanmalıdır.
- [x] AC-6: `> whoami`, `> stack` ve `> keklik` komutları girildiğinde mimari CLI yanıtı görüntülenmelidir.
- [x] AC-7: Dil değiştirme komutu seçildiğinde site dili anında değişmelidir.
- [x] AC-8: Bileşen testleri yazılmalı ve `./scripts/check` 5 aşamadan da yeşil geçmelidir.

## 4. Tasarım Notu (UI ise)
- Mode: EXPERIENCE
- Density: 7
- DESIGN.md referansı: Nahit Taşı & Keten zemin (`#F4EFE6`), Kavrulmuş Espresso (`#1C1613`), Kınalı Keklik Kınası (`#C8532B`).

## 5. Test Stratejisi
- **Unit & Integration:** `tests/unit/command-palette.test.ts` altında klavye dinleyicisi, filtreleme ve çalıştırma fonksiyonlarının doğrulanması.

## 6. Bağımlılıklar
- `framer-motion` (mevcut), `lucide-react` (mevcut). Ekstra bağımlılık yok.

## 7. Bilinmeyenler ve Riskler
- Bilinmeyenler: Çözüldü (Kullanıcı teyidi alındı).
- Risk: ESC ve modal odak yakalama çakışması -> `useEffect` cleanup ile yönetilecek.
