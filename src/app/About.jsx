export default function About() {
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-20 px-4 text-slate-800 dark:text-slate-50 transition-colors duration-300"
    >
      {/* Boxed Heading */}
      <div className="flex justify-center">
        <div className="border-2 border-slate-200 dark:border-slate-800 px-10 py-2.5 mb-8 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur shadow-sm">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-[0.35em] text-center uppercase text-slate-800 dark:text-slate-100">
            About Me
          </h1>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-center max-w-2xl mx-auto text-slate-600 dark:text-slate-300 mb-12 text-sm md:text-base leading-relaxed">
        I&apos;m a full-stack web developer passionate about building modern, responsive, and user-friendly web applications. I work with both front-end and back-end technologies to create complete and efficient digital solutions. I enjoy solving problems with clean code and continuously learning new tools to improve my development skills.
      </p>

      {/* Explore Divider */}
      <div className="flex items-center justify-center mb-16">
        <span className="h-px w-16 bg-slate-200 dark:bg-slate-700"></span>
        <span className="mx-4 text-sm font-bold tracking-[0.3em] uppercase text-slate-400 dark:text-slate-500">
          Explore
        </span>
        <span className="h-px w-16 bg-slate-200 dark:bg-slate-700"></span>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-2">
        {/* Design */}
        <div className="group flex flex-col items-center text-center p-8 bg-white/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-md hover:shadow-xl dark:shadow-slate-950/40 hover:-translate-y-1.5 transition-all duration-300 hover:border-indigo-500/50 dark:hover:border-indigo-500/30">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
            🎨
          </div>
          <h2 className="font-bold text-lg tracking-[0.2em] mb-3 uppercase text-slate-800 dark:text-slate-100">
            Design
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            I can design modern and user-friendly websites based on your needs and ideas. I also create designs from scratch while working closely with you throughout the process.
          </p>
        </div>

        {/* Development */}
        <div className="group flex flex-col items-center text-center p-8 bg-white/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-md hover:shadow-xl dark:shadow-slate-950/40 hover:-translate-y-1.5 transition-all duration-300 hover:border-indigo-500/50 dark:hover:border-indigo-500/30">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
            💻
          </div>
          <h2 className="font-bold text-lg tracking-[0.2em] mb-3 uppercase text-slate-800 dark:text-slate-100">
            Development
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            I can develop fast, responsive, and scalable web applications using modern technologies. I build complete solutions from front-end to back-end according to your requirements.
          </p>
        </div>

        {/* Maintenance */}
        <div className="group flex flex-col items-center text-center p-8 bg-white/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-md hover:shadow-xl dark:shadow-slate-950/40 hover:-translate-y-1.5 transition-all duration-300 hover:border-indigo-500/50 dark:hover:border-indigo-500/30">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
            🛠️
          </div>
          <h2 className="font-bold text-lg tracking-[0.2em] mb-3 uppercase text-slate-800 dark:text-slate-100">
            Maintenance
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            I provide website maintenance and ongoing support to ensure your site stays secure, updated, and running smoothly over time.
          </p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="flex justify-center mt-16">
        <span className="h-px w-32 bg-slate-200 dark:bg-slate-800"></span>
      </div>
    </div>
  );
}