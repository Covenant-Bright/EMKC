"use client"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import LinkWrapper from "./link-wrapper"

// Navigation links structure
const navLinks = [
  { text: "About", href: "/about" },
  { text: "Academics", href: "/academics" },
  { text: "Our Schools", href: "/our-schools" },
  { text: "Events", href: "/events" },
  { text: "Enroll", href: "/enroll" },
  { text: "FAQ", href: "/faq" },
]

export default function SideNav() {
  const pathname = usePathname()

  // Check if the current path matches or is a subpath of the given href
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="flex-shrink-0 w-64 h-full bg-white shadow-md py-8 hidden lg:block">
      <ul className="space-y-1 px-4">
        {navLinks.map((link, index) => {
          const active = isActive(link.href)

          return (
            <li key={index} className="relative">
              {active && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute left-0 w-1 h-full bg-pink-500 rounded-r-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}

              <LinkWrapper
                href={link.href}
                className={cn(
                  "flex items-center px-4 py-3 rounded-md text-base font-medium transition-colors",
                  active ? "text-pink-500 bg-pink-50" : "text-gray-700 hover:bg-gray-50 hover:text-pink-500",
                )}
              >
                <span>{link.text}</span>
              </LinkWrapper>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
