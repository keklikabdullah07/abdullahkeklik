# Şartname 0013: İnteraktif Çift Taraflı Madalyon (AK Monogram ↔ 3D Avatar)

## 1. Hedef ve Kapsam
Abdullah Keklik editoryal vitrininde; metalik kalligrafik imza (`public/logo-monogram.png`) ile sıcak 3D animasyonlu portreyi (`public/avatar.webp`) bir araya getiren, taktil ve mikro-etkileşimli çift taraflı bir madalyon bileşeni (`InteractiveMedallion.tsx`) geliştirmek.

## 2. Teknik Mimari ve Tasarım Detayları
- **Bileşen:** `src/components/InteractiveMedallion.tsx` (`"use client"`).
- **Yerleşim:** `src/components/Header.tsx` sağ üst köşede `ABDULLAH KEKLİK / CREATIVE TECHNOLOGIST` künyesinin yanında.
- **Tasarım:**
  - Yuvarlak madalyon formu (varsayılan 44x44px, Header'a tam oturan zarafet).
  - İnce Nahit Taşı & Terracotta kına kılcal çerçeve (`ring-1 ring-primary/25 shadow-sm`).
  - Ön Yüz: Metalik AK kalligrafik imzası (`/logo-monogram.png`), sıcak keten-kumtaşı zemin üzerinde.
  - Arka Yüz: 3D stilize animasyon avatar (`/avatar.webp`), yuvarlak çerçeveli.
- **3D Etkileşim & Animasyon:**
  - CSS 3D donanım ivmeli dönüş (`transform-style: preserve-3d`, `perspective: 1000px`, `backface-visibility: hidden`).
  - Yumuşak geçiş: `cubic-bezier(0.34, 1.56, 0.64, 1)` (hafif elastik yaylanma).
  - Otomatik döngü: Her 4.5 saniyede bir sakin bir editoryal nefesle ters yüzüne döner.
  - Kullanıcı etkileşimi: Fareyle üzerine gelindiğinde (hover) veya tıklandığında anında diğer yüze çevrilir ve döngü sıfırlanır.
  - Taktil geri bildirim: Tıklamada `active:scale-95` mikro dokunma tepkisi.
  - Erişilebilirlik & Reduced Motion: `prefers-reduced-motion: reduce` durumunda 3D spin yerine cross-fade kullanılır.
- **İzole Geliştirme İlkesi:** Kullanıcı onay verip beğenene kadar bu özellik `main` dalına veya uzak depoya push edilmez; yerelde canlı test edilir.

## 3. Kabul Kriterleri (Acceptance Criteria)
- [ ] `public/avatar.webp` ve `public/logo-monogram.png` varlıkları projeye dahil edilmeli.
- [ ] `src/components/InteractiveMedallion.tsx` bileşeni oluşturulmalı.
- [ ] 3D çift taraflı kart çevrilme mekanizması (Monogram ↔ Avatar) çalışmalı.
- [ ] Header sağ üst köşede konumlandırılmalı.
- [ ] Otomatik periyodik dönüş ve kullanıcı hover/click etkileşimi çalışmalı.
- [ ] `./scripts/check` 5 aşamada yeşil olmalı.
- [ ] Headless Chromium ile canlı görsel doğrulama yapılmalı.
