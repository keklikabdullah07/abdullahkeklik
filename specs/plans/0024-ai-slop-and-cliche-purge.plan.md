# Plan: 0024 — Yapay Zeka Klişeleri ve Belirteçlerinin Arındırılması

## Değişecek Dosyalar
1. `src/components/CuratedWorks.tsx`:
   - `Sparkles` importu ve kullanımı kaldırılacak.
   - Metrik rozeti sade ve asil bir editoryal etikete dönüştürülecek.
2. `src/app/works/[slug]/page.tsx`:
   - `Sparkles` importu ve kullanımı kaldırılacak.
3. `src/components/TypographicManifesto.tsx`:
   - `Sparkles` yerine `Boxes` veya `DraftingCompass` ikonu entegre edilecek.
4. `src/components/EditorialBio.tsx`:
   - `Sparkles` importu kaldırılacak.
   - 2. ilkedeki yapay zeka savunma dili editoryal zanaat ve kalıcı formlar diline dönüştürülecek.
5. `src/components/EditorialPreloader.tsx`:
   - Sahte sci-fi aşama dizgileri stüdyo ve sergi açılış diline çevrilecek.
   - Üst çubuktaki koordinat tekrarı kaldırılacak.
6. `src/locales/tr.json`, `src/locales/en.json`, `src/locales/ku.json`:
   - `hero.description` ve `manifesto.p2` metinlerindeki AI karşıtı savunma cümleleri temizlenecek.
7. Doğrulama:
   - `./scripts/check` ile tüm kapılar doğrulanacak.
