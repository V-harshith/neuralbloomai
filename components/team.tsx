"use client"

import { useEffect, useRef, useState } from "react"

export default function Team() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
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
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm font-semibold text-secondary-foreground bg-accent">YOUR GO-TO CONSULTANTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Expert Team Ready to Transform Your Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team combines years of experience in design, development, and digital strategy. We're passionate about
              creating solutions that matter.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { title: "Strategic Thinking", desc: "We understand your business goals" },
                { title: "Creative Excellence", desc: "Award-winning design and development" },
                { title: "Proven Results", desc: "100+ successful projects delivered" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl h-full flex items-center justify-center border border-border">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                    👥
                  </div>
                  <p className="text-foreground font-semibold">Expert Team</p>
                  <p className="text-muted-foreground text-sm">50+ Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
