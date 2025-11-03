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
          <div className="relative p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-foreground">
              Let's discuss how NeuralBloomAI can help you achieve your digital goals. 
Schedule a consultation with our team today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight size={20} />
              </Link>
              <button
                onClick={() => {
                  // Create a simple profile download - you can replace with actual PDF
                  const link = document.createElement("a")
                  link.href = "/profile.pdf"
                  link.download = "InnerBloomAI-Profile.pdf"
                  link.click()
                }}
                className="px-8 py-3 rounded-lg border-2 hover:bg-primary-foreground/10 transition-colors font-semibold text-card-foreground border-popover-foreground"
              >
                Download Our Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
