import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Shield, Star, Users, Zap, Crown, Target, TrendingUp, Globe } from "lucide-react"

export const metadata = {
  title: "Chi Siamo - Passione Sport Luxury | passionesportluxuryit.com",
  description:
    "Scopri Passione Sport, il portale italiano premium per l'accesso esclusivo agli eventi sportivi di lusso - passionesportluxuryit.com",
}

export default function ChiSiamoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/luxury-italian-sports-venue-elegant.jpg"
            alt="Passione Sport Luxury"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-burgundy/80 to-charcoal/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block px-6 py-2 bg-gold/20 border border-gold/30 rounded-full mb-6">
            <span className="text-gold font-medium">Eccellenza Italiana dal 2015</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance text-cream">
            Passione Sport Luxury
          </h1>
          <p className="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto text-balance leading-relaxed">
            Il portale italiano di riferimento per esperienze sportive esclusive e servizi VIP di altissimo livello
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
                  <span className="text-accent font-medium text-sm">La Nostra Missione</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Connettere Passione e Prestigio
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                  Passione Sport è nato dall'idea di creare un ponte tra gli appassionati di sport e le esperienze più
                  esclusive del panorama sportivo internazionale. Non siamo solo un servizio di prenotazione: siamo
                  curatori di emozioni, architetti di ricordi indimenticabili.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Il nostro portale rappresenta l'eccellenza italiana nell'hospitality sportiva, offrendo accesso
                  privilegiato a eventi di calcio, motorsport, tennis, basket, boxe, scherma, pallavolo e pallamano.
                  Ogni richiesta viene gestita con la massima attenzione ai dettagli e un servizio personalizzato che
                  riflette la tradizione italiana del lusso.
                </p>
              </div>

              <div className="relative">
                <Card className="border-accent/20 bg-gradient-to-br from-burgundy/5 to-gold/5">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {[
                        { icon: Globe, label: "Copertura Internazionale", value: "50+ Paesi" },
                        { icon: Star, label: "Eventi Premium", value: "200+ Annuali" },
                        { icon: Users, label: "Clienti Soddisfatti", value: "5000+" },
                        { icon: TrendingUp, label: "Anni di Esperienza", value: "10+" },
                      ].map((stat, index) => {
                        const Icon = stat.icon
                        return (
                          <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-background/50">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-black" />
                            </div>
                            <div>
                              <div className="font-serif text-2xl font-bold text-foreground">{stat.value}</div>
                              <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Il Nostro Servizio</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Un'esperienza completa che va oltre la semplice prenotazione
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Crown,
                title: "Accesso Esclusivo",
                description:
                  "Posti premium, hospitality lounge VIP e aree riservate negli eventi sportivi più prestigiosi del mondo.",
              },
              {
                icon: Target,
                title: "Consulenza Personalizzata",
                description:
                  "Il nostro team analizza le tue preferenze per proporti le esperienze più adatte ai tuoi desideri.",
              },
              {
                icon: Shield,
                title: "Garanzia Totale",
                description:
                  "Ogni prenotazione è garantita e supportata dal nostro servizio clienti dedicato disponibile 24/7.",
              },
              {
                icon: Zap,
                title: "Processo Semplificato",
                description:
                  "Dalla richiesta iniziale all'evento finale, gestiamo ogni aspetto per garantirti un'esperienza senza stress.",
              },
              {
                icon: Award,
                title: "Partnership Premium",
                description:
                  "Collaborazioni dirette con le principali leghe e organizzazioni sportive per offrirti il meglio.",
              },
              {
                icon: Heart,
                title: "Passione Italiana",
                description:
                  "Portiamo l'eleganza e l'attenzione ai dettagli tipiche del made in Italy in ogni servizio.",
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="border-border/50 hover:border-accent/50 transition-all hover:shadow-xl group h-full flex flex-col"
                >
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty flex-grow">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">I Nostri Valori</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              I principi fondamentali che guidano ogni nostra azione
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Crown,
                title: "Eccellenza",
                description: "Perseguiamo la perfezione in ogni dettaglio, offrendo solo il meglio.",
              },
              {
                icon: Heart,
                title: "Passione",
                description: "L'amore per lo sport guida ogni nostra iniziativa e decisione.",
              },
              {
                icon: Shield,
                title: "Affidabilità",
                description: "La fiducia dei nostri clienti è sacra. Manteniamo sempre le promesse.",
              },
              {
                icon: Star,
                title: "Esclusività",
                description: "Creiamo esperienze uniche riservate a chi cerca il meglio assoluto.",
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 text-center h-full flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 mx-auto">
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty flex-grow">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-accent/20 bg-gradient-to-br from-burgundy/10 via-gold/5 to-burgundy/10 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(184,134,11,0.1),transparent_50%)]" />
            <CardContent className="p-12 md:p-16 text-center relative z-10">
              <div className="inline-block px-6 py-2 bg-gold/20 border border-gold/30 rounded-full mb-6">
                <span className="text-gold font-medium">Inizia Ora</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
                Vivi lo Sport come Mai Prima
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
                Contattaci per scoprire come possiamo trasformare la tua passione sportiva in un'esperienza
                indimenticabile di lusso e prestigio.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-burgundy hover:bg-burgundy/90 text-cream text-lg px-8 py-6 h-auto"
              >
                <Link href="/contatto">Richiedi Consulenza Gratuita</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
