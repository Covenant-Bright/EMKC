import { permanentRedirect } from "next/navigation"
import { buildMetadata } from "@/lib/seo"

export const metadata = buildMetadata({
  title: "Teacher Portal Redirect",
  description: "Redirecting to the main EMKC portal.",
  path: "/portal/teacher",
  noIndex: true,
})

export default function TeacherPortalPage() {
  permanentRedirect("/portal")
}
