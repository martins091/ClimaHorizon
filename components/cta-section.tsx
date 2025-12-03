import { Button } from "@/components/ui/button"
import { HandHeart, Building2 } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  const actions = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Join our community initiatives and make hands-on impact",
      buttonText: "Get Started",
      href: "/get-involved",
      color: "from-[#6ECFF6] to-[#003D73]",
    },
    {
      icon: Building2,
      title: "Partner",
      description: "Collaborate with us on climate-tech solutions",
      buttonText: "Connect With Us",
      href: "/contact",
      color: "from-[#6ECFF6] to-[#2AA948]",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-[#003D73]">
      {/* Climate Action Image Background */}
      <div className="absolute inset-0">
        <img
          src="/community-volunteers-working-together-climate-pro.jpg"
          alt="Join the Movement"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 glow-text text-balance">Join the Movement</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Every action counts — be part of the solution to build a sustainable future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {actions.map((action, index) => (
            <div key={index} className="relative group">
              {/* Card */}
              <div className="rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <action.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">{action.title}</h3>
                <p className="text-white/80 leading-relaxed mb-6">{action.description}</p>

                <Link href={action.href}>
                  <Button className="bg-white text-[#003D73] hover:bg-white/90 font-semibold w-full">
                    {action.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
