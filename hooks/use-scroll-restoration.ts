"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"

/**
 * Custom hook for managing scroll restoration between page navigations
 *
 * This hook ensures that:
 * - Scroll position resets to top when navigating to a new page
 * - Prevents scroll restoration conflicts with page transitions
 * - Handles edge cases that might cause blank pages
 */
export function useScrollRestoration() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const previousPathnameRef = useRef<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Create a combined key from pathname and search params
    const currentKey = `${pathname}${searchParams ? `?${searchParams.toString()}` : ""}`
    const previousKey = previousPathnameRef.current

    // Only reset scroll if we're actually navigating to a different page
    if (previousKey && previousKey !== currentKey) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // Use requestAnimationFrame to ensure DOM is ready
      const resetScroll = () => {
        try {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
          })
        } catch (error) {
          // Fallback for older browsers
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
        }
      }

      // Use requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        resetScroll()
      })

      // Backup timeout in case requestAnimationFrame doesn't work
      timeoutRef.current = setTimeout(resetScroll, 10)
    }

    // Update the previous key
    previousPathnameRef.current = currentKey

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [pathname, searchParams])

  // Additional effect to handle component unmounting
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])
}
