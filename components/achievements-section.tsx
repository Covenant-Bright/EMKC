"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Users, Users2, Star } from "lucide-react"
import SectionDivider from "./section-divider"
import AnimatedSection from "./animated-section"
import AnimatedCounter from "./animated-counter"
import AnimatedText from "./animated-text"

type Achievement = {
  icon: React.ReactNode
  value: number | { students: number; teachers: number }
  label: string
  suffix: string
  color: string
  isRatio: boolean
}

export default function AchievementsSection() {
  const ref = useRef(null)
  // Use 'amount' instead of 'threshold' if your typings don't support threshold
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const achievements: Achievement[] = [
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      value: 23,
      label: "Years of Excellence",
      suffix: "+",
      color: "bg-gradient-to-br from-teal-400 to-teal-500",
      isRatio: false,
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      value: 5000,
      label: "Students Educated",
      suffix: "+",
      color: "bg-gradient-to-br from-pink-400 to-pink-500",
      isRatio: false,
    },
    {
      icon: <Users2 className="h-8 w-8 text-white" />,
      value: { students: 12, teachers: 1 },
      label: "Student-Teacher Ratio",
      suffix: "",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      isRatio: true,
    },
    {
      icon: <Star className="h-8 w-8 text-white" />,
      value: 98,
      label: "Parent Satisfaction",
      suffix: "%",
      color: "bg-gradient-to-br from-sky-400 to-sky-500",
      isRatio: false,
    },
  ]

  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 bg-blue-50/50 backdrop-blur-3xl -z-10"></div>
      <SectionDivider position="top" fillColor="white" />

      <AnimatedSection variant="fadeIn" className="max-w-6xl mx-auto px-4 md:px-8">
        <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-center text-[#0d3b49] mb-12">
          Our Achievements
        </AnimatedText>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AnimatedSection
              key={index}
              variant="scaleIn"
              delay={0.1 + index * 0.1}
              className="relative bg-white rounded-2xl p-6 shadow-md text-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`mx-auto w-16 h-16 rounded-full ${achievement.color} flex items-center justify-center mb-4`}
              >
                {achievement.icon}
              </motion.div>

              {achievement.isRatio && typeof achievement.value !== "number" ? (
                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                  <AnimatedCounter
                    end={achievement.value.students}
                    className="mr-1"
                    delay={0.3 + index * 0.1}
                    duration={2}
                  />
                  :
                  <AnimatedCounter
                    end={achievement.value.teachers}
                    className="ml-1"
                    delay={0.3 + index * 0.1}
                    duration={2}
                  />
                </div>
              ) : (
                <AnimatedCounter
                  end={typeof achievement.value === "number" ? achievement.value : 0}
                  suffix={achievement.suffix}
                  className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
                  delay={0.3 + index * 0.1}
                  duration={2}
                />
              )}

              <AnimatedText as="p" className="text-gray-600" delay={0.4 + index * 0.1}>
                {achievement.label}
              </AnimatedText>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <SectionDivider position="bottom" fillColor="white" />
    </section>
  )
}
