# Uygulama Planı: 0015 — Editoryal Soft Geçişler & Akıcı Hareket Mimarisi

## Değişecek Dosyalar (File Impact)
1. `src/components/EditorialHero.tsx`:
   - `framer-motion` ile `motion.div`, `motion.h1` ve kademeli konteyner varyantları (`staggerChildren: 0.12`).
   - `ABDULLAH` ve `KEKLİK` için editoryal fade-in + hafif Y-glide.
   - Madalyon video konteynerine yumuşak beliriş (`scale: 0.96 -> 1`, `opacity: 0 -> 1`).
2. `src/components/CuratedWorks.tsx`:
   - `motion.div` ile kategori tabları arasına `layoutId="activeFilterTab"` ekleyerek aktif buton göstergesini kayan bir hap (pill) haline getirme.
   - Proje listesini `motion.div layout` ve `AnimatePresence mode="popLayout"` ile sararak filtre değişimlerinde kartların ekranda pürüzsüzce yeniden dizilmesini sağlama.
   - Kart hover sınır ve derinlik yumuşatmaları.
3. `src/components/TypographicManifesto.tsx`:
   - Bölüm girişinde sol manifesto ve sağ uzmanlık kartları için `whileInView` staggered görünüm.
   - Uzmanlık kartlarında hover sırasında akıcı arka plan ton geçişi.
4. `src/components/EditorialBio.tsx`:
   - Biyografi, istatistik künyeleri ve zaman çizelgesi (chronology) için `whileInView` editoryal reveal.
5. `src/components/GrandFinaleContact.tsx`:
   - Footer / iletişim alanında imza ve CTA için yumuşak scroll reveal.
6. `src/components/MotionWrapper.tsx` (Yeni Yardımcı veya Hook):
   - `useReducedMotion` desteğini garanti altına alan hafif editoryal animasyon wrapper'ı (DRY ilkesi).

## Doğrulama Adımları
1. `npx biome check .` (Linter & Formatter doğrulaması).
2. `npx tsc --noEmit` (TypeScript tip kontrolü).
3. `npm run test` (Vitest birim testlerinin koşulması).
4. `http://localhost:3042` üzerinde canlı tarayıcı kontrolü (Tüm geçişlerin 60 FPS aktığının ve layout thrashing olmadığının gözlemlenmesi).
