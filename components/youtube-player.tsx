"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface YouTubePlayerProps {
  videoId: string
  title: string
  className?: string
}

/**
 * Extracts a YouTube video ID from various URL formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - Just the VIDEO_ID directly
 */
export function extractYouTubeId(url: string): string {
  if (!url) return ""

  // Already a plain ID (no slashes, no dots)
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url

  try {
    const parsed = new URL(url)

    // youtu.be/VIDEO_ID
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1)
    }

    // youtube.com/watch?v=VIDEO_ID
    if (parsed.searchParams.has("v")) {
      return parsed.searchParams.get("v") || ""
    }

    // youtube.com/embed/VIDEO_ID
    const embedMatch = parsed.pathname.match(/\/embed\/([a-zA-Z0-9_-]+)/)
    if (embedMatch) return embedMatch[1]

    // youtube.com/shorts/VIDEO_ID
    const shortsMatch = parsed.pathname.match(/\/shorts\/([a-zA-Z0-9_-]+)/)
    if (shortsMatch) return shortsMatch[1]
  } catch {
    // Not a valid URL, return as-is
  }

  return url
}

export function YouTubePlayer({ videoId, title, className }: YouTubePlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const id = extractYouTubeId(videoId)
  const thumbnailUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`

  if (!id) return null

  if (!isLoaded) {
    return (
      <button
        type="button"
        onClick={() => setIsLoaded(true)}
        className={`relative w-full aspect-video group cursor-pointer bg-card ${className || ""}`}
        aria-label={`Play video: ${title}`}
      >
        <Image
          src={thumbnailUrl || "/placeholder.svg"}
          alt={`Thumbnail for ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
        />
        <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
            <Play className="h-7 w-7 md:h-8 md:w-8 text-primary-foreground ml-1" />
          </div>
        </div>
      </button>
    )
  }

  return (
    <div className={`relative w-full aspect-video ${className || ""}`}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        loading="lazy"
      />
    </div>
  )
}
