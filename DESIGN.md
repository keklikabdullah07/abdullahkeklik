---
# DESIGN.md Frontmatter — Token Tanımları
# Aşağıdaki değerleri projenin gerçek kararlarıyla doldur.
# Markdown bölümlerde {tokens.path.to.value} referansı kullan.
# Hex sadece burada yazılır, başka yerde tekrar etmez.

name: "Abdullah Keklik"
version: "v4.0"
default_mode: "EXPERIENCE"
default_platform: "web"
build_path: "code"

# ─── RENK PALETİ (60-30-10) — SICAK MEZOPOTAMYA & KINALI KEKLİK PALETİ ──────
# Hakim (%60): Nahit Taşı & Keten (#F4EFE6)
# Yüzey & Tipografi (%30): Kumtaşı (#EAE1D2) & Kavrulmuş Espresso (#1C1613)
# Vurgu (%10): Kınalı Keklik Kınası (#C8532B) & Mezopotamya Kehribarı (#D88934)
colors:
  # Hakim (zemin)
  canvas: "#F4EFE6"            # Nahit Taşı & Keten Kemik zemin
  canvas_alt: "#181311"        # İsli Gece Toprağı (Grand Finale zemin)
  # Yüzey
  surface: "#EAE1D2"           # Sıcak Kumtaşı mat yüzey / kartlar
  surface_raised: "#F0E8DC"    # Hafif yükseltilmiş kart
  surface_sunken: "#DFD5C4"    # Gömülü alanlar
  # Vurgular
  primary: "#C8532B"           # Kınalı Keklik Kınası & Terracotta (Primary CTA)
  primary_hover: "#A94220"
  primary_active: "#8F3517"
  primary_on_dark: "#FAF6F0"
  amber: "#D88934"             # Mezopotamya Kehribarı (Rozet & Canlı Durum)
  # Sınır
  hairline: "rgba(200, 83, 43, 0.16)" # Pişmiş Toprak kılcal hat
  hairline_warm: "rgba(28, 22, 19, 0.08)" # Sıcak taş ayracı
  hairline_strong: "rgba(200, 83, 43, 0.5)" # Odak / aktif sınır
  # Metin
  ink: "#1C1613"               # Başlıklar & Dev İsim (Kavrulmuş Espresso)
  body: "#4A4038"              # Gövde metinleri (Keten Vizonu & Sıcak Kül)
  body_muted: "#85776B"        # İkincil metinler & Künye (Mineral Taşı)
  body_disabled: "#A3978B"     # Pasif metinler
  body_on_dark: "#FAF6F0"      # Koyu yüzeyde keten beyazı metin
  # Durum
  success: "#2E7D32"
  warning: "#D88934"
  danger: "#C8532B"
  info: "#4A7C9B"

# ─── TİPOGRAFİ ─────────────────────────────────────────────────
typography:
  display:
    family: "var(--font-display, Inter, sans-serif)"
    weights: [600, 700, 800]
    min_size: "2.25rem"
    max_size: "4rem"
    letter_spacing: "-0.02em"
  headline:
    family: "var(--font-display, Inter, sans-serif)"
    weights: [600, 700]
  title:
    family: "var(--font-display, Inter, sans-serif)"
    weights: [600]
  body:
    family: "var(--font-sans, Inter, sans-serif)"
    weights: [400, 600]
    size: "17"
    line_height: "1.65"
  caption:
    family: "var(--font-sans, Inter, sans-serif)"
    weights: [500]
    size: "13"
  mono:
    family: "var(--font-mono, JetBrains Mono, monospace)"
    weights: [400, 500]

# ─── KENARLIK & BOŞLUK ─────────────────────────────────────────
rounded:
  none: "0"
  xs: "4px"
  sm: "6px"
  md: "10px"
  lg: "16px"
  pill: "9999px"
  full: "9999px"

spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "80px"

# ─── GÖLGE ─────────────────────────────────────────────────────
shadow:
  none: "none"
  hairline: "0 0 0 1px rgba(255, 255, 255, 0.08)"
  panel: "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
  product: "0 20px 40px -15px rgba(0, 0, 0, 0.6)"
  button_press: "0 2px 0 0 rgba(4, 120, 87, 0.8)"

