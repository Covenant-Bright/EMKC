import { buildMetadata } from "@/lib/seo"
import PortalPageClient from "./portal-page-client"

export const metadata = buildMetadata({
  title: "Student & Teacher Portal",
  description:
    "Access the Excellent Miracle Kiddies College student and teacher portal for learning resources, records, and school services.",
  path: "/portal",
  image: "/_MG_4304.webp",
  keywords: ["EMKC portal", "student portal", "teacher portal"],
})

export default function PortalPage() {
  return <PortalPageClient />
}
