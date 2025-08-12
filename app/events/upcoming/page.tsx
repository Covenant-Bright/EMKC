"use client"; // Add this directive at the very top

import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import Link from "next/link"
import { Calendar, MapPin, Clock, Search, Filter, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

export default function UpcomingEventsPage() {
  // Sample upcoming events data - moved inside component
  const upcomingEvents = [
    {
      id: 1,
      title: "Summer Coaching: Child Development",
      date: "August 11, 2025",
      time: "9:00 PM - 1:00 PM",
      location: "All Branches",
      category: "Academic",
      description:
        "Summer coaching equips children with skills and readiness for a confident start to the new academic year.",
      image: "/summer-coaching.webp",
    },
    {
      id: 2,
      title: "Welcome Back to School",
      date: "September 15, 2025",
      time: "8:00 AM - 9:00 PM",
      location: "All Branches",
      category: "Academic",
      description:
        "Meet your child's teachers and learn about the curriculum and classroom expectations for the upcoming school year.",
      image: "/welcome-back-school.webp",
    },
    {
      id: 3,
      title: "Parent-Teacher Conferences",
      date: "September, 2025",
      time: "Occassionally",
      location: "All Branches",
      category: "Conference",
      description:
        "We invite all parents to join our upcoming conference as we share exciting plans for the school’s transition to a fully digital learning environment.",
      image: "/parent-teacher-conference.webp",
    },
    {
      id: 4,
      title: "Christmas Carol",
      date: "December, 2025",
      time: "10:00 AM",
      location: "All Branches",
      category: "Celebration",
      description:
        "Seasonal carol service showcases student voices and music, fostering joy, reflection, tradition, and community warmth.",
      image: "/christmas-carol.webp",
    },
     {
      id: 5,
      title: "Inter House Sports Competition",
      date: "2026",
      time: "Various Times",
      location: "All Branches",
      category: "Sport",
      description:
        "Get ready for a day of excitement, teamwork, and school pride! Join us as our house teams compete in thrilling races, games, and challenges.",
      image: "/inter-house-sports.webp",
    },
  ];

  // Event categories for filtering
  const eventCategories = [
    "All Events",
    "Academic",
    "Workshop",
    "Sport",
    "Community",
    "Celebration",
    "Conference",
    "Registration",
  ];

  // State for search and filter
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Events")
  const [filteredEvents, setFilteredEvents] = useState(upcomingEvents)

  // Filter events based on search query and selected category
  useEffect(() => {
    let results = upcomingEvents
    
    // Apply category filter
    if (selectedCategory !== "All Events") {
      results = results.filter(event => 
        event.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      results = results.filter(event => 
        event.title.toLowerCase().includes(query) || 
        event.description.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query)
      )
    }
    
    setFilteredEvents(results)
  }, [searchQuery, selectedCategory])

  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="Upcoming Events"
        subtitle="Stay connected with our school community"
        backgroundImage="/_MG_4664.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search events..."
                className="pl-10 pr-4 py-2 border-2 border-purple-100 focus:border-purple-300 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="text-purple-600 h-5 w-5" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
              <select 
                className="border-2 border-purple-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-purple-300"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {eventCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <div className="mb-6">
                <Image
                  src="/no-events-found.webp"
                  alt="No events found"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No events found</h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button 
                className="py-2 px-6 bg-purple-100 text-purple-600 rounded-full font-medium hover:bg-purple-200 transition-colors"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All Events")
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <div className="inline-flex rounded-md shadow-sm">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-purple-600 rounded-r-md hover:bg-purple-700">
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-purple-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">Featured Annual Events</h2>
              <p className="text-gray-600 mb-6">
                Throughout the school year, EMKC hosts several signature events that have become beloved traditions
                in our community. Mark your calendars for these not-to-miss celebrations!
              </p>

              <div className="space-y-6">
                <FeaturedEvent
                  title="Cultural Day"
                  date="March, 2025"
                  description="A celebration of diversity featuring performances, food, and activities from around the world."
                  link="/events/cultural-day"
                />
                <FeaturedEvent
                  title="Color Day"
                  date="March, 2025"
                  description="A vibrant celebration of colors with art, games, and creative activities."
                  link="/events/color-day"
                />
                <FeaturedEvent
                  title="Career Day"
                  date="March, 2025"
                  description="Children learn about different professions through interactive presentations."
                  link="/events/career-day"
                />
               
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-lg">
                <Image
                  src="/upcoming-events.webp"
                  alt="Collage of featured events"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
             
            </div>
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

          </main>
  )
}

function EventCard({ event }: { event: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full group">
      <div className="relative h-48">
        <Image
          src={event.image || `/placeholder.svg?height=200&width=400&query=${event.title}`}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">{event.category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#0d3b49] mb-2 group-hover:text-purple-600 transition-colors">
          {event.title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-purple-500 mr-2" />
            <p className="text-sm text-gray-600">{event.date}</p>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-purple-500 mr-2" />
            <p className="text-sm text-gray-600">{event.time}</p>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 text-purple-500 mr-2" />
            <p className="text-sm text-gray-600">{event.location}</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
      </div>
    </div>
  )
}

function FeaturedEvent({
  title,
  date,
  description,
  link,
}: {
  title: string
  date: string
  description: string
  link: string
}) {
  return (
    <div className="border-l-4 border-purple-400 pl-4 hover:bg-purple-50 transition-colors p-2">
      <Link href={link} className="block group">
        <h3 className="font-semibold text-[#0d3b49] group-hover:text-purple-600 transition-colors">{title}</h3>
        <p className="text-sm text-purple-600 mb-1">{date}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </Link>
    </div>
  )
}