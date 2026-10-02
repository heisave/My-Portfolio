import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { GithubIcon, LinkedinIcon, XIcon, MailIcon, ArrowUpRightIcon } from "./Icons";

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skill" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/heisave", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: LinkedinIcon },
  { label: "X", href: "https://x.com/", Icon: XIcon },
  { label: "Email", href: "mailto:akpanvictor456@gmail.com", Icon: MailIcon },
];

const Footer = () => (
  <footer className="relative mt-24 border-t border-hairline bg-abyss/70 backdrop-blur-sm">
    <div className="hairline-grad absolute -top-px left-0 w-full" />

    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* Brand */}
        <Reveal as="div" variant="left" className="max-w-sm">
          <Link to="/" className="group inline-flex items-center gap-2 font-display text-xl font-extrabold tracking-tight text-ice">
            Akpan Victor
            <span className="text-glow-cyan transition-transform duration-300 group-hover:rotate-12">.</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            Frontend developer building responsive, production-focused web
            interfaces with React — from idea to deployment.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/90">
              Open to work
            </span>
          </div>

          <div className="mt-6 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-hairline bg-white/[0.03] text-mist transition-all duration-300 hover:-translate-y-1 hover:border-glow-cyan/50 hover:text-glow-cyan hover:shadow-[0_10px_30px_-12px_rgba(34,211,238,0.7)]"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </Reveal>

        {/* Nav + contact columns — wrap into 3 columns on narrow screens */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-14 md:flex md:gap-14 lg:gap-20">
          <Reveal as="nav" delay={80} variant="up">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist/70">
              Sitemap
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-mist transition-colors hover:text-glow-cyan"
                  >
                    <span className="h-px w-0 bg-glow-cyan transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" delay={160} variant="up">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-mist/70">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm break-words">
              <li>
                <a
                  href="mailto:akpanvictor456@gmail.com"
                  className="text-mist transition-colors hover:text-glow-cyan"
                >
                  <span className="break-all">akpanvictor456@gmail.com</span>
                </a>
              </li>
              <li className="text-mist">Nigeria · Remote friendly</li>
              <li>
                <a
                  href="https://github.com/heisave"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-mist transition-colors hover:text-glow-cyan"
                >
                  <span className="break-all">github.com/heisave</span>
                  <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0" />
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-6 text-xs text-mist/70 sm:flex-row">
        <p>© {new Date().getFullYear()} Akpan Victor. Built with React & Tailwind CSS.</p>
        <p className="font-mono">
          Designed &amp; developed <span className="text-glow-cyan">with caffeine</span> ☕
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
