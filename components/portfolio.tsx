"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with AI recommendations",
    gradient: "from-primary to-accent",
  },
  {
    title: "Marketing Automation",
    category: "Automation",
    description: "Intelligent email marketing system with personalization",
    gradient: "from-accent to-secondary",
  },
  {
    title: "Brand Redesign",
    category: "Design",
    description: "Complete visual identity and website redesign",
    gradient: "from-secondary to-primary",
  },
]

export default function Portfolio() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCards([0, 1, 2])
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">OUR PAST WORKS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore some of our most impactful work</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                visibleCards.includes(index) ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                <div className="mt-6 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
