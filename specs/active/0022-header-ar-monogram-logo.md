# Spec 0022: Header Parlak Siyah ve Bakır AR Monogramı & Cömert Ebatlama

## 1. Amaç ve Kapsam
Kullanıcının yeni eklediği şeffaf arka planlı `public/Parlak Siyah ve Bakır AR Monogramı.png` görselini header sol kanadındaki marka kilidine entegre etmek. Önceki 32px'lik dar kutu yerine logonun hak ettiği heykelsi büyüklükte (yükseklik ~42-46px, genişlik ~64-70px), saydam zeminle doğrudan bütünleşen ve boğulmayan editoryal bir ölçek sağlamak.

## 2. Kabul Kriterleri (Acceptance Criteria)
- [ ] **Görsel Entegrasyonu:** `public/Parlak Siyah ve Bakır AR Monogramı.png` (ve web-safe takma adı `logo-monogram-ar.png`) header marka alanına yerleştirilmelidir.
- [ ] **Cömert & Orantılı Ebatlama:** Monogramın 1550x1015 (yaklaşık 3:2) en-boy oranı korunarak, masaüstünde `h-11 sm:h-12 w-auto` (~44-48px yükseklik), mobilde `h-9` (~36px yükseklik) ölçeğinde görünür ve çarpıcı olmalıdır.
- [ ] **Saydam Zemin Uyumu:** RGBA saydamlığı sayesinde yapay kutulardan arındırılmalı, doğrudan keten/obsidyen zemin üzerinde serbest ve nefes alır şekilde konumlandırılmalıdır.
- [ ] **Brand Lockup:** `ABDULLAH KEKLİK` heybetli başlığı, terracotta durum noktası ve `[CREATIVE TECH & SYSTEMS]` etiketiyle dikeyde kusursuz ortalanmalıdır (`items-center`).
- [ ] **Erişilebilirlik ve Doğrulama:** `alt` özniteliği doğru tanımlanmalı; `tests/unit/header.test.ts` güncellenmeli ve `scripts/check` 100% yeşil geçmelidir.
