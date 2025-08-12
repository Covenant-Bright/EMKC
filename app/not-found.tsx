"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft } from "lucide-react"
import { Suspense } from "react"
import Header from "@/components/header" // Import your header component

// Fallback component for when the main content is loading
function NotFoundFallback() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center shadow-xl">
          <CardContent className="p-8">
            <div className="text-6xl font-bold text-pink-500 mb-4">404</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h1>
            <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
            <div className="space-y-3">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </a>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Main NotFound content component
function NotFoundContent() {
  const router = useRouter()

  const handleGoHome = () => {
    try {
      router.push("/")
    } catch (error) {
      console.warn("Router navigation failed, using fallback:", error)
      window.location.href = "/"
    }
  }

  const handleGoBack = () => {
    try {
      router.back()
    } catch (error) {
      console.warn("Router back failed, using fallback:", error)
      window.history.back()
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center shadow-xl">
          <CardContent className="p-8">
            <div className="text-6xl font-bold text-pink-500 mb-4">404</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h1>
            <p className="text-gray-600 mb-6">The page you're looking for doesn't exist or has been moved.</p>
            <div className="space-y-3">
              <Button onClick={handleGoHome} className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
              <Button onClick={handleGoBack} variant="outline" className="w-full bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Main NotFound component with Suspense boundary
export default function NotFound() {
  return (
    <Suspense fallback={<NotFoundFallback />}>
      <NotFoundContent />
    </Suspense>
  )
}