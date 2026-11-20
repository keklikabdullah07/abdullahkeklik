# Plan-0026: Architectural Command Palette (Cmd + K & Taktil Kontrol Merkezi)

## Değişecek ve Eklenecek Dosyalar
1. `src/components/CommandPalette.tsx`: Sıfır harici paketle saf React + Framer Motion tabanlı heykelsi Command Palette bileşeni.
2. `src/components/Header.tsx`: `⌘K` / `Ctrl+K` tetikleyici butonunu entegre etme ve modal bağlantısı.
3. `src/locales/tr.json`, `src/locales/en.json`, `src/locales/ku.json`: Command Palette etiket ve komut çevirileri.
4. `tests/unit/command-palette.test.ts`: Kapsamlı birim ve entegrasyon testleri.

## Uygulama Adımları
1. Çoklu dil sözlüklerine `commandPalette` anahtarının eklenmesi.
2. `src/components/CommandPalette.tsx` bileşeninin editoryal tasarım standartlarına uygun olarak kodlanması.
3. `src/components/Header.tsx` bileşenine kısayol tetikleyicisinin eklenmesi.
4. `tests/unit/command-palette.test.ts` test dosyasının hazırlanması.
5. `npx @biomejs/biome format --write` ile kod formatlaması.
6. `./scripts/check` ile TypeScript, Lint, Birim Test ve Invariant denetimlerinin koşturulması.
7. Kullanıcıya önizleme ve kanıtların sunulması (Commit/push KESİNLİKLE YAPILMAYACAK, kullanıcıdan onay beklenecek).
