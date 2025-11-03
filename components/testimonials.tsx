"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content: "InnerBloomAI transformed our digital presence. Their team delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, InnovateLabs",
    content: "The automation solutions saved us 40 hours per week. Incredible ROI.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Founder, FutureScale",
    content: "Best agency partnership we've had. Highly recommend to any growing business.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="text-sm font-semibold text-foreground bg-accent">STORIES OF OUR CLIENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
        </div>

        <div className={`relative max-w-3xl mx-auto ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          {/* Testimonial Card */}
          <div className="bg-card rounded-xl border border-border p-8 md:p-12 shadow-lg">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-xl text-foreground mb-8 leading-relaxed">"{testimonials[currentIndex].content}"</p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
              </div>

              <div className="flex gap-2">
                <button onClick={prev} className="p-2 rounded-lg border border-border hover:bg-muted transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={next} className="p-2 rounded-lg border border-border hover:bg-muted transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
