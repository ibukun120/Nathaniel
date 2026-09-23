"use client";

import { useRef } from "react";
import Link from "next/link";
import { fadeUp, scaleReveal, staggerChildren, textReveal } from "@/lib/animation/presets";
import { useRevealTimeline } from "@/hooks/useRevealTimeline";
import SectionLabel from "@/components/motion/SectionLabel";
import SplitWords from "@/components/motion/SplitWords";
import VideoCard from "@/components/VideoCard";
import { featuredVideo, videoLibrary } from "@/data/videos";
import { socialLinks } from "@/data/site";

const supporting = videoLibrary.slice(0, 3);

const Vid = () => {
  const rootRef = useRef<HTMLElement>(null);

  useRevealTimeline(
    rootRef,
    ({ tl, one }) => {
      fadeUp(tl, one("[data-section-label]"), { duration: 0.7, distance: 16 });
      textReveal(tl, one("[data-video-heading]"), {}, "<0.08");
      scaleReveal(tl, one("[data-video-featured]"), { duration: 1.15, distance: 36 }, "<0.2");
      staggerChildren(tl, "[data-video-thumb]", { stagger: 0.12, distance: 28, duration: 0.85 }, "<0.25");
      fadeUp(tl, one("[data-video-more]"), { duration: 0.7, distance: 16 }, "<0.15");
    },
    { start: "top 82%" },
  );

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-ink px-5 py-16 text-white md:px-16 md:py-32 lg:px-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-1/4 top-1/3 size-[55vw] rounded-full bg-[radial-gradient(circle,rgba(214,178,106,0.1),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index="02" tone="dark">
              Film
            </SectionLabel>
            <h2
              data-reveal
              data-video-heading
              className="mt-5 font-display text-[2.35rem] font-bold uppercase leading-[0.95] tracking-wide md:text-6xl"
            >
              <SplitWords text="Latest Video" />
            </h2>
          </div>
          <Link
            href="/videos"
            data-reveal
            data-video-more
            className="link-underline inline-flex min-h-11 items-center font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white/70 after:bg-gold hover:text-white"
          >
            All videos
          </Link>
        </div>

        <div data-reveal data-video-featured className="mt-12 md:mt-16">
          <VideoCard
            id={featuredVideo.id}
            title={featuredVideo.title}
            large
            sizes="(min-width: 1024px) 70vw, 100vw"
          />
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {supporting.map((video) => (
            <div key={video.id} data-reveal data-video-thumb>
              <VideoCard id={video.id} title={video.title} />
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={socialLinks.youtubeVideos}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white/55 after:bg-gold hover:text-white"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default Vid;
