import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  className?: string
  children?: React.ReactNode
  textColor?: string
  overlayOpacity?: string
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage,
  className,
  children,
  textColor = "text-white",
  overlayOpacity = "bg-black/50",
}: PageHeaderProps) {
  return (
    <div className={cn("relative w-full overflow-hidden flex items-center justify-center py-32 md:py-48", className)}>

      {backgroundImage && (
        <>
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={backgroundImage || "/placeholder.svg"}
              alt={title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className={`absolute inset-0 ${overlayOpacity}`}></div>
        </>
      )}

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <h1 className={`text-3xl md:text-5xl font-bold mb-4 ${textColor}`}>{title}</h1>
        {subtitle && <p className={`text-lg md:text-xl ${textColor} opacity-90 max-w-2xl mx-auto`}>{subtitle}</p>}
        {children}
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "80px" }}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-16 text-white"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"></path>
        </svg>
      </div>
    </div>
  )
}
