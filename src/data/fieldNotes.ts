export interface FieldNote {
  id: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  tr: {
    title: string;
    excerpt: string;
    content: string[];
    takeaways: string[];
  };
  en: {
    title: string;
    excerpt: string;
    content: string[];
    takeaways: string[];
  };
  ku: {
    title: string;
    excerpt: string;
    content: string[];
    takeaways: string[];
  };
}

export const FIELD_NOTES_DATA: FieldNote[] = [
  {
    id: "dual-write-outbox",
    slug: "dual-write-outbox",
    date: "2026-02-14",
    readTime: "7 MIN READ",
    category: "DISTRIBUTED SYSTEMS & .NET",
    tr: {
      title: "Dağıtık Sistemlerde Çift Yazma (Dual-Write) Tuzağı ve Transactional Outbox Çözümü",
      excerpt:
        "Veritabanına kaydedip aynı anda Kafka veya RabbitMQ'ya mesaj fırlatmaya çalışmak neden veri tutarsızlığına yol açar? Transactional Outbox kalıbıyla mutlak tutarlılık garantisi.",
      content: [
        "Modern mikroservis ve dağıtık mimarilerde en sık rastlanan ölümcül hata 'Çift Yazma' (Dual-Write) illüzyonudur. Bir sipariş kaydedildiğinde geliştirici önce `await _db.SaveChangesAsync()` der, hemen ardından `await _bus.Publish(new OrderCreated())` çağrısı yapar.",
        "İlk bakışta masum görünen bu akışta, mesaj kuyruğu o milisaniyede çökerse veya ağ zaman aşımına uğrarsa veritabanında sipariş oluşmuş ama kuyruğa mesaj gitmemiştir. Ya da tam tersi: Mesaj kuyruğa gitmiş ancak veritabanı transaction'ı patlamıştır. Bu durum dağıtık sistemlerde 'Split-Brain' ve kurtarılamaz veri zehirlenmesi yaratır.",
        "Çözüm: Transactional Outbox Pattern. Mesajı harici kuyruğa doğrudan atmak yerine, sipariş verisiyle BİRLİKTE aynı ACID transaction içinde yerel bir `outbox_messages` tablosuna yazarız. Ya ikisi birden kaydedilir ya da ikisi birden geri alınır.",
        "Arka planda çalışan izole bir .NET 9 BackgroundService veya Debezium CDC dinleyicisi bu tabloyu okuyarak mesajları Kafka/RabbitMQ'ya 'At-Least-Once' garantisiyle iletir. Tüketici tarafında ise Idempotent Consumer kalıbı kurularak aynı mesaj iki kez gelse dahi sistemin kararlılığı korunur.",
      ],
      takeaways: [
        "Dağıtık transaction diye bir şey yoktur; 2PC pahalı ve kırılgandır.",
        "Tek bir veritabanı transaction'ı dışındaki her ağ çağrısı bağımsız bir arıza noktasıdır.",
        "Transactional Outbox, sıfır veri kaybı için endüstri standardı altın kuraldır.",
      ],
    },
    en: {
      title: "The Dual-Write Trap in Distributed Systems & The Transactional Outbox Remedy",
      excerpt:
        "Why persisting to a database while simultaneously publishing to Kafka causes catastrophic inconsistency. Achieving deterministic consistency via the Transactional Outbox pattern.",
      content: [
        "In modern distributed architectures, the most pervasive architectural anti-pattern is the Dual-Write fallacy. An engineer persists an entity via `_db.SaveChangesAsync()` and immediately invokes `_bus.Publish(new OrderCreated())`.",
        "If the network hiccups or the message broker drops connection at that exact millisecond, the database holds a record that downstream consumers will never hear about. Alternatively, if the broker accepts the message but the DB transaction rolls back, downstream systems process phantom data.",
        "The remedy: The Transactional Outbox Pattern. Instead of publishing directly across the network boundary, the event payload is inserted into a local `outbox_messages` table WITHIN the exact same ACID database transaction.",
        "A decoupled .NET 9 BackgroundService or CDC pipeline reliably tails this table and dispatches messages to the broker with At-Least-Once semantics, while consumers enforce strict idempotency.",
      ],
      takeaways: [
        "Two-phase commit across distributed boundaries is fragile and slow.",
        "Network calls after database commits will inevitably fail under load.",
        "Transactional Outbox is the battle-tested gold standard for zero-loss messaging.",
      ],
    },
    ku: {
      title: "Di Sîstemên Belavkirî de Xefika Nivîsandina Dure û Çareseriya Transactional Outbox",
      excerpt:
        "Çima tomarkirina li bazayê û şandina hevdem ji bo Kafka re dibe sedema windabûna daneyan? Çareseriya mîmarî ya Transactional Outbox.",
      content: [
        "Di mîmariyên belavkirî de yek ji mezintirîn xeletiyan ew e ku mirov di heman demê de hem li bazayê binivîse hem jî ji bo kûyê peyam bişîne.",
        "Heke di wê kêliyê de tor qut bibe, dane li bazayê dimîne lê peyam naçe. Ev yek dibe sedema têkçûna hevsengiya pergalê.",
        "Çareserî: Şêwaza Transactional Outbox. Li şûna şandina rasterast a peyamê, em peyamê di heman transaction a ACID de di tabloya `outbox_messages` de tomar dikin.",
        "Xebatkarekî paşîn a .NET 9 van peyaman dixwîne û bi ewlehî dişîne.",
      ],
      takeaways: [
        "Nivîsandina dualî di şebekeyan de xetereyek mezin e.",
        "Transactional Outbox garantiya sifir windabûna daneyan dide.",
        "Pêdivî bi qebûlkirina peyamên dubare (Idempotency) heye.",
      ],
    },
  },
  {
    id: "tactile-frame-budget",
    slug: "tactile-frame-budget",
    date: "2026-01-28",
    readTime: "6 MIN READ",
    category: "INTERFACE CRAFT & 60 FPS",
    tr: {
      title: "Taktil Web Arayüzlerinde 16.6ms Kare Bütçesi ve Yay Fiziği Matematiği",
      excerpt:
        "Neden standart CSS bezier eğrileri mekanik hissettirir? Hooke Yasası, sönümlü osilatör diferansiyel denklemleri ve tarayıcıda 60 FPS kilitli etkileşim ergonomisi.",
      content: [
        "Geleneksel web animasyonları `transition: all 0.3s ease-in-out` gibi zaman temelli bezier eğrilerine mahkumdur. Ancak gerçek dünyada hiçbir nesne belirli bir süreye göre hareket etmez; kütleye, uygulanan kuvvete ve yüzey sürtünmesine göre hareket eder.",
        "Hooke Yasası (`F = -kx`) ve sönümlü harmonik osilatör diferansiyel denklemi (`F = -kx - cv`) temel alındığında arayüz yapaylıktan kurtulur. Kullanıcı bir kartı hızlı fırlatırsa momentum kazanır; yavaş bırakırsa yumuşakça yuvasına oturur.",
        "Ancak yay fiziğini tarayıcıda çalıştırmanın katı bir bedeli vardır: 16.6 milisaniyelik kare bütçesi (Frame Budget). `requestAnimationFrame` döngüsü içinde yeni nesne üretmek (allocation) JavaScript çöp toplayıcısını (Garbage Collector) tetikler ve mikro takılmalara (jank) yol açar.",
        "Awwwards kalitesinde taktil bir arayüz için: 1) Transform ve opacity dışındaki CSS özelliklerine asla animasyon verilmez, 2) Fizik hesaplamalarında nesne havuzu (Object Pooling) kullanılır, 3) Koordinat alanı CSS piksel uzayıyla birebir senkronize tutulur.",
      ],
      takeaways: [
        "Süreye bağlı bezier eğrileri mekaniktir; yay fiziği ise insanidir.",
        "Kare bütçesi 16.6ms'dir; render döngüsünde bellek tahsisi yasaktır.",
        "Yalnızca GPU hızlandırmalı compositor katmanları (transform, opacity) hareket ettirilir.",
      ],
    },
    en: {
      title: "The 16.6ms Frame Budget & The Physics of Tactile Web Interfaces",
      excerpt:
        "Why arbitrary CSS bezier curves feel lifeless. Hooke's Law, damped harmonic oscillators, and locking 60 FPS under rigorous browser budgets.",
      content: [
        "Traditional UI motion relies on arbitrary time curves like `transition: all 0.3s ease-in-out`. In the physical universe, objects do not move based on pre-calculated durations; they react to mass, spring stiffness, and friction.",
        "By grounding animations in Hooke's law (`F = -kx`) and damped harmonic oscillator differential equations, interfaces feel weighted, tactile, and responsive to user momentum.",
        "Executing physical simulations in web runtimes demands discipline: the non-negotiable 16.6ms frame budget. Allocating memory inside animation ticks triggers garbage collection pauses, breaking 60 FPS fidelity.",
        "To achieve archival tactile fluidity: animate strictly compositor-only properties (transform, opacity), eliminate garbage collection allocations in simulation loops, and prevent coordinate-space drift.",
      ],
      takeaways: [
        "Time-based easing curves are synthetic; spring physics are biological.",
        "GC allocations inside requestAnimationFrame destroy frame rates.",
        "Compositor-only layer promotions guarantee locked 60 FPS execution.",
      ],
    },
    ku: {
      title: "Bûdçeya 16.6ms û Matematîka Fîzîka Kaniyê di Arayüzên Webê de",
      excerpt:
        "Çima anîmasyonên kevn ên CSS mekanîk xuya dikin? Zagonên Hooke û lîstina bi 60 FPS bê rawestan.",
      content: [
        "Di cîhana rasteqîn de ti tişt li gorî demê naçe; li gorî kîlo û fîzîkê dimeşe.",
        "Gava ku em fîzîka kaniyê bikar tînin, rûpel zindîtir dibe û çêtir bersiv dide bikarhêner.",
        "Ji bo parastina 60 FPS, pêwîst e ku bîra JavaScript neyê dagirtin û CPU neyê westandin.",
      ],
      takeaways: [
        "Fîzîka kaniyê siruştî ye û hesta zindîbûnê dide.",
        "Bûdçeya her kareyekî 16.6 milisanî ye.",
        "Tenê transform û opacity ji bo xebata bilez li ser GPU tên lîstin.",
      ],
    },
  },
  {
    id: "zero-runtime-exceptions",
    slug: "zero-runtime-exceptions",
    date: "2025-12-19",
    readTime: "8 MIN READ",
    category: "TYPE SAFETY & RELIABILITY",
    tr: {
      title: "Sıfır Çalışma Anı Hatası: C# ve TypeScript'te Katı Tip Güvenliği Mimarisi",
      excerpt:
        "'Undefined is not a function' ve NullReferenceException çağını kapatmak. Parse Don't Validate ilkesi, Result Pattern ve derleme anı ispatları.",
      content: [
        "Yazılım mühendisliğinde çalışma anında patlayan bir istisna (Runtime Exception) bir kaza değil, tip sisteminin zayıf kurulduğunun açık bir itirafıdır. Milyonlarca dolarlık kayıplara yol açan hataların %70'i basit null referansları veya eksik veri tiplerinden doğar.",
        "C# 12/13 ve TypeScript'in modern yetenekleriyle sıfır runtime hatası artık bir hayal değildir. İlk kural: 'Parse, Don't Validate' (Doğrulama, Ayrıştır). Ham veriyi sisteme girdikten sonra doğrulamak yerine, veriyi doğrulanmış yeni bir tipe dönüştürerek içeri alırız.",
        "İkinci kural: İstisnaları (Exceptions) kontrol akışı için kullanmamak. Veritabanından kayıt bulunamadığında veya doğrulama patladığında `throw new Exception()` demek maliyetli bir anti-patterndir. Bunun yerine fonksiyonel `Result<T, TError>` tipi kullanılarak hata olasılığı derleme anında zorunlu hale getirilir.",
        "Ön yüzde Zod şemaları, arka yüzde katı C# Record ve Nullable Reference Types disiplini uygulandığında; tip uyuşmazlığı olan hiçbir kod derlenemez. Canlıya giden kod matematiksel olarak deterministiktir.",
      ],
      takeaways: [
        "Hata fırlatmak (throw) istisna durumlar içindir; iş mantığı kontrol akışı için Result Pattern esastır.",
        "Parse, Don't Validate ilkesi: Geçersiz durumların tip seviyesinde temsil edilmesini imkansız kıl.",
        "Frontend ve backend arasındaki tek doğru sözleşme derleme anında paylaşılan katı şemalardır.",
      ],
    },
    en: {
      title: "Zero-Runtime Exceptions: Strict Type Architecture in C# and TypeScript",
      excerpt:
        "Banning 'undefined is not a function' and NullReferenceException. The Parse-Don't-Validate ethos, the Result pattern, and compile-time proofs.",
      content: [
        "A runtime exception in production is not an unfortunate accident; it is an admission that the type system was breached. Over 70% of high-severity software failures stem from null dereferencing or unvetted primitive payloads.",
        "Modern C# and TypeScript allow us to eradicate runtime surprises entirely. Principle one: 'Parse, Don't Validate'. Do not check primitives repeatedly; parse incoming raw data into strongly typed domain representations at system boundaries.",
        "Principle two: Eradicate exceptions for predictable control flow. `throw new Exception()` is expensive and bypasses the type checker. Instead, return functional `Result<T, TError>` structures, forcing callers to handle failure paths at compile time.",
        "Coupling frontend Zod contracts with backend Nullable Reference Types guarantees that type mismatches fail the compiler, never the production user.",
      ],
      takeaways: [
        "Exceptions are for catastrophic invariants; predictable domain branching uses Result<T>.",
        "Make illegal system states unrepresentable at the type system layer.",
        "End-to-end typed contracts eliminate runtime boundary ambiguity.",
      ],
    },
    ku: {
      title: "Sifir Xeletiya Xebitandinê: Ewlehiya Cureyê di C# û TypeScript de",
      excerpt:
        "Bidawîkirina serdema NullReferenceException. Şêwaza Parse-Don't-Validate û parastina sîstemê di dema berhevkirinê de.",
      content: [
        "Xeletiyên di dema xebitandinê de nîşan didin ku pergala tîpan qels hatiye danîn.",
        "Bi C# û TypeScript re mimkun e ku em beriya xebitandinê hemû xeletiyan bibînin.",
        "Li şûna firotina xeletiyan (throw), bikaranîna Result Pattern sîstemê pir bihêztir dike.",
      ],
      takeaways: [
        "Pêşîgirtina li xeletiyan di dema kodnivîsandinê de esas e.",
        "Ewlehiya tîpan kalîteya nermalavê garantî dike.",
        "Bikaranîna Result Pattern rê li ber hilweşîna serlêdanê digire.",
      ],
    },
  },
];
