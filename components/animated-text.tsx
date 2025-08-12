"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  as = "div",
}: AnimatedTextProps) {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  }

  const Component = motion[as]

  return (
    <Component initial="hidden" animate="visible" variants={textVariants} className={className}>
      {children}
    </Component>
  )
}
