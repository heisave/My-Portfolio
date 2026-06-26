import Navbar from "../Other/Navbar";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="px-6 py-24 pt-34">
        <div className="max-w-7xl mx-auto relative">

          <div className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-500/10 blur-3xl"></div>

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm border border-cyan-500/20">
            About • Who I Am
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-black">
            Building products with
            <span className="text-cyan-400"> code & creativity.</span>
          </h2>

          <p className="mt-6 text-zinc-400 text-lg max-w-2xl leading-relaxed">
            I'm Victor, a frontend developer and creative editor from
            Nigeria. I enjoy building modern web experiences that blend
            clean design, smooth interactions, and real-world functionality.
          </p>

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
                    <p className="text-zinc-500 text-sm">Stack</p>
                    <p className="text-black font-medium">
                      JavaScript, React, Tailwind, Node.js
                    </p>
                  </div>

                  <div>
                    <p className="text-zinc-500 text-sm">Location</p>
                    <p className="text-black font-medium">
                      Nigeria
                    </p>
                  </div>

                  <div>
                    <p className="text-zinc-500 text-sm">Focus</p>
                    <p className="text-black font-medium">
                      Building modern digital products
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <h3 className="text-xl font-semibold text-black">
                  My Story
                </h3>

                <p className="mt-4 text-zinc-600 leading-relaxed">
                  I started my journey with a curiosity for technology
                  and quickly fell in love with creating things on the
                  web. Today, I focus on building responsive interfaces,
                  learning backend development, and improving my skills
                  through real-world projects.
                </p>

                <p className="mt-4 text-zinc-600 leading-relaxed">
                  My goal is to create products that are useful, visually
                  appealing, and impactful while continuously growing as
                  a developer and creator.
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