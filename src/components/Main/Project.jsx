import Navbar from "../Other/Navbar";
import projects from "../../data/Projects.json";
const Projects = () => {

  return (
    <>
      <Navbar />

      <section className="px-6 py-24 pt-34">
        <div className="max-w-7xl mx-auto relative">

    

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm border border-cyan-500/20">
            Projects • My Work
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-black">
            Things I've
            <span className="text-cyan-400"> built.</span>
          </h2>

          <p className="mt-6 text-zinc-400 text-lg max-w-2xl">
            A collection of projects that helped me grow as a developer
            and sharpen my problem-solving skills.
          </p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-3xl border border-zinc-200 bg-white p-6 hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-black">
                  {project.title}
                </h3>

                <p className="mt-4 text-zinc-500 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    className="px-4 py-2 rounded-xl border border-zinc-200 text-black hover:border-cyan-400 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-medium hover:opacity-90 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;