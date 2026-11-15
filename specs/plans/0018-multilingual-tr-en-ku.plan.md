# Uygulama Planı: 0018 — Çoklu Dil Desteği (TR / EN / KU)

## Dosya Etki Analizi
1. `src/types/i18n.ts`:
   - `SupportedLocale = 'tr' | 'en' | 'ku'` tipleri ve sözlük şeması.
2. `src/locales/tr.json`:
   - Türkçe sözlük.
3. `src/locales/en.json`:
   - İngilizce sözlük.
4. `src/locales/ku.json`:
   - Kürtçe (Kurmancî) sözlük.
5. `src/context/LanguageContext.tsx`:
   - React i18n Context & Provider + `useI18n()` hook.
6. `src/components/LanguageSwitcher.tsx`:
   - Minimalist `TR · EN · KU` toggle bileşeni.
7. `src/app/layout.tsx`:
   - `LanguageProvider` entegrasyonu.
8. Bileşen güncellemeleri:
   - `src/components/Header.tsx`
   - `src/components/EditorialDirectoryModal.tsx`
   - `src/components/EditorialHero.tsx`
   - `src/components/CuratedWorks.tsx`
   - `src/components/TypographicManifesto.tsx`
   - `src/components/EditorialBio.tsx`
   - `src/components/GrandFinaleContact.tsx`
9. Testler:
   - `tests/unit/i18n.test.ts` (Dil geçişi, fallback ve sözlük bütünlüğü testi).

## Doğrulama Adımları
1. `npm run lint:fix`
2. `npm run typecheck`
3. `npm run test`
4. `npm run build`
5. Canlı sunucuda tarayıcı testi
