import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { sportsData } from "@/lib/sports-data"
import { ArrowRight, Trophy, Star } from "lucide-react"

export const metadata = {
  title: "Sport - Passione Sport Luxury",
  description: "Esplora tutte le categorie sportive disponibili per esperienze VIP esclusive",
}

export default function SportPage() {
  const sports = Object.values(sportsData)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/sports-collage-luxury-events.jpg" alt="Sport" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 mb-6">
            <Trophy className="w-5 h-5 text-gold" />
            <span className="text-gold text-sm font-medium tracking-wide">Eccellenza Sportiva Italiana</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-cream">
            Le Nostre Discipline Sportive
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-cream/90 max-w-3xl mx-auto text-balance leading-relaxed">
            Accesso esclusivo alle più prestigiose competizioni sportive italiane e internazionali con esperienze VIP su
            misura
          </p>
        </div>
      </section>

      {/* Sports Grid - Asymmetric Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sports.map((sport, index) => {
              const isLarge = index === 0

              return (
                <Card
                  key={sport.id}
                  className={`group overflow-hidden border-border/50 hover:border-accent/50 transition-all hover:shadow-2xl flex flex-col h-full ${
                    isLarge ? "lg:col-span-2 lg:row-span-1" : ""
                  }`}
                >
                  <Link href={`/sport/${sport.slug}`} className="flex flex-col h-full">
                    <div
                      className={`relative overflow-hidden flex-shrink-0 ${isLarge ? "h-80 md:h-96" : "h-64 md:h-72"}`}
                    >
                      <Image
                        src={sport.image || "/placeholder.svg"}
                        alt={sport.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />

                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gold/90 backdrop-blur-sm">
                          <Star className="w-3 h-3 text-charcoal fill-charcoal" />
                          <span className="text-xs font-semibold text-charcoal">Premium</span>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <h3 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                          {sport.name}
                        </h3>
                        <p className="text-sm text-cream/80 line-clamp-2">{sport.description}</p>
                      </div>
                    </div>

                    <CardContent className="p-6 md:p-8 flex flex-col flex-grow bg-gradient-to-b from-background to-secondary/20">
                      <div className="flex-grow mb-6">
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3">
                          {sport.longDescription}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <span className="text-sm font-medium text-foreground">Scopri di più</span>
                        <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-2 transition-transform" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto border-accent/20 bg-gradient-to-br from-burgundy/5 via-background to-gold/5 overflow-hidden">
            <CardContent className="p-8 md:p-16 text-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-burgundy/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <Trophy className="w-12 h-12 md:w-16 md:h-16 text-gold mx-auto mb-6" />
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-balance">
                  Vivi lo Sport come Mai Prima d'Ora
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
                  Contattaci per scoprire tutte le nostre esperienze sportive esclusive, pacchetti VIP personalizzati e
                  accesso privilegiato agli eventi più prestigiosi.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-burgundy hover:bg-burgundy/90 text-cream text-base md:text-lg px-8 py-6 h-auto"
                >
                  <Link href="/contatto" className="flex items-center gap-2">
                    Richiedi Consulenza Gratuita
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
