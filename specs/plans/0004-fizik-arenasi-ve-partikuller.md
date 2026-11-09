# Plan 0004 — Spec 0004 Uygulama Planı

> ANEW: "Plan before build."

## Metadata
- **Spec:** [`../active/0004-fizik-arenasi-ve-partikuller.md`](../active/0004-fizik-arenasi-ve-partikuller.md)
- **Durum:** Done
- **Tarih:** 2026-11-09
- **Risk Seviyesi:** STANDARD

## 1. Strateji
`matter-js` fizik motorunu ve tiplerini projeye eklemek. Ekran geneline yayılan akışkan parçacık motorunu (`WingParticlesCanvas.tsx`) yazmak. Grail'deki jeton düşürme deneyimini "Teknoloji Totem Arenası" (`PhysicsTotemArena.tsx`) olarak kurgulayıp sayfaya entegre etmek.

## 2. Etkilenen Dosyalar
- **Yeni:**
  - `src/components/WingParticlesCanvas.tsx` — 60 FPS Canvas tabanlı tüy/kanat parçacık izi
  - `src/components/PhysicsTotemArena.tsx` — Matter.js 2D fizik arenası ve sürüklenebilir teknoloji pulları
- **Değişen:**
  - `package.json` — `matter-js` ve `@types/matter-js` bağımlılıkları
  - `src/app/page.tsx` — Parçacık motoru ve fizik arenası entegrasyonu
  - `tests/e2e/home.spec.ts` — Fizik arenası ve parçacık testleri

## 3. Adımlar
1. `feature/0004-fizik-arenasi-ve-partikuller` dalını oluşturmak.
2. `pnpm add matter-js && pnpm add -D @types/matter-js` çalıştırmak.
3. `WingParticlesCanvas.tsx` bileşenini kodlamak.
4. `PhysicsTotemArena.tsx` bileşenini kodlamak (yerçekimi, duvarlar, pullar ve mouse sürükleme).
5. `page.tsx` içine yerleştirmek.
6. `scripts/check.ps1` ve Playwright testlerini koşup kanıt üretmek.

## 4. Doğrulama
- `powershell -ExecutionPolicy Bypass -File scripts/check.ps1` (5/5)
- Playwright E2E testleri
- Görsel hakikat screenshot'ı
