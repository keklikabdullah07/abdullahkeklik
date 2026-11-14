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
      className={`relative inline-flex flex-col items-center group select-none ${className}`}
      aria-label="Abdullah Keklik 3D Heykelsi Madalyon Sekansı"
    >
      {/* 3D Video Çerçevesi */}
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
        className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-64 xl:h-64 rounded-full p-1.5 md:p-2 bg-surface/80 border border-hairline ring-1 ring-primary/30 shadow-warm hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {/* Yuvarlak Video Maskesi */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-canvas-alt shadow-inner">
          <video
            ref={videoRef}
            src="/3D_medallion_animation_sequence_1ec22850_1080p.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
            className="w-full h-full object-cover scale-105 select-none pointer-events-none"
          />

          {/* Işık Kırılması / Zanaat Vurgusu Katmanı */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-tr from-primary/10 via-transparent to-amber/15 opacity-60 mix-blend-overlay group-hover:opacity-80 transition-opacity duration-300"
            aria-hidden="true"
          />
        </div>

        {/* Canlılık ve Durum Rozeti */}
        <div
          className={`absolute bottom-1 right-1 md:bottom-2 md:right-2 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 border-canvas transition-colors duration-300 ${
            isPlaying ? "bg-amber" : "bg-ink-muted"
          }`}
          title={isPlaying ? "Canlı 3D Döngü Aktif" : "Duraklatıldı"}
        />
      </div>

      {/* Editoryal Mikro-Etiket */}
      <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-ink-muted uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
        <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
        <span>3D ARŞİV TOTEMİ</span>
      </div>
    </div>
  );
}
