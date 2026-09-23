"use client";

import { useRef } from "react";
import Image from "next/image";
import { fadeUp, textReveal } from "@/lib/animation/presets";
import { useRevealTimeline } from "@/hooks/useRevealTimeline";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import SectionLabel from "@/components/motion/SectionLabel";
import SplitWords from "@/components/motion/SplitWords";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const galleryData: GalleryImage[] = [
  { id: 1, src: "/images/slides/img1.jpg", alt: "ema" },
  { id: 2, src: "/images/slides/img2.jpg", alt: "st" },
  { id: 3, src: "/images/slides/img9.jpg", alt: "TNOG-118" },
  { id: 4, src: "/images/slides/8H8A0066.jpg", alt: "shegz" },
  { id: 5, src: "/images/slides/img5.jpg", alt: "felix" },
  { id: 6, src: "/images/slides/img6.jpg", alt: "PNW" },
  { id: 7, src: "/images/slides/img7.jpg", alt: "PNN" },
  { id: 8, src: "/images/slides/band.jpg", alt: "nath" },
  { id: 9, src: "/images/slides/8H8A9863.jpg", alt: "ev1" },
  { id: 10, src: "/images/slides/img10.jpg", alt: "george" },
];

export default function SlidePic() {
  const rootRef = useRef<HTMLElement>(null);

  useRevealTimeline(rootRef, ({ tl, one }) => {
    fadeUp(tl, one("[data-section-label]"), { duration: 0.7, distance: 16 });
    textReveal(tl, one("[data-gallery-heading]"), {}, "<0.1");
  });

  useStaggerReveal(rootRef, "[data-gallery-item]", { stagger: 0.06, distance: 32, start: "top 90%" });

  return (
    <section ref={rootRef} className="bg-ink-soft pt-16 text-white md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-16 lg:px-32">
        <SectionLabel index="03" tone="dark">
          Presence
        </SectionLabel>
        <h2
          data-reveal
          data-gallery-heading
          className="mt-5 font-display text-[2.35rem] font-bold uppercase leading-[0.95] tracking-wide md:text-5xl"
        >
          <SplitWords text="Ministry" />
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-7xl md:mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {galleryData.map((item) => (
            <div key={item.id} data-reveal data-gallery-item className="group relative aspect-square overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-cinematic group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/25" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
