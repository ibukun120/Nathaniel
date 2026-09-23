import { EASE, gsap } from "@/lib/gsap";

type Targets = gsap.TweenTarget;
type Position = gsap.Position | undefined;
type PresetVars = gsap.TweenVars & { distance?: number };

/**
 * Every preset uses fromTo with an explicit autoAlpha end value: elements marked
 * `data-reveal` are hidden by CSS before hydration, so a plain `from()` would
 * read "hidden" as its end state.
 */

export function fadeUp(tl: gsap.core.Timeline, targets: Targets, vars: PresetVars = {}, position?: Position) {
  const { distance = 40, ...rest } = vars;
  return tl.fromTo(
    targets,
    { autoAlpha: 0, y: distance },
    { autoAlpha: 1, y: 0, duration: 0.9, ease: EASE.out, ...rest },
    position,
  );
}

export function fadeIn(tl: gsap.core.Timeline, targets: Targets, vars: PresetVars = {}, position?: Position) {
  const { distance: _unused, ...rest } = vars;
  void _unused;
  return tl.fromTo(targets, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, ease: EASE.soft, ...rest }, position);
}

/** Enters moving leftwards (starts offset to the right). */
export function slideLeft(tl: gsap.core.Timeline, targets: Targets, vars: PresetVars = {}, position?: Position) {
  const { distance = 60, ...rest } = vars;
  return tl.fromTo(
    targets,
    { autoAlpha: 0, x: distance },
    { autoAlpha: 1, x: 0, duration: 1.1, ease: EASE.out, ...rest },
    position,
  );
}

/** Enters moving rightwards (starts offset to the left). */
export function slideRight(tl: gsap.core.Timeline, targets: Targets, vars: PresetVars = {}, position?: Position) {
  const { distance = 60, ...rest } = vars;
  return tl.fromTo(
    targets,
    { autoAlpha: 0, x: -distance },
    { autoAlpha: 1, x: 0, duration: 1.1, ease: EASE.out, ...rest },
    position,
  );
}

export function scaleReveal(tl: gsap.core.Timeline, targets: Targets, vars: PresetVars = {}, position?: Position) {
  const { distance = 30, ...rest } = vars;
  return tl.fromTo(
    targets,
    { autoAlpha: 0, scale: 0.94, y: distance },
    { autoAlpha: 1, scale: 1, y: 0, duration: 1.1, ease: EASE.expo, ...rest },
    position,
  );
}

export function staggerChildren(tl: gsap.core.Timeline, targets: Targets, vars: PresetVars = {}, position?: Position) {
  return fadeUp(tl, targets, { distance: 30, duration: 0.8, stagger: 0.08, ...vars }, position);
}

/**
 * Masked word reveal for headings rendered with <SplitWords />.
 * `root` is the heading (carries data-reveal); words rise from behind their masks.
 */
export function textReveal(tl: gsap.core.Timeline, root: Element | null, vars: gsap.TweenVars = {}, position?: Position) {
  if (!root) return tl;
  const words = root.querySelectorAll("[data-word]");
  tl.set(root, { autoAlpha: 1 }, position);
  return tl.fromTo(
    words,
    { yPercent: 110 },
    { yPercent: 0, duration: 1.1, ease: EASE.expo, stagger: 0.07, ...vars },
    "<",
  );
}

/**
 * Cinematic image reveal for <RevealImage />: an overlay wipes away while the
 * image settles from a slight zoom.
 */
export function imageReveal(
  tl: gsap.core.Timeline,
  root: Element | null,
  vars: { direction?: "left" | "right" | "up"; duration?: number; scale?: number } = {},
  position?: Position,
) {
  if (!root) return tl;
  const { direction = "left", duration = 1.4, scale = 1.15 } = vars;
  const overlay = root.querySelector("[data-reveal-overlay]");
  const media = root.querySelector("[data-reveal-media]");
  const axis = direction === "up" ? "scaleY" : "scaleX";
  const origin = direction === "left" ? "left center" : direction === "right" ? "right center" : "center top";

  tl.set(root, { autoAlpha: 1 }, position);
  if (overlay) {
    tl.fromTo(
      overlay,
      { [axis]: 1, transformOrigin: origin },
      { [axis]: 0, duration: duration * 0.75, ease: EASE.inOut },
      "<",
    );
  }
  if (media) {
    tl.fromTo(media, { scale, yPercent: 6 }, { scale: 1, yPercent: 0, duration, ease: EASE.expo }, "<0.1");
  }
  return tl;
}
