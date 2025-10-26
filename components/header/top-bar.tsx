import { Phone, Mail } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+390612345678" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+39 06 1234 5678</span>
            </a>
            <a
              href="mailto:info@passionesportluxuryit.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@passionesportluxuryit.com</span>
            </a>
          </div>
          <div className="text-xs hidden md:block">Esperienza VIP Esclusiva • Servizio Clienti Premium</div>
        </div>
      </div>
    </div>
  )
}
