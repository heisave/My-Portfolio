import { useEffect, useRef, useState } from "react";

/**
 * Reduced-motion users (or browsers without IntersectionObserver) get the
 * final number immediately, so no animation state is needed.
 */
const SUPPORTS_ANIMATION =
  typeof window !== "undefined" &&
  typeof window.IntersectionObserver !== "undefined" &&
  !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * CountUp — animates a number from 0 to `to` once it enters the viewport.
 * Pure React + requestAnimationFrame, no dependencies.
 */
const CountUp = ({ to, duration = 1400, suffix = "", className = "" }) => {
  const ref = useRef(null);
  const [value, setValue] = useState(SUPPORTS_ANIMATION ? 0 : to);
  const started = useRef(false);

  useEffect(() => {
    if (!SUPPORTS_ANIMATION) return;
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        setValue(Math.round(eased * to));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
};

export default CountUp;
