---
# -----------------------------------------------------------------------------
# AGENTS.md — AI Ajanı Mühendislik Anayasası ve Proje Kimlik Kartı
# -----------------------------------------------------------------------------
project_name: "Partridge"
platform: [web | mobile | backend | game | cli | embedded | data-pipeline | hybrid]
scale: [lean-hobby | production | enterprise]

# Yetenek Bazlı Dinamik Bağlam Yönlendirmesi (Capability-Based Routing)
# Sıfır Context Şişkinliği: Yalnızca projede gereken yetenekleri 'true' yapın!
capabilities:
  # --- Frontend & Tasarım ---
  ui_design_system: false      # true: DESIGN.md, Storybook CDD, 15 anti-slop kuralı aktif
    # requires: e2e_browser_testing
  e2e_browser_testing: false   # true: Playwright getByRole a11y-first testi zorunlu
  realtime_performance: false  # true: 60 FPS bütçesi, Update döngüsünde GC tahsis yasağı, Object Pooling

  # --- Backend & Veri ---
  database_migrations: false   # true: Drizzle ORM, UUIDv7, Hard-delete + Audit table, 3-adım migration
    # requires: structured_logging
  multi_tenancy: false         # true: TenantGuard, her sorguda tenantId, Testcontainers izolasyon testi
    # requires: database_migrations, structured_logging
  api_contract: false          # true: REST/tRPC/GraphQL + Zod şema + OpenAPI/typed client (frontend↔backend)
    # requires: e2e_browser_testing
  background_jobs: false       # true: Queue + cron + scheduler (BullMQ/Inngest); email/rapor/job'lar
    # requires: structured_logging

  # --- Gözlemlenebilirlik ---
  structured_logging: true     # true: Pino JSON formatı + AsyncLocalStorage CorrelationID (console.log yasak)

  # --- Uyum & Erişilebilirlik ---
  compliance_gdpr: false       # true: KVKK/GDPR, PII handling, "right to be forgotten" audit trail
    # requires: database_migrations, structured_logging
  i18n_localization: false     # true: Çoklu dil, RTL, Intl.NumberFormat/DateTimeFormat
  accessibility_aa: false      # true: WCAG AA, contrast 4.5:1, klavye navigasyon, aria-label, focus-visible
    # requires: e2e_browser_testing, ui_design_system

  # --- Güvenlik ---
  security_sast: true          # true: repos/sast-skills kurallarıyla statik güvenlik taraması

# Çakışma Kuralları (Conflict Resolution)
# - ui_design_system=true + realtime_performance=true → Animasyon süreleri motion budget'e uymalı
# - cli/embedded/data-pipeline platformlarında ui_design_system kapatılmalı
# - lean-hobby scale'de security_sast=true ise baseline rules yeterli, advanced rules opsiyonel
---

## 🏛️ DEĞİŞMEZ ÇEKİRDEK ANAYASA (Tüm Projelerde İstisnasız Geçerlidir)

### 1. Kararlı Modernizm İlkesi (Stable Modernism & Boring Technology)
- Asla alpha, beta, rc veya canary paket kurulamaz. Her bağımlılık **LTS (Long Term Support)** veya üretim ortamında en az 1 yıldır rüştünü ispatlamış kararlı sürüm olmak zorundadır.
- Innovation Token kuralı: Bir projede en fazla 1-2 yeni nesil araç benimsenebilir; sistemin %80 omurgası (PostgreSQL, Linux, Node LTS) kaya gibi kararlı kalır.

### 2. İletişim Disiplini (No Premature Action)
- Soru işareti (`?`) içeren veya durum sorgulayan kullanıcı mesajlarında **KESİNLİKLE doğrudan dosya düzenlenmez, kod yazılmaz veya terminal komutu çalıştırılmaz**.
- "Kıdemli Usta" refleksiyle önce soruya açık, net ve analitik cevap verilir. Kullanıcı açıkça *"başla / uygula / düzelt"* onayı vermeden koda dokunulmaz.

