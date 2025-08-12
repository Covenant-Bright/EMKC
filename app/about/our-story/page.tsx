import Header from "@/components/header";
import PageHeader from "@/components/page-header";
import ContentSection from "@/components/content-section";
import ParticlesBackground from "@/components/particles-background";
import Image from "next/image";
import SectionDivider from "@/components/section-divider";

export default function OurStoryPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      <Header />

      <PageHeader 
        title="Our Story" 
        subtitle="The Journey of EMKC" 
        backgroundImage="/_MG_4302.webp" 
      />

      <ContentSection bgColor="bg-white" narrowWidth>
        <div className="max-w-4xl mx-auto px-4">
          {/* Vision Statement */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-pink-500 to-pink-400 text-white px-6 py-1 rounded-full mb-6">
              Our Vision
            </div>
            <p className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed max-w-3xl mx-auto">
              EMKC was founded with a simple vision: to create a nurturing environment where children 
              can grow <span className="font-medium">academically</span>, <span className="font-medium">spiritually</span>, 
              and <span className="font-medium">socially</span>
            </p>
          </div>

          {/* Founders Image */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-xl transform transition-all hover:shadow-2xl">
            <Image
              src="/_MG_2120.webp"
              alt="EMKC Founders"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-sm font-light italic">Proprietress of EMKC</p>
            </div>
          </div>

          <div className="space-y-16">
            {/* Beginnings Section */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-[#0d3b49] mb-4 pb-2 border-b-2 border-pink-500 inline-block">
                  Our Beginnings
                </h2>
                <div className="bg-pink-500 w-12 h-1 mb-6"></div>
              </div>
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Established in 2002, EMKC started with a clear vision to provide a balanced education that nurtures 
                  the academic, spiritual, and social growth of every child. From humble beginnings, the school has 
                  grown steadily, building a community rooted in values and excellence.
                </p>
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <p className="text-gray-700">
                    Our commitment remains to create a safe and inspiring environment where students can thrive, 
                    discover their potential, and prepare confidently for the future.
                  </p>
                </div>
              </div>
            </section>

            {/* Growth Section */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-[#0d3b49] mb-4 pb-2 border-b-2 border-pink-500 inline-block">
                  Growing Together
                </h2>
                <div className="bg-pink-500 w-12 h-1 mb-6"></div>
              </div>
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  At EMKC, growth is a shared journey between students, teachers, and families. We believe that 
                  by working closely together, we create a supportive community where every child feels valued 
                  and encouraged.
                </p>
                
                {/* Image Grid */}
                <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/_DSC5375.webp"
                      alt="EMKC Campus Growth"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transform transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <p className="text-white font-medium">Expanding Our Campus</p>
                    </div>
                  </div>
                  <div className="group relative rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/_DSC5391.webp"
                      alt="EMKC Community Event"
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transform transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <p className="text-white font-medium">Community Events</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through collaboration, respect, and mutual support, we foster an environment that nurtures 
                  curiosity and confidence, helping our students develop the skills and character needed to 
                  succeed both inside and outside the classroom.
                </p>
              </div>
            </section>

            {/* Philosophy Section */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-[#0d3b49] mb-4 pb-2 border-b-2 border-pink-500 inline-block">
                  Our Philosophy Takes Shape
                </h2>
                <div className="bg-pink-500 w-12 h-1 mb-6"></div>
              </div>
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  EMKC's philosophy is built on the belief that education should develop the whole child—mind, 
                  heart, and character. We emphasize academic excellence alongside spiritual growth and social 
                  responsibility.
                </p>
                <div className="bg-[#0d3b49] p-8 rounded-2xl text-white mb-6">
                  <h3 className="text-xl font-bold mb-3">Holistic Approach</h3>
                  <p>
                    By fostering a safe, inclusive, and nurturing environment, we encourage students to become 
                    curious learners and compassionate individuals. This holistic approach guides all we do, 
                    shaping a foundation for lifelong success and meaningful contribution to society.
                  </p>
                </div>
              </div>
            </section>

            {/* Present Day */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-[#0d3b49] mb-4 pb-2 border-b-2 border-pink-500 inline-block">
                  Where We Are Today
                </h2>
                <div className="bg-pink-500 w-12 h-1 mb-6"></div>
              </div>
              <div className="lg:col-span-2">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Today, EMKC operates multiple branches serving children from infancy through elementary school. 
                  Our alumni consistently demonstrate not just academic excellence, but the creativity, resilience, 
                  and social awareness that we believe are essential for success in the modern world.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Though we've grown considerably since our founding, our core mission remains the same: to create 
                  a place where children are encouraged to explore, question, create, and connect—a place where 
                  they can truly thrive.
                </p>
              </div>
            </section>

            {/* Quote Section */}
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 p-8 md:p-12 rounded-2xl border-l-4 border-pink-500 mt-8">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 italic mb-6">
                "Our story is still being written, with each child who passes through our doors adding a new chapter to the EMKC journey."
              </blockquote>
              <cite className="block text-lg font-medium text-gray-700 not-italic">
                — Oluwakemi Ojo, EMKC Founder
              </cite>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-b from-white to-orange-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-pink-500 mr-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3b49]">Join Our Story</h2>
            <div className="w-12 h-1 bg-pink-500 ml-4"></div>
          </div>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We invite you to become part of the EMKC family and help us write the next chapters of our journey together.
          </p>
          
          <a
            href="/enroll"
            className="inline-flex items-center justify-center py-4 px-10 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all hover:scale-[1.03] group"
          >
            Enroll Today
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>
    </main>
  );
}