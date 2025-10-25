import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy } from "lucide-react"
import Link from "next/link"

const leagues = [
  {
    id: 1,
    name: "Serie A",
    description: "Il campionato di calcio più prestigioso d'Italia",
    image: "/serie-a-football-stadium-luxury.jpg",
    category: "Calcio",
  },
  {
    id: 2,
    name: "Formula 1 - Gran Premio d'Italia",
    description: "L'emozione della velocità a Monza",
    image: "/formula-1-monza-italian-grand-prix.jpg",
    category: "Motorsport",
  },
  {
    id: 3,
    name: "Internazionali BNL d'Italia",
    description: "Il prestigioso torneo di tennis al Foro Italico",
    image: "/italian-open-tennis-rome-foro-italico.jpg",
    category: "Tennis",
  },
]

export function FeaturedLeagues() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal dark:text-cream mb-4">Leghe in Evidenza</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri le competizioni più esclusive del panorama sportivo italiano
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {leagues.map((league) => (
            <Card
              key={league.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={league.image || "/placeholder.svg"}
                  alt={league.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-gold/90 text-charcoal px-3 py-1 rounded-full text-sm font-medium">
                    {league.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-2xl mb-2 text-charcoal dark:text-cream">{league.name}</h3>
                <p className="text-muted-foreground mb-4 text-pretty flex-grow">{league.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <Link href="/contatto" className="w-full">
                    <Button variant="default" className="w-full bg-burgundy hover:bg-burgundy/90 text-cream">
                      Richiedi Informazioni
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contatto">
            <Button size="lg" className="bg-burgundy hover:bg-burgundy/90 text-cream">
              Contattaci per Tutte le Leghe
              <Trophy className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
