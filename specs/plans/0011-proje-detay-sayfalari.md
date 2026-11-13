# Plan 0011: Proje Vaka Analizi Detay Sayfaları Uygulama Planı

## 1. Değişecek ve Eklenecek Dosyalar
| Dosya | İşlem | Amaç |
|---|---|---|
| `src/types/project.ts` | Düzenleme | `challenge`, `solution`, `impact`, `deliverables` alanlarının eklenmesi |
| `src/data/projects.ts` | Düzenleme | 4 proje için editoryal derinlikte vaka analizi içeriklerinin yazılması |
| `src/app/works/[slug]/page.tsx` | Yeni | Dinamik proje detay sayfası ve `generateStaticParams()` entegrasyonu |
| `src/app/works/[slug]/not-found.tsx` | Yeni | Editoryal 404 bulunamadı sayfası |
| `src/components/CuratedWorks.tsx` | Düzenleme | Proje satırlarının Next.js `Link` ile `/works/[slug]` sayfalarına bağlanması |
| `tests/unit/projects-detail.test.ts` | Yeni | Slug çözümleme, veri bütünlüğü ve sonraki proje zincirleme testleri |

## 2. Uygulama Adımları
1. **Adım 1:** `src/types/project.ts` dosyasını vaka analizi tip alanlarıyla genişlet.
2. **Adım 2:** `src/data/projects.ts` içine 4 proje için vaka analizi verilerini ekle.
3. **Adım 3:** `src/app/works/[slug]/page.tsx` sayfasını oluştur (2 kolonlu asimetrik editoryal layout + next project teaser).
4. **Adım 4:** `src/app/works/[slug]/not-found.tsx` sayfasını oluştur.
5. **Adım 5:** `CuratedWorks.tsx` satırlarını `Link` bileşeni ile donat.
6. **Adım 6:** `tests/unit/projects-detail.test.ts` testini yaz.
7. **Adım 7:** Doğrulama (`./scripts/check`), derleme (`npm run build`) ve canlı tarayıcı testi.

## 3. Risk Değerlendirmesi
- **Risk Seviyesi:** STANDARD
- **Önlem:** `generateStaticParams` kullanarak tam statik prerender sağlamak.
