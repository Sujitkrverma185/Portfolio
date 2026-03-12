export default function Home() {
    return (
        <div
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden text-slate-50"
        >
            {/* Diagonal divider */}
            <div className="absolute inset-0 w-3/5 bg-gray-200 z-0"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)"
                }}
            ></div>
            {/* Content */}
            <div className="relative z-10 flex flex-1 w-full max-w-6xl items-center px-4 md:px-0 md:pl-10">
                {/* Left: Text */}
                <div className="flex-1 md:pl-0 md:pr-8">
                    <p className="text-sm md:text-base mb-3 font-medium text-black tracking-[0.25em] uppercase">
                        Hi, I am
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-black tracking-tight">
                        Sujit Kumar Verma
                    </h1>
                    <p className="text-base md:text-lg font-semibold text-black mb-8">
                    Full-stack Web Developer
                    </p>
                    <div className="flex gap-4">
                        <a href="mailto:sujitkumarverma1010@gmail.com"
                           className="bg-slate-900/80 border border-slate-700 shadow-lg shadow-slate-900/60 p-3 rounded-full hover:border-indigo-500 hover:text-indigo-300 transition">
                            <svg className="w-6 h-6 text-slate-100" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" />
                            </svg>
                        </a>
                        <a href="https://github.com/sujitkrverma185" target="_blank" rel="noopener noreferrer" className="bg-slate-900/80 border border-slate-700 shadow-lg shadow-slate-900/60 p-3 rounded-full hover:border-indigo-500 hover:text-indigo-300 transition">
                            <svg className="w-6 h-6 text-slate-100" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.338 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/sujit-kumar-verma-91787032a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="bg-slate-900/80 border border-slate-700 shadow-lg shadow-slate-900/60 p-3 rounded-full hover:border-indigo-500 hover:text-indigo-300 transition">
                            <svg className="w-6 h-6 text-slate-100" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Right: Image */}
                <div className="flex-1 hidden md:flex justify-end items-end pr-4">
                    <img
                        src="/sujit.jpeg"
                        alt="Sujit"
                        className="w-96 max-w-full object-cover rounded-lg shadow-2xl"
                        style={{ background: "black" }}
                    />
                </div>
            </div>
        </div>
    );
}