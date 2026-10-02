import Navbar from "../Other/Navbar";
import Hero from "../Other/Hero";
import { Marquee } from "../ui/Marquee";
import Reveal from "../ui/Reveal";

const stack = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "React Router",
  "REST APIs",
  "Git & GitHub",
  "Node.js",
  "LocalStorage",
  "Fetch API",
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Stack ticker */}
      <Reveal
        as="div"
        variant="blur"
        className="border-y border-hairline bg-abyss/50 py-6 backdrop-blur-sm"
      >
        <Marquee items={stack} speed={38} />
      </Reveal>

      {/* Quick value props */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Pixel-obsessed UI",
              body: "Interfaces that stay sharp on every screen — spacing, contrast and hierarchy handled with care.",
            },
            {
              n: "02",
              title: "Production-minded",
              body: "Clean component structure, real Git workflows and code that teammates can actually maintain.",
            },
            {
              n: "03",
              title: "Ships, then improves",
              body: "From idea to deployment — I care about what happens after launch, not just the demo.",
            },
          ].map((item, i) => (
            <Reveal
              key={item.n}
              as="article"
              delay={i * 120}
              className="card-glow card-glow-hover group rounded-3xl p-7"
            >
              <span className="font-mono text-sm font-semibold text-glow-cyan/70">
                {item.n}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ice">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{item.body}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-glow-cyan/40 via-white/10 to-transparent transition-all duration-500 group-hover:from-glow-cyan" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
