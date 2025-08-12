import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"
import { BookOpen, Award, Users, Clock } from "lucide-react"

const academicPrograms = [
  {
    title: "Preparatory",
    ages: "2-3 years",
    description: "Our preparatory program introduces young children to structured learning in a playful environment.",
    image: "/_MG_3966.webp",
    color: "bg-pink-100",
    link: "/academics/preparatory",
  },
  {
    title: "Nursery",
    ages: "4-5 years",
    description: "The nursery program focuses on developing social skills and early academic foundations.",
    image: "/_MG_4328.webp",
    color: "bg-orange-100",
    link: "/academics/nursery",
  },
  {
    title: "Primary",
    ages: "6-11 years",
    description:
      "Our primary education builds strong academic skills while encouraging creativity and critical thinking.",
    image: "/_MG_4007.webp",
    color: "bg-sky-100",
    link: "/academics/primary",
  },
  {
    title: "Secondary",
    ages: "12-17 years",
    description: "The secondary program prepares students for higher education with comprehensive subject coverage.",
    image: "/_MG_4921.webp",
    color: "bg-teal-100",
    link: "/academics/secondary",
  },
]

export default function AcademicsPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="Academics"
        subtitle="Nurturing minds through innovative education"
        backgroundImage="/_MG_4004.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Our Educational Approach</h2>
            <p className="text-gray-600 mb-4">
              At EMKC, we believe in a holistic approach to education that nurtures the whole child—intellectually,
              socially, emotionally, and physically. Our curriculum is designed to inspire curiosity, foster creativity,
              and build confidence.
            </p>
            <p className="text-gray-600 mb-4">
              We combine the best elements of various educational philosophies with modern research on child development
              to create an environment where children don't just learn, but thrive.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-sky-100 text-sky-600 mr-3">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Research-Based</h3>
                  <p className="text-sm text-gray-600">Curriculum backed by latest research</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-pink-100 text-pink-600 mr-3">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">High Standards</h3>
                  <p className="text-sm text-gray-600">Excellence in education</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-orange-100 text-orange-600 mr-3">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Small Classes</h3>
                  <p className="text-sm text-gray-600">Personalized attention</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-teal-100 text-teal-600 mr-3">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Flexible Learning</h3>
                  <p className="text-sm text-gray-600">Adapts to each child's pace</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[60px] overflow-hidden shadow-lg">
              <Image
                src="/_MG_4035.webp"
                alt="Students learning in classroom"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-blue-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d3b49] mb-12">Our Academic Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicPrograms.map((program, index) => (
              <Link key={index} href={program.link} className="group block">
                <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
                  <div className="h-56 relative overflow-hidden">
                    <Image
                      src={program.image || `/placeholder.svg?height=300&width=400&query=${program.title} education`}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute top-4 left-4 px-4 py-1 rounded-full ${program.color} text-gray-800 font-medium text-sm`}
                    >
                      Ages: {program.ages}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#0d3b49] group-hover:text-sky-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600">{program.description}</p>
                    <div className="mt-4 text-sm font-medium text-sky-600 group-hover:text-sky-700 transition-colors">
                      Learn more →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      <ContentSection bgColor="bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Ready to Join EMKC?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We invite you to explore our academic programs and discover how EMKC can provide an outstanding
            educational foundation for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="py-3 px-8 border-2 border-sky-400 text-sky-600 rounded-full font-medium hover:bg-sky-50 transition-colors"
            >
              Schedule a Tour
            </a>
            <a
              href="/enroll"
              className="py-3 px-8 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Enroll Today
            </a>
          </div>
        </div>
      </ContentSection>
    </main>
  )
}
