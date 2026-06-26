import Navbar from "../Other/Navbar";

const Contact = () => {
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
  };

  return (
    <>
      <Navbar />

      <section className="px-6 py-24 pt-34">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-cyan-500/10 blur-3xl"></div>

          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm border border-cyan-500/20">
            Contact • Let's connect
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-black">
            Have an idea?
            <span className="text-cyan-400"> Let's talk.</span>
          </h2>

          <p className="mt-6 text-zinc-400 text-lg max-w-xl leading-relaxed">
            Whether it's a project, collaboration, internship opportunity, or
            just a conversation about tech and creativity, feel free to reach
            out.
          </p>

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <h3 className="text-xl font-semibold text-black">
                  Contact Details
                </h3>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-zinc-500 text-sm">Email</p>
                    <p className="text-black font-medium">
                      akpanvictor456@gmail.com
                    </p>
                  </div>

                  <div>
                    <p className="text-zinc-500 text-sm">Location</p>
                    <p className="text-black font-medium">Nigeria</p>
                  </div>

                  <div>
                    <p className="text-zinc-500 text-sm">GitHub</p>
                    <p className="text-black font-medium">
                      https://github.com/heisave
                    </p>
                  </div>
                </div>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-cyan-400"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-cyan-400"
                  required
                />

                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-cyan-400 resize-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="px-6 py-3 cursor-pointer rounded-xl bg-cyan-500 text-black font-semibold hover:bg-green-500 transition-"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;