# Plan-0025: Kıdemli Full-Stack Mühendislik Dili ve Yapay Zeka Noktalarının Arındırılması

## Değişecek Dosyalar
1. `src/components/Header.tsx`: Başlık rozetindeki ve canlı atölye alanındaki noktaları kaldırma; unvanı güncelleme.
2. `src/components/EditorialHero.tsx`: Odak alanlarını ve full-stack mühendis kimliğini güncelleme.
3. `src/components/CuratedWorks.tsx`: Rozetlerdeki noktayı kaldırma.
4. `src/components/TypographicManifesto.tsx`: Bölüm başlığındaki `bg-amber` noktayı kaldırma.
5. `src/components/EditorialBio.tsx`: Bölüm başlığı, kart ve zaman çizelgesindeki atıl durum noktalarını kaldırma; ilkeleri ve anlatımı güncelleme.
6. `src/components/InteractiveMedallion.tsx`: Köşedeki dekoratif sarı noktayı kaldırma.
7. `src/components/GrandFinaleContact.tsx`: Durum rozetindeki yanıp sönen noktayı kaldırma.
8. `src/components/EditorialDirectoryModal.tsx`: Durum rozetindeki yanıp sönen noktayı kaldırma.
9. `src/app/works/[slug]/page.tsx`: Başlık rozetindeki noktayı kaldırma.
10. `src/locales/tr.json`: Kıdemli full-stack mühendislik dili.
11. `src/locales/en.json`: İngilizce tam karşılıkları.
12. `src/locales/ku.json`: Kürtçe tam karşılıkları.
13. `src/data/projects.ts`: Vaka incelemelerindeki metrik ve anlatımları netleştirme.
14. `tests/unit/senior-fullstack-refactor.test.ts`: Doğrulama testi.

## Uygulama Adımları
1. Noktaların bileşenlerden ayıklanması.
2. Dil dosyalarının ve proje vaka metinlerinin güncellenmesi.
3. Test yazımı ve Biome formatlama.
4. `./scripts/check` 5 kapılı doğrulama.
5. `main` dalına merge ve push.
