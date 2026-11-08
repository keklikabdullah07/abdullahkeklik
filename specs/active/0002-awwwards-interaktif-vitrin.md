# Spec 0002 — Awwwards Seviyesi İnteraktif Bento Vitrin ve Akışkan Mikro-Hareket

> ANEW: "No spec, no code."

## Metadata
- **Durum:** Shipped
- **Risk Seviyesi:** STANDARD
- **Yazar:** Partridge & Sistem Mimarı
- **Tarih:** 2026-11-08
- **Mod:** EXPERIENCE
- **Yüzey(ler):** Ana Sayfa (`/`), Hero Spotlight, Asimetrik Bento Grid, İnteraktif Kart Önizlemeleri
- **İlişkili karar:** [`../../docs/decisions/0001-proje-temel-mimarisi.md`](../../docs/decisions/0001-proje-temel-mimarisi.md)

## 1. Problem
İlk prototipteki statik kartlar, sıradan kareli ızgara deseni ve jenerik yapay zeka metinleri, sitenin Awwwards / Site of the Day kalitesinde bir portfolyo olarak öne çıkmasını engellemektedir. Logodaki gümüş/krom estetiğini derin obsidyenle buluşturan, fare etkileşimli ışık hüzmelerine ve canlı interaktif önizlemelere sahip lüks bir vitrin gerekmektedir.

## 2. Kapsam
### İçinde (In Scope)
- **Dinamik Fare Işık Hüzmesi (Interactive Spotlight):** Ziyaretçinin imlecini takip eden, kartların sınırlarını ve yüzeylerini aydınlatan yumuşak radyal ışık efekti.
- **Logoya Uyumlu Gümüş & Zümrüt Atmosfer:** Fırçalanmış krom/gümüş vurgular, derin obsidyen kadife zemin ve canlı zümrüt ışığı.
- **Gerçek Asimetrik Bento Mimarisi:**
  - 1. Büyük Kart (Partridge Engine): Canlı mini-terminal kod akışı ve 60 FPS nabız simülatörü.
  - 2. Metrik Kartı (OmniLogistics): Dinamik SVG telemetri ve canlı sinyal grafiği.
  - 3. Tasarım Kartı (Kinesis UI): Dokunsal mikro-bileşen etkileşimi (hover ile reaksiyon veren UI demosu).
  - 4. Finans Kartı (FinPulse): Güvenlik katmanı ve şifreleme/idempotency denetim mührü.
- **3D Kart Eğim (Tilt) ve Manyetik Butonlar:** Fareye duyarlı, abartısız ve gözü yormayan fiziksel tepki.
- **Özgün, Punchy Manifesto & Yüksek Kontrastlı CTA:** Jenerik AI metinlerinin yerine özgün mühendislik sesi; yüksek kontrastlı parlayan butonlar.
- **Erişilebilirlik (WCAG AA):** `prefers-reduced-motion` durumunda 3D tilt ve spotlight'ın sessizce devre dışı kalması.
- `scripts/check.ps1` 5 kapısının yeşil kalması ve görsel hakikat kanıtı.

### Dışında (Out of Scope)
- Harici WebGL / Three.js 3D kütüphaneleri (performans ve pil tasarrufu için saf CSS/Canvas/Framer Motion kullanılacaktır).

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] AC-1: Arka plandaki klişe ızgara yerine fare hareketini takip eden yumuşak bir Spotlight ve logoya uyumlu metalik gradyan geçişleri bulunmalıdır.
- [x] AC-2: Bento kartları asimetrik düzende olmalı (2-kolon odak projesi, veri kartı, interaktif bileşen kartı) ve kartlarda canlı mikro-önizlemeler (kod terminali, telemetri nabzı, interaktif butonlar) yer almalıdır.
- [x] AC-3: Hero eylem butonları (CTA) yüksek kontrastlı ve dokunsal olmalı; fare üzerine gelindiğinde belirgin ve şık bir parlama efekti sunmalıdır.
- [x] AC-4: Hero başlığı ve manifestosu jenerik yapay zeka klişelerinden arındırılmış, özgün ve vurucu bir mühendislik anlatımı taşımalıdır.
- [x] AC-5: `prefers-reduced-motion: reduce` aktif olduğunda fare takip ışığı ve 3D tilt efektleri otomatik olarak zarif statik görünüme geçmelidir.
- [x] AC-6: `scripts/check.ps1` 5 aşamalı kanıt zinciri ve Playwright E2E testleri hatasız tamamlanmalı, görsel hakikat screenshot'ı alınmalıdır.

## 4. Tasarım Notu (UI ise)
- Mode: EXPERIENCE
- Density: 4
- Motion: 8 (Spring fiziği, 60 FPS bütçesi)
- Variance: 8 (Güçlü asimetri, Awwwards vitrin kalıbı)
- DESIGN.md referansı: [`../../DESIGN.md`](../../DESIGN.md)

## 5. Test Stratejisi
- **Unit (Vitest):** Bento bileşen yardımcıları, veri doğrulaması ve mock terminal komutları testi.
- **E2E (Playwright):** Spotlight konteynerinin varlığı, interaktif bento kartlarının DOM hiyerarşisi ve CTA butonlarının tıklanabilirliği.

## 6. Bağımlılıklar
- `framer-motion`, `lucide-react`, `tailwindcss`

## 7. Bilinmeyenler ve Riskler
- [x] UNK-1: Spotlight performansı düşük cihazları yorar mı? → Çözüm: CSS custom properties (`--mouse-x`, `--mouse-y`) ve `requestAnimationFrame` ile GPU hızlandırmalı hesaplama; reduced motion'da kapatma.

## 8. Kanıt (Ship sırasında doldurulur)
- [x] `scripts/check.ps1` çıktısı temiz (5/5)
- [x] Tüm AC'ler doğrulandı
- [x] Playwright E2E testi geçti
- [x] Görsel hakikat screenshot'ı alındı (`artifacts/visual/.../final-gate.png`)
- [x] Spec durumu `Shipped` yapıldı
