"use client";

import { useRef } from "react";
import { fadeIn, fadeUp, textReveal } from "@/lib/animation/presets";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useRevealTimeline } from "@/hooks/useRevealTimeline";
import SectionLabel from "@/components/motion/SectionLabel";
import SplitWords from "@/components/motion/SplitWords";
import { booking } from "@/data/site";

export default function Booking() {
  const rootRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useMagnetic(ctaRef, 0.28);

  useRevealTimeline(rootRef, ({ tl, one }) => {
    fadeIn(tl, one("[data-booking-glow]"), { duration: 1.6 });
    fadeUp(tl, one("[data-section-label]"), { duration: 0.7, distance: 16 }, "<0.15");
    textReveal(tl, one("[data-booking-heading]"), {}, "<0.1");
    fadeUp(tl, one("[data-booking-copy]"), { duration: 0.85, distance: 22 }, "<0.28");
    fadeUp(tl, one("[data-booking-cta]"), { duration: 0.8, distance: 20 }, "<0.12");
    fadeUp(tl, "[data-booking-decor]", { duration: 1, distance: 12, stagger: 0.1 }, "<0.2");
  });

  return (
    <section
      id="booking"
      ref={rootRef}
      className="relative overflow-hidden bg-ink px-5 py-20 text-white md:px-16 md:py-36 lg:px-32"
    >
      <div
        data-booking-glow
        data-reveal
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[80vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,178,106,0.16),transparent_62%)] motion-safe:animate-drift"
      />
      <div
        data-booking-decor
        data-reveal
        aria-hidden
        className="pointer-events-none absolute right-[12%] top-16 hidden h-24 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent md:block"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <SectionLabel index="—" tone="dark" className="justify-center">
          Invitation
        </SectionLabel>
        <h2
          data-reveal
          data-booking-heading
          className="mt-6 font-display text-[2.75rem] font-bold uppercase leading-[0.95] tracking-wide md:text-7xl"
        >
          <SplitWords text="Bookings" />
        </h2>
        <p data-reveal data-booking-copy className="mx-auto mt-6 max-w-md text-lg font-light text-white/65 md:text-xl">
          {booking.location}
        </p>
        <p data-reveal data-booking-copy className="mx-auto mt-2 font-sans text-xs uppercase tracking-[0.28em] text-white/40">
          Bookings
        </p>

        <div data-reveal data-booking-cta className="mt-10">
          <a
            ref={ctaRef}
            href={`mailto:${booking.email}`}
            className="group inline-flex w-full max-w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-ink transition-[background-color,color,transform] duration-300 hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold active:scale-[0.97] sm:w-auto sm:gap-4 sm:px-8 sm:text-xs sm:tracking-[0.2em]"
          >
            <span className="min-w-0 break-all">{booking.email}</span>
            <span aria-hidden className="transition-transform duration-500 ease-cinematic group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
