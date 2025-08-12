import type React from "react"
import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import Link from "next/link"
import { Heart, Lightbulb, Users, Globe, Sparkles, Star } from "lucide-react"
import { Suspense } from "react" // Import Suspense

export default function CoreValuesPage() {
  return (
    <main className="min-h-screen relative">
      {/* Wrap the entire page content in Suspense to handle client-side hooks */}
      <Suspense fallback={<div>Loading core values...</div>}>
        <ParticlesBackground />
        <Header />

        <PageHeader
          title="Our Core Values"
          subtitle="The principles that guide our educational community"
          backgroundImage="/_MG_4054.webp"
        />

        <ContentSection bgColor="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">What We Stand For</h2>
              <p className="text-gray-600 mb-6">
                At EMKC, our core values are more than just words on a page—they're principles that guide our
                decisions, shape our culture, and inspire our actions every day. These values reflect what we believe
                about children, education, and our responsibility as educators.
              </p>
              <p className="text-gray-600">
                We intentionally nurture these values in our students, incorporate them into our curriculum, and
                demonstrate them through our interactions with children and families. They form the foundation of our
                educational approach and define the character of our school community.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-[60px] overflow-hidden shadow-lg">
                <Image
                  src="/_MG_4268.webp"
                  alt="Students and teachers embodying our core values"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            
            </div>
          </div>
        </ContentSection>

        <section className="relative py-16 bg-gradient-to-b from-white to-pink-50">
          <SectionDivider position="top" fillColor="white" />

          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold text-center text-[#0d3b49] mb-12">Our Six Core Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ValueCard
                icon={<Lightbulb className="h-8 w-8" />}
                title="Curiosity & Creativity"
                description="We nurture children's natural sense of wonder and imagination, encouraging questions, exploration, and innovative thinking."
                color="bg-pink-500"
                index={1}
              />
              <ValueCard
                icon={<Heart className="h-8 w-8" />}
                title="Compassion & Empathy"
                description="We foster kindness, understanding, and respect for others, helping children develop emotional intelligence and caring relationships."
                color="bg-red-500"
                index={2}
              />
              <ValueCard
                icon={<Users className="h-8 w-8" />}
                title="Community & Collaboration"
                description="We build strong partnerships between students, teachers, families, and our broader community, recognizing that education is a collective endeavor."
                color="bg-orange-500"
                index={3}
              />
              <ValueCard
                icon={<Sparkles className="h-8 w-8" />}
                title="Excellence & Growth"
                description="We strive for excellence in all we do while embracing a growth mindset that values effort, resilience, and continuous improvement."
                color="bg-purple-500"
                index={4}
              />
              <ValueCard
                icon={<Globe className="h-8 w-8" />}
                title="Diversity & Inclusion"
                description="We celebrate human differences and create an inclusive environment where all children and families feel valued, respected, and represented."
                color="bg-blue-500"
                index={5}
              />
              <ValueCard
                icon={<Star className="h-8 w-8" />}
                title="Integrity & Responsibility"
                description="We model and teach ethical behavior, encouraging children to make thoughtful choices and take responsibility for their actions and their world."
                color="bg-green-500"
                index={6}
              />
            </div>
          </div>

          <SectionDivider position="bottom" fillColor="white" className="z-20" />
        </section>

        <ContentSection bgColor="bg-white">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Values in Action</h2>
            <p className="text-lg text-gray-600">
              Our core values aren't just displayed on walls—they're lived every day throughout our school. Here's how
              we put our values into practice:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ActionCard
              image="/_MG_4322.webp"
              title="In the Classroom"
              items={[
                "Literature that reflects diverse characters and experiences",
                "Collaborative projects that teach teamwork and communication",
                "Community meetings where children practice listening and problem-solving",
                "Inquiry-based learning that encourages questions and exploration",
                "Reflection activities that develop self-awareness and growth",
              ]}
            />
            <ActionCard
              image="/_MG_4277.webp"
              title="In Our Community"
              items={[
                "Service learning projects that connect to real community needs",
                "Partnerships with local organizations and businesses",
                "Environmental initiatives that teach sustainability",
                "Cultural celebrations that honor diverse traditions",
              ]}
            />
          </div>
        </ContentSection>

        <section className="relative py-16 bg-gradient-to-b from-white to-pink-50">
          <SectionDivider position="top" fillColor="white" />

          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white rounded-3xl shadow-md overflow-hidden">
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">Character Education</h2>
                  <p className="text-gray-600 mb-8">
                    At EMKC, we believe that developing strong character is as important as academic achievement. Our
                    character education program is designed to help students internalize our core values and develop the
                    social and emotional skills they need to thrive.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg text-[#0d3b49] mb-3">Our Approach Includes:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                          </div>
                          <p className="text-gray-700">Weekly character themes connected to our values</p>
                        </li>
                        <li className="flex items-start">
                          <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                          </div>
                          <p className="text-gray-700">Stories, discussions, and role-playing activities</p>
                        </li>
                        <li className="flex items-start">
                          <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                          </div>
                          <p className="text-gray-700">Conflict resolution and problem-solving strategies</p>
                        </li>
                        <li className="flex items-start">
                          <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                          </div>
                          <p className="text-gray-700">Recognition of positive character traits in action</p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#0d3b49] mb-3">Expected Outcomes:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                          </div>
                          <p className="text-gray-700">Students who demonstrate empathy and compassion</p>
                        </li>
                        <li className="flex items-start">
                          <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                          </div>
                          <p className="text-gray-700">Development of strong ethical decision-making</p>
                        </li>
                        <li className="flex items-start">
                          <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                          </div>
                          <p className="text-gray-700">Ability to collaborate effectively with others</p>
                        </li>
                        <li className="flex items-start">
                          <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                          </div>
                          <p className="text-gray-700">Resilience and perseverance in the face of challenges</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-500 to-red-400 rounded-3xl shadow-md overflow-hidden text-white">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">A Community of Values</h3>
                  <p className="mb-6">
                    "At EMKC, we don't just teach values, we live them. Every interaction is an opportunity to
                    demonstrate and reinforce the principles we believe in. Our school community becomes a microcosm of
                    the kind of world we hope to create—one characterized by kindness, respect, and a shared commitment
                    to growth and learning."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/_MG_1761.webp"
                        alt="Mrs. Olukemi Ojo"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Mrs. Olukemi Ojo</p>
                      <p className="text-sm text-white/80">School Proprietress</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SectionDivider position="bottom" fillColor="white" className="z-20" />
        </section>

        <ContentSection bgColor="bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Join a Values-Driven Community</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              We invite families who share our commitment to these core values to join the EMKC community. Together,
              we can create an educational environment where children develop not only knowledge and skills, but also
              the character strengths needed for a fulfilling life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="py-3 px-8 border-2 border-pink-400 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition-colors"
              >
                Schedule a Visit
              </Link>
              <Link
                href="/enroll"
                className="py-3 px-8 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </ContentSection>
      </Suspense>
    </main>
  )
}

function ValueCard({
  icon,
  title,
  description,
  color,
  index,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  index: number
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow group">
      <div className={`${color} p-8 text-white relative`}>
        <div className="absolute top-3 right-3 opacity-50 text-4xl font-bold">{index < 10 ? `0${index}` : index}</div>
        <div className="bg-white/20 p-3 rounded-lg inline-block mb-4">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

function ActionCard({
  image,
  title,
  items,
}: {
  image: string
  title: string
  items: string[]
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
      <div className="h-48 relative">
        <Image
          src={image || `/placeholder.svg?height=200&width=400&query=${title}`}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-white text-2xl font-bold p-6">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
              </div>
              <p className="text-gray-700">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
