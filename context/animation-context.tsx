"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type AnimationContextType = {
  isReduced: boolean
  prefersReducedMotion: boolean
  setReduced: (value: boolean) => void
}

const AnimationContext = createContext<AnimationContextType>({
  isReduced: false,
  prefersReducedMotion: false,
  setReduced: () => {},
})

export function AnimationProvider({ children }: { children: ReactNode }) {
  // Check if user prefers reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  // User can manually override to reduce motion
  const [isReduced, setIsReduced] = useState(false)

  useEffect(() => {
    // Check for system preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Function to set reduced motion manually
  const setReduced = (value: boolean) => {
    setIsReduced(value)
    // Store preference
    if (typeof window !== "undefined") {
      localStorage.setItem("reduced-motion", value.toString())
    }
  }

  // Load saved preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("reduced-motion")
      if (saved !== null) {
        setIsReduced(saved === "true")
      }
    }
  }, [])

  return (
    <AnimationContext.Provider
      value={{
        isReduced: isReduced || prefersReducedMotion,
        prefersReducedMotion,
        setReduced,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}

export const useAnimationPreference = () => useContext(AnimationContext)