### 3. Hakikat Omurgası (Anti-Sycophancy / Truth Over Pleasing)
- Kullanıcıyı memnun etmek veya anlık onay almak uğruna teknik, güvenlik veya tasarımsal gerçekler bükülemez ("Kralın Baş Mimarı" duruşu).
- Talep standartlarla çelişiyorsa sahte övgüler yerine literatür ve endüstri kanıtları masaya konur; riskler açıklandıktan sonra nihai karar insana bırakılır.

### 4. Süreç Yönetişimi (ANEW & Soru Sorma / Clarify Refleksi)
- **Bootstrap (Proje Başlatma Mülakatı):** Yeni projede veya mimari başlangıçta doğrudan kod yazılamaz. AI, `prompts/bootstrap.md` protokolünü işleterek insanı mülakata alır: Teknoloji tercihleri, veri sınırları ve hedefler hakkında sorularını kendi teknik önerisi ve gerekçesiyle (Proposal Rule) sorar.
- **Intent & Clarify (Önce Soru Sor ve Netleştir):** Kullanıcı yeni bir özellik veya ekran istediğinde AI doğrudan koda veya spec'e dalamaz! `prompts/clarify.md` protokolünü çalıştırır:
  1. İş hedefini (Intent) 3-5 cümleyle özetler.
  2. Sınırlar, boş ekranlar (empty states), hata senaryoları, kullanıcı akışı ve yetki gereksinimleri hakkında netleştirme sorularını (Clarify Questions) kendi önerileriyle sorar.
  3. Kullanıcıdan onay ve yanıtları aldıktan sonra şartname aşamasına geçer.
- **No spec, no code:** `specs/active/` altında onaylanmış şartnamesi ve kabul kriterleri (AC) olmayan hiçbir iş için tek satır kod yazılamaz.
- **Plan before build:** Hangi dosyaların değişeceği (`specs/plans/`) insan tarafından onaylanmadan geliştirmeye girilmez.
- **The producer never verifies its own work:** Kodu yazan ajan kendi işini tek başına onaylayamaz; bağımsız QA/Reviewer perspektifi zorunludur.

### 5. Kasa Dairesi ve Sürümleme (Git Dual-Branch)
- `main` canlı sürümdür (Showroom); asla doğrudan commit veya push yapılamaz.
- Tüm günlük çalışma `developer` montaj hattından açılan izole `feature/<spec-no>-<kisa-ad>` dallarında yapılır.
- Conventional Commits zorunludur (`feat`, `fix`, `test`, `refactor`, `chore`, `docs`, `perf`).
- İşi biten ve testleri geçen feature dalı `developer`'a merge edilip silinir. Ajan kullanıcı onayı olmadan asla `main`'e merge yapamaz.

### 6. Kanıt Kapısı ve Görsel Hakikat (Evidence Over Claims & Visual Ground Truth)
- "Hallettim / çalışıyor" soyut iddiası yasaktır. `./scripts/check` (Typecheck + Lint + Test) çıktısı yeşil olmadan hiçbir görev tamamlanmış sayılamaz.
- **JSDOM Görsel İllüzyon Yasağı:** Vitest/Jest/JSDOM ortamındaki birim testler sadece sanal veri ağacını doğrular; layout, paint, SVG isim uzayı veya CSS hesaplaması yapmaz. JSDOM testi tek başına bir arayüzün (UI/SVG/Canvas) ekranda çalıştığının kanıtı **SAYILAMAZ**.
- **Token Tasarrufu & Tek Seferlik Nihai Kontrol Prensibi:** AI, geliştirme sürecinin her adımında sürekli tarayıcı açıp context ve token tüketmez! Kodlama esnasında hızlı ve maliyetsiz birim testler koşturulur. Görsel tarayıcı kontrolü **yalnızca tüm iş tamamlandıktan sonra (Final Gate / Checkpoint)** kullanıcıya teslim etmeden önce **TEK SEFERLİK** yapılır.
- **Sahte Gate Yasağı:** `scripts/check` içine `echo "e2e skipped"` gibi sahte başarı döndüren adımlar koymak yasaktır. UI içeren işlerde son kapıda tek seferlik bir headless Chromium (Playwright `toBeVisible()`, `boundingBox() > 0`) veya Browser MCP ekran görüntüsü kontrolü ile sayfanın boş kalmadığı ve bileşenlerin gerçekten göründüğü kanıtlanır.

