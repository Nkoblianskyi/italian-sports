import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marco Rossi",
    role: "Imprenditore, Milano",
    content:
      "Un servizio impeccabile. La qualità dell'esperienza VIP ha superato ogni aspettativa. Consiglio vivamente.",
    rating: 5,
    image: "/italian-businessman-portrait.jpg",
  },
  {
    name: "Giulia Bianchi",
    role: "Avvocato, Roma",
    content: "Finalmente un modo elegante per vivere lo sport italiano. L'attenzione ai dettagli è straordinaria.",
    rating: 5,
    image: "/italian-professional-woman-portrait.jpg",
  },
  {
    name: "Alessandro Ferrari",
    role: "Architetto, Torino",
    content: "L'accesso alle migliori leghe con un servizio di concierge eccezionale. Un'esperienza unica.",
    rating: 5,
    image: "/italian-architect-portrait.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-charcoal dark:text-cream mb-4">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            L'eccellenza riconosciuta da chi ha già vissuto l'esperienza
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-charcoal dark:text-cream">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
