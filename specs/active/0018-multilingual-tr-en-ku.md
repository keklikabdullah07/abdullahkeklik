# Şartname 0018: Çoklu Dil Desteği — Türkçe (TR), İngilizce (EN) & Kürtçe (KU)

## 1. İş Hedefi ve Kapsam (Intent)
Partridge portfolyosuna Türkçe (TR), İngilizce (EN) ve Kürtçe (KU - Kurmancî / Hawar Alfabesi) dillerinde eksiksiz, dinamik ve sıfır gecikmeli çoklu dil desteği kazandırmak. Mezopotamya kültürel kimliği ile küresel teknoloji vitrinini birleştirmek.

## 2. Temel İlkeler ve Sınırlar (Boundaries & Constraints)
1. **Diyalekt & Alfabe:** Kürtçe için Türkiye/Urfa bölgesi standardı olan **Kurmancî** ve **Latin (Hawar) alfabesi** kullanılacaktır (LTR akışı, font uyumu).
2. **Sıfır Sayfa Yenileme (Zero Reload):** Dil değişimi sayfa yenilenmeden, React Context üzerinden anında tüm bileşenlere yansıyacaktır.
3. **Kalıcılık:** Seçilen dil `localStorage` ve `cookie` üzerinde saklanacaktır.
4. **Fallback Güvencesi:** Eksik çeviri durumunda boş string göstermek yerine ana dil (`tr`) devreye girecektir.
5. **Tip Güvenliği:** TypeScript anahtar denetimi ile eksik çeviri anahtarları derleme aşamasında yakalanacaktır.

## 3. Kabul Kriterleri (Acceptance Criteria)
- [ ] `src/locales/{tr,en,ku}.json` sözlük dosyaları oluşturulmalı.
- [ ] `LanguageContext` ve `useI18n()` hook'u tip güvenli şekilde hazırlanmalı.
- [ ] Header ve Dizin perdesi içinde zarif bir dil değiştirici (`TR · EN · KU`) yer almalı.
- [ ] Tüm vitrin bölümleri (Hero, CuratedWorks, TypographicManifesto, EditorialBio, GrandFinaleContact, Header) çoklu dil desteğine bağlanmalı.
- [ ] `npm run lint:fix`, `npm run typecheck`, `npm run test` ve `npm run build` hatasız tamamlanmalı.
