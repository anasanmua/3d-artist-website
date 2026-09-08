"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { useLang } from "@/lib/i18n-provider"
import { dictionary } from "@/lib/i18n"

interface ImageLightboxProps {
  images: string[]
}

export function ImageLightbox({ images }: ImageLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [zoom, setZoom] = useState(100)
  const imageRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const { t } = useLang()

  const goToPrevious = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : (prev ?? 0) - 1
    )
    resetZoom()
  }

  const goToNext = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : (prev ?? 0) + 1
    )
    resetZoom()
  }

  const resetZoom = () => {
    setZoom(100)
    setPosition({ x: 0, y: 0 })
  }

  const handleZoom = (direction: "in" | "out") => {
    setZoom((prev) => {
      const newZoom = direction === "in" ? prev + 20 : prev - 20
      return Math.max(100, Math.min(300, newZoom))
    })
  }

  // Zoom con scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (selectedIndex === null) return
      e.preventDefault()
      
      setZoom((prev) => {
        const newZoom = e.deltaY < 0 ? prev + 20 : prev - 20
        return Math.max(100, Math.min(300, newZoom))
      })
    }

    if (selectedIndex !== null) {
      window.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => window.removeEventListener("wheel", handleWheel)
  }, [selectedIndex])

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "Escape") setSelectedIndex(null)
      if (e.key === "+") handleZoom("in")
      if (e.key === "-") handleZoom("out")
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex])

  // Drag para mover imagen cuando está zoomada
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom === 100) return
    setIsDragging(true)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Doble click para resetear zoom
  const handleDoubleClick = () => {
    resetZoom()
  }

  return (
    <>
      {/* Grid de imágenes */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={image}
            className="relative aspect-video bg-secondary rounded-lg border border-border overflow-hidden cursor-pointer group"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={`/gallery/${image}`}
              alt={`Gallery ${index}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal/Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute -top-12 right-0 text-white hover:text-white transition z-10"
              aria-label={t(dictionary.lightbox.close)}
            >
              <X className="h-8 w-8" />
            </button>

            {/* Controles de zoom */}
            <div className="absolute top-4 left-4 z-20 flex gap-2 bg-black/50 rounded-lg p-2">
              <button
                onClick={() => handleZoom("in")}
                className="p-2 bg-primary/70 hover:bg-primary rounded transition disabled:opacity-50"
                disabled={zoom >= 300}
                aria-label={t(dictionary.lightbox.zoomIn)}
              >
                <ZoomIn className="h-5 w-5" />
              </button>
              <span className="px-3 py-2 text-white text-sm font-medium min-w-[60px] text-center">{zoom}%</span>
              <button
                onClick={() => handleZoom("out")}
                className="p-2 bg-primary/70 hover:bg-primary rounded transition disabled:opacity-50"
                disabled={zoom <= 100}
                aria-label={t(dictionary.lightbox.zoomOut)}
              >
                <ZoomOut className="h-5 w-5" />
              </button>
              <button
                onClick={resetZoom}
                className="px-3 py-2 bg-primary/70 hover:bg-primary rounded text-white text-xs transition"
                aria-label={t(dictionary.lightbox.reset)}
              >
                {t(dictionary.lightbox.reset)}
              </button>
            </div>

            {/* Imagen agrandada */}
            <div 
              ref={imageRef}
              className="relative w-full bg-black rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onDoubleClick={handleDoubleClick}
            >
              <div className="relative aspect-video w-full flex items-center justify-center">
                <div
                  className="transition-transform duration-200"
                  style={{
                    transform: `scale(${zoom / 100}) translate(${position.x}px, ${position.y}px)`,
                  }}
                >
                  <Image
                    src={`/gallery/${images[selectedIndex]}`}
                    alt={`Gallery ${selectedIndex}`}
                    width={1200}
                    height={800}
                    quality={85}
                    className="object-contain pointer-events-none"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Navegación */}
            <div className="flex justify-between items-center mt-6 text-white">
              <button
                onClick={goToPrevious}
                className="p-2 bg-primary/70 hover:bg-primary rounded-lg transition flex items-center gap-2"
                aria-label={t(dictionary.lightbox.previous)}
              >
                <ChevronLeft className="h-5 w-5" />
                {t(dictionary.lightbox.previous)}
              </button>

              <span className="text-sm font-medium">
                {selectedIndex + 1} {t(dictionary.lightbox.of)} {images.length}
              </span>

              <button
                onClick={goToNext}
                className="p-2 bg-primary/70 hover:bg-primary rounded-lg transition flex items-center gap-2"
                aria-label={t(dictionary.lightbox.next)}
              >
                {t(dictionary.lightbox.next)}
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Help text */}
            <p className="text-center text-xs text-white mt-4">
              {t(dictionary.lightbox.hint)}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
