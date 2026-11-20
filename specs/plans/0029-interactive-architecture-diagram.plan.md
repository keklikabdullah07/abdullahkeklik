# Plan-0029: Interactive System Architecture Blueprint (İnteraktif Sistem Mimarisi Şeması)

## Değişecek ve Eklenecek Dosyalar
1. `src/data/architectureBlueprint.ts`: 6 mimari düğümün, metriklerin ve kararların tip güvenli verisi.
2. `src/components/ArchitectureDiagram.tsx`: İnteraktif boru hattı, akış çizgileri ve mimari inspector paneli.
3. `src/app/page.tsx`: Ana sayfa akışına `ArchitectureDiagram` montajı (`CuratedWorks` sonrasına).
4. `src/components/CommandPalette.tsx`: `#system-architecture` rotasının eklenmesi.
5. `src/locales/tr.json`, `src/locales/en.json`, `src/locales/ku.json`: Çoklu dil çevirileri.
6. `src/types/i18n.ts`: `architectureDiagram` tür tanımı.
7. `tests/unit/architecture-diagram.test.ts`: Birim ve entegrasyon testleri.

## Uygulama Adımları
1. Veri modelinin `src/data/architectureBlueprint.ts` dosyasında kodlanması.
2. Dil sözlükleri ve tip dosyasının güncellenmesi.
3. `ArchitectureDiagram.tsx` bileşeninin yazılması ve `src/app/page.tsx`'e eklenmesi.
4. `CommandPalette.tsx` içine kısayolun eklenmesi.
5. `tests/unit/architecture-diagram.test.ts` test dosyasının oluşturulması.
6. Biome format ve linter denetimi.
7. `./scripts/check` 5 aşamalı doğrulama.
8. Canlı sunucuda (port 3042) doğrulanması.
9. Kullanıcıdan onay istenmesi (KESİNLİKLE COMMIT/PUSH İZİNSİZ YAPILMAYACAK).
