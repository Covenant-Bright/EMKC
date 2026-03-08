"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
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
        resolve()
      })
  })
}

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
    })()

    return () => {
      cancelled = true
    }
  }, [pathname, isReduced])

  return (
    <AnimatePresence initial={false}>
      {show ? (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: isReduced ? 0.12 : 0.24 } }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-gray-50"
          role="status"
          aria-label="Loading"
          aria-live="polite"
          style={{ pointerEvents: "auto" }}
        >
          <LoaderScreen reducedMotion={isReduced} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
