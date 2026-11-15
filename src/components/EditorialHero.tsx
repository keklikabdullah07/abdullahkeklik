"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import type React from "react";
import { HeroMedallionVideo } from "./HeroMedallionVideo";
import { EASE_EDITORIAL } from "./MotionWrapper";

export function EditorialHero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: EASE_EDITORIAL,
      },
    },
  };

  const medallionVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.85,
        ease: EASE_EDITORIAL,
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full pt-16 md:pt-28 pb-20 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-between"
    >
      {/* Üst İndeks Künyesi */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-6 text-xs font-mono text-ink-muted uppercase tracking-wider"
      >
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-surface border border-hairline text-ink font-medium">
            INDEX / 2026
          </span>
          <span>FOLIO OF ABDULLAH KEKLİK</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline">DISCIPLINE: CREATIVE TECH & DESIGN</span>
          <span className="text-primary font-medium">[ARCHIVE V4]</span>
        </div>
      </motion.div>

      {/* Ana Heykelsi Tipografi ve 3D Madalyon Alanı */}
      <div className="my-16 md:my-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-16">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.25rem] font-bold tracking-[-0.035em] text-ink leading-[0.94] select-none text-left w-full lg:w-auto font-sans"
          >
            <span className="block">ABDULLAH</span>
            <span className="inline-flex items-baseline">
              <span>KEKLİK</span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : 0.35,
                  ease: EASE_EDITORIAL,
                }}
                className="inline-block w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-primary ml-2.5 md:ml-3.5 align-baseline"
              />
            </span>
          </motion.h1>

          <motion.div
            variants={medallionVariants}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <HeroMedallionVideo />
          </motion.div>
        </div>

        {/* Editoryal Manifesto & Zanaat Açıklaması */}
        <motion.div
          variants={itemVariants}
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          <div className="md:col-span-7">
            <p className="text-xl sm:text-2xl md:text-3xl font-normal text-ink-body leading-relaxed font-sans">
              Mezopotamya&apos;nın kadim taş işçiliği ve sakin mimarisini, çağdaş dijital etkileşim
              mühendisliğiyle buluşturan yaşayan portfolyo.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col justify-between gap-6 md:border-l md:border-hairline md:pl-8">
            <p className="text-sm text-ink-muted leading-relaxed">
              Jenerik yapay zeka şablonları yerine; sessiz lüks, cömert negatif alan, saf tipografi
              ve pürüzsüz eylemsiz kaydırma disiplini.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#curated-works"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-md bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-contrast font-mono text-xs uppercase tracking-wider transition-all duration-200 shadow-sm active:translate-y-[1px]"
              >
                <span>ARŞİVİ KEŞFET</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3.5 rounded-md bg-surface hover:bg-surface-raised border border-hairline text-ink font-mono text-xs uppercase tracking-wider transition-all duration-200 active:translate-y-[1px]"
              >
                <span>İLETİŞİM</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
