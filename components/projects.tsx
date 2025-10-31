"use client"

export function Projects() {
  const projects = [
    {
      title: "Robotics Club Website",
      description:
        "Designed and developed a complete website for the Robotics Club, focusing on interactivity and modern layout. Showcasing club events, achievements, and member profiles.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      image: "🤖",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio to showcase technical skills, projects, and professional journey with smooth animations and modern design.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      image: "💼",
    },
    {
      title: "Web Application",
      description:
        "Building efficient, user-friendly applications with focus on performance and scalability. REST APIs and modern frontend frameworks.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "🚀",
    },
    {
      title: "Design System",
      description:
        "Creating reusable component libraries and design systems for consistent UI across multiple projects.",
      tags: ["React", "Storybook", "CSS"],
      image: "🎭",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full"></div>
        </div>

        <div className="mb-16 group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-400/50 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div className="text-6xl flex items-center justify-center h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                {projects[0].image}
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  {projects[0].title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed text-lg">{projects[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[0].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-800/50 border border-blue-400/30 rounded-full text-sm text-blue-300 hover:bg-blue-500/10 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white rounded-lg transition-all font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.slice(1).map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-5xl flex items-center justify-center h-48 bg-gradient-to-br from-purple-500/20 to-teal-500/20 group-hover:from-purple-500/30 group-hover:to-teal-500/30 transition-all">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 rounded text-xs text-slate-300 hover:border-blue-400/30 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
