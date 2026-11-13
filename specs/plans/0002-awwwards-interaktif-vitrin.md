# Plan 0002 — Spec 0002 Uygulama Planı

> ANEW: "Plan before build."

## Metadata
- **Spec:** [`../active/0002-awwwards-interaktif-vitrin.md`](../active/0002-awwwards-interaktif-vitrin.md)
- **Durum:** Done
- **Tarih:** 2026-11-08
- **Risk Seviyesi:** STANDARD

## 1. Strateji
Sitenin görsel zeminini ve kartlarını `Spotlight` mimarisiyle yeniden tasarlamak; Hero metinlerini ve buton kontrastını A-class standartlara taşımak; bento gridi sıradan kart diziliminden çıkarıp içinde interaktif mini-terminal, canlı telemetri dalgası ve dokunsal buton önizlemesi barındıran yaşayan bir vitrine dönüştürmek.

## 2. Etkilenen Dosyalar
- **Yeni:**
  - `src/components/SpotlightContainer.tsx` — Fareyi takip eden lüks radyal ışık ve kart kenarlık aydınlatması
  - `src/components/bento/TerminalPreview.tsx` — Partridge Engine için interaktif canlı mini terminal
  - `src/components/bento/TelemetryPreview.tsx` — OmniLogistics için canlı SVG sinyal ve telemetri dalgası
  - `src/components/bento/KinesisUIRef.tsx` — Kinesis UI için dokunsal mikro-bileşen önizlemesi
  - `src/components/bento/SecurityAuditBadge.tsx` — FinPulse için güvenlik ve denetim mührü
- **Değişen:**
  - `src/app/globals.css` — Gümüş/krom parlama stilleri, spotlight CSS değişkenleri ve zemin derinliği
  - `src/components/HeroSection.tsx` — Özgün manifesto, yüksek kontrastlı parlayan CTA butonları
  - `src/components/ShowcaseGrid.tsx` — Gerçek asimetrik bento grid mimarisi ve canlı önizleme entegrasyonu
  - `tests/e2e/home.spec.ts` — Yeni bento bileşenleri ve spotlight a11y testleri
  - `specs/active/0002-awwwards-interaktif-vitrin.md` — Kabul kanıtları

## 3. Adımlar
1. `feature/0002-awwwards-interaktif-vitrin` dalını oluşturmak.
2. `SpotlightContainer.tsx` ve `globals.css` ile fare ışığı altyapısını kurmak.
3. Hero bölümünü özgün metinler ve yüksek kontrastlı manyetik parlayan butonlarla yenilemek.
4. Bento kartları için interaktif önizleme bileşenlerini (`TerminalPreview`, `TelemetryPreview`, `KinesisUIRef`, `SecurityAuditBadge`) geliştirmek.
5. `ShowcaseGrid.tsx` dosyasını asimetrik bento düzenine geçirmek.
6. `scripts/check.ps1` ve Playwright testlerini koşturup görsel hakikat kanıtını (`visual-check.ts`) üretmek.

## 4. Doğrulama
- `powershell -ExecutionPolicy Bypass -File scripts/check.ps1` (5/5)
- Playwright E2E testleri
- `artifacts/visual/.../final-gate.png` ekran görüntüsü

## 5. Geri Alma (Rollback)
- Dalı silmek veya `git reset --hard` ile önceki commite dönmek.

## 6. İnsan Onayı
- [x] Onaylandı: Abdullah Keklik & AI Co-Architect · 2026-11-08
