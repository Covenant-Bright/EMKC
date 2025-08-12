import type React from "react"
import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import { Clock, Users, BookOpen, Star, Music } from "lucide-react"
import Link from "next/link"

export default function NurseryPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader title="Nursery" subtitle="Nurturing curiosity and independence" backgroundImage="/_MG_4328.webp" />

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              Ages 4-5 Years
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">The Nursery Journey</h2>
            <p className="text-gray-600 mb-4">
              Our Nursery program builds on children's growing independence and curiosity. At this stage, children are
              developing their social skills, language abilities, and beginning to engage with more complex concepts.
            </p>
            <p className="text-gray-600 mb-6">
              We provide a stimulating environment where 4-5 year olds can explore, question, and discover through both
              structured activities and child-led investigations, setting the foundation for future learning.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-orange-100 text-orange-600 mr-3">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Class Size</h3>
                  <p className="text-sm text-gray-600">12 children per class</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-amber-100 text-amber-600 mr-3">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Flexible Hours</h3>
                  <p className="text-sm text-gray-600">Half or full-day options</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[60px] overflow-hidden shadow-lg">
              <Image
                src="/_MG_4012.webp"
                alt="Nursery class at EMKC"
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
          <h2 className="text-3xl font-bold text-center text-[#0d3b49] mb-12">What Makes Our Nursery Special</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Emergent Literacy"
              description="Introduction to letters, sounds, and a rich print environment that builds pre-reading skills."
              color="bg-orange-100"
              textColor="text-orange-700"
            />
            <FeatureCard
              icon={<Star className="h-8 w-8" />}
              title="Early Mathematics"
              description="Counting, patterns, sorting, and spatial awareness through hands-on activities."
              color="bg-amber-100"
              textColor="text-amber-700"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Social Development"
              description="Friendship skills, turn-taking, and collaborative play that builds emotional intelligence."
              color="bg-yellow-100"
              textColor="text-yellow-700"
            />
            <FeatureCard
              icon={<Music className="h-8 w-8" />}
              title="Creative Arts"
              description="Music, movement, visual arts, and dramatic play that encourage self-expression."
              color="bg-orange-100"
              textColor="text-orange-700"
            />
          </div>

          <div className="mt-16 relative">
            <div className="bg-white rounded-3xl shadow-md p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#0d3b49] mb-4">Our Nursery Environment</h3>
                  <p className="text-gray-600 mb-6">
                    Our Nursery classrooms are designed as inviting, child-centered spaces with clearly defined learning
                    areas that promote different types of play and learning:
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="p-1 rounded-full bg-orange-100 text-orange-600 mr-2 mt-0.5">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      </div>
                      <p className="text-gray-700">Book corner with comfortable seating and picture books</p>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 rounded-full bg-orange-100 text-orange-600 mr-2 mt-0.5">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      </div>
                      <p className="text-gray-700">Dramatic play area with props and costumes</p>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 rounded-full bg-orange-100 text-orange-600 mr-2 mt-0.5">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      </div>
                      <p className="text-gray-700">Block and construction area for building</p>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 rounded-full bg-orange-100 text-orange-600 mr-2 mt-0.5">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      </div>
                      <p className="text-gray-700">Art station with various materials for creative expression</p>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 rounded-full bg-orange-100 text-orange-600 mr-2 mt-0.5">
                        <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      </div>
                      <p className="text-gray-700">Science and discovery center with natural materials</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/_MG_4331.webp"
                      alt="Nursery classroom at EMKC"
                      width={500}
                      height={350}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          
         
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

<ContentSection bgColor="bg-white">
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">
      A Typical Nursery Day
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Our Nursery schedule provides a balanced mix of teacher-led and child-initiated activities, with plenty of
      time for exploration, play, and social interaction.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ScheduleCard
      time="8:00 - 9:00 AM"
      activity="Arrival & Welcome"
      description="Greet teachers and friends, choose morning activities"
      color="bg-orange-50"
    />
    <ScheduleCard
      time="9:00 - 9:30 AM"
      activity="Morning Circle"
      description="Calendar, weather, songs, and introduction to daily learning focus"
      color="bg-amber-50"
    />
    <ScheduleCard
      time="9:30 - 10:30 AM"
      activity="Learning Centers"
      description="Teacher-guided and free choice activities in different learning areas"
      color="bg-yellow-50"
    />
    <ScheduleCard
      time="10:30 - 11:00 AM"
      activity="Snack & Story Time"
      description="Healthy snack followed by interactive reading"
      color="bg-orange-50"
    />
    <ScheduleCard
      time="11:00 - 11:45 AM"
      activity="Outdoor Exploration"
      description="Playground time, games, and nature activities"
      color="bg-amber-50"
    />
    <ScheduleCard
      time="11:45 - 12:30 PM"
      activity="Lunch & Transition"
      description="Lunch followed by preparation for afternoon activities"
      color="bg-yellow-50"
    />
    <ScheduleCard
      time="12:30 - 1:15 PM"
      activity="Rest & Quiet Time"
      description="Relaxation, light music, or individual quiet activities"
      color="bg-orange-50"
    />
    <ScheduleCard
      time="1:15 - 2:00 PM"
      activity="Creative Arts"
      description="Painting, crafts, music, and imaginative play"
      color="bg-amber-50"
    />
    <ScheduleCard
      time="2:00 - 2:45 PM"
      activity="Numeracy & Literacy Fun"
      description="Hands-on activities to strengthen early math and reading skills"
      color="bg-yellow-50"
    />
    <ScheduleCard
      time="2:45 - 3:30 PM"
      activity="Physical Development"
      description="Indoor or outdoor games to build coordination and teamwork"
      color="bg-orange-50"
    />
    <ScheduleCard
      time="3:30 - 4:00 PM"
      activity="Closing Circle & Dismissal"
      description="Review the day, share experiences, and prepare for home time"
      color="bg-amber-50"
    />
  </div>
</ContentSection>


      <section className="relative py-16 bg-gradient-to-b from-white to-amber-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">Ready to Explore Nursery?</h2>
                <p className="text-gray-600 mb-6">
                  We invite you to visit our Nursery program, meet our dedicated teachers, and see how we can help your
                  child thrive during these important developmental years.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="inline-block py-3 px-8 border-2 border-orange-400 text-orange-600 rounded-full font-medium hover:bg-orange-50 transition-colors"
                  >
                    Schedule a Tour
                  </Link>
                  <Link
                    href="/enroll"
                    className="inline-block py-3 px-8 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
                  >
                    Enroll Today
                  </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image src="/_MG_4258.webp" alt="Happy nursery students" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  color,
  textColor,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  textColor: string
}) {
  return (
    <div className={`${color} rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow h-full`}>
      <div className={`${textColor} mb-4`}>{icon}</div>
      <h3 className="text-xl font-semibold text-[#0d3b49] mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  )
}

function ScheduleCard({
  time,
  activity,
  description,
  color,
}: {
  time: string
  activity: string
  description: string
  color: string
}) {
  return (
    <div className={`${color} rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow`}>
      <p className="text-orange-600 font-medium mb-2">{time}</p>
      <h3 className="text-lg font-semibold text-[#0d3b49] mb-2">{activity}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  )
}
