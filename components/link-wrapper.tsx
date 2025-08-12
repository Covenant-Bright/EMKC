"use client"

import type React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface LinkWrapperProps {
  href: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
  scroll?: boolean
}

/**
 * Enhanced Link component that ensures scroll behavior is consistent
 * across all internal navigation
 */
export default function LinkWrapper({
  href,
  className,
  children,
  onClick,
  scroll = true, // Default to scrolling to top
}: LinkWrapperProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call the original onClick if provided
    if (onClick) {
      onClick()
    }

    // For internal links (not external URLs or anchor links)
    if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/#") && !href.includes("#")) {
      e.preventDefault()

      // Use router.push for client-side navigation
      router.push(href)

      // Scroll to top if scroll prop is true
      if (scroll) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        })
      }
    }
    // For anchor links, let the browser handle it naturally
  }

  return (
    <Link href={href} className={className} onClick={handleClick} scroll={scroll}>
      {children}
    </Link>
  )
}
