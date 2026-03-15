import Hero from "@/components/hero"
import WeSection from "@/components/we-section"
import AgesSection from "@/components/ages-section"
import NewsSection from "@/components/news-section"
import Header from "@/components/header"
import Events from "@/components/events"
import AchievementsSection from "@/components/achievements-section"
import CTASection from "@/components/cta-section"
import ScrollToTop from "@/components/scroll-to-top"
import { SITE_NAME, SITE_URL, buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: SITE_NAME,
  description:
    "Discover Excellent Miracle Kiddies College in Ibadan, offering preparatory, nursery, primary, and secondary education with a balanced focus on academics, character, and student development.",
  path: "/",
  image: "/hero-1.webp",
  keywords: ["school admissions in Ibadan", "private school website"],
})

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: SITE_NAME,
    alternateName: "EMKC",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/hero-1.webp`,
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
    name: SITE_NAME,
    url: SITE_URL,
  }

  return (
    <main className="min-h-screen">
      <h1 className="sr-only">Excellent Miracle Kiddies College</h1>
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
