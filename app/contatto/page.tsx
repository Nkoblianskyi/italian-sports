import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contattaci | Passione Sport",
  description:
    "Contatta Passione Sport per informazioni su eventi sportivi premium, biglietti VIP e esperienze esclusive. Il nostro team è a tua disposizione.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen py-8 sm:py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-3 sm:mb-4">
            Contattaci
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
            Siamo qui per aiutarti a vivere un'esperienza sportiva indimenticabile
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  )
}
