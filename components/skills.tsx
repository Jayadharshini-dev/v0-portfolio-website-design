"use client"

export function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["Java", "Python", "C", "C++", "JavaScript", "TypeScript"],
      gradient: "from-blue-500/20 to-blue-600/20",
      borderGradient: "from-blue-500 to-blue-600",
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500 to-pink-500",
    },
    {
      category: "Backend & Tools",
      items: ["Node.js", "Git", "REST APIs", "SQL", "Firebase"],
      gradient: "from-teal-500/20 to-cyan-500/20",
      borderGradient: "from-teal-500 to-cyan-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-br ${skillGroup.gradient} border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300"></div>

              <h3 className="relative text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                {skillGroup.category}
              </h3>
              <div className="relative flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300 hover:bg-slate-700/50 hover:border-blue-400/30 transition-all duration-200 backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
