# Spec 0009 — Canlı Git Projeleri ve Editoryal Vitrin Dönüşümü

> **Durum:** Proposed (Kullanıcı onayı bekleniyor)  
> **Risk Seviyesi:** STANDARD  
> **Yazar:** Partridge Agent & Abdullah Keklik  
> **Tarih:** 2026-11-15  
> **Mod:** EXPERIENCE / OPERATE  
> **Yüzey(ler):** `src/components/CuratedWorks.tsx`, `src/data/projects.ts`, `src/components/GrandFinaleContact.tsx`, `src/types/project.ts`

---

## 1. Problem ve Amaç
Ziyaretçiler portfolyoya girdiğinde yalnızca statik mockup'lar değil; geliştiricinin **gerçek GitHub/GitLab depolarını**, yazdığı dilleri (C#, TypeScript, Rust), commit hareketliliğini ve canlı repo bağlantılarını editoryal bir zarafetle görmek istemektedir.
`keklikabdullah07` GitHub ve GitLab profilleri sisteme bağlanmalı; `DOMAIN.md` Hibrit Fallback kuralına tam uyularak hem gerçek repolar hem de yüksek mimarili vaka çalışmaları (Case Study) kesintisiz sergilenmelidir.

---

## 2. Kapsam

### İçinde (In Scope)
1. **Gerçek GitHub & GitLab Verisi Entegrasyonu:**
   - `keklikabdullah07` GitHub repoları (`BloodSeal`, `kidscare`, `moi-special`, `ismailportfoy`, `weCAN`, `abdullah-keklik-v2`) ve amiral gemisi `Chukar Engine`.
   - API kota aşımı veya çevrimdışı durumda sitenin asla boş kalmaması için zengin **Hibrit Fallback** katmanı.
2. **Editoryal Kategori Filtre Çubuğu (Tab Bar):**
   - `TÜMÜ [X]` · `AÇIK KAYNAK / GITHUB [X]` · `KURUMSAL & SİSTEM [X]` sekmeleri.
   - Tek tıkla akıcı filtreleme ve anlık sayaç rozetleri.
3. **Zenginleştirilmiş İndeks & Yüzen Kart (Floating Preview):**
   - Satırların üzerine gelindiğinde repo dili, son güncelleme zamanı ve GitHub/GitLab dış bağlantısı.
   - Yüzen kart üzerinde doğrudan projenin teknoloji yığını, canlı linkleri ve varsa metrikleri.
4. **Footer Ağ Bağlantıları Güncellemesi:**
   - [GrandFinaleContact.tsx](src/components/GrandFinaleContact.tsx) içindeki bağlantıların `https://github.com/keklikabdullah07`, `https://gitlab.com/keklikabdullah07` ve `https://www.linkedin.com/in/keklikabdullah/` olarak güncellenmesi.

### Dışında (Out of Scope)
- OAuth tabanlı kullanıcı girişi veya GitHub push/commit tetikleme yetkileri (salt-okunur açık veri).

---

## 3. Kabul Kriterleri (Acceptance Criteria)
- [ ] **AC-1:** CuratedWorks vitrininde `keklikabdullah07` GitHub/GitLab repoları ve öne çıkan projeler editoryal indeks disiplininde listelenmelidir.
- [ ] **AC-2:** Kategori filtre butonları (`Tümü`, `GitHub`, `Kurumsal`) tıklandığında liste anında filtrelenmeli ve sayaçlar doğru adedi göstermelidir.
- [ ] **AC-3:** GitHub/GitLab API'si erişilemez olduğunda veya boş döndüğünde site asla hata vermemeli, yerel hibrit veri ile eksiksiz çalışmalıdır (Hibrit Fallback).
- [ ] **AC-4:** Masaüstünde satır üzerine gelindiğinde yüzen manyetik önizleme kartı projenin dilini, etiketlerini ve açıklamasını pürüzsüzce göstermelidir.
- [ ] **AC-5:** Footer ağ bağlantıları (`GitHub`, `GitLab`, `LinkedIn`) kullanıcının gerçek profillerine yönlendirmelidir.
- [ ] **AC-6:** `./scripts/check` (Typecheck + Lint + 15+ Vitest testi) sıfır hatayla yeşil geçmelidir.
