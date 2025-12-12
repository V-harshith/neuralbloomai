"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Zap, Mail, TrendingUp, Palette, Cog } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Beautiful, responsive designs that captivate and convert. We create digital experiences that reflect your brand.",
    color: "from-primary to-accent",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Robust, scalable web applications built with cutting-edge technology. Performance and security are our priority.",
    color: "from-accent to-secondary",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Strategic email campaigns that engage your audience and drive conversions. Personalized at scale.",
    color: "from-secondary to-primary",
  },
  {
    icon: TrendingUp,
    title: "Marketing Services",
    description: "Data-driven marketing strategies that grow your business. From SEO to social media, we cover it all.",
    color: "from-primary to-secondary",
  },
  {
    icon: Cog,
    title: "Automation Services",
    description:
      "Streamline your workflows with intelligent automation. Save time and reduce errors with smart solutions.",
    color: "from-accent to-primary",
  },
  {
    icon: Zap,
    title: "AI Integration",
    description:
      "Harness the power of AI to transform your business. From chatbots to predictive analytics, we deliver results.",
    color: "from-secondary to-accent",
  },
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = Array.from({ length: services.length }, (_, i) => i)
            setVisibleCards(cards)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How Do We Help?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group relative p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${
                  visibleCards.includes(index) ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>

                  <div className="mt-4 md:mt-6 flex items-center text-primary font-semibold text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more →
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
