import React from "react";
import Header from "@/components/header";
import PageHeader from "@/components/page-header";
import ContentSection from "@/components/content-section";
import ParticlesBackground from "@/components/particles-background";
import Image from "next/image";
import SectionDivider from "@/components/section-divider";
import Link from "next/link";
import { Shield, Clock, FileText, MessageCircle, PieChart, Award, Users } from "lucide-react";

const PolicyCard = ({
  icon,
  title,
  description,
  color,
}: { icon: React.ReactNode; title: string; description: string; color: string }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden">
      <div className={`p-6 ${color} bg-opacity-20`}>
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-full ${color} text-white mr-3`}>{icon}</div>
          <h3 className="text-xl font-semibold text-[#0d3b49]">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const PolicyDetail = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <h4 className="text-lg font-semibold text-[#0d3b49] mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Uniform data with corresponding days
const uniformDays = [
  { day: "Monday", image: "/uniforms/_MG_3983.webp" },
  { day: "Tuesday", image: "/uniforms/_MG_4288.webp" },
  { day: "Wednesday", image: "/uniforms/_MG_4292.webp" },
  { day: "Thursday", image: "/uniforms/_MG_4295.webp" },
  { day: "Friday", image: "/uniforms/_MG_4298.webp" }
];

export default function PoliciesPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Header />

      <PageHeader
        title="School Policies"
        subtitle="Guidelines that ensure a safe, supportive learning environment"
        backgroundImage="/_DSC5428.webp"
      />

      <ContentSection bgColor="bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">School Uniform</h2>
          <p className="text-gray-600 mb-8">
            Our school uniform reflects pride, discipline, and unity. Designed for comfort and neatness, 
            it fosters a sense of belonging while promoting equality among students,
            ensuring every learner represents EMKC with dignity both inside and outside the classroom.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {uniformDays.map((uniform, index) => (
              <div key={index} className="aspect-[2/3] rounded-lg overflow-hidden relative group">
                {/* Uniform Day Tag */}
                <div className="absolute top-0 right-0 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-2 font-semibold text-sm tracking-wide rounded-bl-lg shadow-lg transform group-hover:scale-105 transition-transform">
                    {uniform.day}
                  </div>
                  <div className="absolute -bottom-[6px] right-0 w-0 h-0 border-t-[6px] border-t-indigo-700 border-l-[6px] border-l-transparent"></div>
                </div>
                
                {/* Image */}
                <Image
                  src={uniform.image}
                  alt={`${uniform.day} Uniform`}
                  width={300}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Uniform {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* ... rest of the code remains unchanged ... */}
      <section className="relative py-16 bg-gradient-to-b from-white to-purple-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-[#0d3b49] mb-12">Key Policy Areas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PolicyCard 
              icon={<Shield className="h-8 w-8" />}
              title="Health & Safety"
              description="Protocols that protect children's physical well-being, including illness policies, allergy management, emergency procedures, and campus security measures."
              color="bg-purple-600"
            />
            <PolicyCard 
              icon={<Clock className="h-8 w-8" />}
              title="Attendance & Schedules"
              description="Guidelines for school hours, arrival and dismissal procedures, absence reporting, and extended day programs."
              color="bg-indigo-600"
            />
            <PolicyCard 
              icon={<Users className="h-8 w-8" />}
              title="Community Conduct"
              description="Expectations for behavior that fosters respect, inclusion, and positive relationships among students, staff, and families."
              color="bg-blue-600"
            />
            <PolicyCard 
              icon={<Award className="h-8 w-8" />}
              title="Academic Expectations"
              description="Information about our curriculum, homework philosophy, assessment practices, and educational support services."
              color="bg-cyan-600"
            />
            <PolicyCard 
              icon={<MessageCircle className="h-8 w-8" />}
              title="Communication"
              description="Procedures for parent-teacher communication, conferences, progress reports, and addressing questions or concerns."
              color="bg-teal-600"
            />
            <PolicyCard 
              icon={<PieChart className="h-8 w-8" />}
              title="Tuition & Enrollment"
              description="Information about admissions procedures, tuition payment options, financial aid, and withdrawal policies."
              color="bg-purple-600"
            />
          </div>
        </div>

        <SectionDivider position="bottom" fillColor="white" className="z-20" />
      </section>

      <ContentSection bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#0d3b49] mb-8">Health & Safety Policies</h2>
            
            <div className="space-y-6">
              <PolicyDetail 
                title="Illness Policy" 
                description="Children must be fever-free without medication for 24 hours before returning to school. Please report communicable diseases to the school office promptly."
              />
              <PolicyDetail 
                title="Emergency Procedures" 
                description="We conduct regular safety drills and maintain a comprehensive emergency response plan. Emergency contact information must be kept current."
              />
              <PolicyDetail 
                title="Food Allergies" 
                description="We prioritize student health by carefully managing food allergies. Parents are encouraged to share allergy details to ensure every child’s well-being."
              />
              <PolicyDetail 
                title="Campus Security" 
                description="All visitors must check in at the office and wear identification badges. Exterior doors remain locked during school hours with monitored entry."
              />
            </div>

          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0d3b49] mb-8">Community Conduct</h2>
            
            <div className="bg-purple-50 rounded-3xl p-8 relative mb-6">
              <h3 className="text-xl font-semibold text-[#0d3b49] mb-4">Our Approach to Behavior</h3>
              <p className="text-gray-600 mb-6">
                At EMKC, we take a developmental approach to behavior and discipline. We believe that children 
                learn appropriate behavior through guidance, modeling, and clear expectations rather than punishment. 
                Our approach includes:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-purple-100 text-purple-600 mr-2 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  </div>
                  <p className="text-gray-700">Positive reinforcement of appropriate behavior</p>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-purple-100 text-purple-600 mr-2 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  </div>
                  <p className="text-gray-700">Redirection and problem-solving strategies</p>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-purple-100 text-purple-600 mr-2 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  </div>
                  <p className="text-gray-700">Natural and logical consequences</p>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-purple-100 text-purple-600 mr-2 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  </div>
                  <p className="text-gray-700">Teaching conflict resolution skills</p>
                </li>
                <li className="flex items-start">
                  <div className="p-1 rounded-full bg-purple-100 text-purple-600 mr-2 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  </div>
                  <p className="text-gray-700">Partnership with parents to support consistent approaches</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0d3b49] mb-4">Anti-Bullying Policy</h3>
                <p className="text-gray-600 mb-4">
                  EMKC is committed to providing a safe, positive learning environment. Bullying in any form is 
                  not tolerated. Our comprehensive anti-bullying policy includes:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-purple-100 text-purple-600 mr-2 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    </div>
                    <p className="text-gray-700 text-sm">Clear definition of bullying behaviors</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-purple-100 text-purple-600 mr-2 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    </div>
                    <p className="text-gray-700 text-sm">Prevention education for all students</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-purple-100 text-purple-600 mr-2 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    </div>
                    <p className="text-gray-700 text-sm">Procedures for reporting and investigating incidents</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-purple-100 text-purple-600 mr-2 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    </div>
                    <p className="text-gray-700 text-sm">Support for affected students</p>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-purple-100 text-purple-600 mr-2 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    </div>
                    <p className="text-gray-700 text-sm">Consequences and learning opportunities for students who bully</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <section className="relative py-16 bg-gradient-to-b from-white to-purple-50">
        <SectionDivider position="top" fillColor="white" />

        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="p-8 lg:col-span-2">
                <h2 className="text-3xl font-bold text-[#0d3b49] mb-6">Contact Us</h2>
                <p>If you have any questions or concerns about our policies, please don't hesitate to contact us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}