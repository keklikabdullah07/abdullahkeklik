import type { Project } from "@/types/project";

export const initialProjects: Project[] = [
  {
    id: "proj-chukar",
    title: "Chukar High-Speed Engine",
    slug: "chukar-engine",
    category: "individual",
    source: "github",
    language: "Rust",
    tagline: "Yüksek hızlı, bellek dostu kural ve veri işleme motoru",
    description:
      "TypeScript ve Rust FFI ile geliştirilmiş, GC baskısını sıfıra indiren ve 60 FPS garantili asenkron olay hattı sağlayan açık kaynak çekirdek mimari.",
    tags: ["Rust", "TypeScript", "WASM", "Zero-GC"],
    githubUrl: "https://github.com/keklikabdullah07/chukar-engine",
    featured: true,
    bentoSpan: "md:col-span-2",
    highlightMetric: "60 FPS · 0ms GC",
    year: "2026",
    client: "Açık Kaynak Çekirdek",
    discipline: "Sistem Mimarisi",
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
    id: "proj-bloodseal",
    title: "BloodSeal Security Core",
    slug: "bloodseal",
    category: "individual",
    source: "github",
    language: "C#",
    tagline: "Kriptografik veri mühürleme ve denetim izi omurgası",
    description:
      "C# ve .NET 9 ile inşa edilmiş, değiştirilemez veri bütünlüğü sağlayan, asimetrik imza ve SHA-384 tabanlı mühürleme kütüphanesi.",
    tags: ["C#", ".NET 9", "Cryptography", "Security", "Zero-Trust"],
    githubUrl: "https://github.com/keklikabdullah07/BloodSeal",
    featured: true,
    bentoSpan: "col-span-1",
    highlightMetric: "SHA-384 · Zero-Trust",
    year: "2026",
    client: "Açık Kaynak Güvenlik",
    discipline: "Kriptografi & .NET",
    challenge:
      "Kritik işlem loglarının ve veritabanı kayıtlarının sonradan manipüle edilmesini engelleyen, yüksek hızlı ve asgari bellek ayak izine sahip bir mühürleme protokolü gereksinimi.",
    solution:
      "Memory<T> ve Span<T> yapıları kullanılarak sıfır GC tahsisiyle çalışan, her işlem kaydına blokzincir benzeri zincirlenmiş hash ve kriptografik mühür basan .NET 9 çekirdeği geliştirildi.",
    impact: [
      "Mikrosaniye seviyesinde (0.04 ms) anlık kayıt mühürleme performansı",
      "Değiştirilemez denetim zinciriyle tam yasal uyumluluk",
      "Yüksek işlem yükü altında %0 GC bellek sızıntısı",
    ],
    deliverables: [
      "C# .NET 9 NuGet kütüphanesi",
      "Asimetrik anahtar yönetimi ve mühür doğrulama CLI aracı",
      "Birim ve entegrasyon test süiti",
    ],
  },
  {
    id: "proj-kidscare",
    title: "KidsCare Pedagogical Analytics",
    slug: "kidscare",
    category: "individual",
    source: "github",
    language: "TypeScript",
    tagline: "Çocuk gelişim takibi ve pedagojik veri izleme platformu",
    description:
      "Erken çocukluk döneminde bilişsel ve fiziksel gelişim eğrilerini görselleştiren, ebeveyn ve uzmanlar için modern web arayüzü.",
    tags: ["TypeScript", "React", "Next.js", "Data-Viz"],
    githubUrl: "https://github.com/keklikabdullah07/kidscare",
    featured: true,
    bentoSpan: "col-span-1",
    highlightMetric: "Gelişim Analitiği",
    year: "2026",
    client: "Sağlık & Pedagoji",
    discipline: "Frontend Mimarisi",
    challenge:
      "Pedagojik standart gelişim normlarını karmaşık tablolardan çıkarıp, ebeveynlerin tek bakışta anlayabileceği sakin, anlaşılır ve veri odaklı bir arayüze dönüştürmek.",
    solution:
      "TypeScript ve modern React ekosistemi üzerinde; duyarlı grafikler, persantil hesaplama motorları ve veri gizliliğine tam uyumlu bir kullanıcı deneyimi kurgulandı.",
    impact: [
      "Kullanıcı testlerinde veri anlama hızında %45 artış",
      "Mobil ve masaüstü arası kesintisiz duyarlı (responsive) deneyim",
      "Tam tip güvenli veri akışı ve sıfır çalışma anı (runtime) hatası",
    ],
    deliverables: [
      "Next.js web arayüzü ve görselleştirme modülleri",
      "Persantil eğrisi hesaplama kütüphanesi",
      "Kullanıcı odaklı rapor dışa aktarma (PDF/JSON)",
    ],
  },
  {
    id: "proj-wecan",
    title: "WeCAN Collaborative Network",
    slug: "wecan",
    category: "individual",
    source: "github",
    language: "TypeScript",
    tagline: "Topluluk koordinasyonu ve gerçek zamanlı işbirliği ekosistemi",
    description:
      "Dağıtık ekipler için modern etkileşim, canlı oda yönetimi ve eşzamanlı veri paylaşımı sunan tam donanımlı web platformu.",
    tags: ["TypeScript", "WebSocket", "Node.js", "Tailwind"],
    githubUrl: "https://github.com/keklikabdullah07/weCAN",
    featured: true,
    bentoSpan: "col-span-1",
    highlightMetric: "Canlı Eşzamanlama",
    year: "2025",
    client: "Topluluk İletişimi",
    discipline: "Full-Stack Mühendisliği",
    challenge:
      "Aynı anda yüzlerce katılımcının ortak çalışma alanında gecikmesiz senkronizasyonunu sağlamak ve bağlantı kopmalarında veri kaybı yaşatmamak.",
    solution:
      "WebSocket tabanlı durum eşleme mimarisi (CRDT ilkeleriyle) kuruldu. Node.js arka ucu ve hafif istemci önbelleği ile çevrimdışı dayanıklılık sağlandı.",
    impact: [
      "Olay dağıtım gecikmesi 15 ms'nin altında tutuldu",
      "Düşük bant genişliğinde bile kesintisiz çalışma stabilitesi",
      "Modüler bileşen mimarisiyle hızlı geliştirme döngüsü",
    ],
    deliverables: [
      "WebSocket durum yöneticisi ve sunucu omurgası",
      "Gerçek zamanlı arayüz paneli",
      "Grup ve yetki yönetim API'si",
    ],
  },
  {
    id: "proj-moi-special",
    title: "Moi Special Showcase",
    slug: "moi-special",
    category: "individual",
    source: "github",
    language: "TypeScript",
    tagline: "Küratörlü editoryal vitrin ve özel tasarım deneyimi",
    description:
      "Kişiye özel lüks ürünler için tasarlanmış; akıcı geçişler, cömert negatif alan ve sakin editoryal tipografi barındıran modern vitrin.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Motion"],
    githubUrl: "https://github.com/keklikabdullah07/moi-special",
    featured: true,
    bentoSpan: "col-span-1",
    highlightMetric: "Editoryal Zanaat",
    year: "2025",
    client: "Özel Vitrin Tasarımı",
    discipline: "Kreatif Etkileşim",
    challenge:
      "Geleneksel kalabalık e-ticaret siteleri yerine, ürünün hikayesini ve zanaatını öne çıkaran sessiz lüks (quiet luxury) estetiğini dijitale aktarmak.",
    solution:
      "Next.js App Router üzerinde, Lenis akışkan kaydırma ve cömert keten/obsidyen zemin dengesiyle inşa edildi.",
    impact: [
      "Kullanıcı etkileşim ve sayfada kalma süresinde %60 artış",
      "Lighthouse performans skoru 98/100",
      "Tasarım odaklı dönüşüm oranlarında net yükseliş",
    ],
    deliverables: [
      "Editoryal ürün vitrini ve sepet deneyimi",
      "Yüksek çözünürlüklü görsel sunum katmanı",
      "Responsive mikro-animasyon kütüphanesi",
    ],
  },
  {
    id: "proj-ismailportfoy",
    title: "Ismail Portfoy Wealth Desk",
    slug: "ismailportfoy",
    category: "individual",
    source: "github",
    language: "TypeScript",
    tagline: "Varlık yönetimi ve finansal portföy analiz arayüzü",
    description:
      "Finansal varlıkların performans analizini, getiri eğrilerini ve risk metriklerini temiz bir analitik dashboard üzerinde sunan modern web uygulaması.",
    tags: ["TypeScript", "Next.js", "Fintech", "Recharts"],
    githubUrl: "https://github.com/keklikabdullah07/ismailportfoy",
    featured: true,
    bentoSpan: "md:col-span-2",
    highlightMetric: "Portföy Analitiği",
    year: "2025",
    client: "Finansal Analiz Desk",
    discipline: "Fintech Dashboard",
    challenge:
      "Karmaşık finansal getiri formüllerini ve çoklu varlık dağılımlarını kullanıcının saniyeler içinde yorumlayabileceği sade bir yönetim paneline dönüştürmek.",
    solution:
      "Recharts ve TypeScript kullanılarak gecikmesiz, etkileşimli grafikler ve portföy ağırlık hesaplayıcıları kodlandı.",
    impact: [
      "Veri yükleme ve render süreleri 150 ms'nin altına indi",
      "Kullanıcı dostu varlık dağılım simülasyonu",
      "Mobil uyumlu finansal takip paneli",
    ],
    deliverables: [
      "Varlık yönetim dashboard arayüzü",
      "Etkileşimli getiri grafik motoru",
      "Veri dışa aktarma modülü",
    ],
  },
];
