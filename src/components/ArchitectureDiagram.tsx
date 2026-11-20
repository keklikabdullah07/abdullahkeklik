"use client";

import { useI18n } from "@/context/LanguageContext";
import { ARCHITECTURE_NODES, type ArchitectureNode } from "@/data/architectureBlueprint";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Database,
  Layers,
  Network,
  Radio,
  Server,
  ShieldCheck,
} from "lucide-react";
import React, { useMemo, useState } from "react";

export function ArchitectureDiagram() {
  const { t, locale } = useI18n();
  const [selectedNodeId, setSelectedNodeId] = useState<string>("core-engine");

  const selectedNode = useMemo(() => {
    return ARCHITECTURE_NODES.find((n) => n.id === selectedNodeId) || ARCHITECTURE_NODES[3];
  }, [selectedNodeId]);

  const getNodeIcon = (id: string) => {
    switch (id) {
      case "edge-gateway":
        return <Network className="w-4 h-4 text-primary" />;
      case "auth-tenant-guard":
        return <ShieldCheck className="w-4 h-4 text-primary" />;
      case "l1-l2-cache":
        return <Activity className="w-4 h-4 text-primary" />;
      case "core-engine":
        return <Server className="w-4 h-4 text-primary" />;
      case "event-outbox":
        return <Radio className="w-4 h-4 text-primary" />;
      case "postgres-cluster":
        return <Database className="w-4 h-4 text-primary" />;
      default:
        return <Layers className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <section
      id="system-architecture"
      aria-label={t.architectureDiagram.title}
      className="w-full py-24 sm:py-32 px-6 md:px-12 border-b border-hairline/60 bg-canvas transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Bölüm Başlığı & Editoryal Künye */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-surface border border-hairline font-mono text-[11px] uppercase tracking-wider text-ink-muted">
            <Layers className="w-3.5 h-3.5 text-primary" />
            <span>{t.architectureDiagram.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink font-sans">
            {t.architectureDiagram.title}
          </h2>
          <p className="text-sm sm:text-base font-sans text-body-muted leading-relaxed">
            {t.architectureDiagram.subtitle}
          </p>
        </div>

        {/* Ana Izgara: Sol taraf interaktif boru hattı, Sağ taraf Inspector paneli */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sol Kolon: 6 Aşamalı İstek Boru Hattı */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted uppercase pb-2 border-b border-hairline/60">
              <span>{t.architectureDiagram.pipelineHeading}</span>
              <span>{t.architectureDiagram.interactiveHint}</span>
            </div>

            <div className="space-y-2.5 relative">
              {ARCHITECTURE_NODES.map((node, index) => {
                const isSelected = node.id === selectedNode.id;
                const localized = node[locale] || node.tr;

                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 group ${
                        isSelected
                          ? "bg-surface-raised border-primary shadow-sm ring-1 ring-primary/40 -translate-y-0.5"
                          : "bg-surface/50 hover:bg-surface border-hairline hover:border-hairline-strong"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                        {/* Numara ve İkon */}
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold transition-colors ${
                            isSelected
                              ? "bg-primary text-primary-contrast"
                              : "bg-canvas border border-hairline text-ink-muted group-hover:text-ink"
                          }`}
                        >
                          {isSelected ? getNodeIcon(node.id) : node.stepNumber}
                        </div>

                        {/* Düğüm Bilgisi */}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-mono text-ink-muted uppercase tracking-wider">
                              {node.category}
                            </span>
                            <span className="text-[10px] font-mono text-primary font-semibold">
                              [{node.latency}]
                            </span>
                          </div>
                          <h3 className="font-mono text-sm sm:text-base font-bold text-ink truncate">
                            {node.name}
                          </h3>
                          <p className="text-xs font-sans text-body-muted truncate mt-0.5">
                            {localized.role}
                          </p>
                        </div>
                      </div>

                      {/* Sağ Taraf: Metrik Özeti ve Seçim İbreleri */}
                      <div className="hidden sm:flex flex-col items-end shrink-0 font-mono text-right">
                        <span className="text-[10px] text-ink-muted uppercase">THROUGHPUT</span>
                        <span className="text-xs font-semibold text-ink tabular-nums">
                          {node.throughput}
                        </span>
                        <span
                          className={`text-[10px] uppercase font-bold mt-1 ${
                            isSelected
                              ? "text-primary"
                              : "text-transparent group-hover:text-ink-muted"
                          }`}
                        >
                          {isSelected ? "● [SEÇİLİ]" : "İNCELE →"}
                        </span>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Sağ Kolon: Heykelsi Mimari Inspector (Sticky Telemetry) */}
          <div className="lg:col-span-5 sticky top-28 bg-surface-raised border border-hairline-strong rounded-2xl p-6 sm:p-8 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="space-y-6"
              >
                {/* Üst Bilgi Rozetleri */}
                <div className="flex items-center justify-between border-b border-hairline pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                      STEP [{selectedNode.stepNumber}] {"//"} {selectedNode.category}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-primary font-bold">
                    {selectedNode.latency}
                  </span>
                </div>

                {/* Başlık ve Rol */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-ink mb-1.5">
                    {selectedNode.name}
                  </h3>
                  <p className="text-xs font-mono text-primary uppercase tracking-wider font-semibold">
                    {(selectedNode[locale] || selectedNode.tr).role}
                  </p>
                </div>

                {/* Açıklama */}
                <p className="text-sm font-sans text-body leading-relaxed">
                  {(selectedNode[locale] || selectedNode.tr).description}
                </p>

                {/* Telemetri Metrikleri Kartı */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-canvas border border-hairline font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-ink-muted uppercase block">
                      {t.architectureDiagram.metricLatency}
                    </span>
                    <span className="text-sm font-bold text-ink tabular-nums mt-0.5 block">
                      {selectedNode.latency}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-ink-muted uppercase block">
                      {t.architectureDiagram.metricThroughput}
                    </span>
                    <span className="text-sm font-bold text-ink tabular-nums mt-0.5 block">
                      {selectedNode.throughput}
                    </span>
                  </div>
                </div>

                {/* Tasarım Kalıbı Rozeti */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-ink-muted uppercase block">
                    {t.architectureDiagram.metricPattern}
                  </span>
                  <div className="px-3 py-2 rounded-lg bg-surface border border-hairline font-mono text-xs font-semibold text-ink">
                    {selectedNode.pattern}
                  </div>
                </div>

                {/* Mimari Karar & Invariant Notu */}
                <div className="p-4 sm:p-5 rounded-xl bg-canvas border border-hairline space-y-2">
                  <div className="text-[11px] font-mono text-primary font-bold uppercase tracking-wider">
                    {`// ${t.architectureDiagram.rationaleLabel}`}
                  </div>
                  <blockquote className="text-xs sm:text-sm font-mono text-ink italic leading-relaxed">
                    &ldquo;{(selectedNode[locale] || selectedNode.tr).rationale}&rdquo;
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
