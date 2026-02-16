"use client"

import { useEffect, useRef, useState } from "react"

interface UseInViewOptions {
  threshold?: number | number[]
  margin?: string
}

export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.1, margin = "0px" } = options
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: margin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, margin])

  return { ref, isInView }
}
