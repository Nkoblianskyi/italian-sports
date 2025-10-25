import { Button } from "@/components/ui/button"
import { Crown, Sparkles, Users, Wine } from "lucide-react"
import Link from "next/link"

const vipFeatures = [
  {
    icon: Crown,
    title: "Accesso VIP",
    description: "Posti premium con vista ottimale",
  },
  {
    icon: Wine,
    title: "Hospitality Esclusiva",
    description: "Servizio di ristorazione di lusso",
  },
  {
    icon: Users,
    title: "Meet & Greet",
    description: "Incontri esclusivi con atleti",
  },
  {
    icon: Sparkles,
    title: "Concierge Personale",
    description: "Assistenza dedicata 24/7",
  },
]

export function VipExperience() {
  return (
    <section className="py-24 bg-burgundy text-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium">
                Esperienza Premium
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Esperienza VIP</h2>
            <p className="text-xl text-cream/90 mb-8 text-pretty leading-relaxed">
              Vivi lo sport italiano come mai prima d'ora. I nostri pacchetti VIP offrono un'esperienza senza pari,
              combinando il meglio dell'ospitalità italiana con l'emozione dello sport di alto livello.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {vipFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-cream/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/contatto">
              <Button size="lg" className="bg-cream hover:bg-cream/90 text-burgundy font-semibold">
                Richiedi Pacchetti VIP
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/luxury-vip-box-italian-stadium-hospitality.jpg"
                alt="VIP Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
