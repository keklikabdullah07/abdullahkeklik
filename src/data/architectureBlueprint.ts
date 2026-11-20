export interface ArchitectureNode {
  id: string;
  stepNumber: string;
  name: string;
  category: string;
  latency: string;
  throughput: string;
  pattern: string;
  tr: {
    role: string;
    description: string;
    rationale: string;
  };
  en: {
    role: string;
    description: string;
    rationale: string;
  };
  ku: {
    role: string;
    description: string;
    rationale: string;
  };
}

export const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: "edge-gateway",
    stepNumber: "01",
    name: "Edge Gateway & Rate Limiter",
    category: "INGRESS & NETWORKING",
    latency: "< 2.1 ms",
    throughput: "120,000 req/s",
    pattern: "Token Bucket & TLS 1.3 Termination",
    tr: {
      role: "Sınır Güvenliği ve Trafik Şekillendirme",
      description:
        "Anycast ağı üzerinden gelen istekleri karşılayan, DDoS saldırılarını filtreleyen ve Token Bucket algoritmasıyla aşırı yükü süzen ilk hat.",
      rationale:
        "Tüm zararlı veya kontrolsüz yük iç servislere ulaşmadan sınırda karşılanır; arka uç kaynakları asla boşa tüketilmez.",
    },
    en: {
      role: "Perimeter Security & Traffic Shaping",
      description:
        "First line of defense handling anycast routing, mitigating DDoS vectors, and enforcing strict Token Bucket rate limits.",
      rationale:
        "Absorbs malicious and burst traffic at the perimeter before it touches internal services, protecting core compute budgets.",
    },
    ku: {
      role: "Ewlehiya Sînor & Rêkxistina Trafîkê",
      description:
        "Xeta yekem a ku daxwazan pêşwazî dike, êrîşan asteng dike û bi algorîtmaya Token Bucket barkirinê saz dike.",
      rationale:
        "Beriya ku daxwazên nehewce derbasî sîstemên navxweyî bibin li ser sînor tên rawestandin.",
    },
  },
  {
    id: "auth-tenant-guard",
    stepNumber: "02",
    name: "Auth & Tenant Guard",
    category: "IDENTITY & ISOLATION",
    latency: "< 0.4 ms",
    throughput: "95,000 req/s",
    pattern: "Stateless EdDSA Claims & AsyncLocal Scope",
    tr: {
      role: "Kimlik Doğrulama ve Kiracı Ayrıştırması",
      description:
        "Veritabanına gitmeden, kriptografik imzalı JWT ile istek bağlamını çözen ve TenantId izolasyonunu garantileyen güvenlik kapısı.",
      rationale:
        "Kiracı A kullanıcısının Kiracı B verisine erişmesi mimari olarak imkansız kılınır; her log correlationId damgasını burada alır.",
    },
    en: {
      role: "Authentication & Multi-Tenant Isolation",
      description:
        "Verifies cryptographically signed JWT tokens without database roundtrips, anchoring immutable TenantId scope in AsyncLocalStorage.",
      rationale:
        "Guarantees zero tenant cross-contamination by design; stamps every downstream request with a persistent correlationId.",
    },
    ku: {
      role: "Nasname & Veqetandina Kirêdaran",
      description:
        "Bêyî çûna ser bazayê, bi şîfrekirina JWT ewlehiya nasnameyê piştrast dike û her kirêdarekî ji yên din vediqetîne.",
      rationale:
        "Bikaranîna agahiyên hevpar ji holê radike û piştrast dike ku her kirêdar tenê daneyên xwe dibîne.",
    },
  },
  {
    id: "l1-l2-cache",
    stepNumber: "03",
    name: "L1/L2 High-Speed Cache Ring",
    category: "STATE & MEMORY",
    latency: "< 0.8 ms",
    throughput: "85,000 req/s",
    pattern: "Single-Flight Mutex & Redis Fallback",
    tr: {
      role: "Alt-Milisaniye Veri Erişim Katmanı",
      description:
        "İşlemciye yakın bellek içi (In-Memory L1) ve dağıtık Redis L2 halkası. Cache stampede problemine karşı Single-Flight korumalı.",
      rationale:
        "Sık okunan veriler mikrosaniyeler içinde döndürülür; veritabanı sorgu trafiği %80 oranında sönümlenir.",
    },
    en: {
      role: "Sub-Millisecond Data Retrieval",
      description:
        "In-memory L1 cache paired with distributed Redis L2. Protected by Single-Flight mutex against cache stampede stampedes.",
      rationale:
        "Serves hot reads in microseconds, shielding primary database clusters from up to 80% of repetitive query traffic.",
    },
    ku: {
      role: "Gihîştina Daneyan a Bê Hêdîbûn",
      description:
        "Bîra L1 a navxweyî û zengila Redis L2 a belavkirî. Li dijî şewitandina bîrê bi Single-Flight parastî ye.",
      rationale:
        "Daneyên ku pir tên pirsîn di mikrosaniyeyan de vedigerîne û barê ser bingeha daneyan kêm dike.",
    },
  },
  {
    id: "core-engine",
    stepNumber: "04",
    name: ".NET 9 Core Engine & CQRS",
    category: "COMPUTE & DOMAIN LOGIC",
    latency: "< 1.2 ms",
    throughput: "62,000 req/s",
    pattern: "Zero-Allocation Channels & Mediator Pattern",
    tr: {
      role: "Deterministik İş Mantığı ve İşlem Boru Hattı",
      description:
        "Okuma (Queries) ve yazma (Commands) akışlarını ayıran CQRS mimarisi. Garbage Collector duraklamalarını sıfırlayan bellek havuzları.",
      rationale:
        "İş kuralları saf C# içinde deterministik olarak işlenir; sıfır çalışma anı hatası ilkesiyle sistem stabilitesi korunur.",
    },
    en: {
      role: "Deterministic Domain Logic & Compute",
      description:
        "Segregated Command and Query responsibility (CQRS) powered by zero-allocation buffers that neutralize GC pause spikes.",
      rationale:
        "Processes business logic deterministically in pure C# with strict invariant validation, ensuring rock-solid stability.",
    },
    ku: {
      role: "Binesaziya Hesabkirinê & CQRS",
      description:
        "Mîmariya CQRS a ku xwendin û nivîsandinê ji hev vediqetîne. Ji bo aramiya pergalê bîra bê ziyan bikar tîne.",
      rationale:
        "Zagonên karsaziyê di nav C# de bi awayekî zelal têne xebitandin û rê li ber xeletiyan tê girtin.",
    },
  },
  {
    id: "event-outbox",
    stepNumber: "05",
    name: "Transactional Outbox & Streams",
    category: "ASYNCHRONOUS MESSAGING",
    latency: "< 3.5 ms",
    throughput: "45,000 msg/s",
    pattern: "Transactional Outbox & Idempotent Consumer",
    tr: {
      role: "Kayıpsız Asenkron Olay Dağıtımı",
      description:
        "Veritabanı transaction'ı ile atomik olarak kaydedilen olaylar, arka plan worker'ları tarafından Kafka/RabbitMQ kuyruklarına güvenle iletilir.",
      rationale:
        "Dual-write hatası ve veri kaybı önlenir; aynı mesaj iki kez gelse bile sonuç asla bozulmaz (idempotent).",
    },
    en: {
      role: "Zero-Loss Asynchronous Event Dispatch",
      description:
        "Events saved atomically within database transactions, dispatched to Kafka/RabbitMQ streams via dedicated outbox consumers.",
      rationale:
        "Eliminates dual-write anomalies and packet loss; guarantees idempotent consumers so duplicate deliveries cause zero harm.",
    },
    ku: {
      role: "Belavkirina Peyamên Bê Ziyan",
      description:
        "Bûyerên ku bi awayekî atomî hatine qeydkirin, ji aliyê xebatkarên paşîn ve ji bo Kafka/RabbitMQ têne şandin.",
      rationale: "Ziyanên daneyan ji holê radike; peyamek du caran were jî encam naguhere.",
    },
  },
  {
    id: "postgres-cluster",
    stepNumber: "06",
    name: "PostgreSQL Primary & Audit Trail",
    category: "PERSISTENCE & COMPLIANCE",
    latency: "< 4.8 ms",
    throughput: "18,000 tx/s",
    pattern: "UUIDv7 Indexing & Immutable JSON Audit Log",
    tr: {
      role: "Kalıcı Veri Deposu ve Değişmez Denetim İzi",
      description:
        "Zaman damgalı UUIDv7 indeksleri, Primary-Replica havuzu ve her durum değişikliğini JSON olarak kaydeden audit tablosu.",
      rationale:
        "Sıralı integer id zaafiyeti ve soft-delete indeks zehirlenmesi önlenir; her verinin geçmişi kriptografik netlikte saklanır.",
    },
    en: {
      role: "Durable Persistence & Immutable Audit Trail",
      description:
        "Timestamped UUIDv7 sequential indexing, read-replica pooling, and an immutable JSON audit ledger tracking every state transition.",
      rationale:
        "Avoids sequential ID predictability and soft-delete index poisoning; stores state history with forensic precision.",
    },
    ku: {
      role: "Depoya Daneyên Daîmî & Qeyda Şopandinê",
      description:
        "Indeksên UUIDv7 ên li gorî demê, hewza Primary-Replica û tabloya audit a ku her guherînê wekî JSON tomar dike.",
      rationale:
        "Pêşî li pirsgirêkên soft-delete digire û dîroka hemû daneyan bi awayekî ewle diparêze.",
    },
  },
];
