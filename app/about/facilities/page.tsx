import type React from "react"
import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import Link from "next/link"
import { BookOpen, Palette, Activity, Cpu, Trees, Utensils, Users, Shield } from "lucide-react"

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="Our Facilities"
        subtitle="Spaces designed for learning, growth, and exploration"
        backgroundImage="/_MG_3490.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Designed for Children</h2>
            <p className="text-gray-600 mb-4">
              At EMKC, we believe that the physical environment plays a crucial role in children's learning and
              development. Our facilities are thoughtfully designed to be safe, engaging, and stimulating spaces that
              support our educational philosophy.
            </p>
            <p className="text-gray-600 mb-6">
              From classrooms filled with natural light to outdoor spaces that inspire exploration, every aspect of our
              branches has been created with children's needs in mind. Our facilities provide the perfect setting for
              our students to learn, play, discover, and grow.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-green-100 text-green-600 mr-3">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Safety First</h3>
                  <p className="text-sm text-gray-600">Secure, child-friendly environments</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-teal-100 text-teal-600 mr-3">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Age-Appropriate</h3>
                  <p className="text-sm text-gray-600">Spaces designed for each age group</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[60px] overflow-hidden shadow-lg">
              <Image
                src="/_MG_4018.webp"
                alt="EMKC branch overview"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
           
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-green-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0d3b49] mb-12">Learning Spaces</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FacilityCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Classrooms"
              description="Bright, spacious classrooms with flexible seating arrangements and learning centers designed to support both collaborative and independent activities."
              image="/_DSC5404.webp"
              color="bg-green-600"
            />
            <FacilityCard
              icon={<Palette className="h-8 w-8" />}
              title="Tailoring"
              description="Students develop practical sewing skills, combining creativity and precision, to prepare for future opportunities in fashion and design."
              image="/_MG_4028.webp"
              color="bg-pink-600"
            />
            <FacilityCard
              icon={<Activity className="h-8 w-8" />}
              title="Information Communication Technology"
              description="Students enhance digital skills through hands-on computer training, preparing them for success in a technology-driven world."
              image="/_MG_4266.webp"
              color="bg-orange-600"
            />
            <FacilityCard
              icon={<Cpu className="h-8 w-8" />}
              title="Technology Lab"
              description="Hands-on experiments in our well-equipped laboratory inspire curiosity, critical thinking, and a deeper understanding of scientific principles."
              image="/IMG_3725.webp"
              color="bg-blue-600"
            />
  
            <FacilityCard
              icon={<Trees className="h-8 w-8" />}
              title="Sports"
              description="Energetic activities on the field promote teamwork, discipline, and physical fitness, helping learners develop healthy and active lifestyles."
              image="/_DSC5309.webp"
              color="bg-teal-600"
            />
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      
      <section className="relative py-16 bg-gradient-to-b from-white to-teal-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">Safety & Sustainability</h2>
              <p className="text-gray-600 mb-6">
                The well-being of our students is our highest priority. Our facilities are designed with safety in mind,
                while also demonstrating our commitment to environmental sustainability.
              </p>

              <div className="space-y-6">
                <FeatureItem
                  icon={<Shield className="h-6 w-6" />}
                  title="Safety Features"
                  description="Secure entry systems and staff trained in security protocols ensure a safe environment for learning."
                  color="bg-green-100"
                  iconColor="text-green-600"
                />
                <FeatureItem
                  icon={<Users className="h-6 w-6" />}
                  title="Accessibility"
                  description="All our branches are designed to be accessible to all, with ramps and inclusive facilities."
                  color="bg-teal-100"
                  iconColor="text-teal-600"
                />
                <FeatureItem
                  icon={<Trees className="h-6 w-6" />}
                  title="Eco-Friendly Design"
                  description="Sustainable practices and green spaces on campus create a healthy environment that nurtures learning while caring for the planet."
                  color="bg-green-100"
                  iconColor="text-green-600"
                />
                <FeatureItem
                  icon={<Utensils className="h-6 w-6" />}
                  title="Healthy Environment"
                  description="High air quality standards, non-toxic materials, and abundant natural light create a healthy indoor environment."
                  color="bg-teal-100"
                  iconColor="text-teal-600"
                />
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/_DSC5354.webp"
                alt="Safety and sustainability features"
                width={600}
                height={500}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6">
                <h3 className="text-xl font-bold mb-2">Lmhs Computer Lab</h3>
                <p className="text-sm">
                  Hands-on access to modern computers and software empowers digital literacy and research skills in a collaborative learning environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      <ContentSection bgColor="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Visit Our Schools</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We welcome you to experience EMKC firsthand. Tour our classrooms, meet our dedicated staff,
            and see our vibrant learning environment. Discover how we nurture academic excellence, character, 
            and creativity in every child we teach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="py-3 px-8 border-2 border-green-400 text-green-600 rounded-full font-medium hover:bg-green-50 transition-colors"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/enroll"
              className="py-3 px-8 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </ContentSection>
    </main>
  )
}

function FacilityCard({
  icon,
  title,
  description,
  image,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  image: string
  color: string
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
      <div className="relative h-48">
        <Image
          src={image || `/placeholder.svg?height=200&width=400&query=${title}`}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
        <div className={`absolute top-4 left-4 p-3 rounded-full ${color} text-white`}>{icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#0d3b49] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

function FeatureItem({
  icon,
  title,
  description,
  color,
  iconColor,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  iconColor: string
}) {
  return (
    <div className="flex items-start">
      <div className={`p-2 rounded-lg ${color} ${iconColor} mr-4 flex-shrink-0`}>{icon}</div>
      <div>
        <h3 className="font-semibold text-[#0d3b49] mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function CampusFeatureMarker({
  top,
  left,
  color,
  number,
}: {
  top: string
  left: string
  color: string
  number: string
}) {
  return (
    <div
      className={`absolute ${color} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md`}
      style={{ top, left }}
    >
      {number}
    </div>
  )
}

function CampusFeature({
  number,
  title,
  description,
  color,
}: {
  number: string
  title: string
  description: string
  color: string
}) {
  return (
    <div className="flex items-start bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div
        className={`${color} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0`}
      >
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-[#0d3b49] mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
