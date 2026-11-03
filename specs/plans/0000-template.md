# Plan NNNN — <Spec Numarası> Uygulama Planı

> **Bu şablon.** Kopyala → `specs/plans/NNNN-kisa-baslik.md` olarak yeniden adlandır.
> Spec onaylandıktan sonra, **kod yazmadan önce** insan tarafından onaylanmalıdır.
> ANEW: "Plan before build."

## Metadata
- **Spec:** <specs/active/NNNN-...md link>
- **Durum:** `[seç: Draft | Approved | Done]`
- **Tarih:** YYYY-MM-DD
- **Risk Seviyesi:** `[seç: TRIVIAL | STANDARD | HIGH]`

## 1. Strateji
<1-2 cümle: genel yaklaşım, neden bu yol?>

## 2. Etkilenen Dosyalar
- **Yeni:**
  - `path/to/new-file.ts` — <amac>
- **Değişen:**
  - `path/to/existing.ts` — <ne değişir>
- **Silinen:**
  - (varsa)

## 3. Adımlar
1. <adım 1 — atomik, tek commit>
2. <adım 2>
3. <adım 3>

## 4. Doğrulama
- `scripts/check` → 0 hata
- Spec AC'leri sırayla doğrula
- E2E: <hangi senaryo>

## 5. Geri Alma (Rollback)
- <nasıl geri alınır, hangi commit'ler revert edilir>
- Veya: feature flag toggle'ı

## 6. İnsan Onayı
- [ ] Spec sahibi: __________ Tarih: __________
- [ ] (opsiyonel) Reviewer: __________ Tarih: __________
