"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle } from "lucide-react"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter subscription:", email)
    setShowSuccess(true)
    setEmail("")
  }

  return (
    <section className="py-24 bg-charcoal text-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-16 h-16 mx-auto mb-6 text-gold" />
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Rimani Aggiornato</h2>
          <p className="text-xl text-cream/80 mb-8 text-pretty">
            Ricevi in anteprima le novità sulle leghe, offerte esclusive e contenuti premium
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Il tuo indirizzo email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50 focus-visible:ring-gold"
            />
            <Button size="lg" className="bg-burgundy hover:bg-burgundy/90 text-cream font-semibold whitespace-nowrap">
              Iscriviti
            </Button>
          </form>

          <p className="text-sm text-cream/60 mt-4">
            Rispettiamo la tua privacy. Nessuno spam, solo contenuti di qualità.
          </p>
        </div>
      </div>

      <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader className="items-center">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-500" />
            </div>
            <AlertDialogTitle className="text-2xl font-serif text-center">Grazie per l'iscrizione!</AlertDialogTitle>
            <AlertDialogDescription className="text-center text-base">
              Ti abbiamo inviato un'email di conferma. Riceverai presto le nostre novità esclusive e offerte premium.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogAction
            onClick={() => setShowSuccess(false)}
            className="bg-burgundy hover:bg-burgundy/90 text-cream"
          >
            Perfetto
          </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  )
}
