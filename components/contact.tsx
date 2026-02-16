"use client"

import React, { useState } from "react"
import { Phone, Mail, User, MapPin, Github, Linkedin, MessageCircle } from "lucide-react"
import { useInView } from "@/lib/useInView"

export function Contact() {
    const { ref, isInView } = useInView({ threshold: 0.2 })
    const [copiedEmail, setCopiedEmail] = useState(false)

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
        <section ref={ref} id="contact" className="py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">

                    {/* Header */}
                    <div className={`text-center mb-12 transition-all duration-700 ${
                        isInView ? "animate-slide-up" : "opacity-0-start translate-y-10-start"
                    }`}>
                        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
                            Contacto
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Información de contacto
                        </h2>

                        <p className="text-muted-foreground leading-relaxed">
                            Puedes contactarme directamente a través de cualquiera de estos medios.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="space-y-6">

                        {/* Nombre */}
                        <div className={`flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition ${
                            isInView ? "animate-slide-left" : "opacity-0-start"
                        }`}
                        style={isInView ? { animationDelay: "100ms" } : {}}>
                            <User className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Nombre</p>
                                <p className="text-lg font-medium">
                                    Jaime Rosado Garcie
                                </p>
                            </div>
                        </div>

                        {/* Teléfono */}
                        <div className={`flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition ${
                            isInView ? "animate-slide-left" : "opacity-0-start"
                        }`}
                        style={isInView ? { animationDelay: "200ms" } : {}}>
                            <Phone className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Teléfono</p>
                                <a
                                    href="tel:+346486700966"
                                    className="text-lg font-medium hover:text-primary transition"
                                >
                                    +34 648 670 096
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className={`flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition ${
                            isInView ? "animate-slide-left" : "opacity-0-start"
                        }`}
                        style={isInView ? { animationDelay: "300ms" } : {}}>
                            <Mail className="h-6 w-6 text-primary" />
                            <div className="flex-1">
                                <p className="text-sm text-muted-foreground mb-3">Email</p>
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
                                        title="Copiar al portapapeles"
                                    >
                                        {copiedEmail ? "✓ Copiado!" : "Copiar email"}
                                    </button>
                                </div>
                                <p className="text-xs text-muted-foreground mt-3">jrosadogarcie@gmail.com</p>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className={`flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition ${
                            isInView ? "animate-slide-left" : "opacity-0-start"
                        }`}
                        style={isInView ? { animationDelay: "400ms" } : {}}>
                            <MessageCircle className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">WhatsApp</p>

                                <a
                                    href="https://wa.me/34648670096"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-medium hover:text-primary transition"
                                >
                                    Enviar mensaje por WhatsApp
                                </a>

                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className={`flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition ${
                            isInView ? "animate-slide-left" : "opacity-0-start"
                        }`}
                        style={isInView ? { animationDelay: "500ms" } : {}}>
                            <Linkedin className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">LinkedIn</p>

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
                        <div className={`flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition ${
                            isInView ? "animate-slide-left" : "opacity-0-start"
                        }`}
                        style={isInView ? { animationDelay: "600ms" } : {}}>
                            <Github className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">GitHub</p>

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
                        <div className={`flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition ${
                            isInView ? "animate-slide-left" : "opacity-0-start"
                        }`}
                        style={isInView ? { animationDelay: "700ms" } : {}}>
                            <MapPin className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Ubicación</p>
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
