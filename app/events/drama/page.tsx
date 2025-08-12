import Header from "@/components/header"
import ParticlesBackground from "@/components/particles-background"
import ContentSection from "@/components/content-section"

export default function DramaPage() {
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <ParticlesBackground particleColor="#0d3b49" />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="bg-gradient-to-r from-black/90 to-black/50 w-full h-full"></div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514306191717-452ec28c7814?q=80")' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Where Stories Come to <span className="text-red-500">Life</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience the magic of theater through our award-winning drama club performances.
            </p>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <ContentSection bgColor="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs font-semibold tracking-wider text-red-500 uppercase px-3 py-1 bg-red-500/10 rounded-full">
                Featured Productions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Latest Performances</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Video 1 */}
            <div className="bg-gray-700 rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:-translate-y-1">
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/8ElXTQdGLng?si=yVx2Q4go_LPdX0aF"
                  title="Drama Performance: Shakespeare in the Park"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Over My Dead Body</h3>
                    <p className="text-gray-400">A movie by the Living Miracle & Excellent Miracle students</p>
                  </div>
                  <span className="bg-red-500/10 text-red-400 text-xs font-semibold px-2 py-1 rounded-full">
                    Award Winner
                  </span>
                </div>
                <p className="text-gray-300 mb-4">
                  A thought-provoking story about dreams, failure, and the resilience to choose your own path. Watch till the end-you just might see yourself in Tade's journey.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Comedy", "Drama", "Classic", "Outdoor"].map((tag) => (
                    <span key={tag} className="bg-gray-600/50 text-gray-300 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-gray-700 rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:-translate-y-1">
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/xnbYqpRuGDY?si=0AsqFr0gHYFp_gJR"
                  title="Drama Performance: Voices of Tomorrow"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Fiwajomi</h3>
                    <p className="text-gray-400">A movie by the Living Miracle & Excellent Miracle students</p>
                  </div>
                  <span className="bg-blue-500/10 text-blue-400 text-xs font-semibold px-2 py-1 rounded-full">
                    Award Winner
                  </span>
                </div>
                <p className="text-gray-300 mb-4">
                 What happens when a small choice opens the door to big consequences? This is not just a film. It's a mirror with shadows.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Original", "Drama", "Contemporary", "Social Issues"].map((tag) => (
                    <span key={tag} className="bg-gray-600/50 text-gray-300 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </main>
  )
}
