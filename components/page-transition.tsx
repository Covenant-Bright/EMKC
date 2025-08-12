"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import type React from "react"
import { useAnimationPreference } from "@/context/animation-context"

interface PageTransitionProps {
  children: React.ReactNode
}

/**
 * Safe, mount-only transition for App Router.
 * - Keyed by pathname to force a clean remount per route (resets state) [^3].
 * - No AnimatePresence / no exit phase, avoiding timing races that can leave pages hidden.
 * - Honors reduced-motion by skipping animation.
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const { isReduced } = useAnimationPreference()

  // Variants are very simple since we only animate on mount.
  const initial = isReduced ? { opacity: 1 } : { opacity: 0 }
  const animate = isReduced
    ? { opacity: 1 }
    : { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } }

  return (
    <motion.div
      key={pathname}
      initial={initial}
      animate={animate}
      // No exit prop on purpose — we never set the page to opacity: 0 on route change.
      className="page-transition"
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </motion.div>
  )
}
