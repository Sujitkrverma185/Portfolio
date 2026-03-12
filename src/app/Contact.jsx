import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-slate-50 py-20 px-4 flex justify-center"
    >
      <div className="w-full max-w-5xl grid gap-12 md:grid-cols-[1.1fr,1.2fr] items-start">
        {/* Left: Intro / Info */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Let&apos;s work together
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed">
            Share a few details about your idea, collaboration, or opportunity and
            I&apos;ll get back to you as soon as possible. I&apos;m open to
            freelance work, full‑time roles, and interesting side projects.
          </p>
          <div className="space-y-2 text-sm text-slate-300">
            <p>
              <span className="font-semibold text-slate-100">Email:</span>{" "}
              <a
                href="mailto:your@email.com"
                className="underline underline-offset-4 decoration-slate-500 hover:decoration-slate-200"
              >
                sujitkumarverma1010@email.com
              </a>
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl shadow-2xl shadow-slate-900/50 p-6 md:p-8 backdrop-blur">
          <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-[0.2em] text-slate-400 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-[0.2em] text-slate-400 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-medium uppercase tracking-[0.2em] text-slate-400 mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="How can I help?"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-[0.2em] text-slate-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
                placeholder="Tell me a bit about your project, timeline, and budget..."
              />
            </div>
            {status === "error" && (
              <p className="text-sm text-red-400">{error}</p>
            )}
            {status === "success" && (
              <p className="text-sm text-emerald-400">
                Thank you! Your message has been sent.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-indigo-500/40 hover:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

