import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const schoolLocations = [
  {
    name: "Excellent Miracle Dalute",
    address: "19, Lane 1, Dalute Road, Odo Ona Elewe Road, Oluyole, Ibadan.",
    phone: "+2348033955391", 
    email: "info@emkc.sch.ng",
    hours: "Mon-Fri: 7:30 AM - 5:00 PM",
    image: "/_MG_4250.webp",
    mapLink: "https://maps.app.goo.gl/jYJHYw9ZYFi42PNe6",
    features: ["All Programs (Preparatory to Secondary)", "Swimming Pool", "Large Outdoor Playground"],
  },
  {
    name: "Excellent Miracle Bolumole",
    address: "Via Bolumole/Popoola Streets, Off MKO Abiola Ring Road, Challenge, Ibadan.",
    phone: "+234 8033955391",
    email: "info@emkc.sch.ng",
    hours: "Mon-Fri: 7:30 AM - 5:00 PM",
    image: "/IMG_4058.webp",
    mapLink: "https://maps.app.goo.gl/PV3TTnu54yMoRYob9",
    features: ["Preparatory to Primary Programs", "Indoor/Outdoor Playground",],
  },
  {
    name: "Excellent Miracle Liberty",
    address: "66 Liberty Rd, Vulcanizer Bus stop, Ibadan.",
    phone: "+234 8033955391", 
    email: "info@emkc.sch.ng",
    hours: "Mon-Fri: 7:30 AM - 5:00 PM",
    image: "/IMG_4088.webp",
    mapLink: "https://maps.app.goo.gl/MTTCAc8weUcFqcDv9",
    features: [
      "All Programs (Preparatory to Primary)",
      "Large Outdoor Playground",
      
    ],
  },
   {
    name: "Living Miracle Bolumole",
    address: "Kawulere Layout, Oyinlola street, Challenge, Bolumole Area, Oluyole, Ibadan.",
    phone: "+234 8033955391", 
    email: "info@emkc.sch.ng",
    hours: "Mon-Fri: 7:30 AM - 5:00 PM",
    image: "/IMG_4055.webp",
    mapLink: "https://maps.app.goo.gl/gsnEVndwx76MuYrY6",
    features: [
      "Secondary School Programs",
      "Large Outdoor Playground",
      "Garden",
      "Science Labs", "Sports Fields"
    ],
  },
]

const mainPhoneNumber = "+234 8033955391" 

export default function OurSchoolsPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="Our Schools"
        subtitle="Explore our branches and facilities"
        backgroundImage="/_MG_3973.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Our School Locations</h2>
          <p className="text-lg text-gray-600">
            EMKC operates multiple branches, each with its own unique character but all sharing our commitment to
            providing exceptional educational experiences in safe, inspiring environments.
          </p>
        </div>

        <div className="space-y-16">
          {schoolLocations.map((school, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className={`order-2 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="rounded-[30px] overflow-hidden shadow-lg">
                  <Image
                    src={school.image || `/placeholder.svg?height=400&width=600&query=modern school building`}
                    alt={school.name}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className={`order-1 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0d3b49] mb-4">{school.name}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{school.address}</p>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{school.phone}</p>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{school.email}</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-sky-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{school.hours}</p>
                  </div>
                </div>

                <h4 className="font-semibold text-lg text-[#0d3b49] mb-2">Key Features:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {school.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-teal-400 mr-2"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={school.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-5 border-2 border-sky-400 text-sky-600 rounded-full text-sm font-medium hover:bg-sky-50 transition-colors"
                  >
                    View on Map
                  </a>
                  <a
                    href={`tel:${school.phone}`}
                    className="py-2 px-5 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full text-sm font-medium hover:from-pink-600 hover:to-pink-500 transition-colors flex items-center"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-teal-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 xl:p-16">
                <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">Contact Our Schools</h2>
                <p className="text-gray-600 mb-6">
                  Have questions about our programs or want to speak with our admissions team? Call us directly to get 
                  immediate assistance and personalized information about our campuses.
                </p>
                <a
                  href={`tel:${mainPhoneNumber}`}
                  className="inline-flex items-center py-3 px-8 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us Now
                </a>
              </div>
              <div className="relative h-64 lg:h-auto">
                <Image src="/_MG_4004.webp" alt="Contact us" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>
    </main>
  )
}