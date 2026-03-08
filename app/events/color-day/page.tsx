import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function ColorDayPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="Color Day"
        subtitle="A vibrant celebration of creativity and expression"
        backgroundImage="/color/_MG_0236.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              March, 2025
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Celebrate with All Colors</h2>
            <p className="text-gray-600 mb-4">
              Color Day is a joyful celebration that brings our curriculum to life through vibrant colors, art, and
              creative expression. It's a day when our classrooms transform into a rainbow of activities.
            </p>
            <p className="text-gray-600 mb-6">
              Through color-themed games, art projects, and more, students explore the world of
              colors while developing fine motor skills, language abilities, and sensory awareness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-pink-500 mr-2" />
                <span className="text-gray-700">9:00 AM - 3:00 PM</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-pink-500 mr-2" />
                <span className="text-gray-700">All Branches</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-lg">
              <Image
                src="/color/_MG_0254.webp"
                alt="Children enjoying Color Day activities"
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
          <h2 className="text-3xl font-bold text-center text-[#0d3b49] mb-12">Color Day Activities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ColorCard
              color="Red"
              bgColor="bg-red-100"
              textColor="text-red-600"
              activities={["Apple printing", "Fire truck exploration", "Red sensory bins"]}
            />
            <ColorCard
              color="Yellow"
              bgColor="bg-yellow-100"
              textColor="text-yellow-600"
              activities={["Sunflower art", "Lemon science experiments", "Yellow scavenger hunt"]}
            />
            <ColorCard
              color="Blue"
              bgColor="bg-blue-100"
              textColor="text-blue-600"
              activities={["Ocean in a bottle", "Blueberry tasting", "Sky painting"]}
            />
            <ColorCard
              color="Green"
              bgColor="bg-green-100"
              textColor="text-green-600"
              activities={["Leaf printing", "Plant a seed", "Frog jumping games"]}
            />
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ColorCard
              color="Orange"
              bgColor="bg-orange-100"
              textColor="text-orange-600"
              activities={["Pumpkin exploration", "Sunset art", "Orange juice making"]}
            />
            <ColorCard
              color="Purple"
              bgColor="bg-purple-100"
              textColor="text-purple-600"
              activities={["Lavender sensory play", "Grape tasting", "Violet color mixing"]}
            />
            <ColorCard
              color="Pink"
              bgColor="bg-pink-100"
              textColor="text-pink-600"
              activities={["Flamingo crafts", "Rose petal art", "Pink bubble play"]}
            />
            <ColorCard
              color="Rainbow"
              bgColor="bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100"
              textColor="text-indigo-600"
              activities={["Rainbow parachute games", "Color mixing science", "Rainbow dress-up"]}
            />
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-[#0d3b49] mb-4">What to Expect</h3>
                <p className="text-gray-600 mb-4">
                  On Color Day, students are encouraged to wear their assigned class color. Each class will rotate
                  through various color-themed stations throughout the day, exploring different shades and hues through
                  art, science, sensory play, and literacy activities.
                </p>
                <p className="text-gray-600">
                  Parents are welcome to join in the fun! We encourage family volunteers to help with activity stations
                  and share in this colorful celebration of creativity.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#0d3b49] mb-4">Color Day Tips</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                    </div>
                    <p className="text-gray-700">Dress your child in their assigned class color</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                    </div>
                    <p className="text-gray-700">Send a change of clothes (some activities may get messy!)</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                    </div>
                    <p className="text-gray-700">Apply sunscreen before arrival for outdoor activities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                    </div>
                    <p className="text-gray-700">Bring your camera to capture colorful memories!</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      {/* Gallery Section */}
      <ContentSection bgColor="bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0d3b49] mb-12">
            Colorful Memories Gallery
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div 
                key={i} 
                className="aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={`/color/gallery-${i+1}.webp`}
                  alt={`Color Day moment ${i+1}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      <ContentSection bgColor="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">Join Us for Color Day!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Color Day is open to all EMKC families and community members. Come celebrate creativity with
            us and experience the vibrant world of colors through hands-on activities and play.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact?event=color-day"
              className="py-3 px-8 border-2 border-pink-400 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition-colors"
            >
              Request More Information
            </a>
            <a
              href="/events"
              className="py-3 px-8 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              View All Events
            </a>
          </div>
        </div>
      </ContentSection>
    </main>
  )
}

function ColorCard({
  color,
  bgColor,
  textColor,
  activities,
}: {
  color: string
  bgColor: string
  textColor: string
  activities: string[]
}) {
  return (
    <div className={`${bgColor} rounded-2xl shadow-md overflow-hidden p-6`}>
      <h3 className={`text-xl font-bold ${textColor} mb-4`}>{color}</h3>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-start">
            <div className={`p-1 rounded-full ${bgColor} ${textColor} mr-2 mt-0.5`}>
              <div className={`w-2 h-2 rounded-full ${textColor.replace("text", "bg")}`}></div>
            </div>
            <p className="text-gray-700 text-sm">{activity}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}