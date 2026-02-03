import { Linkedin, Mail, Globe } from "lucide-react"
import Link from "next/link"

const skills = [
  { category: "3D Software", items: ["Maya", "Blender", "3ds Max", "ZBrush", "Houdini"] },
  { category: "Game Engines", items: ["Unreal Engine", "Unity"] },
  { category: "VFX & Compositing", items: ["Nuke", "After Effects", "Niagara", "EmberGen"] },
  { category: "Texturing", items: ["Substance Painter", "Substance Designer", "Mari"] },
]

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@jaimerosado.com", label: "Email" },
  { icon: Globe, href: "#", label: "ArtStation" },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Bio */}
          <div>
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Jaime Rosado Garcie
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a 3D artist and technical director with a passion for creating immersive 
                digital experiences. With expertise spanning VFX, character animation, rigging, 
                and real-time graphics, I bring creative visions to life with technical precision.
              </p>
              <p>
                My work has contributed to game development, architectural visualization, 
                and film production. I specialize in bridging the gap between artistic vision 
                and technical execution, always pushing the boundaries of what is possible.
              </p>
              <p>
                When I am not creating digital worlds, you can find me exploring the latest 
                in real-time rendering technology or experimenting with procedural generation tools.
              </p>
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
            <h3 className="text-xl font-semibold mb-6">Skills & Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-sm font-mono text-primary uppercase tracking-wider mb-3">
                    {skillGroup.category}
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
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
