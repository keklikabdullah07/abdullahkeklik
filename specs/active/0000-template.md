# Spec NNNN — <Kısa Başlık>

> **Bu şablon.** Kopyala → `specs/active/0001-kisa-baslik.md` olarak yeniden adlandır.
> Kod yazmadan önce doldur. ANEW: "No spec, no code."

## Metadata
- **Durum:** `[seç: Draft | Approved | Shipped]`
- **Risk Seviyesi:** `[seç: TRIVIAL | STANDARD | HIGH]`
- **Yazar:** <isim>
- **Tarih:** YYYY-MM-DD
- **Mod:** READ | OPERATE | PERSUADE | EXPERIENCE (sadece UI işleri)
- **Yüzey(ler):** <hangi ekran/sayfa etkilenir>
- **İlişkili karar:** <docs/decisions/NNNN-baslik.md varsa link>

## 1. Problem
<1-3 cümle: hangi kullanıcı acısını çözüyor, neden şimdi?>

## 2. Kapsam
### İçinde (In Scope)
- <özellik 1>
- <özellik 2>

### Dışında (Out of Scope)
- <yapılmayacak şey 1>

## 3. Kabul Kriterleri (Acceptance Criteria)
Her biri test edilebilir cümle olmalı.

- [ ] AC-1: <gözlemlenebilir davranış>
- [ ] AC-2: <gözlemlenebilir davranış>
- [ ] AC-3: <gözlemlenebilir davranış>

## 4. Tasarım Notu (UI ise)
- Mode: <READ/OPERATE/PERSUADE/EXPERIENCE>
- Density: <1-10>
- DESIGN.md referansı: [`../../DESIGN.md`](../../DESIGN.md) § <hangi bölüm>

## 5. Test Stratejisi
- **Unit:** <hangi fonksiyonlar test edilir>
- **Integration:** <hangi bileşenler birlikte test edilir>
- **E2E (Playwright):** <hangi kullanıcı akışı test edilir>

## 6. Bağımlılıklar
- <bağımlı spec/plan>
- <3rd party kütüphane>

## 7. Bilinmeyenler ve Riskler
### Bilinmeyenler (Bu spec Approved olmadan önce tümü 'çözüldü' olmalıdır)
- [ ] UNK-1: <açık soru / netleşmeyen veri yapısı> → Sahibi: <isim/kullanıcı> → Çözüm: <henüz yok>

### Riskler
- <risk 1 + mitigation>
- <risk 2 + mitigation>

## 8. Kanıt (Ship sırasında doldurulur)
- [ ] `scripts/check` çıktısı temiz
- [ ] Tüm AC ✅
- [ ] E2E test geçti
- [ ] Code review tamam
- [ ] Spec durumu `Shipped`'a çevrildi
