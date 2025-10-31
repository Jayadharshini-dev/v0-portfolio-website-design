"use client"

import type React from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-slate-300" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email", color: "hover:text-purple-400" },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="group">
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-slate-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder-slate-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none placeholder-slate-500"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white rounded-lg transition-all font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Let's Connect
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg hover:border-blue-400/30 transition-all">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Email</p>
                <a
                  href="mailto:jayadharshini@example.com"
                  className="text-blue-400 hover:text-teal-400 transition-colors font-medium mt-1 block"
                >
                  jayadharshini@example.com
                </a>
              </div>
              <div className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg hover:border-purple-400/30 transition-all">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Location</p>
                <p className="text-slate-300 font-medium mt-1">Chennai, India</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide mb-4">Follow me</p>
              <div className="flex gap-4">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={idx}
                      href={link.href}
                      aria-label={link.label}
                      className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg hover:border-blue-400/50 transition-all hover:bg-slate-800/80 group/social"
                    >
                      <Icon size={20} className={`text-slate-300 ${link.color} transition-colors`} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-slate-700/50 text-center text-slate-400">
          <p>© 2025 Jayadharshini R. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
