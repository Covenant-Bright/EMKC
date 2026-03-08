"use client"

<<<<<<< HEAD
import { useEffect, useState, type ReactNode } from "react"
=======
import { useRef, useEffect, useState, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
  )
}
