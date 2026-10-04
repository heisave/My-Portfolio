import { Marquee } from "../ui/Marquee";
import Reveal from "../ui/Reveal";
import Parallax from "../ui/Parallax";

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

const highlights = [
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
];

/** Value strip directly under the hero — no navbar here, it lives in App. */
const Home = () => {
  return (
    <>
      {/* Stack ticker */}
      <Parallax y={26}>
        <Reveal
          as="div"
          variant="blur"
          className="border-y border-hairline bg-abyss/50 py-6 backdrop-blur-sm"
        >
          <Marquee items={stack} speed={38} />
        </Reveal>
      </Parallax>

      {/* Quick value props */}
      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal
              key={item.n}
              as="article"
              variant="3d"
              delay={i * 120}
              className="card-glow card-glow-hover group rounded-3xl p-5 sm:p-7"
            >
              <span className="font-mono text-sm font-semibold text-glow-cyan/70">
                {item.n}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-ice">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{item.body}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-glow-cyan/40 via-ink/10 to-transparent transition-all duration-500 group-hover:from-glow-cyan" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
