# Uygulama Planı: 0015 - SEO, SOLID Refactoring ve Kod Temizliği

## Değişecek ve Eklenecek Dosyalar
- `package.json` -> `matter-js` ve `@types/matter-js` silinecek
- `src/types/project.ts` -> `bentoSpan` silinecek, `ProjectSummary` / `ProjectCategory` düzenlenecek
- `src/data/projects.ts` -> `bentoSpan` alanları kaldırılacak
- `src/services/projectService.ts` -> `getAllProjects()`, `getProjectBySlug(slug)`, `getFeaturedProjects()` fonksiyonları (DIP)
- `src/hooks/useLocalTime.ts` -> Saat interval mantığı (SRP)
- `src/components/Header.tsx` -> `useLocalTime` entegrasyonu
- `src/components/ProjectHoverPreview.tsx` -> Manyetik önizleme kartı (SRP)
- `src/components/CuratedWorks.tsx` -> `ProjectHoverPreview` ve `projectService` entegrasyonu
- `src/app/robots.ts` -> SEO robots.txt konfigürasyonu
- `src/app/sitemap.ts` -> SEO sitemap.xml konfigürasyonu
- `src/app/layout.tsx` -> OpenGraph, Twitter Card, JSON-LD Schema.org script
- `src/app/works/[slug]/page.tsx` -> Dinamik `generateMetadata`
- `tests/unit/seo-solid.test.ts` -> SEO ve servis doğrulamaları
