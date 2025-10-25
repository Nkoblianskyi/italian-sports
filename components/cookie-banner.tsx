"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Cookie, Settings } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    localStorage.setItem("cookie-consent", JSON.stringify(necessaryOnly))
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-card border-2 border-gold/20 rounded-2xl shadow-2xl backdrop-blur-xl">
          {!showSettings ? (
            // Main Banner
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gold/10 shrink-0">
                  <Cookie className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-foreground mb-2">Utilizziamo i Cookie</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizziamo cookie e tecnologie simili per migliorare la tua esperienza sul nostro sito, analizzare
                    il traffico e personalizzare i contenuti. Puoi scegliere quali cookie accettare.
                  </p>
                </div>
                <button
                  onClick={() => setShowBanner(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                  aria-label="Chiudi"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <Link href="/cookie-policy" className="text-sm text-gold hover:text-gold/80 underline">
                    Cookie Policy
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link href="/privacy-policy" className="text-sm text-gold hover:text-gold/80 underline">
                    Privacy Policy
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setShowSettings(true)}
                    className="border-border hover:bg-accent"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Personalizza
                  </Button>
                  <Button
                    variant="outline"
                    onClick={acceptNecessary}
                    className="border-border hover:bg-accent bg-transparent"
                  >
                    Solo Necessari
                  </Button>
                  <Button onClick={acceptAll} className="bg-gold hover:bg-gold/90 text-charcoal font-semibold">
                    Accetta Tutti
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-serif text-foreground">Preferenze Cookie</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Chiudi impostazioni"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 rounded-lg bg-accent/50 border border-border">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">Cookie Necessari</h4>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gold/20 text-gold">Sempre Attivi</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Essenziali per il funzionamento del sito. Non possono essere disabilitati.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-gold rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-charcoal rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 rounded-lg border border-border">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Cookie Analitici</h4>
                    <p className="text-sm text-muted-foreground">
                      Ci aiutano a capire come i visitatori interagiscono con il sito.
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                    className="ml-4"
                    aria-label="Toggle analytics cookies"
                  >
                    <div
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.analytics ? "bg-gold justify-end" : "bg-muted justify-start"
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-background rounded-full" />
                    </div>
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 rounded-lg border border-border">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Cookie di Marketing</h4>
                    <p className="text-sm text-muted-foreground">
                      Utilizzati per mostrare contenuti personalizzati e rilevanti.
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                    className="ml-4"
                    aria-label="Toggle marketing cookies"
                  >
                    <div
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.marketing ? "bg-gold justify-end" : "bg-muted justify-start"
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-background rounded-full" />
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <Button variant="outline" onClick={() => setShowSettings(false)} className="border-border">
                  Annulla
                </Button>
                <Button onClick={savePreferences} className="bg-gold hover:bg-gold/90 text-charcoal font-semibold">
                  Salva Preferenze
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
