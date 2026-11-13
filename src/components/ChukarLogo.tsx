import type React from "react";

interface ChukarLogoProps {
  className?: string;
  size?: number;
}

export function ChukarLogo({ className = "", size = 36 }: ChukarLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Kınalı Keklik Geometrik Logosu"
      role="img"
    >
      {/* Gövde ve Kanat - Sıcak Espresso / Maun Geometrisi */}
      <path
        d="M12 36C12 36 15 22 26 18C34 15 38 20 38 20C38 20 34 26 27 28C20 30 16 36 12 36Z"
        fill="#1C1613"
      />
      {/* Kınalı Gerdan ve Kanat Çizgisi - Pişmiş Toprak / Terracotta */}
      <path
        d="M26 18C28 14 34 10 39 12C41 12.8 42 14.5 40 16.5C37.5 19 32 20 26 18Z"
        fill="#C8532B"
      />
      {/* Baş ve Tepe Geometrisi */}
      <circle cx="36" cy="14" r="2.5" fill="#FAF6F0" />
      <circle cx="36.5" cy="13.8" r="1.2" fill="#1C1613" />
      {/* Kehribar Gaga Vurgusu */}
      <path d="M41 13L45 15L40.5 16.5L41 13Z" fill="#D88934" />
      {/* Kuyruk Kılcal Çizgileri */}
      <path d="M12 36L6 40M13 33L8 38" stroke="#85776B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
