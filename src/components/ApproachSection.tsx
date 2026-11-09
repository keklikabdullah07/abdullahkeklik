import { Cpu, ShieldCheck, Zap } from "lucide-react";
import type React from "react";

export const ApproachSection: React.FC = () => {
  const principles = [
    {
      icon: Cpu,
      title: "Kararlı Modernizm",
      description:
        "Alpha/canary heyecanları yerine rüştünü ispatlamış LTS teknolojilerle; 5 yıl sonra da ilk günkü gibi dimdik ayakta duran sistemler.",
    },
    {
      icon: Zap,
      title: "Akışkan Mikro-Hareket",
      description:
        "Abartılı veya göz yoran animasyonlar yerine; kullanıcıyı yormayan, 60 FPS hedefine kilitli, fiziksel ve dokunsal yay (spring) etkileşimleri.",
    },
    {
      icon: ShieldCheck,
      title: "Kati Kanıt & Erişilebilirlik",
      description:
        "Soyut iddialar yerine testlerle kanıtlanmış kalite; WCAG 2.1 AA kontrast, klavye gezintisi ve sıfır güvenlik açığı standardı.",
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-hairline bg-surface/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-brand uppercase tracking-wider">
            Mühendislik Anayasası
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight mt-2">
            Ödün Verilmeyen Standartlar
          </h2>
          <p className="text-sm text-ink-muted mt-2">
            Her projede estetik ile mühendislik disiplinini aynı potada eritiyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-lg bg-surface border border-hairline hover:border-brand/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 text-brand flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-brand" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
