"use client";

import { RefObject } from "react";
import { gsap, MQ, useGSAP } from "@/lib/gsap";

/** Magnetic pull toward the cursor. Desktop fine-pointer only; reserve for primary CTAs. */
export function useMagnetic(target: RefObject<HTMLElement | null>, strength = 0.3) {
  useGSAP(() => {
    const el = target.current;
    if (!el) return;
    const mm = gsap.matchMedia();

    mm.add(MQ.finePointer, () => {
      const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
      return () => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
        gsap.set(el, { x: 0, y: 0 });
      };
    });

    return () => mm.revert();
  });
}
