"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EASE, gsap, MQ, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import SplitWords from "@/components/motion/SplitWords";
import { useMagnetic } from "@/hooks/useMagnetic";
import { latestRelease, listenPlatforms } from "@/data/site";

const slides = [
  {
    type: "video",
    src: "/videos/Officialvideo.mp4",
    title: "WELCOME",
    subtitle: "Get the latest update about my music and ministry",
  },
  {
    type: "image",
    src: "/images/8H8A0002-1.jpg",
    title: "HEART OF WORSHIP",
    subtitle: "Worship in spirit and in truth",
  },
  {
    type: "image",
    src: "/images/8H8A9909.jpg",
    title: "Sounds From Heaven",
    subtitle: "Worship in spirit and in truth",
  },
];

const AUTOPLAY_MS = 8000;
const pad = (n: number) => String(n).padStart(2, "0");

const FrontSlide = () => {
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);
  const animating = useRef(false);
  const rootRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useMagnetic(ctaRef, 0.25);

  const { contextSafe } = useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      const mm = gsap.matchMedia();

      mm.add({ isDesktop: MQ.desktop, isMobile: MQ.mobile }, (ctx) => {
        const { isDesktop, isMobile } = ctx.conditions as { isDesktop: boolean; isMobile: boolean };
        if (!isDesktop && !isMobile) return;

        const intro = gsap.timeline({ defaults: { ease: EASE.out } });
        intro
          .fromTo(
            "[data-hero-media]",
            { autoAlpha: 0, scale: 1.08 },
            { autoAlpha: 1, scale: 1, duration: isMobile ? 1.6 : 2.4, ease: EASE.expo },
          )
          .fromTo("[data-hero-rail]", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12 }, 0.35)
          .set("[data-hero-headline]", { autoAlpha: 1 }, 0.45)
          .fromTo(
            "[data-hero-headline] [data-word]",
            { yPercent: 110 },
            { yPercent: 0, duration: 1.2, stagger: 0.06, ease: EASE.expo },
            0.45,
          )
          .fromTo("[data-hero-copy]", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.95)
          .fromTo("[data-hero-cta]", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, 1.1)
          .fromTo("[data-hero-decor]", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.2, stagger: 0.08, ease: EASE.soft }, 1.2);

        if (isDesktop) {
          gsap.to("[data-kenburns]", { scale: 1.06, duration: 16, ease: "sine.inOut", repeat: -1, yoyo: true });
        }

        const scroll = { trigger: root, start: "top top", end: "bottom top", scrub: true };
        gsap.to("[data-hero-media]", { yPercent: isMobile ? 8 : 16, ease: "none", scrollTrigger: scroll });
        gsap.to("[data-hero-content]", {
          y: isMobile ? -40 : -90,
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: { ...scroll, end: "75% top" },
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  const goTo = useCallback(
    (next: number) => {
      const prev = currentRef.current;
      if (next === prev || animating.current) return;
      currentRef.current = next;
      setCurrent(next);

      const video = videoRef.current;
      if (video) {
        if (next === 0) video.play().catch(() => {});
        else video.pause();
      }

      contextSafe(() => {
        const q = gsap.utils.selector(rootRef.current);
        const reduce = prefersReducedMotion();
        animating.current = true;

        const tl = gsap.timeline({ onComplete: () => void (animating.current = false) });
        if (reduce) {
          tl.set(q(`[data-slide='${prev}']`), { autoAlpha: 0 }).set(q(`[data-slide='${next}']`), { autoAlpha: 1 });
          return;
        }

        tl.fromTo(
          q(`[data-slide='${next}']`),
          { autoAlpha: 0, scale: 1.06 },
          { autoAlpha: 1, scale: 1, duration: 1.4, ease: EASE.out },
          0,
        ).to(q(`[data-slide='${prev}']`), { autoAlpha: 0, duration: 1.2, ease: EASE.soft }, 0.2);
      })();
    },
    [contextSafe],
  );

  const handleNext = () => goTo(current === slides.length - 1 ? 0 : current + 1);
  const handlePrev = () => goTo(current === 0 ? slides.length - 1 : current - 1);

  useEffect(() => {
    const t = setTimeout(() => goTo(currentRef.current === slides.length - 1 ? 0 : currentRef.current + 1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [current, goTo]);

  return (
    <section
      ref={rootRef}
      aria-roledescription="carousel"
      aria-label="Welcome"
      className="relative h-[100svh] min-h-[36rem] w-full overflow-hidden bg-ink text-white"
    >
      <div data-hero-media data-reveal className="absolute inset-0">
        <div data-kenburns className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              data-slide={index}
              aria-hidden={index !== current}
              className="absolute inset-0"
              style={index === 0 ? undefined : { visibility: "hidden", opacity: 0 }}
            >
              {slide.type === "video" ? (
                <video
                  ref={videoRef}
                  src={slide.src}
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="auto"
                  className="h-full w-full origin-bottom scale-[1.16] object-cover md:scale-100"
                />
              ) : (
                <Image src={slide.src} alt="" fill sizes="100vw" className="object-cover" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div aria-hidden className="absolute inset-0 bg-black/40" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/75 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

      <div
        data-hero-content
        className="relative z-10 flex h-full flex-col px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[calc(6.75rem+env(safe-area-inset-top))] md:justify-between md:px-12 md:pb-10 md:pt-28 lg:px-16"
      >
        <div className="flex items-start justify-between gap-8">
          <div data-hero-rail data-reveal className="max-w-[16rem]">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-gold">New release</p>
            <p className="mt-2 font-display text-xl font-semibold uppercase leading-tight md:mt-3 md:text-2xl">
              {latestRelease.title}
            </p>
            <a
              href={`https://www.youtube.com/watch?v=${latestRelease.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 inline-flex min-h-11 items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 transition-colors hover:text-gold md:mt-3"
            >
              Stream here
              <span aria-hidden className="transition-transform duration-500 ease-cinematic group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div data-hero-rail data-reveal className="hidden max-w-[13rem] text-right md:block">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.32em] text-gold">Listen on</p>
            <ul className="mt-3 space-y-1.5">
              {listenPlatforms.map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[12px] uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-white"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#music"
              className="group mt-3 inline-flex items-center justify-end gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold"
            >
              All platforms
              <span aria-hidden className="transition-transform duration-500 ease-cinematic group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        <h1
          data-hero-headline
          data-reveal
          className="mt-6 font-display font-bold uppercase leading-[0.88] tracking-tight md:mt-0"
        >
          <span className="flex flex-col gap-1 sm:hidden">
            <span className="text-[10.5vw] text-white">
              <SplitWords text="Heart of Worship" />
            </span>
            <span className="text-[10.5vw] text-gold">
              <SplitWords text="Sounds from Heaven" />
            </span>
          </span>
          <span className="hidden grid-cols-2 items-end gap-x-8 gap-y-1 sm:grid">
            <span className="text-[6.4vw] text-white lg:text-[5.6vw]">
              <SplitWords text="Heart of" />
            </span>
            <span className="text-right text-[6.4vw] text-white lg:text-[5.6vw]">
              <SplitWords text="Sounds from" />
            </span>
            <span className="flex items-center gap-4 text-[8vw] text-gold lg:text-[7.2vw]">
              <span aria-hidden className="h-px flex-1 bg-white/80" />
              <SplitWords text="Worship" />
            </span>
            <span className="text-right text-[8vw] text-gold lg:text-[7.2vw]">
              <SplitWords text="Heaven" />
            </span>
          </span>
        </h1>

        <div aria-hidden className="flex-1 md:hidden" />

        <div className="mt-auto flex flex-col gap-5 md:mt-0 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p data-hero-copy data-reveal className="text-[13px] font-light uppercase tracking-[0.12em] text-white/75 md:text-base md:tracking-[0.16em]">
              Get the latest update about my music and ministry
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-5 sm:gap-4">
              <a
                ref={ctaRef}
                href="#music"
                data-hero-cta
                data-reveal
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gold px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-[0.97]"
              >
                Listen now
                <span aria-hidden className="transition-transform duration-500 ease-cinematic group-hover:translate-x-1">
                  →
                </span>
              </a>
              <Link
                href="/videos"
                data-hero-cta
                data-reveal
                className="link-underline inline-flex min-h-11 items-center justify-center font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 after:bg-gold hover:text-white sm:justify-start"
              >
                Watch video
              </Link>
            </div>
          </div>

          <div data-hero-decor data-reveal className="hidden items-center gap-3 md:flex md:gap-5">
            <div className="flex items-center gap-1 font-sans text-[11px] tracking-[0.22em] text-white/60 md:gap-3">
              <button onClick={handlePrev} aria-label="Previous slide" className="flex size-11 items-center justify-center rounded-full hover:text-white md:size-auto md:p-1">
                <ChevronLeft size={18} />
              </button>
              <span className="tabular-nums text-white">{pad(current + 1)}</span>
              <div className="flex gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.title}
                    onClick={() => goTo(index)}
                    aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                    aria-current={index === current}
                    className="relative h-5 w-8"
                  >
                    <span className="absolute inset-x-0 top-1/2 h-px bg-white/25" />
                    {index === current && (
                      <span
                        key={current}
                        className="absolute inset-x-0 top-1/2 h-px origin-left animate-progress bg-gold motion-reduce:animate-none"
                      />
                    )}
                  </button>
                ))}
              </div>
              <span className="tabular-nums">{pad(slides.length)}</span>
              <button onClick={handleNext} aria-label="Next slide" className="flex size-11 items-center justify-center rounded-full hover:text-white md:size-auto md:p-1">
                <ChevronRight size={18} />
              </button>
            </div>
            <p className="hidden font-sans text-[10px] uppercase tracking-[0.32em] text-white/55 md:block">Scroll down</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontSlide;
