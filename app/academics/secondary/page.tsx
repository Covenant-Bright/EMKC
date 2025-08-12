import type React from "react"
import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import Link from "next/link"
import { Lightbulb, GraduationCap, Globe, BookOpen, Medal, Users, Brain, Target } from "lucide-react"

export default function SecondaryPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="Secondary Education"
        subtitle="Preparing students for future success"
        backgroundImage="/_MG_4921.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-teal-600 text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              Ages 12-17 Years
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Secondary Education at EMKC</h2>
            <p className="text-gray-600 mb-4">
              Our Secondary program builds on the strong foundation established in our Primary years, offering a
              rigorous academic curriculum that prepares students for higher education while nurturing critical
              thinking, creativity, and character development.
            </p>
            <p className="text-gray-600 mb-6">
              We create a supportive learning environment where adolescents can explore their interests, develop their
              unique abilities, and grow into confident, capable young adults ready to make positive contributions to
              society.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-teal-100 text-teal-600 mr-3">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">College Prep</h3>
                  <p className="text-sm text-gray-600">Advanced curriculum</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-cyan-100 text-cyan-600 mr-3">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Class Size</h3>
                  <p className="text-sm text-gray-600">16:1 student-teacher ratio</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[60px] overflow-hidden shadow-lg">
              <Image
                src="/_MG_4096.webp"
                alt="Secondary students at EMKC"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
        
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-teal-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0d3b49] mb-12">Our Academic Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Our Secondary curriculum is designed to challenge students academically while providing the support they
                need to succeed. We offer a comprehensive program that includes:
              </p>

              <div className="space-y-6">
                <AcademicFeature
                  icon={<BookOpen className="h-6 w-6" />}
                  title="Core Academic Subjects"
                  description="Advanced study in mathematics, science, language arts, social studies, and foreign languages."
                  color="bg-teal-100"
                  iconColor="text-teal-600"
                />
                <AcademicFeature
                  icon={<Globe className="h-6 w-6" />}
                  title="Global Perspective"
                  description="Curriculum that explores diverse cultures, global issues, and international relations."
                  color="bg-cyan-100"
                  iconColor="text-cyan-600"
                />
                <AcademicFeature
                  icon={<Brain className="h-6 w-6" />}
                  title="Critical Thinking"
                  description="Activities and assignments designed to develop analytical thinking and problem-solving skills."
                  color="bg-teal-100"
                  iconColor="text-teal-600"
                />
                <AcademicFeature
                  icon={<Target className="h-6 w-6" />}
                  title="Personalized Learning"
                  description="Opportunities for students to pursue topics of interest in greater depth."
                  color="bg-cyan-100"
                  iconColor="text-cyan-600"
                />
              </div>
            </div>
            <div>
              <div className="bg-white rounded-3xl shadow-md overflow-hidden">
                <div className="grid grid-cols-3 gap-0.5">
                  <SubjectBlock subject="Mathematics" color="bg-teal-500" />
                  <SubjectBlock subject="Science" color="bg-cyan-500" />
                  <SubjectBlock subject="English" color="bg-blue-500" />
                  <SubjectBlock subject="History" color="bg-indigo-500" />
                  <SubjectBlock subject="Languages" color="bg-purple-500" />
                  <SubjectBlock subject="Technology" color="bg-green-500" />
                  <SubjectBlock subject="Arts" color="bg-pink-500" />
                  <SubjectBlock subject="Physical Ed" color="bg-orange-500" />
                  <SubjectBlock subject="Electives" color="bg-yellow-500" />
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-500 text-sm italic">
                    Our integrated curriculum helps students make connections across subject areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      <ContentSection bgColor="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Beyond Academics</h2>
          <p className="text-lg text-gray-600">
            We believe in educating the whole person. Our Secondary program includes numerous opportunities for students
            to develop leadership skills, explore their interests, and prepare for life beyond the classroom.
          </p>
        </div>


        <div className="mt-16 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-[#0d3b49] mb-4">University Preparation</h3>
              <p className="text-gray-600 mb-6">
                EMKC's Secondary program provides excellent preparation for higher education. Our graduates are
                well-prepared for the academic and personal challenges of university life, with:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-teal-100 text-teal-600 mr-2 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                  </div>
                  <p className="text-gray-700">Dedicated college counseling beginning in SSS 2</p>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-teal-100 text-teal-600 mr-2 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                  </div>
                  <p className="text-gray-700">Advanced coursework and exam preparation</p>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-teal-100 text-teal-600 mr-2 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                  </div>
                  <p className="text-gray-700">Guidance with applications and personal statements</p>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-teal-100 text-teal-600 mr-2 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                  </div>
                  <p className="text-gray-700">Study skills and time management workshops</p>
                </li>
              </ul>
            </div>
            <div className="relative h-64 lg:h-auto">
              <Image src="/_MG_1992.webp" alt="University preparation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-teal-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">Student Life</h2>
              <p className="text-gray-600 mb-6">
                Secondary education at Living Miracle is about more than just academics. We foster a vibrant student community
                through:
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-teal-100 text-teal-600 mr-3 mt-0.5 flex-shrink-0">
                    <Globe size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#0d3b49]">Clubs & Activities</h3>
                    <p className="text-sm text-gray-600">
                      Over 15 student-led clubs covering interests from debate to photography to environmental activism.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-teal-100 text-teal-600 mr-3 mt-0.5 flex-shrink-0">
                    <Medal size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#0d3b49]">Athletics Program</h3>
                    <p className="text-sm text-gray-600">
                      Competitive sports teams and recreational athletic opportunities that build teamwork and physical
                      fitness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-teal-100 text-teal-600 mr-3 mt-0.5 flex-shrink-0">
                    <Lightbulb size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#0d3b49]">Arts Program</h3>
                    <p className="text-sm text-gray-600">
                      Visual arts, music, drama, and dance programs with regular performances and exhibitions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 rounded-full bg-teal-100 text-teal-600 mr-3 mt-0.5 flex-shrink-0">
                    <Users size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#0d3b49]">Community Service</h3>
                    <p className="text-sm text-gray-600">
                      Structured volunteer opportunities that develop empathy, leadership, and social responsibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/_DSC5283.webp"
                  alt="Debate club activity"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-md w-full h-auto"
                />
                <Image
                  src="/_DSC5356.webp"
                  alt="Athletics program"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-md w-full h-auto"
                />
                <Image
                  src="/_DSC5333.webp"
                  alt="Arts program performance"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-md w-full h-auto"
                />
                <Image
                  src="/IMG_3737.webp"
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Join Our Secondary Program</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We invite you to discover how EMKC's Secondary program can prepare your child for a successful future
            through rigorous academics, character development, and enriching experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="py-3 px-8 border-2 border-teal-400 text-teal-600 rounded-full font-medium hover:bg-teal-50 transition-colors"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/enroll"
              className="py-3 px-8 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Enroll Today
            </Link>
          </div>
        </div>
      </ContentSection>
    </main>
  )
}

function AcademicFeature({
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

function SubjectBlock({
  subject,
  color,
}: {
  subject: string
  color: string
}) {
  return (
    <div className={`${color} h-24 flex items-center justify-center p-4`}>
      <span className="text-white font-medium text-center text-sm">{subject}</span>
    </div>
  )
}

function ProgramCard({
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
        <div className={`absolute top-0 left-0 w-full h-full opacity-10 ${color}`}></div>
        <div className={`absolute top-4 left-4 p-3 rounded-full ${color} text-white`}>{icon}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#0d3b49] mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  )
}
