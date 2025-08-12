"use client"

import Image from "next/image"
import SectionDivider from "./section-divider"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

const newsItems = [
  {
    id: 1,
    image: "/_MG_4304.webp",
    tag: "ANNOUNCEMENT",
    tagColor: "bg-green-600",
    title: "School Resumes – September 15th, 2025",
    content: `We look forward to welcoming all our Preparatory, Nursery, Primary, and Secondary students back to school on Monday, September 15th, 2025. The new academic year will bring exciting programs, enriched learning experiences, and opportunities for personal growth. Parents are encouraged to buy necessary materials for their wards in preparation for the upcoming session.`
  },
  {
    id: 2,
    image: "/_MG_4320.webp",
    tag: "ACADEMICS",
    tagColor: "bg-blue-600",
    title: "Summer Coaching Program – Starts August 11th, 2025",
    content: `Our annual Summer Coaching Program begins on Monday, August 11th, 2025. Designed for pupils and students in Primary and Secondary classes, the program offers intensive lessons in core subjects, interactive group learning, and skill-building activities. Registration is now open—secure your spot early to prepare for the upcoming term.`
  },
  {
    id: 3,
    image: null,
    tag: "TECH UPDATE",
    tagColor: "bg-orange-500",
    title: "Digital School Portal Launched",
    content: `We are excited to announce the launch of our new school portal in the upcoming term! This platform, available to all parents from Preparatory to Secondary, will initially focus on secure and convenient school fees payment. Additional features will be introduced in future updates. Onboarding details will be sent via email before the term begins.`
  }
]

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null)
  
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedNews) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedNews])

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#f5f1e6]">
      <SectionDivider position="top" fillColor="#fef3c7" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Heading */}
        <div className="mb-12 md:mb-16 text-center">
          <h2
            className="text-[4rem] md:text-[5rem] font-bold text-[#1e6a85]"
            style={{ fontFamily: "var(--font-fredoka)" }}
          >
            News
          </h2>
        </div>

        {/* News cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              onClick={() => setSelectedNews(item)}
            />
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 text-center">
          <a
            href="/events"
            className="inline-block px-8 py-3 border border-orange-400 text-orange-500 rounded-md font-medium hover:bg-orange-50 transition-colors"
          >
            View all
          </a>
        </div>
      </div>

      <SectionDivider position="bottom" fillColor="white" className="z-20" />

      {/* News Modal/Popup */}
      {selectedNews && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedNews(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b">
              <span 
                className={`${selectedNews.tagColor} text-white text-sm font-bold py-1 px-3 rounded-full`}
              >
                {selectedNews.tag}
              </span>
              <button 
                onClick={() => setSelectedNews(null)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="text-gray-500 w-6 h-6" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              {selectedNews.image && (
                <div className="relative h-72 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-[#1e6a85] mb-4">
                {selectedNews.title}
              </h3>
              
              <div className="prose prose-lg text-gray-700">
                <p>{selectedNews.content}</p>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="bg-[#1e6a85] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#15536b] transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function NewsCard({
  item,
  onClick
}: {
  item: typeof newsItems[0]
  onClick: () => void
}) {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Conditional image or tag banner */}
      {item.image ? (
        <div className="relative h-56 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className={`absolute top-4 left-4 ${item.tagColor} text-white text-xs font-bold py-1 px-3 rounded-full`}
          >
            {item.tag}
          </span>
        </div>
      ) : (
        <div className="relative h-20 bg-gray-100 flex items-center px-5">
          <span
            className={`${item.tagColor} text-white text-xs font-bold py-1 px-3 rounded-full`}
          >
            {item.tag}
          </span>
        </div>
      )}

      {/* Title */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#1e6a85] group-hover:text-sky-600 transition-colors">
          {item.title}
        </h3>
        <div className="mt-2 flex items-center text-sky-600 text-sm font-medium">
          Read more
          <svg 
            className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}