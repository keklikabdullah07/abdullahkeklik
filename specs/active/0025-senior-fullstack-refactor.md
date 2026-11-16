# SPEC-0025: Kıdemli Full-Stack Mühendislik Dili ve Yapay Zeka Noktalarının Arındırılması

## 1. Amaç & Kapsam
Portfolyoyu jenerik yapay zeka şablonu/klişesi (AI slop) göstergelerinden tamamen arındırarak; uluslararası düzeyde kıdemli bir **Full-Stack Mühendisi & Kreatif Teknolojist** kimliğine oturtmak.

### Kapsam Dahilinde:
1. **Yapay Zeka Durum Noktalarının (Status Dots) Temizlenmesi:**
   - Logotype'taki (`Abdullah KEKLİK.`) editoryal imza nokta haricinde;
   - Bölüm başlıkları, Header, rozetler, butonlar ve madalyon köşesindeki tüm serpiştirilmiş sarı/kehribar ve yanıp sönen noktaların kaldırılması.
2. **Kıdemli Full-Stack Mühendislik Konumlanması:**
   - Hero metninin doğrudan net mühendislik diline kavuşturulması (.NET 9, TypeScript, PostgreSQL, Rust/WASM, Dağıtık Sistemler).
   - Proje vaka incelemelerinde (Case Studies) uydurma hissi veren metriklerin temizlenip gerçek mimari problemler ve teknik kararların (Memory<T>, Span<T>, WebAssembly, Zero-GC, CRDT) öne çıkarılması.
3. **Zanaatkar ve Coğrafi Kimlik Dengesi (%75 Mühendislik / %25 Otantik Karakter):**
   - Urfa / Taş işçiliği felsefesinin şiirsel masaldan arındırılıp; zamana direnen, gereksiz karmaşıklıktan uzak, dayanıklı mimari vizyonu olarak sunulması.
4. **Çok Dilli Eşitlik (tr, en, ku):**
   - Türkçe, İngilizce ve Kürtçe dil dosyalarının yeni profesyonel dille tam senkronizasyonu.

## 2. Kabul Kriterleri (Acceptance Criteria)
- [ ] AC-1: `EditorialHero.tsx`'deki `Abdullah KEKLİK.` imza noktası haricinde, bölüm başlıklarında (`[02]`, `[03]`), Header'da, rozetlerde ve madalyonda hiçbir dekoratif `bg-amber` veya `animate-pulse` durum noktası bulunmamalıdır.
- [ ] AC-2: `src/locales/{tr,en,ku}.json` dosyalarında Hero, Manifesto ve Bio metinleri kıdemli Full-Stack mühendisliği netliğine kavuşmalı; süslü AI jargonu temizlenmelidir.
- [ ] AC-3: `src/data/projects.ts` vaka analizleri gerçekçi, teknik olarak tutarlı ve problem-çözüm odaklı olmalıdır.
- [ ] AC-4: Yeni birim testi `tests/unit/senior-fullstack-refactor.test.ts` yazılarak bu kriterler doğrulanmalıdır.
- [ ] AC-5: `./scripts/check` (Typecheck, Biome Lint, Vitest birim testleri, Invariant) eksiksiz yeşil geçmelidir.
