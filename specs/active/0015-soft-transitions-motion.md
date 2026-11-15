# Şartname 0015: Editoryal Soft Geçişler & Akıcı Hareket Mimarisi (Quiet Luxury Motion)

## 1. İş Hedefi ve Kapsam (Intent)
Partridge portfolyosuna, "sessiz lüks" (quiet luxury) ve editoryal Mezopotamya tasarım diline sadık kalarak, abartıdan uzak, 60 FPS garantili, Apple/Awwwards SOTD kalibresinde yumuşak geçişler ve hareket koreografisi kazandırmak.

## 2. Temel İlkeler ve Sınırlar (Boundaries & Constraints)
1. **Hareket Bütçesi (Motion Budget):** Animasyonlar kullanıcıyı bekletmemeli; süreler 300ms–700ms arasında, editoryal `cubic-bezier(0.16, 1, 0.3, 1)` eğrisiyle çalışmalıdır.
2. **GPU İvmesi & Sıfır Reflow:** Sadece `transform` ve `opacity` nitelikleri anime edilmeli; `margin`, `padding`, `width` gibi layout-thrashing özellikler anime edilmemelidir.
3. **Tek Etkileşimli Varlık İlkesi:** İçinde buton olan kartlar hover'da havaya zıplamaz (grounded kalır); yalnızca sınır ışığı (`border`), iç doku ve butonun kendisi taktil tepki verir.
4. **Erişilebilirlik (A11y & `prefers-reduced-motion`):** Harekete duyarlı kullanıcılar için tüm animasyonlar anında sıfırlanabilir olmalıdır.

## 3. Kabul Kriterleri (Acceptance Criteria)
- [ ] **Hero Açılış Koreografisi:** Sayfa ilk yüklendiğinde üst künye, heykelsi başlık (`ABDULLAH KEKLİK`), 3D madalyon ve manifesto metni kademeli (staggered) ve ipeksi bir biçimde görünür olmalıdır.
- [ ] **Bölüm Girişleri (Scroll-triggered Reveal):** Sayfa aşağı kaydırıldıkça `CuratedWorks`, `TypographicManifesto`, `EditorialBio` ve `GrandFinaleContact` bölümleri yumuşakça (fade + 16px Y-lift) ekrana girmelidir (`viewport.once = true`).
- [ ] **Filtreleme Geçişleri (FLIP Layout Motion):** `TÜMÜ`, `GITHUB`, `GITLAB` filtrelerine basıldığında projeler kesilip sıçramadan yer değiştirmeli; aktif sekme hapı (pill) pürüzsüz kaymalıdır (`layoutId`).
- [ ] **Taktil Mikro Etkileşimler:** Butonlarda ve interaktif etiketlerde yumuşak basılma (`scale(0.98)` / `active:translate-y`) ve renk yumuşamaları olmalıdır.
- [ ] **Erişilebilirlik Koruması:** `prefers-reduced-motion: reduce` durumunda tüm transform/translate hareketleri bypass edilmelidir.
- [ ] **Kalite Kapıları:** `npm run check` (Lint, Typecheck, Test) eksiksiz yeşil olmalıdır.
