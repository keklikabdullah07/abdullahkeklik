# Spec 0005 — Kınalı Keklik (Chukar Partridge) Doğal Palet Dönüşümü

> ANEW: "No spec, no code."

## Metadata
- **Durum:** Shipped
- **Risk Seviyesi:** STANDARD
- **Yazar:** Abdullah Keklik & Sistem Mimarı
- **Tarih:** 2026-11-09
- **Mod:** EXPERIENCE
- **Yüzey(ler):** DESIGN.md, Tailwind Renk Sistemi, globals.css, Butonlar, Işık Hüzmeleri, Parçacıklar, Amblem
- **İlişkili karar:** [`../../docs/decisions/0001-proje-temel-mimarisi.md`](../../docs/decisions/0001-proje-temel-mimarisi.md)

## 1. Problem
Jenerik zümrüt yeşili palet sitede tipik bir "kodlama / matrix" klişesi yaratmakta ve Partridge (Keklik) marka ruhunu tam yansıtmamaktadır. Kınalı Kekliğin asil doğasından ilham alan derin kül kayalığı, kınalı mercan/kiremit kırmızısı ve krem/gümüş tüy şeritleri renk sistemine entegre edilmelidir.

## 2. Kapsam
### İçinde (In Scope)
- `DESIGN.md` token paletinin Kınalı Keklik renkleriyle güncellenmesi:
  - **Zemin (%60):** Derin Kül Obsidyeni (`#0D111A`)
  - **Kart / Yüzey (%30):** Dağ Kayası Antrasiti (`#141A26`, `#1B2332`)
  - **Vurgu (%10):** Kınalı Keklik Kırmızısı / Mercan Kor Ateşi (`#E05238`, `#D94828`, `#F87154`)
  - **Metin & Şerit:** Keten/Fildişi (`#FAF5EB`), Fırçalanmış Gümüş (`#E2E8F0`)
- `tailwind.config.ts` ve `globals.css` CSS değişkenlerinin bu palete bağlanması.
- `SpotlightContainer`, `HeroSection`, `BirdEmblem`, `WingParticlesCanvas`, `PhysicsTotemArena` bileşenlerindeki ışık ve efekt renklerinin kınalı mercan & fildişi tonlarına dönüştürülmesi.
- `scripts/check.ps1` ve Playwright testlerinin doğrulanması.

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] AC-1: `DESIGN.md` ve `tailwind.config.ts` içindeki birincil vurgu rengi `#E05238` (Kınalı Mercan) olarak tanımlanmalıdır.
- [x] AC-2: Zemin ve kart sınırları derin kül kayalığı ve fildişi keten tonlarına kavuşmalı, çiğ yeşil ışıklar kalkmalıdır.
- [x] AC-3: `BirdEmblem` aurası ve `WingParticlesCanvas` parçacıkları kınalı tüy ve gümüş ışıltısıyla uyumlu akmalıdır.
- [x] AC-4: `scripts/check.ps1` 5 aşamalı kanıt kapısı sıfır hatayla geçmelidir.
- [x] AC-5: Canlı ekran görüntüsü alınarak görsel uyum doğrulanmalıdır.

## 4. Tasarım Notu
- Mode: EXPERIENCE
- Vurgu: `#E05238` (Chukar Crimson)
- Zemin: `#0D111A` (Stone Slate Obsidian)

## 5. Doğrulama
- [x] `scripts/check.ps1` (5/5 temiz)
- [x] Playwright E2E testi geçti
- [x] Görsel hakikat screenshot'ı alındı (`artifacts/visual/.../final-gate.png`)
- [x] Spec durumu `Shipped` yapıldı
