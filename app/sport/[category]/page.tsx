import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Star, ArrowRight } from "lucide-react"
import { sportsData, type SportId } from "@/lib/sports-data"

export function generateStaticParams() {
  return Object.keys(sportsData).map((slug) => ({
    category: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  const sport = sportsData[category as SportId]

  if (!sport) {
    return {
      title: "Sport Non Trovato",
    }
  }

  return {
    title: `${sport.name} - Passione Sport Luxury`,
    description: sport.description,
  }
}

export default async function SportCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const sport = sportsData[category as SportId]

  if (!sport) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image src={sport.image || "/placeholder.svg"} alt={sport.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-background" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 mb-8">
            <Trophy className="w-5 h-5 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-wide">Esperienza Premium</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream mb-6 font-bold">
            {sport.name}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-cream/90 max-w-4xl mx-auto leading-relaxed px-4 text-balance">
            {sport.description}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16">
              <Card className="border-border/50 overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance">
                    L'Eccellenza del {sport.name}
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-base md:text-lg">{sport.longDescription}</p>
                    <p className="text-base md:text-lg">
                      Offriamo esperienze VIP esclusive con accesso privilegiato agli eventi più prestigiosi,
                      hospitality di lusso e servizi personalizzati per rendere ogni momento indimenticabile.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-gradient-to-br from-burgundy/5 to-gold/5">
                <CardContent className="p-8 md:p-10">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6">Highlights</h3>
                  <ul className="space-y-4">
                    {sport.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                          <Star className="w-3 h-3 text-gold fill-gold" />
                        </div>
                        <span className="text-base text-foreground leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Grid */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center">
                I Vantaggi dell'Esperienza VIP
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Accesso VIP",
                    description:
                      "Posti premium e aree esclusive per vivere l'evento da protagonista con vista ottimale",
                  },
                  {
                    title: "Hospitality di Lusso",
                    description: "Lounge esclusive con catering gourmet, open bar e servizio di alto livello",
                  },
                  {
                    title: "Pacchetti Completi",
                    description:
                      "Hotel 5 stelle, trasferimenti privati, assistenza dedicata e itinerari personalizzati",
                  },
                  {
                    title: "Concierge 24/7",
                    description: "Team multilingue disponibile per ogni esigenza prima, durante e dopo l'evento",
                  },
                ].map((benefit, index) => (
                  <Card key={index} className="border-border/50 hover:border-accent/50 transition-colors">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="font-serif text-lg font-bold mb-3">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Card className="border-accent/20 bg-gradient-to-br from-burgundy/10 via-background to-gold/10 overflow-hidden">
              <CardContent className="p-10 md:p-16 text-center relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-burgundy/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-balance">
                    Richiedi Informazioni su {sport.name}
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
                    Contattaci per scoprire tutte le esperienze disponibili, ricevere un preventivo personalizzato e
                    creare un pacchetto su misura per le tue esigenze.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-burgundy hover:bg-burgundy/90 text-cream text-base md:text-lg px-8 py-6 h-auto"
                  >
                    <Link href="/contatto" className="flex items-center gap-2">
                      Contattaci Ora
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
