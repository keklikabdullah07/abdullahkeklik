# 🏆 04 — Awwwards Kreatif Frontend ve Hareket Mimarisi (SOTD Master Guide)

> **Amaç:** Yapay zekanın ürettiği sıradan, statik, mor degrade ve 3 kutucuklu klişe arayüzleri (AI Slop) tarihe gömmek; **Awwwards (Site of the Day / Developer Award)** seviyesinde akıcı, yaşayan, fizik tabanlı ve sinematik deneyimler inşa etmek.
>
> **Tasarım Sözlüğü Bağlantısı:** `DESIGN.md` § 1 `EXPERIENCE` / `PERSUADE` modları ve `repos/impeccable/skill/reference/overdrive.md` ile birlikte çalışır.

---

## 🧭 1. Standart AI Sitesi vs. Awwwards Sitesi Arasındaki 6 Büyük Fark

| # | Standart AI / Şablon Site (Vasat) | Awwwards Seviyesi Site (Ödüllü) |
|---|---|---|
| **1. Kaydırma (Scroll)** | Tarayıcının varsayılan, takılarak kayan native scroll'u | **Lenis:** Momentum ve kütle hissi veren fizik tabanlı pürüzsüz kaydırma |
| **2. Tipografi** | Statik H1 metni veya basit fade-in | **Kinetic Typography:** `SplitType` ile harf/kelime bazlı maskeli (clip-path) reveal |
| **3. Doku & Derinlik** | Düz, steril CSS renkleri (`#0a0a0a`) veya mor degradeler | **Organik Katman:** Hafif SVG Noise (gren) filtresi, ince cam kenarlıklar (`border-white/10`) |
| **4. İmleç & Fizik** | Standart tarayıcı oku ve CSS `:hover` | **Manyetik Butonlar & Spotlight:** Fareye doğru esneyen butonlar, imleç odaklı ışıklar |
| **5. Medya Geçişleri** | Basit `rounded-lg` görseller | **Parallaks & Clip Reveal:** Kaydırıldıkça perde gibi açılan ve scale küçülen görseller |
| **6. Sahne Koreografisi**| Sayfanın cart diye ekrana gelmesi | **Preloader & Curtain:** Ekranı açan yüzdelik sayaç, sahne sahne açılan hero zaman çizgisi |

---

## 🛠️ 2. Modern Kreatif Frontend Yığını (Tech Stack)

```
Awwwards Frontend Yığını
├── 🌊 Akış (Physics)          → Lenis (@studio-freight/react-lenis)
├── ⏱️ Zaman Çizgisi (Motion)   → GSAP + ScrollTrigger
├── 🔤 Kinetik Tipografi        → SplitType (veya GSAP SplitText)
├── 🧩 Hazır Awwwards Blokları  → 21st.dev + Aceternity UI + Magic UI
├── 🎞️ Atmosfer                → SVG Turbulence Noise / WebGL Shaders
└── 🎨 Tipografi Ailesi         → Clash Display, Syne, Cabinet Grotesk, PP Neue Montreal
```

---

## 📦 3. Kopyala-Çalıştır Üretim Mimarisi (Production Blueprints)

Ajan veya geliştirici bir `EXPERIENCE` yüzeyi oluştururken aşağıdaki hazır mimari blokları doğrudan kullanır:

### 3.1. Lenis + GSAP Senkronize Smooth Scroll (`components/SmoothScroll.tsx`)

> **Kritik Kural:** Lenis ve GSAP ScrollTrigger'ın `requestAnimationFrame` döngüleri birbiriyle kilitli çalışmalıdır. Aksi halde scroll animasyonlarında titreme (jitter) olur.

```tsx
"use client";

import React, { useEffect } from "react";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    function update(time: number) {
      ScrollTrigger.update();
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,        // Ne kadar düşükse kaydırma o kadar lüks/ağır hissettirir (0.05 - 0.1)
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.0,
      }}
    >
      {children}
    </ReactLenis>
  );
}
```

---

### 3.2. Kinetik Başlık: Maskeli Harf Reveal (`components/KineticHeading.tsx`)

