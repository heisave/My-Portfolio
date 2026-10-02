import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MenuIcon } from "../ui/Icons";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skill", to: "/skill" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  // Close the mobile menu on route change — React's "adjust state during
  // render" pattern instead of an effect (avoids a wasted extra render).
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMenuOpen(false);
  }

  // Track scroll → compact navbar + reading-progress bar
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setScrolled(y > 24);
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkCls = ({ isActive }) =>
    `group relative text-sm font-medium transition-colors duration-300 ${
      isActive ? "text-glow-cyan" : "text-mist hover:text-ice"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5">
      <div
        className={`mx-auto w-full max-w-5xl transition-all duration-500 ${
          scrolled ? "mt-3" : "mt-5"
        }`}
      >
        <nav
          className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "glass border-hairline shadow-[0_18px_50px_-24px_rgba(0,0,0,0.95)]"
              : "border-white/[0.06] bg-void/40 backdrop-blur-md"
          }`}
        >
          {/* Reading progress bar */}
          <div
            className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-glow-cyan via-glow-blue to-glow-violet transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
            aria-hidden="true"
          />

          <div
            className={`flex items-center justify-between px-5 transition-all duration-500 sm:px-7 ${
              scrolled ? "py-3" : "py-4"
            }`}
          >
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-ice"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-glow-cyan to-glow-violet text-sm font-black text-void transition-transform duration-500 group-hover:rotate-12">
                V
              </span>
              Akpan Victor
              <span className="text-glow-cyan transition-transform duration-300 group-hover:translate-y-[-2px]">
                .
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-9 md:flex">
              <ul className="flex items-center gap-8">
                <li>
                  <NavLink to="/" className={linkCls} end>
                    {({ isActive }) => (
                      <>
                        Home
                        <span
                          className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-gradient-to-r from-glow-cyan to-glow-violet transition-all duration-300 ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink to={item.to} className={linkCls}>
                      {({ isActive }) => (
                        <>
                          {item.label}
                          <span
                            className={`absolute -bottom-1.5 left-0 h-[2px] rounded-full bg-gradient-to-r from-glow-cyan to-glow-violet transition-all duration-300 ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className="btn-primary btn-sheen btn-primary-hover px-5! py-2.5! text-sm"
              >
                Hire Me
                <span className="h-1.5 w-1.5 rounded-full bg-void/60" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="grid h-10 w-10 place-items-center rounded-xl border border-hairline text-ice transition-colors hover:border-glow-cyan/50 hover:text-glow-cyan md:hidden"
            >
              <MenuIcon open={menuOpen} className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out md:hidden ${
              menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <ul className="flex flex-col gap-1 border-t border-hairline px-5 py-4">
                {[{ label: "Home", to: "/" }, ...navItems].map((item, i) => (
                  <li
                    key={item.to}
                    style={{ transitionDelay: `${i * 55}ms` }}
                    className={`transition-all duration-500 ${
                      menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                    }`}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-glow-cyan/10 text-glow-cyan"
                            : "text-mist hover:bg-white/5 hover:text-ice"
                        }`
                      }
                    >
                      {item.label}
                      <span className="text-xs text-mist/50">0{i + 1}</span>
                    </NavLink>
                  </li>
                ))}
                <li
                  style={{ transitionDelay: `${(navItems.length + 1) * 55}ms` }}
                  className={`pt-2 transition-all duration-500 ${
                    menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                  }`}
                >
                  <Link
                    to="/contact"
                    className="btn-primary btn-sheen btn-primary-hover w-full text-sm"
                  >
                    Hire Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
