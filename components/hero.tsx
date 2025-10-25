"use client"

import { Button } from "@/components/ui/button"
import { Trophy, Star, Calendar } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/luxury-italian-sports-stadium-at-sunset-with-drama.jpg"
          alt="Italian Sports Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-burgundy/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-burgundy/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-6">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-gold fill-gold" />
              <span className="text-xs md:text-sm text-gold font-medium">Esperienza Premium</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-4 md:mb-6">
              Sport Italiano
              <span className="block text-gold mt-2">di Lusso</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-xl text-cream/80 leading-relaxed mb-6 md:mb-8 max-w-xl">
              Accesso esclusivo alle competizioni più prestigiose d'Italia. Prenota la tua esperienza VIP.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <Link href="/contatto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-burgundy hover:bg-burgundy/90 text-cream font-semibold px-6 md:px-8 h-12 md:h-14 text-base md:text-lg rounded-lg shadow-xl shadow-burgundy/20"
                >
                  Richiedi Informazioni
                </Button>
              </Link>
              <Link href="/eventi">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-charcoal font-semibold px-6 md:px-8 h-12 md:h-14 text-base md:text-lg rounded-lg shadow-xl shadow-gold/20"
                >
                  Esplora Eventi
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 hover:bg-cream/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-serif text-cream mb-2">15+ Leghe</h3>
              <p className="text-cream/60 text-sm">Accesso alle migliori competizioni sportive</p>
            </div>

            {/* Card 2 */}
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 hover:bg-cream/10 transition-all duration-300 mt-8">
              <div className="w-12 h-12 bg-burgundy/20 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-burgundy" />
              </div>
              <h3 className="text-xl font-serif text-cream mb-2">500+ Eventi</h3>
              <p className="text-cream/60 text-sm">Calendario completo delle stagioni</p>
            </div>

            {/* Card 3 */}
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 hover:bg-cream/10 transition-all duration-300 col-span-2">
              <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-serif text-cream mb-2">Esperienza VIP</h3>
              <p className="text-cream/60 text-sm">Servizio esclusivo e personalizzato per ogni cliente</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
