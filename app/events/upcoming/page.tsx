import { buildMetadata } from "@/lib/seo"
import UpcomingEventsPageClient from "./upcoming-events-page-client"

export const metadata = buildMetadata({
  title: "Upcoming Events",
  description:
    "Stay informed about upcoming Excellent Miracle Kiddies College events, annual highlights, and school community activities.",
  path: "/events/upcoming",
  image: "/upcoming-events.webp",
  keywords: ["school events in Ibadan", "upcoming school events", "EMKC calendar"],
})

export default function UpcomingEventsPage() {
  return <UpcomingEventsPageClient />
}
