"use client";

import { Button } from "@/components/ui/button";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Globe,
  ExternalLink,
} from "lucide-react";

export default function CVPage() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      {/* Print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
          .print-container {
            width: 210mm;
            min-height: 297mm;
            padding: 15mm;
            margin: 0;
            background: #0a0a0f !important;
          }
        }
      `}</style>

      {/* Download button - hidden in print */}
      <div className="no-print fixed top-6 right-6 z-50">
        <Button
          onClick={handleDownloadPDF}
          className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
        >
          <Download className="w-4 h-4" />
          Descargar PDF
        </Button>
      </div>

      {/* CV Content */}
      <div className="print-container min-h-screen bg-background text-foreground p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8 pb-6 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
                JAIME ROSADO GARCIE
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium">
                3D Artist / Technical Artist
              </p>
            </div>
            <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              <a
                href="mailto:jrosadogarcie@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                jrosadogarcie@gmail.com
              </a>
              <a
                href="tel:+34648670096"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +34 648 670 096
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Madrid, Spain
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                23/01/1999
              </div>
            </div>
          </div>
        </header>

        {/* Two column layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content - 2 cols */}
          <div className="md:col-span-2 space-y-8">
            {/* About */}
            <section>
              <h2 className="text-lg font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                Profile
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                As a 3D artist, I apply technical skills and creativity
                developed through projects in my 3D animation and interactive
                environments courses. Notable projects include creating
                game-ready assets and environments in Unreal Engine, as well as
                designing high-poly and low-poly models for animation and
                visualization. My adaptability, problem-solving, and teamwork
                ensure efficient, high-quality results in 3D production.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-lg font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                Work Experience
              </h2>
              <div className="space-y-5">
                <div className="relative pl-4 border-l-2 border-border hover:border-primary transition-colors">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <h3 className="font-semibold text-foreground">
                    Technical Artist Intern
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    Electronic Arts
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Sept - Nov 2025 | Online
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Technical artist internship focusing on pipeline tools and
                    technical art solutions.
                  </p>
                </div>

                <div className="relative pl-4 border-l-2 border-border hover:border-primary transition-colors">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <h3 className="font-semibold text-foreground">
                    Technical Artist
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    Andrea Europe S.L
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Jul - Oct 2023
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Graphic design</li>
                    <li>• Image Retouching</li>
                    <li>• Web Design</li>
                  </ul>
                </div>

                <div className="relative pl-4 border-l-2 border-border hover:border-primary transition-colors">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <h3 className="font-semibold text-foreground">3D Artist</h3>
                  <p className="text-primary text-sm font-medium">
                    White Dragon Tattoo Studios
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    Mar - Jun 2022 | Internship
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Customised 3D projects and visualization work.
                  </p>
                </div>

                <div className="relative pl-4 border-l-2 border-border hover:border-primary transition-colors">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <h3 className="font-semibold text-foreground">
                    Freelance 3D Artist
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    Self-employed
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    2020 - Present
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Architecture projects</li>
                    <li>• Short Films</li>
                    <li>• 3D Covers</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-lg font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-primary" />
                Education
              </h2>
              <div className="space-y-4">
                <div className="relative pl-4 border-l-2 border-border hover:border-primary transition-colors">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <h3 className="font-semibold text-foreground">
                    Advanced Master&apos;s Degree - Technical Artist AAA Video
                    Games
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    Voxel School
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2024 - 2025 | Madrid
                  </p>
                </div>

                <div className="relative pl-4 border-l-2 border-border hover:border-primary transition-colors">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <h3 className="font-semibold text-foreground">
                    ESL Intensive English Program
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    Red Rocks Community College
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2024 | Colorado, USA
                  </p>
                </div>

                <div className="relative pl-4 border-l-2 border-border hover:border-primary transition-colors">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <h3 className="font-semibold text-foreground">
                    Bachelor&apos;s Degree - 3D Art, Animation and Visual
                    Effects
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    Teesside University / CEV
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2020 - 2023 | Madrid
                  </p>
                </div>

                <div className="relative pl-4 border-l-2 border-border hover:border-primary transition-colors">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <h3 className="font-semibold text-foreground">
                    Online Courses
                  </h3>
                  <p className="text-primary text-sm font-medium">
                    ODIN 3D & Domestika
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Unreal Engine Video Games & Architecture (2023)
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - 1 col */}
          <div className="space-y-6">
            {/* Skills */}
            <section className="bg-card p-5 rounded-lg border border-border">
              <h2 className="text-lg font-semibold text-primary uppercase tracking-wider mb-4">
                Technical Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    Modeling
                  </h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Organic and hard surface modeling</li>
                    <li>• High/low-poly optimization</li>
                    <li>• Hand-painted & procedural textures</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    Unreal Engine
                  </h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Environment development</li>
                    <li>• Material & Landscape Shaders</li>
                    <li>• Visual Effects (Niagara)</li>
                    <li>• Blueprints & PCGs</li>
                    <li>• Level Design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    Animation & Rigging
                  </h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 3D Animation</li>
                    <li>• Rigging</li>
                    <li>• Character Design</li>
                    <li>• Virtual Production</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    Technical
                  </h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Python & Vex programming</li>
                    <li>• Pipeline tools & HDAs</li>
                    <li>• Stage lighting & rendering</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Software */}
            <section className="bg-card p-5 rounded-lg border border-border">
              <h2 className="text-lg font-semibold text-primary uppercase tracking-wider mb-3">
                Software
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Unreal Engine",
                  "Maya",
                  "Blender",
                  "Houdini",
                  "ZBrush",
                  "Substance Painter",
                  "Photoshop",
                  "After Effects",
                ].map((software) => (
                  <span
                    key={software}
                    className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                  >
                    {software}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="bg-card p-5 rounded-lg border border-border">
              <h2 className="text-lg font-semibold text-primary uppercase tracking-wider mb-3">
                Languages
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">Spanish</span>
                  <span className="text-xs text-primary">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground">English</span>
                  <span className="text-xs text-primary">Fluent</span>
                </div>
              </div>
            </section>

            {/* Links */}
            <section className="bg-card p-5 rounded-lg border border-border">
              <h2 className="text-lg font-semibold text-primary uppercase tracking-wider mb-3">
                Portfolio & Reels
              </h2>
              <div className="space-y-2">
                <a
                  href="https://jrosadogarcie.wixsite.com/jaimerosadogarcie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Portfolio Website
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo Reel
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  Short Films: INSEXCTS, UNFOLLOW
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Jaime Rosado Garcie | 3D Artist & Technical Artist |
            jrosadogarcie@gmail.com
          </p>
        </footer>
      </div>
    </>
  );
}
