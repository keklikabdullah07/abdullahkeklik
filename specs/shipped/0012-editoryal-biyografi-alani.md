# Şartname 0012: Zengin Editoryal Hakkımda & Biyografi Alanı

## 1. Hedef ve Kapsam
Abdullah Keklik editoryal vitrininde; klişe CV veya madde işaretli kariyer listeleri yerine, Kinfolk & Nippon Design Center zanaat çizgisinde Abdullah Keklik'in tasarım felsefesini, Mezopotamya kökleriyle harmanlanan estetik disiplinini, çalışma ilkelerini ve seçilmiş dönüm noktalarını anlatan heykelsi bir biyografi bölümü (`EditorialBio.tsx`) oluşturmak.

## 2. Teknik Mimari ve Detaylar
- **Bileşen:** `src/components/EditorialBio.tsx` (`"use client"`).
- **Yerleşim:** Ana sayfada (`src/app/page.tsx`) `TypographicManifesto` ile `GrandFinaleContact` arasına entegre edilecek.
- **Anchor ID:** `#about` (Lenis pürüzsüz kaydırma ile doğrudan erişim).
- **Header Entegrasyonu:** `src/components/Header.tsx` menüsüne `[03] HAKKIMDA` sekmesi eklenecek, iletişim `[04]` olarak güncellenecek.
- **İçerik Katmanları:**
  1. **Roots & Ethos (Kadim Kökler & Felsefe):** Urfa'nın güneşle olgunlaşan Nahit Taşı mimarisinden ve Harran kili sadeliğinden beslenen sessiz lüks vizyonu.
  2. **The Intersect (Tasarım & Mühendislik Kesişimi):** Kod yazan bir tasarımcı ve tipografi hissiyatı olan bir sistem mühendisi olarak çift disiplinli kimlik.
  3. **3 Çelik İlke (Core Principles):**
     - *Boring Technology & Rock-Solid Omurga:* Kanıtlanmış, LTS teknolojilerle çökmez altyapılar.
     - *Craft Over Noise:* AI slop gradyanları ve sahte süsler yerine saf tipografi ve taktil dokunuş.
     - *Zero-GC / 60 FPS Titizliği:* Bellek baskısını sıfırlayan, akıcı mühendislik disiplini.
  4. **Seçilmiş Dönüm Noktaları (Chronological Milestones):** 2024 - 2026 arası mimari ve kreatif kilometre taşları.
- **Renk ve Tipografi:**
  - Zemin `#F4EFE6`, kartlar `#EAE1D2`, tipografi `#1C1613`, vurgular `#C8532B` ve `#D88934`.
  - Apple SF Pro Display ve SF Mono font ailesi.

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] `src/components/EditorialBio.tsx` bileşeni oluşturulmalı.
- [x] Ana sayfa akışında (`page.tsx`) Manifesto ile Contact arasına `#about` anchor'ı ile yerleştirilmeli.
- [x] `Header.tsx` menüsünde `[03] HAKKIMDA` linki çalışır olmalı.
- [x] 4 editoryal katman (Kökler, Kesişim, 3 İlke, Dönüm Noktaları) eksiksiz yer almalı.
- [x] `./scripts/check` 5 aşamada yeşil olmalı.
- [x] Headless Chromium ile görsel doğrulama yapılmalı.
