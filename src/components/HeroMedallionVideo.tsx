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
      {/* Çare 1: Dairesiz, Sert Çerçeveden Arındırılmış Havada Asılı 3D Heykel */}
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
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[460px] xl:h-[460px] flex items-center justify-center cursor-pointer focus:outline-none group"
      >
        {/* Arkada Heykelsi Işık Aurası & Zemin Kaynaşması */}
        <div
          className="absolute inset-6 rounded-full bg-gradient-to-tr from-ink/10 via-primary/10 to-amber/10 blur-3xl pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity duration-700"
          aria-hidden="true"
        />

        {/* Video Maskesi: Yumuşak Kademeli Radyal Sönümleme (Sert Kesim ve Taşma Yok) */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105 active:scale-95"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle at center, black 52%, rgba(0,0,0,0.85) 64%, rgba(0,0,0,0.3) 74%, transparent 84%)",
            maskImage:
              "radial-gradient(circle at center, black 52%, rgba(0,0,0,0.85) 64%, rgba(0,0,0,0.3) 74%, transparent 84%)",
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
            className="w-full h-full object-cover scale-[1.04] select-none pointer-events-none"
          />
        </div>

        {/* Canlılık ve Durum Rozeti */}
        <div
          className={`absolute bottom-4 right-4 md:bottom-8 md:right-8 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 border-canvas shadow-md transition-colors duration-300 ${
            isPlaying ? "bg-amber" : "bg-ink-muted"
          }`}
          title={isPlaying ? "Canlı 3D Döngü Aktif" : "Duraklatıldı"}
        />
      </div>

      {/* Editoryal Mikro-Etiket */}
      <div className="mt-2 flex items-center gap-2 text-[11px] font-mono text-ink-muted uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
        <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
        <span>3D HEYKELSİ DİJİTAL MADALYON</span>
      </div>
    </div>
  );
}
