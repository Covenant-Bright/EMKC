"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { heroElement } from "@/lib/animation-variants"

const slides = [
  {
    id: 1,
    image: "/hero-1.webp",
    heading: "Nurturing Young Scholars!",
    subheading: "Welcome to",
    text: "Excellent Miracle",
    additionalText: "Kiddies College",
  },
  {
    id: 2,
    image: "/hero-2.webp",
    heading: "Learning with Purpose",
    subheading: "Developing",
    text: "Young Minds",
  },
  {
    id: 3,
    image: "/_MG_2003.webp",
    heading: "Educating Today",
    subheading: "Leading ",
    text: "Tomorrow",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div className="relative h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
        {/* Curved top edge */}
        <motion.div
          className="absolute top-0 left-0 right-0 z-20 h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <svg className="absolute top-0 w-full h-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <motion.path
              d="M0,0 L1440,0 L1440,80 C1080,25 720,80 360,25 C240,5 120,5 0,25 L0,0 Z"
              fill="white"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        {/* Background slides */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={{ opacity: index === 0 ? 1 : 0 }}
              animate={{
                opacity: isLoaded && index === current ? 1 : 0,
                scale: isLoaded && index === current ? 1 : 1.02,
              }}
              transition={{
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: 8, ease: "linear" },
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={`${slide.heading} - ${slide.text}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                  quality={90}
                  onLoad={() => {
                    if (index === 0) {
                      setIsLoaded(true)
                    }
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isLoaded && index === current ? 1 : 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text container (shifted 0.5cm down) */}
        <div className="absolute z-20 right-[5%] md:right-[10%] lg:right-[15%] top-[calc(65%+5px)] transform -translate-y-1/2 w-[300px] sm:w-[340px] md:w-[360px] lg:w-[400px] hidden md:block">
          <motion.div className="relative" initial="hidden" animate="visible" variants={heroElement}>
            <svg viewBox="0 0 200 200" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
              <motion.path
                fill="white"
                d="M46.4,-59.3C59.7,-52.9,69.9,-39.5,75.8,-24.3C81.7,-9.1,83.3,8,77.8,22.1C72.3,36.2,59.8,47.3,45.9,52.8C32,58.3,16,58.2,1.1,56.7C-13.8,55.2,-27.6,52.3,-40,45C-52.5,37.8,-63.6,26.2,-68.6,11.8C-73.6,-2.6,-72.5,-19.7,-64.3,-31.9C-56.2,-44.1,-41.1,-51.3,-27.3,-57.5C-13.5,-63.7,-0.9,-69,12,-69.6C24.9,-70.2,34,-69.1,46.4,-59.3Z"
                transform="translate(100 100)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 md:p-6 lg:p-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full"
                >
                  <div className="text-sm md:text-base lg:text-lg xl:text-xl italic text-gray-700 w-full overflow-hidden text-ellipsis">
                    {slides[current].heading}
                  </div>
                  <div className="mt-1 md:mt-2 w-full">
                    <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-sky-400 leading-tight">
                      {slides[current].subheading}
                    </div>
                    <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-gray-800 leading-tight">
                      {slides[current].text}
                    </div>
                    {slides[current].additionalText && (
                      <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-gray-800 leading-tight">
                        {slides[current].additionalText}
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: index === current ? 1.25 : 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            />
          ))}
        </div>

        {/* Curved bottom edge */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-20 h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
            <motion.path
              d="M0,80 L1440,80 L1440,0 C1080,55 720,0 360,55 C240,75 120,75 0,55 L0,80 Z"
              fill="white"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
