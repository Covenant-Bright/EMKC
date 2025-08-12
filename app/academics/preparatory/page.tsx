import type React from "react"
import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import { Clock, Users, Award, BookOpen, Palette } from "lucide-react"

export default function PreparatoryPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="Preparatory"
        subtitle="Building foundations for lifelong learning"
        backgroundImage="/_MG_3966.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              Ages 2-3 Years
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">The Preparatory Experience</h2>
            <p className="text-gray-600 mb-4">
              Our Preparatory program is designed as a gentle introduction to structured learning for children ages 2-3
              years. During these formative years, children undergo rapid development in language, social, and cognitive
              skills.
            </p>
            <p className="text-gray-600 mb-6">
              At EMKC, we create a nurturing environment that supports this development through play-based learning,
              sensory exploration, and age-appropriate activities that engage children's natural curiosity and
              creativity.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-pink-100 text-pink-600 mr-3">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Half & Full Day</h3>
                  <p className="text-sm text-gray-600">Flexible scheduling options</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-purple-100 text-purple-600 mr-3">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Small Classes</h3>
                  <p className="text-sm text-gray-600">12:1 student-teacher ratio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[60px] overflow-hidden shadow-lg">
              <Image
                src="/_MG_3909.webp"
                alt="Preparatory class at EMKC"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

          </div>
        </div>
      </ContentSection>

      {/* Rest of the component remains the same */}
      <section className="relative py-16 bg-gradient-to-b from-white to-pink-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0d3b49] mb-12">Our Curriculum Focus</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CurriculumCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Language & Literacy"
              description="Songs, stories, and conversations that build vocabulary and early language skills."
              color="bg-pink-100"
              iconColor="text-pink-600"
            />
            <CurriculumCard
              icon={<Award className="h-8 w-8" />}
              title="Social-Emotional"
              description="Developing self-awareness, relationships, and emotional regulation through play."
              color="bg-purple-100"
              iconColor="text-purple-600"
            />
            <CurriculumCard
              icon={<Palette className="h-8 w-8" />}
              title="Creative Expression"
              description="Art, music, and movement activities that encourage self-expression and imagination."
              color="bg-blue-100"
              iconColor="text-blue-600"
            />
            <CurriculumCard
              icon={<Users className="h-8 w-8" />}
              title="Physical Development"
              description="Fine and gross motor activities to strengthen muscles and improve coordination."
              color="bg-green-100"
              iconColor="text-green-600"
            />
            <CurriculumCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Early Math Concepts"
              description="Sorting, counting, and pattern recognition through play-based exploration."
              color="bg-yellow-100"
              iconColor="text-yellow-600"
            />
            <CurriculumCard
              icon={<Award className="h-8 w-8" />}
              title="Sensory Exploration"
              description="Multi-sensory experiences that help children understand their world."
              color="bg-orange-100"
              iconColor="text-orange-600"
            />
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-[40px] overflow-hidden shadow-lg grid grid-cols-2 gap-4">
              <div className="aspect-square relative">
                <Image
                  src="/preparatory-daily-1.webp"
                  alt="Circle time in preparatory class"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative">
                <Image
                  src="/preparatory-daily-2.webp"
                  alt="Art activities in preparatory class"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative">
                <Image
                  src="/_MG_3995.webp"
                  alt="Snack time in preparatory class"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative">
                <Image
                  src="/_MG_4038.webp"
                  alt="Outdoor play in preparatory class"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">A Day in Preparatory</h2>
            <p className="text-gray-600 mb-6">
              Our daily schedule balances structured activities with free play, ensuring children have opportunities to
              explore, create, and develop at their own pace while building important routines.
            </p>

            <div className="space-y-4">
              <TimelineItem
                time="8:00 - 9:00 AM"
                title="Arrival & Free Play"
                description="Children arrive and engage in self-directed play activities"
              />
              <TimelineItem
                time="9:00 - 9:30 AM"
                title="Circle Time"
                description="Songs, stories, and interactive group activities"
              />
              <TimelineItem
                time="9:30 - 10:30 AM"
                title="Learning Centers"
                description="Rotating through art, literacy, sensory, and building stations"
              />
              <TimelineItem
                time="10:30 - 11:00 AM"
                title="Snack & Rest"
                description="Healthy snack followed by a brief quiet time"
              />
              <TimelineItem
                time="11:00 - 12:00 AM"
                title="Outdoor Exploration"
                description="Physical activity and nature exploration"
              />
              <TimelineItem
                time="12:00 - 12:30 PM"
                title="Closing Circle & Dismissal"
                description="Reflection on the day's activities and preparation for dismissal or lunch"
              />
            </div>

            <p className="text-sm text-gray-500 mt-4">
              *Full-day program continues with lunch, nap time, and afternoon activities until 4:00 PM
            </p>
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-pink-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Ready to Join Our Preparatory Program?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We invite you to visit our school, meet our teachers, and see firsthand how our Preparatory program nurtures
            young minds and prepares children for future academic success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="py-3 px-8 border-2 border-pink-400 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition-colors"
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

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>
    </main>
  )
}

function CurriculumCard({
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
    <div className={`${color} rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow`}>
      <div className={`${iconColor} mb-4`}>{icon}</div>
      <h3 className="text-xl font-semibold text-[#0d3b49] mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  )
}

function TimelineItem({
  time,
  title,
  description,
}: {
  time: string
  title: string
  description: string
}) {
  return (
    <div className="flex">
      <div className="w-24 flex-shrink-0 font-medium text-pink-600">{time}</div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
