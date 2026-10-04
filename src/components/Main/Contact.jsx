import { useState } from "react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import {
  MailIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  SendIcon,
  WhatsappIcon,
} from "../ui/Icons";

const contactLinks = [
  {
    label: "Email",
    value: "akpanvictor456@gmail.com",
    href: "mailto:akpanvictor456@gmail.com",
    Icon: MailIcon,
  },
  {
    label: "GitHub",
    value: "github.com/heisave",
    href: "https://github.com/heisave",
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: LinkedinIcon,
  },
  {
    label: "Location",
    value: "Nigeria · Remote friendly",
    href: null,
    Icon: MapPinIcon,
  },
];

const fieldCls =
  "w-full rounded-xl border border-hairline bg-void/60 px-4 py-3.5 text-[15px] text-ice placeholder:text-mist/80 outline-none transition-all duration-300 focus:border-glow-cyan/60 focus:bg-white focus:shadow-[0_0_0_4px_rgba(14,116,144,0.12)]";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text = `Hello Victor,

Name: ${name}
Email: ${email}

Message:
${message}`;

    const whatsappUrl = `https://wa.me/2347045939049?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <section
        id="contact"
        className="border-t border-hairline bg-abyss/60 px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24"
      >
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Contact • Let's connect"
            title="Have an idea?"
            accent="Let's talk."
            lead="Whether it's a project, collaboration, internship opportunity, or just a conversation about tech and creativity — feel free to reach out."
          />

          <div className="mt-9 sm:mt-14 grid gap-6 lg:grid-cols-12">
            {/* Details */}
            <Reveal as="div" variant="left" className="space-y-6 lg:col-span-5">
              <div className="card-glow rounded-3xl p-5 sm:p-7">
                <h3 className="font-display text-lg font-bold text-ice">
                  Contact Details
                </h3>

                <ul className="mt-6 space-y-3">
                  {contactLinks.map(({ label, value, href, Icon }) => {
                    const inner = (
                      <span className="flex items-center gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hairline bg-void/70 text-glow-cyan transition-all duration-300 group-hover:border-glow-cyan/50 group-hover:bg-glow-cyan/10">
                          <Icon className="h-[18px] w-[18px]" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">
                            {label}
                          </span>
                          <span className="block truncate text-sm font-medium text-ice transition-colors duration-300 group-hover:text-glow-cyan">
                            {value}
                          </span>
                        </span>
                      </span>
                    );

                    return (
                      <li key={label}>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer noopener"
                            className="group flex items-center rounded-2xl border border-transparent p-2 transition-colors duration-300 hover:border-hairline hover:bg-void/60"
                          >
                            {inner}
                          </a>
                        ) : (
                          <div className="group flex items-center rounded-2xl p-2">
                            {inner}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Availability card */}
              <div className="card-glow rounded-3xl bg-gradient-to-br from-glow-cyan/[0.08] to-transparent p-5 sm:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                    Currently available
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  Open to full-time roles, freelance work and collaboration.
                  I usually reply within a few hours.
                </p>
                <a
                  href="https://wa.me/2347045939049"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-flex items-center gap-2.5 text-sm font-semibold text-glow-cyan transition-colors hover:text-ice"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal as="div" variant="right" delay={90} className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="card-glow rounded-3xl p-5 sm:p-9"
              >
                <h3 className="font-display text-lg font-bold text-ice">
                  Send a message
                </h3>
                <p className="mt-2 text-sm text-mist">
                  Fill this in and it opens in WhatsApp, ready to send.
                </p>

                <div className="mt-7 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist">
                        Your Name
                      </span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Jane Doe"
                        className={fieldCls}
                        required
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist">
                        Your Email
                      </span>
                      <input
                        type="email"
                        name="email"
                        placeholder="jane@company.com"
                        className={fieldCls}
                        required
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-mist">
                      Your Message
                    </span>
                    <textarea
                      rows="6"
                      name="message"
                      placeholder="Tell me about the project, timeline and budget..."
                      className={`${fieldCls} resize-none`}
                      required
                    />
                  </label>
                </div>

                <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-mist break-words">
                    Or email me directly at{" "}
                    <a
                      href="mailto:akpanvictor456@gmail.com"
                      className="text-glow-cyan underline-offset-4 hover:underline break-all"
                    >
                      akpanvictor456@gmail.com
                    </a>
                  </p>

                  <button
                    type="submit"
                    className="btn-primary btn-sheen btn-primary-hover group w-full sm:w-auto"
                  >
                    {sent ? "Opening WhatsApp…" : "Send Message"}
                    <SendIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
