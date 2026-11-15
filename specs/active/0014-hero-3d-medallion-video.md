# Şartname 0014: Hero Alanı 3D Animasyonlu Medalyon Video Entegrasyonu

> **Durum:** Approved (Kullanıcı "onaylıyorum" teyidi verdi)
> **Risk Seviyesi:** STANDARD (UI bileşeni ve Hero layout zenginleştirmesi)
> **Tarih:** 2026-11-14
> **Mod:** EXPERIENCE / AWWWARDS (Heykelsi 3D dijital nesne entegrasyonu)
> **Yüzey:** `src/components/EditorialHero.tsx`, `src/components/HeroMedallionVideo.tsx`, `src/components/Header.tsx`

---

## 1. Problem ve Hedef
Kullanıcı `public/3D_medallion_animation_sequence_1ec22850_1080p.mp4` dosyasını (1080p, 7.93s, 3.3MB) projeye eklemiştir. Hero alanında `ABDULLAH / KEKLİK` devasa editoryal başlığının sağındaki negatif alana, bu 3D madalyon videosunu heykelsi bir odak objesi olarak entegre etmek ve ziyaretçiye anında yüksek etkili bir zanaat deneyimi sunmak hedeflenmektedir.

---

## 2. Kapsam ve Tasarım Detayları

### 2.1 HeroMedallionVideo Bileşeni (`src/components/HeroMedallionVideo.tsx`)
- `"use client"` bileşeni.
- `<video>` etiketi:
  - `src="/3D_medallion_animation_sequence_1ec22850_1080p.mp4"`
  - `autoPlay`, `loop`, `muted`, `playsInline`
  - `preload="auto"`
- Çerçeve ve Stil:
  - Yuvarlak madalyon formu (`rounded-full overflow-hidden`).
  - İnce kına ve kumtaşı kılcal çerçeve: `ring-1 ring-primary/25 border border-hairline`.
  - Taktil sıcak gölge: `shadow-warm hover:shadow-lg transition-shadow duration-300`.
  - Boyutlar:
    - Mobil (`sm:` altı): `w-28 h-28` (112px) veya `w-32 h-32` (128px)
    - Tablet / Küçük Masaüstü (`md:`): `w-44 h-44` (176px)
    - Geniş Masaüstü (`lg:`): `w-56 h-56` (224px)
- Mikro-Etkileşim:
  - Fare üzerine geldiğinde (hover) yumuşak mikro-ölçekleme (`group-hover:scale-105 duration-500 ease-out`).
  - Canlılık damgası / indikatör (madalyonun sağ alt köşesinde kehribar dokunuş).
- Erişilebilirlik & Reduced Motion:
  - `aria-label="Abdullah Keklik 3D Heykelsi Madalyon Animasyonu"`
  - `prefers-reduced-motion` durumunda animasyon duraklatılabilir.

### 2.2 EditorialHero Entegrasyonu (`src/components/EditorialHero.tsx`)
- `ABDULLAH / KEKLİK` başlık satırı ile madalyon flex/grid yapısında yatayda dengelenir.
- Masaüstünde başlık solda, madalyon hemen sağ tarafında heykelsi bir takı gibi hizalanır.
- Başlığın altındaki manifesto ve butonlar akışı bozulmadan yerinde kalır.

### 2.3 Header Sadeleştirme (`src/components/Header.tsx`)
- Madalyon Hero'da başrolde devasa bir 3D öğe olarak yer aldığı için, Header'daki küçük 44px madalyon görsel kakofoni ve tekrar yaratmaması adına kaldırılır; Header sade ve prestijli tipografik künye formatına döner.

---

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] **AC-1:** `HeroMedallionVideo.tsx` bileşeni oluşturulmalı ve `3D_medallion_animation_sequence_1ec22850_1080p.mp4` videosunu yuvarlak madalyon çerçevesinde oynatmalıdır.
- [x] **AC-2:** Hero alanında `ABDULLAH / KEKLİK` yazısının sağ tarafında masaüstünde (~224px) ve mobilde (~128px) kusursuz responsive yerleşmelidir.
- [x] **AC-3:** Header'da mikro rozet ve Hero'da heykelsi ana madalyon hiyerarşisi korunmalıdır.
- [x] **AC-4:** Birim testler (`tests/unit/hero-medallion.test.ts`) video niteliklerini ve bileşen yapısını doğrulamalıdır.
- [x] **AC-5:** `./scripts/check` 5 aşamada (TypeScript, Biome, Vitest, Bilinmeyenler, Invariants) sıfır hatayla yeşil olmalıdır.
- [x] **AC-6:** Üretim derlemesi (`next build`) hatasız tamamlanmalı ve tüm sayfalar SSG ile üretilmelidir.
