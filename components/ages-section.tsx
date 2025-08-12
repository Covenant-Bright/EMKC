import Image from "next/image"
import Link from "next/link"
import SectionDivider from "./section-divider"

const ageGroups = [
  {
    title: "Preparatory",
    image: "/_MG_3961.webp",
    description: "From age two, we provide a safe and nurturing start to learning.",
    color: "bg-orange-300",
    link: "/academics/preparatory" // Added link property
  },
  {
    title: "Nursery",
    image: "/_DSC5463.webp",
    description: "Welcoming ages  4–5, we foster social, emotional, and language growth.",
    color: "bg-sky-400",
    link: "/academics/nursery" // Added link property
  },
  {
    title: "Primary",
    image: "/_DSC5446.webp",
    description: "Covering ages 6–11, we focus on academic growth, character building, and social skills.",
    color: "bg-orange-400",
    link: "/academics/primary" // Added link property
  },
  {
    title: "Secondary",
    image: "/_DSC5242.webp",
    description: "Rigorous and flexible learning to equip students for advanced studies and life beyond school.",
    color: "bg-green-400",
    link: "/academics/secondary" // Added link property
  },
]

export default function AgesSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-amber-50 to-orange-50">
      <SectionDivider position="top" fillColor="#fef3c7" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-12 md:mb-16">
          <h2 className="flex flex-col mb-4 items-center md:items-start">
            <span className="text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold leading-none text-[#1e6a85]">
              Academics
            </span>
            <span className="text-xl md:text-2xl lg:text-3xl font-medium text-[#1e6a85] mt-2">
              Meeting children where they are, guiding them to their best.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageGroups.map((group, index) => (
            <AgeCard
              key={index}
              title={group.title}
              image={group.image}
              description={group.description}
              color={group.color}
              link={group.link} // Pass link to AgeCard
            />
          ))}
        </div>
      </div>

      <SectionDivider position="bottom" fillColor="white" className="z-20" />

      {/* Decorative curved line */}
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 lg:w-40 overflow-hidden">
        <svg
          viewBox="0 0 100 600"
          className="absolute h-full"
          preserveAspectRatio="none"
          fill="none"
          stroke="#1e6a85"
          strokeWidth="2"
        >
          <path d="M90,0 Q60,150 90,300 Q120,450 90,600" className="opacity-20" />
          <path d="M70,0 Q40,200 70,400 Q100,600 70,800" className="opacity-10" />
        </svg>
      </div>
    </section>
  )
}

function AgeCard({
  title,
  image,
  description,
  color,
  link, // New link prop
}: {
  title: string
  image: string
  description: string
  color: string
  link: string // Added type definition
}) {
  const bgColor =
    title === "Preparatory"
      ? "bg-orange-50"
      : title === "Toddler"
        ? "bg-blue-50"
        : title === "Preschool"
          ? "bg-orange-50"
          : "bg-green-50"

  return (
    <Link href={link} passHref> {/* Wrap card with Link */}
      <div // Converted to div since Link handles navigation
        className={`rounded-2xl ${bgColor} p-4 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group`}
      >
        <div className="rounded-xl overflow-hidden mb-4 h-40 relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-[#1e6a85] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-8 group-hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
        <div className={`absolute bottom-4 left-4 ${color} w-6 h-6 rounded-full`}></div>
      </div>
    </Link>
  )
}