# ─── HAREKET ───────────────────────────────────────────────────
motion:
  duration_fast: "120ms"
  duration_base: "220ms"
  duration_slow: "450ms"
  easing_default: "cubic-bezier(0.16, 1, 0.3, 1)"
  easing_emphasis: "cubic-bezier(0.4, 0, 0.2, 1)"
  scale_press: "0.98"
  translate_press: "translateY(1px)"
  reduced_motion: "none"

# ─── YOĞUNLUK & HAREKET DİALLERİ ───────────────────────────────
dials:
  visual_density: 3
  motion_intensity: 7
  design_variance: 6
---

# 🎨 DESIGN.md — Proje Tasarım Anayasası (Şablon v3)

> **Bu dosya, proje kökünde yaşayan tasarım anayasasıdır.** Tüm UI/UX kararları burada yazılıdır. Burada yazılı olmayan karar, ajan tarafından üretilemez.
>
> **Köken:** `design2.md` v2 istişare raporu + impeccable v4.0 (4 mode, 59 detector rule) + taste-skill v2 (3 dial'den 2'si korundu) + awesome-design-md (84 marka örneğinden format ilhamı).
>
> **Kullanım:**
> 1. Yeni projede bu dosyayı kopyala → `DESIGN.md` olarak proje köküne koy.
> 2. YAML frontmatter'ı doldur (token'lar buraya).
> 3. Markdown bölümlerde `{tokens.path.to.value}` ile referans ver.
> 4. `AGENTS.md` içinde referans ver: "UI işleri için DESIGN.md okunur".

---

## 📌 0. Proje Kimliği

| Alan | Değer | Not |
|---|---|---|
| Proje adı | `{tokens.name}` | Kök dizin adıyla eşleşmeli |
| Versiyon | `{tokens.version}` | Şablon versiyonu, proje versiyonu değil |
| Varsayılan yüzey modu | `{tokens.default_mode}` | Proje genelinde yön |
| Varsayılan platform | `{tokens.default_platform}` | web / ios / android / adaptive |
| Build yolu | `{tokens.build_path}` | code (hızlı) veya comp (görsel comp önce) |

> **Mod-per-yüzey:** `default_mode` sadece varsayılandır. Her yüzey (landing, dashboard, docs, pricing) kendi modunu seçebilir. Aynı projede 2 farklı yüzey 2 farklı mode olabilir. Aşağıda § 1'de yüzey listesi tutulur.

---

## 🗂️ 1. Yüzey Listesi (mod-per-yüzey)

Her yüzey için ayrı mode, ayrı yoğunluk, ayrı davranış seçilir.

| Yüzey | URL/Rota | Mode | Platform | Yoğunluk | Hareket | Not |
|---|---|---|---|---|---|---|
| Örn: Landing | `/` | PERSUADE | web | 4 | 6 | Hero comp-first |
| Örn: Dashboard | `/app` | OPERATE | web | 7 | 3 | Tablo yoğun |
| Örn: Docs | `/docs` | READ | web | 3 | 2 | Uzun metin |
| (ekle) | | | | | | |

**Mod karar matrisi:**

| Yüzey tipi | Mod | Tipik yüzey | Tipik yoğunluk |
|---|---|---|---|
| Pazarlama, fiyatlandırma, kampanya | PERSUADE | Landing, kampanya sayfası | 3-5 |
| Uygulama arayüzü, panel, editör | OPERATE | Dashboard, admin, CRM | 6-8 |
| Dokümantasyon, blog, kılavuz, changelog | READ | Docs, blog, help | 2-4 |
| Portfolyo, vitrin, showcase | EXPERIENCE | Galeri, portfolyo | 1-3 |

> **Karar verme:** Ziyaretçi bu sayfada ne yapmak için geliyor? "Anlamak için" → READ, "Karar verip aksiyon almak için" → PERSUADE, "Görev tamamlamak için" → OPERATE, "Deneyimlemek için" → EXPERIENCE.
> 
> 🏆 **Awwwards & Hareket Standartları:** Eğer yüzey modu `EXPERIENCE` veya `PERSUADE` seçildiyse, doğrudan `docs/guides/04_Awwwards_Kreatif_Frontend_ve_Hareket_Mimarisi.md` rehberi açılır. Lenis momentum scroll, GSAP ScrollTrigger, SplitType kinetik tipografi, SVG noise katmanı, manyetik butonlar ve spotlight kartlar bu rehberdeki somut şablonlarla inşa edilir.

---

## 🎨 2. Token Paleti

