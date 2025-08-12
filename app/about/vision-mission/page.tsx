import type React from "react"
import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import Link from "next/link"
import { Target, Eye, Heart, Star, Users, Globe } from "lucide-react"

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="Vision & Mission"
        subtitle="Guiding our path to excellence in education"
        backgroundImage="/_MG_4300.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Our Guiding Principles</h2>
            <p className="text-gray-600 mb-6">
              At EMKC, our vision and mission statements serve as the foundation for everything we do. They reflect
              our commitment to providing exceptional educational experiences that prepare children not just for
              academic success, but for fulfilling lives as responsible global citizens.
            </p>
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-indigo-100 text-indigo-600 mr-3">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#0d3b49]">Our Vision</h3>
            </div>
            <p className="text-gray-600 mb-6 pl-12">
              To be recognized as a leading educational institution that nurtures young minds to become creative
              thinkers, compassionate leaders, and lifelong learners who positively impact their communities and the
              world.
            </p>
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-3">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold text-[#0d3b49]">Our Mission</h3>
            </div>
            <p className="text-gray-600 pl-12">
              To provide a nurturing, innovative educational environment that inspires children to discover their unique
              potential, develop a love of learning, and cultivate the skills, knowledge, and character needed to thrive
              in an ever-changing world.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-[60px] overflow-hidden shadow-lg">
              <Image
                src="/_DSC5416.webp"
                alt="Students collaborating at EMKC"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
      
          </div>
        </div>
      </ContentSection>

      {/* Rest of the component remains the same */}
      <section className="relative py-16 bg-gradient-to-b from-white to-blue-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0d3b49] mb-12">Strategic Pillars</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard
              icon={<Star className="h-10 w-10" />}
              title="Educational Excellence"
              color="bg-blue-600"
              description="We strive for the highest standards in teaching and learning, continuously evolving our curriculum and methodologies to reflect best practices in education."
              points={[
                "Research-based curriculum",
                "Highly qualified educators",
                "Ongoing professional development",
                "Regular assessment and improvement",
              ]}
            />
            <PillarCard
              icon={<Heart className="h-10 w-10" />}
              title="Whole Child Development"
              color="bg-indigo-600"
              description="We nurture the intellectual, social, emotional, physical, and creative growth of each child, recognizing that true education encompasses all aspects of development."
              points={["Social-emotional learning", "Character education", "Physical wellness", "Creative expression"]}
            />
            <PillarCard
              icon={<Globe className="h-10 w-10" />}
              title="Global Citizenship"
              color="bg-purple-600"
              description="We foster an understanding of diverse cultures, environmental responsibility, and social justice, preparing students to be ethical, engaged citizens of the world."
              points={["Cultural awareness", "Environmental stewardship", "Service learning", "Global perspectives"]}
            />
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#0d3b49] mb-8">Our Educational Philosophy</h2>

            <div className="space-y-6">
              <PhilosophyPoint
                title="Child-Centered Learning"
                description="We recognize that each child is unique, with individual strengths, interests, and learning styles. Our approach places the child at the center of the educational experience, ensuring that learning is relevant, engaging, and meaningful."
              />
              <PhilosophyPoint
                title="Balance of Structure and Freedom"
                description="We believe in providing a balanced approach that includes both teacher-guided learning and opportunities for open-ended exploration. This balance helps children develop both discipline and creativity."
              />
              <PhilosophyPoint
                title="Learning Through Play and Inquiry"
                description="We understand that children learn best when they are actively engaged in hands-on experiences that spark curiosity and foster a sense of wonder. Play and inquiry are powerful vehicles for deep learning."
              />
              <PhilosophyPoint
                title="Relationships and Community"
                description="We value the importance of strong, positive relationships between teachers, students, and families. We foster a sense of belonging and community that supports each child's development."
              />
            </div>
          </div>

          <div className="bg-blue-50 rounded-3xl p-8 relative">
            <h2 className="text-2xl font-bold text-[#0d3b49] mb-6">Our Long-Term Vision</h2>
            <p className="text-gray-600 mb-6">
              As we look to the future, we envision EMKC continuing to evolve and grow while staying true to our core
              mission and values. Our long-term goals include:
            </p>

            <div className="space-y-4">
              <VisionGoal
                number="01"
                title="Expanding Access"
                description="Making our educational approach accessible to more families through thoughtful expansion and scholarship programs."
              />
              <VisionGoal
                number="02"
                title="Educational Innovation"
                description="Remaining at the forefront of educational practices by continuously researching, testing, and implementing innovative approaches."
              />
              <VisionGoal
                number="03"
                title="Community Impact"
                description="Extending our positive influence beyond our school walls through partnerships, teacher training programs, and community initiatives."
              />
              <VisionGoal
                number="04"
                title="Environmental Leadership"
                description="Leading by example in sustainable practices and environmental education, preparing students to address global challenges."
              />
            </div>

        
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-indigo-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-indigo-100">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Join Us in Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We invite families who share our vision to join the EMKC community. Together, we can create an
            educational experience that nurtures children's natural curiosity, builds their confidence, and prepares
            them to make positive contributions to the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="py-3 px-8 border-2 border-indigo-400 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors"
            >
              Learn More About Us
            </Link>
            <Link
              href="/enroll"
              className="py-3 px-8 bg-gradient-to-r from-indigo-500 to-indigo-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Join Our Community
            </Link>
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>
    </main>
  )
}

function PillarCard({
  icon,
  title,
  description,
  points,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  points: string[]
  color: string
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
      <div className={`${color} p-6 text-white`}>
        <div className="flex items-center">
          <div className="bg-white/20 p-3 rounded-lg mr-4">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <div className="p-1 rounded-full bg-blue-100 text-blue-600 mr-2 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              </div>
              <p className="text-gray-700 text-sm">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function PhilosophyPoint({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-[#0d3b49] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function VisionGoal({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="flex">
      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4 flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-[#0d3b49] mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
