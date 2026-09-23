"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, imageReveal, textReveal } from "@/lib/animation/presets";
import { useMagnetic } from "@/hooks/useMagnetic";
import { useRevealTimeline } from "@/hooks/useRevealTimeline";
import RevealImage from "@/components/motion/RevealImage";
import SectionLabel from "@/components/motion/SectionLabel";
import SplitWords from "@/components/motion/SplitWords";
import { latestRelease, listenPlatforms } from "@/data/site";

const LatestAlbum = () => {
  const rootRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useMagnetic(ctaRef, 0.22);

  useRevealTimeline(rootRef, ({ tl, one }) => {
    fadeUp(tl, one("[data-section-label]"), { duration: 0.7, distance: 16 });
    textReveal(tl, one("[data-album-heading]"), {}, "<0.08");
    fadeUp(tl, one("[data-album-copy]"), { duration: 0.8, distance: 20 }, "<0.25");
    imageReveal(tl, one("[data-img-reveal]"), { direction: "left", duration: 1.5 }, "<0.1");
    fadeUp(tl, "[data-album-meta]", { duration: 0.75, distance: 24, stagger: 0.08 }, "<0.35");
  });

  return (
    <section
      id="music"
      ref={rootRef}
      className="relative overflow-hidden bg-paper px-5 py-16 text-fg md:px-16 md:py-32 lg:px-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/4 top-0 size-[50vw] rounded-full bg-[radial-gradient(circle,rgba(214,178,106,0.12),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-2xl text-left">
          <SectionLabel index="01">Music</SectionLabel>
          <h2
            data-reveal
            data-album-heading
            className="mt-5 font-display text-[2.35rem] font-bold uppercase leading-[0.95] tracking-wide md:text-6xl"
          >
            <SplitWords text="Latest Song" />
          </h2>
          <p data-reveal data-album-copy className="mt-5 text-lg font-light text-fg/55 md:text-xl">
            Your favourite songs now at your finger tips
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 md:mt-20 md:grid-cols-12 md:gap-16">
          <a
            href={`https://www.youtube.com/watch?v=${latestRelease.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block md:col-span-7"
          >
            <RevealImage
              src={latestRelease.cover}
              alt={latestRelease.title}
              sizes="(min-width: 768px) 55vw, 100vw"
              className="aspect-video w-full"
              imageClassName="transition-transform duration-[1400ms] ease-cinematic group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-100 transition-opacity duration-700 ease-cinematic md:opacity-0 md:group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 opacity-100 transition-all duration-700 ease-cinematic md:translate-y-4 md:p-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              <div className="text-white">
                <p className="font-display text-2xl font-semibold uppercase tracking-wide">{latestRelease.title}</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.2em] text-white/70">{latestRelease.subtitle}</p>
              </div>
              <span className="flex size-11 items-center justify-center rounded-full bg-white text-ink transition-transform duration-500 ease-cinematic group-hover:translate-x-0.5">
                <ArrowUpRight className="size-5" />
              </span>
            </div>
          </a>

          <div className="md:col-span-5 md:pt-6">
            <p
              data-reveal
              data-album-meta
              className="font-sans text-[11px] font-medium uppercase tracking-[0.35em] text-gold-deep"
            >
              New release
            </p>
            <h3
              data-reveal
              data-album-meta
              className="mt-3 font-display text-3xl font-bold uppercase leading-tight md:text-4xl"
            >
              {latestRelease.title}
            </h3>
            <p data-reveal data-album-meta className="mt-3 text-lg font-light text-fg/60">
              {latestRelease.subtitle}
            </p>
            <p
              data-reveal
              data-album-meta
              className="mt-2 font-sans text-sm uppercase tracking-[0.18em] text-fg/40"
            >
              Released {latestRelease.released}
            </p>

            <div data-reveal data-album-meta className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                ref={ctaRef}
                href={`https://www.youtube.com/watch?v=${latestRelease.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-fg px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-gold-deep hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold active:scale-[0.97]"
              >
                Listen now
                <span aria-hidden className="transition-transform duration-500 ease-cinematic group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={latestRelease.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex min-h-11 items-center justify-center self-center py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-fg/70 after:bg-gold hover:text-fg"
              >
                Open Spotify
              </a>
            </div>

            <iframe
              data-reveal
              data-album-meta
              title={`${latestRelease.title} on Spotify`}
              className="mt-8 w-full rounded-lg"
              src={`https://open.spotify.com/embed/track/${latestRelease.spotifyId}?utm_source=generator`}
              width="100%"
              height="152"
              style={{ border: 0 }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />

            <ul data-reveal data-album-meta className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
              {listenPlatforms.map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-sans text-[11px] uppercase tracking-[0.22em] text-fg/45 after:bg-gold hover:text-fg"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestAlbum;
