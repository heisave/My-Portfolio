/**
 * Aurora — fixed ambient backdrop: drifting glow orbs, technical grid,
 * vignette. Sits behind every page.
 *
 * Blur radii and orb sizes are dialled down on small screens: stacking three
 * 130px blurs over a full-viewport layer is the single biggest cause of
 * scroll jank on mid-range phones.
 */
const Aurora = () => (
  <div
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    {/* Base */}
    <div className="absolute inset-0 bg-void" />

    {/* Glow orbs — cheap on mobile, full size from sm up */}
    <div className="absolute -top-32 -left-24 h-[22rem] w-[22rem] rounded-full bg-glow-cyan/12 blur-[60px] animate-aurora sm:-top-40 sm:-left-32 sm:h-[38rem] sm:w-[38rem] sm:blur-[130px]" />
    <div
      className="absolute top-1/3 -right-24 h-[20rem] w-[20rem] rounded-full bg-glow-violet/14 blur-[60px] animate-aurora sm:-right-40 sm:h-[34rem] sm:w-[34rem] sm:blur-[130px]"
      style={{ animationDelay: "-6s", animationDuration: "21s" }}
    />
    <div
      className="absolute -bottom-40 left-1/3 h-[18rem] w-[18rem] rounded-full bg-glow-blue/10 blur-[60px] animate-aurora sm:-bottom-48 sm:h-[30rem] sm:w-[30rem] sm:blur-[130px]"
      style={{ animationDelay: "-11s", animationDuration: "26s" }}
    />

    {/* Technical grid + vignette (fades to the page colour at the edges) */}
    <div className="absolute inset-0 grid-bg opacity-40 vignette" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(246,248,252,0.92)_100%)]" />
  </div>
);

export default Aurora;
