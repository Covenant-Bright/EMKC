"use client"

import React from "react"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useAnimationPreference } from "@/context/animation-context"

interface AnimatedSvgProps {
  children: ReactNode
  className?: string
  pathClassName?: string
  delay?: number
  duration?: number
  repeat?: number | boolean
  draw?: boolean
}

export default function AnimatedSvg({
  children,
  className = "",
  pathClassName = "",
  delay = 0,
  duration = 2,
  repeat = false,
  draw = true,
}: AnimatedSvgProps) {
  const { isReduced } = useAnimationPreference()

  // If reduced motion is preferred, just render the SVG without animation
  if (isReduced) {
    return <svg className={className}>{children}</svg>
  }

  // Animation variants for the SVG
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  // Animation variants for the SVG paths
  const pathVariants = {
    hidden: {
      opacity: draw ? 0 : 1,
      pathLength: draw ? 0 : 1,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration,
        ease: "easeInOut",
        repeat: repeat ? Number.POSITIVE_INFINITY : 0,
        repeatType: "reverse" as const,
        repeatDelay: repeat ? 1 : 0,
      },
    },
  }

  return (
    <motion.svg className={className} initial="hidden" animate="visible" variants={svgVariants}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            className: `${child.props.className || ""} ${pathClassName}`,
            variants: pathVariants,
            initial: "hidden",
            animate: "visible",
          })
        }
        return child
      })}
    </motion.svg>
  )
}
