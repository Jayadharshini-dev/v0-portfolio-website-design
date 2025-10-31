"use client"

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground">
            Passionate developer crafting elegant digital solutions with modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity blur-lg"></div>
              <div className="relative w-full h-96 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 border border-primary/50 flex items-center justify-center overflow-hidden hover:border-accent/70 transition-all duration-300">
                <img
                  src="/about-portrait.png"
                  alt="About portrait"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Jayadharshini R
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a software developer and tech enthusiast currently pursuing B.Tech in Computer Science at VIT
                Chennai. Passionate about building scalable applications and creating exceptional digital experiences.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest">Education & Experience</h4>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg hover:border-accent/50 hover:shadow-lg hover:shadow-primary/20 transition-all">
                  <p className="font-semibold text-foreground">B.Tech Computer Science & Engineering</p>
                  <p className="text-sm text-muted-foreground">VIT Chennai • 2nd Year</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg hover:border-cyan-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                  <p className="font-semibold text-foreground">Internship - Software Development</p>
                  <p className="text-sm text-muted-foreground">HCLTech • Current</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest">Focus Areas</h4>
              <p className="text-muted-foreground leading-relaxed">
                Web development, full-stack engineering, UI/UX design, cloud infrastructure, and modern web
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
