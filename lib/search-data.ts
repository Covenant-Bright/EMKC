export type SearchResult = {
  id: string
  title: string
  description: string
  url: string
  category: string
  image?: string
  keywords?: string[]
}

// Comprehensive search data extracted from all website pages
export const searchData: SearchResult[] = [
  // About Section
  {
    id: "about-main",
    title: "About EMKC",
    description:
      "Learn about Excellent Miracle Kiddies College - where education meets imagination. Our nurturing environment helps children grow, learn, and thrive.",
    url: "/about",
    category: "About",
    image: "/_MG_1761.webp",
    keywords: ["about", "EMKC", "school", "education", "imagination", "nurturing", "children"],
  },
  {
    id: "our-story",
    title: "Our Story",
    description:
      "Discover the journey and history of EMKC - how we became a leading education provider with passion for early childhood education.",
    url: "/about/our-story",
    category: "About",
    image: "/_MG_4302.webp",
    keywords: ["story", "history", "journey", "early childhood", "education provider"],
  },
  {
    id: "vision-mission",
    title: "Vision & Mission",
    description:
      "Explore our vision for the future of education and our mission to provide exceptional learning experiences for every child.",
    url: "/about/vision-mission",
    category: "About",
    image: "/_MG_4300.webp",
    keywords: ["vision", "mission", "future", "education", "learning", "exceptional"],
  },
  {
    id: "core-values",
    title: "Core Values",
    description:
      "Discover the core values that guide everything we do at EMKC - integrity, excellence, compassion, and innovation.",
    url: "/about/core-values",
    category: "About",
    image: "/_MG_4049.webp",
    keywords: ["values", "integrity", "excellence", "compassion", "innovation", "principles"],
  },
  {
    id: "facilities",
    title: "Our Facilities",
    description:
      "Tour our modern, safe, and engaging facilities designed for optimal learning - classrooms, playgrounds, library, and more.",
    url: "/about/facilities",
    category: "About",
    image: "/_MG_4018.webp",
    keywords: ["facilities", "modern", "safe", "classrooms", "playground", "library", "branches"],
  },
  {
    id: "policies",
    title: "School Policies",
    description:
      "Review our comprehensive policies including uniforms, health & safety, conduct, anti-bullying, and community guidelines.",
    url: "/about/policies",
    category: "About",
    image: "/_DSC5428.webp",
    keywords: ["policies", "uniform", "health", "safety", "conduct", "anti-bullying", "guidelines"],
  },

  // Academic Programs
  {
    id: "academics-main",
    title: "Academic Programs",
    description:
      "Explore our holistic educational approach that nurtures the whole child through innovative curriculum and research-based methods.",
    url: "/academics",
    category: "Academics",
    image: "/_MG_4035.webp",
    keywords: ["academics", "curriculum", "holistic", "research-based", "innovative", "education"],
  },
  {
    id: "preparatory",
    title: "Preparatory Program (Ages 2-3)",
    description:
      "Our preparatory program introduces young children to structured learning in a playful, nurturing environment.",
    url: "/academics/preparatory",
    category: "Programs",
    image: "/_MG_3966.webp",
    keywords: ["preparatory", "ages 2-3", "young children", "structured learning", "playful", "toddlers"],
  },
  {
    id: "nursery",
    title: "Nursery Program (Ages 4-5)",
    description:
      "The nursery program focuses on developing social skills and early academic foundations through engaging activities.",
    url: "/academics/nursery",
    category: "Programs",
    image: "/_MG_4328.webp",
    keywords: ["nursery", "ages 4-5", "social skills", "academic foundations", "preschool"],
  },
  {
    id: "primary",
    title: "Primary Education (Ages 6-11)",
    description:
      "Our primary education builds strong academic skills while encouraging creativity, critical thinking, and personal growth.",
    url: "/academics/primary",
    category: "Programs",
    image: "/_MG_4007.webp",
    keywords: ["primary", "ages 6-11", "academic skills", "creativity", "critical thinking", "elementary"],
  },
  {
    id: "secondary",
    title: "Secondary Education (Ages 12-17)",
    description:
      "The secondary program prepares students for higher education with comprehensive subject coverage and advanced learning.",
    url: "/academics/secondary",
    category: "Programs",
    image: "/_MG_4921.webp",
    keywords: ["secondary", "ages 12-17", "higher education", "comprehensive", "advanced", "high school"],
  },

  // Events & Activities
  {
    id: "events-main",
    title: "Events & News",
    description:
      "Join us for exciting activities throughout the year that enrich our students' educational experience and build community.",
    url: "/events",
    category: "Events",
    image: "/_DSC5247.webp",
    keywords: ["events", "news", "activities", "community", "educational experience"],
  },
  {
    id: "cultural-day",
    title: "Cultural Day",
    description:
      "Celebrate diversity with performances, food, and activities from around the world. A vibrant multicultural celebration.",
    url: "/events/cultural-day",
    category: "Events",
    image: "/cultural/_MG_0406.webp",
    keywords: ["cultural day", "diversity", "multicultural", "performances", "world cultures", "celebration"],
  },
  {
    id: "color-day",
    title: "Color Day",
    description:
      "A vibrant celebration of colors with art, games, and creative activities that inspire imagination and artistic expression.",
    url: "/events/color-day",
    category: "Events",
    image: "/color/_MG_0236.webp",
    keywords: ["color day", "art", "creative", "imagination", "artistic", "vibrant", "games"],
  },
  {
    id: "career-day",
    title: "Career Day",
    description:
      "Children learn about different professions through interactive presentations and hands-on activities with community professionals.",
    url: "/events/career-day",
    category: "Events",
    image: "/_MG_4049.webp",
    keywords: ["career day", "professions", "interactive", "community", "professionals", "careers"],
  },
  {
    id: "special-events",
    title: "Special Events",
    description:
      "Throughout the year, we host various special events including graduations, award ceremonies, and seasonal celebrations.",
    url: "/events/special-events",
    category: "Events",
    image: "/IMG_3826.webp",
    keywords: ["special events", "graduations", "awards", "ceremonies", "seasonal", "celebrations"],
  },
  {
    id: "drama-events",
    title: "Drama & Theater",
    description:
      "Our drama program showcases student talent through theatrical performances, building confidence and creative expression.",
    url: "/events/drama",
    category: "Events",
    keywords: ["drama", "theater", "performances", "talent", "confidence", "creative expression"],
  },
  {
    id: "upcoming-events",
    title: "Upcoming Events",
    description:
      "Stay updated with our calendar of upcoming events, workshops, and important school activities throughout the year.",
    url: "/events/upcoming",
    category: "Events",
    keywords: ["upcoming", "calendar", "workshops", "activities", "schedule"],
  },

  // Contact & Enrollment
  {
    id: "contact",
    title: "Contact Us",
    description:
      "Get in touch with our team. Find our location, phone numbers, email addresses, and office hours for all inquiries.",
    url: "/contact",
    category: "Contact",
    image: "/_DSC5411.webp",
    keywords: ["contact", "location", "phone", "email", "office hours", "inquiries", "address"],
  },
  {
    id: "enrollment",
    title: "Enrollment & Admissions",
    description:
      "Learn about our enrollment process, admission requirements, application forms, and how to join the EMKC family.",
    url: "/enroll",
    category: "Admissions",
    keywords: ["enrollment", "admissions", "application", "requirements", "join", "registration"],
  },

  // News Items
  {
    id: "school-resumes",
    title: "School Resumes - September 15th, 2025",
    description:
      "We look forward to welcoming all students back to school. New academic year brings exciting programs and learning experiences.",
    url: "/events",
    category: "News",
    image: "/_MG_4304.webp",
    keywords: ["school resumes", "september", "academic year", "programs", "students", "welcome back"],
  },
  {
    id: "summer-coaching",
    title: "Summer Coaching Program - August 11th, 2025",
    description:
      "Intensive summer coaching for Primary and Secondary students with core subjects, interactive learning, and skill-building.",
    url: "/events",
    category: "News",
    image: "/_MG_4320.webp",
    keywords: ["summer coaching", "august", "intensive", "core subjects", "interactive learning", "skills"],
  },
  {
    id: "digital-portal",
    title: "New Digital School Portal Launch",
    description:
      "Exciting launch of our new school portal for secure school fees payment and enhanced parent-school communication.",
    url: "/events",
    category: "News",
    keywords: ["digital portal", "school fees", "payment", "parent communication", "technology", "online"],
  },

  // Additional Resources
  {
    id: "parent-resources",
    title: "Parent Resources",
    description:
      "Helpful resources, guides, and information for parents to support their child's educational journey at EMKC.",
    url: "/parents/resources",
    category: "For Parents",
    keywords: ["parent resources", "guides", "support", "educational journey", "helpful information"],
  },
  {
    id: "school-calendar",
    title: "School Calendar",
    description: "Important dates, holidays, events, and academic milestones for the current school year.",
    url: "/events/calendar",
    category: "Events",
    keywords: ["calendar", "important dates", "holidays", "academic", "milestones", "schedule"],
  },
{
  id: "transportation",
  title: "Transportation Services",
  description:
    "Transportation services are currently not available. However, the school is actively considering providing safe and reliable bus services in the near future.",
  url: "/contact",
  category: "Services",
  keywords: ["transportation", "school bus", "safe", "reliable", "future", "planned service"],
}
,
  {
    id: "extracurricular",
    title: "Extracurricular Activities",
    description: "Sports, arts, music, academic clubs, and various activities that complement our academic program.",
    url: "/academics",
    category: "Activities",
    keywords: ["extracurricular", "sports", "arts", "music", "clubs", "activities", "complement"],
  },
]

// Search function with fuzzy matching and relevance scoring
export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) return []

  const searchTerms = query
    .toLowerCase()
    .split(" ")
    .filter((term) => term.length > 0)

  const results = searchData.map((item) => {
    let score = 0
    const searchableText = [item.title, item.description, item.category, ...(item.keywords || [])]
      .join(" ")
      .toLowerCase()

    // Exact title match gets highest score
    if (item.title.toLowerCase().includes(query.toLowerCase())) {
      score += 100
    }

    // Category match
    if (item.category.toLowerCase().includes(query.toLowerCase())) {
      score += 50
    }

    // Search term matching
    searchTerms.forEach((term) => {
      if (searchableText.includes(term)) {
        score += 10
      }

      // Partial matches
      if (searchableText.includes(term.substring(0, Math.max(3, term.length - 1)))) {
        score += 5
      }
    })

    return { ...item, score }
  })

  return results
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20) // Limit to top 20 results
}

// Group results by category
export function groupResultsByCategory(results: SearchResult[]) {
  const grouped: Record<string, SearchResult[]> = {}

  results.forEach((result) => {
    if (!grouped[result.category]) {
      grouped[result.category] = []
    }
    grouped[result.category].push(result)
  })

  return grouped
}
