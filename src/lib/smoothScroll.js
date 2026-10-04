import Lenis from "lenis";

/**
 * Smooth scrolling built on Lenis.
 *
 * - `startSmoothScroll()` boots the Lenis rAF loop (skipped when the user
 *   prefers reduced motion, where native scrolling is used instead).
 * - `scrollToSection(id)` glides to an in-page section — this is what all the
 *   nav/footer/CTA anchor links use, so moving around the site never leaves
 *   the page.
 * - `subscribeScroll(fn)` gives components (progress bar, parallax, active
 *   section) a single shared, rAF-throttled scroll stream instead of each
 *   attaching its own listener.
 */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let lenis = null;
let rafId = 0;

export function startSmoothScroll() {
  if (lenis || prefersReducedMotion()) return;

  lenis = new Lenis({
    lerp: 0.1, // 0 = instant, 1 = frozen — 0.1 is a soft, weighty glide
    smoothWheel: true,
    touchMultiplier: 1.6,
    wheelMultiplier: 1,
  });

  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);
}

export function stopSmoothScroll() {
  cancelAnimationFrame(rafId);
  rafId = 0;
  lenis?.destroy();
  lenis = null;
}

/** Offset so section titles clear the fixed navbar. */
const SECTION_OFFSET = -90;

export function scrollToSection(id) {
  // Let the navbar know a guided scroll started so it doesn't retract
  // mid-glide (it unlocks again after the duration below).
  window.dispatchEvent(new CustomEvent("site:scrollto"));

  if (id === "top" || id === "") {
    if (lenis) lenis.scrollTo(0, { duration: 1.15 });
    else
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  if (lenis) {
    lenis.scrollTo(el, { offset: SECTION_OFFSET, duration: 1.15 });
  } else {
    // Reduced-motion / no-Lenis fallback: native jump with scroll-margin.
    el.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }
}

/* ------------------------------------------------------------
   Shared scroll subscription (one listener, rAF-throttled)
   ------------------------------------------------------------ */
const listeners = new Set();
let scheduled = false;

function emit() {
  scheduled = false;
  const y = window.scrollY;
  for (const fn of listeners) fn(y);
}

function onScroll() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(emit);
}

function onResize() {
  for (const fn of listeners) fn(window.scrollY);
}

/**
 * @param {(scrollY: number) => void} fn
 * @returns {() => void} unsubscribe
 */
export function subscribeScroll(fn) {
  if (listeners.size === 0) {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
  }
  listeners.add(fn);
  fn(window.scrollY); // paint once immediately

  return () => {
    listeners.delete(fn);
    if (listeners.size === 0) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    }
  };
}
