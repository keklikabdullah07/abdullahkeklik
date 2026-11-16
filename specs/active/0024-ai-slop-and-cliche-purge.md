# Şartname: 0024 — Yapay Zeka Klişeleri ve Belirteçlerinin Arındırılması

## 1. Amaç ve Kapsam
Sitedeki yapay zeka jeneratörlerine veya LLM şablonlarına ait tüm jenerik belirteçlerin (Sparkles ikonları, sürekli "yapay zekayı reddediyorum" diyen metin klişeleri, preloader'daki sahte NASA/Sci-Fi telemetri dizgileri ve aşırı koordinat tekrarları) temizlenmesi; yerine Pentagram / Nippon Design Center disiplininde sessiz, olgun ve insan yapımı editoryal mühendislik dilinin yerleştirilmesi.

## 2. Kabul Kriterleri (Acceptance Criteria)
1. **`Sparkles` İkon Arındırması:**
   - `CuratedWorks.tsx` içindeki proje metriklerinden `Sparkles` ikonu kaldırılmalı; sade ve temiz `[metric]` formatı kullanılmalı.
   - `works/[slug]/page.tsx` detay sayfasından `Sparkles` ikonu temizlenmeli.
   - `TypographicManifesto.tsx` içerisindeki `Sparkles` ikonu yerine gerçek bir tasarım disiplini ikonu (`DraftingCompass` veya `Boxes`) konulmalı.
   - `EditorialBio.tsx` içerisindeki kullanılmayan `Sparkles` importu kaldırılmalı.
2. **Yapay Zeka Savunması / Metin Temizliği:**
   - `tr.json`, `en.json`, `ku.json` içerisindeki "yapay zeka şablonları yerine...", "mor gradyan klişeleri..." gibi sürekli yapay zekayı kötüleyen/savunmacı ChatGPT ifadeleri elenmeli.
   - Yerine saf zanaat ve mühendislik odaklı sakin editoryal metinler yazılmalı.
   - `EditorialBio.tsx` içindeki ilke metninde "Yapay Zeka Şablonlarının Reddi" yerine "Sessiz Lüks & Kalıcı Formlar" gibi olgun insan dili kullanılmalı.
3. **Preloader Telemetrisi:**
   - `EditorialPreloader.tsx` içerisindeki "CALIBRATING HIGH-FIDELITY SHADERS", "ALL SYSTEMS GO", "SYSTEM CORE COMPILED" gibi sahte sci-fi metinleri; stüdyo ve sergi açılış diliyle değiştirilmeli.
   - Preloader üst çubuğundaki gereksiz koordinat tekrarı temizlenmeli.
4. **Kalite & Doğrulama:**
   - `./scripts/check` (Typecheck, Biome, 30+ Vitest testi) %100 yeşil geçmeli.
