# Şartname 0010: Lenis Smooth Scroll (Awwwards Momentum Akışı)

## 1. Hedef ve Kapsam
Abdullah Keklik editoryal vitrininde fare tekerleği ve klavye kaydırmalarını Awwwards standartlarında (Norm Architects / Delta Cafés seviyesi) yumuşak, akışkan ve heykelsi bir ivmeyle (momentum / inertial damping) zenginleştirmek.

## 2. Teknik Mimari ve Parametreler
- **Kütüphane:** `lenis` (^1.3.27 LTS, kararlı ve saf JS çekirdeği).
- **Entegrasyon Deseni:** `src/components/SmoothScrollProvider.tsx` (`"use client"`).
  - Next.js App Router uyumlu React Context / Hook (`useLenis`).
  - `requestAnimationFrame` döngüsü ile optimize render.
  - Sayfa unmount olduğunda Lenis instance'ı temizleme (`lenis.destroy()`) ve bellek sızıntısını önleme.
- **Konfigürasyon Değerleri:**
  - `duration`: 1.2 (saniyede dengeli editoryal sönümlenme)
  - `easing`: `(t) => Math.min(1, 1.001 - 2 ** (-10 * t))` (standart editoryal yumuşama eğrisi)
  - `smoothWheel`: `true`
  - `smoothTouch`: `false` (Mobilde yerel dokunmatik kaydırmayı koru)
  - `autoResize`: `true`
- **Erişilebilirlik (A11y):**
  - `window.matchMedia('(prefers-reduced-motion: reduce)')` denetimi: Kullanıcı hareketi azaltmışsa Lenis otomatik olarak pasifleşir.
- **Smooth Anchor Navigasyon:**
  - Sayfa içi `#curated-works`, `#manifesto` veya `#contact` anchor bağlantılarına tıklandığında `instance.scrollTo(element, { offset: -32, duration: 1.4 })` ile yumuşak geçiş.

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] `lenis` paketi LTS sürümüyle `package.json`'a eklendi.
- [x] `SmoothScrollProvider.tsx` bileşeni oluşturuldu ve `layout.tsx` içine sarmalandı.
- [x] Masaüstü tarayıcılarda kaydırma sırasında takılma olmaksızın 60 FPS akışkanlık sağlandı.
- [x] `prefers-reduced-motion: reduce` durumunda Lenis devre dışı kalma mantığı entegre edildi.
- [x] Mobilde dokunmatik yerel kaydırma (`smoothTouch: false`) korundu.
- [x] Header ve Hero'daki bağlantılar tıklandığında pürüzsüz kaydırma çalışıyor.
- [x] `./scripts/check` (Typecheck + Lint + Test) 5/5 aşamada yeşil geçti.
