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
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div>
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full mb-6">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-secondary font-semibold text-sm">Available for work</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Jayadharshini
              <span className="block text-secondary">R.</span>
            </h1>

            <p className="text-lg text-primary/80 mb-3 font-semibold">Software Developer & Web Designer</p>

            <p className="text-foreground/60 max-w-xl mb-8 leading-relaxed text-base">
              Passionate developer pursuing B.Tech in Computer Science. Building efficient, user-friendly applications
              and crafting beautiful digital experiences with modern technologies.
            </p>

            <div className="flex gap-4 mb-8 flex-wrap">
              <Button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-6 text-base font-semibold rounded-lg"
              >
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

            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-lg bg-card/50 border border-primary/20 hover:border-secondary/50 hover:bg-card transition-all"
              >
                <Github size={20} className="text-primary" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-card/50 border border-primary/20 hover:border-secondary/50 hover:bg-card transition-all"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-card/50 border border-primary/20 hover:border-secondary/50 hover:bg-card transition-all"
              >
                <Mail size={20} className="text-primary" />
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative hidden md:flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
            <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-card to-card/50 border border-secondary/30 overflow-hidden flex items-center justify-center">
              <img src="/about-portrait.png" alt="Jayadharshini" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-primary hover:text-secondary transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}
