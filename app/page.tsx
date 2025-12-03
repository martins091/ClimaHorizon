import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { FeaturedCards } from "@/components/featured-cards"
import { ImpactCounter } from "@/components/impact-counter"
import { FeaturedProject } from "@/components/featured-project"
import { NewsInsights } from "@/components/news-insights"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import TeamMembers from "@/components/team-members"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ScrollReveal delay={200}>
        <FeaturedCards />
      </ScrollReveal>
      <ScrollReveal>
        <ImpactCounter />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedProject />
      </ScrollReveal>
            <ScrollReveal>
        <TeamMembers />
      </ScrollReveal>
      <ScrollReveal>
        <NewsInsights />
      </ScrollReveal>
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
      <Footer />
    </main>
  )
}
