# Proje Haritası (PROJECT-MAP.md)

<!-- AUTO-GENERATED: DO NOT EDIT DIRECTLY. Run 'npx tsx scripts/generate-project-map.ts' to regenerate. -->
> Bu harita projenin güncel kod yapısını, endpoint'lerini, şemalarını ve mimari kararlarını tek bakışta özetler.
> Elle ekleme yapmak veya iş kurallarını tanımlamak için lütfen `docs/DOMAIN.md` dosyasını kullanın.

---

## 1. Modüller ve Dizin Yapısı
- `src/`
- `src/app/`
- `src/components/`
- `src/context/`
- `src/data/`
- `src/hooks/`
- `src/locales/`
- `src/services/`
- `src/types/`

---

## 2. API ve Sayfa Rotaları (Routes)
| Rota | Tip / Metotlar | Dosya |
|---|---|---|
| `/` | `PAGE (UI)` | `src/app/page.tsx` |
| `/works/[slug]` | `PAGE (UI)` | `src/app/works/[slug]/page.tsx` |

---

## 3. Veritabanı Şemaları ve Tablolar
_Henüz Drizzle veya ORM şema tablosu tespit edilmedi._

---

## 4. Kullanılan Ortam Değişkenleri (Environment Variables)
- `APP_URL`
- `CI`
- `NEXT_PUBLIC_SITE_URL`

---

## 5. Mimari Karar Kayıtları (ADR)
| ADR ID | Başlık | Durum |
|---|---|---|
| `0001-proje-temel-mimarisi` | ADR 0001 — Partridge Geliştirici Vitrini Temel Mimarisi ve Teknoloji Seçimi | **Accepted** |

---

## 6. Aktif Şartnameler (Active Specs)
| Spec ID | Başlık | Durum |
|---|---|---|
| `0001-scaffold-ve-vitrin-kabugu` | Spec 0001 — Proje İskelesi, Tasarım Sistemi ve Ana Vitrin Kabuğu | **Shipped** |
| `0002-awwwards-interaktif-vitrin` | Spec 0002 — Awwwards Seviyesi İnteraktif Bento Vitrin ve Akışkan Mikro-Hareket | **Shipped** |
| `0003-lenis-ve-partridge-etkilesimi` | Spec 0003 — Grail Kalitesinde Akışkan Kaydırma (Lenis) ve Kuş & Yazılım Etkileşimi | **Shipped** |
| `0004-fizik-arenasi-ve-partikuller` | Spec 0004 — Grail Seviyesi Fizik Arenası ve Partridge Parçacık Sahnesi | **Shipped** |
| `0005-kinali-keklik-renk-paleti` | Spec 0005 — Kınalı Keklik (Chukar Partridge) Doğal Palet Dönüşümü | **Shipped** |
| `0006-chukar-editoryal-tasarim` | Spec 0006 — Chukar Marka Kimliği ve Editoryal Tasarım Dönüşümü | **Shipped** |
| `0007-awwwards-redesign-experience` | Spec 0007 — Partridge Awwwards Seviyesi Yeniden Tasarımı ve Kinetik Deneyim Yüzeyi | **Shipped (Tamamlandı ve developer dalına birleştirildi)** |
| `0008-tasarim-sifirlama-ve-yalin-tuval` | Spec 0008 — Tasarım Sıfırlama ve Yalın Başlangıç Tuvali | **Approved (Kullanıcı doğrudan "tasarımla ilgili ne bulduysan kaldır baştan başlayacağız" talimatı verdi)** |
| `0009-git-projeleri-ve-editoryal-vitrin` | Spec 0009 — Canlı Git Projeleri ve Editoryal Vitrin Dönüşümü | **Proposed (Kullanıcı onayı bekleniyor)** |
| `0014-hero-3d-medallion-video` | Şartname 0014: Hero Alanı 3D Animasyonlu Medalyon Video Entegrasyonu | **Approved (Kullanıcı "onaylıyorum" teyidi verdi)** |
| `0015-seo-solid-cleanup` | Şartname 0015: SEO Mimarisi, SOLID Refactoring ve Kod/Varlık Temizliği | **Approved (Kullanıcı "onaylıyorum" teyidi verdi)** |
| `0015-soft-transitions-motion` | Şartname 0015: Editoryal Soft Geçişler & Akıcı Hareket Mimarisi (Quiet Luxury Motion) | **Draft** |
| `0016-architectural-masthead-header` | Şartname 0016: Architectural Split Masthead & Editoryal Dizin Perdesi (Awwwards Header) | **Draft** |
| `0018-multilingual-tr-en-ku` | Şartname 0018: Çoklu Dil Desteği — Türkçe (TR), İngilizce (EN) & Kürtçe (KU) | **Draft** |
| `0019-editorial-preloader-counter` | Spec 0019: Editoryal Sayaç & Shutter Perde (Editorial Preloader) | **Draft** |
| `0020-gercek-veri-arindirma` | Spec 0020: Gerçek Veri Arındırma ve Portfolyo Senkronizasyonu | **Draft** |
| `0021-header-brand-logo` | Spec 0021: Header Renkli Marka Logosu & Hibrit İsim Kilidi (Brand Lockup) | **Draft** |
| `0022-header-ar-monogram-logo` | Spec 0022: Header Parlak Siyah ve Bakır AR Monogramı & Cömert Ebatlama | **Draft** |
| `0023-footer-white-monogram-relics-cleanup` | Şartname: 0023 — Footer Beyaz AK Monogramı ve Eski Logo Kalıntılarının Temizlenmesi | **Draft** |
| `0024-ai-slop-and-cliche-purge` | Şartname: 0024 — Yapay Zeka Klişeleri ve Belirteçlerinin Arındırılması | **Draft** |
| `0025-senior-fullstack-refactor` | SPEC-0025: Kıdemli Full-Stack Mühendislik Dili ve Yapay Zeka Noktalarının Arındırılması | **Draft** |