> Harfler alttan yukarı doğru maskeli bir perdenin arkasından süzülerek çıkar.

```tsx
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface KineticHeadingProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function KineticHeading({ children, className = "", delay = 0 }: KineticHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    // Metni kelime ve harflere böl
    const split = new SplitType(headingRef.current, {
      types: "lines,words,chars",
      tagName: "span",
    });

    // Her satırı overflow-hidden yap (maskeleme perdesi)
    split.lines?.forEach((line) => {
      line.style.overflow = "hidden";
      line.style.display = "inline-block";
    });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      y: "110%",
      rotateZ: 4,
      opacity: 0,
      duration: 1.1,
      stagger: 0.02,
      ease: "power4.out",
      delay,
    });

    return () => {
      split.revert();
    };
  }, [delay]);

  return (
    <h2 ref={headingRef} className={`inline-block select-none ${className}`}>
      {children}
    </h2>
  );
}
```

---

### 3.3. Analog Doku: Film Greni Katmanı (`components/NoiseOverlay.tsx`)

> Düz dijital CSS renklerini kırıp gerçek bir editoryal baskı veya sinema perdesi hissi verir. Sıfır performans maliyetiyle çalışır.

```tsx
export default function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}
```

---

### 3.4. Manyetik Buton (`components/MagneticButton.tsx`)

> Fare butona yaklaştığında buton hafifçe imlece doğru çekilir (lerp fizik hissi).

```tsx
"use client";

import React, { useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Butonu merkeze göre %35 oranında fareye çek
    gsap.to(buttonRef.current, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    // Fareden çıkıldığında orijinal yerine yay gibi geri dön
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center transition-colors will-change-transform ${className}`}
    >
      {children}
    </button>
  );
}
```

---

### 3.5. İmleç Odaklı Spotlight Kartı (`components/SpotlightCard.tsx`)

> 3'lü sıkıcı gri kutuların yerine, kartın üzerinde farenin pozisyonuna göre parlayan zarif bir ışık spotu.

```tsx
"use client";

import React, { useRef, useState } from "react";

export default function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 p-8 backdrop-blur-xl ${className}`}
    >
      {/* Dinamik Işık Hüzmesi */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
```

---

## 🎨 4. Tipografi ve Karakter Eşleşmeleri

Awwwards tasarımlarında Arial, Inter veya Roboto gibi overused fontlar **YASAKTIR**. Karakterli bir tipografi hiyerarşisi zorunludur:

1. **Display / Hero (Cesur & Asimetrik):**
   * *Clash Display:* Geometrik, modern, fütüristik.
   * *Syne:* Organik, deneysel, lüks moda / kreatif ajans hissi.
   * *Cabinet Grotesk:* Ağır, endüstriyel ve kendinden emin.
2. **Body / Sayaç (Editoryal & Hassas):**
   * *PP Neue Montreal / General Sans:* Okunaklı, editoryal İsviçre disiplini.
   * *JetBrains Mono / Space Mono:* Teknik detaylar, koordinatlar ve 11px etiketler için.

---

## 🚀 5. Ajan İçin Awwwards İnşa Protokolü (5 Adım)

Kullanıcı "Awwwards seviyesinde bir sayfa/bölüm yap" dediğinde yapay zeka şu adımları işletir:

1. **Konsept ve Tekil Büyü Anı (Focal Sequence):** Sayfanın "Vay be!" dedirtecek ana sahnesi belirlenir (Örn: Hero'da farenin hareketine göre süzülen 3D/parallaks katmanlar).
2. **Akışın Kurulması:** Root layout'a `SmoothScroll` (Lenis) ve `NoiseOverlay` giydirilir.
3. **Kinetik Tipografi:** Büyük başlıklar `KineticHeading` ile bölünerek maskeli giriş efektine bağlanır.
4. **Mikro Etkileşimler:** Aksiyon butonlarına `MagneticButton`, vitrin kartlarına `SpotlightCard` giydirilir.
5. **İmpeccable Cilası:** Son aşamada `/impeccable polish` ve `/impeccable overdrive` direktifleriyle responsive kırılmalar ve son mikro detaylar kilitlenir.
