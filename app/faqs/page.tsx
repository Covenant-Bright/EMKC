import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Link from "next/link"

export default function FAQPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Excellent Miracle Kiddies College"
        backgroundImage="/_DSC5463.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Admission Questions */}
            <FAQSection
              title="Admission & Enrollment"
              questions={[
                {
                  question: "What is the admission process?",
                  answer:
                    "Our admission process includes an application form submission, student assessment, parent interview, and School tour. Once completed, acceptance decisions are typically made instantly.",
                },
                {
                  question: "What age requirements do you have for different programs?",
                  answer:
                    "Our Preparatory program accepts children ages 2-3, Nursery is for ages 4-5, Primary is for ages 6-11, and Secondary is for ages 12-17. We assess each child individually to ensure proper placement.",
                },
                {
                  question: "Do you offer scholarships or financial aid?",
                  answer:
                    "Yes, we offer a limited number of merit-based scholarships and need-based financial aid. Please contact our admissions office for more information and application requirements.",
                },
              ]}
            />

            {/* Academic Questions */}
            <FAQSection
              title="Academics & Curriculum"
              questions={[
                {
                  question: "What curriculum do you follow?",
                  answer:
                    "We follow a comprehensive curriculum that combines elements of national standards with international best practices. Our approach emphasizes critical thinking, creativity, and character development alongside strong academic foundations.",
                },
                {
                  question: "How do you accommodate different learning styles?",
                  answer:
                    "Our teachers are trained to recognize and adapt to diverse learning styles. We employ various teaching methodologies including visual, auditory, and kinesthetic approaches to ensure every child can succeed.",
                },
                {
                  question: "What languages do you teach?",
                  answer:
                    "In addition to English as our primary language of instruction, we offer foreign language education including French and one local language. Secondary students may have additional language options.",
                },
              ]}
            />

            {/* School Life Questions */}
            <FAQSection
              title="School Life & Facilities"
              questions={[
                {
                  question: "What are the school hours?",
                  answer:
                    "Regular school hours are 7:30 AM to 4:00 PM, Monday to Thursday, and 7:30 AM to 2:00 PM on Friday. We also offer after-school care from 7:30 AM until 5:00 PM for families who need extended hours.",
                },
                {
                  question: "Do you provide meals?",
                  answer:
                    "No, the school does not provide meals. Parents are expected to prepare and provide their children’s meals for both morning and afternoon sessions.",
                },
                {
                  question: "What safety measures do you have in place?",
                  answer:
                    "Our comprehensive safety protocols include secure school access, regular safety drills, trained staff, and proper supervision. All visitors must check in, and we maintain detailed emergency response procedures.",
                },
              ]}
            />

            {/* Other Questions */}
            <FAQSection
              title="Other Information"
              questions={[
                {
                  question: "How can parents get involved?",
                  answer:
                    "We encourage parent involvement through our Parent-Teacher Association, volunteer opportunities, classroom activities, and school events. We believe education is a partnership between school and family.",
                },
                {
                  question: "What extracurricular activities do you offer?",
                  answer:
                    "We offer a wide range of extracurricular activities including sports, arts, music, debate, and community service opportunities. Activities vary by age group and branch.",
                },
                {
                  question: "How do you handle discipline issues?",
                  answer:
                    "We take a developmental approach to behavior and discipline, focusing on positive reinforcement, conflict resolution skills, and age-appropriate consequences. We maintain close communication with parents regarding behavioral concerns.",
                },
              ]}
            />
          </div>

          <div className="mt-12 text-center p-8 bg-amber-50 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Didn't find what you're looking for?</h3>
            <p className="mb-6">We're happy to answer any additional questions you may have.</p>
            <Link
              href="/contact"
              className="inline-block py-3 px-8 bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </ContentSection>
    </main>
  )
}

function FAQSection({ title, questions }: { title: string; questions: { question: string; answer: string }[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#0d3b49] mb-4">{title}</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0d3b49] mb-2">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
