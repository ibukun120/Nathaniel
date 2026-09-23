"use client";

import { RefObject } from "react";
import { EASE, gsap, MQ, ScrollTrigger, useGSAP } from "@/lib/gsap";

type Options = {
  stagger?: number;
  distance?: number;
  start?: string;
};

/**
 * Reveals repeated items (grids, rows) in batches as they scroll into view.
 * ScrollTrigger.batch shares work across items instead of one timeline each.
 */
export function useStaggerReveal(
  scope: RefObject<HTMLElement | null>,
  selector: string,
  { stagger = 0.08, distance = 40, start = "top 88%" }: Options = {},
) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add({ isDesktop: MQ.desktop, isMobile: MQ.mobile }, (ctx) => {
        const { isDesktop, isMobile } = ctx.conditions as { isDesktop: boolean; isMobile: boolean };
        if (!isDesktop && !isMobile) return;
        const items = gsap.utils.toArray<HTMLElement>(selector, root);
        if (!items.length) return;
        const d = isMobile ? distance * 0.6 : distance;

        gsap.set(items, { autoAlpha: 0, y: d });
        ScrollTrigger.batch(items, {
          start,
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: isMobile ? 0.7 : 0.9,
              ease: EASE.out,
              stagger: isMobile ? Math.min(stagger, 0.06) : stagger,
              overwrite: true,
            }),
        });
      });

      return () => mm.revert();
    },
    { scope },
  );
}
