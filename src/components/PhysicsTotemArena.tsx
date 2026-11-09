"use client";

import { Plus, RotateCcw, Sparkles } from "lucide-react";
import Matter from "matter-js";
import type React from "react";
import { useEffect, useRef, useState } from "react";

const INITIAL_SKILLS = [
  "Rust",
  "TypeScript",
  "Go",
  "Next.js 15",
  "Kafka",
  "PostgreSQL",
  "Docker",
  "Tailwind CSS",
  "Framer Motion",
  "Linux Kernel",
  "WebAssembly",
  "Distributed DB",
];

export const PhysicsTotemArena: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const [activeCount, setActiveCount] = useState(INITIAL_SKILLS.length);

  useEffect(() => {
    if (!sceneRef.current || !canvasRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter;

    const width = sceneRef.current.clientWidth || 800;
    const height = 360;

    const engine = Engine.create({
      gravity: { x: 0, y: 0.9, scale: 0.001 },
    });
    engineRef.current = engine;

    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Sınırlar (Zemin, sol ve sağ duvar)
    const wallThick = 50;
    const ground = Bodies.rectangle(width / 2, height + wallThick / 2 - 10, width * 2, wallThick, {
      isStatic: true,
      render: { visible: false },
    });
    const leftWall = Bodies.rectangle(-wallThick / 2, height / 2, wallThick, height * 2, {
      isStatic: true,
      render: { visible: false },
    });
    const rightWall = Bodies.rectangle(width + wallThick / 2, height / 2, wallThick, height * 2, {
      isStatic: true,
      render: { visible: false },
    });

    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Pulları oluşturma
    const pillBodies: Array<{ body: Matter.Body; label: string; width: number; height: number }> =
      [];

    INITIAL_SKILLS.forEach((skill, idx) => {
      const pillWidth = skill.length * 9.5 + 28;
      const pillHeight = 36;
      const x = (width / (INITIAL_SKILLS.length + 1)) * (idx + 1) + (Math.random() - 0.5) * 40;
      const y = -40 - idx * 25;

      const body = Bodies.rectangle(x, y, pillWidth, pillHeight, {
        chamfer: { radius: 18 },
        restitution: 0.45,
        friction: 0.2,
        density: 0.002,
      });

      pillBodies.push({ body, label: skill, width: pillWidth, height: pillHeight });
      Composite.add(engine.world, body);
    });

    // Mouse Etkileşimi
    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(engine.world, mouseConstraint);

    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Custom Canvas Render Döngüsü
    let animId: number;
    const renderLoop = () => {
      ctx.clearRect(0, 0, width, height);

      // Pulların çizimi
      for (const item of pillBodies) {
        const { x, y } = item.body.position;
        const angle = item.body.angle;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);

        // Pul Gövdesi (Slate Plum & Onyx Kohl)
        ctx.beginPath();
        ctx.roundRect(-item.width / 2, -item.height / 2, item.width, item.height, 18);
        ctx.fillStyle = "rgba(23, 26, 35, 0.95)";
        ctx.fill();

        // Warm Fawn Sınır Çizgisi
        ctx.lineWidth = 1.25;
        ctx.strokeStyle = "rgba(203, 184, 159, 0.35)";
        ctx.stroke();

        // Chukar Mercan Nokta & Tipografi
        ctx.beginPath();
        ctx.arc(-item.width / 2 + 14, 0, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#E84D38";
        ctx.shadowColor = "#E84D38";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.font = "500 12px var(--font-mono, monospace)";
        ctx.fillStyle = "#F6F1E8";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(item.label, 6, 1);

        ctx.restore();
      }

      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animId);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  const handleReset = () => {
    if (!engineRef.current) return;
    const bodies = Matter.Composite.allBodies(engineRef.current.world).filter((b) => !b.isStatic);
    bodies.forEach((b, idx) => {
      Matter.Body.setPosition(b, {
        x: 100 + ((idx * 60) % 600),
        y: -30 - Math.random() * 80,
      });
      Matter.Body.setVelocity(b, { x: (Math.random() - 0.5) * 4, y: 2 });
    });
  };

  const handleSpawnMore = () => {
    if (!engineRef.current || !sceneRef.current) return;
    const bonusSkills = ["GraphQL", "Redis", "Zero Trust", "K8s", "gRPC", "WebSockets"];
    const skill = bonusSkills[Math.floor(Math.random() * bonusSkills.length)];
    const pillWidth = skill.length * 9.5 + 28;
    const pillHeight = 36;
    const width = sceneRef.current.clientWidth || 800;

    const body = Matter.Bodies.rectangle(
      width / 2 + (Math.random() - 0.5) * 150,
      -30,
      pillWidth,
      pillHeight,
      {
        chamfer: { radius: 18 },
        restitution: 0.5,
        friction: 0.2,
      },
    );

    Matter.Composite.add(engineRef.current.world, body);
    setActiveCount((c) => c + 1);
  };

  return (
    <section className="py-20 md:py-28 border-t border-fawn-subtle relative overflow-hidden bg-surface-sunken/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand uppercase tracking-wider mb-2 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
              <span>Grail Fiziği & Somut Zanaat</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F6F1E8] tracking-tight">
              Fiziksel Teknoloji Totemleri
            </h2>
            <p className="text-sm text-ink-muted mt-1.5 max-w-xl">
              Statik etiketler yerine; yerçekimine ve farenize tepki veren yaşayan pullar. Tutun,
              savurun veya çarpıştırın.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleSpawnMore}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-fawn-subtle bg-[#171A23] hover:bg-[#222634] text-xs font-mono text-[#CBB89F] hover:text-[#F6F1E8] transition-colors shadow-sm"
            >
              <Plus className="w-3.5 h-3.5 text-brand" />
              <span>Pul Düşür</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-fawn-subtle bg-[#171A23] hover:bg-[#222634] text-xs font-mono text-[#CBB89F] hover:text-[#F6F1E8] transition-colors shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5 text-brand" />
              <span>Sıfırla</span>
            </button>
          </div>
        </div>

        {/* Matter.js Fizik Sahnesi Konteyneri */}
        <div
          ref={sceneRef}
          className="relative w-full h-[360px] rounded-2xl border border-fawn-subtle bg-[#171A23]/80 backdrop-blur-xl shadow-panel overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <div className="absolute top-4 left-5 pointer-events-none flex items-center gap-2 text-[11px] font-mono text-[#CBB89F]">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span>Matter.js 2D Rigid Body Physics ({activeCount} Totem)</span>
          </div>

          <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
      </div>
    </section>
  );
};
