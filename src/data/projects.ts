import type { Project } from "@/types/project";

export const initialProjects: Project[] = [
  {
    id: "proj-1",
    title: "Partridge Engine",
    slug: "partridge-engine",
    category: "individual",
    tagline: "Yüksek hızlı, bellek dostu kural ve veri işleme motoru",
    description:
      "TypeScript ve Rust FFI ile geliştirilmiş, GC baskısını sıfıra indiren ve 60 FPS garantili asenkron olay hattı sağlayan açık kaynak kütüphane.",
    tags: ["Rust", "TypeScript", "Object Pooling", "WebAssembly"],
    githubUrl: "https://github.com/partridge/engine",
    demoUrl: "https://partridge-engine.dev",
    featured: true,
    bentoSpan: "md:col-span-2",
    highlightMetric: "60 FPS · 0ms GC",
  },
  {
    id: "proj-2",
    title: "OmniLogistics Platform",
    slug: "omnilogistics-platform",
    category: "corporate",
    tagline: "Global tedarik zinciri için dağıtık filo yönetim ve telemetri altyapısı",
    description:
      "Günde 10M+ telemetri paketini işleyen mikroservis mimarisi. Gerçek zamanlı filo takip, rota optimizasyonu ve anomali tespiti.",
    tags: ["Go", "Kafka", "PostgreSQL", "Next.js", "Tailwind CSS"],
    gitlabUrl: "https://gitlab.com/enterprise/omnilogistics",
    demoUrl: "https://omnilogistics.demo.dev",
    featured: true,
    bentoSpan: "col-span-1",
    highlightMetric: "10M+ Olay/Gün",
  },
  {
    id: "proj-3",
    title: "Kinesis UI / Design System",
    slug: "kinesis-ui",
    category: "individual",
    tagline: "Erişilebilir, dokunsal mikro-etkileşimli headless tasarım sistemi",
    description:
      "WCAG 2.1 AA uyumlu, klavye dostu, Radix primitifleri ve Framer Motion tabanlı lüks tasarım token motoru.",
    tags: ["React 19", "Framer Motion", "Tailwind CSS", "A11y"],
    githubUrl: "https://github.com/partridge/kinesis-ui",
    demoUrl: "https://kinesis-ui.dev",
    featured: true,
    bentoSpan: "col-span-1",
    highlightMetric: "%100 WCAG AA",
  },
  {
    id: "proj-4",
    title: "FinPulse Core Banking",
    slug: "finpulse-core-banking",
    category: "corporate",
    tagline: "Yüksek güvenlikli açık bankacılık ve PSD2 uyumlu ödeme ağ geçidi",
    description:
      "Bankacılık regülasyonlarına uygun, idempotency güvenceli ve çok katmanlı denetim izi (audit log) sunan finansal işlem omurgası.",
    tags: ["TypeScript", "Drizzle ORM", "Docker", "Zero Trust", "PCI-DSS"],
    gitlabUrl: "https://gitlab.com/enterprise/finpulse",
    featured: true,
    bentoSpan: "md:col-span-2",
    highlightMetric: "%99.999 SLA",
  },
];
