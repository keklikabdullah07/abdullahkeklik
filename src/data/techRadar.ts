export type RadarTier = "adopt" | "trial" | "avoid";

export interface TechRadarItem {
  id: string;
  name: string;
  tier: RadarTier;
  badge: string;
  focus: string;
  tr: {
    description: string;
    rationale: string;
  };
  en: {
    description: string;
    rationale: string;
  };
  ku: {
    description: string;
    rationale: string;
  };
}

export const TECH_RADAR_DATA: TechRadarItem[] = [
  // 1. ADOPT (Üretim Omurgası)
  {
    id: "dotnet-csharp",
    name: ".NET 9 & C#",
    tier: "adopt",
    badge: "CORE BACKEND",
    focus: "SYSTEMS & BACKEND",
    tr: {
      description: "Dağıtık sistemler, yüksek eşzamanlılık ve kaya gibi sağlam arka uç omurgası.",
      rationale:
        "Kayıpsız bellek yönetimi, sıfır çalışma anı hatası ve kurumsal dayanıklılık için birincil tercih.",
    },
    en: {
      description: "Distributed systems, high concurrency, and a rock-solid backend spine.",
      rationale:
        "Primary choice for deterministic memory management, zero runtime exceptions, and enterprise resilience.",
    },
    ku: {
      description: "Sîstemên belavkirî, hevgirêdana bilind û stûna pişta paşîn a bihêz.",
      rationale: "Ji bo birêvebirina bîrê ya bê ziyan û îstîkrara pergalê hilbijartina sereke.",
    },
  },
  {
    id: "typescript-nextjs",
    name: "TypeScript & Next.js",
    tier: "adopt",
    badge: "MODERN WEB",
    focus: "FULL-STACK & UI",
    tr: {
      description: "Uçtan uca tip güvenliği, katı API sözleşmeleri ve akıcı SSR/SSG mimarisi.",
      rationale:
        "Geliştirici ergonomisi ile üretim performansını mükemmel dengeler; çalışma anında sürprize yer bırakmaz.",
    },
    en: {
      description: "End-to-end type safety, strict API contracts, and fluid SSR/SSG architecture.",
      rationale:
        "Perfect balance of developer ergonomics and production performance; leaves no room for runtime surprises.",
    },
    ku: {
      description:
        "Ewlehiya cureyê ji serî heta binî, peymanên hişk ên API û mîmariya SSR/SSG ya herikbar.",
      rationale:
        "Hevsengiya di navbera performansa hilberînê û rehetiya pêşvebirinê de bi awayekî bêkêmasî ava dike.",
    },
  },
  {
    id: "postgres-linux",
    name: "PostgreSQL & Linux",
    tier: "adopt",
    badge: "INFRASTRUCTURE",
    focus: "DATA & OS",
    tr: {
      description: "ACID uyumlu ilişkisel veri tabanı ve deterministik sunucu ortamı.",
      rationale:
        "On yıllardır rüştünü ispatlamış, modası geçmeyen ve veriyi asla riske atmayan temel altyapı.",
    },
    en: {
      description: "ACID-compliant relational database and deterministic server runtime.",
      rationale:
        "Battle-tested for decades, timeless infrastructure that never compromises data integrity.",
    },
    ku: {
      description: "Bingeha daneyan a pêwendîdar a ACID û hawîrdora serverê ya diyarkirî.",
      rationale:
        "Binesaziya bingehîn a ku bi dehsalan e ceribandî ye û qet yekparebûna daneyan naxe xetereyê.",
    },
  },
  {
    id: "tailwind-design-system",
    name: "Tailwind CSS & Token System",
    tier: "adopt",
    badge: "DESIGN CRAFT",
    focus: "STYLING & DESIGN",
    tr: {
      description: "Sıfır çalışma anı CSS yükü, mimari tasarım token'ları ve katı editoryal uyum.",
      rationale:
        "CSS dosyalarının şişmesini önler; tüm tasarımı merkezi DESIGN.md felsefesine kilitler.",
    },
    en: {
      description:
        "Zero runtime CSS overhead, architectural design tokens, and strict editorial compliance.",
      rationale:
        "Prevents stylesheet bloat; locks the entire aesthetic to the centralized DESIGN.md ethos.",
    },
    ku: {
      description: "Bê bargiraniya CSS di dema xebitandinê de, nîşanên mîmariya sêwiranê.",
      rationale:
        "Pêşî li mezinbûna pelên CSS digire û hemû sêwiranê bi felsefeya DESIGN.md ve girêdide.",
    },
  },

  // 2. TRIAL / ASSESS (Radardaki Güçler & Keşif)
  {
    id: "rust-wasm",
    name: "Rust & WebAssembly",
    tier: "trial",
    badge: "PERFORMANCE",
    focus: "LOW-LEVEL & BROWSER",
    tr: {
      description: "Mikroişlemci seviyesinde bellek güvenliği ve tarayıcıda yerel C-hızı.",
      rationale:
        "Kriptografik algoritmalar ve yoğun hesaplama gerektiren grafik motorlarında standartları yeniden tanımlıyor.",
    },
    en: {
      description: "Micro-level memory safety and native C-speed execution inside the browser.",
      rationale:
        "Redefining standards in cryptographic primitives and compute-heavy graphics engines.",
    },
    ku: {
      description: "Ewlehiya bîrê ya asta kêm û leza C di gerokê de.",
      rationale: "Di algorîtmayên krîptografîk û motorên grafîkê de pîvanan ji nû ve diyar dike.",
    },
  },
  {
    id: "webgpu-canvas",
    name: "WebGPU & Fluid Shaders",
    tier: "trial",
    badge: "GRAPHICS",
    focus: "TACTILE EXPERIENCES",
    tr: {
      description: "Donanım hızlandırmalı 60 FPS grafikler ve akışkan fizik etkileşimleri.",
      rationale:
        "WebGL'in ötesinde, modern grafik çiplerinin saf hesaplama gücünü web yüzeyine taşıma araştırması.",
    },
    en: {
      description: "Hardware-accelerated 60 FPS graphics and fluid physics interactions.",
      rationale:
        "Exploring the raw compute power of modern GPUs on web surfaces beyond legacy WebGL.",
    },
    ku: {
      description: "Grafîkên 60 FPS yên bi hêza reqalavê û têkiliyên fîzîkî yên herikbar.",
      rationale: "Lêkolîna veguhestina hêza çîpên grafîkî yên nûjen ber bi rûyê webê ve.",
    },
  },
  {
    id: "biome-toolchain",
    name: "Biome Toolchain",
    tier: "trial",
    badge: "TOOLING",
    focus: "DEVELOPER TOOLING",
    tr: {
      description: "Ultra hızlı Rust tabanlı kod formatlayıcı, linter ve statik analizci.",
      rationale:
        "Karmaşık ESLint/Prettier konfigürasyon çöpünü tek bir deterministik ikili dosyayla sıfırlama kararı.",
    },
    en: {
      description: "Ultra-fast Rust-based formatter, linter, and static analysis toolchain.",
      rationale:
        "Replaces fragmented ESLint/Prettier configuration bloat with a single deterministic binary.",
    },
    ku: {
      description: "Amûra formata kodê û kontrolê ya pir bilez a li ser bingeha Rust.",
      rationale:
        "Doh û şêwaza kevn a ESLint/Prettier bi yek amûrekî lezgîn û diyarkirî diguherîne.",
    },
  },

  // 3. HOLD / AVOID (Bilinçli Olarak Elediğimiz Yaklaşımlar)
  {
    id: "bloated-heavy-orms",
    name: "Heavy Bloated ORMs",
    tier: "avoid",
    badge: "ANTI-PATTERN",
    focus: "DATA ACCESS",
    tr: {
      description:
        "Aşırı soyutlanmış, arkada kontrolsüz ve yavaş SQL üreten hantal ORM katmanları.",
      rationale:
        "N+1 sorgu körlüğü ve bellek sızıntılarına yol açar. Saf, tip güvenli ve transparan SQL/Drizzle tercih edilir.",
    },
    en: {
      description: "Over-abstracted ORM layers generating uncontrolled and sluggish SQL queries.",
      rationale:
        "Leads to N+1 query blindspots and memory bloat. Pure, typed, transparent SQL/Drizzle is preferred.",
    },
    ku: {
      description: "Qatên ORM ên giran ku pirsên SQL ên hêdî û bê kontrol hilberînin.",
      rationale:
        "Rê li ber hêdîbûn û pirsgirêkên bîrê vedike; em SQL a rasterast û şefaf tercîh dikin.",
    },
  },
  {
    id: "micro-frontend-chaos",
    name: "Micro-Frontend Sprawl",
    tier: "avoid",
    badge: "ANTI-PATTERN",
    focus: "ARCHITECTURE",
    tr: {
      description: "Küçük ve orta ölçekli projelerde gereksiz yere kurulan mikro-ön yüz labirenti.",
      rationale:
        "Ağ gecikmesini artırır, paylaşılan bağımlılık krizlerine yol açar. Modüler monolit çok daha üstündür.",
    },
    en: {
      description: "Premature micro-frontend labyrinths forced onto small-to-mid scale systems.",
      rationale:
        "Increases network overhead and causes dependency hell. A disciplined modular monolith is vastly superior.",
    },
    ku: {
      description: "Mîmarîyên bêwate yên mîkro-frontend di sîstemên navîn de.",
      rationale: "Leza torê kêm dike û tevliheviyê çêdike; monîlîta modular pir çêtir e.",
    },
  },
  {
    id: "reckless-npm-dependency",
    name: "Reckless Package Sprawl",
    tier: "avoid",
    badge: "ANTI-PATTERN",
    focus: "SECURITY & SUPPLY CHAIN",
    tr: {
      description: "Her 3 satırlık fonksiyon için denetimsiz üçüncü parti npm paketleri yüklemek.",
      rationale:
        "Tedarik zinciri saldırılarına ve gereksiz bundle şişkinliğine davetiye çıkarır. Mülkiyet kendi kodumuzdadır.",
    },
    en: {
      description: "Installing unvetted third-party npm libraries for trivial three-line tasks.",
      rationale:
        "Invites supply-chain vulnerabilities and unmaintainable bundle bloat. We own our code.",
    },
    ku: {
      description: "Ji bo karên piçûk barkirina pakêtên neceribandî yên npm.",
      rationale: "Rê li ber kêmasiyên ewlehiyê vedike. Em kodê xwe bixwe dinivîsin.",
    },
  },
  {
    id: "superficial-ai-slop",
    name: "Superficial AI Slop",
    tier: "avoid",
    badge: "ANTI-PATTERN",
    focus: "DESIGN & ETHOS",
    tr: {
      description:
        "Mor-mavi jenerik gradyanlar, anlamsız yüzde barları ve kalitesiz hazır şablonlar.",
      rationale:
        "Ruhsuz ve yapay görüntüler zanaatı öldürür. Nahit taşı, sıcak keten ve editoryal disiplin esastır.",
    },
    en: {
      description:
        "Generic purple-blue gradients, arbitrary skill percentage bars, and lifeless templates.",
      rationale:
        "Shallow aesthetics ruin authentic craft. Nahit stone, warm linen, and editorial discipline prevail.",
    },
    ku: {
      description: "Rengên binefşî-şîn ên ji rêzê, rêjeyên bê wate û şablonên bê ruh.",
      rationale:
        "Dîtbariya qels zanaatê dikuje; estetîka kevirê Nahit û aramiya Mezopotamyayê esas e.",
    },
  },
];
