"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useAnimationPreference } from "@/context/animation-context"

interface AnimatedCounterProps {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
  once?: boolean
  threshold?: number
  decimalPlaces?: number
}

export default function AnimatedCounter({
  end,
  duration = 2,
  delay = 0.2,
  prefix = "",
  suffix = "",
  className = "",
  once = true,
  threshold = 0.1,
  decimalPlaces = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, threshold })
  const { isReduced } = useAnimationPreference()

  useEffect(() => {
    if (!inView || isReduced) {
      // If reduced motion is preferred, just set the end value
      if (isReduced) {
        setCount(end)
      }
      return
    }

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    // Delay the animation start
    const timer = setTimeout(() => {
      window.requestAnimationFrame(step)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [inView, end, duration, delay, isReduced])

  // Format the number with commas and decimal places
  const formattedCount = count.toLocaleString("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
      className={className}
    >
      {prefix}
      {formattedCount}
      {suffix}
    </motion.div>
  )
}
