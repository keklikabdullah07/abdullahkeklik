import { ChukarLogo } from "@/components/ChukarLogo";
import { initialProjects } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return initialProjects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = initialProjects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = initialProjects[projectIndex];
  const nextProject = initialProjects[(projectIndex + 1) % initialProjects.length];
  const projectNumber = String(projectIndex + 1).padStart(2, "0");
  const totalProjects = String(initialProjects.length).padStart(2, "0");
  const nextProjectNumber = String(((projectIndex + 1) % initialProjects.length) + 1).padStart(
    2,
    "0",
  );

  return (
    <main className="min-h-screen bg-canvas text-ink selection:bg-primary selection:text-primary-contrast transition-colors">
      {/* Üst Editoryal Navigasyon Çubuğu */}
      <header className="w-full border-b border-hairline bg-canvas/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link
            href="/#curated-works"
            className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-ink-muted hover:text-primary transition-colors py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ARŞİVE GERİ DÖN</span>
          </Link>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline text-xs font-mono text-ink-muted uppercase">
              URFA 37°09&apos;N · PROJE [{projectNumber}/{totalProjects}]
            </span>
            <Link
              href="/"
              className="p-2 rounded-lg bg-surface border border-hairline/60 hover:border-primary transition-colors flex items-center justify-center"
              aria-label="Ana sayfaya dön"
            >
              <ChukarLogo size={28} />
            </Link>
          </div>
        </div>
      </header>

      {/* Proje Başlık ve Hero Alanı */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-12 border-b border-hairline">
        <div className="flex items-center gap-3 text-xs font-mono text-ink-muted uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span>VAKA ANALİZİ · ARCHIVE [{projectNumber}]</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink font-sans leading-[1.05]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-2xl font-light text-ink-body font-sans mt-6 max-w-3xl leading-relaxed">
          {project.tagline}
        </p>
      </section>

      {/* 2 Kolonlu Asimetrik Editoryal Vaka Düzeni */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Sol Kolon: Künye Tablosu & Butonlar (Sticky) */}
        <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
          <div className="rounded-xl bg-surface border border-hairline p-6 md:p-8 space-y-6">
            <div className="border-b border-hairline pb-4">
              <span className="text-[10px] font-mono text-ink-muted uppercase tracking-widest">
                MÜŞTERİ / LAB
              </span>
              <p className="text-sm font-sans font-medium text-ink mt-1">
                {project.client || "Bağımsız Laboratuvar"}
              </p>
            </div>

            <div className="border-b border-hairline pb-4 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono text-ink-muted uppercase tracking-widest">
                  YIL
                </span>
                <p className="text-sm font-sans font-medium text-ink mt-1">
                  {project.year || "2026"}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-ink-muted uppercase tracking-widest">
                  DİSİPLİN
                </span>
                <p className="text-sm font-sans font-medium text-amber mt-1">
                  {project.discipline || "Creative Tech"}
                </p>
              </div>
            </div>

            {project.highlightMetric && (
              <div className="border-b border-hairline pb-4">
                <span className="text-[10px] font-mono text-ink-muted uppercase tracking-widest">
                  ÖNE ÇIKAN METRİK
                </span>
                <div className="inline-flex items-center gap-2 mt-1.5 px-3 py-1.5 rounded bg-amber/10 border border-amber/20 text-xs font-mono text-ink font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber" />
                  <span>{project.highlightMetric}</span>
                </div>
              </div>
            )}

            <div>
              <span className="text-[10px] font-mono text-ink-muted uppercase tracking-widest block mb-2">
                KULLANILAN TEKNOLOJİLER
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-canvas border border-hairline text-ink-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Dış Bağlantı Butonları */}
            <div className="pt-4 space-y-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-contrast font-mono text-xs uppercase tracking-wider transition-all duration-200"
                >
                  <span>CANLI DEMOYA GİT</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {(project.githubUrl || project.gitlabUrl) && (
                <a
                  href={project.githubUrl || project.gitlabUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-canvas hover:bg-surface-raised border border-hairline text-ink font-mono text-xs uppercase tracking-wider transition-all duration-200"
                >
                  <Github className="w-4 h-4 text-ink-muted" />
                  <span>KAYNAK KODLARI İNCELE</span>
                </a>
              )}
            </div>
          </div>
        </aside>

        {/* Sağ Kolon: Editoryal İçerik & Mimari Bölümler */}
        <article className="lg:col-span-8 space-y-16">
          {/* Genel Bakış */}
          <section className="space-y-4">
            <span className="text-xs font-mono text-primary uppercase tracking-widest">
              [ 01 — GENEL BAKIŞ ]
            </span>
            <p className="text-base sm:text-lg text-ink-body font-sans leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* 02: Mimari Meydan Okuma */}
          {project.challenge && (
            <section className="space-y-4 border-t border-hairline pt-12">
              <span className="text-xs font-mono text-amber uppercase tracking-widest">
                [ 02 — MİMARİ MEYDAN OKUMA ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-sans">
                Karşılaşılan Teknik Engel &amp; Limitler
              </h2>
              <p className="text-base sm:text-lg text-ink-body font-sans leading-relaxed">
                {project.challenge}
              </p>
            </section>
          )}

          {/* 03: Mühendislik Çözümü */}
          {project.solution && (
            <section className="space-y-4 border-t border-hairline pt-12">
              <span className="text-xs font-mono text-primary uppercase tracking-widest">
                [ 03 — MÜHENDİSLİK ÇÖZÜMÜ ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-sans">
                Uygulanan Sistem Tasarımı ve Mimari
              </h2>
              <p className="text-base sm:text-lg text-ink-body font-sans leading-relaxed">
                {project.solution}
              </p>
            </section>
          )}

          {/* 04: Ölçülebilir Çıktılar */}
          {project.impact && project.impact.length > 0 && (
            <section className="space-y-6 border-t border-hairline pt-12">
              <span className="text-xs font-mono text-amber uppercase tracking-widest">
                [ 04 — ÖLÇÜLEBİLİR SONUÇLAR ]
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink font-sans">
                Elde Edilen Performans &amp; Etki Çıktıları
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.impact.map((item, idx) => (
                  <div
                    key={item}
                    className="p-5 rounded-lg bg-surface border border-hairline flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-ink-body leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 05: Teslim Edilen Çıktılar */}
          {project.deliverables && project.deliverables.length > 0 && (
            <section className="space-y-6 border-t border-hairline pt-12">
              <span className="text-xs font-mono text-ink-muted uppercase tracking-widest">
                [ 05 — TESLİM EDİLENLER ]
              </span>
              <div className="border border-hairline rounded-lg divide-y divide-hairline bg-surface/50">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={item}
                    className="p-4 flex items-center justify-between text-xs font-mono"
                  >
                    <span className="text-ink font-medium">{item}</span>
                    <span className="text-ink-muted">DELIVERABLE [0{idx + 1}]</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </article>
      </div>

      {/* Alt Kapanış: Sonraki Projeye Geçiş Teaser Kartı */}
      <section className="border-t border-hairline bg-surface/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <Link
            href={`/works/${nextProject.slug}`}
            className="group block p-8 sm:p-12 rounded-2xl bg-surface border border-hairline hover:border-primary transition-all duration-300 hover:shadow-warm"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-2">
                  SIRADAKİ ARŞİV PROJESİ [{nextProjectNumber}/04] →
                </span>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink group-hover:text-primary transition-colors font-sans">
                  {nextProject.title}
                </h3>
                <p className="text-sm font-sans text-ink-muted mt-2">
                  {nextProject.client} · {nextProject.discipline}
                </p>
              </div>

              <div className="w-14 h-14 rounded-full bg-canvas border border-hairline group-hover:bg-primary group-hover:border-primary group-hover:text-primary-contrast transition-all duration-300 flex items-center justify-center shrink-0 group-hover:translate-x-2">
                <ArrowUpRight className="w-6 h-6 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
