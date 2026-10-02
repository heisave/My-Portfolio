import Reveal from "./Reveal";

/**
 * Shared section header: eyebrow chip + display heading + optional lead.
 */
const SectionHeading = ({
  eyebrow,
  title,
  accent,
  lead,
  align = "left",
  id,
}) => {
  const alignCls =
    align === "center" ? "items-center text-center mx-auto" : "items-start";

  return (
    <div className={`flex flex-col ${alignCls} max-w-3xl`}>
      <Reveal as="div" variant="blur">
        <span className="chip eyebrow-line">
          <span className="h-1.5 w-1.5 rounded-full bg-glow-cyan animate-pulse-dot" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal as="h2" delay={90} className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ice sm:text-5xl lg:text-6xl">
        {title}{" "}
        {accent && <span className="text-gradient">{accent}</span>}
      </Reveal>

      {lead && (
        <Reveal as="p" delay={170} className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
          {lead}
        </Reveal>
      )}

      {id && <span id={id} className="sr-only" />}
    </div>
  );
};

export default SectionHeading;
