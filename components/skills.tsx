"use client"

export function Skills() {
  const skills = [
    {
      name: "Frontend Development",
      icon: "⚡",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      name: "Backend Development",
      icon: "🔧",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    },
    {
      name: "Full Stack",
      icon: "💻",
      items: ["Next.js", "REST APIs", "Authentication", "Databases"],
    },
    {
      name: "DevOps & Tools",
      icon: "🚀",
      items: ["Docker", "Git", "GitHub Actions", "Vercel"],
    },
  ]

  return (
    <section id="skills" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-sm text-muted-foreground">Core competencies and expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-500/30 rounded-lg p-5 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 via-violet-500/20 to-pink-500/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"></div>

              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                {skill.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="text-xs text-gray-400 group-hover:text-purple-200 transition-colors font-medium"
                  >
                    • {item}
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
