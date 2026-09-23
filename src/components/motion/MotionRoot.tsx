"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, MQ, ScrollTrigger, useGSAP } from "@/lib/gsap";

/**
 * Global motion setup, mounted once in the root layout:
 * - flags <html> so CSS knows GSAP is live (enables image-reveal overlays)
 * - renders the contextual cursor ("Watch", "Listen") for elements with data-cursor,
 *   only on fine-pointer desktops without reduced motion.
 */
export default function MotionRoot() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    ScrollTrigger.config({ ignoreMobileResize: true });
  }, []);

  useGSAP(() => {
    const el = cursorRef.current;
    if (!el) return;
    const mm = gsap.matchMedia();

    mm.add(MQ.finePointer, () => {
      document.documentElement.classList.add("has-cursor");
      gsap.set(el, { scale: 0 });
      const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });
      let active: Element | null = null;

      const onMove = (e: PointerEvent) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };
      const onOver = (e: PointerEvent) => {
        const target = (e.target as Element).closest?.("[data-cursor]");
        if (target === active) return;
        active = target;
        if (target) {
          setLabel(target.getAttribute("data-cursor") ?? "");
          gsap.set(el, { x: e.clientX, y: e.clientY });
          gsap.to(el, { scale: 1, autoAlpha: 1, duration: 0.4, ease: "power3.out", overwrite: "auto" });
        } else {
          gsap.to(el, { scale: 0, autoAlpha: 0, duration: 0.3, ease: "power2.out", overwrite: "auto" });
        }
      };

      const hide = () => {
        active = null;
        gsap.to(el, { scale: 0, autoAlpha: 0, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      };
      const onOut = (e: PointerEvent) => {
        // Leaving the window or crossing into an iframe (YouTube) should release the cursor.
        if (!e.relatedTarget) hide();
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerover", onOver, { passive: true });
      document.addEventListener("pointerout", onOut, { passive: true });
      return () => {
        window.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerover", onOver);
        document.removeEventListener("pointerout", onOut);
        document.documentElement.classList.remove("has-cursor");
      };
    });

    return () => mm.revert();
  });

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] -ml-11 -mt-11 hidden h-22 w-22 items-center justify-center rounded-full bg-gold text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-ink opacity-0 invisible md:flex"
    >
      {label}
    </div>
  );
}
