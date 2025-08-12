"use client"

import LoaderScreen from "@/components/loader-screen"

export default function Loading() {
  // Uses the same loader animation as GlobalLoader for consistency
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[1000] flex min-h-screen items-center justify-center bg-gray-50"
    >
      <LoaderScreen />
    </div>
  )
}
