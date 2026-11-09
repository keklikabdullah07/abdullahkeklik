"use client";

import type React from "react";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxLife: number;
  life: number;
  colorType: "silver" | "emerald";
  rotation: number;
  vRot: number;
}

export const WingParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Reduced motion durumunda çalıştırma
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let width = canvas.width;
    let height = canvas.height;

    const particles: Particle[] = [];
    const maxParticles = 55;

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width = canvas.width;
      height = canvas.height;
    };

    window.addEventListener("resize", handleResize);

    const addParticles = (x: number, y: number, count = 2) => {
      for (let i = 0; i < count; i++) {
        if (particles.length >= maxParticles) {
          particles.shift();
        }
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.2 + 0.3;
        particles.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4, // Hafifçe yukarı süzülme
          size: Math.random() * 2.5 + 1.2,
          alpha: 1,
          maxLife: Math.random() * 45 + 35,
          life: 0,
          colorType: Math.random() > 0.65 ? "emerald" : "silver",
          rotation: Math.random() * Math.PI,
          vRot: (Math.random() - 0.5) * 0.04,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      addParticles(e.clientX, e.clientY, 2);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRot;
        p.alpha = Math.max(0, 1 - p.life / p.maxLife);

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.colorType === "emerald") {
          // Kınalı keklik mercan tüyü
          ctx.fillStyle = `rgba(232, 77, 56, ${p.alpha * 0.7})`;
          ctx.shadowColor = "rgba(232, 77, 56, 0.5)";
          ctx.shadowBlur = 6;
        } else {
          // Warm Fawn / Tebeşir Keten tüy
          ctx.fillStyle = `rgba(203, 184, 159, ${p.alpha * 0.75})`;
          ctx.shadowColor = "rgba(246, 241, 232, 0.35)";
          ctx.shadowBlur = 4;
        }

        // Tüy / Kanat elipsi
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 2, p.size * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} tabIndex={-1} className="pointer-events-none fixed inset-0 z-30" />
  );
};
