"use client"

const clients = [
  "TechCorp",
  "InnovateLabs",
  "FutureScale",
  "CloudSync",
  "DataFlow",
  "NexGen",
  "Quantum",
  "Velocity",
]

export default function ClientLogos() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8">
          60+ STARTUPS & FOUNDERS CHOSE NEURALBLOOMAI
        </p>

        {/* Infinite scroll animation */}
        <div className="relative">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 text-2xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
