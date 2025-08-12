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

// Initialize the Fredoka font with the weights we need
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-fredoka",
})

export const metadata: Metadata = {
  title: "Excellent Miracle Kiddies College",
  description:
    "Where Fun Happens! Educating Your Children at Excellent Miracle Kiddies College",
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
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
      </body>
    </html>
  )
}
