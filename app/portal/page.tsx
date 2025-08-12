"use client"

import { motion } from "framer-motion"
import { Settings, Users, GraduationCap, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import Header from "@/components/header" // Import Header component

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <Header /> {/* Render Header component */}
      <PageHeader
        title="Student & Teacher Portal"
        subtitle="Access your personalized learning and teaching resources"
        backgroundImage="/_MG_4304.webp"
      />
      <div className="container mx-auto px-4 py-16">
        {/* Under Development Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative">
            {/* Animated Background Elements */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 border-4 border-dashed border-pink-300 rounded-full opacity-30"
            />

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
                <Settings size={40} className="text-white animate-spin" style={{ animationDuration: "3s" }} />
              </div>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Portal Under Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            We're working hard to bring you an amazing portal experience. Our team is crafting something special for
            both students and teachers.
          </motion.p>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto mb-12"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">Development Progress</span>
              <span className="text-sm font-bold text-pink-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, delay: 1 }}
                className="bg-gradient-to-r from-pink-500 to-blue-500 h-3 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Coming Soon Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Student Portal Preview */}
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
              href="/portal/student"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Coming Soon
              <Clock size={16} className="ml-2" />
            </Link>
          </motion.div>

          {/* Teacher Portal Preview */}
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
              href="/portal/teacher"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Coming Soon
              <Clock size={16} className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Development Timeline</h3>

          <div className="space-y-6">
            {[
              { phase: "Phase 1", title: "User Interface Design", status: "completed", date: "Completed" },
              { phase: "Phase 2", title: "Backend Development", status: "in-progress", date: "In Progress" },
              { phase: "Phase 3", title: "Testing & Security", status: "upcoming", date: "Coming Soon" },
              { phase: "Phase 4", title: "Launch", status: "upcoming", date: "Q2 2025" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.2 }}
                className="flex items-center"
              >
                <div
                  className={`w-4 h-4 rounded-full mr-4 ${
                    item.status === "completed"
                      ? "bg-green-500"
                      : item.status === "in-progress"
                        ? "bg-yellow-500 animate-pulse"
                        : "bg-gray-300"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-gray-800">{item.phase}: </span>
                      <span className="text-gray-600">{item.title}</span>
                    </div>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        item.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : item.status === "in-progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {item.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">
            Want to be notified when the portal launches? Contact our administration team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Contact Us for Updates
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
