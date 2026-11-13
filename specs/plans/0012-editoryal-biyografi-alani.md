# Plan 0012: Zengin Editoryal Hakkımda & Biyografi Alanı Uygulama Planı

## 1. Değişecek ve Eklenecek Dosyalar
| Dosya | İşlem | Amaç |
|---|---|---|
| `src/components/EditorialBio.tsx` | Yeni | 4 katmanlı Kinfolk/Nippon tarzı editoryal biyografi bileşeni |
| `src/app/page.tsx` | Düzenleme | `EditorialBio` bileşeninin ana sayfaya montajı |
| `src/components/Header.tsx` | Düzenleme | Navigasyon menüsüne `[03] HAKKIMDA` sekmesinin eklenmesi |
| `tests/unit/editorial-bio.test.ts` | Yeni | Biyografi bileşeninin ve ilkelerin içerik bütünlüğü testi |

## 2. Uygulama Adımları
1. **Adım 1:** `src/components/EditorialBio.tsx` bileşenini yaz (Kökler, Kesişim, 3 İlke, Dönüm Noktaları, Chukar motifleri).
2. **Adım 2:** `src/app/page.tsx` dosyasına `EditorialBio` bileşenini ekle.
3. **Adım 3:** `src/components/Header.tsx` dosyasındaki menüye `[03] HAKKIMDA` bağlantısını ekle.
4. **Adım 4:** `tests/unit/editorial-bio.test.ts` birim testini yaz.
5. **Adım 5:** Lint & Typecheck (`npm run lint:fix`, `npm run typecheck`), Testler (`npm run test`) ve `./scripts/check` doğrulaması.
6. **Adım 6:** Next.js build ve sunucu güncellemesi, headless screenshot görsel denetimi.

## 3. Risk Değerlendirmesi
- **Risk Seviyesi:** STANDARD
- **Önlem:** Mevcut Lenis smooth scroll ve renk token'larıyla %100 uyum.
