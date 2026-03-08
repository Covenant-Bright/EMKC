"use client"

import { useCallback, useEffect, useState } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"
import { useAnimationPreference } from "@/context/animation-context"

interface ParticlesBackgroundProps {
  particleColor?: string
}

export default function ParticlesBackground({ particleColor = "#c8c8c8" }: ParticlesBackgroundProps) {
  const [mounted, setMounted] = useState(false)
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)
  const { isReduced } = useAnimationPreference()

  useEffect(() => {
    setMounted(true)
    setIsCoarsePointer(window.matchMedia("(pointer: coarse)").matches)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadSlim(engine)
    } catch (error) {
      console.error("Particles initialization failed:", error)
    }
  }, [])

  if (!mounted || isReduced || isCoarsePointer) return null

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
          fpsLimit: 30,
          particles: {
            number: {
              value: 18,
              density: {
                enable: true,
                area: 1200,
              },
            },
            color: {
              value: [particleColor, "#4aaee8", "#f8b15d"],
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.16,
              random: true,
              animation: {
                enable: false,
                speed: 0,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: { min: 2, max: 4 },
              random: true,
              animation: {
                enable: false,
                speed: 0,
                minimumValue: 1,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 140,
              color: particleColor,
              opacity: 0.06,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.35,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out",
              },
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: false,
                mode: "bubble",
              },
              onClick: {
                enable: false,
                mode: "push",
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              grab: {
                distance: 400,
                links: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.6,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
              remove: {
                quantity: 2,
              },
            },
          },
          detectRetina: false,
        }}
        className="w-full h-full absolute inset-0"
      />
    </div>
  )
}
