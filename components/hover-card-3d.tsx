"use client"

import type React from "react"
import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import { useAnimationPreference } from "@/context/animation-context"

interface HoverCard3DProps {
  children: ReactNode
  className?: string
  intensity?: number
  delay?: number
  glare?: boolean
  glareIntensity?: number
  borderRadius?: number
  shadow?: boolean
  shadowColor?: string
  initialAnimation?: boolean
  initialScale?: number
}

export default function HoverCard3D({
  children,
  className = "",
  intensity = 15,
  delay = 0,
  glare = false,
  glareIntensity = 0.5,
  borderRadius = 8,
  shadow = true,
  shadowColor = "rgba(0, 0, 0, 0.15)",
  initialAnimation = true,
  initialScale = 0.97,
}: HoverCard3DProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)
  const { isReduced } = useAnimationPreference()

  // Skip the 3D effect if reduced motion is preferred
  if (isReduced) {
    return <div className={className}>{children}</div>
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    // Get the dimensions and position of the card
    const rect = cardRef.current.getBoundingClientRect()

    // Calculate the mouse position relative to the card
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate the rotation
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * intensity
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * intensity

    // Update the glare position
    const glareX = ((e.clientX - rect.left) / rect.width) * 100
    const glareY = ((e.clientY - rect.top) / rect.height) * 100

    // Set the new values
    setRotate({ x: rotateX, y: rotateY })
    setGlarePosition({ x: glareX, y: glareY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotate({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{
        borderRadius: `${borderRadius}px`,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        boxShadow: shadow && isHovered ? `0 30px 50px ${shadowColor}` : "none",
        transition: "box-shadow 0.3s ease",
      }}
      initial={initialAnimation ? { scale: initialScale, opacity: 0 } : { scale: 1, opacity: 1 }}
      animate={{
        scale: 1,
        opacity: 1,
        rotateX: rotate.x,
        rotateY: rotate.y,
        transition: {
          scale: { delay, duration: 0.7, ease: "easeOut" },
          opacity: { delay, duration: 0.7, ease: "easeOut" },
          rotateX: { duration: 0.2, ease: "easeOut" },
          rotateY: { duration: 0.2, ease: "easeOut" },
        },
      }}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {/* Glare effect */}
      {glare && isHovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, ${glareIntensity}), rgba(255, 255, 255, 0) 60%)`,
            borderRadius: `${borderRadius}px`,
            zIndex: 1,
          }}
        />
      )}
    </motion.div>
  )
}
