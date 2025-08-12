// app/graduation/page.jsx
import Header from "@/components/header";
import PageHeader from "@/components/page-header";
import ContentSection from "@/components/content-section";
import ParticlesBackground from "@/components/particles-background";
import Image from "next/image";
import SectionDivider from "@/components/section-divider";
import { Calendar, MapPin, Clock, GraduationCap, Award, Users } from "lucide-react";

export default function GraduationPage() {
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
      <ParticlesBackground particleColor="#0d3b49" />
      <Header />

      <PageHeader
        title="Graduation Ceremony"
        subtitle="Honoring achievements and celebrating new beginnings"
        backgroundImage="/events/_MG_1986.webp"
        overlayColor="rgba(13, 59, 73, 0.7)"
      />

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-lg border-4 border-[#0d3b49]/10">
              <Image
                src="/IMG_3826.webp"
                alt="Graduating students in caps and gowns"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#d4af37] text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg">
              Class of 2025
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0d3b49]/10 text-[#0d3b49] text-sm font-medium mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              June 25, 2025
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">A Celebration of Excellence</h2>
            <p className="text-gray-600 mb-4">
              The Graduation Ceremony is a cherished tradition at EMKC, marking the culmination of years of hard work, 
              dedication, and personal growth for our students.
            </p>
            <p className="text-gray-600 mb-6">
              Join us as we honor our graduates and celebrate their achievements with family, friends, and faculty in a 
              formal ceremony filled with pride, joy, and inspiration for the future.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center bg-[#f8f9fa] p-3 rounded-lg">
                <Clock className="h-5 w-5 text-[#0d3b49] mr-2" />
                <div>
                  <div className="text-sm text-gray-500">Ceremony Time</div>
                  <div className="font-medium">11:00 AM - 4:30 PM</div>
                </div>
              </div>
              <div className="flex items-center bg-[#f8f9fa] p-3 rounded-lg">
                <MapPin className="h-5 w-5 text-[#0d3b49] mr-2" />
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-medium">Grand Auditorium</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-[#f0f4f8]">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0d3b49] text-white mb-4">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-[#0d3b49] mb-2">Ceremony Details</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A formal celebration of academic achievement and the transition to new opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-48 relative bg-gradient-to-r from-[#0d3b49] to-[#1a5f75] flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="text-5xl font-bold mb-2">1</div>
                  <h3 className="text-xl font-semibold">Academic Procession</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Faculty and graduates enter in full academic regalia, marking the formal beginning of the ceremony.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-48 relative bg-gradient-to-r from-[#d4af37] to-[#e8c14d] flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="text-5xl font-bold mb-2">2</div>
                  <h3 className="text-xl font-semibold">Certificate Conferral</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  The moment of recognition as each graduate crosses the stage to receive their certificate.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="h-48 relative bg-gradient-to-r from-[#2c7744] to-[#3a9d5d] flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="text-5xl font-bold mb-2">3</div>
                  <h3 className="text-xl font-semibold">Cap Toss Tradition</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  The celebratory conclusion where graduates toss their caps in unison, symbolizing their achievement.
                </p>
              </div>
            </div>
          </div>

<div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
  <div className="p-6 md:p-8">
    <h3 className="text-2xl font-semibold text-[#0d3b49] mb-6 pb-2 border-b border-gray-200">
      Ceremony Timeline
    </h3>

    <div className="space-y-6">
      <div className="flex">
        <div className="w-24 font-medium text-[#0d3b49] flex-shrink-0">11:30 AM</div>
        <div className="pl-4 border-l-2 border-[#d4af37] pb-6">
          <h4 className="font-bold text-gray-900">Guest Arrival & Registration</h4>
          <p className="text-sm text-gray-600 mt-1">Guests arrive, sign in, and are seated</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-24 font-medium text-[#0d3b49] flex-shrink-0">12:00 PM</div>
        <div className="pl-4 border-l-2 border-[#d4af37] pb-6">
          <h4 className="font-bold text-gray-900">Pre-Ceremony Entertainment</h4>
          <p className="text-sm text-gray-600 mt-1">Cultural performances, music, and multimedia presentations</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-24 font-medium text-[#0d3b49] flex-shrink-0">12:45 PM</div>
        <div className="pl-4 border-l-2 border-[#d4af37] pb-6">
          <h4 className="font-bold text-gray-900">Refreshments & Networking</h4>
          <p className="text-sm text-gray-600 mt-1">Light snacks served while guests interact</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-24 font-medium text-[#0d3b49] flex-shrink-0">1:30 PM</div>
        <div className="pl-4 border-l-2 border-[#d4af37] pb-6">
          <h4 className="font-bold text-gray-900">Graduate Arrival & Robing</h4>
          <p className="text-sm text-gray-600 mt-1">Graduates arrive and assemble in preparation area</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-24 font-medium text-[#0d3b49] flex-shrink-0">2:00 PM</div>
        <div className="pl-4 border-l-2 border-[#d4af37] pb-6">
          <h4 className="font-bold text-gray-900">Academic Procession</h4>
          <p className="text-sm text-gray-600 mt-1">Faculty and graduates enter the auditorium</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-24 font-medium text-[#0d3b49] flex-shrink-0">2:15 PM</div>
        <div className="pl-4 border-l-2 border-[#d4af37] pb-6">
          <h4 className="font-bold text-gray-900">Welcome Address</h4>
          <p className="text-sm text-gray-600 mt-1">Principal's opening remarks</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-24 font-medium text-[#0d3b49] flex-shrink-0">2:30 PM</div>
        <div className="pl-4 border-l-2 border-[#d4af37] pb-6">
          <h4 className="font-bold text-gray-900">Keynote Speech</h4>
          <p className="text-sm text-gray-600 mt-1">Inspirational address by distinguished alumnus</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-24 font-medium text-[#0d3b49] flex-shrink-0">3:00 PM</div>
        <div className="pl-4 border-l-2 border-[#d4af37] pb-6">
          <h4 className="font-bold text-gray-900">Certificate Conferral</h4>
          <p className="text-sm text-gray-600 mt-1">Presentation of certificates to graduands</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-24 font-medium text-[#0d3b49] flex-shrink-0">4:00 PM</div>
        <div className="pl-4 border-l-2 border-[#d4af37] pb-6">
          <h4 className="font-bold text-gray-900">Graduation Declaration</h4>
          <p className="text-sm text-gray-600 mt-1">Official Presentation of Graduation Certificates and Cap Toss Celebration</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-24 font-medium text-[#0d3b49] flex-shrink-0">4:30 PM</div>
        <div className="pl-4 border-l-2 border-[#d4af37]">
          <h4 className="font-bold text-gray-900">Closing & Departure</h4>
          <p className="text-sm text-gray-600 mt-1">Guests and graduates depart; photo sessions continue</p>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

     

      <ContentSection bgColor="bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0d3b49] mb-2">Memorable Moments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse of cherished memories from previous graduation ceremonies
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           {Array.from({ length: 12 }, (_, i) => (
  <div 
    key={i} 
    className="aspect-[3/4] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
  >
    <div className="relative w-full h-full">
      <Image
        src={`/events/graduation-${i+1}.webp`}
        alt={`Graduation memory ${i+1}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white font-medium">Graduands</span>
      </div>
    </div>
  </div>
))}

          </div>
        </div>
      </ContentSection>

      <ContentSection bgColor="bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0d3b49] text-white mb-6">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-[#0d3b49] mb-4">Join the Celebration</h2>
          <p className="text-lg text-gray-600 mb-8">
            The Graduation Ceremony is a milestone event for our students, faculty, and families. 
            We invite you to share in this special moment as we honor the achievements of our graduates 
            and celebrate their bright futures.
          </p>

        </div>
      </ContentSection>
    </main>
  )
}