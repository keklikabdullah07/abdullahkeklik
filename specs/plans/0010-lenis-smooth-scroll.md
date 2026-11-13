# Plan 0010: Lenis Smooth Scroll Uygulama Planı

## 1. Değişecek ve Eklenecek Dosyalar
| Dosya | İşlem | Amaç |
|---|---|---|
| `package.json` | Düzenleme | `lenis` kararlı paketinin eklenmesi |
| `src/components/SmoothScrollProvider.tsx` | Yeni | Lenis yaşam döngüsünü, RAF döngüsünü ve React Context/Hook yönetimini sağlayan sarmalayıcı |
| `src/app/layout.tsx` | Düzenleme | `SmoothScrollProvider`'ı tüm uygulamaya sağlayıcı olarak sarmalama |
| `src/app/globals.css` | Düzenleme | Lenis'in önerilen CSS kuralları (`html.lenis`, `html.lenis body { height: auto }`) |
| `src/components/Header.tsx` | Düzenleme | Navigasyon menü elemanlarına yumuşak kaydırma tetikleyicisi |
| `src/components/EditorialHero.tsx` | Düzenleme | "Seçilmiş İşler" CTA butonuna `#works` yumuşak kaydırma tetikleyicisi |
| `tests/unit/smooth-scroll.test.ts` | Yeni | Lenis yapılandırma mantığı ve reduced motion kontrolü için birim testi |

## 2. Uygulama Adımları
1. **Adım 1:** `lenis` paketinin kurulumu (`npm install lenis`).
2. **Adım 2:** `src/app/globals.css` içine Lenis reset CSS kurallarının eklenmesi.
3. **Adım 3:** `src/components/SmoothScrollProvider.tsx` bileşeninin yazılması (RAF döngüsü, unmount temizliği, prefers-reduced-motion kontrolü).
4. **Adım 4:** `src/app/layout.tsx` içine `SmoothScrollProvider` entegrasyonu.
5. **Adım 5:** `Header.tsx` ve `EditorialHero.tsx` üzerindeki butonların Lenis `scrollTo` ile hedefe akıcı yönlendirilmesi (`#works`, `#contact`, `#manifesto`).
6. **Adım 6:** Birim testinin yazılması (`tests/unit/smooth-scroll.test.ts`).
7. **Adım 7:** Doğrulama (`./scripts/check`), derleme (`npm run build`) ve tarayıcıda canlı test.

## 3. Risk Değerlendirmesi
- **Risk Seviyesi:** STANDARD
- **Olası Risk:** Next.js SSR sırasında `window` nesnesinin bulunamaması (Hydration mismatch).
- **Önlem:** `"use client"` direktifi ve `useEffect` içinde yalnızca istemci tarafında başlatma.
