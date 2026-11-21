# Implementation Plan - Omnichannel Inquiry Form (Çok Kanallı İletişim Formu)

## Değişecek ve Eklenecek Dosyalar
1. `src/types/i18n.ts`: `contactForm` sözlük tipinin eklenmesi.
2. `src/locales/tr.json`: Türkçe form etiketleri, yer tutucular ve yönlendirme metinleri.
3. `src/locales/en.json`: İngilizce form etiketleri ve yer tutucular.
4. `src/locales/ku.json`: Kürtçe form etiketleri ve yer tutucular.
5. `src/components/CommissionInquiryForm.tsx`: Yeni form bileşeni (isim, iletişim, disiplin chip'leri, mesaj, WhatsApp & E-posta derleme).
6. `src/components/GrandFinaleContact.tsx`: `CommissionInquiryForm` bileşeninin entegrasyonu ve WhatsApp / Telegram / E-posta hızlı kanallar barı.
7. `tests/unit/contact-inquiry.test.ts`: Form bileşeni, kanallar ve i18n anahtarları için birim testler.

## Doğrulama Adımları
- `npx @biomejs/biome check src/ tests/` ile lint denetimi.
- `npx vitest run tests/unit/contact-inquiry.test.ts` ile birim test doğrulaması.
- `./scripts/check` ile 5 kapılı kalite denetimi (Typecheck, Lint, Vitest, Unknowns, Invariants).
