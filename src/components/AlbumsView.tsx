"use client";

import { useRef } from "react";
import { fadeUp } from "@/lib/animation/presets";
import { useRevealTimeline } from "@/hooks/useRevealTimeline";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import PageHero from "@/components/motion/PageHero";
import VideoCard from "@/components/VideoCard";
import { latestRelease } from "@/data/site";
import { albumVideos, featuredVideo } from "@/data/videos";

export default function AlbumsView() {
  const rootRef = useRef<HTMLElement>(null);

  useRevealTimeline(rootRef, ({ tl, one }) => {
    fadeUp(tl, one("[data-albums-feature]"), { duration: 1, distance: 36 });
    fadeUp(tl, one("[data-albums-spotify]"), { duration: 0.9, distance: 28 }, "<0.2");
  });

  useStaggerReveal(rootRef, "[data-albums-card]", { stagger: 0.08, distance: 32, start: "top 88%" });

  return (
    <div className="bg-paper">
      <PageHero src="/images/8H8A0163.jpg" title="Albums" kicker="Music" />

      <section ref={rootRef} className="bg-paper px-5 py-12 md:px-16 md:py-24">
        <div data-reveal data-albums-feature className="mx-auto max-w-4xl">
          <VideoCard
            id={featuredVideo.id}
            title={featuredVideo.title}
            tone="light"
            large
            sizes="(min-width: 768px) 70vw, 100vw"
          />
        </div>

        <div data-reveal data-albums-spotify className="mx-auto mt-10 max-w-4xl">
          <iframe
            data-testid="embed-iframe"
            className="h-[152px] w-full rounded-lg md:h-[352px]"
            title={`${latestRelease.title} on Spotify`}
            src={`https://open.spotify.com/embed/track/${latestRelease.spotifyId}?utm_source=generator`}
            width="100%"
            height="152"
            style={{ border: 0 }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 md:mt-16">
          {albumVideos.map((video) => (
            <div key={video.id} data-reveal data-albums-card>
              <VideoCard id={video.id} title={video.title} tone="light" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
