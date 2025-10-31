"use client"

export function Services() {
  const services = [
    {
      title: "Web Design",
      description:
        "Crafting responsive, visually appealing, and functional websites using modern technologies. Focus on clean UI, user-centric design, and seamless user experience.",
      icon: "🎨",
      accent: "from-blue-500 to-cyan-500",
    },
    {
      title: "Web Development",
      description:
        "Building scalable, efficient web applications with modern frameworks. From frontend to backend, creating solutions that work flawlessly.",
      icon: "⚙️",
      accent: "from-purple-500 to-pink-500",
    },
    {
      title: "UI/UX Optimization",
      description:
        "Enhancing digital experiences through thoughtful design and optimization. Ensuring every interaction is intuitive and delightful.",
      icon: "✨",
      accent: "from-teal-500 to-emerald-500",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}
              ></div>

              <div className="relative">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
