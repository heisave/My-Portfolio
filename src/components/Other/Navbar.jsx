import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["About", "Projects", "Skill", "Contact"];

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 items-center">
      <nav className="rounded-2xl border border-white/10 bg-green-500 backdrop-blur-xl shadow-lg">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-white font-bold text-xl tracking-tight"
          >
            Akpan Victor<span>.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  to="/"
                  className="group relative text-white hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                >
                  Home
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="group relative text-white hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="px-5 py-2 rounded-xl bg-cyan-500 text-white hover:scale-105 transition-transform duration-200"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-cyan-400"
              >
                Home
              </Link>
            </li>

            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-cyan-400"
                >
                  {item}
                </Link>
              </li>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="px-5 py-2 rounded-xl bg-cyan-500 text-white"
            >
              Hire Me
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;