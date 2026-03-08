"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
<<<<<<< HEAD
import { useAnimationPreference } from "@/context/animation-context"
import LoaderScreen from "./loader-screen"

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | void> {
  return new Promise((resolve) => {
    const timer = window.setTimeout(() => resolve(), ms)

    promise
      .then((value) => {
        window.clearTimeout(timer)
        resolve(value)
      })
      .catch(() => {
        window.clearTimeout(timer)
=======
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
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
        resolve()
      })
  })
}

<<<<<<< HEAD
function isPotentiallyCriticalImage(img: HTMLImageElement) {
  const rect = img.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth

  const inViewport = rect.top < viewportHeight * 1.15 && rect.bottom > -80 && rect.left < viewportWidth && rect.right > 0
  const isPriority = img.getAttribute("fetchpriority") === "high" || img.loading === "eager"
  const isMarkedCritical = img.dataset.loaderCritical === "true"

  return (inViewport || isPriority || isMarkedCritical) && !!img.currentSrc
}

function waitForImage(img: HTMLImageElement) {
  if (img.complete && img.naturalWidth > 0) {
    return Promise.resolve()
  }

  const decode = typeof img.decode === "function" ? img.decode().catch(() => undefined) : Promise.resolve()

  const load = new Promise<void>((resolve) => {
    const done = () => {
      img.removeEventListener("load", done)
      img.removeEventListener("error", done)
      resolve()
    }

    img.addEventListener("load", done, { once: true })
    img.addEventListener("error", done, { once: true })
  })

  return Promise.race([decode, load]).then(() => undefined)
}

async function waitForCriticalAssets() {
  await new Promise((resolve) => requestAnimationFrame(() => resolve(null)))
  await new Promise((resolve) => requestAnimationFrame(() => resolve(null)))

  const fontPromise =
    typeof document.fonts?.ready?.then === "function" ? withTimeout(document.fonts.ready, 800) : Promise.resolve()

  const images = Array.from(document.images)
    .filter((img): img is HTMLImageElement => isPotentiallyCriticalImage(img))
    .slice(0, 5)

  const imagesPromise =
    images.length > 0 ? Promise.allSettled(images.map((img) => withTimeout(waitForImage(img), 1200))) : Promise.resolve()

  await Promise.allSettled([fontPromise, imagesPromise])
}

export default function GlobalLoader() {
  const pathname = usePathname()
  const [show, setShow] = React.useState(true)
  const { isReduced } = useAnimationPreference()
  const firstLoadRef = React.useRef(true)

  React.useEffect(() => {
    if (show) {
      document.documentElement.classList.add("loading-active")
      document.body.classList.add("app-loading")
      document.body.setAttribute("aria-busy", "true")
    } else {
      document.documentElement.classList.remove("loading-active")
      document.body.classList.remove("app-loading")
      document.body.removeAttribute("aria-busy")
    }

    return () => {
      document.documentElement.classList.remove("loading-active")
      document.body.classList.remove("app-loading")
      document.body.removeAttribute("aria-busy")
    }
  }, [show])

  React.useEffect(() => {
    let cancelled = false
    const minDuration = firstLoadRef.current ? (isReduced ? 180 : 700) : isReduced ? 120 : 420
    const maxWait = firstLoadRef.current ? 2600 : 1800

    setShow(true)

    ;(async () => {
      const start = performance.now()

      await withTimeout(waitForCriticalAssets(), maxWait)

      const elapsed = performance.now() - start
      const remaining = Math.max(0, minDuration - elapsed)

      if (remaining > 0) {
        await new Promise((resolve) => window.setTimeout(resolve, remaining))
      }

      if (!cancelled) {
        setShow(false)
        firstLoadRef.current = false
      }
=======
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
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
    })()

    return () => {
      cancelled = true
    }
<<<<<<< HEAD
  }, [pathname, isReduced])

  return (
    <AnimatePresence initial={false}>
      {show ? (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: isReduced ? 0.12 : 0.24 } }}
=======
  }, [pathname])

  return (
    <AnimatePresence initial={false} mode="sync">
      {show ? (
        <motion.div
          key={`global-loader-${pathname}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-50"
          role="status"
          aria-label="Loading"
          aria-live="polite"
<<<<<<< HEAD
          style={{ pointerEvents: "auto" }}
        >
          <LoaderScreen reducedMotion={isReduced} />
=======
        >
          <LoaderScreen />
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
