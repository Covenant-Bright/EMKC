import { buildMetadata } from "@/lib/seo"
import ContactPageClient from "./contact-page-client"

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Excellent Miracle Kiddies College in Ibadan for admissions enquiries, school visits, support, and programme information.",
  path: "/contact",
  image: "/_DSC5411.webp",
  keywords: ["contact EMKC", "school contact in Ibadan", "admissions enquiry"],
})

export default function ContactPage() {
  return <ContactPageClient />
}
