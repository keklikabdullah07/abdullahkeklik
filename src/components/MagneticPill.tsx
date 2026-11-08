"use client";

import { motion, useSpring } from "framer-motion";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface MagneticPillProps {
  label: string;
}

export const MagneticPill: React.FC<MagneticPillProps> = ({ label }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    setIsReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const x = useSpring(0, { stiffness: 220, damping: 15 });
  const y = useSpring(0, { stiffness: 220, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isReduced) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Manyetik çekim kuvveti
    x.set(distanceX * 0.28);
    y.set(distanceY * 0.28);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: isReduced ? 0 : x, y: isReduced ? 0 : y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface/80 hover:bg-surface-raised border border-hairline hover:border-silver-glow text-xs font-mono text-ink-muted hover:text-ink transition-all cursor-default shadow-sm hover:shadow-[0_4px_16px_rgba(255,255,255,0.06)] active:scale-95">
        <span className="w-1.5 h-1.5 rounded-full bg-brand/60" />
        <span>{label}</span>
      </span>
    </motion.div>
  );
};
