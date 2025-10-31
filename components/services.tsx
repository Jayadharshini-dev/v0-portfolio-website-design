"use client"

export function Services() {
  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love.",
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Building robust, scalable server-side solutions.",
    },
    {
      icon: "✨",
      title: "Full-Stack Solutions",
      description: "End-to-end web applications with cutting-edge technologies.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Services</h2>
          <div className="h-1 w-20 bg-secondary rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive solutions to bring your digital ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative p-8 border border-border rounded-lg hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 bg-card/40 backdrop-blur"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
