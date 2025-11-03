"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-foreground bg-accent mx-0 my-0 px-0 border-2 rounded-xs text-base font-normal">Welcome to NeuralbloomAI  </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight rounded-none">
              Design, Build & Deliver Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Next Big Thing
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Combining design thinking, AI-driven strategy & expert development. We transform your vision into powerful
              digital experiences that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg flex items-center justify-center gap-2 font-semibold">
                Start Your Project
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors font-semibold">
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
            <div className="relative h-96 md:h-full">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>

              {/* Device Mockups Grid */}
              <div className="relative grid grid-cols-2 gap-4 p-4">
                {/* Large Device */}
                <div className="col-span-2 bg-card rounded-xl p-4 border border-border shadow-lg hover:shadow-xl transition-shadow animate-float">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-32 flex items-center justify-center">
                    <span className="text-sm font-semibold text-muted-foreground">Web Design</span>
                  </div>
                </div>

                {/* Small Devices */}
                <div
                  className="bg-card rounded-xl p-3 border border-border shadow-lg hover:shadow-xl transition-shadow animate-float"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-lg h-24 flex items-center justify-center">
                    <span className="text-xs font-semibold text-muted-foreground">Mobile</span>
                  </div>
                </div>

                <div
                  className="bg-card rounded-xl p-3 border border-border shadow-lg hover:shadow-xl transition-shadow animate-float"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg h-24 flex items-center justify-center">
                    <span className="text-xs font-semibold text-muted-foreground">App</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-8">TRUSTED BY LEADING BRANDS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["TechCorp", "InnovateLabs", "FutureScale", "CloudSync", "DataFlow"].map((brand) => (
              <div
                key={brand}
                className="text-muted-foreground font-semibold opacity-60 hover:opacity-100 transition-opacity"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
