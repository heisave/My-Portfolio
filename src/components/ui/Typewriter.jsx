import { useEffect, useState } from "react";

const REDUCED =
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Typewriter — types out phrases in a loop with a blinking caret.
 * Reduced-motion users just see the first phrase, no looping.
 *
 * All state updates happen inside timeouts (async), never in the effect body.
 */
const Typewriter = ({
  phrases = [],
  typeSpeed = 75,
  deleteSpeed = 38,
  holdSpeed = 1600,
  className = "",
}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(REDUCED ? phrases[0] ?? "" : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (REDUCED || phrases.length === 0) return;

    const current = phrases[index % phrases.length];
    let timeoutId;

    if (!deleting && text === current) {
      // Finished typing — hold, then start deleting.
      timeoutId = setTimeout(() => setDeleting(true), holdSpeed);
    } else if (deleting && text === "") {
      // Finished deleting — advance to the next phrase.
      timeoutId = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }, deleteSpeed);
    } else {
      timeoutId = setTimeout(
        () =>
          setText((t) =>
            deleting ? current.slice(0, Math.max(0, t.length - 1)) : current.slice(0, t.length + 1)
          ),
        deleting ? deleteSpeed : typeSpeed + Math.random() * 55
      );
    }

    return () => clearTimeout(timeoutId);
  }, [text, deleting, index, phrases, typeSpeed, deleteSpeed, holdSpeed]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[1.05em] w-[3px] translate-y-[0.18em] rounded-full bg-glow-cyan animate-caret" />
    </span>
  );
};

export default Typewriter;
