import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 py-24 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black">
            Building products
            <br />
            that feel
            <span className="text-cyan-400"> effortless.</span>
          </h1>

          <p className="mt-6 text-zinc-700 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Frontend developer from Nigeria building modern web products with
            React and JavaScript. I combine code, design, and creativity to
            create experiences people enjoy using.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/projects">
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition cursor-pointer">
                View Projects
              </button>
            </Link>

            <a href="/AkpanVictorCv.pdf" download>
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-zinc-700 text-black cursor-pointer">
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
  <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-cyan-500 bg-zinc-900 ">
    <img
      src="/src/assets/my-pic.jpg"
      alt="Victor"
      className="w-full h-full object-cover"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;