### 7. Değişiklik Risk Kademeleri (Risk Tiers)
Mekanik "100 satır" kuralı yerine semantik risk esastır:
| Kademe | Tanım ve Kapsam | Zorunlu Kapılar |
|---|---|---|
| **TRIVIAL** | Typo düzeltmeleri, stil/format, salt dokümantasyon, yorum satırları | İzole dal + Doğrudan commit + `scripts/check` |
| **STANDARD** | Yeni sayfa/ekran, standart CRUD endpoint'i, yeni form alanı, UI filtreleri | Spec + Plan + `scripts/check` (Unit + Lint) |
| **HIGH** | Kimlik doğrulama/yetki (Auth/RBAC), şema migration, hard delete, KVKK/PII verisi, ödeme/finansal hesaplama, asenkron bildirimler | Spec + Plan + **Açık Bilinmeyenlerin Kapatılması** + **Bağımsız İnceleme** + **İnsan Onayı** + Final Görsel Kapı |

### 8. Oturum Okuma ve Oryantasyon Protokolü (6 Adım)
Her yeni oturumda veya yeni bir göreve başlarken AI şu sırayla oryantasyon sağlar:
1. `AGENTS.md` — Anayasa, aktif yetenekler (`capabilities`) ve risk seviyesi.
2. `docs/PROJECT-MAP.md` — Mevcut modüller, rotalar, şema ve ortam değişkenleri (yoksa `npx tsx scripts/generate-project-map.ts` ile üret).
3. `docs/UNKNOWNS.md` — Açıkta bekleyen mimari veya iş sorularını incele.
4. `docs/DOMAIN.md` — Projeye özgü iş kuralları ve domain sözlüğü (terminoloji).
5. İlgili `specs/active/*.md` — Aktif görev şartnamesi ve kabul kriterleri.
6. İlgili `docs/decisions/*.md` — Alınmış mimari kararlar (ADR).

---

## 📦 AKTİF YETENEK YÖNERGELERİ (Yalnızca Yukarıda 'true' Olanlar Yüklenir)

### [ui_design_system = true]
- Proje kökündeki `DESIGN.md` sözlüğünü oku.
- **AI Slop Yasakları:** Asla mor-mavi gradyan, asla saf beyaz (`#FFFFFF`) veya saf siyah (`#000000`) zemin kullanma. Keten (`#FAF9F6`) ve derin obsidyen (`#090D16`) esastır.
- **Tek Etkileşimli Varlık İlkesi:** İçinde buton olan kart hover'da hareket edemez; kart sabit (grounded) kalır, sadece buton dokunsal basılır.
- **pdfme Stüdyo Mimarisi & Canlı Etkileşim Standardı (github.com/pdfme/pdfme):**
  - Görsel editör/stüdyo projelerinde hedef daima masaüstü sınıfı bir tasarım aracıdır (Figma/Canva/pdfme seviyesi).
  - **Eklenti (Plugin/Schema) Tabanlı Olmalıdır:** Her şekil/öğe (QR, Metin, Resim, Barkod, Tablo) bağımsız bir eklentidir. Core kod kirletilmeden yeni şema tipleri `provideXxxShape` / registry ile sisteme kaydolur.
  - **Canlı Transformer (Live Manipulation):** Canvas üzerindeki her öğe doğrudan tıklanıp seçilmeli (`bounding-box`), 8 noktalı tutamaçlarla (`resize handles`) orantılı boyutlandırılabilmeli ve sürüklenebilmelidir (`drag & drop`). Sadece veri tablosunda olup canvasta taşınamayan bileşen "bitmemiş" sayılır.
  - **Dinamik Inspector:** Sağ menü statik form değildir; seçilen bileşenin şemasına (`ShapeDefinition.props`) göre X, Y, W, H, hizalama ve tipe özel kontrolleri (font, renk, padding, hata düzeltme seviyesi) anında üretir.
