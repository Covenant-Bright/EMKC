"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import SectionDivider from "./section-divider"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"

export default function WeSection() {
const [currentImage, setCurrentImage] = useState(0)
const intervalRef = useRef<NodeJS.Timeout | null>(null)

const images = [
  {
    id: 1,
    src: "/_DSC5388.webp",
    alt: "Child playing with educational toys",
  },
  {
    id: 2,
    src: "/_DSC5420.webp",
    alt: "Child learning in classroom",
  },
  {
    id: 3,
    src: "/_DSC5239.webp",
    alt: "Child reading a book",
  },
  {
    id: 4,
    src: "/_DSC5356.webp",
    alt: "Child engaged in creative activity",
  },
]

// Function to go to next slide
const nextSlide = () => {
  setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
}

// Function to go to a specific slide
const goToSlide = (index: number) => {
  setCurrentImage(index)

  // Reset the interval timer when manually changing slides
  if (intervalRef.current) {
    clearInterval(intervalRef.current)
  }

  intervalRef.current = setInterval(nextSlide, 7000)
}

// Set up auto-rotation with 7-second interval
useEffect(() => {
  intervalRef.current = setInterval(nextSlide, 7000)

  // Clean up interval on component unmount
  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }
}, [])

return (
  <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white to-sky-50">
    <SectionDivider position="top" fillColor="white" />

    {/* Use a max-width container and center it */}
    <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
      {/* Top section with "We" heading and text - centered on large screens */}
      <AnimatedSection variant="fadeInUp" className="mb-10 md:mb-12 text-center lg:text-left">
        <div className="flex flex-col mx-auto lg:mx-0 max-w-3xl">
          <div className="flex items-start gap-3 mb-5 justify-center lg:justify-start">
            <motion.span
              className="font-bold leading-none text-[#0d3b49] block"
              style={{ fontSize: "5.5rem", fontFamily: "var(--font-fredoka)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              We
            </motion.span>
            <motion.div
              className="mt-3 ml-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <span className="text-xl md:text-2xl font-semibold text-[#0d3b49] block leading-tight">
                guide every stage of your
              </span>
              <span className="text-xl md:text-2xl font-semibold text-[#0d3b49] block leading-tight">
                child’s learning journey.
              </span>
            </motion.div>
          </div>
          <AnimatedText
            as="p"
            className="text-sm text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            style={{ lineHeight: "1.7" }}
            delay={0.4}
          >
            We are delighted to welcome you to the vibrant community and rich learning environment of Excellent Miracle Kiddies College. 
            Our team of dedicated professionals is passionate about nurturing and guiding young minds. We proudly refer to ourselves 
            as “Our Family”—a term that reflects the warmth, care, and joy we find in working with children every day
          </AnimatedText>
        </div>
      </AnimatedSection>

      {/* Bottom section with image and features side by side - reduced gap on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-start">
        {/* Left side with image carousel */}
        <AnimatedSection variant="fadeInLeft" className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none w-full">
          <motion.div
            className="overflow-hidden"
            style={{ borderRadius: "60px" }}
            whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="aspect-[4/3] relative">
              <AnimatePresence>
                {images.map(
                  (image, index) =>
                    index === currentImage && (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={image.src || "/placeholder.svg?height=300&width=400&query=child playing with toys"}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Right side with features and illustration */}
        <AnimatedSection
          variant="fadeInRight"
          className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none w-full"
          delay={0.2}
        >
          {/* Features list with numbers that act as slide indicators */}
          <div className="space-y-5 mb-8">
            {images.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <SlideIndicator
                  number={(index + 1).toString()}
                  isActive={index === currentImage}
                  onClick={() => goToSlide(index)}
                />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>

    <SectionDivider position="bottom" fillColor="#fef3c7" className="z-20" />
  </section>
)
}

function SlideIndicator({
number,
isActive,
onClick,
}: {
number: string
isActive: boolean
onClick: () => void
}) {
return (
  <motion.button
    onClick={onClick}
    className="flex items-center space-x-4 group transition-all duration-300 focus:outline-none"
    aria-label={`Go to slide ${number}`}
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.div
      className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-medium transition-all duration-300
        ${isActive ? "bg-sky-400" : "bg-gray-200 group-hover:bg-gray-300"}`}
      animate={{ scale: isActive ? 1.1 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {number}
    </motion.div>
    <motion.span
      className={`text-sm font-medium transition-all duration-300
      ${isActive ? "text-sky-600" : "text-gray-700 group-hover:text-gray-900"}`}
      animate={{
        x: isActive ? 3 : 0,
        fontWeight: isActive ? 600 : 500,
      }}
      transition={{ duration: 0.3 }}
    >
      {isActive ? (
        <>
          {number === "1" && "Home-like Environment"}
          {number === "2" && "Safety and Security"}
          {number === "3" && "Quality Education"}
          {number === "4" && "Well Equiped Facilities"}
        </>
      ) : (
        <>
          {number === "1" && "Home-like Environment"}
          {number === "2" && "Safety and Security"}
          {number === "3" && "Quality Education"}
          {number === "4" && "Well Equiped Facilities"}
        </>
      )}
    </motion.span>
  </motion.button>
)
}
