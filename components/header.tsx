"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown,
  Menu,
  X,
  Search,
  Heart,
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
  Users,
} from "lucide-react"
import SearchBar from "./search-bar"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".dropdown-container")) {
        setActiveDropdown(null)
      }
    }

    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [activeDropdown])

  // Toggle dropdown on desktop
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Toggle mobile dropdown
  const toggleMobileDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Force viewport reset - add this function after the existing toggleDropdown functions
  const resetViewport = () => {
    // Force viewport reset by updating the meta tag
    const viewportMeta = document.querySelector('meta[name="viewport"]')
    if (viewportMeta) {
      const content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      viewportMeta.setAttribute("content", content)

      // Force a reflow to apply the viewport changes
      setTimeout(() => {
        window.scrollTo(0, window.scrollY)
      }, 100)
    }
  }

  // Handle orientation changes - add this after the resetViewport function
  const handleOrientationChange = () => {
    // Close any open menus/search on orientation change
    setMobileMenuOpen(false)
    setSearchOpen(false)
    setActiveDropdown(null)

    // Reset viewport after orientation change
    setTimeout(() => {
      resetViewport()
    }, 500) // Delay to allow orientation change to complete
  }

  // Add orientation change listener - add this useEffect after the existing ones
  useEffect(() => {
    // Listen for orientation changes
    window.addEventListener("orientationchange", handleOrientationChange)
    window.addEventListener("resize", handleOrientationChange)

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange)
      window.removeEventListener("resize", handleOrientationChange)
    }
  }, [])

  // Update the existing useEffect that handles body overflow to also reset viewport
  useEffect(() => {
    if (mobileMenuOpen || searchOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.touchAction = "none"
    } else {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""

      // Reset viewport when closing sidebar/search
      setTimeout(() => {
        resetViewport()
      }, 300) // Small delay to allow closing animation to complete
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.touchAction = ""
    }
  }, [mobileMenuOpen, searchOpen])

  return (
    <>
      <header
        className={`sticky top-0 transition-all duration-300 ${
          mobileMenuOpen ? "z-30" : "z-50"
        } ${isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"}`}
        style={{ overflow: "visible" }}
      >
        <div className="header-container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo - Increased mobile size */}
            <Link href="/" className="flex items-center gap-2 z-50 flex-shrink-0">
              <div className="relative rounded-full bg-pink-50 p-1 flex items-center justify-center shadow-sm flex-shrink-0 h-16 w-16 sm:h-16 sm:w-16 md:h-20 md:w-20">
                <Image 
                  src="/logo.png" 
                  alt="Emkc Logo" 
                  width={70} 
                  height={70} 
                  className="h-full w-auto" 
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap">
                <span className="text-black">Excellent</span>
                <span className="text-pink-400">Miracle</span>
              </span>
            </Link>

            {/* Desktop Navigation - Changed to min-[1160px] */}
            <nav className="hidden min-[1160px]:flex items-center gap-8 header-nav">
              <NavLink href="/" active>
                Home
              </NavLink>

              {/* About Dropdown */}
              <div className="relative dropdown-container">
                <button
                  className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-pink-400 transition-colors"
                  onClick={() => toggleDropdown("about")}
                >
                  About{" "}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "about" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="dropdown-menu absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg py-3 min-w-[220px] border border-gray-100"
                      style={{ zIndex: 9999 }}
                    >
                      <Link
                        href="/about/our-story"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Our Story
                      </Link>
                      <Link
                        href="/about/vision-mission"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Vision/Mission
                      </Link>
                      <Link
                        href="/about/core-values"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Our Core Values
                      </Link>
                      <Link
                        href="/about/facilities"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Our Facilities
                      </Link>
                      <Link
                        href="/about/policies"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        School Policies
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Academics Dropdown */}
              <div className="relative dropdown-container">
                <button
                  className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-pink-400 transition-colors"
                  onClick={() => toggleDropdown("academics")}
                >
                  Academics{" "}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${activeDropdown === "academics" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "academics" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="dropdown-menu absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg py-3 min-w-[220px] border border-gray-100"
                      style={{ zIndex: 9999 }}
                    >
                      <Link
                        href="/academics/preparatory"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Preparatory
                      </Link>
                      <Link
                        href="/academics/nursery"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Nursery
                      </Link>
                      <Link
                        href="/academics/primary"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Primary
                      </Link>
                      <Link
                        href="/academics/secondary"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Secondary
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink href="/our-schools">Our Schools</NavLink>
              <NavLink href="/faq">FAQ</NavLink>

              {/* Events Dropdown */}
              <div className="relative dropdown-container">
                <button
                  className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-pink-400 transition-colors"
                  onClick={() => toggleDropdown("events")}
                >
                  Events{" "}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${activeDropdown === "events" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "events" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="dropdown-menu absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg py-3 min-w-[220px] border border-gray-100"
                      style={{ zIndex: 9999 }}
                    >
                      <Link
                        href="/events/drama"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                       Drama
                      </Link>
                      <Link
                        href="/events/cultural-day"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Cultural Day
                      </Link>
                      <Link
                        href="/events/color-day"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Color Day
                      </Link>
                      <Link
                        href="/events/career-day"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Career Day
                      </Link>
                      <Link
                        href="/events/special-events"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                       Special Events
                      </Link>
                        
                      <Link
                        href="/events/upcoming"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >  
                        Upcoming Events
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Portal Dropdown - Last item in desktop navigation */}
              <div className="relative dropdown-container">
                <button
                  className="flex items-center gap-1 text-base font-medium text-gray-700 hover:text-pink-400 transition-colors"
                  onClick={() => toggleDropdown("portal")}
                >
                  Portal{" "}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${activeDropdown === "portal" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "portal" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="dropdown-menu absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg py-3 min-w-[220px] border border-gray-100"
                      style={{ zIndex: 9999 }}
                    >
                      <Link
                        href="/portal/student"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Student Portal
                      </Link>
                      <Link
                        href="/portal/teacher"
                        className="flex px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Teacher Portal
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop Right Actions - Changed to min-[1160px] */}
            <div className="hidden min-[1160px]:flex items-center gap-4">
              {/* Search Button (Desktop) */}
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              {/* Enroll Button */}
              <Link
                href="/enroll"
                className="ml-2 inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-pink-400 px-6 text-sm font-medium text-white shadow-sm hover:shadow-md transition-all hover:scale-105"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile Menu Button - Changed to max-[1159px] */}
            <div className="flex items-center gap-2 max-[1159px]:flex min-[1160px]:hidden">
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <Search size={18} />
              </button>

              <button
                className={`p-2 rounded-full bg-pink-50 hover:bg-pink-100 transition-colors ${
                  mobileMenuOpen ? "z-50" : "z-40"
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X size={24} className="text-pink-600" />
                ) : (
                  <Menu size={24} className="text-pink-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-start justify-center pt-24 px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-xl shadow-xl p-6 max-w-2xl w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Search our site</h2>
                <button onClick={() => setSearchOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>
              <Suspense fallback={<div>Loading search...</div>}>
                <SearchBar onClose={() => setSearchOpen(false)} />
              </Suspense>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sidebar - Changed to max-[1159px] */}
      <MobileSidebar
        isOpen={mobileMenuOpen}
        onClose={() => {
          setMobileMenuOpen(false)
          setTimeout(resetViewport, 100)
        }}
        activeDropdown={activeDropdown}
        toggleMobileDropdown={toggleMobileDropdown}
        searchOpen={searchOpen}
      />
    </>
  )
}

function MobileSidebar({
  isOpen,
  onClose,
  activeDropdown,
  toggleMobileDropdown,
  searchOpen,
}: {
  isOpen: boolean
  onClose: () => void
  activeDropdown: string | null
  toggleMobileDropdown: (dropdown: string) => void
  searchOpen: boolean
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-40 max-[1159px]:block min-[1160px]:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Sidebar - Updated width to 70% */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-0 right-0 h-full w-[70%] bg-white shadow-xl flex flex-col z-50"
          >
            {/* Sidebar Top */}
            <div className="p-4 pb-3 bg-gradient-to-br from-pink-100 to-pink-50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="relative h-15 w-15 rounded-full bg-white/90 p-1 flex items-center justify-center shadow-sm">
                    <Image src="/logo.png" alt="Emkc Logo" width={42} height={42} className="h-10 w-auto" />
                  </div>
                  <span className="text-lg font-bold ml-2">
                    <span className="text-black">Excellent</span>
                    <span className="text-pink-400">Miracle</span>
                  </span>
                </div>
                <button onClick={onClose} className="p-2 rounded-full bg-white/80 text-gray-600 hover:bg-white">
                  <X size={20} />
                </button>
              </div>

              {/* Search Bar */}
              <div className="mt-2">
                <Suspense fallback={<div>Loading search...</div>}>
                  <SearchBar onClose={onClose} isMobile />
                </Suspense>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto p-4">
              <nav className="space-y-1">
                <MobileNavLink href="/" onClick={onClose}>
                  Home
                </MobileNavLink>

                {/* About Mobile Dropdown */}
                <div className="border-b border-gray-100">
                  <button
                    className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                    onClick={() => toggleMobileDropdown("about-mobile")}
                  >
                    <div className="flex items-center">
                      <span className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <Heart size={18} className="text-orange-500" />
                      </span>
                      <span className="font-medium">About</span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        activeDropdown === "about-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    animate={{
                      height: activeDropdown === "about-mobile" ? "auto" : 0,
                      opacity: activeDropdown === "about-mobile" ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="pl-12 space-y-1 overflow-hidden"
                  >
                    {activeDropdown === "about-mobile" && (
                      <>
                        <MobileNavSubLink href="/about/our-story" onClick={onClose}>
                          Our Story
                        </MobileNavSubLink>
                        <MobileNavSubLink href="/about/vision-mission" onClick={onClose}>
                          Vision/Mission
                        </MobileNavSubLink>
                        <MobileNavSubLink href="/about/core-values" onClick={onClose}>
                          Our Core Values
                        </MobileNavSubLink>
                        <MobileNavSubLink href="/about/facilities" onClick={onClose}>
                          Our Facilities
                        </MobileNavSubLink>
                        <MobileNavSubLink href="/about/policies" onClick={onClose}>
                          School Policies
                        </MobileNavSubLink>
                      </>
                    )}
                  </motion.div>
                </div>

                {/* Academics Mobile Dropdown */}
                <div className="border-b border-gray-100">
                  <button
                    className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                    onClick={() => toggleMobileDropdown("academics-mobile")}
                  >
                    <div className="flex items-center">
                      <span className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                        <BookOpen size={18} className="text-pink-500" />
                      </span>
                      <span className="font-medium">Academics</span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        activeDropdown === "academics-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    animate={{
                      height: activeDropdown === "academics-mobile" ? "auto" : 0,
                      opacity: activeDropdown === "academics-mobile" ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="pl-12 space-y-1 overflow-hidden"
                  >
                    {activeDropdown === "academics-mobile" && (
                      <>
                        <MobileNavSubLink href="/academics/preparatory" onClick={onClose}>
                          Preparatory
                        </MobileNavSubLink>
                        <MobileNavSubLink href="/academics/nursery" onClick={onClose}>
                          Nursery
                        </MobileNavSubLink>
                        <MobileNavSubLink href="/academics/primary" onClick={onClose}>
                          Primary
                        </MobileNavSubLink>
                        <MobileNavSubLink href="/academics/secondary" onClick={onClose}>
                          Secondary
                        </MobileNavSubLink>
                      </>
                    )}
                  </motion.div>
                </div>

                {/* Portal Mobile Dropdown - Third item in mobile sidebar */}
                <div className="border-b border-gray-100">
                  <button
                    className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                    onClick={() => toggleMobileDropdown("portal-mobile")}
                  >
                    <div className="flex items-center">
                      <span className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <Users size={18} className="text-blue-500" />
                      </span>
                      <span className="font-medium">Portal</span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        activeDropdown === "portal-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    animate={{
                      height: activeDropdown === "portal-mobile" ? "auto" : 0,
                      opacity: activeDropdown === "portal-mobile" ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="pl-12 space-y-1 overflow-hidden"
                  >
                    {activeDropdown === "portal-mobile" && (
                      <>
                        <MobileNavSubLink href="/portal/student" onClick={onClose}>
                          Student Portal
                        </MobileNavSubLink>
                        <MobileNavSubLink href="/portal/teacher" onClick={onClose}>
                          Teacher Portal
                        </MobileNavSubLink>
                      </>
                    )}
                  </motion.div>
                </div>

                <MobileNavLink href="/our-schools" onClick={onClose}>
                  <span className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                    <BookOpen size={18} className="text-teal-500" />
                  </span>
                  Our Schools
                </MobileNavLink>

                <MobileNavLink href="/faq" onClick={onClose}>
                  <span className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                    <MessageCircle size={18} className="text-yellow-500" />
                  </span>
                  FAQ
                </MobileNavLink>

                {/* Events Mobile Dropdown */}
                <div className="border-b border-gray-100">
                  <button
                    className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                    onClick={() => toggleMobileDropdown("events-mobile")}
                  >
                    <div className="flex items-center">
                      <span className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <Heart size={18} className="text-orange-500" />
                      </span>
                      <span className="font-medium">Events</span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        activeDropdown === "events-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    animate={{
                      height: activeDropdown === "events-mobile" ? "auto" : 0,
                      opacity: activeDropdown === "events-mobile" ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="pl-12 space-y-1 overflow-hidden"
                  >
                    {activeDropdown === "events-mobile" && (
                      <>
                        <MobileNavSubLink href="/events/drama" onClick={onClose}>
                          Drama
                        </MobileNavSubLink>
                        <MobileNavSubLink href="/events/cultural-day" onClick={onClose}>
                          Cultural Day
                        </MobileNavSubLink>
                        <MobileNavSubLink href="/events/color-day" onClick={onClose}>
                          Color Day
                        </MobileNavSubLink>
                        <MobileNavSubLink href="/events/career-day" onClick={onClose}>
                          Career Day
                        </MobileNavSubLink>
                        <MobileNavSubLink href="/events/special-events" onClick={onClose}>
                          Special Events
                        </MobileNavSubLink>
                        <MobileNavSubLink href="/events/upcoming" onClick={onClose}>
                          Upcoming Events
                        </MobileNavSubLink>
                      </>
                    )}
                  </motion.div>
                </div>
              </nav>
            </div>

            {/* Mobile Sidebar Footer */}
            <div className="p-4 bg-gradient-to-br from-pink-100 to-pink-50 border-t border-pink-200">
              <Link
                href="/enroll"
                className="block w-full text-center py-3 px-4 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all hover:scale-105"
                onClick={onClose}
              >
                Enroll Now
              </Link>

              <div className="mt-4 flex justify-center space-x-4">
                <SocialButton href="https://www.facebook.com/share/176SCnL3hL/?mibextid=wwXIfr" icon={<Facebook size={18} className="text-[#1877F2]" />} />
                <SocialButton href="https://x.com/excellentsch" icon={<Twitter size={18} className="text-[#1DA1F2]" />} />
                <SocialButton href="https://www.instagram.com/excellentmiracleschool?igsh=Mmh1ZjFrNTQ3aDN1" icon={<Instagram size={18} className="text-[#E4405F]" />} />
              </div>

              <div className="mt-4 text-center">
                <Link href="/contact" className="text-sm text-pink-600 hover:text-pink-800" onClick={onClose}>
                  Contact Us
                </Link>
                <span className="mx-2 text-gray-300">|</span>
                <Link href="/faq" className="text-sm text-pink-600 hover:text-pink-800" onClick={onClose}>
                  FAQ
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function NavLink({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`text-base font-medium transition-colors hover:text-pink-500 ${
        active ? "text-pink-500" : "text-gray-700"
      }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-pink-50 hover:text-pink-600 border-b border-gray-100 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

function MobileNavSubLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      className="block py-2 px-3 rounded-md text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

function SocialButton({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
    >
      {icon}
    </a>
  )
}