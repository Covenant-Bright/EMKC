<<<<<<< HEAD
"use client"

import { motion } from "framer-motion"
import { Settings, Users, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import Header from "@/components/header"

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <Header />
      <PageHeader
        title="Student & Teacher Portal"
        subtitle="Access your personalized learning and teaching resources"
        backgroundImage="/_MG_4304.webp"
      />
      <div className="container mx-auto px-4 py-16">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mb-6 shadow-lg">
                <Settings size={40} className="text-white" />
              </div>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Portal Is Now Active
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Access all your educational resources and tools in one convenient place.
          </motion.p>
        </motion.div>

        {/* Portal Access Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Student Portal */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-lg border border-pink-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                <GraduationCap size={24} className="text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Student Portal</h3>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                "Online Fees Payment",
                "Access learning materials",
                "Track academic progress",
                "Communicate with teachers",
                "Track Upcoming Events",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center text-gray-600"
                >
                  <ArrowRight size={16} className="text-pink-500 mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <Link
              href="https://portal.emkc.sch.ng/student/login"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Access Student Portal
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>

          {/* Teacher Portal */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-lg border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Users size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Teacher Portal</h3>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                "Manage student records",
                "Track student attendance",
                "Generate progress reports",
                "Communicate with parents",
                "Access teaching resources",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className="flex items-center text-gray-600"
                >
                  <ArrowRight size={16} className="text-blue-500 mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <Link
              href="https://portal.emkc.sch.ng/teacher/login"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Access Teacher Portal
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-6">
            Having trouble accessing the portal? Contact our support team for assistance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Contact Support
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
=======
"use client"

import { motion } from "framer-motion"
import { Settings, Users, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import Header from "@/components/header"

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <Header />
      <PageHeader
        title="Student & Teacher Portal"
        subtitle="Access your personalized learning and teaching resources"
        backgroundImage="/_MG_4304.webp"
      />
      <div className="container mx-auto px-4 py-16">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mb-6 shadow-lg">
                <Settings size={40} className="text-white" />
              </div>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Portal Is Now Active
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Access all your educational resources and tools in one convenient place.
          </motion.p>
        </motion.div>

        {/* Portal Access Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Student Portal */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-lg border border-pink-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                <GraduationCap size={24} className="text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Student Portal</h3>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                "Online Fees Payment",
                "Access learning materials",
                "Track academic progress",
                "Communicate with teachers",
                "Track Upcoming Events",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center text-gray-600"
                >
                  <ArrowRight size={16} className="text-pink-500 mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <Link
              href="https://portal.emkc.sch.ng/student-login"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Access Student Portal
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>

          {/* Teacher Portal */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-lg border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Users size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Teacher Portal</h3>
            </div>

            <ul className="space-y-3 mb-6">
              {[
                "Manage student records",
                "Track student attendance",
                "Generate progress reports",
                "Communicate with parents",
                "Access teaching resources",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className="flex items-center text-gray-600"
                >
                  <ArrowRight size={16} className="text-blue-500 mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <Link
              href="https://portal.emkc.sch.ng/teacher-login"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Access Teacher Portal
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-6">
            Having trouble accessing the portal? Contact our support team for assistance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Contact Support
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
}