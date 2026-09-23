"use client";

import { useRef } from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import Image from "next/image";
import { BsSpotify } from "react-icons/bs";
import { FaDeezer } from "react-icons/fa";
import { fadeUp, textReveal } from "@/lib/animation/presets";
import { useRevealTimeline } from "@/hooks/useRevealTimeline";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";
import SectionLabel from "@/components/motion/SectionLabel";
import SplitWords from "@/components/motion/SplitWords";
import { socialLinks } from "@/data/site";

const platforms = [
  { id: 1, link: socialLinks.twitter, label: "Twitter", icon: <Twitter size={20} /> },
  { id: 2, link: socialLinks.instagram, label: "Instagram", icon: <Instagram size={20} /> },
  { id: 3, link: socialLinks.spotify, label: "Spotify", icon: <BsSpotify size={20} /> },
  { id: 4, link: socialLinks.deezer, label: "Deezer", icon: <FaDeezer size={20} /> },
  { id: 5, link: socialLinks.youtube, label: "YouTube", icon: <Youtube size={20} /> },
  { id: 6, link: socialLinks.facebook, label: "Facebook", icon: <Facebook size={20} /> },
  {
    id: 7,
    link: socialLinks.boomplay,
    label: "Boomplay",
    src: "/images/social/Boomplay_Music_Logo.png",
  },
];

const SocialIconsRow1 = () => {
  const rootRef = useRef<HTMLElement>(null);

  useRevealTimeline(rootRef, ({ tl, one }) => {
    fadeUp(tl, one("[data-section-label]"), { duration: 0.7, distance: 16 });
    textReveal(tl, one("[data-social-heading]"), {}, "<0.1");
    fadeUp(tl, one("[data-social-copy]"), { duration: 0.75, distance: 18 }, "<0.2");
  });

  useStaggerReveal(rootRef, "[data-social-item]", { stagger: 0.06, distance: 22, start: "top 90%" });

  return (
    <section ref={rootRef} aria-label="Listen and follow" className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-5 py-16 md:px-16 md:py-24 lg:px-4">
        <div className="max-w-xl">
          <SectionLabel index="04" tone="dark">
            Connect
          </SectionLabel>
          <h2
            data-reveal
            data-social-heading
            className="mt-5 font-display text-[2.35rem] font-bold uppercase leading-[0.95] tracking-wide md:text-5xl"
          >
            <SplitWords text="Listen & Follow" />
          </h2>
          <p data-reveal data-social-copy className="mt-5 text-base font-light text-white/50 md:text-lg">
            Stream the music and stay with the ministry.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-3 border-t border-white/10 sm:grid-cols-3 lg:grid-cols-7">
          {platforms.map((platform) => (
            <li key={platform.id} data-reveal data-social-item className="border-b border-white/10 last:col-span-3 sm:last:col-span-1 lg:border-b-0">
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[6.5rem] flex-col items-center justify-center gap-3 px-2 py-6 text-white/55 transition-colors duration-300 hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-gold sm:px-3 sm:py-10"
              >
                <span className="flex size-12 items-center justify-center rounded-full border border-white/12 transition duration-500 ease-cinematic group-hover:-translate-y-1 group-hover:border-gold/60">
                  {platform.icon ? (
                    platform.icon
                  ) : (
                    <Image
                      src={platform.src || ""}
                      alt=""
                      width={40}
                      height={40}
                      className="h-5 w-auto object-contain brightness-0 invert opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  )}
                </span>
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.22em]">
                  {platform.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SocialIconsRow1;
