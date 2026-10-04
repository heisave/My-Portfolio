import cvFile from "../../assets/AkpanVictorCv.pdf?url";
import Reveal from "../ui/Reveal";
import ScrollLink from "../ui/ScrollLink";
import Parallax from "../ui/Parallax";
import CountUp from "../ui/CountUp";
import Typewriter from "../ui/Typewriter";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "../ui/Icons";

const headline = ["Building", "products", "that", "feel"];

const stats = [
  { value: 15, suffix: "+", label: "Projects shipped" },
  { value: 3, suffix: "+", label: "Years building" },
  { value: 100, suffix: "%", label: "Responsive focus" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/heisave", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: LinkedinIcon },
  { label: "X", href: "https://x.com/", Icon: XIcon },
];

/* Badges hug the portrait on narrow screens (they were pushed outside the
   section and clipped) and fan out from sm up. */
const floatingTech = [
  { name: "React", pos: "top-1 -left-3 sm:-left-10", delay: "0s" },
  { name: "Tailwind", pos: "bottom-8 -right-3 sm:-right-14", delay: "-2.4s" },
  { name: "JavaScript", pos: "-bottom-3 left-4 sm:-bottom-2 sm:left-8", delay: "-4.8s" },
];

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36">
      {/* Hero-only spotlight */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-cyan/[0.07] blur-[70px] sm:h-[46rem] sm:w-[46rem] sm:blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 sm:gap-14 lg:grid-cols-12 lg:gap-10">
        {/* ---------------- Left column ---------------- */}
        <div className="lg:col-span-7">
          {/* Availability */}
          <Reveal as="div" variant="blur" className="flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-mist shadow-[0_1px_2px_rgba(15,23,42,0.05)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
              Available for opportunities
            </span>
          </Reveal>

          {/* Headline — word by word entrance */}
          <h1 className="mt-6 font-display text-[2.1rem] font-extrabold leading-[1.06] tracking-tight text-ice min-[400px]:text-[2.6rem] sm:mt-7 sm:text-6xl lg:text-[4.4rem]">
            <span className="flex flex-wrap items-baseline justify-center gap-x-3 gap-y-0.5 min-[400px]:gap-x-4 lg:justify-start">
              {headline.map((word, i) => (
                <Reveal
                  as="span"
                  key={word}
                  delay={120 + i * 90}
                  className="inline-block"
                >
                  {word}
                </Reveal>
              ))}
              <Reveal as="span" delay={120 + headline.length * 90} className="inline-block">
                <span className="text-gradient">effortless.</span>
              </Reveal>
            </span>
          </h1>

          {/* Rotating role line */}
          <Reveal as="div" delay={640} variant="up" className="mt-6">
            <div className="inline-flex items-center gap-3 rounded-xl border border-hairline bg-white/80 px-4 py-2.5 font-mono text-sm text-glow-cyan shadow-[0_1px_2px_rgba(15,23,42,0.05)]">
              <span className="text-mist/60">{"//"}</span>
              <Typewriter
                phrases={[
                  "Frontend Developer",
                  "React Engineer",
                  "UI-Driven Builder",
                  "Problem Solver",
                ]}
              />
            </div>
          </Reveal>

          {/* Intro */}
          <Reveal as="p" delay={760} className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Frontend developer from Nigeria specializing in React and
            JavaScript. I build responsive, production-focused web interfaces
            with a strong eye for usability, clean code, and detail — from
            idea to deployment.
          </Reveal>

          {/* CTAs */}
          <Reveal as="div" delay={860} className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <ScrollLink
              to="work"
              className="btn-primary btn-sheen btn-primary-hover group"
            >
              View Projects
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ScrollLink>

            <a href={cvFile} download className="btn-ghost btn-ghost-hover group">
              <DownloadIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download CV
            </a>
          </Reveal>

          {/* Stats */}
          <Reveal as="dl" delay={960} className="mt-9 grid max-w-lg grid-cols-3 gap-2.5 border-t border-hairline pt-6 sm:mt-11 sm:gap-4 sm:pt-7">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-extrabold text-ice min-[400px]:text-3xl sm:text-4xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
                <p className="mt-1 text-[10px] font-medium uppercase leading-snug tracking-[0.1em] text-mist sm:mt-1.5 sm:text-xs sm:tracking-[0.14em]">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>

          {/* Socials */}
          <Reveal as="div" delay={1040} className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.18em] text-mist">
              Find me
            </span>
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-hairline bg-white/80 text-mist shadow-[0_1px_2px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-glow-cyan/50 hover:text-glow-cyan hover:shadow-[0_10px_26px_-14px_rgba(14,116,144,0.8)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </Reveal>
        </div>

        {/* ---------------- Right column: portrait ---------------- */}
        <div className="lg:col-span-5">
          <Parallax y={54} rotateY={9} className="relative mx-auto w-fit">
            <Reveal as="div" variant="zoom" delay={320} className="relative mx-auto w-fit">
              {/* Glow behind the portrait */}
              <div
                className="absolute inset-6 rounded-full bg-glow-cyan/20 blur-[70px]"
                aria-hidden="true"
              />

              {/* Rotating conic ring */}
              <div className="absolute -inset-4 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(14,116,144,0.75)_80deg,transparent_160deg,rgba(124,58,237,0.65)_250deg,transparent_340deg)] animate-spin-slow opacity-80"
                aria-hidden="true"
              />
              <div className="absolute -inset-4 rounded-full border border-ink/10" aria-hidden="true" />

              {/* Portrait */}
              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-ink/10 bg-panel-2 shadow-[0_40px_80px_-38px_rgba(15,23,42,0.6)] sm:h-72 sm:w-72 md:h-80 md:w-80">
                <img
                  src="/newpic.png"
                  alt="Akpan Victor"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
              </div>

              {/* Floating tech badges */}
              {floatingTech.map(({ name, pos, delay }) => (
                <span
                  key={name}
                  style={{ animationDelay: delay }}
                  className={`absolute ${pos} animate-float rounded-xl border border-hairline bg-white/90 px-3.5 py-2 font-mono text-xs font-semibold text-ice shadow-[0_16px_36px_-20px_rgba(15,23,42,0.55)] backdrop-blur`}
                >
                  <span className="mr-1.5 text-glow-cyan">◆</span>
                  {name}
                </span>
              ))}
            </Reveal>
          </Parallax>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 lg:block">
        <Reveal
          as="div"
          delay={1200}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-mist">
            Scroll
          </span>
          <span className="relative h-10 w-px bg-hairline">
            <span className="absolute left-1/2 top-0 h-3.5 w-px -translate-x-1/2 bg-glow-cyan animate-float" />
          </span>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
