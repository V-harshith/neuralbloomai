"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CTA() {
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
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className={`relative rounded-2xl overflow-hidden ${isVisible ? "animate-scaleIn" : "opacity-0"}`}>
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-90"></div>

          {/* Content */}
          <div className="relative p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-primary">Ready to Transform Your Business?</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto text-foreground">
              Let's discuss how NeuralbloomAI can help you achieve your digital goals. 
              Schedule a consultation with our team today.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 md:px-8 py-2.5 md:py-3 rounded-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors font-semibold flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Schedule Consultation
                <ArrowRight size={18} className="md:w-5 md:h-5" />
              </Link>
              <Link
                href="/about"
                className="px-6 md:px-8 py-2.5 md:py-3 rounded-lg border-2 hover:bg-primary-foreground/10 transition-colors font-semibold text-card-foreground border-popover-foreground text-sm md:text-base"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
