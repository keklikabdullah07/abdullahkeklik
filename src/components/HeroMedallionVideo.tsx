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
      {/* 3D Video Çerçevesi — Donanım İvmeli Taşırma Koruması ve Perspektif Payı */}
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
        style={{
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          maskImage: "radial-gradient(circle, white 100%, transparent 100%)",
          transform: "translateZ(0)",
          isolation: "isolate",
        }}
        className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden border-2 border-hairline/80 ring-2 ring-primary/40 shadow-warm hover:shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary bg-canvas-alt"
      >
        {/* Video: scale-100 ile madalyonun 3D dönüş açısındaki perspektif payı korunur, daire dışına taşmaz */}
        <video
          ref={videoRef}
          src="/3D_medallion_animation_sequence_1ec22850_1080p.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
          className="w-full h-full object-cover scale-100 select-none pointer-events-none"
        />

        {/* Kenar Işık Kırılması & İnce Çerçeve Vurgusu Katmanı */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-inset ring-white/10 bg-gradient-to-tr from-primary/10 via-transparent to-amber/15 opacity-60 mix-blend-overlay group-hover:opacity-80 transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* Canlılık ve Durum Rozeti */}
        <div
          className={`absolute bottom-3 right-3 md:bottom-5 md:right-5 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-canvas shadow-md transition-colors duration-300 ${
            isPlaying ? "bg-amber" : "bg-ink-muted"
          }`}
          title={isPlaying ? "Canlı 3D Döngü Aktif" : "Duraklatıldı"}
        />
      </div>

      {/* Editoryal Mikro-Etiket */}
      <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-ink-muted uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
        <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
        <span>3D HEYKELSİ DİJİTAL MADALYON</span>
      </div>
    </div>
  );
}
