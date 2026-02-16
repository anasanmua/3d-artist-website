"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Play } from "lucide-react"
import { projects, categories } from "@/lib/projects"
import { cn } from "@/lib/utils"
import { useInView } from "@/lib/useInView"

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section ref={ref} id="work" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`mb-12 md:mb-16 transition-all duration-700 ${
          isInView ? "animate-slide-up" : "opacity-0-start translate-y-10-start"
        }`}>
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            A curated selection of projects spanning VFX, animation, rigging, modeling, and more. 
            Each piece represents a unique challenge and creative solution.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              className={`group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 ${
                isInView ? "animate-scale" : "opacity-0-start"
              }`}
              style={isInView ? { animationDelay: `${index * 100}ms` } : {}}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={`/cover/${project.cardImage}` || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.videoUrl && (
                  <div className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-primary/90 shadow-md z-10">
                    <Play className="h-4 w-4 text-primary-foreground ml-0.5" />
                  </div>
                )}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="text-sm font-medium">View Project</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-primary font-mono uppercase tracking-wider mb-2">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
