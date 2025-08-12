import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function CulturalDayPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="Cultural Day"
        subtitle="Celebrating diversity through learning and fun"
        backgroundImage="/cultural/_MG_0406.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              March, 2025
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">A Global Celebration</h2>
            <p className="text-gray-600 mb-4">
              Cultural Day is one of EMKC's most anticipated annual events, bringing together students and
              staff to celebrate the rich tapestry of cultures that make up our community.
            </p>
            <p className="text-gray-600 mb-6">
              Through performances, food, art, music, and interactive activities, we explore different traditions from
              around the world while fostering understanding, respect, and appreciation for cultural diversity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-sky-500 mr-2" />
                <span className="text-gray-700">10:00 AM - 3:00 PM</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-sky-500 mr-2" />
                <span className="text-gray-700">All Branches</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-lg">
              <Image
                src="/cultural/_MG_0373.webp"
                alt="Students celebrating Cultural Day"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-orange-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0d3b49] mb-12">Event Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image src="/cultural/_MG_0397.webp" alt="Yoruba Cultural performances" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0d3b49] mb-2">Yoruba Cultural performances</h3>
                <p className="text-gray-600">
                  Vibrant drumming, energetic dance, and colorful agbada celebrate Yorùbá heritage, storytelling, and communal pride together.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image src="/cultural/_MG_0025.webp" alt="Igbo Cultural performances" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0d3b49] mb-2">Igbo Cultural performances</h3>
                <p className="text-gray-600">
                  Igbo performances highlight rich traditions through dance, music, and storytelling, fostering pride in cultural roots.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="h-48 relative">
                <Image src="/cultural/_MG_0376.webp" alt="Hausa Cultural performances" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0d3b49] mb-2">Hausa Cultural performances</h3>
                <p className="text-gray-600">
                  Hausa cultural presentations feature colorful attire, rhythmic music, and graceful dances that preserve and share tradition.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-[#0d3b49] mb-4">Schedule of Events</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-24 font-medium text-orange-600">10:00 AM</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Opening Ceremony</h4>
                    <p className="text-sm text-gray-600">Welcome speech and flag parade</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-24 font-medium text-orange-600">10:30 AM</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Cultural Performances</h4>
                    <p className="text-sm text-gray-600">Student presentations from various grades</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-24 font-medium text-orange-600">12:00 PM</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Tribes’ Delicacies</h4>
                    <p className="text-sm text-gray-600">Food stations open for lunch</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-24 font-medium text-orange-600">1:00 PM</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Cultural Activity Stations</h4>
                    <p className="text-sm text-gray-600">Interactive crafts and games from different culture</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-24 font-medium text-orange-600">2:30 PM</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Closing Ceremony</h4>
                    <p className="text-sm text-gray-600">Dance and final celebrations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      {/* Gallery Section */}
      <ContentSection bgColor="bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0d3b49] mb-12">
            Gallery: Moments from Past Cultural Days
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 20 }, (_, i) => (
              <div 
                key={i} 
                className="aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={`/cultural/gallery-${i+1}.webp`}
                  alt={`Cultural Day moment ${i+1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection bgColor="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">Join Us for Cultural Day!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Cultural Day is open to all EMKC families, friends. Come celebrate diversity with
            us and experience the Nigerian cultures through the eyes of our students.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?event=cultural-day"
              className="py-3 px-8 border-2 border-orange-400 text-orange-600 rounded-full font-medium hover:bg-orange-50 transition-colors"
            >
              Request More Information
            </a>
            <a
              href="/events"
              className="py-3 px-8 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              View All Events
            </a>
          </div>
        </div>
      </ContentSection>
    </main>
  )
}