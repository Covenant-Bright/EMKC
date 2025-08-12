"use client"

import { useScrollRestoration } from "@/hooks/use-scroll-restoration"

/**
 * Component that handles scroll restoration when navigating between pages
 *
 * This is a "ghost" component that doesn't render anything visible
 * but provides the scroll restoration functionality
 */
export default function ScrollRestoration() {
  // Use the custom hook to handle scroll restoration
  useScrollRestoration()

  // This component doesn't render anything visible
  return null
}
