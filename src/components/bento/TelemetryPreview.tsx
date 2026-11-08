"use client";

import { Activity, Server } from "lucide-react";
import type React from "react";

export const TelemetryPreview: React.FC = () => {
  return (
    <div className="w-full mt-4 p-3.5 rounded-md border border-hairline bg-surface-sunken/80">
      <div className="flex items-center justify-between text-xs font-mono text-ink-subtle mb-3">
        <span className="flex items-center gap-1.5 text-blue-400">
          <Activity className="w-3.5 h-3.5 animate-pulse" aria-hidden="true" />
          <span>Canlı Filo Telemetrisi</span>
        </span>
        <span className="text-[11px] text-ink-muted flex items-center gap-1">
          <Server className="w-3 h-3 text-ink-subtle" />
          <span>128 Düğüm Aktif</span>
        </span>
      </div>

      {/* Dinamik Sinyal Dalga Formu (SVG Waveform) */}
      <div className="h-12 w-full overflow-hidden flex items-end">
        <svg
          viewBox="0 0 300 48"
          className="w-full h-full text-blue-400/80 stroke-current fill-none stroke-[1.75]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 0 24 Q 25 10 50 24 T 100 24 T 150 6 T 200 38 T 250 18 T 300 24"
            className="animate-pulse-subtle"
          />
        </svg>
      </div>

      <div className="flex items-center justify-between text-[11px] font-mono text-ink-subtle pt-2 border-t border-hairline/60 mt-1">
        <span>Gecikme: 4.2ms</span>
        <span className="text-emerald-400 font-medium">99.998% Uptime</span>
      </div>
    </div>
  );
};
