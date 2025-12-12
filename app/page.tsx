"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ClientLogos from "@/components/client-logos"
import Services from "@/components/services"
import PortfolioBento from "@/components/portfolio-bento"
import StatsSection from "@/components/stats-section"
import ProcessSection from "@/components/process-section"
import PricingSection from "@/components/pricing-section"
import Testimonials from "@/components/testimonials"
import FAQSection from "@/components/faq-section"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"

export default function Home() {
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
      <Hero />
      <ClientLogos />
      <Services />
      <PortfolioBento />
      <StatsSection />
      <ProcessSection />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <CTA />
      <Footer />
      <BackToTop />
    </main>
  )
}
