# Plan 0013: İnteraktif Çift Taraflı Madalyon (AK Monogram ↔ 3D Avatar)

## Değişecek ve Eklenecek Dosyalar
1. `src/components/InteractiveMedallion.tsx` (YENİ)
   - React State ve useEffect ile 4.5s otomatik flip döngüsü
   - Hover ve Click event listener'ları
   - 3D CSS transform `rotateY(0deg)` / `rotateY(180deg)`
   - Ön yüzde `/logo-monogram.png`, arka yüzde `/avatar.webp`
2. `src/components/Header.tsx` (DÜZENLEME)
   - Sağ üstteki `ChukarLogo` yerine `InteractiveMedallion` entegrasyonu
3. `tests/unit/medallion.test.ts` (YENİ)
   - Bileşenin render olması, id ve düğme rollerinin doğrulanması
4. `./scripts/check` doğrulaması
5. Canlı tarayıcı testi & ekran görüntüsü

## Risk Analizi
- **Tasarım:** Header yüksekliği (h-20) 44x44px madalyonu kusursuz kaldırır; layout bozulmaz.
- **Performans:** GPU ivmeli `transform: rotateY()` kullanılır; reflow veya bellek baskısı yaratmaz (60 FPS uyumlu).
- **Geri Çekme:** İzole `feature/0013-medallion-monogram-avatar` dalında geliştirildiği için istenirse tek komutla eski hale dönülebilir.
