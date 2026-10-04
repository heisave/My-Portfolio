import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import projects from "../../data/Projects.json";
import { GithubIcon, ArrowUpRightIcon, SparkIcon } from "../ui/Icons";

const accents = [
  "from-glow-cyan/30 to-transparent",
  "from-glow-violet/30 to-transparent",
  "from-glow-blue/30 to-transparent",
];

const Projects = () => {
  return (
    <>
      <section id="work" className="px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Projects • My work"
            title="Things I've"
            accent="built."
            lead="A collection of projects that helped me grow as a developer and sharpen my problem-solving skills."
          />

          <div className="mt-9 sm:mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal
                key={project.title}
                as="article"
                variant="3d"
                delay={(index % 3) * 130}
                className="group card-glow card-glow-hover flex flex-col overflow-hidden rounded-3xl"
              >
                {/* Accent header */}
                <div className="relative h-36 overflow-hidden border-b border-hairline bg-panel">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accents[index % accents.length]} opacity-70`}
                  />
                  <div className="absolute inset-0 grid-bg opacity-30" />

                  {/* Big index */}
                  <span className="absolute -bottom-4 right-4 font-display text-[5.5rem] font-extrabold leading-none text-ink/[0.07] transition-all duration-500 group-hover:-translate-y-1 group-hover:text-ink/[0.12]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-void/60 px-2.5 py-1 text-[11px] font-semibold text-glow-cyan backdrop-blur">
                    <SparkIcon className="h-3 w-3" />
                    {project.tech[0]}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold leading-snug text-ice transition-colors duration-300 group-hover:text-glow-cyan">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.highlights?.[0] && (
                    <ul className="mt-4 space-y-1.5">
                      {project.highlights.slice(0, 2).map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs leading-relaxed text-mist"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-glow-cyan/80" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-hairline bg-void/80 px-2.5 py-1 text-[11px] font-medium text-mist transition-colors duration-300 group-hover:border-glow-cyan/25 group-hover:text-ice"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex gap-3 border-t border-hairline pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-hairline bg-void/70 py-2.5 text-sm font-medium text-ice transition-all duration-300 hover:border-glow-cyan/50 hover:bg-void hover:text-glow-cyan"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Code
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-glow-cyan to-glow-blue py-2.5 text-sm font-semibold text-void transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(34,211,238,0.85)]"
                    >
                      Live Demo
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal
            as="div"
            delay={150}
            className="mt-9 sm:mt-14 flex flex-col items-center gap-4 rounded-3xl border border-hairline bg-gradient-to-r from-glow-violet/[0.08] to-glow-cyan/[0.08] p-8 text-center sm:flex-row sm:justify-between sm:text-left"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-ice">
                Seen enough?
              </h3>
              <p className="mt-1.5 text-sm text-mist">
                Let's talk about what we can build together.
              </p>
            </div>
            <a
              href="https://github.com/heisave"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost btn-ghost-hover group text-sm"
            >
              More on GitHub
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Projects;
