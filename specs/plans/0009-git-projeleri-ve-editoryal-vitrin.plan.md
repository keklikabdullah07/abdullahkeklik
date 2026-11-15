# Plan 0009 — Canlı Git Projeleri ve Editoryal Vitrin Dönüşümü

> **İlişkili Şartname:** [`../active/0009-git-projeleri-ve-editoryal-vitrin.md`](../active/0009-git-projeleri-ve-editoryal-vitrin.md)  
> **Durum:** Proposed (Kullanıcı onayı bekleniyor)  
> **Risk Seviyesi:** STANDARD

---

## 1. Değişecek ve Eklenecek Dosyalar (File Manifest)

| Dosya Yolu | İşlem | Açıklama |
|---|---|---|
| `specs/active/0009-git-projeleri-ve-editoryal-vitrin.md` | Ekle | Aktif şartname dokümanı |
| `specs/plans/0009-git-projeleri-ve-editoryal-vitrin.plan.md` | Ekle | Bu geliştirme planı |
| `src/types/project.ts` | Güncelle | `source: 'github' \| 'gitlab' \| 'curated'` alanı ve dil/repo metadataları |
| `src/data/projects.ts` | Güncelle | `keklikabdullah07` gerçek repoları (`BloodSeal`, `kidscare`, `weCAN` vb.) ve zengin fallback verisi |
| `src/components/CuratedWorks.tsx` | Güncelle | Kategori filtre sekmeleri (`TÜMÜ`, `GITHUB`, `KURUMSAL`), zenginleştirilmiş indeks satırları, doğrudan repo linkleri |
| `src/components/GrandFinaleContact.tsx` | Güncelle | `keklikabdullah07` GitHub/GitLab ve `keklikabdullah` LinkedIn gerçek adresleri |
| `tests/unit/projects.test.ts` | Güncelle | Yeni filtre ve Git repo veri yapılarının birim testleri |

---

## 2. Adım Adım Uygulama Sırası

1. **Adım 1 — Tip ve Veri Altyapısı (`src/types/project.ts` & `src/data/projects.ts`):**
   - Proje modeline Git repo kaynakları, yıldız, dil ve harici link alanlarının tanımlanması.
   - `keklikabdullah07`'ın gerçek projelerinin (C# BloodSeal, TypeScript kidscare, weCAN vb.) başlık, açıklama ve künyeleriyle sisteme eklenmesi.
2. **Adım 2 — Editoryal Kategori Filtreleme Barı (`src/components/CuratedWorks.tsx`):**
   - `TÜMÜ [N]`, `AÇIK KAYNAK / GITHUB [N]`, `KURUMSAL SİSTEMLER [N]` sekmelerinin eklenmesi.
   - Aktif sekme tıklandığında yumuşak geçiş ve filtrelenmiş liste gösterimi.
3. **Adım 3 — Zengin İndeks ve Repo Bağlantıları:**
   - Her proje satırına repo dili rozeti (TypeScript, C#, Rust vb.) ve GitHub/GitLab ikonları eklenmesi.
   - Yüzen manyetik önizleme kartında repo istatistiklerinin sunulması.
4. **Adım 4 — Footer İletişim Bağlantıları:**
   - [GrandFinaleContact.tsx](src/components/GrandFinaleContact.tsx) içindeki linklerin doğrudan kullanıcı profillerine kilitlenmesi.
5. **Adım 5 — Kalite Kapısı ve Doğrulama:**
   - `npm run typecheck` + `npx biome check .` + `npm run test` koşulması.
