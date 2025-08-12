"use client"
import { motion } from "framer-motion"
import SectionDivider from "./section-divider"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"
import AnimatedButton from "./animated-button"
import AnimatedImage from "./animated-image"
import ParallaxElement from "./parallax-element"

export default function CTASection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <SectionDivider position="top" fillColor="white" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-100 rounded-full opacity-60 blur-2xl"></div>
            <div className="absolute bottom-10 -left-10 w-48 h-48 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            <AnimatedSection variant="fadeInLeft" className="p-6 md:p-12 flex flex-col justify-center">
              <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-4">
                Start Your Child's Educational Journey
              </AnimatedText>

              <AnimatedText as="p" className="text-gray-600 mb-8" delay={0.2}>
                Join the Excellent Miracle Kiddies College family today! Schedule a tour to see our facilities, meet our
                passionate educators, and discover how we can provide your child with an exceptional educational
                foundation.
              </AnimatedText>

              <div className="flex flex-col sm:flex-row gap-4">
                <AnimatedButton
                  href="/contact"
                  className="py-3 px-8 border-2 border-teal-400 text-teal-600 rounded-full font-medium hover:bg-teal-50 transition-colors"
                  delay={0.3}
                >
                  Schedule a Tour
                </AnimatedButton>

                <AnimatedButton
                  href="/enroll"
                  className="py-3 px-8 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
                  delay={0.4}
                >
                  Enroll Today
                </AnimatedButton>
              </div>
            </AnimatedSection>

            <div className="relative h-64 lg:h-auto overflow-hidden">
              <AnimatedSection variant="fadeInRight" delay={0.2} className="h-full">
                <ParallaxElement speed={0.1} className="h-full">
                  <AnimatedImage
                    src="/_MG_4307.webp"
                    alt="Happy children learning"
                    fill
                    className="object-cover"
                    priority
                  />
                </ParallaxElement>
              </AnimatedSection>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="text-white text-center"
                >
                  <p className="font-semibold">Building bright futures one child at a time</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <SectionDivider position="bottom" fillColor="white" />
    </section>
  )
}
