"use client"

import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const enrollmentSteps = [
  {
    number: "01",
    title: "Create Account",
    description:
      "Open the EMKC portal registration page and create your parent account with the correct contact details.",
    icon: "/icons/inquire.webp",
  },
  {
    number: "02",
    title: "Complete Registration",
    description:
      "Fill in your child's biodata, class preference, and all required parent or guardian information on the portal.",
    icon: "/icons/tour.webp",
  },
  {
    number: "03",
    title: "Upload Requirements",
    description:
      "Submit the requested documents and supporting details so our admissions team can review the application properly.",
    icon: "/icons/apply.webp",
  },
  {
    number: "04",
    title: "Admissions Review",
    description:
      "Our team reviews each registration and contacts you if any clarification, screening, or next-step guidance is needed.",
    icon: "/icons/assessment.webp",
  },
  {
    number: "05",
    title: "Confirmation",
    description:
      "Once approved, you will receive confirmation and directions for final onboarding, payment, and resumption.",
    icon: "/icons/enrollment.webp",
  },
]

const benefits = [
  "Safe and nurturing environment",
  "Low student-teacher ratios",
  "Qualified and experienced teachers",
  "Play-based learning approach",
  "Regular parent-teacher communication",
  "Modern, well-equipped facilities",
  "Balanced development (intellectual, physical, social, emotional)",
  "Preparation for future academic success",
]

export default function EnrollPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49] mb-6">Begin Your Child's Journey</h2>
            <p className="text-gray-600 mb-4">
              Thank you for considering Excellent Miracle Kiddies College for your child's education. We're excited to
              welcome new families into our community and to partner with you in your child's educational journey.
            </p>
            <p className="text-gray-600 mb-6">
              Our enrollment process is designed to be straightforward while ensuring that Excellent Miracle Kiddies
              College is the right fit for your family's needs and expectations.
            </p>

            <h3 className="text-xl font-semibold text-[#0d3b49] mb-4">Why Choose Excellent Miracle Kiddies College?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-1 rounded-full bg-pink-100 text-pink-600 mr-2 mt-0.5">
                    <Check size={16} />
                  </div>
                  <p className="text-sm text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[60px] overflow-hidden shadow-lg">
              <Image
                src="/_DSC5455.webp"
                alt="Happy student at Excellent Miracle Kiddies College"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d3b49] mb-12">Enrollment Process</h2>

          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {enrollmentSteps.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-4">
                    <Image
                      src={step.icon || `/placeholder.svg?height=40&width=40&query=enrollment step`}
                      alt={step.title}
                      width={40}
                      height={40}
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-4 w-full">
                    <h3 className="text-lg font-semibold text-pink-500 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                    {step.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      <ContentSection bgColor="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-md bg-gradient-to-br from-pink-500 to-pink-600 text-white p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Start Your Application</h2>
            <p className="mx-auto mb-8 max-w-2xl text-center text-pink-50">
              All new registrations are now completed through the EMKC portal. Use the button below to begin your
              child&apos;s application in the official admissions system.
            </p>

            <div className="mx-auto flex max-w-xl flex-col items-center gap-5 rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm">
              <p className="text-sm leading-6 text-pink-50/95">
                You will be redirected to the secure registration page where you can create an account, complete your
                child&apos;s details, and submit the required information for admissions review.
              </p>
              <a
                href="https://portal.emkc.sch.ng/register"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-medium text-pink-600 shadow-md transition-all hover:bg-gray-50 hover:shadow-lg md:w-auto"
              >
                Continue to Registration Portal
              </a>
              <p className="text-xs uppercase tracking-[0.18em] text-pink-100/90">Secure portal registration</p>
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              If you need help with portal registration or have questions about the process, please contact our
              admissions office at <span className="font-medium text-pink-600">+234 803-3955-391 </span>
              or email <span className="font-medium text-pink-600">info@emkc.sch.ng</span>
            </p>
          </div>
        </div>
      </ContentSection>
    </main>
  )
}
