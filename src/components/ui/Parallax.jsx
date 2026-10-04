import { useEffect, useRef } from "react";
import { subscribeScroll } from "../../lib/smoothScroll";

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Parallax — scroll-driven 3D transform.
 *
 * Tracks the element's position relative to the viewport centre and maps it
 * to a translate + rotate, driven by the shared Lenis scroll stream. Geometry
 * is measured with the transform cleared, so the applied transform never
 * feeds back into the measurement (no drift, no layout read per frame).
 *
 * Progress runs from about -1 (element entering from below) to +1 (leaving
 * past the top), so a positive `y` lags behind the scroll (background feel)
 * and a negative `y` moves faster than the page.
 *
 * @param {number} y          translate in px at progress ±1
 * @param {number} rotateX    degrees of tilt at progress ±1
 * @param {number} rotateY    degrees of yaw at progress ±1
 */
const Parallax = ({
  children,
  className = "",
  y = 0,
  rotateX = 0,
  rotateY = 0,
  perspective = 1400,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    // Static geometry, measured with the transform temporarily removed.
    let center = 0;
    const measure = () => {
      const previous = el.style.transform;
      el.style.transform = "none";
      const rect = el.getBoundingClientRect();
      center = rect.top + window.scrollY + rect.height / 2;
      el.style.transform = previous;
    };

    measure();

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(el);

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    const update = () => {
      if (!visible) return;
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      const progress = clamp(
        (viewportCenter - center) / window.innerHeight,
        -1.25,
        1.25
      );
      el.style.transform =
        `perspective(${perspective}px) ` +
        `translate3d(0, ${(progress * y).toFixed(2)}px, 0) ` +
        `rotateX(${(progress * rotateX).toFixed(2)}deg) ` +
        `rotateY(${(progress * rotateY).toFixed(2)}deg)`;
    };

    update();
    const unsubscribe = subscribeScroll(update);
    window.addEventListener("resize", measure, { passive: true });

    return () => {
      unsubscribe();
      window.removeEventListener("resize", measure);
      io.disconnect();
      ro.disconnect();
      el.style.transform = "";
    };
  }, [y, rotateX, rotateY, perspective]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Parallax;
