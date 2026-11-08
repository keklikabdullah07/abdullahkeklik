"use client";

import { Sliders, Sparkles } from "lucide-react";
import type React from "react";
import { useState } from "react";

export const KinesisUIRef: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderVal, setSliderVal] = useState<number>(85);

  return (
    <div className="w-full mt-4 p-3.5 rounded-md border border-hairline bg-surface-sunken/80">
      <div className="flex items-center justify-between text-xs font-mono text-ink-subtle mb-3">
        <span className="flex items-center gap-1.5 text-brand">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Dokunsal UI Primitifleri</span>
        </span>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand/10 text-brand border border-brand/20">
          60 FPS Spring
        </span>
      </div>

      <div className="space-y-3">
        {/* İnteraktif Tab Geçişi */}
        <div className="flex p-0.5 rounded-lg bg-surface border border-hairline">
          {["Pürüzsüz", "Fiziksel", "Manyetik"].map((label, idx) => (
            <button
              key={label}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`flex-1 py-1 text-[11px] font-medium rounded-md transition-all ${
                activeTab === idx
                  ? "bg-brand text-canvas font-semibold shadow-sm"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Canlı Slider */}
        <div className="flex items-center gap-2 pt-1">
          <Sliders className="w-3.5 h-3.5 text-ink-subtle shrink-0" aria-hidden="true" />
          <input
            type="range"
            min="20"
            max="100"
            value={sliderVal}
            onChange={(e) => setSliderVal(Number(e.target.value))}
            aria-label="Yay Sertliği Ayarı"
            className="w-full h-1.5 bg-surface rounded-lg appearance-none cursor-pointer accent-brand"
          />
          <span className="font-mono text-[10px] text-brand w-7 text-right">{sliderVal}%</span>
        </div>
      </div>
    </div>
  );
};
