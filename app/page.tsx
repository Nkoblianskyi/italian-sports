import { Hero } from "@/components/hero"
import { FeaturedLeagues } from "@/components/featured-leagues"
import { SportCategories } from "@/components/sport-categories"
import { VipExperience } from "@/components/vip-experience"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedLeagues />
      <SportCategories />
      <VipExperience />
      <Testimonials />
      <Newsletter />
    </main>
  )
}
