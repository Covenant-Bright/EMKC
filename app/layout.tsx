import type React from "react"
import type { Metadata, Viewport } from "next"
import { Fredoka } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import { AnimationProvider } from "@/context/animation-context"
import PageTransition from "@/components/page-transition"
import ScrollRestoration from "@/components/scroll-restoration"
import { Suspense } from "react"
import GlobalLoader from "@/components/global-loader"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://emkc.sch.ng")

// Initialize the Fredoka font with the weights we need
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-fredoka",
})

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "Excellent Miracle Kiddies College",
  title: {
    default: "Excellent Miracle Kiddies College",
    template: "%s | Excellent Miracle Kiddies College",
  },
  description:
    "Excellent Miracle Kiddies College is a private school in Ibadan offering preparatory, nursery, primary, and secondary education in a structured, nurturing learning environment.",
  keywords: [
    "Excellent Miracle Kiddies College",
    "EMKC",
    "excellent miracle",
    "private school in Ibadan",
    "school in Oluyole Ibadan",
    "nursery school in Ibadan",
    "primary school in Ibadan",
    "secondary school in Ibadan",
    "preparatory school in Ibadan",
    "education in Ibadan",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Excellent Miracle Kiddies College", url: siteUrl }],
  creator: "Excellent Miracle Kiddies College",
  publisher: "Excellent Miracle Kiddies College",
  category: "education",
  classification: "School",
  referrer: "origin-when-cross-origin",
  manifest: "/favicon_io/site.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Excellent Miracle Kiddies College | Private School in Ibadan",
    description:
      "Explore EMKC's preparatory, nursery, primary, and secondary programmes designed to build academic excellence, confidence, and strong character.",
    url: siteUrl,
    siteName: "Excellent Miracle Kiddies College",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/hero-1.webp",
        width: 1200,
        height: 630,
        alt: "Excellent Miracle Kiddies College students and campus life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Excellent Miracle Kiddies College | Private School in Ibadan",
    description:
      "A private school in Ibadan offering preparatory, nursery, primary, and secondary education with a strong focus on excellence and character.",
    images: ["/hero-1.webp"],
  },
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      { rel: "manifest", url: "/favicon_io/site.webmanifest" },
      {
        url: "/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
}

// ✅ New export for viewport (separate from metadata)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e6a85",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-NG">
      <body className={`${fredoka.variable} font-fredoka`}>
        <AnimationProvider>
          <Suspense fallback={null}>
            <ScrollRestoration />
          </Suspense>

          {/* Global Loader Overlay ensures all visible assets are ready before reveal */}
          <GlobalLoader />

          <div className="relative min-h-screen">
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </AnimationProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
