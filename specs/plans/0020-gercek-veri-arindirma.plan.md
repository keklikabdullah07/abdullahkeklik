# Implementation Plan - 0020: Gerçek Veri Arındırma

## Değişecek Dosyalar
1. `src/data/projects.ts` (Düzenleme): Kurgusal projelerin çıkarılması (`omnilogistics`, `finpulse`), geçersiz demo linkinin silinmesi, bento düzeninin 5-6 gerçek projeye göre dengelenmesi.
2. `src/components/EditorialBio.tsx` (Düzenleme): 2024-2026 kilometre taşlarının Abdullah'ın gerçek açık kaynak ve mühendislik odaklarıyla güncellenmesi.
3. `src/components/CuratedWorks.tsx` (Düzenleme): Filtre yapısının (Tümü / Sistem & Kripto / Web & Arayüz veya GitHub odaklı) gerçek veri setine uyarlanması.
4. `src/locales/tr.json`, `src/locales/en.json`, `src/locales/ku.json` (Düzenleme): Filtre ve açıklama metinlerinin güncellenmesi.
5. `tests/unit/projects.test.ts` (Düzenleme): Gerçek proje veri bütünlüğünün ve GitHub bağlantılarının doğrulanması.
6. `tests/unit/preloader.test.ts` (Biçimlendirme): Biome linter uyumu için format düzeltmesi.

## Adımlar
1. `feature/0020-gercek-veri-arindirma` dalında çalışmayı başlat.
2. `src/data/projects.ts` dosyasını arındır ve bento ızgara dağılımını ayarla.
3. `EditorialBio.tsx` içindeki dönüm noktalarını senkronize et.
4. `CuratedWorks.tsx` filtrelerini ve `src/locales/*.json` sözlüklerini güncelle.
5. `tests/unit/projects.test.ts` testlerini yeni şemaya göre güncelle.
6. `npx biome check --write .` ve `bash scripts/check` ile tüm test, tip ve linter kapılarını doğrula.
7. İnceleme sonrası feature dalını `developer`'a merge et.
