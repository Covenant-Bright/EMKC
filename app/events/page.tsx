import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import { Calendar, MapPin, Clock } from "lucide-react"

const featuredEvents = [
  {
    title: "Cultural Day",
    date: "June 15, 2025",
    location: "All Branches",
    time: "10:00 AM - 3:00 PM",
    description: "Celebrate diversity with performances, food, and activities from around the world.",
    image: "/cultural/_MG_0406.webp",
    link: "/events/cultural-day",
    color: "bg-orange-500",
  },
  {
    title: "Color Day",
    date: "July 10, 2025",
    location: "All Branches",
    time: "9:00 AM - 1:00 PM",
    description: "A vibrant celebration of colors with art, games, and creative activities.",
    image: "/color/_MG_0236.webp",
    link: "/events/color-day",
    color: "bg-pink-500",
  },
  {
    title: "Career Day",
    date: "August 5, 2025",
    location: "All Branches",
    time: "10:00 AM - 2:00 PM",
    description: "Children learn about different professions through interactive presentations.",
    image: "/_MG_4049.webp",
    link: "/events/career-day",
    color: "bg-teal-500",
  },
   {
    title: "Special Events",
    date: "August 5, 2025",
    location: "All Branches",
    time: "10:00 AM - 2:00 PM",
    description: "Children learn about different professions through interactive presentations.",
    image: "/IMG_3826.webp",
    link: "/events/special-events",
    color: "bg-teal-500",
  },
]

const upcomingEvents = [
  {
    title: "Parents' Workshop: Child Development",
    date: "May 25, 2025",
    location: "Downtown Campus",
    description: "Learn about key developmental milestones and how to support your child's growth.",
  },
  {
    title: "Science Fair",
    date: "June 2, 2025",
    location: "Main Campus",
    description: "Students showcase their science projects and experiments to the community.",
  },
  {
    title: "Summer Camp Registration Opens",
    date: "June 10, 2025",
    location: "Online",
    description: "Register early for our popular summer camps featuring sports, arts, and STEM activities.",
  },
  {
    title: "Annual Charity Fun Run",
    date: "September 12, 2025",
    location: "City Park",
    description: "Join our community for a fun run to raise funds for children's education initiatives.",
  },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="Events & News"
        subtitle="Join us for exciting activities throughout the year"
        backgroundImage="/_DSC5247.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Featured Events</h2>
          <p className="text-lg text-gray-600">
            At EMKC, we organize a variety of events throughout the year to enrich our students' educational
            experience and build a strong community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredEvents.map((event, index) => (
            <Link key={index} href={event.link} className="group block">
              <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white h-full flex flex-col">
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={event.image || `/placeholder.svg?height=300&width=400&query=${event.title} school event`}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute top-4 left-4 px-4 py-1 rounded-full ${event.color} text-white font-medium text-sm`}
                  >
                    Featured
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-[#0d3b49] group-hover:text-sky-600 transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-sky-500 mr-2" />
                      <p className="text-sm text-gray-600">{event.date}</p>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-sky-500 mr-2" />
                      <p className="text-sm text-gray-600">{event.location}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-sky-500 mr-2" />
                      <p className="text-sm text-gray-600">{event.time}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                  <div className="mt-auto text-sm font-medium text-sky-600 group-hover:text-sky-700 transition-colors">
                    Learn more →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-purple-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d3b49] mb-12">News</h2>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="divide-y divide-gray-100">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold text-[#0d3b49]">{event.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-pink-500 mr-2" />
                        <p className="text-sm text-gray-700">{event.date}</p>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-pink-500 mr-2" />
                        <p className="text-sm text-gray-700">{event.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/events/upcoming"
              className="inline-block py-3 px-8 bg-gradient-to-r from-purple-500 to-purple-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              View All Events
            </Link>
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>
      
    </main>
  )
}
