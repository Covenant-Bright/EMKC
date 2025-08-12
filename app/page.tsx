import Hero from "@/components/hero"
import WeSection from "@/components/we-section"
import AgesSection from "@/components/ages-section"
import NewsSection from "@/components/news-section"
import Header from "@/components/header"
import Events from "@/components/events"
import AchievementsSection from "@/components/achievements-section"
import CTASection from "@/components/cta-section"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
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
