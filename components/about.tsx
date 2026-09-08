"use client"

import { Linkedin, Mail, Globe } from "lucide-react"
import Link from "next/link"
import { useLang } from "@/lib/i18n-provider"
import { dictionary } from "@/lib/i18n"

const skills = [
  { categoryKey: "software" as const, items: ["Maya", "Blender", "3ds Max", "ZBrush", "Houdini"] },
  { categoryKey: "engines" as const, items: ["Unreal Engine", "Unity"] },
  { categoryKey: "vfx" as const, items: ["Nuke", "After Effects", "Niagara", "EmberGen"] },
  { categoryKey: "texturing" as const, items: ["Substance Painter", "Substance Designer", "Mari"] },
]

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@jaimerosado.com", label: "Email" },
  { icon: Globe, href: "#", label: "ArtStation" },
]

export function About() {
  const { t } = useLang()

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Bio */}
          <div>
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
              {t(dictionary.about.label)}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
              Jaime Rosado Garcie
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t(dictionary.about.bio1)}</p>
              <p>{t(dictionary.about.bio2)}</p>
              <p>{t(dictionary.about.bio3)}</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-6">{t(dictionary.about.skillsTitle)}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.categoryKey}>
                  <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-3">
                    {t(dictionary.about.skillCategories[skillGroup.categoryKey])}
                  </h4>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-muted-foreground text-sm flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-foreground">8+</p>
                <p className="text-sm text-muted-foreground">{t(dictionary.about.stats.years)}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">{t(dictionary.about.stats.projects)}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">{t(dictionary.about.stats.clients)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
