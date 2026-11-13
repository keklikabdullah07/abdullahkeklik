"use client";

import Lenis from "lenis";
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface LenisContextValue {
  lenis: Lenis | null;
  scrollTo: (
    target: string | HTMLElement | number,
    options?: {
      offset?: number;
      duration?: number;
      immediate?: boolean;
    },
  ) => void;
}

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  scrollTo: () => {},
});

export function useLenis() {
  return useContext(LenisContext);
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Reduced motion kontrolü (A11y ilkesi)
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const instance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      autoResize: true,
    });

    lenisRef.current = instance;
    setLenis(instance);

    let rafId: number;
    function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global anchor (#) tıklamalarını yakala ve Lenis ile yumuşak kaydır
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href?.startsWith("#") && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          instance.scrollTo(element as HTMLElement, {
            offset: -32,
            duration: 1.4,
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  const scrollTo = useCallback(
    (
      target: string | HTMLElement | number,
      options?: {
        offset?: number;
        duration?: number;
        immediate?: boolean;
      },
    ) => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, options);
      } else if (typeof target === "string" && target.startsWith("#")) {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  );

  return <LenisContext.Provider value={{ lenis, scrollTo }}>{children}</LenisContext.Provider>;
}
