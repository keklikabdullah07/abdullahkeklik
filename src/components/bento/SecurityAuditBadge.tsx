"use client";

import { KeyRound, Lock, ShieldCheck } from "lucide-react";
import type React from "react";

export const SecurityAuditBadge: React.FC = () => {
  return (
    <div className="w-full mt-4 p-3.5 rounded-md border border-hairline bg-surface-sunken/80 flex flex-col justify-between">
      <div className="flex items-center justify-between text-xs font-mono text-ink-subtle mb-3">
        <span className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Denetim & Güvenlik Kalkanı</span>
        </span>
        <span className="text-[10px] text-ink-muted">ISO 27001 / PSD2</span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
        <div className="flex items-center gap-2 p-2 rounded bg-surface border border-hairline">
          <Lock className="w-3.5 h-3.5 text-brand shrink-0" />
          <div>
            <div className="text-ink font-medium">Zero Trust</div>
            <div className="text-[10px] text-ink-subtle">mTLS / JWT</div>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 rounded bg-surface border border-hairline">
          <KeyRound className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <div>
            <div className="text-ink font-medium">Idempotent</div>
            <div className="text-[10px] text-ink-subtle">Sıfır Çift Harcama</div>
          </div>
        </div>
      </div>
    </div>
  );
};
