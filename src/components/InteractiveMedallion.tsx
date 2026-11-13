"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

interface InteractiveMedallionProps {
  size?: number;
  className?: string;
}

export function InteractiveMedallion({ size = 44, className = "" }: InteractiveMedallionProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Otomatik ritmik geçiş (Kullanıcı hover yapmadığı sürece her 4.5s'de döner)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered]);

  const toggleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Abdullah Keklik Monogram ve Portre Madalyonu (Çevirmek için tıklayın)"
      onClick={toggleFlip}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleFlip();
        }
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        setIsFlipped((prev) => !prev);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      className={`relative cursor-pointer select-none rounded-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
      style={{
        width: size,
        height: size,
        perspective: "1000px",
      }}
      title="Tıklayarak veya üzerine gelerek madalyonu çevirebilirsiniz"
    >
      {/* 3D Dönen Madalyon Gövdesi */}
      <div
        className="w-full h-full relative rounded-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-warm hover:shadow-md"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Ön Yüz: Metalik AK Monogramı (İsli Gece Toprağı Zemininde Gümüş Işıltı) */}
        <div
          className="absolute inset-0 w-full h-full rounded-full bg-canvas-alt border border-hairline/80 flex items-center justify-center p-2 overflow-hidden ring-1 ring-primary/40 group-hover:ring-primary transition-colors"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/logo-monogram.png"
              alt="Abdullah Keklik Monogram İmzası"
              width={size}
              height={size}
              className="object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>
        </div>

        {/* Arka Yüz: 3D Animasyon Portre */}
        <div
          className="absolute inset-0 w-full h-full rounded-full bg-surface border border-hairline/80 flex items-center justify-center overflow-hidden ring-1 ring-primary/30 group-hover:ring-primary/60 transition-colors"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src="/avatar.webp"
              alt="Abdullah Keklik 3D Portre"
              fill
              sizes={`${size}px`}
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </div>

      {/* Taktil Parlama / Canlılık İndikatörü */}
      <div
        className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-amber border-2 border-canvas pointer-events-none transition-transform duration-300 group-hover:scale-125"
        title="Canlı Etkileşimli Madalyon"
      />
    </div>
  );
}
