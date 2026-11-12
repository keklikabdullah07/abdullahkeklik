import { Cpu, ShieldCheck, Zap } from "lucide-react";
import type React from "react";
import { KineticHeading } from "./KineticHeading";

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
    <section id="experience" className="py-20 md:py-28 border-t border-white/10 bg-[#090D16]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-[#D9532F] uppercase tracking-wider font-bold">
            Mühendislik Anayasası
          </span>
          <KineticHeading
            as="h2"
            className="text-2xl sm:text-4xl font-bold text-[#FAF9F6] tracking-tight mt-2 justify-center"
          >
            Ödün Verilmeyen Standartlar
          </KineticHeading>
          <p className="text-sm text-[#94A3B8] mt-3">
            Her projede estetik ile mühendislik disiplinini aynı potada eritiyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-7 rounded-2xl bg-[#121722]/80 border border-white/10 hover:border-[#D9532F]/40 transition-all flex flex-col justify-between group shadow-panel"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#D9532F] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-[#D9532F]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#FAF9F6] mb-2 group-hover:text-[#D9532F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
