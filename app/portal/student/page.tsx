import { permanentRedirect } from "next/navigation"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Student Portal Redirect",
  description: "Redirecting to the main EMKC portal.",
  path: "/portal/student",
  noIndex: true,
})

export default function StudentPortalPage() {
  permanentRedirect("/portal")
}
