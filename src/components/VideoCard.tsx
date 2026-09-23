"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

type Props = {
  id: string;
  title: string;
  /** Visual context the caption sits on. */
  tone?: "dark" | "light";
  /** Use the high-resolution thumbnail (for large, featured players). */
  large?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Lightweight YouTube player: shows the thumbnail and only mounts the heavy
 * iframe after the visitor presses play.
 */
export default function VideoCard({
  id,
  title,
  tone = "dark",
  large = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className = "",
}: Props) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(large ? "maxresdefault" : "hqdefault");

  return (
    <figure data-video-card className={`group ${className}`}>
      <div
        className="relative aspect-video overflow-hidden bg-ink-soft"
        data-cursor={playing ? undefined : "Watch"}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="absolute inset-0 block h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <Image
              src={`https://i.ytimg.com/vi/${id}/${thumb}.jpg`}
              alt=""
              fill
              sizes={sizes}
              onError={() => setThumb("hqdefault")}
              className="object-cover transition-transform duration-[1400ms] ease-cinematic group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10 opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
            <span
              className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-ink/40 text-white transition duration-500 ease-cinematic group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-ink ${
                large ? "size-20 md:size-24" : "size-14 md:size-16"
              }`}
            >
              <Play className={large ? "size-7 translate-x-0.5" : "size-5 translate-x-0.5"} fill="currentColor" />
            </span>
          </button>
        )}
      </div>

      <figcaption
        className={`mt-4 flex items-start justify-between gap-4 transition-transform duration-500 ease-cinematic group-hover:-translate-y-1 ${
          tone === "dark" ? "text-white" : "text-fg"
        }`}
      >
        <span className={`min-w-0 font-display font-medium uppercase leading-snug tracking-wide ${large ? "text-base md:text-2xl" : "text-[15px] md:text-lg"}`}>
          {title}
        </span>
        <ArrowUpRight
          aria-hidden
          className="mt-1 size-5 shrink-0 opacity-50 transition duration-500 ease-cinematic group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold group-hover:opacity-100"
        />
      </figcaption>
    </figure>
  );
}
