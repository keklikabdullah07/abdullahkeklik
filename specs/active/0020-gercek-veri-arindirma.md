# Spec 0020: Gerçek Veri Arındırma ve Portfolyo Senkronizasyonu

## 1. Amaç ve Kapsam
Portfolyoda vitrin amaçlı yer alan kurgusal kurumsal projeleri (`OmniLogistics`, `FinPulse`), yayında olmayan temsili demo URL'lerini ve yapay metrikleri temizleyerek; Abdullah Keklik'in gerçek GitHub depolarına (`BloodSeal`, `kidscare`, `weCAN`, `moi-special`, `ismailportfoy`, `chukar-engine`), gerçek mühendislik disiplinine ve sahici kariyer kilometre taşlarına dayanan dürüst bir veri omurgası kurmak.

## 2. Kabul Kriterleri (Acceptance Criteria)
- [ ] **Kurgusal Projelerin Temizliği (`projects.ts`):** `omnilogistics-hub` ve `finpulse-gateway` projeleri kaldırılmalı; vitrin yalnızca gerçek repolardan (`bloodseal`, `kidscare`, `wecan`, `moi-special`, `ismailportfoy`, `chukar-engine`) oluşmalıdır.
- [ ] **Geçersiz Demo Bağlantılarının Kaldırılması:** Yayında olmayan temsili demo URL'leri (`engine.abdullahkeklik.dev`, vb.) temizlenmeli; tüm projeler doğrudan doğrulanabilir GitHub kaynaklarına (`githubUrl`) yönlendirilmelidir.
- [ ] **İstemci (Client) ve Yıldız (Stars) Düzeltmeleri:** Temsili lab/şirket isimleri yerine gerçek disiplin etiketleri (*"Açık Kaynak"*, *"Kişisel Girişim"*, *"Özel Komisyon"*) yer almalı; statik yapay yıldız sayıları kaldırılmalı veya nötrleştirilmelidir.
- [ ] **Zaman Çizelgesi Senkronizasyonu (`EditorialBio.tsx`):** Kariyer kilometre taşları (2024–2026), kurgusal lojistik/finans şirketleri yerine Abdullah'ın gerçek odaklarına (`BloodSeal` kriptografi, `weCAN` eşzamanlama, `kidscare` ve web arayüzleri) uyumlu hale getirilmelidir.
- [ ] **Editoryal Filtre ve Arayüz Uyumu (`CuratedWorks.tsx` & i18n):** Filtre çubuğu ve çoklu dil dosyaları (`tr`, `en`, `ku`) gerçek projelere uyarlanmalı, boş/0 kalan kurgusal filtreler arındırılmalıdır.
- [ ] **Bento Izgara Dengesi:** Projelerin silinmesi sonrası ana sayfadaki editoryal bento grid görsel boşluk ve kırılma olmadan estetik bir düzende oturmalıdır.
- [ ] **Kanıt ve Test Kapısı (`scripts/check`):** TypeScript derlemesi, Biome linter, Vitest birim testleri ve ADR kontrolleri eksiksiz yeşil olmalıdır.
