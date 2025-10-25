import { Button } from "@/components/ui/button"
import { Users, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: "serie-a",
    title: "Serie A",
    category: "calcio",
    description: "Il campionato di calcio più prestigioso d'Italia",
    teams: "20 Squadre",
    venues: "Stadi Iconici",
    image: "/serie-a-italian-football-stadium.jpg",
    color: "burgundy",
  },
  {
    id: "champions-league",
    title: "UEFA Champions League",
    category: "calcio",
    description: "La competizione europea più prestigiosa",
    teams: "Club Elite",
    venues: "Europa",
    image: "/uefa-champions-league-stadium-night.jpg",
    color: "burgundy",
  },
  {
    id: "formula-1",
    title: "Formula 1",
    category: "motorsport",
    description: "Il pinnacolo del motorsport mondiale",
    teams: "10 Team",
    venues: "Monza, Imola",
    image: "/formula-1-racing-monza-italy.jpg",
    color: "gold",
  },
  {
    id: "motogp",
    title: "MotoGP",
    category: "motorsport",
    description: "Campionato mondiale di motociclismo",
    teams: "Team Ufficiali",
    venues: "Mugello, Misano",
    image: "/motogp-racing-mugello-italy.jpg",
    color: "gold",
  },
  {
    id: "tennis-grand-slam",
    title: "Tennis Grand Slam",
    category: "tennis",
    description: "I tornei più prestigiosi del tennis mondiale",
    teams: "Elite Mondiale",
    venues: "Campi Storici",
    image: "/tennis-grand-slam-wimbledon-court.jpg",
    color: "cream",
  },
  {
    id: "serie-a-basket",
    title: "Serie A Basket",
    category: "basket",
    description: "Il massimo campionato italiano di pallacanestro",
    teams: "16 Squadre",
    venues: "Palazzetti Premium",
    image: "/italian-basketball-arena-luxury.jpg",
    color: "burgundy",
  },
  {
    id: "superliga-volley",
    title: "SuperLega Volley",
    category: "pallavolo",
    description: "Il campionato maschile di pallavolo più prestigioso d'Italia",
    teams: "14 Squadre",
    venues: "Palazzetti d'Elite",
    image: "/italian-volleyball-superliga.jpg",
    color: "burgundy",
  },
  {
    id: "serie-a1-volley-femminile",
    title: "Serie A1 Femminile",
    category: "pallavolo",
    description: "Il massimo campionato femminile di pallavolo italiano",
    teams: "12 Squadre",
    venues: "Arene Nazionali",
    image: "/italian-volleyball-women.jpg",
    color: "burgundy",
  },
  {
    id: "serie-a-pallamano",
    title: "Serie A Pallamano",
    category: "pallamano",
    description: "Il campionato nazionale di pallamano",
    teams: "14 Squadre",
    venues: "Palazzetti Italiani",
    image: "/italian-handball-championship.jpg",
    color: "gold",
  },
  {
    id: "campionato-italiano-scherma",
    title: "Campionato Italiano Scherma",
    category: "scherma",
    description: "La competizione nazionale di scherma più prestigiosa",
    teams: "Elite Nazionale",
    venues: "Sale d'Armi Storiche",
    image: "/italian-fencing-championship.jpg",
    color: "cream",
  },
  {
    id: "coppa-del-mondo-scherma",
    title: "Coppa del Mondo Scherma",
    category: "scherma",
    description: "Tappe italiane della Coppa del Mondo FIE",
    teams: "Campioni Mondiali",
    venues: "Sedi Internazionali",
    image: "/fencing-world-cup-italy.jpg",
    color: "cream",
  },
]

interface EventsGridProps {
  searchQuery: string
  activeCategory: string
}

export function EventsGrid({ searchQuery, activeCategory }: EventsGridProps) {
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      searchQuery === "" ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === "all" || event.category === activeCategory

    return matchesSearch && matchesCategory
  })

  if (filteredEvents.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-xl text-muted-foreground">Nessun evento trovato. Prova con un'altra ricerca.</p>
      </div>
    )
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {filteredEvents.map((event) => (
        <Link key={event.id} href={`/lega/${event.id}`}>
          <div className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-gold/50 transition-all duration-500 hover:scale-[1.02] flex flex-col h-full">
            {/* Image */}
            <div className="relative h-48 md:h-64 overflow-hidden flex-shrink-0">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold/90 backdrop-blur-sm">
                <span className="text-xs font-medium text-charcoal capitalize">{event.category}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 space-y-4 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-burgundy transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
              </div>

              {/* Info */}
              <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" />
                  <span>{event.teams}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{event.venues}</span>
                </div>
              </div>

              {/* CTA */}
              <Button
                variant="default"
                className="w-full justify-between bg-burgundy hover:bg-burgundy/90 text-cream group/btn mt-auto text-sm md:text-base"
              >
                <span>Richiedi Informazioni</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
