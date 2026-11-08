"use client";

import { CheckCircle2, Play, Terminal } from "lucide-react";
import type React from "react";
import { useState } from "react";

export const TerminalPreview: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string[]>([
    "partridge-engine v2.4 (x86_64-pc-windows-msvc)",
    "Initializing zero-copy asynchronous pipeline...",
    "Allocation strategy: Object Pooling (Static Buffer: 64MB)",
    "Engine status: LOCKED 60 FPS · GC: 0.00ms",
  ]);

  const handleBenchmark = () => {
    if (isRunning) return;
    setIsRunning(true);
    setOutput((prev) => [...prev, "$ benchmark --concurrency=1000"]);
    setTimeout(() => {
      setOutput((prev) => [
        ...prev,
        "✓ 1,480,200 ops/sec completed in 1.12s",
        "✓ Memory churn: 0 bytes (Zero GC footprint)",
      ]);
      setIsRunning(false);
    }, 450);
  };

  return (
    <div className="w-full mt-4 rounded-md border border-hairline bg-surface-sunken/90 p-3.5 font-mono text-xs overflow-hidden shadow-inner">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-hairline/60 text-ink-subtle text-[11px]">
        <div className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
          <span>runtime_telemetry.rs</span>
        </div>
        <button
          type="button"
          onClick={handleBenchmark}
          disabled={isRunning}
          aria-label="Benchmark Testini Başlat"
          className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface hover:bg-surface-raised active:bg-brand/20 border border-hairline text-[10px] text-brand transition-colors disabled:opacity-50"
        >
          <Play className="w-2.5 h-2.5 fill-current" aria-hidden="true" />
          <span>{isRunning ? "Ölçülüyor..." : "Test Et"}</span>
        </button>
      </div>

      <div className="space-y-1 text-[11px] leading-relaxed text-ink-muted">
        {output.slice(-4).map((line, idx) => (
          <div
            key={`${idx}-${line}`}
            className={`flex items-start gap-1.5 ${
              line.startsWith("✓") ? "text-brand font-semibold" : ""
            }`}
          >
            {line.startsWith("✓") ? (
              <CheckCircle2 className="w-3 h-3 text-brand mt-0.5 shrink-0" />
            ) : (
              <span className="text-brand/60 select-none">›</span>
            )}
            <span className="truncate">{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
