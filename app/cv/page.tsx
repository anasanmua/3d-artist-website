import { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  ArrowLeft,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "CV | Jaime Rosado Garcie - 3D Artist",
  description:
    "Professional CV of Jaime Rosado Garcie - 3D Artist & Technical Artist",
};

const skills = {
  modeling: [
    "Organic and hard surface modeling",
    "High and low-poly optimization",
    "Hand-painted and procedural textures",
    "Stage lighting and rendering",
  ],
  technical: [
    "Programming with Python and Vex",
    "Tool creation for pipelines and HDAs",
    "Environment development",
    "Material and Landscape Shaders",
  ],
  unrealEngine: [
    "Visual Effects (Niagara)",
    "Blueprints",
    "PCGs",
    "Environment Artist",
    "Level Design",
  ],
  animation: ["3D Animation", "Rigging", "Character Design", "Virtual Production"],
};

const software = [
  "Blender",
  "Maya",
  "ZBrush",
  "Houdini",
  "Unreal Engine",
  "Substance Painter",
  "Substance Designer",
  "Marvelous Designer",
  "Photoshop",
  "After Effects",
];

const experience = [
  {
    title: "Technical Artist",
    company: "Electronic Arts",
    type: "Online Internships",
    period: "Sept - Nov 2025",
    tasks: ["Technical Artist role"],
  },
  {
    title: "Technical Artist",
    company: "Andrea Europe S.L",
    type: "",
    period: "Jul - Oct 2023",
    tasks: ["Graphic design", "Image Retouching", "Web Design"],
  },
  {
    title: "3D Shop",
    company: "White Dragon Tattoo Studios",
    type: "Internships",
    period: "March - June 2022",
    tasks: ["Customised projects"],
  },
  {
    title: "Freelance",
    company: "Self-employed",
    type: "",
    period: "2020 - Present",
    tasks: ["Architecture projects", "Short Films", "3D Covers"],
  },
];

const education = [
  {
    degree: "Advanced Master's Degree",
    field: "Technical Artist AAA Video Games",
    school: "Voxel School",
    location: "Madrid",
    period: "2024-2025",
  },
  {
    degree: "ESL Intensive English Program",
    field: "",
    school: "Red Rocks Community College",
    location: "Colorado",
    period: "2024",
  },
  {
    degree: "Bachelor's Degree",
    field: "3D Art, Animation and Visual Effects for Video Games and Films",
    school: "Tesside University / CEV",
    location: "Madrid",
    period: "2020-2023",
  },
];

const courses = [
  {
    name: "Unreal Engine Video Games Course",
    provider: "ODIN 3D",
    year: "2023",
  },
  {
    name: "Unreal Engine Architecture Course",
    provider: "Domestika",
    year: "2023",
  },
];

const shortfilms = [
  { name: "INSEXCTS", url: "#" },
  { name: "UNFOLLOW", url: "#" },
];

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </header>

      {/* CV Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Hero Section */}
        <section className="mb-12 rounded-xl border border-border bg-card p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Jaime Rosado Garcie
              </h1>
              <p className="mb-6 text-xl font-medium text-primary">
                3D Artist / Technical Artist
              </p>
              <p className="max-w-xl leading-relaxed text-muted-foreground">
                As a 3D artist, I apply technical skills and creativity developed
                through projects in my 3D animation and interactive environments
                courses. Notable projects include creating game-ready assets and
                environments in Unreal Engine, as well as designing high-poly and
                low-poly models for animation and visualization. My adaptability,
                problem-solving, and teamwork ensure efficient, high-quality results
                in 3D production.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:jrosadogarcie@gmail.com"
                  className="transition-colors hover:text-foreground"
                >
                  jrosadogarcie@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>648 670 096</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Madrid, Spain</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span>01/23/1999</span>
              </div>
              <div className="mt-2 flex gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Spanish - Native
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  English - Fluent
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Experience */}
            <section className="rounded-xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary" />
                Work Experience
              </h2>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div
                    key={index}
                    className="relative border-l-2 border-border pl-6 pb-6 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-foreground">{job.title}</h3>
                      {job.type && (
                        <span className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary">
                          {job.type}
                        </span>
                      )}
                    </div>
                    <p className="mb-1 text-sm font-medium text-primary">
                      {job.company}
                    </p>
                    <p className="mb-2 text-xs text-muted-foreground">{job.period}</p>
                    <ul className="space-y-1">
                      {job.tasks.map((task, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground before:mr-2 before:text-primary before:content-['•']"
                        >
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="rounded-xl border border-border bg-card p-6 md:p-8">
              <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold text-foreground">
                <span className="h-1 w-8 rounded-full bg-primary" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative border-l-2 border-border pl-6 pb-6 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    {edu.field && (
                      <p className="text-sm text-muted-foreground">{edu.field}</p>
                    )}
                    <p className="text-sm font-medium text-primary">{edu.school}</p>
                    <p className="text-xs text-muted-foreground">
                      {edu.location} • {edu.period}
                    </p>
                  </div>
                ))}
              </div>

              {/* Additional Courses */}
              <div className="mt-8 border-t border-border pt-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Additional Courses
                </h3>
                <div className="space-y-3">
                  {courses.map((course, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {course.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {course.provider}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {course.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Software */}
            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold text-foreground">
                <span className="h-1 w-6 rounded-full bg-primary" />
                Software
              </h2>
              <div className="flex flex-wrap gap-2">
                {software.map((sw) => (
                  <span
                    key={sw}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold text-foreground">
                <span className="h-1 w-6 rounded-full bg-primary" />
                Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    Modeling & Texturing
                  </h3>
                  <ul className="space-y-1">
                    {skills.modeling.map((skill) => (
                      <li key={skill} className="text-sm text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    Technical
                  </h3>
                  <ul className="space-y-1">
                    {skills.technical.map((skill) => (
                      <li key={skill} className="text-sm text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    Unreal Engine
                  </h3>
                  <ul className="space-y-1">
                    {skills.unrealEngine.map((skill) => (
                      <li key={skill} className="text-sm text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    Animation
                  </h3>
                  <ul className="space-y-1">
                    {skills.animation.map((skill) => (
                      <li key={skill} className="text-sm text-muted-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Portfolio Links */}
            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold text-foreground">
                <span className="h-1 w-6 rounded-full bg-primary" />
                Portfolio
              </h2>
              <div className="space-y-3">
                <a
                  href="/"
                  className="flex items-center justify-between rounded-lg border border-border bg-secondary p-3 transition-colors hover:border-primary"
                >
                  <span className="text-sm font-medium text-foreground">
                    Demo Reel
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
                {shortfilms.map((film) => (
                  <a
                    key={film.name}
                    href={film.url}
                    className="flex items-center justify-between rounded-lg border border-border bg-secondary p-3 transition-colors hover:border-primary"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {film.name}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-6">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-muted-foreground">
          <p>Jaime Rosado Garcie - 3D Artist / Technical Artist</p>
        </div>
      </footer>
    </div>
  );
}
