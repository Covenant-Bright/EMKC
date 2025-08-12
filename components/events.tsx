"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import SectionDivider from "./section-divider"
import AnimatedSection from "./animated-section"
import AnimatedText from "./animated-text"
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'

const eventCategories = [
  {
    id: "cultural-day",
    title: "Cultural Day",
    description: "Showcasing cultures through music, dance, food, and fun activities",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    events: [
      {
        title: "Yoruba Cultural Display",
        date: "March, 2025",
        location: "All Branches",
        participants: "All Students",
        image: "/events/_MG_0038.webp",
        description: "An immersive celebration of Yoruba culture featuring vibrant attire, energetic drum beats, traditional dances, and authentic delicacies."
      },
      {
        title: "Hausa Cultural Display",
        date: "March, 2025",
        location: "All Branches",
        participants: "All Students",
        image: "/events/IMG_20220401_130646.webp",
        description: "A colorful showcase of Hausa traditions, with captivating folk dances, lively music, rich storytelling, and displays of cultural crafts and cuisine."
      },
      {
        title: "Igbo Cultural Display",
        date: "March, 2025",
        location: "All Branches",
        participants: "All Students",
        image: "/events/_MG_0009.webp",
        description: "A vibrant exhibition of Igbo culture highlighted by energetic performances, rhythmic music, graceful dances, and traditional feasts."
      }
    ]
  },
  {
    id: "career-color-day",
    title: "Career Day & Color Day",
    description: "Inspiring future careers and celebrating creativity through vibrant themed activities.",
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-blue-50",
    events: [
      {
        title: "Pink Color",
        date: "March, 2025",
        location: "All Branches",
        participants: "All Students",
        image: "/events/_MG_0324.webp",
        description: "A joyful celebration of creativity and self-expression, where students showcase their favorite colors through art, fashion, and performances."
      },
      {
        title: "Purple Color",
        date: "March, 2025",
        location: "All Branches",
        participants: "All Students",
        image: "/events/_MG_0223.webp",
        description: "A celebration of creativity, unity, and fun."
      },
      {
        title: "Red Color",
        date: "March, 2025",
        location: "All Branches",
        participants: "All Students",
        image: "/events/_MG_0187.webp",
        description: "A vibrant display of passion, energy, and togetherness."
      }
    ]
  },
  {
    id: "graduation-party",
    title: "End of Session Party & Graduation",
    description: "Celebrating achievements and milestones with memorable graduation ceremonies.",
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
    events: [
      {
        title: "Primary 5 Graduation",
        date: "August 5, 2025",
        location: "School Auditorium",
        participants: "Graduands and Families",
        image: "/events/_MG_1997.webp",
        description: "A joyful ceremony celebrating our Primary 5 students as they complete primary education and step into the exciting world of secondary school."
      },
      {
        title: "Class of 2025 Graduation Ceremony",
        date: "August 5, 2025",
        location: "School Auditorium",
        participants: "Graduands and Families",
        image: "/events/_MG_1992.webp",
        description: "A proud send-off for our secondary school graduates as they conclude high school and prepare for the opportunities of higher education."
      }
    ]
  }
]

export default function EventsSection() {
  const [activeCategory, setActiveCategory] = useState(eventCategories[0].id)

  const activeEvents = eventCategories.find(cat => cat.id === activeCategory)

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-gray-50">
      <SectionDivider position="top" fillColor="white" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <AnimatedSection variant="fadeIn" className="mb-12 text-center">
          <AnimatedText as="h2" className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-4">
            Our School Events
          </AnimatedText>
          <AnimatedText as="p" className="max-w-3xl mx-auto text-gray-600 text-lg" delay={0.2}>
            Discover the vibrant community life at Excellent Miracle Kiddies College through our exciting events and celebrations.
          </AnimatedText>
        </AnimatedSection>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {eventCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Active Category Content */}
        <AnimatedSection key={activeCategory} variant="fadeIn" className="mb-8">
          <div className={`rounded-3xl p-8 ${activeEvents?.bgColor} mb-8`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0d3b49] mb-4">
                {activeEvents?.title}
              </h3>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                {activeEvents?.description}
              </p>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {activeEvents?.events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image || `/placeholder.svg?height=300&width=400&query=${event.title} school event`}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="font-semibold text-lg mb-1">{event.title}</h4>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2 text-sky-500" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2 text-sky-500" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="h-4 w-4 mr-2 text-sky-500" />
                        {event.participants}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View More Button */}
            <div className="text-center mt-8">
              <Link
                href={
                  activeCategory === "career-color-day" 
                    ? "/events" 
                    : activeCategory === "graduation-party" 
                      ? "/events/special-events" 
                      : `/events/${activeCategory}`
                }
                className={`inline-flex items-center px-8 py-3 bg-gradient-to-r ${activeEvents?.color} text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
              >
                View More {activeEvents?.title} Events
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection variant="fadeIn" className="text-center">
          <div className="bg-gradient-to-r from-sky-500 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our Next Event!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Stay updated with our upcoming events and be part of our school community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/events"
                className="inline-flex items-center px-6 py-3 bg-white text-sky-600 rounded-full font-medium hover:bg-gray-50 transition-colors"
              >
                View All Events
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <SectionDivider position="bottom" fillColor="white" />
    </section>
  )
}