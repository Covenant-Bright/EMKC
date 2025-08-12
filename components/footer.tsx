// components/Footer.tsx
"use client"

import { useState, useTransition } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Send, Phone, Mail, MapPin } from "lucide-react"
import LinkWrapper from "./link-wrapper"

export default function Footer() {
  // Use a dedicated WhatsApp number for the footer contact
  const footerWhatsappNumber = process.env.NEXT_PUBLIC_FOOTER_WHATSAPP_NUMBER || "";
  const WhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  
  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Newsletter state
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      setMessage(null)
      try {
        const res = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || "Subscription failed")
        setMessage({ type: "success", text: data.message || "Subscription successful!" })
        setEmail("")
      } catch (err: any) {
        setMessage({ type: "error", text: err.message || "Failed to subscribe." })
      }
    })
  }

  // Curved edge SVG
  const CurvedEdge = () => (
    <div className="absolute top-0 left-0 right-0 -translate-y-full h-16 overflow-hidden">
      <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
        <path
          d="M0 64H1440V42.6667C1320 14.2222 1200 0 1080 0C960 0 840 14.2222 720 42.6667C600 71.1111 480 85.3333 360 85.3333C240 85.3333 120 71.1111 0 42.6667V64Z"
          fill="#6366F1"
        />
      </svg>
    </div>
  )

  return (
    <motion.footer
      className="bg-indigo-600 text-white relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
    >
      <CurvedEdge />

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <motion.div variants={itemVariants}>
            <Image src="/logo.png" alt="Excellent Miracle Kiddies College" width={180} height={72} className="mb-4" />
            <p className="text-gray-100 mb-4">
              Where education meets imagination. Providing quality education for children in a nurturing environment.
            </p>
            <div className="flex space-x-4 mt-6">
  {[
    { Icon: Facebook, url: "https://www.facebook.com/share/176SCnL3hL/?mibextid=wwXIfr" },
    { Icon: Twitter, url: "https://x.com/excellentsch" },
    { Icon: Instagram, url: "https://www.instagram.com/excellentmiracleschool?igsh=Mmh1ZjFrNTQ3aDN1" },
  ].map(({ Icon, url }, i) => (
    <motion.a
      key={i}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
    >
      <Icon size={20} />
    </motion.a>
  ))}
</div>

          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { text: "About Us", href: "/about" },
                { text: "Academics", href: "/academics" },
                { text: "Our Schools", href: "/our-schools" },
                { text: "Enrollment", href: "/enroll" },
                { text: "Events", href: "/events" },
                { text: "FAQ", href: "/faq" },
              ].map((link, idx) => (
                <li key={idx}>
                  <LinkWrapper href={link.href} className="text-gray-100 hover:text-pink-300 transition-colors flex items-center">
                    <span className="ml-1">{link.text}</span>
                  </LinkWrapper>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1" size={18} />
                <span>19, Lane 1, Dalute Road, Odo Ona Elewe Road, Oluyole, Ibadan 200261.</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3" size={18} />
                <span>(234) 803-3955-391</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3" size={18} />
                <span>info@emkc.sch.ng</span>
              </li>
              {/* WhatsApp Contact */}
              {footerWhatsappNumber && (
                <li className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="w-5 h-5 mr-3"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <a 
                    href={`https://wa.me/${footerWhatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    WhatsApp Chat
                  </a>
                </li>
              )}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-100 mb-4">Subscribe to our newsletter to get the latest news and updates.</p>

            {message && (
              <div
                className={`mb-4 p-2 rounded-md text-sm font-medium ${
                  message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white bg-opacity-10 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-300 flex-grow"
                required
              />
              <button
                type="submit"
                disabled={isPending}
                className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-r-md transition-colors disabled:opacity-50"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        <hr className="border-white border-opacity-20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p variants={itemVariants} className="text-sm text-gray-100 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Excellent Miracle Kiddies College. All rights reserved.
          </motion.p>
          <motion.div variants={itemVariants} className="flex space-x-4">
          </motion.div>
        </div>
        
        {/* Subtle WhatsApp Contact */}
        {footerWhatsappNumber && (
          <motion.div 
            variants={itemVariants}
            className="flex justify-center mt-6"
          >
            <a 
              href={`https://wa.me/${WhatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-100 hover:text-emerald-300 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-4 h-4 mr-1"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="hover:underline">Designed by C.Bright</span>
            </a>
          </motion.div>
        )}
      </div>
    </motion.footer>
  )
}