# Spec 0021: Header Renkli Marka Logosu & Hibrit İsim Kilidi (Brand Lockup)

## 1. Amaç ve Kapsam
Sitenin ana başlık alanında (Header) yer alan `ABDULLAH KEKLİK` tipografik künyesini, kullanıcının renkli şahsi logosu olan `public/partridgelogo.png` ile birleştirerek yüksek kaliteli editoryal bir "Logo + İsim" hibrit marka kilidi (Brand Lockup) inşa etmek.

## 2. Kabul Kriterleri (Acceptance Criteria)
- [ ] **Renkli Logo Entegrasyonu:** Header sol kanadında `public/partridgelogo.png` görseli editoryal mimari bir çerçeve içinde yer almalıdır (`rounded-lg bg-surface border border-hairline/80`).
- [ ] **Duyarlı Boyutlandırma:** Logo masaüstünde 32x32px, mobilde 28x28px ebatlarında taşma yapmadan `object-contain` ile ortalanmalıdır.
- [ ] **Brand Lockup Uyumu:** Logo, `ABDULLAH KEKLİK` başlığı ve terracotta canlı durum noktasıyla estetik bir hizada (`items-center`) birleşmelidir.
- [ ] **Erişilebilirlik (A11y):** Logoya uygun `alt` özniteliği atanmalı ve `Link` semantiği bozulmamalıdır.
- [ ] **Görsel & Taktil Etkileşim:** Hover anında çerçevenin kenar çizgisi yumuşakça `hover:border-primary/50` geçişi yapmalıdır.
- [ ] **Kanıt ve Test Kapısı (`scripts/check`):** TypeScript derlemesi, Biome linter, Vitest testleri ve üretim derlemesi (`next build`) 100% yeşil geçmelidir.
