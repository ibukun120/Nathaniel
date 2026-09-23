"use client";

import { RefObject } from "react";
import { gsap, MQ, useGSAP } from "@/lib/gsap";

type Options = {
  /** Travel in yPercent across the trigger's scroll range on desktop. Negative moves up. */
  yPercent?: number;
  /** Fraction of the desktop travel used on mobile. */
  mobileFactor?: number;
  /** Element whose scroll range drives the effect (defaults to the target's parent). */
  trigger?: RefObject<HTMLElement | null>;
};

/** Subtle scrubbed parallax. Disabled under reduced motion; lighter on mobile. */
export function useParallax(
  target: RefObject<HTMLElement | null>,
  { yPercent = 10, mobileFactor = 0.4, trigger }: Options = {},
) {
  useGSAP(() => {
    const el = target.current;
    if (!el) return;
    const mm = gsap.matchMedia();

    mm.add({ isDesktop: MQ.desktop, isMobile: MQ.mobile }, (ctx) => {
      const { isDesktop, isMobile } = ctx.conditions as { isDesktop: boolean; isMobile: boolean };
      if (!isDesktop && !isMobile) return;
      const travel = isMobile ? yPercent * mobileFactor : yPercent;

      gsap.fromTo(
        el,
        { yPercent: -travel / 2 },
        {
          yPercent: travel / 2,
          ease: "none",
          scrollTrigger: {
            trigger: trigger?.current ?? el.parentElement ?? el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => mm.revert();
  });
}
