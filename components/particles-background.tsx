"use client"

import { useCallback, useEffect, useState } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Engine } from "tsparticles-engine"
<<<<<<< HEAD
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
=======

export default function ParticlesBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadSlim(engine)
    } catch (error) {
      console.error("Particles initialization failed:", error)
    }
  }, [])

<<<<<<< HEAD
  if (!mounted || isReduced || isCoarsePointer) return null

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
=======
  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10">
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
<<<<<<< HEAD
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
=======
          fpsLimit: 60,
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: ["#4aaee8", "#f8b15d", "#4ecccd", "#e7a0c3"],
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
            },
            shape: {
              type: "circle",
            },
            opacity: {
<<<<<<< HEAD
              value: 0.16,
              random: true,
              animation: {
                enable: false,
                speed: 0,
=======
              value: 0.3,
              random: true,
              animation: {
                enable: true,
                speed: 0.5,
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
<<<<<<< HEAD
              value: { min: 2, max: 4 },
              random: true,
              animation: {
                enable: false,
                speed: 0,
=======
              value: 5,
              random: true,
              animation: {
                enable: true,
                speed: 2,
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
                minimumValue: 1,
                sync: false,
              },
            },
            links: {
              enable: true,
<<<<<<< HEAD
              distance: 140,
              color: particleColor,
              opacity: 0.06,
=======
              distance: 150,
              color: "#c8c8c8",
              opacity: 0.1,
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
              width: 1,
            },
            move: {
              enable: true,
<<<<<<< HEAD
              speed: 0.35,
              direction: "none",
              random: false,
=======
              speed: 1,
              direction: "none",
              random: true,
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
              straight: false,
              outModes: {
                default: "out",
              },
<<<<<<< HEAD
=======
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
<<<<<<< HEAD
                enable: false,
                mode: "bubble",
              },
              onClick: {
                enable: false,
=======
                enable: true,
                mode: "bubble",
              },
              onClick: {
                enable: true,
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
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
<<<<<<< HEAD
          detectRetina: false,
=======
          detectRetina: true,
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
        }}
        className="w-full h-full absolute inset-0"
      />
    </div>
  )
}