Aşağıdaki tüm referanslar YAML frontmatter'dan gelir. Hex sadece orada yazılır, burada tekrar etmez.

### 2.1. Yüzey Token'ları

- **Zemin** (`{tokens.colors.canvas}`): Sayfa arka planı. Asla saf beyaz değil (keten/parchment tonu tercih edilir).
- **Yüzey** (`{tokens.colors.surface}`): Kart, panel. Zeminden ayrılmalı.
- **Yükseltilmiş** (`{tokens.colors.surface_raised}`): Modal, popover, dropdown.
- **Çökük** (`{tokens.colors.surface_sunken}`): Input, search bar, inset alan.

### 2.2. Vurgu Token'ları

- **Birincil** (`{tokens.colors.primary}`): Tek vurgu rengi. Tüm interaktif elemanlar bunu kullanır. İkinci vurgu YASAK (Apple disiplini).
- **Hover/Active** (`{tokens.colors.primary_hover}` / `{tokens.colors.primary_active}`): Aynı rengin 2 ton koyusu/açığı.
- **Koyu yüzey vurgusu** (`{tokens.colors.primary_on_dark}`): Koyu yüzeylerde kullanılır.

### 2.3. Tipografi Token'ları

Detaylar için → `Sifirdan_Kaliteli_Tasarim_Cikarma_Rehberi.md` § 5 ve `repos/awesome-design-md/design-md/apple/DESIGN.md` § Typography.

**Kurallar:**
- Display/Headline: `{tokens.typography.display.family}`, weight 600-800
- Body: `{tokens.typography.body.family}`, weight 400, size 16-17px (Apple tercihi 17)
- Caption: 12-14px, weight 500-600
- Ağırlık merdiveni: `300 → 400 → 600 → 700` (500 bilinçli olarak YOK, Apple kalıbı)
- Display boyutlarında `letter-spacing: -0.01em` (negatif tracking)

### 2.4. Kenarlık & Boşluk Token'ları

- **Radius:** `{tokens.rounded.none}` → `{tokens.rounded.pill}`. EXPERIENCE yüzeyler 0-2px, READ/PERSUADE 8-16px, OPERATE 4-8px.
- **Spacing scale:** `{tokens.spacing.xxs}` (4px) → `{tokens.spacing.section}` (80px+). 8'in katları tercih edilir.
- **Container padding:** `px-4 md:px-6 lg:px-8`
- **Section ritim:** `py-12 md:py-16 lg:py-24`

### 2.5. Gölge Token'ları

- **`{tokens.shadow.hairline}`:** 1px subtle, kart üzerinde.
- **`{tokens.shadow.panel}`:** Modal, popover için medium elevation.
- **`{tokens.shadow.product}`:** **Sadece ürün fotoğrafı için** (Apple disiplini). Kart/buton/metne gölge YASAK.
- **`{tokens.shadow.button_press}`:** 3D buton alt dudağı (`box-shadow: 0 3px 0 0 <koyu ton>`).

---

## ⚙️ 3. Yoğunluk & Hareket Dialleri

3 dial, her biri 1-10. Değerler `{tokens.dials.*}`.

### 3.1. VISUAL_DENSITY (bilgi yoğunluğu)

| Değer | Profil | Örnek |
|---|---|---|
| 1-3 | Sparse, editorial | Blog, landing, portfolyo |
| 4-6 | Dengeli | SaaS landing, dokümantasyon |
| 7-10 | Yoğun, data-dense | Dashboard, finansal terminal, ERP |

### 3.2. MOTION_INTENSITY (animasyon derinliği)

| Değer | Profil | Örnek |
|---|---|---|
| 1-2 | Statik | Dokümantasyon, finansal uygulama |
| 3-5 | Sade, hover/press | Çoğu SaaS |
| 6-8 | Mikro-etkileşimler | E-ticaret, portfolyo |
| 9-10 | Scroll-driven, parallax | Deneysel landing |

### 3.3. DESIGN_VARIANCE (asimetri düzeyi)

| Değer | Profil | Örnek |
|---|---|---|
| 1-3 | Merkezi, simetrik | Kurumsal, finans, dashboard |
| 4-6 | Hafif asimetri | Çoğu uygulama |
| 7-10 | Güçlü asimetri, deneysel | Portfolyo, kampanya, kreatif |

