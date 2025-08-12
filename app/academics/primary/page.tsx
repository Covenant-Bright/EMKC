import type React from "react"
import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import Link from "next/link"
import { Globe, BookOpen, Calculator, Beaker, Palette, Trophy, Users } from "lucide-react"

export default function PrimaryPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="Primary Education"
        subtitle="Building strong foundations for academic success"
        backgroundImage="/_MG_4007.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              Ages 6-11 Years
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Primary Education at EMKC</h2>
            <p className="text-gray-600 mb-4">
              Our Primary program builds on the foundation established in early childhood education, providing a
              stimulating and supportive environment for children ages 6-11 to develop academically, socially, and
              personally.
            </p>
            <p className="text-gray-600 mb-6">
              We follow a comprehensive curriculum that meets and exceeds national standards while maintaining our
              commitment to creative, hands-on learning that engages children's natural curiosity and builds critical
              thinking skills.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-sky-100 text-sky-600 mr-3">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Comprehensive</h3>
                  <p className="text-sm text-gray-600">Beyond standard curriculum</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-3">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Small Classes</h3>
                  <p className="text-sm text-gray-600">14:1 student-teacher ratio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[60px] overflow-hidden shadow-lg">
              <Image
                src="/_MG_4008.webp"
                alt="Primary students at EMKC"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-sky-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0d3b49] mb-12">Core Academic Areas</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SubjectCard
              icon={<BookOpen size={40} />}
              title="Language Arts"
              color="bg-sky-600"
              items={[
                "Reading comprehension & analysis",
                "Writing across genres",
                "Spelling & vocabulary development",
                "Public speaking & presentation skills",
                "Literature appreciation",
              ]}
            />
            <SubjectCard
              icon={<Calculator size={40} />}
              title="Mathematics"
              color="bg-blue-600"
              items={[
                "Number sense & operations",
                "Algebraic thinking",
                "Geometry & spatial reasoning",
                "Measurement & data analysis",
                "Problem-solving strategies",
              ]}
            />
            <SubjectCard
              icon={<Beaker size={40} />}
              title="Science"
              color="bg-teal-600"
              items={[
                "Scientific method & inquiry",
                "Life sciences & biology",
                "Earth & space sciences",
                "Physical sciences",
                "Hands-on experiments & projects",
              ]}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <SubjectCard
              icon={<Globe size={40} />}
              title="Social Studies"
              color="bg-indigo-600"
              items={[
                "History & cultural understanding",
                "Geography & map skills",
                "Civics & community",
                "Economics basics",
                "Current events discussions",
              ]}
            />
            <SubjectCard
              icon={<Palette size={40} />}
              title="Arts & Music"
              color="bg-purple-600"
              items={[
                "Visual arts exploration",
                "Music appreciation & performance",
                "Drama & creative expression",
                "Cultural art forms",
                "Collaborative creative projects",
              ]}
            />
            <SubjectCard
              icon={<Trophy size={40} />}
              title="Physical Education"
              color="bg-green-600"
              items={[
                "Motor skills development",
                "Team sports & cooperation",
                "Health & nutrition",
                "Personal fitness goals",
                "Sportsmanship & fair play",
              ]}
            />
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="/_MG_4268.webp"
              alt="Project-based learning at EMKC"
              width={600}
              height={400}
              className="rounded-[40px] shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">Our Teaching Approach</h2>
            <p className="text-gray-600 mb-6">
              At EMKC, we believe that children learn best when they are actively engaged in meaningful, relevant
              learning experiences. Our approach to primary education includes:
            </p>

            <div className="space-y-4">
              <ApproachItem
                title="Project-Based Learning"
                description="Extended investigations that integrate multiple subject areas and build deep understanding."
              />
              <ApproachItem
                title="Differentiated Instruction"
                description="Teaching tailored to meet individual learning styles, abilities, and interests."
              />
              <ApproachItem
                title="Technology Integration"
                description="Thoughtful use of digital tools to enhance learning and build digital literacy."
              />
              <ApproachItem
                title="Character Education"
                description="Intentional focus on values like respect, responsibility, empathy, and perseverance."
              />
              <ApproachItem
                title="Global Perspective"
                description="Learning that connects students to the wider world and diverse cultures."
              />
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-sky-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">Beyond the Classroom</h2>
              <p className="text-gray-600 mb-6">
                We believe that learning extends beyond traditional academics. Our primary program includes rich
                experiences that develop the whole child:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <EnrichmentCard
                  title="Field Trips"
                  description="Regular excursions to museums, nature centers, and cultural institutions."
                  bgColor="bg-blue-50"
                />
                <EnrichmentCard
                  title="Music"
                  description="Music lessons inspire creativity, rhythm, and confidence, helping students express themselves through melody and performance."
                  bgColor="bg-sky-50"
                />
                <EnrichmentCard
                  title="Community Service"
                  description="Age-appropriate projects that develop empathy and social responsibility."
                  bgColor="bg-blue-50"
                />
                <EnrichmentCard
                  title="Computer"
                  description="Computer training builds essential digital skills, preparing students to thrive in an increasingly technology-driven world."
                  bgColor="bg-sky-50"
                />
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/_MG_4282.webp"
                  alt="Field trip at the museum"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-md w-full h-auto"
                />
                <Image
                  src="/_MG_4279.webp"
                  alt="STEM activity in classroom"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-md w-full h-auto"
                />
                <Image
                  src="/_MG_4273.webp"
                  alt="Guest speaker presentation"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-md w-full h-auto"
                />
                <Image
                  src="/_MG_4021.webp"
                  alt="Community service project"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      <ContentSection bgColor="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Join Our Primary Program</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We invite you to discover how EMKC's Primary program can provide your child with an exceptional
            educational foundation in a nurturing, engaging environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="py-3 px-8 border-2 border-sky-400 text-sky-600 rounded-full font-medium hover:bg-sky-50 transition-colors"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/enroll"
              className="py-3 px-8 bg-gradient-to-r from-sky-500 to-sky-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Enroll Today
            </Link>
          </div>
        </div>
      </ContentSection>
    </main>
  )
}

function SubjectCard({
  icon,
  title,
  color,
  items,
}: {
  icon: React.ReactNode
  title: string
  color: string
  items: string[]
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
      <div className={`${color} p-6 text-white flex items-center justify-center`}>
        <div className="mr-4">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="p-1 rounded-full bg-sky-100 text-sky-600 mr-2 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-sky-500"></div>
              </div>
              <p className="text-gray-700 text-sm">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ApproachItem({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="border-l-4 border-sky-400 pl-4">
      <h3 className="font-semibold text-[#0d3b49]">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

function EnrichmentCard({
  title,
  description,
  bgColor,
}: {
  title: string
  description: string
  bgColor: string
}) {
  return (
    <div className={`${bgColor} rounded-xl p-4 shadow-sm`}>
      <h3 className="font-medium text-[#0d3b49] mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}
