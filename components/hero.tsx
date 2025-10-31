"use client"

import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30" />
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-primary to-accent p-1 border border-primary/50">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <div className="text-4xl font-bold text-primary">JR</div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Jayadharshini R
        </h1>

        <p className="text-lg md:text-xl text-primary/80 mb-2 font-semibold">
          Software Developer | Web Designer | Tech Enthusiast
        </p>

        <p className="text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed text-base md:text-lg">
          A passionate developer currently pursuing B.Tech in Computer Science and Engineering at VIT Chennai. Building
          efficient, user-friendly applications and crafting beautiful digital experiences with modern technologies.
        </p>

        <div className="flex gap-4 justify-center mb-16 flex-wrap">
          <Button onClick={() => scrollToSection("projects")} className="px-8 py-6 text-base font-semibold rounded-lg">
            View My Work
            <ExternalLink size={18} />
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="px-8 py-6 text-base font-semibold rounded-lg border-primary/40 hover:border-primary/80"
          >
            Get In Touch
            <Mail size={18} />
          </Button>
        </div>

        <div className="flex gap-4 justify-center mb-16">
          <a
            href="#"
            className="p-3 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 hover:bg-card transition-all"
          >
            <Github size={20} className="text-primary" />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 hover:bg-card transition-all"
          >
            <Linkedin size={20} className="text-primary" />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 hover:bg-card transition-all"
          >
            <Mail size={20} className="text-primary" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce mx-auto block text-primary hover:text-accent transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}
