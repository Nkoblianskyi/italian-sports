import Link from "next/link"
import { sportsData } from "@/lib/sports-data"
import { Logo } from "./header/logo"

export function Footer() {
  const sports = Object.values(sportsData)

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <Logo />
              <p className="text-sm text-muted-foreground leading-relaxed">
                L'eccellenza italiana nell'esperienza sportiva di lusso. Accesso esclusivo alle più prestigiose leghe e
                tornei.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Link Rapidi</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-burgundy transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/eventi" className="text-sm text-muted-foreground hover:text-burgundy transition-colors">
                  Eventi
                </Link>
              </li>
              <li>
                <Link href="/sport" className="text-sm text-muted-foreground hover:text-burgundy transition-colors">
                  Sport
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo" className="text-sm text-muted-foreground hover:text-burgundy transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/contatto" className="text-sm text-muted-foreground hover:text-burgundy transition-colors">
                  Contatto
                </Link>
              </li>
            </ul>
          </div>

          {/* Sport */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Sport</h3>
            <ul className="space-y-3">
              {sports.map((sport) => (
                <li key={sport.id}>
                  <Link
                    href={`/sport/${sport.slug}`}
                    className="text-sm text-muted-foreground hover:text-burgundy transition-colors"
                  >
                    {sport.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contatti</h3>
            <ul className="space-y-4">
              <li>
                <div className="text-sm text-muted-foreground">+39 06 6385 1984</div>
              </li>
              <li>
                <div className="text-sm text-muted-foreground">info@passionesportluxuryit.com</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Passione Sport Luxury. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-burgundy transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="text-sm text-muted-foreground hover:text-burgundy transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
