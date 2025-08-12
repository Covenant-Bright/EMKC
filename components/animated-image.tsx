"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  fill?: boolean
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  delay?: number
  duration?: number
}

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  objectFit = "cover",
  delay = 0,
  duration = 0.6,
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
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
      animate={isLoaded ? "visible" : "hidden"}
      variants={imageVariants}
      className={`relative ${className}`}
      style={fill ? { width: "100%", height: "100%" } : {}}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={`${fill ? "object-" + objectFit : ""} ${className}`}
        priority={priority}
        fill={fill}
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  )
}
