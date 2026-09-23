"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Menu, Twitter, X, Youtube } from "lucide-react";
import Image from "next/image";
import { EASE, gsap, MQ, useGSAP } from "@/lib/gsap";
import { booking, navLinks, socialLinks } from "@/data/site";
import ThemeToggle from "@/components/ThemeToggle";

const menuSocials = [
  { label: "Instagram", href: socialLinks.instagram, icon: Instagram },
  { label: "X (Twitter)", href: socialLinks.twitter, icon: Twitter },
  { label: "Facebook", href: socialLinks.facebook, icon: Facebook },
  { label: "YouTube", href: socialLinks.youtube, icon: Youtube },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        gsap
          .timeline({ delay: 0.1 })
          .fromTo(
            barRef.current,
            { yPercent: -100, autoAlpha: 0 },
            { yPercent: 0, autoAlpha: 1, duration: 1.1, ease: EASE.expo },
          )
          .fromTo(
            "[data-nav-item]",
            { autoAlpha: 0, y: -10 },
            { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.07, ease: EASE.out },
            "-=0.7",
          );
      });

      mm.add({ motion: MQ.motion, reduce: MQ.reduce }, (ctx) => {
        const { reduce } = ctx.conditions as { motion: boolean; reduce: boolean };
        const tl = gsap.timeline({ paused: true });
        tl.set(menuRef.current, { autoAlpha: 1 });

        if (reduce) {
          tl.fromTo(menuRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2 });
        } else {
          tl.fromTo(menuRef.current, { yPercent: -100 }, { yPercent: 0, duration: 0.75, ease: EASE.inOut })
            .fromTo(
              "[data-menu-close]",
              { autoAlpha: 0, rotate: -90, scale: 0.6 },
              { autoAlpha: 1, rotate: 0, scale: 1, duration: 0.5, ease: EASE.out },
              "-=0.3",
            )
            .fromTo(
              "[data-menu-link]",
              { yPercent: 110 },
              { yPercent: 0, duration: 0.8, stagger: 0.07, ease: EASE.expo },
              "-=0.4",
            )
            .fromTo(
              "[data-menu-fade]",
              { autoAlpha: 0, y: 16 },
              { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.05, ease: EASE.out },
              "-=0.55",
            );
        }
        menuTl.current = tl;
        return () => {
          menuTl.current = null;
        };
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  useEffect(() => {
    const tl = menuTl.current;
    if (menuOpen) {
      tl?.timeScale(1).play();
      document.body.style.overflow = "hidden";
      menuRef.current?.querySelector<HTMLElement>("[data-menu-close]")?.focus();
    } else {
      tl?.timeScale(1.6).reverse();
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={rootRef}>
      <header
        ref={barRef}
        data-reveal
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,box-shadow,color] duration-500 ${
          scrolled
            ? "bg-nav/90 text-fg shadow-[0_1px_0_rgba(0,0,0,0.06),0_10px_30px_-15px_rgba(0,0,0,0.35)] backdrop-blur-md dark:shadow-[0_1px_0_rgba(255,255,255,0.06),0_10px_30px_-15px_rgba(0,0,0,0.65)]"
            : "bg-transparent text-white"
        }`}
      >
        <nav className="flex h-16 items-center justify-between px-5 md:h-20 md:px-6 lg:px-32" aria-label="Main">
          <Link href="/" data-nav-item aria-label="Bayo Adegbite — Home" className="block">
            <Image
              src="/images/bayo-logo.png"
              alt="Bayo Adegbite"
              width={690}
              height={384}
              priority
              sizes="160px"
              className={`h-12 w-auto md:h-14 ${scrolled ? "dark:invert" : "invert"}`}
            />
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.path;
              return (
                <li key={link.path} data-nav-item>
                  <Link
                    href={link.path}
                    aria-current={active ? "page" : undefined}
                    className={`link-underline font-sans text-[13px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 after:bg-gold ${
                      scrolled
                        ? active
                          ? "text-fg"
                          : "text-fg/60 hover:text-fg"
                        : active
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li data-nav-item>
              <a
                href="#booking"
                className={`group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-sans text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-[0.97] ${
                  scrolled
                    ? "border-fg/15 hover:border-fg hover:bg-fg hover:text-paper"
                    : "border-white/30 hover:border-white hover:bg-white hover:text-ink"
                }`}
              >
                Book
                <span aria-hidden className="transition-transform duration-500 ease-cinematic group-hover:translate-x-1">
                  →
                </span>
              </a>
            </li>
            <li data-nav-item>
              <ThemeToggle tone={scrolled ? "nav" : "inverse"} />
            </li>
          </ul>

          <div className="flex items-center gap-1 md:hidden">
            <span data-nav-item>
              <ThemeToggle tone={scrolled ? "nav" : "inverse"} />
            </span>
            <button
              ref={toggleRef}
              data-nav-item
              className={`flex size-11 items-center justify-center ${scrolled ? "text-fg" : "text-white"}`}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!menuOpen}
        className="invisible fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-ink px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-[env(safe-area-inset-top)] text-white md:hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-1/3 top-1/4 size-[120vw] max-w-none rounded-full bg-[radial-gradient(circle,rgba(214,178,106,0.18),transparent_60%)]"
        />
        <div className="relative flex h-16 items-center justify-between">
          <span data-menu-fade className="font-sans text-[11px] uppercase tracking-[0.3em] text-white/50">
            Menu
          </span>
          <button
            data-menu-close
            onClick={() => {
              closeMenu();
              toggleRef.current?.focus();
            }}
            aria-label="Close menu"
            className="flex size-11 items-center justify-center rounded-full transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
          >
            <X size={26} />
          </button>
        </div>

        <ul className="relative mt-8 flex flex-col gap-1">
          {navLinks.map((link, i) => {
            const active = pathname === link.path;
            return (
              <li key={link.path} className="overflow-hidden">
                <Link
                  href={link.path}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  data-menu-link
                  className={`flex min-h-14 items-baseline gap-3 py-2 font-display text-[2.35rem] font-bold uppercase leading-none tracking-tight transition-colors ${
                    active ? "text-gold" : "text-white active:text-gold"
                  }`}
                >
                  <span className="font-sans text-[11px] font-medium tracking-[0.2em] text-white/40">0{i + 1}</span>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="relative mt-auto space-y-6 pt-10">
          <div data-menu-fade>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-white/50">Bookings</p>
            <a
              href="#booking"
              onClick={closeMenu}
              className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-ink"
            >
              Book now
            </a>
            <a href={`mailto:${booking.email}`} className="mt-3 block break-all text-sm text-white/80 underline-offset-4 hover:underline">
              {booking.email}
            </a>
          </div>
          <div data-menu-fade className="flex items-center justify-between">
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-white/50">Appearance</p>
            <ThemeToggle tone="inverse" />
          </div>
          <ul className="flex gap-3">
            {menuSocials.map(({ label, href, icon: Icon }) => (
              <li key={label} data-menu-fade>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
