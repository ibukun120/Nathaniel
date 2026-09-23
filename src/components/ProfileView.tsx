"use client";

import { useRef } from "react";
import Image from "next/image";
import { EASE, gsap, MQ, useGSAP } from "@/lib/gsap";
import SplitWords from "@/components/motion/SplitWords";

const paragraphs = [
  "Bayo Adegbite is a passionate gospel music minister, singer-songwriter, and recording artist from Oyo State, Nigeria. He currently serves as the Head of the Music Department at World Changers’ Assembly, a vibrant youth church under the Redeemed Christian Church of God (RCCG). Leading his band, Sound From Heaven, Bayo and his talented group of instrumentalists and singers rehearse and minister together, delivering powerful worship across Nigeria in response to invitations nationwide.",
  "Bayo believes music is a vital instrument of worship, enabling believers to praise and magnify Jesus through the power of the Holy Spirit while creating an atmosphere to receive from God. His ministry carries a unique and prophetic sound, igniting revival and fostering a deep longing for God’s presence.",
  "In 2015, Bayo released his debut single, “Aninilematannile” (Inexhaustible God), which became a beloved worship song in churches across Nigeria, since then, he has released other tracks. He recently released his latest single, “You Found Me”, on September 04, 2026. Bayo is a firm advocate for holiness, viewing it as essential in for fulfilling one’s destiny, advancing God’s kingdom and making heaven. He embodies the concept of a complete music minister, emphasizing spirit, skill, and character in his work.",
  "He also inspires his followers by sharing Bible passages on social media, stirring faith and encouraging spiritual growth. Beyond music, Bayo is a dedicated family man and entrepreneur. He resides in Lagos, Nigeria, with his wife and daughter, where they jointly run a bag business based in Ajao Estate, Lagos.",
];

export default function ProfileView() {
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
            "[data-profile-media]",
            { autoAlpha: 0, scale: 1.08 },
            { autoAlpha: 1, scale: 1, duration: isMobile ? 1.5 : 2.2, ease: EASE.expo },
          )
          .fromTo("[data-profile-kicker]", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.35)
          .set("[data-profile-title]", { autoAlpha: 1 }, 0.5)
          .fromTo(
            "[data-profile-title] [data-word]",
            { yPercent: 110 },
            { yPercent: 0, duration: 1.1, stagger: 0.08, ease: EASE.expo },
            0.5,
          )
          .fromTo(
            "[data-profile-copy]",
            { autoAlpha: 0, y: 28 },
            { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.12, ease: EASE.out },
            0.85,
          );

        gsap.to("[data-profile-media]", {
          yPercent: isMobile ? 6 : 12,
          ease: "none",
          scrollTrigger: { trigger: rootRef.current, start: "top top", end: "bottom top", scrub: true },
        });
      });
      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div data-profile-media data-reveal className="absolute inset-0">
        <Image
          src="/images/profile.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div aria-hidden className="absolute inset-0 bg-black/75 md:bg-black/70" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-5 px-5 pb-16 pt-[calc(6rem+env(safe-area-inset-top))] md:w-2/3 md:gap-10 md:px-8 md:py-32 lg:w-1/2">
        <p
          data-profile-kicker
          data-reveal
          className="font-sans text-[11px] font-medium uppercase tracking-[0.4em] text-white/60"
        >
          The Artist
        </p>
        <h1
          data-profile-title
          data-reveal
          className="font-display text-[2.5rem] font-bold uppercase tracking-wide md:text-6xl"
        >
          <SplitWords text="Profile" />
        </h1>
        {paragraphs.map((text) => (
          <p
            key={text.slice(0, 24)}
            data-reveal
            data-profile-copy
            className="text-[15px] leading-7 tracking-wide text-white/85 md:text-base md:leading-7 md:tracking-wider"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
