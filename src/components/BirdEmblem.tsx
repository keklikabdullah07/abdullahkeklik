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
      {/* Arkadaki Kuş Halesi (Slate Plum & Warm Fawn Doğal Derinlik) */}
      <div
        className="pointer-events-none absolute w-80 h-52 rounded-full blur-3xl transition-opacity duration-700 ease-out"
        style={{
          background: isHovered
            ? "radial-gradient(circle, rgba(62, 57, 71, 0.5) 0%, rgba(203, 184, 159, 0.1) 45%, transparent 75%)"
            : "radial-gradient(circle, rgba(62, 57, 71, 0.25) 0%, transparent 65%)",
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
        className="relative flex flex-col items-center px-8 py-5 rounded-3xl border border-[rgba(203,184,159,0.18)] bg-[#171A23]/85 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-[rgba(203,184,159,0.38)]"
      >
        {/* Kuş Monogramı */}
        <div className="relative group">
          <Image
            src="/logo-monogram.png"
            alt="Abdullah Keklik — Partridge Kuş Amblemi"
            width={240}
            height={157}
            className="h-24 sm:h-28 w-auto object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
            priority
          />

          {/* Dinamik Işık Kırılması Katmanı (Specular Sheen) */}
          {!isReduced && (
            <div
              className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(120px circle at ${lightPos.x}% ${lightPos.y}%, rgba(255, 255, 255, 0.7), transparent 60%)`,
              }}
              aria-hidden="true"
            />
          )}
        </div>

        {/* Tipografik İsim İmzası */}
        <div className="mt-3.5 flex items-center gap-2">
          <span className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#F6F1E8] font-semibold">
            abdullahkeklik
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_6px_#e84d38]" />
        </div>
      </motion.div>
    </div>
  );
};
