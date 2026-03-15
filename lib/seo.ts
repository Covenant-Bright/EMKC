import type { Metadata, MetadataRoute } from "next"

export const SITE_NAME = "Excellent Miracle Kiddies College"
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://emkc.sch.ng"
export const siteUrl = new URL(SITE_URL)

const defaultKeywords = [
  "Excellent Miracle Kiddies College",
  "EMKC",
  "private school in Ibadan",
  "school in Oluyole Ibadan",
  "nursery school in Ibadan",
  "primary school in Ibadan",
  "secondary school in Ibadan",
  "preparatory school in Ibadan",
  "education in Ibadan",
]

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"]

type BuildMetadataOptions = {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string[]
  noIndex?: boolean
  type?: "website" | "article"
}

type StaticRoute = {
  path: string
  priority: number
  changeFrequency: ChangeFrequency
}

export const staticRoutes: StaticRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/our-story", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/vision-mission", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/core-values", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/facilities", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/policies", priority: 0.6, changeFrequency: "monthly" },
  { path: "/academics", priority: 0.8, changeFrequency: "monthly" },
  { path: "/academics/preparatory", priority: 0.7, changeFrequency: "monthly" },
  { path: "/academics/nursery", priority: 0.7, changeFrequency: "monthly" },
  { path: "/academics/primary", priority: 0.7, changeFrequency: "monthly" },
  { path: "/academics/secondary", priority: 0.7, changeFrequency: "monthly" },
  { path: "/events", priority: 0.8, changeFrequency: "weekly" },
  { path: "/events/upcoming", priority: 0.8, changeFrequency: "weekly" },
  { path: "/events/color-day", priority: 0.6, changeFrequency: "monthly" },
  { path: "/events/cultural-day", priority: 0.6, changeFrequency: "monthly" },
  { path: "/events/career-day", priority: 0.6, changeFrequency: "monthly" },
  { path: "/events/special-events", priority: 0.6, changeFrequency: "monthly" },
  { path: "/events/drama", priority: 0.6, changeFrequency: "monthly" },
  { path: "/our-schools", priority: 0.8, changeFrequency: "monthly" },
  { path: "/enroll", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/portal", priority: 0.5, changeFrequency: "monthly" },
]

export function absoluteUrl(path: string) {
  return new URL(path === "/" ? "/" : path, siteUrl).toString()
}

function buildSocialTitle(title: string) {
  return title === SITE_NAME ? `${SITE_NAME} | Private School in Ibadan` : `${title} | ${SITE_NAME}`
}

export function buildMetadata({
  title,
  description,
  path,
  image = "/hero-1.webp",
  keywords = [],
  noIndex = false,
  type = "website",
}: BuildMetadataOptions): Metadata {
  const socialTitle = buildSocialTitle(title)

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : undefined,
    openGraph: {
      title: socialTitle,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      locale: "en_NG",
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  }
}
