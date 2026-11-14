"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

interface HeroMedallionVideoProps {
  className?: string;
}

export function HeroMedallionVideo({ className = "" }: HeroMedallionVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // prefers-reduced-motion kontrolü
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={`relative inline-flex flex-col items-center select-none ${className}`}
      aria-label="Abdullah Keklik 3D Heykelsi Madalyon Sekansı"
    >
      {/* Lüks Mimari & Editoryal Muhafaza Kasası (Museum Specimen Housing) */}
      <div className="relative p-6 sm:p-8 md:p-10 flex items-center justify-center">
        {/* 1. Dört Köşe Mimari Zanaat Braketleri (L-Brackets) */}
        <div
          className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/60 transition-transform duration-500 hover:scale-110"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/60 transition-transform duration-500 hover:scale-110"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/60 transition-transform duration-500 hover:scale-110"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/60 transition-transform duration-500 hover:scale-110"
          aria-hidden="true"
        />

        {/* 2. Dış Konsantrik Yörünge Kadranı (Dashed Precision Orbit) */}
        <div
          className="absolute inset-2 sm:inset-3 md:inset-4 rounded-full border border-dashed border-ink/20 pointer-events-none animate-[spin_80s_linear_infinite]"
          aria-hidden="true"
        />

        {/* 3. İnce Dairesel Kılavuz Çizgisi */}
        <div
          className="absolute inset-5 sm:inset-6 md:inset-7 rounded-full border border-hairline/80 pointer-events-none"
          aria-hidden="true"
        />

        {/* 4. Kardinal Pusula Noktaları (Kına / Terracotta Vurgular) */}
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-xs"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-xs"
          aria-hidden="true"
        />
        <div
          className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-xs"
          aria-hidden="true"
        />
        <div
          className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-xs"
          aria-hidden="true"
        />

        {/* 5. Üst Editoryal İndeks Rozeti */}
        <div className="absolute -top-3 left-8 px-3 py-1 rounded bg-surface border border-hairline shadow-xs flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-ink-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
          <span>SPECIMEN {"//"} 3D-TOTEM</span>
        </div>

        {/* 6. Ana Madalyon Gövdesi & Çift Katmanlı Zanaat Bezel Çerçevesi */}
        <div
          role="button"
          tabIndex={0}
          onClick={togglePlayback}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              togglePlayback();
            }
          }}
          title="3D madalyon döngüsünü duraklatmak veya oynatmak için tıklayın"
          className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-full p-2.5 md:p-3 bg-surface/90 border border-hairline ring-1 ring-primary/40 shadow-[0_25px_60px_-15px_rgba(28,22,19,0.2)] hover:shadow-[0_30px_70px_-10px_rgba(200,83,43,0.3)] transition-all duration-500 group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary"
        >
          {/* İç Donanım İvmeli Video Maskesi: Taşma Yapmayan Sıfır Hata Daire */}
          <div
            className="relative w-full h-full rounded-full overflow-hidden bg-canvas-alt shadow-inner"
            style={{
              WebkitMaskImage: "-webkit-radial-gradient(white, black)",
              maskImage: "radial-gradient(circle, white 100%, transparent 100%)",
              transform: "translateZ(0)",
              isolation: "isolate",
            }}
          >
            <video
              ref={videoRef}
              src="/3D_medallion_animation_sequence_1ec22850_1080p.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              tabIndex={-1}
              className="w-full h-full object-cover scale-[1.05] select-none pointer-events-none group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            />

            {/* Zanaat Cam & Işık Kırılması Katmanı */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-tr from-primary/10 via-transparent to-amber/15 opacity-40 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-300"
              aria-hidden="true"
            />
          </div>

          {/* Canlılık ve Durum Rozeti */}
          <div
            className={`absolute bottom-3 right-3 md:bottom-5 md:right-5 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-canvas shadow-md transition-colors duration-300 ${
              isPlaying ? "bg-amber" : "bg-ink-muted"
            }`}
            title={isPlaying ? "Canlı 3D Döngü Aktif" : "Duraklatıldı"}
          />
        </div>

        {/* 7. Alt Teknik Koordinat Rozeti */}
        <div className="absolute -bottom-3 right-8 px-3 py-1 rounded bg-surface border border-hairline shadow-xs text-[10px] font-mono text-ink-muted tracking-wider">
          <span className="text-primary font-medium">360° DYNAMIC</span> {"//"} URFA 37°09&apos;N
        </div>
      </div>
    </div>
  );
}
