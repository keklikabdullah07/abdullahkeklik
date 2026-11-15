# Uygulama Planı: 0014 — Hero Alanı 3D Animasyonlu Medalyon Video Entegrasyonu

> **İlgili Şartname:** `specs/active/0014-hero-3d-medallion-video.md`
> **Dal:** `feature/0014-hero-3d-medallion-video`

---

## Değişecek ve Eklenecek Dosyalar
1. `src/components/HeroMedallionVideo.tsx` (YENİ)
   - 3D madalyon video döngüsünü içeren yuvarlak, heykelsi çerçeveli bileşen.
2. `src/components/EditorialHero.tsx` (DÜZENLEME)
   - `ABDULLAH / KEKLİK` tipografik bloğunun sağ tarafına `HeroMedallionVideo` bileşeninin entegrasyonu.
3. `src/components/Header.tsx` (DÜZENLEME)
   - Tekrarı önlemek için Header'daki küçük madalyonun kaldırılması, sade künyeye dönüş.
4. `tests/unit/hero-medallion.test.ts` (YENİ)
   - Video bileşeninin `src`, `autoPlay`, `muted`, `loop`, `playsInline` niteliklerini doğrulayan birim testler.
5. `public/3D_medallion_animation_sequence_1ec22850_1080p.mp4` (Git Takibi)
   - Yeni video varlığının git takibine eklenmesi.

---

## Adım Adım İcra Sırası
1. **Adım 1:** Video dosyasını git takibine ekleme (`git add public/3D_medallion_animation_sequence_1ec22850_1080p.mp4`).
2. **Adım 2:** `src/components/HeroMedallionVideo.tsx` bileşenini yazma.
3. **Adım 3:** `src/components/EditorialHero.tsx` içinde `ABDULLAH / KEKLİK` başlığının sağına madalyon yerleşimi.
4. **Adım 4:** `src/components/Header.tsx` sadeleştirme.
5. **Adım 5:** `tests/unit/hero-medallion.test.ts` testini ekleme.
6. **Adım 6:** `./scripts/check` ile TypeScript, Linter ve Testlerin doğrulanması.
7. **Adım 7:** Görsel doğrulama ve onay sunumu.
