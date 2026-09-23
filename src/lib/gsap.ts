"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  gsap.defaults({ ease: "power3.out", duration: 0.9 });
}

export const EASE = {
  out: "power3.out",
  soft: "power2.out",
  expo: "expo.out",
  inOut: "power3.inOut",
} as const;

/** Media queries shared by every animation so desktop/mobile/reduced-motion stay consistent. */
export const MQ = {
  desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
  mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
  motion: "(prefers-reduced-motion: no-preference)",
  reduce: "(prefers-reduced-motion: reduce)",
  finePointer: "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
} as const;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia(MQ.reduce).matches;

export { gsap, ScrollTrigger, useGSAP };
