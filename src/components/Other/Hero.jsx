import {Link} from "react-router"
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* Left */}
    <div>

      <h1 className=" text-5xl md:text-7xl font-bold leading-tight text-black">
        Building products
        <br />
        that feel
        <span className="text-cyan-400"> effortless.</span>
      </h1>

      <p className="mt-6 text-zinc-700 text-lg max-w-xl leading-relaxed">
       Frontend developer from Nigeria building modern web products with React and JavaScript. I combine code, design, and creativity to create experiences people enjoy using.
      </p>

      <div className="mt-10 flex gap-4">
        <Link to="/projects">
        <button className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold cursor-pointer hover:bg-cyan-400 transition duration-300">
          View Projects
        </button>
        </Link>
        <a href="/AkpanVictorCv.pdf" download><button className="px-6 py-3 cursor-pointer rounded-xl border border-zinc-700 text-black">
          Download CV
        </button></a>

      </div>

    </div>

    {/* Right */}
    <div className="relative ml-38">

      <div className="absolute -top-10 -left-10 w-72 h-72 "></div>

      <div className="relative rounded-3xl border w-108 border-zinc-800 bg-zinc-900 p-8">
        <img
          src="src/assets/my-pic.jpg"
          alt="Victor"
          className="rounded-2xl object-cover"
        />
      </div>

    </div>

  </div>
</section>
  );
};

export default Hero;