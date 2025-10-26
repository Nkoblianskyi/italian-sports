"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Mail, Phone, CheckCircle } from "lucide-react"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    league: "",
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setShowSuccess(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      league: "",
      message: "",
    })
  }

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Contact Info Cards */}
        <div className="space-y-4 lg:space-y-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Email</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground break-words">info@passionesportluxuryit.com</p>
                  <p className="text-xs sm:text-sm text-muted-foreground break-words">vip@passionesportluxuryit.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg mb-2">Telefono</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">+39 06 6385 1984</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Lun-Ven: 9:00-18:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="font-serif text-2xl sm:text-3xl">Richiedi Informazioni</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Compila il modulo e ti contatteremo entro 24 ore per discutere le tue esigenze
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base">
                      Nome Completo *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Mario Rossi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="mario.rossi@email.it"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm sm:text-base">
                      Telefono
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+39 123 456 7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="league" className="text-sm sm:text-base">
                      Lega/Torneo di Interesse
                    </Label>
                    <Input
                      id="league"
                      placeholder="es. Serie A, Formula 1"
                      value={formData.league}
                      onChange={(e) => setFormData({ ...formData, league: e.target.value })}
                      className="text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm sm:text-base">
                    Messaggio *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Descrivi le tue esigenze e preferenze..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="text-sm sm:text-base resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-burgundy hover:bg-burgundy/90 text-cream font-semibold text-sm sm:text-base"
                >
                  Invia Richiesta
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader className="items-center">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-500" />
            </div>
            <AlertDialogTitle className="text-2xl font-serif text-center">
              Richiesta Inviata con Successo!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-base">
              Grazie per averci contattato. Il nostro team ti risponderà entro 24 ore per discutere le tue esigenze.
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
