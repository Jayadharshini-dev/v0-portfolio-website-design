"use client"

export function Projects() {
  const projects = [
    {
      title: "Robotics Club Website",
      description: "A dynamic platform showcasing robotics initiatives with modern web technologies.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      number: "01",
    },
    {
      title: "Personal Portfolio",
      description: "A sleek portfolio demonstrating technical expertise with professional design.",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      number: "02",
    },
    {
      title: "E-Commerce Platform",
      description: "Building scalable, high-performance e-commerce solutions with modern architecture.",
      tags: ["React", "Node.js", "MongoDB"],
      number: "03",
    },
    {
      title: "Design System",
      description: "Creating reusable component libraries and design tokens for consistency.",
      tags: ["React", "TypeScript", "Storybook"],
      number: "04",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Featured Projects</h2>
          <div className="h-1 w-20 bg-secondary rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Showcasing innovative solutions built with modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative p-8 border border-border rounded-lg hover:border-secondary/50 transition-all duration-300 bg-card/40 backdrop-blur hover:shadow-lg hover:shadow-secondary/10"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <p className="text-secondary font-bold text-sm tracking-widest mb-2">{project.number}</p>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-muted-foreground bg-border/50 px-3 py-1 rounded border border-border/50"
                  >
                    {tag}
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
