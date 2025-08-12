import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import Link from "next/link"
import SectionDivider from "@/components/section-divider"

const aboutCards = [
  {
    title: "Our Story",
    description: "Learn about our journey and how EMKC came to be a leading education provider.",
    image: "/_MG_4302.webp",
    link: "/about/our-story",
    bgColor: "bg-sky-50",
    iconColor: "text-sky-500",
  },
  {
    title: "Vision & Mission",
    description: "Discover our vision for the future of education and our mission to achieve it.",
    image: "/_MG_4300.webp",
    link: "/about/vision-mission",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    title: "Core Values",
    description: "Explore the core values that guide everything we do at EMKC.",
    image: "/_MG_4049.webp",
    link: "/about/core-values",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    title: "Our Facilities",
    description: "Tour our modern, safe, and engaging facilities designed for optimal learning.",
    image: "/_MG_4018.webp",
    link: "/about/facilities",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    title: "School Policies",
    description: "Review our policies designed to ensure a safe and productive learning environment.",
    image: "/_DSC5428.webp",
    link: "/about/policies",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="About EMKC"
        subtitle="Where education meets imagination"
        backgroundImage="/_MG_1987.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Welcome to EMKC</h2>
            <p className="text-gray-600 mb-4">
              At EMKC, we believe that every child deserves a nurturing environment where they can grow, learn, and
              thrive. Established with a passion for early childhood education, we've dedicated ourselves to creating a
              place where education meets imagination.
            </p>
            <p className="text-gray-600 mb-4">
              Our approach combines play-based learning with structured curriculum, ensuring that children develop
              essential skills while maintaining their natural curiosity and love for learning.
            </p>
            <p className="text-gray-600">
              We invite you to explore more about us, our values, and our commitment to providing exceptional early
              childhood education.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-[60px] overflow-hidden shadow-lg">
              <Image
                src="/_MG_1761.webp"
                alt="Children in a classroom"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24">
              <Image src="/logo.png" alt="EMKC Logo" width={96} height={96} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-sky-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d3b49] mb-12">Explore Our World</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutCards.slice(0, 3).map((card, index) => (
              <Link key={index} href={card.link} className="group block">
                <div
                  className={`rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${card.bgColor}`}
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={card.image || `/placeholder.svg?height=300&width=400&query=${card.title}`}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 group-hover:text-sky-600 ${card.iconColor}`}>
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {aboutCards.slice(3).map((card, index) => (
              <Link key={index} href={card.link} className="group block">
                <div
                  className={`rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${card.bgColor}`}
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={card.image || `/placeholder.svg?height=300&width=400&query=${card.title}`}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 group-hover:text-sky-600 ${card.iconColor}`}>
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>
    </main>
  )
}
