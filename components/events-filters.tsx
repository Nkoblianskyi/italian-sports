"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const categories = [
  { id: "all", label: "Tutti" },
  { id: "calcio", label: "Calcio" },
  { id: "motorsport", label: "Motorsport" },
  { id: "tennis", label: "Tennis" },
  { id: "basket", label: "Basket" },
  { id: "pallavolo", label: "Pallavolo" },
  { id: "pallamano", label: "Pallamano" },
  { id: "scherma", label: "Scherma" },
]

interface EventsFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function EventsFilters({ searchQuery, onSearchChange, activeCategory, onCategoryChange }: EventsFiltersProps) {
  return (
    <div className="mb-8 md:mb-12 space-y-6">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Cerca lega o torneo..."
            className="pl-12 h-12 md:h-14 text-base md:text-lg bg-card border-border"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => onCategoryChange(category.id)}
            className={
              activeCategory === category.id
                ? "bg-gold hover:bg-gold/90 text-charcoal text-sm md:text-base"
                : "border-border hover:bg-accent text-sm md:text-base"
            }
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
