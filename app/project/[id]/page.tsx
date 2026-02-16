import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { YouTubePlayer } from "@/components/youtube-player";
import { ImageLightbox } from "@/components/image-lightbox";
import { projects, getProjectById } from "@/lib/projects";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Jaime Rosado Garcie`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  console.log(project.galleryImages);
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Link */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
              {project.category}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Main Image/Video Area */}
          <div className="relative rounded-lg overflow-hidden bg-card border border-border mb-12">
            {project.videoUrl ? (
              <YouTubePlayer
                videoId={project.videoUrl}
                title={project.title}
                className="rounded-lg"
              />
            ) : (
              <div className="relative aspect-video">
                <Image
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">About This Project</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {project.details || project.description}
                </p>
              </div>
              {/* Gallery placeholder */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-6">Gallery</h3>
                {project.galleryVideos &&
                  project.galleryVideos.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.galleryVideos.map((i) => (
                        <div
                          key={i}
                          className="aspect-video bg-secondary rounded-lg border border-border flex items-center justify-center"
                        >
                          <YouTubePlayer
                            key={i}
                            videoId={i}
                            title={"testing title"}
                          />{" "}
                        </div>
                      ))}
                    </div>
                  )}
                {project.galleryImages &&
                  project.galleryImages.length > 0 && (
                    <ImageLightbox images={project.galleryImages} />
                  )}
              </div>
            </div>
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tools & Software */}
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">
                  Tools & Software
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <h3 className="font-semibold mb-2 text-foreground">
                  Interested in similar work?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Let&apos;s discuss your project and see how I can help.
                </p>
                <Button asChild className="w-full">
                  <Link href="/#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-8">Related Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.id}
                    href={`/project/${related.id}`}
                    className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={`/cover/${related.cardImage}`}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-primary font-mono uppercase tracking-wider mb-1">
                        {related.category}
                      </p>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                        {related.title}
                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
