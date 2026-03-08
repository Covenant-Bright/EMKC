import { cn } from "@/lib/utils"

interface SectionDividerProps {
  position: "top" | "bottom"
  fillColor?: string
  className?: string
}

export default function SectionDivider({ position, fillColor = "white", className }: SectionDividerProps) {
  return (
    <div
      className={cn(
        "absolute left-0 w-full overflow-hidden",
        position === "top" ? "top-0 transform -translate-y-1" : "bottom-0 transform translate-y-1",
        className,
      )}
      style={{ height: "40px" }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`absolute ${position === "top" ? "bottom-0 rotate-180" : "top-0"} w-full h-16`}
        style={{ fill: fillColor }}
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"></path>
      </svg>
    </div>
  )
}
