import type { Metadata } from "next"
import Hero from "@/components/hero"
import WeSection from "@/components/we-section"
import AgesSection from "@/components/ages-section"
import NewsSection from "@/components/news-section"
import Header from "@/components/header"
import Events from "@/components/events"
import AchievementsSection from "@/components/achievements-section"
import CTASection from "@/components/cta-section"
import ScrollToTop from "@/components/scroll-to-top"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://emkc.sch.ng"

export const metadata: Metadata = {
  title: "Excellent Miracle Kiddies College",
  description:
    "Discover Excellent Miracle Kiddies College in Ibadan, offering preparatory, nursery, primary, and secondary education with a balanced focus on academics, character, and student development.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Excellent Miracle Kiddies College | Private School in Ibadan",
    description:
      "Discover EMKC's learning programmes, school news, student achievements, and admissions information.",
    url: siteUrl,
    images: [
      {
        url: "/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "Excellent Miracle Kiddies College homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Excellent Miracle Kiddies College | Private School in Ibadan",
    description:
      "Explore the official website of Excellent Miracle Kiddies College in Ibadan.",
    images: ["/hero-1.webp"],
  },
}

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "Excellent Miracle Kiddies College",
    alternateName: "EMKC",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/hero-1.webp`,
    description:
      "Excellent Miracle Kiddies College is a private school in Ibadan offering preparatory, nursery, primary, and secondary education.",
    email: "info@emkc.sch.ng",
    telephone: "+2348033955391",
    address: {
      "@type": "PostalAddress",
      streetAddress: "19, Lane 1, Dalute Road, Odo Ona Elewe Road, Oluyole",
      addressLocality: "Ibadan",
      addressRegion: "Oyo",
      postalCode: "200261",
      addressCountry: "NG",
    },
    areaServed: {
      "@type": "City",
      name: "Ibadan",
    },
    sameAs: [
      "https://www.facebook.com/share/176SCnL3hL/?mibextid=wwXIfr",
      "https://x.com/excellentsch",
      "https://www.instagram.com/excellentmiracleschool?igsh=Mmh1ZjFrNTQ3aDN1",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Excellent Miracle Kiddies College",
    url: siteUrl,
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Header />
      <Hero />
      <WeSection />
      <AgesSection />
      <NewsSection />
      <Events />
      <AchievementsSection />
      <CTASection />
      <ScrollToTop />
    </main>
  )
}
