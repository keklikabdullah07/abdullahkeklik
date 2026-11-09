"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import type React from "react";
import { useEffect, useRef, useState } from "react";

export const BirdEmblem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    setIsReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // 3D Tilt Spring Fiziği
  const mouseX = useSpring(0, { stiffness: 180, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);
  const wingLift = useTransform(mouseY, [-0.5, 0.5], [6, -6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isReduced) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);

    setLightPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    setLightPos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center p-4 cursor-pointer select-none"
      style={{ perspective: 1200 }}
    >
      {/* Arkadaki Kuş Halesi (Aura Glow — Kınalı Mercan & Gümüş) */}
      <div
        className="pointer-events-none absolute w-72 h-44 rounded-full blur-3xl transition-opacity duration-700 ease-out"
        style={{
          background: isHovered
            ? "radial-gradient(circle, rgba(224, 82, 56, 0.28) 0%, rgba(255, 255, 255, 0.12) 40%, transparent 75%)"
            : "radial-gradient(circle, rgba(224, 82, 56, 0.14) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* 3D Eğimli ve Fırçalanmış Metalik Yansımalı Amblem */}
      <motion.div
        style={{
          rotateX: isReduced ? 0 : rotateX,
          rotateY: isReduced ? 0 : rotateY,
          translateY: isReduced ? 0 : wingLift,
          transformStyle: "preserve-3d",
        }}
        className="relative flex flex-col items-center transition-transform duration-100 ease-out"
      >
        {/* Kuş Monogramı */}
        <div className="relative group">
          <Image
            src="/logo-monogram.png"
            alt="Abdullah Keklik — Partridge Kuş Amblemi"
            width={240}
            height={157}
            className="h-24 sm:h-28 w-auto object-contain filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.8)]"
            priority
          />

          {/* Dinamik Işık Kırılması Katmanı (Specular Sheen) */}
          {!isReduced && (
            <div
              className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(120px circle at ${lightPos.x}% ${lightPos.y}%, rgba(255, 255, 255, 0.9), transparent 60%)`,
              }}
              aria-hidden="true"
            />
          )}
        </div>

        {/* Tipografik İsim İmzası */}
        <div className="mt-3 flex items-center gap-2">
          <span className="font-mono text-sm tracking-[0.28em] uppercase text-silver-chrome font-semibold">
            abdullahkeklik
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_#e05238]" />
        </div>
      </motion.div>
    </div>
  );
};
