"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { buttonHover, buttonTap } from "@/lib/animation-variants"
import { useAnimationPreference } from "@/context/animation-context"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface MotionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  initial?: "hidden" | "visible" | "exit"
  animateWhen?: "always" | "inView" | "hover" | "none"
  delay?: number
  duration?: number
}

const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      initial = "hidden",
      animateWhen = "always",
      delay = 0,
      duration = 0.4,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : motion.button
    const { isReduced } = useAnimationPreference()

    // Don't apply animations if reduced motion is preferred
    if (isReduced || animateWhen === "none") {
      return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    }

    const buttonAnimations = {
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
      exit: {
        opacity: 0,
        y: 20,
        transition: {
          duration: 0.3,
          ease: "easeIn",
        },
      },
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        initial={initial}
        animate="visible"
        exit="exit"
        variants={buttonAnimations}
        whileHover={animateWhen === "always" || animateWhen === "hover" ? buttonHover : undefined}
        whileTap={animateWhen === "always" || animateWhen === "hover" ? buttonTap : undefined}
        {...props}
      />
    )
  },
)
MotionButton.displayName = "MotionButton"

export { MotionButton, buttonVariants }
