export default function Skills() {
  return (
    <div id="skills" className="bg-slate-950 py-16 px-4 text-slate-50">
      {/* Boxed Heading */}
      <div className="flex justify-center">
        <div className="border-2 border-slate-700 px-10 py-2 mb-10 rounded-full bg-slate-900/60 backdrop-blur">
          <h1 className="text-2xl md:text-3xl font-bold tracking-[0.35em] text-center uppercase">Skills</h1>
        </div>
      </div>

      {/* Using Now */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm md:text-lg font-semibold tracking-[0.3em] mb-6 uppercase text-slate-300">Using now</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 mb-12">
          <SkillItem img="/html.svg" label="HTML" />
          <SkillItem img="/css.svg" label="CSS" />
          <SkillItem img="/js.svg" label="JAVASCRIPT" />
          <SkillItem img="/react.svg" label="REACT" />
          <SkillItem img="/bootstrap.svg" label="BOOTSTRAP" />
          <SkillItem img="/git.svg" label="GIT" />
          <SkillItem img="/figma.svg" label="FIGMA" />
          <SkillItem img="/nodejs.svg" label="NODEJS" />
          <SkillItem img="/mongodb.svg" label="MONGODB" />
          <SkillItem img="/tailwind-css.svg" label="TAILWIND" />
          <SkillItem img="/material-ui-icon.png" label="MATERIAL UI" />
          <SkillItem img="/ejs.png" label="EJS" />
        </div>

        {/* Learning */}
        <h2 className="text-sm md:text-lg font-semibold tracking-[0.3em] mb-6 uppercase text-slate-300">Learning</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 mb-12">
          <SkillItem img="/mysql.svg" label="MYSQL" />
          <SkillItem img="/python.svg" label="PYTHON" />
          <SkillItem img="/data.png" label="DSA" />
          <SkillItem img="/ai-chipset.svg" label="AI" />
        </div>

        {/* Other Skills */}
        <h2 className="text-sm md:text-lg font-semibold tracking-[0.3em] mb-6 uppercase text-slate-300">Other skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
          <SkillItem img="/c.svg" label="C" />
          <SkillItem img="/cpp.svg" label="C++" />
        </div>
      </div>
    </div>
  );
}

function SkillItem({ img, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 mb-2 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg shadow-slate-950/60 flex items-center justify-center">
        <img src={img} alt={label} className="w-10 h-10 object-contain" />
      </div>
      <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-slate-300 text-center">
        {label}
      </span>
    </div>
  );
}