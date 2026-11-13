import type { Project } from "@/types/project";

export const initialProjects: Project[] = [
  {
    id: "proj-1",
    title: "Chukar High-Speed Engine",
    slug: "chukar-engine",
    category: "individual",
    tagline: "Yüksek hızlı, bellek dostu kural ve veri işleme motoru",
    description:
      "TypeScript ve Rust FFI ile geliştirilmiş, GC baskısını sıfıra indiren ve 60 FPS garantili asenkron olay hattı sağlayan açık kaynak çekirdek mimari.",
    tags: ["Rust", "TypeScript", "WASM", "Zero-GC"],
    githubUrl: "https://github.com/abdullahkeklik/chukar-engine",
    demoUrl: "https://engine.abdullahkeklik.dev",
    featured: true,
    bentoSpan: "md:col-span-2",
    highlightMetric: "60 FPS · 0ms GC",
    year: "2026",
    client: "Open Source Lab",
    discipline: "Core Architecture",
    challenge:
      "Yoğun olay akışlarında (60+ FPS) tarayıcı JavaScript motorunun çöp toplayıcısı (Garbage Collector) bellek temizleme anlarında mikro takılmalara (frame-drop) yol açıyordu. Hedef, bellek tahsisini (allocation) sıfıra indiren bir veri işleme omurgası kurmaktı.",
    solution:
      "Tüm veri akışı Rust ile yazılıp WebAssembly (WASM) ikilisine derlendi. JavaScript tarafında önceden tahsis edilmiş çift arabellek (Object Pooling & Ring Buffer) kullanılarak çalışma anında sıfır nesne üretimi sağlandı ve 60 FPS kilitlendi.",
    impact: [
      "Çöp toplayıcı duraklama süresi (GC Pause Time) 0 ms'ye düşürüldü",
      "Saniyede 250.000 asenkron olay 2.4 ms gecikmeyle işlendi",
      "RAM tüketimi geleneksel çözümlere kıyasla %68 azaltıldı",
    ],
    deliverables: [
      "WASM Core Engine ikilisi ve npm paketi",
      "TypeScript tip güvenli kural tanımlayıcı (DSL)",
      "Canlı telemetri ve bellek profilleyici önizleme konsolu",
    ],
  },
  {
    id: "proj-2",
    title: "OmniLogistics Telemetry Hub",
    slug: "omnilogistics-hub",
    category: "corporate",
    tagline: "Global tedarik zinciri için dağıtık filo yönetim ve telemetri altyapısı",
    description:
      "Günde 10M+ telemetri paketini işleyen mikroservis mimarisi. Gerçek zamanlı filo takip, anomali tespiti ve yüksek erişilebilir kontrol merkezi.",
    tags: ["Go", "Kafka", "PostgreSQL", "Next.js"],
    gitlabUrl: "https://gitlab.com/enterprise/omnilogistics",
    demoUrl: "https://omnilogistics.demo.dev",
    featured: true,
    bentoSpan: "col-span-1",
    highlightMetric: "10M+ Olay/Gün",
    year: "2025",
    client: "Global Logistics AG",
    discipline: "Enterprise Systems",
    challenge:
      "Avrupa genelinde hareket halindeki 15.000+ tır ve konteynerden gelen kesintili GPS, soğuk zincir sıcaklık ve hız sensör verilerini kayıpsız toplamak ve ani rota sapmalarını 5 saniyenin altında operatör ekranına yansıtmak.",
    solution:
      "Go diliyle yazılmış yüksek verimli ingest servisleri ve Apache Kafka olay kuyruğu entegre edildi. Veri tabanında timescale/PostgreSQL kümesi üzerinden zaman serisi analitiği kuruldu; Next.js ve WebSocket ile canlı izleme arayüzü inşa edildi.",
    impact: [
      "Günde 10.000.000+ telemetri paketi %99.998 doğrulukla işlendi",
      "Kritik soğuk zincir bozulma uyarıları ortalama 1.8 saniyede bildirildi",
      "Lojistik yakıt ve rota verimliliğinde %14 doğrudan tasarruf sağlandı",
    ],
    deliverables: [
      "Dağıtık IoT veri alım (ingest) mikroservisleri",
      "Kafka tabanlı gerçek zamanlı anomali tespit motoru",
      "Operatör kontrol merkezi web paneli (Next.js)",
    ],
  },
  {
    id: "proj-3",
    title: "Kinesis Tactile Design System",
    slug: "kinesis-ui",
    category: "individual",
    tagline: "Erişilebilir, dokunsal mikro-etkileşimli headless tasarım sistemi",
    description:
      "WCAG 2.1 AA uyumlu, klavye dostu, Radix primitifleri ve Framer Motion tabanlı lüks tasarım token ve bileşen motoru.",
    tags: ["React 19", "Framer Motion", "Tailwind", "A11y"],
    githubUrl: "https://github.com/abdullahkeklik/kinesis-ui",
    demoUrl: "https://kinesis.abdullahkeklik.dev",
    featured: true,
    bentoSpan: "col-span-1",
    highlightMetric: "%100 WCAG AA",
    year: "2025",
    client: "Creative Studio",
    discipline: "Creative Interaction",
    challenge:
      "Modern webde popüler olan zengin animasyonlu arayüzlerin büyük bölümü klavye navigasyonunu ve ekran okuyucu kullanıcılarını tamamen dışlıyordu. Hedef; Awwwards ödülü kalitesinde taktil mikro-etkileşimleri tam erişilebilirlik (WCAG AA) ile birleştirmekti.",
    solution:
      "Tasarım token'ları (renk kontrastı 4.5:1, dokunsal yay fiziği, odak göstergeleri) Radix UI primitifleri üzerine inşa edildi. `prefers-reduced-motion` desteği tüm bileşenlerin çekirdeğine donanımsal olarak gömüldü.",
    impact: [
      "Axe-core ve Lighthouse Erişilebilirlik skoru %100 kusursuz onaylandı",
      "Tüm etkileşimler yalnızca Tab / Enter / Escape ile eksiksiz kontrol edilebilir kılındı",
      "6 farklı stüdyo projesinde tasarım tutarlılığı ve hız %300 arttı",
    ],
    deliverables: [
      "40+ erişilebilir dokunsal UI bileşeni (Storybook CDD)",
      "Otomatik WCAG AA renk kontrast ve odak halkası token motoru",
      "Framer Motion yay fiziği ön ayar kütüphanesi",
    ],
  },
  {
    id: "proj-4",
    title: "FinPulse Core Payment Gateway",
    slug: "finpulse-gateway",
    category: "corporate",
    tagline: "Yüksek güvenlikli açık bankacılık ve PSD2 uyumlu ödeme omurgası",
    description:
      "Bankacılık regülasyonlarına uygun, idempotency güvenceli ve çok katmanlı denetim izi (audit log) sunan finansal işlem omurgası.",
    tags: ["TypeScript", "Drizzle ORM", "Docker", "PCI-DSS"],
    gitlabUrl: "https://gitlab.com/enterprise/finpulse",
    featured: true,
    bentoSpan: "md:col-span-2",
    highlightMetric: "%99.999 SLA",
    year: "2024",
    client: "FinPulse Banking",
    discipline: "Fintech & Security",
    challenge:
      "Yüksek hacimli e-ticaret ödemelerinde ağ kopmaları veya çift çekim (double-spend) risklerini sıfıra indirmek ve PCI-DSS / KVKK regülasyonlarına tam uyumlu, geriye dönük değiştirilemez bir denetim izi (immutable audit trail) kurmak.",
    solution:
      "Her işleme benzersiz UUIDv7 damgası ve idempotency anahtarı atandı. Drizzle ORM ve PostgreSQL işlemleri (transactions) üzerinde katı hard-delete + JSON arşivleme mimarisi kuruldu; Pino ile korelasyon kimlikli yapılandırılmış loglama devreye alındı.",
    impact: [
      "5.000.000+ ödeme işleminde sıfır çift çekim (0 duplicate transactions)",
      "99.999% sistem çalışma süresi (SLA) ile finansal operasyon güvencesi",
      "Bağımsız SAST güvenlik denetiminden sıfır kritik bulgu ile tam not",
    ],
    deliverables: [
      "Idempotent ödeme orkestrasyon API çekirdeği",
      "PCI-DSS uyumlu PII maskeleme ve şifreleme katmanı",
      "Gerçek zamanlı bankacılık uzlaşma (reconciliation) raporlama motoru",
    ],
  },
];
