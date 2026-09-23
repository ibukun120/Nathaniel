"use client";

import { useRef } from "react";
import Link from "next/link";
import { fadeUp } from "@/lib/animation/presets";
import { useRevealTimeline } from "@/hooks/useRevealTimeline";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import PageHero from "@/components/motion/PageHero";
import VideoCard from "@/components/VideoCard";
import { featuredVideo, videoLibrary } from "@/data/videos";
import { socialLinks } from "@/data/site";

export default function VideosView() {
  const rootRef = useRef<HTMLElement>(null);

  useRevealTimeline(rootRef, ({ tl, one }) => {
    fadeUp(tl, one("[data-videos-feature]"), { duration: 1, distance: 36 });
  });

  useStaggerReveal(rootRef, "[data-videos-card]", { stagger: 0.08, distance: 32, start: "top 88%" });

  return (
    <div className="bg-paper">
      <PageHero src="/images/8H8A0205.jpg" title="Videos" kicker="Film">
        <p className="max-w-[16rem] font-sans text-[11px] uppercase tracking-[0.16em] text-white/75 md:max-w-none md:text-xs md:tracking-[0.2em]">
          <Link href="/" className="link-underline after:bg-gold hover:text-white">
            Bayo Adegbite
          </Link>
          {" / "}
          <span>Elements</span>
          {" / "}
          <span>VIDEO</span>
        </p>
      </PageHero>

      <section ref={rootRef} className="bg-paper px-5 py-12 md:px-16 md:py-24">
        <div data-reveal data-videos-feature className="mx-auto max-w-4xl">
          <VideoCard
            id={featuredVideo.id}
            title={featuredVideo.title}
            tone="light"
            large
            sizes="(min-width: 768px) 70vw, 100vw"
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
          {videoLibrary.map((video) => (
            <div key={video.id} data-reveal data-videos-card>
              <VideoCard id={video.id} title={video.title} tone="light" />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center py-16">
          <Link
            href={socialLinks.youtubeVideos}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-fg px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:bg-gold-deep hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold active:scale-[0.97]"
          >
            Show More
            <span aria-hidden className="transition-transform duration-500 ease-cinematic group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
