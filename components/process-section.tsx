"use client"

import { MessageSquare, Palette, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We start by understanding your business goals, target audience, and project requirements.",
    number: "01",
  },
  {
    icon: Palette,
    title: "Design & Strategy",
    description: "Our team creates stunning designs and develops a comprehensive strategy for your project.",
    number: "02",
  },
  {
    icon: Code,
    title: "Development",
    description: "We build your solution using cutting-edge technology, ensuring quality and performance.",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support to ensure continued success.",
    number: "04",
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">OUR PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven process that delivers exceptional results every time
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Connecting Line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-border z-0" />
                )}

                <div className="relative z-10 text-center">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl md:text-2xl font-bold text-primary">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
