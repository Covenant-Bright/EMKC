import { buildMetadata } from "@/lib/seo"
import EnrollPageClient from "./enroll-page-client"

export const metadata = buildMetadata({
  title: "Enroll",
  description:
    "Start your child's admission journey with Excellent Miracle Kiddies College and learn how to complete the enrollment process.",
  path: "/enroll",
  image: "/_DSC5455.webp",
  keywords: ["school enrollment", "EMKC admissions", "apply to private school in Ibadan"],
})

export default function EnrollPage() {
  return <EnrollPageClient />
}
