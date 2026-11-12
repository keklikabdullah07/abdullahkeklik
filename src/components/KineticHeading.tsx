"use client";

import { type Variants, motion, useReducedMotion } from "framer-motion";
import type React from "react";

interface KineticHeadingProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
}

export const KineticHeading: React.FC<KineticHeadingProps> = ({
  children,
  as = "h1",
  className = "",
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const words = children.split(" ");
  const Component = motion[as];

  if (shouldReduceMotion) {
    const FallbackComponent = as;
    return <FallbackComponent className={className}>{children}</FallbackComponent>;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      y: "120%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={`inline-flex flex-wrap gap-x-[0.3em] overflow-hidden ${className}`}
    >
      {words.map((word, idx) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: Heading words order is immutable and static
        <span key={`${word}-${idx}`} className="inline-block overflow-hidden py-0.5">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};
