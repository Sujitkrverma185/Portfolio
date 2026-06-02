export default function Skills() {
  return (
    <div
      id="skills"
      className="bg-slate-50 dark:bg-slate-950 py-20 px-4 text-slate-800 dark:text-slate-50 transition-colors duration-300"
    >
      {/* Boxed Heading */}
      <div className="flex justify-center">
        <div className="border-2 border-slate-200 dark:border-slate-800 px-10 py-2.5 mb-14 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur shadow-sm">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-[0.35em] text-center uppercase text-slate-800 dark:text-slate-100">
            Skills
          </h1>
        </div>
      </div>

      {/* Skills sections */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Using Now */}
        <div>
          <h2 className="text-xs md:text-sm font-bold tracking-[0.25em] mb-6 uppercase text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Using now
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            <SkillItem img="/html.svg" label="HTML" />
            <SkillItem img="/css.svg" label="CSS" />
            <SkillItem img="/js.svg" label="JavaScript" />
            <SkillItem img="/react.svg" label="React" />
            <SkillItem img="/bootstrap.svg" label="Bootstrap" />
            <SkillItem img="/git.svg" label="Git" />
            <SkillItem img="/figma.svg" label="Figma" />
            <SkillItem img="/nodejs.svg" label="Node.js" />
            <SkillItem img="/mongodb.svg" label="MongoDB" />
            <SkillItem img="/tailwind-css.svg" label="Tailwind" />
            <SkillItem img="/material-ui-icon.png" label="Material UI" />
            <SkillItem img="/ejs.png" label="EJS" />
            <SkillItem img="/nextjs.png" label="Next.js" isInvertDark />
          </div>
        </div>

        {/* Learning */}
        <div>
          <h2 className="text-xs md:text-sm font-bold tracking-[0.25em] mb-6 uppercase text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Learning
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            <SkillItem img="/python.svg" label="Python" />
            <SkillItem img="/data.png" label="DSA" />
            <SkillItem img="/ai-chipset.svg" label="AI" />
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h2 className="text-xs md:text-sm font-bold tracking-[0.25em] mb-6 uppercase text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Other skills
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            <SkillItem img="/c.svg" label="C" />
            <SkillItem img="/cpp.svg" label="C++" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillItem({ img, label, isInvertDark }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer">
      <div className="w-20 h-20 mb-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-slate-950/50 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-indigo-500/50 dark:group-hover:border-indigo-400/40 group-hover:shadow-md dark:group-hover:shadow-indigo-500/5 transition-all duration-300">
        <img
          src={img}
          alt={label}
          className={`w-11 h-11 object-contain group-hover:rotate-3 transition-transform duration-300 ${
            isInvertDark ? "dark:invert" : ""
          }`}
        />
      </div>
      <span className="text-[0.6rem] md:text-[0.65rem] font-bold tracking-[0.15em] uppercase text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 text-center transition-colors duration-300">
        {label}
      </span>
    </div>
  );
}