- **SVG & Canvas Render Tuzağı (Gotcha):** Kök `<svg>` içine Angular/React dinamik bileşen etiketleri (`<custom-shape>`) doğrudan basılamaz; Chromium motoru standart dışı etiketleri `display: none` ile gizler. Mutlaka `<foreignObject>` ile XHTML bağlamına geçilmeli veya doğrudan SVG primitifleri (`<rect>`, `<path>`) kullanılmalıdır.
- **Koordinat Alanı Tutarlılığı:** SVG `viewBox` koordinat uzayı ile seçim/sürükleme çerçevesinin CSS piksel uzayı birebir senkronize olmalıdır; çift çarpan (`mmToPx` çifte ölçekleme) hatası önlenmelidir.
- **Storybook & Canlı Doğrulama:** Bileşenleri sayfaya gömmeden önce izole CDD atölyesinde (`localhost:6006`) veya canlı tarayıcı oturumunda uç durumlara (uzun metin, hata hali) göre geliştir.

### [database_migrations = true]
- **Primary Key:** Sıralı integer yasaktır; daima zaman damgalı **UUIDv7** (veya CUID2) kullanılır.
- **Silme:** Soft-delete unique indeksleri zehirlediği için temel strateji **Hard Delete + `audit_logs` tablosuna JSON arşivleme**dir.
- **ORM:** Saf TypeScript ve native edge uyumu için **Drizzle ORM** esastır.
- **Migration Güvenliği:** 3-adım kuralı (1. Nullable ekle -> 2. Kodu deploy et ve doldur -> 3. NOT NULL yap). İndeksler daima `CONCURRENTLY` ile oluşturulur.

### [multi_tenancy = true]
- Tenant A kullanıcısı Tenant B verisini ASLA göremez. Her API ve DB sorgusunda `tenantId` bağlamı zorunludur.
- Çok kiracılı izolasyon testleri mock ile değil, **Testcontainers üzerinde gerçek PostgreSQL** ile koşulur. Docker yoksa `SKIP_DOCKER_TESTS=1` ile CI'a devredilir.

### [e2e_browser_testing = true]
- **Seçici Hiyerarşisi (A11y-First):** 
  1. `page.getByRole(...)` (Görme engelli ve klavye erişilebilirliğini doğrular).
  2. `page.getByLabel(...)` (Form inputları için).
  3. `page.getByTestId(...)` (Yalnızca dinamik/karmaşık durumlar için son çare).
- Kırılgan CSS class veya XPath kullanımı yasaktır.

### [realtime_performance = true]
- Hedef: Kilitli 60 FPS (Kare bütçesi: 16.6ms).
- `Update()` / `_process()` döngülerinde bellek tahsisi (GC allocation) yasaktır.
- Sık üretilen/yok edilen nesneler için Nesne Havuzu (Object Pooling) zorunludur.

### [structured_logging = true]
- `console.log` kullanımı pre-commit ve ESLint ile kesinlikle yasaklanmıştır.
- Tüm loglar **Pino** ile JSON formatında üretilir. Her HTTP isteği `AsyncLocalStorage` üzerinden otomatik `correlationId` damgası taşır.
- Hata yanıtları **RFC 7807 (`problem+json`)** standardına uyar.

