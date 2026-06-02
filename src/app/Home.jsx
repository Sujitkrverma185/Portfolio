export default function Home() {
  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 overflow-hidden text-slate-800 dark:text-slate-50 transition-colors duration-300 py-16 md:py-0"
    >
      {/* Dynamic Glowing ambient background orbs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 md:w-96 md:h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse duration-[6000ms]"></div>
      <div className="absolute bottom-1/4 right-1/10 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse duration-[8000ms]"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row w-full max-w-6xl items-center justify-between px-6 md:px-12 gap-12">
        {/* Left: Introduction Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="space-y-2">
            <p className="text-xs md:text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-[0.3em] uppercase">
              Hi, I am
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Sujit Kumar Verma
              </span>
            </h1>
            <p className="text-lg md:text-2xl font-bold text-slate-600 dark:text-slate-300">
              Full-stack Web Developer
            </p>
          </div>

          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Building modern, high-performance, and visually stunning web applications with the latest technologies.
          </p>

          {/* Action & Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 pt-4">
            <a
              href="/resume.pdf"
              download="Sujit_Kumar_Verma_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white font-bold tracking-wide text-xs md:text-sm rounded-full shadow-md hover:bg-indigo-500 dark:hover:bg-indigo-400 hover:shadow-indigo-500/25 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="mailto:sujitkumarverma1010@gmail.com"
                className="group bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-slate-950/60 p-3.5 rounded-full hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 text-slate-600 dark:text-slate-300 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                title="Email Me"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="https://github.com/sujitkrverma185"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-slate-950/60 p-3.5 rounded-full hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 text-slate-600 dark:text-slate-300 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                title="GitHub Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sujit-kumar-verma-91787032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-slate-950/60 p-3.5 rounded-full hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 text-slate-600 dark:text-slate-300 transition-all duration-300 hover:scale-110 flex items-center justify-center"
                title="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Responsive Profile Picture Container */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Glowing background behind image */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full md:rounded-3xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-300"></div>

            {/* Picture wrapper (Circle on mobile, rounded card on desktop) */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-[460px] rounded-full md:rounded-3xl overflow-hidden border-2 border-white/20 dark:border-slate-800/40 shadow-2xl bg-white dark:bg-slate-900 transition-all duration-300">
              <img
                src="/sujit.png"
                alt="Sujit Kumar Verma"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}