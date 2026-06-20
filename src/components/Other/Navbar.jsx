
import { Link } from "react-router";
const Navbar = () => {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <nav className="flex items-center justify-between px-6 py-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg">

        {/* Logo */}
        <Link
          to="/"
          className="text-white font-bold text-xl tracking-tight"
        >
         Akpan Victor<span className="text-white">.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {["About", "Projects", "Skill", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-white hover:text-blue-600 transition duration-300 text-sm font-medium"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center px-5 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition duration-300"
        >
          Hire Me
        </a>

      </nav>
    </header>
  );
};

export default Navbar;