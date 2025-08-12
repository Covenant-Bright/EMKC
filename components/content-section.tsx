import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ContentSectionProps {
  children: ReactNode
  className?: string
  bgColor?: string
  narrowWidth?: boolean
  id?: string
}

export default function ContentSection({
  children,
  className,
  bgColor = "bg-white",
  narrowWidth = false,
  id,
}: ContentSectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-16 overflow-hidden", bgColor, className)}>
      <div className={cn("mx-auto px-4 md:px-8", narrowWidth ? "max-w-4xl" : "max-w-6xl")}>{children}</div>
    </section>
  )
}
