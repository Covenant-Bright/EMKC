"use client"

import React, { useState, useEffect, useRef, type ReactNode } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useAnimationPreference } from "@/context/animation-context"

interface AnimatedRevealListProps {
  children: ReactNode[]
  delay?: number
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
  itemClassName?: string
  once?: boolean
  threshold?: number
}

export default function AnimatedRevealList({
  children,
  delay = 0.1,
  staggerDelay = 0.1,
  direction = "up",
  className = "",
  itemClassName = "",
  once = true,
  threshold = 0.1,
}: AnimatedRevealListProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, threshold })
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const { isReduced } = useAnimationPreference()

  // Set initial animation direction offsets
  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { y: 30, opacity: 0 }
      case "down":
        return { y: -30, opacity: 0 }
      case "left":
        return { x: 30, opacity: 0 }
      case "right":
        return { x: -30, opacity: 0 }
    }
  }

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true)
    } else if (!once) {
      setShouldAnimate(false)
    }
  }, [isInView, once])

  // If reduced motion is preferred, just render the children without animation
  if (isReduced) {
    return (
      <div className={className}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className={itemClassName}>
            {child}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div ref={ref} className={className}>
      <AnimatePresence>
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            className={itemClassName}
            initial={getInitialOffset()}
            animate={shouldAnimate ? { x: 0, y: 0, opacity: 1 } : getInitialOffset()}
            transition={{
              duration: 0.5,
              delay: delay + index * staggerDelay,
              ease: "easeOut",
            }}
          >
            {child}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
