"use client"

import Link from "next/link"
import { Linkedin, Mail, Globe } from "lucide-react"
import { useLang } from "@/lib/i18n-provider"
import { dictionary } from "@/lib/i18n"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@jaimerosado.com", label: "Email" },
  { icon: Globe, href: "#", label: "ArtStation" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLang()

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-display text-lg font-bold uppercase tracking-wide text-foreground"
            >
              <span className="grid h-8 w-8 place-items-center clip-notch border border-primary/50 bg-primary/10 font-mono text-xs text-primary">
                JRG
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {currentYear} Jaime Rosado Garcie. {t(dictionary.footer.rights)}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
