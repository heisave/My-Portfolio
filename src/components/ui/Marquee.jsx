/**
 * Marquee — infinite horizontal ticker (pauses on hover).
 * Content is duplicated once; the track translates exactly -50%.
 */
const Marquee = ({ items = [], speed = 32, className = "" }) => {
  const doubled = [...items, ...items];

  return (
    <div className={`fade-x relative overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="mx-5 inline-flex shrink-0 items-center gap-3 whitespace-nowrap font-display text-lg font-semibold tracking-tight text-mist/70 sm:text-xl"
          >
            <span className="h-1.5 w-1.5 rotate-45 bg-glow-cyan/70" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export { Marquee };
export default Marquee;
