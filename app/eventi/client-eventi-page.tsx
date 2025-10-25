"use client"

import { EventsGrid } from "@/components/events-grid"
import { useState } from "react"

export default function ClientEventiPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-charcoal to-background">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(212, 175, 55) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream mb-4 md:mb-6 tracking-tight">
              Eventi Sportivi Premium
            </h1>
            <p className="text-lg md:text-xl text-cream/80 leading-relaxed px-4">
              Scopri le leghe e i tornei più prestigiosi d'Italia. Accesso esclusivo alle migliori esperienze sportive.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <EventsGrid searchQuery="" activeCategory={activeCategory} />
        </div>
      </section>
    </main>
  )
}
