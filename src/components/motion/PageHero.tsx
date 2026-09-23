"use client";

import { useRef } from "react";
import Image from "next/image";
import { EASE, gsap, MQ, useGSAP } from "@/lib/gsap";
import SplitWords from "@/components/motion/SplitWords";

type Props = {
  src: string;
  title: string;
  kicker?: string;
  children?: React.ReactNode;
};

export default function PageHero({ src, title, kicker, children }: Props) {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ isDesktop: MQ.desktop, isMobile: MQ.mobile }, (ctx) => {
        const { isDesktop, isMobile } = ctx.conditions as { isDesktop: boolean; isMobile: boolean };
        if (!isDesktop && !isMobile) return;

        const intro = gsap.timeline({ defaults: { ease: EASE.out } });
        intro
          .fromTo(
            "[data-page-media]",
            { autoAlpha: 0, scale: 1.08 },
            { autoAlpha: 1, scale: 1, duration: isMobile ? 1.4 : 2, ease: EASE.expo },
          )
          .fromTo("[data-page-kicker]", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.3)
          .set("[data-page-title]", { autoAlpha: 1 }, 0.45)
          .fromTo(
            "[data-page-title] [data-word]",
            { yPercent: 110 },
            { yPercent: 0, duration: 1.1, stagger: 0.08, ease: EASE.expo },
            0.45,
          )
          .fromTo("[data-page-extra]", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.85);

        gsap.to("[data-page-media]", {
          yPercent: isMobile ? 8 : 16,
          ease: "none",
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
        });
      });
      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="relative h-[58svh] min-h-[22rem] w-full overflow-hidden bg-ink text-white md:h-[80svh] md:min-h-[480px]"
    >
      <div data-page-media data-reveal className="absolute inset-0">
        <Image src={src} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div aria-hidden className="absolute inset-0 bg-black/60" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.7)_100%)]"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/85 to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-end px-5 pb-12 text-center md:flex-row md:items-end md:justify-between md:px-32 md:pb-20 md:text-left">
        <div>
          {kicker ? (
            <p
              data-page-kicker
              data-reveal
              className="mb-4 font-sans text-[11px] font-medium uppercase tracking-[0.4em] text-white/65"
            >
              {kicker}
            </p>
          ) : null}
          <h1
            data-page-title
            data-reveal
            className="font-display text-[2.75rem] font-bold uppercase leading-[0.95] tracking-wide md:text-7xl"
          >
            <SplitWords text={title} />
          </h1>
        </div>
        {children ? (
          <div data-page-extra data-reveal className="mt-6 md:mt-0">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
