# Plan-0027: Arsenal & Tech Radar (Mühendislik Radarı ve Mimari Tercihler)

## Değişecek ve Eklenecek Dosyalar
1. `src/data/techRadar.ts`: Radar verisi ve mimari gerekçelerin tip güvenli tanımı.
2. `src/components/ArsenalTechRadar.tsx`: Editoryal bento grid ve etkileşimli teknoloji radarı bileşeni.
3. `src/app/page.tsx`: Ana sayfa akışına `ArsenalTechRadar` entegrasyonu.
4. `src/components/CommandPalette.tsx`: Command Palette içine `#tech-radar` rotasının eklenmesi.
5. `src/locales/tr.json`, `src/locales/en.json`, `src/locales/ku.json`: Çevirilerin eklenmesi.
6. `src/types/i18n.ts`: `techRadar` tipi ile TranslationDictionary genişletmesi.
7. `tests/unit/tech-radar.test.ts`: Kapsamlı birim ve entegrasyon testi.

## Uygulama Adımları
1. Veri modelinin `src/data/techRadar.ts` dosyasında oluşturulması.
2. Çoklu dil sözlükleri ve `i18n.ts` tipinin güncellenmesi.
3. `ArsenalTechRadar.tsx` bileşeninin kodlanması ve `page.tsx` içerisine yerleştirilmesi.
4. `CommandPalette.tsx` içine yeni bölümün eklenmesi.
5. `tests/unit/tech-radar.test.ts` testinin yazılması.
6. `npx @biomejs/biome format --write` ve `npx @biomejs/biome check` yapılması.
7. `./scripts/check` 5 kapılı doğrulaması.
8. Canlı sunucuda (port 3042) doğrulanması.
9. Kullanıcıdan izin istenmesi (KESİNLİKLE COMMIT/PUSH YAPILMAYACAK).
