import Reveal from "../ui/Reveal";
import CountUp from "../ui/CountUp";
import SectionHeading from "../ui/SectionHeading";
import ScrollLink from "../ui/ScrollLink";
import { SparkIcon, ClockIcon, ArrowRightIcon } from "../ui/Icons";

const facts = [
  { label: "Role", value: "Frontend Developer" },
  { label: "Core Skills", value: "React, JavaScript, Tailwind CSS, Git" },
  { label: "Experience", value: "Real-world & Team Development" },
  { label: "Currently Learning", value: "Backend Development & Next.js" },
];

const timeline = [
  {
    period: "Started",
    title: "Curiosity → code",
    body: "Began by wanting to understand how the web actually works. That turned into writing code, breaking things, and fixing them.",
  },
  {
    period: "Built",
    title: "Real projects, real users",
    body: "Shipped landing pages, apps and dashboards — including projects used by people outside my own machine.",
  },
  {
    period: "Collaborated",
    title: "Team workflows",
    body: "Worked with other developers, used Git in team workflows, and learned how to review and merge responsibly.",
  },
  {
    period: "Now",
    title: "Pushing past frontend",
    body: "Learning backend development and Next.js so I understand what happens behind the interface.",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Projects" },
  { value: 5, suffix: "", label: "Core tools" },
  { value: 24, suffix: "/7", label: "Curiosity" },
];

const About = () => {
  return (
    <>
      <section
        id="about"
        className="px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24"
      >
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="About • Who I am"
            title="Building products with"
            accent="code & creativity."
            lead="I didn't start with a clear plan to become a developer — I started by wanting to understand how things on the web were actually built."
          />

          {/* Stats */}
          <Reveal
            as="dl"
            delay={140}
            className="mt-8 grid max-w-2xl grid-cols-3 gap-2.5 border-y border-hairline py-6 sm:mt-12 sm:gap-4 sm:py-7"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-extrabold text-ice sm:text-4xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </dd>
                <p className="mt-1 text-[10px] font-medium uppercase leading-snug tracking-[0.1em] text-mist sm:text-xs sm:tracking-[0.14em]">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>

          {/* Cards */}
          <div className="mt-9 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-12">
            {/* Quick facts */}
            <Reveal
              as="div"
              variant="3d"
              className="card-glow rounded-3xl p-5 sm:p-7 lg:col-span-5"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-glow-cyan/10 text-glow-cyan">
                  <SparkIcon className="h-4 w-4" />
                </span>
                <h3 className="font-display text-lg font-bold text-ice">
                  Quick Facts
                </h3>
              </div>

              <dl className="mt-7 divide-y divide-ink/[0.07]">
                {facts.map((f) => (
                  <div key={f.label} className="py-4 first:pt-0 last:pb-0">
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-mist">
                      {f.label}
                    </dt>
                    <dd className="mt-1.5 text-[15px] font-medium text-ice">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex items-center gap-2 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.08] px-4 py-3 text-sm text-emerald-700">
                <ClockIcon className="h-4 w-4 shrink-0" />
                Open to full-time & freelance work
              </div>
            </Reveal>

            {/* Story + timeline */}
            <div className="space-y-6 lg:col-span-7">
              <Reveal
                as="div"
                variant="3d"
                className="card-glow rounded-3xl p-5 sm:p-7"
              >
                <h3 className="font-display text-lg font-bold text-ice">
                  My Story
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-mist">
                  Today I'm focused on frontend development with React and
                  JavaScript. I've worked on real projects, collaborated with
                  developers, used Git in team workflows, and shipped products
                  that people can actually open and use.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-mist">
                  I'm looking for opportunities where I can contribute to a real
                  team, take on meaningful problems, and keep getting better
                  through actual engineering work.
                </p>
              </Reveal>

              {/* Timeline */}
              <ol className="relative space-y-5 border-l border-hairline pl-6 ml-3">
                {timeline.map((t, i) => (
                  <Reveal
                    as="li"
                    key={t.period}
                    variant="left"
                    delay={i * 110}
                    className="relative"
                  >
                    <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-void bg-glow-cyan shadow-[0_0_16px_rgba(34,211,238,0.85)]" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-glow-cyan/80">
                      {t.period}
                    </span>
                    <h4 className="mt-1 font-display font-bold text-ice">
                      {t.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">
                      {t.body}
                    </p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>

          {/* CTA */}
          <Reveal
            as="div"
            delay={120}
            className="mt-9 sm:mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-hairline bg-gradient-to-r from-glow-cyan/[0.07] to-glow-violet/[0.07] p-8 sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-ice sm:text-2xl">
                Want the full picture?
              </h3>
              <p className="mt-2 text-sm text-mist">
                See what I've shipped — or grab the CV.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ScrollLink to="work" className="btn-primary btn-sheen btn-primary-hover group text-sm">
                View Projects
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </ScrollLink>
              <ScrollLink to="contact" className="btn-ghost btn-ghost-hover text-sm">
                Let's talk
              </ScrollLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default About;
