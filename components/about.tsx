"use client"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-2xl group-hover:blur-3xl transition-all duration-300"></div>
              <div className="relative w-full h-96 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center overflow-hidden hover:border-blue-500/30 transition-all duration-300">
                <img
                  src="/developer-portrait.jpg"
                  alt="About portrait"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Who I Am
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                I'm Jayadharshini R, a software developer currently pursuing B.Tech in Computer Science and Engineering
                at VIT Chennai (2nd year). I'm passionate about coding, web design, and building efficient,
                user-friendly applications that solve real problems.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Education
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg hover:border-teal-500/30 transition-all">
                  <p className="font-semibold text-white">B.Tech in CSE</p>
                  <p className="text-slate-400 text-sm">VIT Chennai • 2nd Year</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg hover:border-blue-500/30 transition-all">
                  <p className="font-semibold text-white">Internship</p>
                  <p className="text-slate-400 text-sm">HCLTech • Current</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Interests
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Web development, UI/UX design, open-source contributions, and emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
