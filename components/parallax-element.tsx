"use client"

import { useEffect, useState, type ReactNode } from "react"
import { useAnimationPreference } from "@/context/animation-context"

interface ParallaxElementProps {
  children: ReactNode
  speed?: number // -1 to 1, negative values move faster, positive move slower
  className?: string
  direction?: "vertical" | "horizontal"
  offset?: number // additional offset in pixels
}

export default function ParallaxElement({
  children,
  speed = 0.2,
  className = "",
  direction = "vertical",
  offset = 0,
}: ParallaxElementProps) {
  const { isReduced } = useAnimationPreference()
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches)
  }, [])

  if (isReduced || isTouchDevice) {
    return <div className={className}>{children}</div>
  }

  const x = direction === "horizontal" ? offset + speed * 8 : 0
  const y = direction === "vertical" ? offset + speed * 12 : 0

  return (
    <div className={`${className} media-surface`} style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}>
      {children}
    </div>
  )
}
