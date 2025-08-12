"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
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
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const { isReduced } = useAnimationPreference()

  // Get scroll position
  const { scrollY } = useScroll()
  const [shouldRender, setShouldRender] = useState(!isReduced)

  // Skip parallax effect if reduced motion is preferred
  if (!shouldRender) {
    return <div className={className}>{children}</div>
  }

  // Update element position on resize and initial load
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const updatePosition = () => {
      const { top } = element.getBoundingClientRect()
      setElementTop(top + window.scrollY)
      setClientHeight(window.innerHeight)
    }

    updatePosition()
    window.addEventListener("resize", updatePosition)
    return () => window.removeEventListener("resize", updatePosition)
  }, [])

  // Calculate parallax position
  const transformRange = direction === "vertical" ? [0, 1] : [-0.5, 0.5]

  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    direction === "vertical" ? [offset - speed * 100, offset + speed * 100] : [0, 0],
  )

  const x = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    direction === "horizontal" ? [offset - speed * 100, offset + speed * 100] : [0, 0],
  )

  return (
    <motion.div ref={ref} style={{ x, y }} className={className}>
      {children}
    </motion.div>
  )
}
