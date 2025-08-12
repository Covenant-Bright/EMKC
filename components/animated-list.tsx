"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { listItem } from "@/lib/animation-variants"

interface AnimatedListProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
}

export default function AnimatedList({ children, className = "", delay = 0.2, staggerDelay = 0.1 }: AnimatedListProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <motion.ul initial="hidden" animate="visible" variants={containerVariants} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.li key={index} variants={listItem}>
              {child}
            </motion.li>
          ))
        : children}
    </motion.ul>
  )
}
