"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

interface SpotlightContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightContainer: React.FC<SpotlightContainerProps> = ({
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);
  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isReducedMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    if (!isReducedMotion) setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Süzülen Akışkan Işık Hüzmesi (Spotlight Beam) */}
      {!isReducedMotion && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-500 ease-out z-0"
          style={{
            opacity,
            background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.12), rgba(255, 255, 255, 0.04) 40%, transparent 80%)`,
          }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