> **Karar:** taste-skill v1'in 3 dial'i korundu (v2'de dial kalktı, geri getirildi çünkü spesifikasyon için somut değerler gerekiyor). 3 dial birlikte: yüksek yoğunluk + düşük hareket = terminal/IDE hissi; düşük yoğunluk + yüksek hareket = vitrin/lüks hissi.

---

## 📱 4. Platform Kararı

`{tokens.default_platform}` proje genelinde varsayılan. Her yüzey ayrı platform taşıyabilir.

| Platform | Geçerli olduğu | Ek referans |
|---|---|---|
| **web** | Web sitesi, responsive web app | – |
| **ios** | Native iOS / iPadOS | Apple HIG distilled (impeccable `reference/ios.md`) |
| **android** | Native Android | Material Design 3 distilled (impeccable `reference/android.md`) |
| **adaptive** | Cross-platform (Flutter, RN, KMP) iOS+Android | Her iki platform kuralı birlikte |

> **Mobil notlar:**
> - Dokunsal buton: `active:translate-y` yerine `Animated.spring` ile `scale: 0.96`
> - Haptic feedback: `expo-haptics` veya native API ile `Light` impact
> - Touch target: minimum 44×44px (iOS), 48×48dp (Android)
> - Safe area: `pt-safe` veya `env(safe-area-inset-*)` zorunlu

> **Web-only notlar:**
> - Live mode, `impeccable detect`, design hook sadece web için
> - React Native projesi web kurallarıyla değil, kendi platform kurallarıyla yönetilir

---

## 🚫 5. Yasaklar ve Detector Rule'ları

Bu bölüm **boş bırakılamaz**. impeccable v4.0'ın 59 detector rule'undan 15 tanesi zorunlu seçildi; proje tipine göre yenileri eklenebilir.

### 5.1. AI Slop Yasakları (impeccable detector 1-15)

- [ ] **No mor-mavi gradient** (Instagram/AI jenerik kalıbı)
- [ ] **No safe-beyaz zemin** (`#FFFFFF` body için); asla saf siyah (`#000000` koyu mod)
- [ ] **No `font-thin`** veya varsayılan tarayıcı fontu (Arial/Times)
- [ ] **No border-radius > 16px** (EXPERIENCE yüzey hariç)
- [ ] **No çiğ mavi focus halosu** (`#3b82f6`); `{tokens.colors.primary}` kullanılır
- [ ] **No emoji başlık** (sadece inline veya hiç)
- [ ] **No çift interaktif hareket** (kart hover + içindeki buton hover)
- [ ] **No gray-on-color text** (gri metin renkli zemin üzerinde)
- [ ] **No bounce/elastic easing** (`cubic-bezier(0.68, -0.55, 0.27, 1.55)` vb.)
- [ ] **No card-nested-in-card** (kart içinde kart YASAK)
- [ ] **No decorative side-tab borders** (sol kenar dekoratif çizgi)
- [ ] **No purple-to-blue gradient** (jenerik SaaS AI kalıbı)
- [ ] **No dark glow** (koyu yüzeylerde parlama efekti)
- [ ] **No bounce on scroll** (scroll'da zıplama)
- [ ] **No horizontal-only nav** (yatay navigasyon + dikey scroll karışımı)

### 5.2. Erişilebilirlik (a11y) (impeccable audit rule)

- [ ] Min kontrast: metin 4.5:1, büyük metin 3:1 (WCAG AA)
- [ ] Min dokunma hedefi: 44×44px (iOS), 48×48dp (Android), 32×32px (desktop)
- [ ] Klavye navigasyonu: tüm interaktif öğeler Tab ile erişilebilir
- [ ] Focus-visible halkası her interaktif öğede var
- [ ] aria-label: ikon-only buton ve form alanlarında zorunlu
- [ ] `prefers-reduced-motion: reduce` → transition 0
- [ ] Alt text: tüm anlamlı görsellerde, dekoratif olanlarda `alt=""`
- [ ] Form hata mesajları: `aria-describedby` ile input'a bağlı
- [ ] Heading hierarchy: h1 → h2 → h3 sırası atlanmaz
- [ ] Skip link: uzun sayfalarda "Skip to content" linki

### 5.3. Dokunsal Kurallar (mevcut rehberden)

- [ ] **Tek Etkileşimli Varlık İlkesi:** içinde buton olan kart hover'da kalkmaz, sadece buton hareket eder
- [ ] 3D buton: `{tokens.shadow.button_press}` + `active:translate-y` (3px)
- [ ] Savunmacı UI: `truncate` metin taşması, `onError` görsel koruması
- [ ] Boş durum: her liste için `<EmptyState />` bileşeni
- [ ] Kırık görsel: avatar/logo yüklenemezse yedek göster
- [ ] Buton kapsayıcılarında `flex-wrap` + `py-1.5` (gölge clip önleme)

### 5.4. i18n & Çoklu Tema (projeye göre)

- [ ] RTL desteği: tüm layout `dir="rtl"` ile doğru akmalı
- [ ] Font fallback: Çince / Arapça / İbranice setleri tanımlı
- [ ] Dark mode: `prefers-color-scheme` veya manuel toggle
- [ ] White-label: birden fazla tema varsa `themes/<marka>.md` ayrı dosya
- [ ] Tarih/sayı/para: `Intl.NumberFormat`, `Intl.DateTimeFormat` kullanılır

### 5.5. Çıktı Ortamı (varsa)

- [ ] Print: `@media print` stilleri, siyah-beyaz uyumlu
- [ ] E-posta: inline CSS, tablo layout (Outlook uyumu)
- [ ] PDF: sayfa boyutu, kenar boşlukları, font embedding

---

## 💡 6. İlham Profilleri (5 marka)

Proje tipine göre bir ilham profili seç. Seçilen profilin DESIGN.md dosyasını `repos/awesome-design-md/design-md/<marka>/DESIGN.md` yolundan aç ve çalış.

| Profil | Marka | Proje tipi | Ne öğretir |
|---|---|---|---|
| **Minimal Editorial** | [Apple](repos/awesome-design-md/design-md/apple/DESIGN.md) | Pazarlama, vitrin, portfolyo | Tek vurgu, gölge sadece ürün fotoğrafında, 17px body, weight merdiveni 300/400/600/700 |
| **Data Dense** | (Binance/Coinbase/Kraken) | Fintech, dashboard, terminal | Yüksek bilgi yoğunluğu, monospace tablolar, durum renkleri sistematik |
| **Playful** | (Clay/Cal) | Tüketici uygulaması, eğitim, aile | Yumuşak radius, sıcak palet, mikro-etkileşimler |
| **Professional Trust** | (Stripe/Linear/Claude) | Ödeme, dev tool, dokümantasyon | Yüksek tipografi kalitesi, kod ağırlıklı, editorial |
| **Industrial** | (BMW/Bugatti/Ferrari) | Lüks, otomotiv, portfolyo | Keskin hatlar (0-2px), ağır tipografi, asimetri |

> **Kural:** İlham profili **başlangıç noktasıdır, kopyalanacak şablon değildir**. Proje ilerledikçe kendi kararlarınızı YAML frontmatter'a yazın.

---

## 🏗️ 7. Faz İzolasyonu ve Context Ekonomisi

- **`AGENTS.md` (ortak anayasa):** ANEW + Git + Anti-Sycophancy + Test kuralları. Her zaman yüklü.
- **`DESIGN.md` (tasarım anayasası):** Sadece UI iş yapılırken (`BUILD` fazı) ajanın context'ine yüklenir.
- **SPEC başında 2 satır stil notu zorunlu:**
  ```markdown
  UI: PERSUADE · VISUAL_DENSITY=4 · kehribar CTA · keten zemin
  ```
- **Akıllı Yükleme Matrisi (Kör İsraf Yok, Hedefli Güç Var):**
  - **OPERATE / READ Modu:** Ağır WebGL/Three.js kuralları bağlamı kirletmez. Temiz tipografi, 15 anti-slop kuralı, yüksek a11y ve hızlı mikro hover/state kuralları geçerlidir.
  - **EXPERIENCE / PERSUADE Modu:** Awwwards seviyesi motorlar (`Lenis`, `GSAP ScrollTrigger`, `SplitType`, `overdrive`, `delight`) devreye girer. Arayüzü sıradanlıktan koparıp ödüllü ligine çıkaracak yatırımdan asla kaçınılmaz.
- **Token Harcama Kriteri (ROI İlkesi):** Boş felsefe, tekrarlı boilerplateler ve her ara adımda körlemesine alınan dev screenshot yığınları yasaktır; kaliteyi doğrudan belirleyen fizik parametreleri, font eşleşmeleri ve mikro-etkileşim kodları tam bütçeyle kullanılır.

> **impeccable 24 Komutluk Tam Alet Çantası (İhtiyaç Anında Çağrılır):**
> - `.agents/skills/impeccable/reference/` altındaki 24 komutun tamamı (`craft`, `shape`, `init`, `document`, `extract`, `critique`, `audit`, `polish`, `bolder`, `quieter`, `distill`, `harden`, `onboard`, `animate`, `colorize`, `typeset`, `layout`, `delight`, `overdrive`, `clarify`, `adapt`, `optimize`, `live`, `generate`) eksiksiz aktiftir.
> - İhtiyaç duyulan komut tekil dosya olarak yüklenir (~1.5K token); böylece hem 24 süper gücün tamamı kullanılır hem de gereksiz bağlam şişkinliği oluşmaz.
> - Awwwards seviyesi için özellikle `/impeccable overdrive`, `/impeccable animate`, `/impeccable bolder` ve `/impeccable delight` kombinasyonu esastır.
> - Ayrıca doğrulama ve son cila için aşağıdaki 4 temel komut aktif kullanılır:
> - `impeccable audit <yüzey>` → teknik kalite (a11y, performance, responsive)
> - `impeccable harden <yüzey>` → error handling, i18n, edge cases
> - `impeccable polish <yüzey>` → son geçiş, design system alignment
> - `impeccable critique <yüzey>` → UX review

---

## 🧩 8. Bileşen Envanteri (Storybook Yansıması)

Storybook'taki (veya planlanan) tüm bileşenler burada listelenir. Yeni bileşen eklenince bu tablo güncellenir.

| Bileşen | Yol | Story durumu | Token referansı | Not |
|---|---|---|---|---|
| `<Button />` | `src/components/atoms/Button.tsx` | `[seç: Mevcut | Planlandı]` | `{tokens.colors.primary}`, `{tokens.shadow.button_press}` | Varyant: primary, secondary, ghost |
| `<Badge />` | `src/components/atoms/Badge.tsx` | `[seç]` | `{tokens.colors.success}` vb. | Varyant: success, warning, danger, info |
| `<EmptyState />` | `src/components/molecules/EmptyState.tsx` | `[seç]` | `{tokens.typography.display}` | Her liste için zorunlu |
| `<KPI />` | `src/components/molecules/KPI.tsx` | `[seç]` | `{tokens.dials.visual_density}` | Sadece OPERATE yüzey |

---

## 🧪 9. Doğrulama Checklist'i (gemiye çıkmadan önce)

- [ ] YAML frontmatter tüm token'larla dolduruldu (boş bırakılan yok)
- [ ] § 1'de yüzey listesi tamamlandı (her yüzey için mode + platform)
- [ ] § 5'teki 15+ yasak işaretlendi (hepsi ✅)
- [ ] § 6'dan 1 ilham profili seçildi ve not düşüldü
- [ ] § 8'de bileşen envanteri mevcut/planlı durumda
- [ ] AGENTS.md'de `DESIGN.md` referansı var
- [ ] `impeccable audit` (web için) çalıştırıldı, 0 primary finding
- [ ] Storybook'ta tüm bileşenler görünüyor
- [ ] Dark mode test edildi (varsa)
- [ ] Print/email çıktı test edildi (varsa)

---

## 📅 10. Karar Günlüğü

| Tarih | Karar | Neden | Referans |
|---|---|---|---|
| 2026-10-14 | Şablon v3'e yükseltildi | 4 design repo analizinden sonra; YAML + markdown 2 katman yapısı, mod-per-yüzey, 3 dial, impeccable detector rule'ları | `design2.md` + `repos/impeccable` + `repos/taste-skill` + `repos/awesome-design-md` |

---

## 📋 11. Sürüm ve Sorumluluk

- **Şablon sürümü:** `v3.0` (2026-10-14)
- **Köken:** v2 (`DESIGN.md` eski) + `design2.md` v2 istişare raporu + 4 design repo analizi
- **Bir sonraki review:** Yeni design repo eklendiğinde veya AI Slop yeni kalıp çıktığında
- **Sorumlu:** Proje sahibi (tasarım değişikliği → PR + bu dosyayı güncelle)

---

*Bu şablonu kopyala, doldur, AGENTS.md'ye referans ver. Token şişmesine izin verme, detector rule'larını atla.*
