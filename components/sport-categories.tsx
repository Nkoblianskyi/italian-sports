import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { sportsData } from "@/lib/sports-data"

export function SportCategories() {
  const sports = Object.values(sportsData)

  return (
    <section className="py-12 md:py-24 bg-cream dark:bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-6xl text-charcoal dark:text-cream mb-4">
            Categorie Sportive
          </h2>
          <p className="text-base md:text-lg text-charcoal/70 dark:text-cream/70 max-w-2xl mx-auto px-4">
            Esplora il mondo dello sport italiano attraverso le nostre categorie esclusive
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {sports.map((sport) => (
            <Link href={`/sport/${sport.slug}`} key={sport.id}>
              <div className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
                <img
                  src={sport.image || "/placeholder.svg"}
                  alt={sport.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                  <div className="text-3xl md:text-4xl mb-2">{sport.icon}</div>
                  <h3 className="font-serif text-2xl md:text-3xl text-cream mb-2">{sport.name}</h3>
                  <p className="text-cream/80 mb-3 md:mb-4 text-sm md:text-base text-pretty line-clamp-2">
                    {sport.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="self-start text-cream hover:text-cream hover:bg-cream/20 p-0 font-semibold text-sm md:text-base"
                  >
                    Scopri di Più
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
