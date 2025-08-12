"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import LoaderScreen from "./loader-screen"

function inViewport(el: Element) {
  const rect = (el as HTMLElement).getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  const vw = window.innerWidth || document.documentElement.clientWidth
  const vertical = rect.bottom >= -100 && rect.top <= vh * 1.2
  const horizontal = rect.right >= -100 && rect.left <= vw * 1.2
  return vertical && horizontal
}

function waitForImage(img: HTMLImageElement): Promise<void> {
  if (img.complete && img.naturalWidth !== 0) return Promise.resolve()

  if ("decode" in img && typeof (img as any).decode === "function") {
    return (img as any)
      .decode()
      .then(() => {})
      .catch(() => {})
  }

  return new Promise<void>((resolve) => {
    const onDone = () => {
      img.removeEventListener("load", onDone)
      img.removeEventListener("error", onDone)
      resolve()
    }
    img.addEventListener("load", onDone, { once: true })
    img.addEventListener("error", onDone, { once: true })
  })
}

async function waitForAboveTheFoldAssets(): Promise<void> {
  // Let the DOM settle after navigation
  await new Promise((r) => requestAnimationFrame(() => r(null)))
  await new Promise((r) => requestAnimationFrame(() => r(null)))

  if (typeof (document as any).fonts?.ready?.then === "function") {
    try {
      await (document as any).fonts.ready
    } catch {}
  }

  const imgs = Array.from(document.images || []).filter(
    (img) => inViewport(img) && (img as HTMLImageElement).src,
  ) as HTMLImageElement[]

  if (imgs.length === 0) return

  await Promise.allSettled(imgs.map((img) => waitForImage(img)))
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | void> {
  return new Promise((resolve) => {
    const t = setTimeout(() => resolve(), ms)
    promise
      .then((v) => {
        clearTimeout(t)
        resolve(v)
      })
      .catch(() => {
        clearTimeout(t)
        resolve()
      })
  })
}

export default function GlobalLoader() {
  const pathname = usePathname()
  const [show, setShow] = React.useState(true)
  const hasShownForPathRef = React.useRef<string | null>(null)

  const MIN_DISPLAY = 800 // ms - increased from 400ms
  const MAX_WAIT = 8000 // ms safety timeout

  React.useEffect(() => {
    if (show) {
      document.body.classList.add("app-loading")
      document.body.setAttribute("aria-busy", "true")
      // Additional scroll prevention
      document.body.style.overflow = "hidden"
      document.body.style.height = "100vh"
      document.documentElement.style.overflow = "hidden"
    } else {
      document.body.classList.remove("app-loading")
      document.body.removeAttribute("aria-busy")
      // Restore scrolling
      document.body.style.overflow = ""
      document.body.style.height = ""
      document.documentElement.style.overflow = ""
    }
  }, [show])

  // On first mount and on every route change, show the loader and wait for above-the-fold assets
  React.useEffect(() => {
    let cancelled = false

    // Avoid re-running for the same pathname during rapid re-renders
    if (hasShownForPathRef.current === pathname && show === false) return
    hasShownForPathRef.current = pathname

    setShow(true)
    ;(async () => {
      const start = performance.now()
      await withTimeout(waitForAboveTheFoldAssets(), MAX_WAIT)
      const elapsed = performance.now() - start
      const remain = Math.max(0, MIN_DISPLAY - elapsed)
      await new Promise((r) => setTimeout(r, remain))
      if (!cancelled) setShow(false)
    })()

    return () => {
      cancelled = true
    }
  }, [pathname])

  return (
    <AnimatePresence initial={false} mode="sync">
      {show ? (
        <motion.div
          key={`global-loader-${pathname}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-50"
          role="status"
          aria-label="Loading"
          aria-live="polite"
        >
          <LoaderScreen />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
