# Şartname 0011: Proje Vaka Analizi Detay Sayfaları (/works/[slug])

## 1. Hedef ve Kapsam
Abdullah Keklik editoryal vitrinindeki 4 projenin (`chukar-engine`, `omnilogistics-hub`, `kinesis-ui`, `finpulse-gateway`) her biri için Awwwards ve Kinfolk/Norm Architects editoryal seviyesinde tam ekran vaka analizi (Case Study) detay sayfaları (`/works/[slug]`) oluşturmak.

## 2. Teknik Mimari ve Detaylar
- **Dinamik Rota:** `src/app/works/[slug]/page.tsx` (Next.js 15 App Router).
- **Statik Üretim:** `generateStaticParams()` ile 4 projenin tamamı build aşamasında prerender edildi (`output: export` / static generation uyumlu).
- **Tip Güvenliği:** `Project` arayüzü vaka analizi alanlarıyla zenginleştirildi:
  - `challenge`: Karşılaşılan mimari sorun
  - `solution`: Üretilen mühendislik çözümü
  - `impact`: Ölçülebilir metrikler ve çıktılar
  - `deliverables`: Teslim edilen çıktılar
- **Sayfa Bileşenleri:**
  - **Editoryal Üst Bar:** `← ARŞİVE GERİ DÖN` navigasyonu ve Chukar amblem butonu.
  - **Asimetrik Çift Kolon:**
    - Sol Kolon (Sticky): Başlık, künye tablosu (Müşteri, Yıl, Disiplin, Öne Çıkan Metrik), etiketler, canlı demo ve kaynak kod butonları.
    - Sağ Kolon (Flow): Genel Bakış, Mimari Meydan Okuma, Mühendislik Çözümü, Ölçülebilir Sonuçlar ve Teslim Edilenler.
  - **Sonraki Proje Dolaşımı (Next Project Teaser):** Sıradaki projeye döngüsel geçiş sağlayan dev tıklanabilir alt blok.
  - **404 / Bulunamadı:** Bilinmeyen bir slug istendiğinde editoryal `notFound()` ekranı (`src/app/works/[slug]/not-found.tsx`).
- **Tasarım ve Renk Uyumu:**
  - Keten/Nahit Taşı (`#F4EFE6`), Sıcak Kumtaşı (`#EAE1D2`), Kavrulmuş Espresso (`#1C1613`), Terracotta (`#C8532B`).

## 3. Kabul Kriterleri (Acceptance Criteria)
- [x] `Project` tipi ve `projects.ts` veri tabanı vaka analizi içerikleriyle zenginleştirildi.
- [x] `src/app/works/[slug]/page.tsx` dinamik sayfası oluşturuldu.
- [x] `generateStaticParams()` ile 4 projenin tümü statik olarak üretildi.
- [x] Ana sayfadaki `CuratedWorks` tablosundaki her satır doğrudan ilgili `/works/[slug]` adresine bağlandı.
- [x] Geçersiz slug'larda editoryal 404 durumu düzgün çalışıyor.
- [x] Sayfa altında "Sonraki Proje" geçiş butonu bulunuyor.
- [x] `./scripts/check` 5 aşamada yeşil geçti.
