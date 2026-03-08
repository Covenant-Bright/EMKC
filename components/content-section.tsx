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
<<<<<<< HEAD
    <section id={id} className={cn("deferred-render py-12 md:py-16 overflow-hidden", bgColor, className)}>
=======
    <section id={id} className={cn("py-12 md:py-16 overflow-hidden", bgColor, className)}>
>>>>>>> 6efb1e8ec8809213bf4ceaf8f20474d7acc6029e
      <div className={cn("mx-auto px-4 md:px-8", narrowWidth ? "max-w-4xl" : "max-w-6xl")}>{children}</div>
    </section>
  )
}
