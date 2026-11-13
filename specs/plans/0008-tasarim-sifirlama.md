# Plan 0008 — Tasarım Sıfırlama ve Yalın Başlangıç Tuvali

> **Spec:** [`specs/active/0008-tasarim-sifirlama-ve-yalin-tuval.md`](../active/0008-tasarim-sifirlama-ve-yalin-tuval.md)
> **Durum:** Approved
> **Tarih:** 2026-11-13
> **Risk Seviyesi:** STANDARD

---

## 1. Strateji
1. `src/app/page.tsx` dosyasındaki tüm eski tasarım bileşenlerini temizle; yalın bir `<main>` iskeletine dönüştür.
2. `src/app/globals.css` dosyasını sadeleştir; Tailwind temel kuralları dışında kalan özel radyal degradeleri ve chukar tema değişkenlerini kaldır.
3. `src/app/layout.tsx` dosyasındaki tema rengini ve stil kalıntılarını nötr hale getir.
4. `src/components/` altındaki eski tasarım bileşenlerini temizle.
5. `tests/unit/awwwards.test.ts` dosyasını temiz tuval doğrulama testine (`tests/unit/canvas.test.ts`) dönüştür; `tests/e2e/home.spec.ts` dosyasını yeni nötr tuvale göre güncelle.
6. TypeScript derlemesini ve Biome linter'ı doğrula.

---

## 2. Etkilenen Dosyalar
- `src/app/page.tsx`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/components/*` (eski bileşenler temizlenir)
- `tests/unit/awwwards.test.ts` → `tests/unit/canvas.test.ts`
- `tests/e2e/home.spec.ts`
- `docs/PROJECT-MAP.md`
