"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { buttonHover, buttonTap } from "@/lib/animation-variants"

interface AnimatedButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  delay?: number
  duration?: number
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  delay = 0,
  duration = 0.5,
}: AnimatedButtonProps) {
  const buttonVariants = {
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

  // If href is provided, render as Link
  if (href) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        whileHover={!disabled ? "hover" : undefined}
        whileTap={!disabled ? "tap" : undefined}
      >
        <Link
          href={href}
          className={`inline-block ${className} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
        >
          <motion.span variants={{ hover: buttonHover, tap: buttonTap }} className="inline-block w-full">
            {children}
          </motion.span>
        </Link>
      </motion.div>
    )
  }

  // Otherwise, render as button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
      whileHover={!disabled ? "hover" : undefined}
      whileTap={!disabled ? "tap" : undefined}
      className={`${className} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      <motion.span variants={{ hover: buttonHover, tap: buttonTap }} className="inline-block w-full">
        {children}
      </motion.span>
    </motion.button>
  )
}
