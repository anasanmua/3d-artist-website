"use client"

import React, { useState } from "react"
import { Phone, Mail, User, MapPin, Github, Linkedin, MessageCircle } from "lucide-react"
import { useLang } from "@/lib/i18n-provider"
import { dictionary } from "@/lib/i18n"

export function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false)
    const { t } = useLang()

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText("jrosadogarcie@gmail.com")
            setCopiedEmail(true)
            setTimeout(() => setCopiedEmail(false), 2000)
        } catch (err) {
            console.error("Error al copiar:", err)
        }
    }

    return (
        <section id="contact" className="py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
                            {t(dictionary.contact.label)}
                        </p>

                        <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">
                            {t(dictionary.contact.title)}
                        </h2>

                        <p className="text-muted-foreground leading-relaxed">
                            {t(dictionary.contact.desc)}
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="space-y-6">

                        {/* Nombre */}
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
                            <User className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">{t(dictionary.contact.name)}</p>
                                <p className="text-lg font-medium">
                                    Jaime Rosado Garcie
                                </p>
                            </div>
                        </div>

                        {/* Teléfono */}
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
                            <Phone className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">{t(dictionary.contact.phone)}</p>
                                <a
                                    href="tel:+346486700966"
                                    className="text-lg font-medium hover:text-primary transition"
                                >
                                    +34 648 670 096
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
                            <Mail className="h-6 w-6 text-primary" />
                            <div className="flex-1">
                                <p className="text-sm text-muted-foreground mb-3">{t(dictionary.contact.email)}</p>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=jrosadogarcie@gmail.com&su=Proyectos%20y%20Colaboraciones"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-3 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition text-xs font-medium"
                                    >
                                        Gmail
                                    </a>
                                    <button
                                        onClick={handleCopyEmail}
                                        className="px-3 py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition text-xs font-medium"
                                        title={t(dictionary.contact.copyEmail)}
                                    >
                                        {copiedEmail ? t(dictionary.contact.copied) : t(dictionary.contact.copyEmail)}
                                    </button>
                                </div>
                                <p className="text-xs text-muted-foreground mt-3">jrosadogarcie@gmail.com</p>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
                            <MessageCircle className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">{t(dictionary.contact.whatsapp)}</p>

                                <a
                                    href="https://wa.me/34648670096"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-medium hover:text-primary transition"
                                >
                                    {t(dictionary.contact.whatsappCta)}
                                </a>

                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
                            <Linkedin className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">{t(dictionary.contact.linkedin)}</p>

                                <a
                                    href="https://www.linkedin.com/in/jaime-rosado-garcie/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-medium hover:text-primary transition"
                                >
                                    www.linkedin.com/in/jaime-rosado-garcie


                                </a>

                            </div>
                        </div>


                        {/* GitHub */}
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
                            <Github className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">{t(dictionary.contact.github)}</p>

                                <a
                                    href="https://github.com/jrosadogarcie"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-medium hover:text-primary transition"
                                >
                                    github.com/jrosadogarcie
                                </a>

                            </div>
                        </div>




                        {/* Ubicación */}
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
                            <MapPin className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">{t(dictionary.contact.location)}</p>
                                <p className="text-lg font-medium">
                                    Madrid, España
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
