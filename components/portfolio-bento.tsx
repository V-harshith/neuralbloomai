"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Maily Template",
    category: "SaaS Website",
    image: "/placeholder-project-1.jpg",
    size: "large",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Purpose Platform",
    category: "Brand Website",
    image: "/placeholder-project-2.jpg",
    size: "medium",
    gradient: "from-pink-500/20 to-orange-500/20",
  },
  {
    title: "Yasny App",
    category: "Mobile App",
    image: "/placeholder-project-3.jpg",
    size: "medium",
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/placeholder-project-4.jpg",
    size: "small",
    gradient: "from-yellow-500/20 to-red-500/20",
  },
  {
    title: "Marketing Dashboard",
    category: "UI/UX Design",
    image: "/placeholder-project-5.jpg",
    size: "small",
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
]

export default function PortfolioBento() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium Websites for SaaS & Startups
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every business needs a website, and it's never been easier to get one.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-2xl cursor-pointer ${
                project.size === "large"
                  ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                  : project.size === "medium"
                  ? "sm:col-span-1 lg:col-span-1 lg:row-span-2"
                  : "sm:col-span-1 lg:col-span-1 lg:row-span-1"
              }`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
              />

              {/* Placeholder Image Area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center">
                  <span className="text-6xl opacity-10">📱</span>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block px-2 md:px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-2 w-fit">
                  {project.category}
                </span>
                <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm md:text-base">
                  View Project
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
