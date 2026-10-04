import { useEffect, useRef, useState } from "react";
import { MenuIcon } from "../ui/Icons";
import ScrollLink from "../ui/ScrollLink";
import { subscribeScroll, scrollToSection } from "../../lib/smoothScroll";

/**
 * Deliberately small nav: three in-page anchors + one CTA.
 *
 * Every link glides to its section with Lenis — nothing navigates away, so a
 * visitor can explore the whole site without ever leaving the page. The pill
 * retracts while scrolling down (more room for content) and slides back on
 * scroll up; the reading-progress bar stays pinned to the top edge.
 */
const navItems = [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("");

  // Progress bar + section tracking are written straight to the DOM / gated
  // state changes so we never re-render the navbar on every scroll frame.
  const barRef = useRef(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let keepVisibleUntil = 0;

    const hold = () => {
      keepVisibleUntil = performance.now() + 1600;
      setHidden(false);
    };
    window.addEventListener("site:scrollto", hold);

    const unsubscribe = subscribeScroll((y) => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (y / max) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;

      // Which section is currently in the reading zone?
      let current = "";
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActive((prev) => (prev === current ? prev : current));

      // Auto-hide: retract on the way down, return on the way up — but never
      // during the window right after an anchor glide.
      const delta = y - lastY;
      lastY = y;
      if (y < 140 || performance.now() < keepVisibleUntil) setHidden(false);
      else if (delta > 2) setHidden(true);
      else if (delta < -2) setHidden(false);

      setScrolled((prev) => {
        const next = y > 24;
        return prev === next ? prev : next;
      });
    });

    return () => {
      window.removeEventListener("site:scrollto", hold);
      unsubscribe();
    };
  }, []);

  const linkCls = (id) =>
    `group relative py-1 text-sm font-medium transition-colors duration-300 ${
      active === id ? "text-glow-cyan" : "text-mist hover:text-ice"
    }`;

  const underline = (id) => (
    <span
      className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-glow-cyan to-glow-violet transition-all duration-300 ${
        active === id ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  );

  // Keep the menu usable: never retract while it's open.
  const retracted = hidden && !menuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Reading progress — always visible, even when the pill retracts */}
      <div
        ref={barRef}
        className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-glow-cyan via-glow-blue to-glow-violet"
        style={{ width: "0%" }}
        aria-hidden="true"
      />

      <div
        className={`px-3 transition-[transform,opacity] duration-500 ease-out sm:px-5 ${
          retracted
            ? "-translate-y-[150%] opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div
          className={`mx-auto w-full max-w-5xl transition-all duration-500 ${
            scrolled ? "mt-3" : "mt-5"
          }`}
        >
          <nav
            className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
              scrolled
                ? "glass border-hairline shadow-[0_14px_40px_-26px_rgba(15,23,42,0.55)]"
                : "border-hairline bg-white/70 backdrop-blur-md"
            }`}
          >
            <div
              className={`flex items-center justify-between px-5 transition-all duration-500 sm:px-7 ${
                scrolled ? "py-3" : "py-4"
              }`}
            >
              {/* Logo → glide back to the top */}
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("top");
                }}
                className="group flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-ice"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-glow-cyan to-glow-violet text-sm font-black text-white transition-transform duration-500 group-hover:rotate-12">
                  V
                </span>
                Akpan Victor
                <span className="text-glow-cyan transition-transform duration-300 group-hover:translate-y-[-2px]">
                  .
                </span>
              </a>

              {/* Desktop nav */}
              <div className="hidden items-center gap-8 md:flex">
                <ul className="flex items-center gap-8">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <ScrollLink to={item.id} className={linkCls(item.id)}>
                        {item.label}
                        {underline(item.id)}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>

                <ScrollLink
                  to="contact"
                  className="btn-primary btn-sheen btn-primary-hover px-5! py-2.5! text-sm"
                >
                  Hire Me
                  <span className="h-1.5 w-1.5 rounded-full bg-void/60" />
                </ScrollLink>
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
                  {navItems.map((item, i) => (
                    <li
                      key={item.id}
                      style={{ transitionDelay: `${i * 55}ms` }}
                      className={`transition-all duration-500 ${
                        menuOpen
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-2 opacity-0"
                      }`}
                    >
                      <ScrollLink
                        to={item.id}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                          active === item.id
                            ? "bg-glow-cyan/10 text-glow-cyan"
                            : "text-mist hover:bg-ink/5 hover:text-ice"
                        }`}
                      >
                        {item.label}
                        <span className="text-xs text-mist/50">0{i + 1}</span>
                      </ScrollLink>
                    </li>
                  ))}
                  <li
                    style={{ transitionDelay: `${navItems.length * 55}ms` }}
                    className={`pt-2 transition-all duration-500 ${
                      menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                    }`}
                  >
                    <ScrollLink
                      to="contact"
                      onClick={() => setMenuOpen(false)}
                      className="btn-primary btn-sheen btn-primary-hover w-full text-sm"
                    >
                      Hire Me
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
