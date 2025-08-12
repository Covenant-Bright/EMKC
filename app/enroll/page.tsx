"use client"

import Header from "@/components/header"
import PageHeader from "@/components/page-header"
import ContentSection from "@/components/content-section"
import ParticlesBackground from "@/components/particles-background"
import Image from "next/image"
import SectionDivider from "@/components/section-divider"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const enrollmentSteps = [
  {
    number: "01",
    title: "Inquire",
    description:
      "Fill out our inquiry form or contact us to receive detailed information about our programs and availability.",
    icon: "/icons/inquire.webp",
  },
  {
    number: "02",
    title: "Tour",
    description:
      "Schedule a school tour to visit our facilities, meet our staff, and get a feel for our educational environment.",
    icon: "/icons/tour.webp",
  },
  {
    number: "03",
    title: "Apply",
    description: "Complete the application form, providing all necessary information about your child and family.",
    icon: "/icons/apply.webp",
  },
  {
    number: "04",
    title: "Assessment",
    description:
      "For some age groups, we conduct a friendly assessment to understand your child's developmental needs.",
    icon: "/icons/assessment.webp",
  },
  {
    number: "05",
    title: "Enrollment",
    description:
      "Upon acceptance, complete the enrollment process by signing agreements and paying the registration fee.",
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get form data
      const form = e.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Format WhatsApp message
      let message = `*NEW APPLICATION SUBMISSION*\n\n`;
      message += `*Child's Name:* ${data.childFirstName} ${data.childLastName}\n`;
      message += `*Date of Birth:* ${data.childDOB}\n`;
      message += `*Gender:* ${data.childGender}\n`;
      message += `*Program:* ${data.program}\n`;
      message += `*Start Date:* ${data.startDate}\n\n`;
      
      message += `*Parent/Guardian:* ${data.parentFirstName} ${data.parentLastName}\n`;
      message += `*Relationship:* ${data.relationship}\n`;
      message += `*Email:* ${data.email}\n`;
      message += `*Phone:* ${data.phone}\n`;
      message += `*Alt Phone:* ${data.altPhone || 'N/A'}\n\n`;
      
      message += `*Address:* ${data.streetAddress}, ${data.city}, ${data.state} ${data.postalCode}\n\n`;
      
      if (data.emergencyContactName) {
        message += `*Emergency Contact:* ${data.emergencyContactName} (${data.emergencyContactRelationship})\n`;
        message += `*Emergency Phone:* ${data.emergencyContactPhone || 'N/A'}\n\n`;
      }
      
      if (data.prevSchoolName) {
        message += `*Previous School:* ${data.prevSchoolName}\n`;
        message += `*Grade/Level:* ${data.prevGrade || 'N/A'}\n\n`;
      }
      
      if (data.allergies || data.medicalConditions || data.medicalDetails) {
        message += `*Medical Information:*\n`;
        if (data.allergies) message += `- Allergies: Yes\n`;
        if (data.medicalConditions) message += `- Medical Conditions: Yes\n`;
        message += `${data.medicalDetails || 'No details provided'}\n\n`;
      }
      
      message += `*How They Heard About Us:* ${data.source || 'Not specified'}\n\n`;
      message += `*Additional Information:*\n${data.additionalInfo || 'None'}`;

      // Get WhatsApp number from environment variable
      const whatsappNumber = process.env.NEXT_PUBLIC_FOOTER_WHATSAPP_NUMBER;
      if (!whatsappNumber) {
        throw new Error('WhatsApp number is not configured');
      }

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Optional: Reset form after submission
      form.reset();
      
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your application. Please try again or contact the school directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Start Your Application</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Child's First Name <span className="text-pink-200">*</span>
                  </label>
                  <input
                    name="childFirstName"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Child's Last Name <span className="text-pink-200">*</span>
                  </label>
                  <input
                    name="childLastName"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Child's Date of Birth <span className="text-pink-200">*</span>
                  </label>
                  <input
                    name="childDOB"
                    type="date"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Gender <span className="text-pink-200">*</span>
                  </label>
                  <select
                    name="childGender"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Program of Interest <span className="text-pink-200">*</span>
                </label>
                <select
                  name="program"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                >
                  <option value="">Select a Program</option>
                  <option value="infant">Infant (0-2 years)</option>
                  <option value="preparatory">Preparatory (2-3 years)</option>
                  <option value="nursery">Nursery (4-5 years)</option>
                  <option value="primary">Primary (6-11 years)</option>
                  <option value="secondary">Secondary (12-17 years)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Preferred Start Date <span className="text-pink-200">*</span>
                </label>
                <input
                  name="startDate"
                  type="date"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Parent/Guardian First Name <span className="text-pink-200">*</span>
                  </label>
                  <input
                    name="parentFirstName"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Parent/Guardian Last Name <span className="text-pink-200">*</span>
                  </label>
                  <input
                    name="parentLastName"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Relationship to Child <span className="text-pink-200">*</span>
                  </label>
                  <select
                    name="relationship"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  >
                    <option value="">Select Relationship</option>
                    <option value="parent">Parent</option>
                    <option value="guardian">Legal Guardian</option>
                    <option value="grandparent">Grandparent</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address <span className="text-pink-200">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number <span className="text-pink-200">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="+234 803-3955-391"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Alternative Phone Number</label>
                  <input
                    name="altPhone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="+234 803-3955-391"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Home Address <span className="text-pink-200">*</span>
                </label>
                <input
                  name="streetAddress"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 mb-3"
                  placeholder="Street Address"
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    name="city"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="City"
                    required
                  />
                  <input
                    name="state"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="State/Province"
                    required
                  />
                  <input
                    name="postalCode"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Postal Code"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Emergency Contact Information</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <input
                    name="emergencyContactName"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Contact Name"
                  />
                  <input
                    name="emergencyContactRelationship"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Relationship to Child"
                  />
                </div>
                <input
                  name="emergencyContactPhone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Emergency Contact Phone"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Previous School Information (if applicable)</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input
                    name="prevSchoolName"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="School Name"
                  />
                  <input
                    name="prevGrade"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Grade/Year Level"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Medical Information</label>
                <div className="mb-3">
                  <label className="flex items-center text-sm">
                    <input
                      name="allergies"
                      type="checkbox"
                      className="mr-2 rounded bg-white/10 border-white/20 text-pink-300 focus:ring-pink-300"
                    />
                    Does your child have any allergies?
                  </label>
                </div>
                <div className="mb-3">
                  <label className="flex items-center text-sm">
                    <input
                      name="medicalConditions"
                      type="checkbox"
                      className="mr-2 rounded bg-white/10 border-white/20 text-pink-300 focus:ring-pink-300"
                    />
                    Does your child have any medical conditions we should be aware of?
                  </label>
                </div>
                <textarea
                  name="medicalDetails"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 h-24"
                  placeholder="Please provide details of any allergies, medical conditions, or special needs"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">How did you hear about us?</label>
                <select 
                  name="source"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <option value="">Please select</option>
                  <option value="website">School Website</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend/Family Referral</option>
                  <option value="event">School Event</option>
                  <option value="search">Search Engine</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 h-24"
                  placeholder="Please share any specific questions or information that may help us serve you better."
                ></textarea>
              </div>

              <div className="pt-2">
                <label className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="mr-2 rounded bg-white/10 border-white/20 text-pink-300 focus:ring-pink-300"
                    required
                  />
                  <span>
                    I agree to the{" "}
                    <a href="/terms" className="underline hover:text-white/80">
                      terms and conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="underline hover:text-white/80">
                      privacy policy
                    </a>{" "}
                    <span className="text-pink-200">*</span>
                  </span>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-8 bg-white text-pink-600 rounded-lg font-medium shadow-md hover:shadow-lg transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-50'
                  }`}
                >
                  {isSubmitting ? 'Sending to WhatsApp...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </motion.div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              If you prefer to enroll in person or have questions about the process, please contact our admissions
              office at <span className="font-medium text-pink-600">+234 803-3955-391 </span>
              or email <span className="font-medium text-pink-600">info@emkc.sch.ng</span>
            </p>
          </div>
        </div>
      </ContentSection>
    </main>
  )
}