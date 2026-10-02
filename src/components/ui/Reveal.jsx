import { useEffect, useRef, useState } from "react";

/**
 * Capability check, evaluated once at module load:
 * we only run the reveal animation when IntersectionObserver exists and the
 * user hasn't asked for reduced motion. Otherwise content shows instantly.
 */
const SUPPORTS_REVEAL =
  typeof window !== "undefined" &&
  typeof window.IntersectionObserver !== "undefined" &&
  !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Reveal — scroll-triggered animation wrapper (no extra libraries).
 * Uses IntersectionObserver + the `.reveal` classes defined in index.css.
 *
 * @param {"up"|"left"|"right"|"zoom"|"blur"} variant  entrance direction
 * @param {number} delay  ms delay for stagger effects
 * @param {boolean} once  unobserve after the first reveal
 */
const Reveal = ({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  once = true,
  className = "",
  children,
  ...rest
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(!SUPPORTS_REVEAL);
  // Stagger delay only during the entrance; cleared afterwards so hover
  // transitions on cards/buttons aren't lagged by the reveal delay.
  const [delayActive, setDelayActive] = useState(SUPPORTS_REVEAL);

  useEffect(() => {
    if (!SUPPORTS_REVEAL) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  // Once revealed, drop the stagger delay after the entrance has finished.
  useEffect(() => {
    if (!visible || !delayActive) return;
    const t = setTimeout(() => setDelayActive(false), delay + 900);
    return () => clearTimeout(t);
  }, [visible, delayActive, delay]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: delayActive ? `${delay}ms` : "0ms" }}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
