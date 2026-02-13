"use client"

import React from "react"
import { Phone, Mail, User, MapPin, Github, Linkedin, MessageCircle } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-12">
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
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
                            <User className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Nombre</p>
                                <p className="text-lg font-medium">
                                    Jaime Rosado Garcie
                                </p>
                            </div>
                        </div>

                        {/* Teléfono */}
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
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
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
                            <Mail className="h-6 w-6 text-primary" />
                            <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <a
                                    href="mailto:tu@email.com"
                                    className="text-lg font-medium hover:text-primary transition"
                                >
                                    jrosadogarcie@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
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
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
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
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
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
                        <div className="flex items-center gap-4 p-6 border rounded-xl bg-muted/20 hover:bg-muted/30 transition">
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
