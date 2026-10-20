"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

const INTERVAL_MS = 10_000;

export function HeroSlideshow() {
  const images = siteConfig.assets.backgrounds;
  const fallback = siteConfig.assets.fallbackBackground;
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const prefersReducedMotion = usePrefersReducedMotion();
  const timerRef = useRef<number | null>(null);

  // Track which background images have finished loading so we never flash a blank frame.
  useEffect(() => {
    images.forEach((src, i) => {
      const img = new window.Image();
      img.onload = () => setLoaded((prev) => ({ ...prev, [i]: true }));
      img.onerror = () => {
        // Silent fail; overlay gradient still keeps text readable.
        setLoaded((prev) => ({ ...prev, [i]: false }));
      };
      img.src = src;
    });
  }, [images]);

  // 10-second rotation with crossfade. Paused when reduced motion is preferred.
  useEffect(() => {
    if (prefersReducedMotion) return;
    if (images.length <= 1) return;

    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, INTERVAL_MS);

    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [images.length, prefersReducedMotion]);

  const current = images[index] ?? fallback;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out will-change-[opacity]"
          style={{
            backgroundImage: `url(${loaded[i] ? src : fallback})`,
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}

      {/* Layered dark overlays so white text stays readable on any image */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-ink-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.18),_transparent_60%)]" />

      {/* Fallback element ensures no blank hero before first paint */}
      {!loaded[index] ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${current})` }}
        />
      ) : null}
    </div>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return reduced;
}