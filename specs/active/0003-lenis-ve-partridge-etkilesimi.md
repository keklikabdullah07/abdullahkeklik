# Spec 0003 — Grail Kalitesinde Akışkan Kaydırma (Lenis) ve Kuş & Yazılım Etkileşimi

> ANEW: "No spec, no code."

## Metadata
- **Durum:** Shipped
- **Risk Seviyesi:** STANDARD
- **Yazar:** Abdullah Keklik & Sistem Mimarı
- **Tarih:** 2026-11-08
- **Mod:** EXPERIENCE
- **Yüzey(ler):** Sayfa Geneli (Lenis Smooth Scroll), Hero (Partridge Flight & Metallic Wing Sheen), Teknoloji Totemleri
- **İlişkili karar:** [`../../docs/decisions/0001-proje-temel-mimarisi.md`](../../docs/decisions/0001-proje-temel-mimarisi.md)

## 1. Problem
Mevcut sayfa kaydırması tarayıcının standart kesikli adımlarıyla gerçekleşmekte ve logodaki kuş/kanat formu statik bir görsel olarak kalmaktadır. Awwwards/Grail seviyesinde bir deneyim için ipeksi Lenis smooth scroll, logodaki kuş formunun fareyle etkileşime giren dinamik gümüş ışık kırılması (specular reflection) ve kanat hareketi derinliği kazandırılmalıdır.

## 2. Kapsam
### İçinde (In Scope)
- **Lenis Smooth Scroll Entegrasyonu:** `lenis` kütüphanesini React 19 ile uyumlu bir sağlayıcı (`SmoothScrollProvider.tsx`) ile kurmak; sayfa kaydırma eylemsizliği (inertia) kazandırmak.
- **Partridge Wing & Logo Etkileşimi:** Logodaki kuş (Partridge / Keklik) formunu ve imza monogramını fare açısına göre metalik ışık ve yumuşak 3D kanat eğimiyle canlandırmak (`BirdEmblem.tsx`).
- **İnteraktif Fiziksel Teknoloji Totemleri:** Teknoloji rozetlerini (Rust, TypeScript, Go, Next.js, Kafka) farenin itme kuvvetine tepki veren dokunsal gümüş pullar/totemler haline getirmek.
- **Erişilebilirlik (WCAG AA):** `prefers-reduced-motion: reduce` ayarında Lenis ve 3D efektlerin otomatik devre dışı kalması.
- `scripts/check.ps1` 5 aşamalı kanıt kapısının yeşil kalması.

### Dışında (Out of Scope)
- Ağır Three.js GLTF sahnesi (hafif, yüksek FPS'li Canvas/Framer Motion matematik modeli kullanılacak).

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] AC-1: `lenis` akıcı kaydırma motoru tüm sayfada aktif olmalı ve scroll olayları pürüzsüz eylemsizlikle akmalıdır.
- [x] AC-2: Hero alanındaki logo, farenin x/y konumuna göre ışık kırılması (specular highlight) ve mikro 3D kanat rotasyonu üretmelidir.
- [x] AC-3: Teknoloji totemleri farenin yakınlaşmasına manyetik/fiziksel reaksiyon vererek canlılık hissi sunmalıdır.
- [x] AC-4: `prefers-reduced-motion: reduce` modunda kaydırma standart tarayıcı akışına dönmeli, animasyonlar statikleşmelidir.
- [x] AC-5: `scripts/check.ps1` 5 aşamalı kanıt zinciri sıfır hatayla geçmelidir.

## 4. Tasarım Notu
- Mode: EXPERIENCE
- Density: 4
- Motion: 9 (Lenis inertia + specular light)
- Variance: 8

## 5. Doğrulama
- [x] `scripts/check.ps1` (5/5 temiz)
- [x] Playwright E2E testi geçti
- [x] Görsel hakikat screenshot'ı alındı (`artifacts/visual/.../final-gate.png`)
- [x] Spec durumu `Shipped` yapıldı
