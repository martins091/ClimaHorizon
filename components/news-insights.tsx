import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"

export function NewsInsights() {
  const articles = [
    {
      category: "Research",
      title: "New Climate Risk Assessment Tool Launched for Coastal Communities",
      excerpt: "Innovative AI-powered platform provides real-time vulnerability mapping and adaptation strategies...",
      date: "March 15, 2025",
      image: "/coastal-community-with-digital-overlay-showing-cli.jpg",
      slug: "climate-risk-assessment-tool",
    },
    {
      category: "Innovation",
      title: "Youth Climate Bootcamp Graduates 500 Young Leaders",
      excerpt: "The latest cohort of climate innovators showcase groundbreaking solutions at the annual summit...",
      date: "March 10, 2025",
      image: "/young-people-presenting-at-technology-conference.jpg",
      slug: "youth-climate-bootcamp",
    },
    {
      category: "Impact",
      title: "Reforestation Initiative Plants 100,000th Tree in Partnership with Local Communities",
      excerpt: "Milestone achievement demonstrates the power of community-driven environmental restoration...",
      date: "March 5, 2025",
      image: "/tree-planting-community-volunteers-in-forest.jpg",
      slug: "reforestation-milestone",
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#003D73] mb-4 text-balance">Latest Insights</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stay updated with climate research, innovations, and success stories
              </p>
            </div>
            <Link href="/research">
              <Button
                variant="outline"
                className="border-[#003D73] text-[#003D73] hover:bg-[#003D73] hover:text-white font-semibold bg-transparent"
              >
                View All Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <article className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#6ECFF6] hover:shadow-xl transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#003D73] rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#003D73] mb-3 group-hover:text-[#2AA948] transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`}>
                    <Button
                      variant="ghost"
                      className="text-[#2AA948] hover:text-[#2AA948]/80 p-0 h-auto font-semibold group/btn"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
