"use client"

import Image from "next/image"
import SectionDivider from "./section-divider"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { createPortal } from "react-dom"

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
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Lock the page in place while the modal is open.
  useEffect(() => {
    if (!selectedNews) {
      return
    }

    const scrollY = window.scrollY
    const { body, documentElement } = document
    const originalHtmlOverflow = documentElement.style.overflow
    const originalBodyOverflow = body.style.overflow
    const originalBodyPosition = body.style.position
    const originalBodyTop = body.style.top
    const originalBodyWidth = body.style.width
    const originalBodyPaddingRight = body.style.paddingRight
    const scrollbarOffset = window.innerWidth - documentElement.clientWidth

    documentElement.style.overflow = "hidden"
    body.style.overflow = "hidden"
    body.style.position = "fixed"
    body.style.top = `-${scrollY}px`
    body.style.width = "100%"

    if (scrollbarOffset > 0) {
      body.style.paddingRight = `${scrollbarOffset}px`
    }

    return () => {
      documentElement.style.overflow = originalHtmlOverflow
      body.style.overflow = originalBodyOverflow
      body.style.position = originalBodyPosition
      body.style.top = originalBodyTop
      body.style.width = originalBodyWidth
      body.style.paddingRight = originalBodyPaddingRight
      window.scrollTo(0, scrollY)
    }
  }, [selectedNews])

  useEffect(() => {
    if (!selectedNews) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedNews(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedNews])

  return (
    <section className="deferred-render relative py-16 md:py-24 overflow-hidden bg-[#f5f1e6]">
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
      {isMounted && selectedNews && createPortal(
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/50 backdrop-blur-xl"
          onClick={() => setSelectedNews(null)}
        >
          <div className="flex min-h-[100dvh] items-center justify-center p-4 sm:p-6">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={`news-dialog-title-${selectedNews.id}`}
              className="my-6 flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex max-h-[calc(100dvh-2rem)] flex-col sm:max-h-[calc(100dvh-3rem)]">
                {/* Modal Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4">
                  <span
                    className={`${selectedNews.tagColor} rounded-full px-3 py-1 text-sm font-bold text-white`}
                  >
                    {selectedNews.tag}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedNews(null)}
                    className="rounded-full p-2 transition-colors hover:bg-gray-100"
                    aria-label="Close article"
                  >
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="min-h-0 overflow-y-auto overscroll-contain">
                  <div className="p-5 sm:p-6">
                    {selectedNews.image && (
                      <div className="mb-6 overflow-hidden rounded-xl bg-slate-100">
                        <Image
                          src={selectedNews.image}
                          alt={selectedNews.title}
                          width={1200}
                          height={675}
                          priority
                          className="h-auto w-full object-cover"
                          sizes="(min-width: 1024px) 896px, (min-width: 768px) 80vw, 92vw"
                        />
                      </div>
                    )}

                    <h3 id={`news-dialog-title-${selectedNews.id}`} className="mb-4 text-2xl font-bold text-[#1e6a85]">
                      {selectedNews.title}
                    </h3>

                    <div className="prose prose-lg max-w-none text-gray-700">
                      <p>{selectedNews.content}</p>
                    </div>

                    <div className="mt-8 text-center">
                      <button
                        type="button"
                        onClick={() => setSelectedNews(null)}
                        className="rounded-lg bg-[#1e6a85] px-6 py-3 font-medium text-white transition-colors hover:bg-[#15536b]"
                      >
                        Close Article
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
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
    <button
      type="button"
      onClick={onClick}
      className="group w-full cursor-pointer appearance-none overflow-hidden rounded-2xl border-0 bg-white p-0 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      {/* Conditional image or tag banner */}
      {item.image ? (
        <div className="relative h-56 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
          <span
            className={`absolute left-4 top-4 ${item.tagColor} rounded-full px-3 py-1 text-xs font-bold text-white`}
          >
            {item.tag}
          </span>
        </div>
      ) : (
        <div className="relative flex h-20 items-center bg-gray-100 px-5">
          <span
            className={`${item.tagColor} rounded-full px-3 py-1 text-xs font-bold text-white`}
          >
            {item.tag}
          </span>
        </div>
      )}

      {/* Title */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#1e6a85] transition-colors group-hover:text-sky-600">
          {item.title}
        </h3>
        <div className="mt-2 flex items-center text-sm font-medium text-sky-600">
          Read more
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  )
}
