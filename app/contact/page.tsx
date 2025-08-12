"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Users, Calendar, CheckCircle } from "lucide-react"
import PageHeader from "@/components/page-header"
import Header from "@/components/header" // Import Header component

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setIsSubmitted(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || "An unexpected error occurred.")
      } else {
        setIsSubmitted(true)
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "general",
        })
      }
    } catch (err) {
      console.error("Client-side submission error:", err)
      setError("Failed to connect to the server. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <Header /> {/* Render Header component */}
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team - we're here to help!"
        backgroundImage="/_DSC5411.webp"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We'd love to hear from you! Whether you have questions about enrollment, our programs, or just want to
                learn more about Excellent Miracle Kiddies College, our friendly team is ready to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-pink-100"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={24} className="text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Visit Our Schools</h3>
                    <p className="text-gray-600">
                      19, Lane 1, Dalute Road, Odo Ona Elewe Road, Oluyole, Ibadan.
                      <br />
                      Via Bolumole/Popoola Streets, Off MKO Abiola Ring Road, Challenge, Ibadan.
                      <br />
                      66 Liberty Rd, Vulcanizer Bus stop, Ibadan.
                      <br />
                      Kawulere Layout, Oyinlola street, Challenge, Bolumole Area, Oluyole, Ibadan.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-blue-100"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                    <p className="text-gray-600">
                       +234 803 395 5391
                      <br />
                       +234 905 856 1722
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-green-100"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                    <p className="text-gray-600">
                      General: info@emkc.sch.ng
                      <br />
                      Support: support@emkc.sch.ng
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-orange-100"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 7:30 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center p-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg font-medium shadow-lg"
              >
                <Calendar size={20} className="mr-2" />
                Schedule Visit
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <MessageCircle size={28} className="text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      placeholder="+234 (0) 123 456 7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    >
                      <option value="general">General Information</option>
                      <option value="admissions">Admissions</option>
                      <option value="academics">Academic Programs</option>
                      <option value="facilities">Facilities</option>
                      <option value="events">Events</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm text-center"
                  >
                    {error}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center px-6 py-4 rounded-lg font-medium text-white transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-pink-500 to-blue-500 hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            )}
          </motion.div>
        </div>

       
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? Feel free to contact us directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What are your admission requirements?",
                answer:
                  "We welcome students of all backgrounds. Basic requirements include completed application form, previous school records, and a brief interview.",
              },
              {
                question: "Do you offer transportation services?",
                answer:
                  "Not yet — but we are actively considering it and exploring options to provide safe, reliable transportation for our students in the future.",
              },
              {
                question: "What is your student-to-teacher ratio?",
                answer:
                  "We maintain small class sizes with a maximum ratio of 16:1 to ensure personalized attention for every student.",
              },
              {
                question: "Are extracurricular activities included?",
                answer:
                  "We offer various activities including sports, arts, music, and academic clubs as part of our holistic education approach.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h4 className="font-semibold text-gray-800 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
