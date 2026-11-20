# Plan-0030: Field Notes & Engineering Essays (Saha Notları ve Mimari Makaleler)

## Değişecek ve Eklenecek Dosyalar
1. `src/data/fieldNotes.ts`: 3 derinlikli makalenin başlık, özet, okuma süresi ve tam metin verisi.
2. `src/components/FieldNotes.tsx`: Makale listesi ve tam editoryal okuma drawer modalı.
3. `src/app/page.tsx`: Ana sayfa akışına `FieldNotes` montajı.
4. `src/components/CommandPalette.tsx`: `#field-notes` rotasının eklenmesi.
5. `src/locales/tr.json`, `src/locales/en.json`, `src/locales/ku.json`: Çeviriler.
6. `src/types/i18n.ts`: `fieldNotes` tür tanımı.
7. `tests/unit/field-notes.test.ts`: Kapsamlı birim ve entegrasyon testi.

## Uygulama Adımları
1. `src/data/fieldNotes.ts` veri dosyasının oluşturulması.
2. `src/types/i18n.ts` ve dil sözlüklerinin güncellenmesi.
3. `FieldNotes.tsx` bileşeninin kodlanması ve `src/app/page.tsx`'e eklenmesi.
4. `CommandPalette.tsx` içine `#field-notes` rotasının eklenmesi.
5. `tests/unit/field-notes.test.ts` test dosyasının yazılması.
6. Biome format ve linter denetimi.
7. `./scripts/check` 5 aşamalı doğrulama.
8. Canlı sunucuda (port 3042) doğrulanması.
9. Kullanıcıdan onay istenmesi (KESİNLİKLE COMMIT/PUSH İZİNSİZ YAPILMAYACAK).
