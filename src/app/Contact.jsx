import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

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
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
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
      className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-50 py-24 px-4 flex justify-center transition-colors duration-300"
    >
      <div className="w-full max-w-5xl grid gap-12 md:grid-cols-[1.1fr,1.2fr] items-start">
        {/* Left: Intro / Info */}
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] font-bold text-indigo-600 dark:text-indigo-400">
            Let&apos;s work together
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Have a project in mind?
          </h2>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Share a few details about your idea, collaboration, or opportunity and
            I&apos;ll get back to you as soon as possible. I&apos;m open to
            freelance work, full‑time roles, and interesting side projects.
          </p>
          <div className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <p>
              <span className="font-bold text-slate-700 dark:text-slate-200">Email:</span>{" "}
              <a
                href="mailto:sujitkumarverma1010@gmail.com"
                className="underline underline-offset-4 decoration-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold"
              >
                sujitkumarverma1010@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white/85 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl dark:shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/50 p-6 md:p-8 backdrop-blur transition-all duration-300">
          <h3 className="text-lg font-bold mb-6 text-slate-800 dark:text-white tracking-wide">
            Send me a message
          </h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2"
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
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 px-3 py-2.5 text-sm text-slate-800 dark:text-slate-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2"
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
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 px-3 py-2.5 text-sm text-slate-800 dark:text-slate-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2"
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
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 px-3 py-2.5 text-sm text-slate-800 dark:text-slate-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-all"
                placeholder="How can I help?"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-2"
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
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 px-3 py-2.5 text-sm text-slate-800 dark:text-slate-50 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none shadow-sm transition-all"
                placeholder="Tell me a bit about your project..."
              />
            </div>
            {status === "error" && (
              <p className="text-sm text-rose-600 dark:text-rose-400 font-medium">{error}</p>
            )}
            {status === "success" && (
              <p className="text-sm text-emerald-600 dark:text-emerald-450 font-medium">
                Thank you! Your message has been sent.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 dark:bg-indigo-500 px-8 py-3 text-sm font-bold tracking-wide text-white shadow-md hover:bg-indigo-500 dark:hover:bg-indigo-400 hover:shadow-indigo-500/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:scale-102 cursor-pointer"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

