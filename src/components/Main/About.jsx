import Navbar from "../Other/Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="px-6 py-24 pt-34 m-0">
        <div className="max-w-7xl mx-auto relative">

          <div className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-500/10 blur-3xl"></div>

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm border border-cyan-500/20">
            About • Who I Am
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-black">
            Building products with
            <span className="text-cyan-400"> code & creativity.</span>
          </h2>

         

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8">
            <div className="grid md:grid-cols-2 gap-6">

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <h3 className="text-xl font-semibold text-black">
                  Quick Facts
                </h3>

               <div className="mt-6 space-y-4">
  <div>
    <p className="text-zinc-500 text-sm">Role</p>
    <p className="text-black font-medium">
      Frontend Developer
    </p>
  </div>

  <div>
    <p className="text-zinc-500 text-sm">Core Skills</p>
    <p className="text-black font-medium">
      React, JavaScript, Tailwind CSS, Git
    </p>
  </div>

  <div>
    <p className="text-zinc-500 text-sm">Experience</p>
    <p className="text-black font-medium">
      Real-world & Team Development
    </p>
  </div>

  <div>
    <p className="text-zinc-500 text-sm">Currently Learning</p>
    <p className="text-black font-medium">
      Backend Development & Next.js
    </p>
  </div>
</div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <h3 className="text-xl font-semibold text-black">
                  My Story
                </h3>
<p className="mt-4 text-zinc-600 leading-relaxed">
  I didn’t start with a clear plan to become a developer. I started by
  wanting to understand how things on the web were actually built. That
  curiosity turned into writing code, breaking things, fixing them, and
  eventually building products of my own.
</p>

<p className="mt-4 text-zinc-600 leading-relaxed">
  Today, I’m focused on frontend development with React and JavaScript. I’ve
  worked on real projects, collaborated with developers, used Git in team
  workflows, and shipped products that people can actually open and use.
  I’m now pushing beyond frontend and learning backend development so I can
  understand more of what happens behind the interface.
</p>

<p className="mt-4 text-zinc-600 leading-relaxed">
  I’m looking for opportunities where I can contribute to a real team, take
  on meaningful problems, and keep getting better through actual engineering
  work.
</p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;