import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, ArrowLeft, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const articles: Record<
  string,
  {
    category: string
    title: string
    content: string[]
    date: string
    author: string
    image: string
  }
> = {
  "climate-risk-assessment-tool": {
    category: "Research",
    title: "New Climate Risk Assessment Tool Launched for Coastal Communities",
    content: [
      "ClimaHorizon Initiative is proud to announce the launch of our revolutionary AI-powered Climate Risk Assessment platform, specifically designed for coastal communities facing the escalating threats of climate change.",
      "The platform integrates satellite imagery, real-time IoT sensor data, and advanced machine learning algorithms to provide communities with actionable vulnerability mapping. Local governments and community organizations can now access predictive analytics that forecast flood risks, coastal erosion patterns, and extreme weather events with unprecedented accuracy.",
      "Key features of the platform include real-time monitoring dashboards, early warning systems for extreme weather events, infrastructure vulnerability assessments, and community-specific adaptation strategy recommendations.",
      "This tool represents a significant step forward in democratizing climate intelligence, ensuring that even resource-limited communities have access to the same quality of environmental data previously available only to well-funded research institutions.",
    ],
    date: "March 15, 2025",
    author: "Dr. Sarah Chen",
    image: "/coastal-community-with-digital-overlay-showing-cli.jpg",
  },
  "youth-climate-bootcamp": {
    category: "Innovation",
    title: "Youth Climate Bootcamp Graduates 500 Young Leaders",
    content: [
      "The ClimaHorizon Youth Climate Bootcamp has successfully graduated its largest cohort yet, with 500 young climate innovators completing the intensive 12-week program.",
      "Participants from 35 countries came together to learn cutting-edge skills in climate data analysis, environmental technology development, community organizing, and policy advocacy. The bootcamp combined hands-on technical training with mentorship from leading climate scientists and entrepreneurs.",
      "At the annual summit, graduates showcased groundbreaking solutions ranging from low-cost air quality monitors to AI-powered crop management systems for small-scale farmers. Several projects have already attracted funding and partnerships for implementation.",
      "This program continues our commitment to building the next generation of environmental leaders who will drive climate action for decades to come.",
    ],
    date: "March 10, 2025",
    author: "Marcus Johnson",
    image: "/young-people-presenting-at-technology-conference.jpg",
  },
  "reforestation-milestone": {
    category: "Impact",
    title: "Reforestation Initiative Plants 100,000th Tree in Partnership with Local Communities",
    content: [
      "ClimaHorizon's community-driven reforestation initiative has reached a major milestone: the planting of our 100,000th tree across restoration sites in East Africa, Southeast Asia, and South America.",
      "What makes this achievement special is our community-centered approach. Rather than top-down reforestation, we partner with local communities who select native species, manage nurseries, and steward the growing forests. This model ensures higher survival rates and creates sustainable livelihoods.",
      "The restored forests are already showing measurable impact: carbon sequestration monitoring shows 45,000 tons of CO2 captured, while local water tables have risen and biodiversity has increased significantly in restored areas.",
      "Our next goal is even more ambitious: 1 million trees by 2030, with expanded programs that integrate agroforestry to provide food security alongside environmental restoration.",
    ],
    date: "March 5, 2025",
    author: "Amara Okonkwo",
    image: "/tree-planting-community-volunteers-in-forest.jpg",
  },
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#003D73] mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link href="/">
              <Button className="bg-[#003D73] hover:bg-[#003D73]/90 text-white">Return Home</Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#003D73] via-[#003D73] to-[#001a33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/">
                <Button className="bg-[#003D73] hover:bg-[#003D73]/90 text-white">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
