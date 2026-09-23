"use client";

import { RefObject } from "react";
import { gsap, MQ, useGSAP } from "@/lib/gsap";

export type RevealContext = {
  tl: gsap.core.Timeline;
  /** Scoped selector: q("[data-x]") only matches inside the section. */
  q: (selector: string) => Element[];
  /** First scoped match, or null. */
  one: (selector: string) => Element | null;
  isMobile: boolean;
};

type Options = {
  start?: string;
  /** Extra dependencies that should rebuild the timeline. */
  dependencies?: unknown[];
};

/**
 * Builds one scroll-triggered entrance timeline per section. Runs once, is
 * skipped entirely under prefers-reduced-motion (CSS keeps content visible),
 * and is reverted automatically on unmount so no ScrollTriggers leak.
 */
export function useRevealTimeline(
  scope: RefObject<HTMLElement | null>,
  build: (ctx: RevealContext) => void,
  { start = "top 78%", dependencies = [] }: Options = {},
) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add({ isDesktop: MQ.desktop, isMobile: MQ.mobile }, (ctx) => {
        const { isDesktop, isMobile } = ctx.conditions as { isDesktop: boolean; isMobile: boolean };
        if (!isDesktop && !isMobile) return;

        const q = gsap.utils.selector(root) as (s: string) => Element[];
        const tl = gsap.timeline({ scrollTrigger: { trigger: root, start, once: true } });
        build({ tl, q, one: (s) => q(s)[0] ?? null, isMobile });
        // Mobile gets the same choreography, just quicker.
        if (isMobile) tl.timeScale(1.25);
      });

      return () => mm.revert();
    },
    { scope, dependencies },
  );
}
