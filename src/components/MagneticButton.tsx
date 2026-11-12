"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import type React from "react";
import { useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  href,
  type = "button",
  ariaLabel,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const x = useSpring(0, { stiffness: 220, damping: 15 });
  const y = useSpring(0, { stiffness: 220, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || shouldReduceMotion) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantStyles = {
    primary:
      "bg-brand text-linen hover:bg-brand-hover shadow-lg shadow-brand/20 border border-brand-accent/30",
    secondary:
      "bg-surface-raised text-linen hover:bg-surface border border-white/10 hover:border-white/20 shadow-panel",
    outline:
      "bg-transparent text-linen-muted hover:text-linen border border-white/15 hover:border-brand/50 hover:bg-white/5",
  };

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium tracking-wide transition-colors duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian cursor-pointer";

  const content = (
    <motion.div
      ref={ref}
      style={{ x: shouldReduceMotion ? 0 : x, y: shouldReduceMotion ? 0 : y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          aria-label={ariaLabel}
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          aria-label={ariaLabel}
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
};
