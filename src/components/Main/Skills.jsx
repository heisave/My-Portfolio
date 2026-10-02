import { useState, useEffect, useRef } from "react";
import Navbar from "../Other/Navbar";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { Marquee } from "../ui/Marquee";

const categories = [
  {
    id: "frontend",
    label: "Frontend & Dev",
    skills: [
      { name: "JavaScript / TypeScript", level: 92, tag: "Daily driver" },
      { name: "React", level: 90, tag: "Daily driver" },
      { name: "Tailwind CSS", level: 88, tag: "Daily driver" },
      { name: "Node.js", level: 70, tag: "Comfortable" },
      { name: "REST APIs", level: 74, tag: "Comfortable" },
      { name: "Git & GitHub", level: 78, tag: "Comfortable" },
    ],
  },
  {
    id: "support",
    label: "Support & Client",
    skills: [
      { name: "Zendesk Support Admin", level: 88, tag: "Certified" },
      { name: "Triggers & Automations", level: 76, tag: "Comfortable" },
      { name: "SLA Policies", level: 74, tag: "Comfortable" },
      { name: "Macros & Workflows", level: 72, tag: "Comfortable" },
      { name: "Active Listening", level: 65, tag: "Leveling up" },
      { name: "Client Communication", level: 68, tag: "Leveling up" },
    ],
  },
  {
    id: "creative",
    label: "Creative & Content",
    skills: [
      { name: "Video Editing", level: 75, tag: "Comfortable" },
      { name: "Capcut Video Editor", level: 78, tag: "Comfortable" },
      { name: "Content Strategy", level: 70, tag: "Comfortable" },
      { name: "Social Storytelling", level: 64, tag: "Leveling up" },
    ],
  },
];

const tickerItems = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "Node.js",
  "Zendesk",
  "Capcut",
];

/** Single skill row with a bar that fills when it scrolls into view. */
const SUPPORTS_ANIMATION =
  typeof window !== "undefined" &&
  typeof window.IntersectionObserver !== "undefined" &&
  !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const SkillBar = ({ skill, index }) => {
  const ref = useRef(null);
  const [fill, setFill] = useState(!SUPPORTS_ANIMATION);
  const [settled, setSettled] = useState(!SUPPORTS_ANIMATION);

  // NOTE: the parent list is keyed by activeId, so this component remounts
  // fresh on every tab change — no reset logic needed here.
  useEffect(() => {
    if (!SUPPORTS_ANIMATION) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFill(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Clear the stagger delay once the entrance has played, so hover
  // transitions stay instant.
  useEffect(() => {
    if (!fill || settled) return;
    const t = setTimeout(() => setSettled(true), index * 70 + 1400);
    return () => clearTimeout(t);
  }, [fill, settled, index]);

  return (
    <li
      ref={ref}
      style={{ transitionDelay: settled ? "0ms" : `${index * 70}ms` }}
      className={`reveal reveal-up rounded-2xl border border-hairline bg-white/[0.02] px-5 py-4 transition-all duration-700 hover:border-glow-cyan/40 hover:bg-white/[0.045] ${
        fill ? "is-visible" : ""
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <span className="flex min-w-0 items-center gap-3 font-medium text-ice">
          <span className="h-2 w-2 shrink-0 rounded-full bg-glow-cyan shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
          <span className="min-w-0 break-words">{skill.name}</span>
        </span>
        <span className="shrink-0 rounded-full border border-glow-cyan/25 bg-glow-cyan/10 px-3 py-1 text-[11px] font-semibold whitespace-nowrap text-glow-cyan">
          {skill.tag}
        </span>
      </div>

      {/* Bar */}
      <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-glow-cyan via-glow-blue to-glow-violet transition-[width] duration-1000 ease-out"
          style={{
            width: fill ? `${skill.level}%` : "0%",
            transitionDelay: `${index * 90 + 150}ms`,
          }}
        />
      </div>
    </li>
  );
};

const Skills = () => {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((c) => c.id === activeId);

  return (
    <>
      <Navbar />

      <section className="px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Skills • What I work with"
            title="Tools I use to"
            accent="build things."
            lead="Three buckets: the engineering stack I ship with, the support tools I'm certified on, and the creative skills that keep the work interesting."
          />

          {/* Category tabs */}
          <Reveal as="div" delay={120} className="mt-8 sm:mt-10 flex flex-wrap gap-3">
            {categories.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  aria-pressed={isActive}
                  className={`relative overflow-hidden rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-void shadow-[0_12px_30px_-12px_rgba(34,211,238,0.8)]"
                      : "border border-hairline bg-white/[0.03] text-mist hover:-translate-y-0.5 hover:border-glow-cyan/40 hover:text-ice"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-glow-cyan to-glow-blue" />
                  )}
                  <span className="relative">{cat.label}</span>
                </button>
              );
            })}
          </Reveal>

          {/* Skills grid */}
          <div className="card-glow mt-8 rounded-3xl p-5 sm:p-8">
            <ul
              key={activeId}
              className="grid gap-4 sm:grid-cols-2"
            >
              {active.skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </ul>
          </div>

          {/* Stack ticker */}
          <Reveal
            as="div"
            delay={100}
            className="mt-8 sm:mt-12 border-y border-hairline py-5"
          >
            <Marquee items={tickerItems} speed={34} />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Skills;
