# Plan-0028: Craft Lab & Micro-Physics (Deneysel Zanaat ve Arayüz Fiziği Laboratuvarı)

## Değişecek ve Eklenecek Dosyalar
1. `src/components/CraftLab.tsx`: 3 adet interaktif deneyi (Spring Physics, Cryptographic Block, Tactile Audio) barındıran editoryal bileşen.
2. `src/app/page.tsx`: Ana sayfa akışına `CraftLab` montajı.
3. `src/components/CommandPalette.tsx`: `#craft-lab` rotasının eklenmesi.
4. `src/locales/tr.json`, `src/locales/en.json`, `src/locales/ku.json`: Çeviriler.
5. `src/types/i18n.ts`: `craftLab` türü.
6. `tests/unit/craft-lab.test.ts`: Kapsamlı birim ve entegrasyon testi.

## Uygulama Adımları
1. Çoklu dil sözlükleri ve tip dosyasına `craftLab` anahtarlarının eklenmesi.
2. `CraftLab.tsx` bileşeninin kodlanması.
3. `src/app/page.tsx` ve `CommandPalette.tsx` içine entegre edilmesi.
4. `tests/unit/craft-lab.test.ts` testinin yazılması.
5. Biome format ve linter denetimi.
6. `./scripts/check` 5 aşamalı doğrulama.
7. Canlı sunucuda (port 3042) doğrulanması.
8. Kullanıcıdan izin istenmesi (KESİNLİKLE COMMIT/PUSH İZİNSİZ YAPILMAYACAK).
