"use client";

import { useRef } from "react";
import { ArrowUp, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fadeUp } from "@/lib/animation/presets";
import { useRevealTimeline } from "@/hooks/useRevealTimeline";
import { booking, latestRelease, navLinks, socialLinks } from "@/data/site";

const socials = [
  { href: socialLinks.instagram, label: "Instagram", icon: Instagram },
  { href: socialLinks.twitter, label: "X (Twitter)", icon: Twitter },
  { href: socialLinks.facebook, label: "Facebook", icon: Facebook },
  { href: socialLinks.youtube, label: "YouTube", icon: Youtube },
];

const Footer = () => {
  const rootRef = useRef<HTMLElement>(null);

  useRevealTimeline(
    rootRef,
    ({ tl }) => {
      fadeUp(tl, "[data-footer-col]", { duration: 0.75, distance: 20, stagger: 0.08 });
    },
    { start: "top 94%" },
  );

  return (
    <footer ref={rootRef} className="relative w-full overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-1/4 top-0 size-[40vw] rounded-full bg-[radial-gradient(circle,rgba(214,178,106,0.07),transparent_62%)]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 sm:px-12 md:gap-12 md:py-20 lg:grid-cols-4 lg:gap-10 lg:px-4">
        <div data-reveal data-footer-col>
          <Link href="/" aria-label="Bayo Adegbite — Home" className="inline-block">
            <Image
              src="/images/bayo-logo.png"
              alt="Bayo Adegbite"
              width={690}
              height={384}
              sizes="160px"
              className="h-12 w-auto invert md:h-14"
            />
          </Link>
          <p className="mt-5 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-white/40">
            Music Minister
          </p>
          <p className="mt-6 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-gold-deep">
            New release
          </p>
          <a
            href={`https://www.youtube.com/watch?v=${latestRelease.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-3 inline-block font-display text-lg font-semibold uppercase tracking-wide text-white after:bg-gold hover:text-gold"
          >
            {latestRelease.title}
          </a>
        </div>

        <div data-reveal data-footer-col>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-gold-deep">Bookings</p>
          <p className="mt-4 text-white/70">{booking.location}</p>
          <a
            href={`mailto:${booking.email}`}
            className="link-underline mt-3 inline-block break-all text-white/80 after:bg-gold hover:text-white"
          >
            {booking.email}
          </a>
        </div>

        <nav data-reveal data-footer-col aria-label="Footer">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-gold-deep">Explore</p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="link-underline font-sans text-sm uppercase tracking-[0.16em] text-white/65 after:bg-gold hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div data-reveal data-footer-col>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-gold-deep">Reach us Online</p>
          <Link
            href="/"
            className="link-underline mt-4 block text-white/70 after:bg-gold hover:text-white"
          >
            www.bayoadegbite.com
          </Link>
          <p className="mt-3 break-all text-sm leading-relaxed text-white/50">
            info@bayoadegbiteministries@gmail.com
          </p>
        </div>
      </div>

      <div className="relative border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-6 sm:flex-row sm:px-12 lg:px-4">
          <p className="text-center font-sans text-xs tracking-wide text-white/35 sm:text-left">
            © 2026 Bayo Adegbite. All rights reserved.
          </p>

          <ul className="flex items-center gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition duration-300 ease-cinematic hover:-translate-y-[3px] hover:scale-105 hover:border-gold/60 hover:text-gold"
                >
                  <Icon size={16} />
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                aria-label="Back to top"
                className="ml-1 flex size-10 items-center justify-center rounded-full border border-white/10 text-white/45 transition duration-300 ease-cinematic hover:-translate-y-[3px] hover:border-gold/60 hover:text-gold"
              >
                <ArrowUp size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
