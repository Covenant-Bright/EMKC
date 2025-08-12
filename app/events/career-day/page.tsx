import type React from "react"
import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import Link from "next/link"
import { Calendar, MapPin, Clock, Briefcase, GraduationCap, Users, Star, Heart } from "lucide-react"

export default function CareerDayPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="Career Day"
        subtitle="Inspiring future paths through exploration and discovery"
        backgroundImage="/_MG_4049.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-600 text-sm font-medium mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              March, 2025
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Discover Your Future</h2>
            <p className="text-gray-600 mb-4">
              Career Day at EMKC is an exciting opportunity for students to explore diverse professions, connect with
              professionals from various fields, and begin thinking about their own future aspirations and interests.
            </p>
            <p className="text-gray-600 mb-6">
              Through interactive presentations, hands-on activities, and engaging discussions, students gain valuable
              insights into the world of work and the many paths they might pursue as they grow and develop.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-700">10:00 AM -2:30 PM</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-teal-500 mr-2" />
                <span className="text-gray-700">All Branches</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-lg">
              <Image
                src="/_MG_4052.webp"
                alt="Students exploring career options"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
           
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-teal-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0d3b49] mb-12">Event Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HighlightCard
              icon={<Briefcase className="h-8 w-8" />}
              title="Professional Speakers"
              description="Representatives from diverse career fields share their experiences and insights with students."
              color="bg-teal-500"
            />
            <HighlightCard
              icon={<GraduationCap className="h-8 w-8" />}
              title="Interactive Workshops"
              description="Hands-on activities that allow students to experience different career skills and tasks."
              color="bg-blue-500"
            />
            <HighlightCard
              icon={<Users className="h-8 w-8" />}
              title="Career Exploration Zones"
              description="Themed areas where students can explore different industry sectors through engaging activities."
              color="bg-purple-500"
            />
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-[#0d3b49] mb-4">Schedule of Activities</h3>

              <div className="space-y-4">
                <TimelineItem
                  time="10:00 AM"
                  title="Opening Assembly"
                  description="Welcome remarks and introduction to Career Day activities"
                  location="School Premises"
                />
                <TimelineItem
                  time="10:30 AM - 12:00 PM"
                  title="Career Exploration Rotations"
                  description="Students rotate through different career zones and presentations"
                  location="School Premises"
                />
                <TimelineItem
                  time="12:00 - 1:00 PM"
                  title="Lunch with Professionals"
                  description="Students enjoy lunch while chatting with career representatives"
                  location="School Premises"
                />
                <TimelineItem
                  time="1:00 - 2:00 PM"
                  title="Hands-on Workshops"
                  description="Interactive sessions focused on specific career skills"
                  location="School Premises"
                />
                <TimelineItem
                  time="2:00 - 2:30 PM"
                  title="Reflection & Closing"
                  description="Students share what they learned and receive career exploration materials"
                  location="School Premises"
                />
              </div>
            </div>
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image src="/_MG_3870.webp" alt="Student trying medical equipment" fill className="object-cover" />
              </div>
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image src="/_MG_3888.webp" alt="Engineering demonstration" fill className="object-cover" />
              </div>
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image src="/_MG_3898.webp" alt="Laywer" fill className="object-cover" />
              </div>
              <div className="aspect-square relative rounded-2xl overflow-hidden">
                <Image src="/_MG_3798.webp" alt="Pilot" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">Career Zones</h2>
            <p className="text-gray-600 mb-6">
              Our Career Day features a variety of themed zones where students can explore different industry sectors
              through engaging activities, demonstrations, and conversations with professionals.
            </p>

            <div className="space-y-4">
              <CareerZone
                icon={<Heart className="h-5 w-5" />}
                title="Health & Medicine"
                description="Explore careers in healthcare, from doctors and nurses to medical researchers and technicians."
                color="bg-pink-100"
                textColor="text-pink-600"
              />
              <CareerZone
                icon={<Briefcase className="h-5 w-5" />}
                title="Business & Finance"
                description="Learn about entrepreneurship, marketing, accounting, and other business-related fields."
                color="bg-blue-100"
                textColor="text-blue-600"
              />
              <CareerZone
                icon={<Star className="h-5 w-5" />}
                title="Arts & Communication"
                description="Discover careers in visual arts, performing arts, journalism, and digital media."
                color="bg-purple-100"
                textColor="text-purple-600"
              />
              <CareerZone
                icon={<GraduationCap className="h-5 w-5" />}
                title="Science & Technology"
                description="Explore STEM careers including engineering, computer science, and environmental science."
                color="bg-teal-100"
                textColor="text-teal-600"
              />
              <CareerZone
                icon={<Users className="h-5 w-5" />}
                title="Public Service"
                description="Learn about careers in education, government, law enforcement, and community service."
                color="bg-orange-100"
                textColor="text-orange-600"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-teal-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">For Parents</h2>
                <p className="text-gray-600 mb-6">
                  Parents are welcome to participate in Career Day! Here's how you can get involved:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-teal-100 text-teal-600 mr-2 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    </div>
                    <p className="text-gray-700">Volunteer to share about your own career</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-teal-100 text-teal-600 mr-2 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    </div>
                    <p className="text-gray-700">Help coordinate a career zone or activity</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-teal-100 text-teal-600 mr-2 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    </div>
                    <p className="text-gray-700">Suggest professionals from your network who might participate</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-teal-100 text-teal-600 mr-2 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    </div>
                    <p className="text-gray-700">Attend the event to support your child's exploration</p>
                  </li>
                </ul>
                <Link
                  href="/events/career-day/volunteer"
                  className="inline-block py-3 px-8 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  Volunteer to Participate
                </Link>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/_MG_4064.webp"
                  alt="Parent volunteer at Career Day"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      <ContentSection bgColor="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Join Us for Career Day!</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Career Day is a wonderful opportunity for our students to explore possibilities and begin thinking about
            their future. We invite parents, community members, and professionals to join us in making this event
            inspiring and educational for our students.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?event=career-day"
              className="py-3 px-8 border-2 border-teal-400 text-teal-600 rounded-full font-medium hover:bg-teal-50 transition-colors"
            >
              Request More Information
            </Link>
            <Link
              href="/events"
              className="py-3 px-8 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              View All Events
            </Link>
          </div>
        </div>
      </ContentSection>
    </main>
  )
}

function HighlightCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
      <div className="relative h-48">
        <div className={`absolute inset-0 ${color} opacity-10`}></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className={`p-3 rounded-full ${color} text-white mb-4`}>{icon}</div>
          <h3 className="text-xl font-semibold text-[#0d3b49] mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

function TimelineItem({
  time,
  title,
  description,
  location,
}: {
  time: string
  title: string
  description: string
  location: string
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-start">
      <div className="md:w-36 flex-shrink-0 font-medium text-teal-600 mb-1 md:mb-0">{time}</div>
      <div className="flex-grow">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-teal-600 mt-1">Location: {location}</p>
      </div>
    </div>
  )
}

function CareerZone({
  icon,
  title,
  description,
  color,
  textColor,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  textColor: string
}) {
  return (
    <div className={`${color} rounded-xl p-4 hover:shadow-md transition-shadow`}>
      <div className="flex items-start">
        <div className={`p-2 rounded-lg ${textColor} mr-3 flex-shrink-0`}>{icon}</div>
        <div>
          <h3 className="font-medium text-[#0d3b49] mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}
