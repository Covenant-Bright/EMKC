"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { fadeIn, fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn } from "@/lib/animation-variants"

type AnimationVariant = "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export default function AnimatedSection({
  children,
  className = "",
  variant = "fadeIn",
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, threshold })

  // Select the appropriate animation variant
  const getVariant = () => {
    switch (variant) {
      case "fadeInUp":
        return fadeInUp
      case "fadeInDown":
        return fadeInDown
      case "fadeInLeft":
        return fadeInLeft
      case "fadeInRight":
        return fadeInRight
      case "scaleIn":
        return scaleIn
      default:
        return fadeIn
    }
  }

  // Custom transition based on props
  const customTransition = {
    duration,
    delay,
    ease: "easeOut",
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      variants={getVariant()}
      transition={customTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}
