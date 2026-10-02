/**
 * Aurora — fixed ambient backdrop: drifting glow orbs, technical grid,
 * vignette and a subtle scanline. Sits behind every page.
 */
const Aurora = () => (
  <div
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    {/* Base */}
    <div className="absolute inset-0 bg-void" />

    {/* Glow orbs */}
    <div className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-glow-cyan/12 blur-[130px] animate-aurora" />
    <div
      className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-glow-violet/14 blur-[130px] animate-aurora"
      style={{ animationDelay: "-6s", animationDuration: "21s" }}
    />
    <div
      className="absolute -bottom-48 left-1/3 h-[30rem] w-[30rem] rounded-full bg-glow-blue/10 blur-[130px] animate-aurora"
      style={{ animationDelay: "-11s", animationDuration: "26s" }}
    />

    {/* Technical grid + vignette */}
    <div className="absolute inset-0 grid-bg opacity-40 vignette" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,7,12,0.85)_100%)]" />
  </div>
);

export default Aurora;
