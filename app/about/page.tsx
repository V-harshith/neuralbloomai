"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Zap, Award } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to helping businesses transform through innovative digital solutions.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. We build lasting partnerships based on trust and results.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay ahead of the curve, leveraging the latest technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Award,
    title: "Quality Obsessed",
    description: "We never compromise on quality. Every project receives our full attention and expertise.",
  },
]

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & CEO",
    bio: "10+ years in digital transformation and AI solutions",
  },
  {
    name: "Sarah Chen",
    role: "Head of Design",
    bio: "Award-winning designer with a passion for user experience",
  },
  {
    name: "Marcus Johnson",
    role: "Lead Developer",
    bio: "Full-stack expert specializing in scalable architectures",
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    bio: "Data-driven strategist with proven track record",
  },
]

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-semibold text-primary">ABOUT US</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              We Build Digital Experiences That Matter
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              NeuralbloomAI is a design and development agency focused on creating exceptional digital experiences. 
              We combine creativity, technology, and strategy to help businesses thrive in the digital age.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">60+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years</div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              A diverse group of passionate professionals dedicated to your success
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl">👤</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
