"use client";

import { useRef } from "react";
import { EASE, gsap, MQ, ScrollTrigger, useGSAP } from "@/lib/gsap";

// Module scope survives client navigations, so only route changes animate —
// the first load is handled by each page's own entrance (e.g. the hero).
let hasNavigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldAnimate = useRef(hasNavigated);

  useGSAP(
    () => {
      hasNavigated = true;
      if (!shouldAnimate.current) return;
      const mm = gsap.matchMedia();
      mm.add(MQ.motion, () => {
        gsap.fromTo(
          ref.current,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: EASE.out,
            clearProps: "transform,opacity,visibility",
            onComplete: () => ScrollTrigger.refresh(),
          },
        );
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return <div ref={ref}>{children}</div>;
}
