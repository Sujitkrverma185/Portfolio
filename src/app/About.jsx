export default function About() {
    return (
        <div id="about" className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 px-4 text-slate-50">
            {/* Boxed Heading */}
            <div className="flex justify-center">
                <div className="border-2 border-slate-700 px-10 py-2 mb-6 rounded-full bg-slate-900/60 backdrop-blur">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-[0.35em] text-center uppercase">About Me</h1>
                </div>
            </div>
            {/* Subtitle */}
            <p className="text-center max-w-2xl mx-auto text-slate-300 mb-8 text-sm md:text-base leading-relaxed">
                I&apos;m a full-stack web developer passionate about building modern, responsive, and user-friendly web applications. I work with both front-end and back-end technologies to create complete and efficient digital solutions. I enjoy solving problems with clean code and continuously learning new tools to improve my development skills.
            </p>
            {/* Explore Divider */}
            <div className="flex items-center justify-center mb-12">
                <span className="h-px w-16 bg-slate-600"></span>
                <span className="mx-4 text-lg font-semibold tracking-[0.25em] uppercase text-slate-300">Explore</span>
                <span className="h-px w-16 bg-slate-600"></span>
            </div>
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Design */}
                <div className="flex flex-col items-center text-center">
                    <span className="text-4xl mb-2">🎨</span>
                    <h2 className="font-bold text-xl tracking-[0.3em] mb-2 uppercase">Design</h2>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        I can design modern and user-friendly websites based on your needs and ideas. I also create designs from scratch while working closely with you throughout the process.
                    </p>
                </div>
                {/* Development */}
                <div className="flex flex-col items-center text-center">
                    <span className="text-4xl mb-2">💻</span>
                    <h2 className="font-bold text-xl tracking-[0.3em] mb-2 uppercase">Development</h2>
                    <p className="text-slate-300 text-sm leading-relaxed">
                    I can develop fast, responsive, and scalable web applications using modern technologies. I build complete solutions from front-end to back-end according to your requirements.
                    </p>
                </div>
                {/* Maintenance */}
                <div className="flex flex-col items-center text-center">
                    <span className="text-4xl mb-2">🛠️</span>
                    <h2 className="font-bold text-xl tracking-[0.3em] mb-2 uppercase">Maintenance</h2>
                    <p className="text-slate-300 text-sm leading-relaxed">
                    I provide website maintenance and ongoing support to ensure your site stays secure, updated, and running smoothly over time.
                    </p>
                </div>
            </div>
            {/* Bottom Divider */}
            <div className="flex justify-center mt-12">
                <span className="h-px w-32 bg-slate-600"></span>
            </div>
        </div>
    );
}