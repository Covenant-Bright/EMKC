"use client"

import { useRef, useEffect, useState } from "react"

interface UseAnimationOptions {
  threshold?: number
  once?: boolean
  rootMargin?: string
}

/**
 * Custom hook for triggering animations when elements enter the viewport
 */
export function useAnimation({ threshold = 0.1, once = true, rootMargin = "0px" }: UseAnimationOptions = {}) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) observer.unobserve(currentRef)
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [threshold, once, rootMargin])

  return { ref, isVisible }
}
