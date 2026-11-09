# Spec 0006 — Chukar Marka Kimliği ve Editoryal Tasarım Dönüşümü

> ANEW: "No spec, no code."

## Metadata
- **Durum:** Shipped
- **Risk Seviyesi:** STANDARD
- **Yazar:** Abdullah Keklik & Sistem Mimarı
- **Tarih:** 2026-11-09
- **Mod:** EXPERIENCE
- **Yüzey(ler):** DESIGN.md, Tailwind, globals.css, Navbar, HeroSection, BirdEmblem, ShowcaseGrid, PhysicsTotemArena, Footer
- **İlişkili karar:** [`../../docs/decisions/0001-proje-temel-mimarisi.md`](../../docs/decisions/0001-proje-temel-mimarisi.md)

## 1. Problem ve Neden
Canlı tarayıcı çıktısı incelendiğinde; harness'ın kod kalitesini korumasına rağmen arayüzün "jenerik, gürültülü ve karanlık bir AI SaaS şablonu" gibi durduğu tespit edilmiştir. Kullanıcının sağladığı ve onayladığı **CHUKAR** kurumsal kimlik panosu (Slate Plum, Warm Fawn, Onyx Kohl, Chalk Cream, Coral Red) referans alınarak, kullanıcının orijinal "AK / Abdullah Keklik" logosu korunup sayfa dergi/editoryal zarafetine kavuşturulmalıdır.

## 2. Kapsam
### İçinde (In Scope)
- **Orijinal Logonun Korunması:** `public/logo-monogram.png` logosu yerli yerinde kalacak; çevresindeki pavyon stili neon aura kaldırılarak asil bir çerçeveye kavuşturulacak.
- **5'li Chukar Doğal Paleti Entegrasyonu:**
  - **Onyx Kohl (%60 Zemin):** `#0F1217` / `#15181F`
  - **Slate Plum & Antrasit (%30 Yüzey):** `#171A23` / `#3E3947`
  - **Warm Fawn (Organik Sınırlar & İkincil Vurgu):** `#CBB89F`
  - **Chalk Cream (Tipografi & Başlıklar):** `#F6F1E8`
  - **Coral Red (%10 Akıllı Vurgu & CTA):** `#E84D38`
- **Gürültü Budaması (Subtractive Design):**
  - Kartların içindeki gereksiz sahte terminal ve dashboard kalabalığı sadeleştirilecek.
  - Başlıktaki kırmızımsı-sarı jenerik gradyan kaldırılarak yüksek kontrastlı fildişi ve mercan tipografisi uygulanacak.
- **Bileşen Güncellemeleri:** `Navbar`, `HeroSection`, `BirdEmblem`, `ShowcaseGrid`, `PhysicsTotemArena`, `Footer`, `SpotlightContainer`.
- **Kalite Kapısı:** `scripts/check.ps1` 5 aşamalı zincirin yeşil olması ve yeni ekran görüntüsüyle doğrulanması.

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] AC-1: Kullanıcının orijinal logosu (`logo-monogram.png`) korunmalı ve Hero'da baş tacı olarak gösterilmelidir.
- [x] AC-2: `DESIGN.md` ve CSS/Tailwind token'ları Onyx Kohl, Slate Plum, Warm Fawn, Chalk Cream ve Coral Red spektrumuna kilitlenmelidir.
- [x] AC-3: Hero bölümündeki pavyon aura ve gradyan kalkmalı; temiz, editoryal tipografi ve dokunsal mercan CTA yerleşmelidir.
- [x] AC-4: Bento kartları (#171A23) nefes alacak şekilde açılmalı ve Warm Fawn 1px bordürleriyle ayrışmalıdır.
- [x] AC-5: `npm run check` (TypeScript, Biome Lint, Vitest, Bilinmeyenler, ADR Drift) sıfır hatayla geçmelidir.
- [x] AC-6: Headless tarayıcı ile yeni ekran görüntüsü alınarak görsel hakikat kanıtlanmalıdır.

## 4. Tasarım Notu
- Mod: EXPERIENCE · VISUAL_DENSITY=3 · MOTION_INTENSITY=5
- Zemin: `#0F1217` (Onyx Kohl)
- Yüzey: `#171A23` (Slate Plum Yüzey)
- Sınır: `rgba(203, 184, 159, 0.16)` (Warm Fawn Hairline)
- Vurgu: `#E84D38` (Kınalı Mercan)
- Metin: `#F6F1E8` (Chalk Cream)

