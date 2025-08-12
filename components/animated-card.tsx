"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cardHover } from "@/lib/animation-variants"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  interactive?: boolean
}

export default function AnimatedCard({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  interactive = true,
}: AnimatedCardProps) {
  const cardVariants = {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={interactive ? cardHover : undefined}
      className={className}
    >
      {children}
    </motion.div>
  )
}