### [security_sast = true]
- `repos/sast-skills-main/` kütüphanesindeki 16 statik analiz kuralı işletilir (SQLi, XSS, RCE, Broken JWT, Path Traversal denetimi).

### [api_contract = true]
- **API Tip Güvenliği:** Her endpoint Zod şeması ile tanımlanır; request/response hem frontend hem backend aynı tipleri paylaşır (tRPC, OpenAPI generator veya paylaşılan `@acme/contracts` paketi).
- **Compile-time Doğrulama:** Frontend'de yanlış field adı veya eksik property derleme (TypeScript) aşamasında patlar, runtime'da değil.
- **Sözleşme Versiyonlama:** API breaking change'ler `/v2/` prefix ile; geriye uyumluluk en az 1 minor sürüm korunur.
- **Monorepo Dışı Senaryo:** Frontend ve backend ayrı repo ise Pact ile provider/consumer contract test zorunlu.

### [background_jobs = true]
- **Queue:** BullMQ (Node) veya Inngest (serverless); her job **idempotent** (aynı job iki kez çalışırsa aynı sonuç).
- **Cron:** Schedule edilmiş görevler için BullMQ repeatable job veya Inngest scheduled function; sistem saatine değil **UTC**'ye göre.
- **Hata Yönetimi:** Failed job'lar `attempts` + `backoff` (exponential); 3 başarısız denemeden sonra dead-letter queue'ya.
- **Gözlemlenebilirlik:** Her job'un correlationId'si log'a geçer; başarı/başarısızlık metriği yayınlanır.

### [compliance_gdpr = true]
- **PII Tespiti:** Şifre, e-posta, telefon, adres, IP, cookie alanları PII olarak işaretlenir; maskeleme (logging'de) zorunlu.
- **Right to be Forgotten:** Kullanıcı silme talebi → 30 gün içinde tüm sistemlerden (DB, cache, backup) kişisel veri temizlenir; audit log'a kayıt yazılır.
- **Veri İhracatı:** Kullanıcı "verilerimi indir" talebi → JSON formatında tüm PII'ler tek dosyada sunulur.
- **Saklama Süresi:** Loglarda 90 gün, yedeklerde 1 yıl max; eskiyen veriler otomatik temizlenir.
- **Cookie/Tracking:** GDPR uyumlu consent banner (kabul/reddet eşit); analytics opt-in.

### [i18n_localization = true]
- **Dil Dosyaları:** `locales/<lang>/<namespace>.json` yapısı; ana dil (varsayılan: `en` veya `tr`) zorunlu.
- **Format:** Tarih/saat/para için `Intl.DateTimeFormat`, `Intl.NumberFormat`; hard-coded format YASAK.
- **RTL Desteği:** `dir="rtl"` (Arapça, İbranice); layout her iki yöne akmalı, ikonlar simetrik olmalı.
- **Pluralizasyon:** `Intl.PluralRules` ile doğru çoğul form seçimi (0, 1, 2, 5, 11 için farklı).
- **Fallback:** Eksik çeviri → ana dile düş; KULLANICIYA boş string gösterme.

### [accessibility_aa = true]
- **Kontrast:** Metin 4.5:1, büyük metin (18pt+) 3:1 minimum (WCAG AA).
- **Klavye Navigasyonu:** Tüm interaktif öğeler Tab ile gezilebilir; `focus-visible` halkası her zaman görünür.
- **Dokunma Hedefi:** Minimum 44x44 px (mobil), 32x32 px (desktop).
- **ARIA:** İkon-only buton ve form inputlarında `aria-label` zorunlu; landmark roller (`nav`, `main`, `aside`) açık.
- **Reduced Motion:** `prefers-reduced-motion: reduce` → transition süreleri 0, transform yok.
- **Otomatik Test:** axe-core veya Playwright `@axe-core/playwright` CI'da koşar; ihlalde build fail.

