"use client"

import { useState } from "react"
import Image from "next/image"
<<<<<<< HEAD
=======
import { motion } from "framer-motion"
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e

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
<<<<<<< HEAD
  sizes?: string
=======
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
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
<<<<<<< HEAD
  sizes,
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={`relative ${className}`}
      style={{
        ...(fill ? { width: "100%", height: "100%" } : {}),
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translate3d(0, 0, 0)" : "translate3d(0, 8px, 0)",
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
      }}
=======
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
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={`${fill ? "object-" + objectFit : ""} ${className}`}
        priority={priority}
        fill={fill}
<<<<<<< HEAD
        sizes={sizes ?? (fill ? "100vw" : `${width}px`)}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
=======
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
  )
}
