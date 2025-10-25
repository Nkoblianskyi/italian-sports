import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Passione Sport",
  description: "Informativa sui cookie utilizzati sul sito Passione Sport",
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Cookie Policy</h1>
        <p className="text-muted-foreground mb-12">Ultimo aggiornamento: 25 Ottobre 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Cosa sono i cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web.
              Vengono utilizzati per migliorare la tua esperienza di navigazione, ricordare le tue preferenze e fornire
              funzionalità essenziali del sito.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Come utilizziamo i cookie</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Passione Sport utilizza i cookie per i seguenti scopi:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Cookie essenziali:</strong> Necessari per il funzionamento del
                  sito, come l'autenticazione e la sicurezza
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Cookie di preferenze:</strong> Memorizzano le tue scelte e
                  preferenze per migliorare la tua esperienza
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Cookie analitici:</strong> Ci aiutano a capire come i visitatori
                  utilizzano il sito per migliorare i nostri servizi
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Cookie di marketing:</strong> Utilizzati per mostrare contenuti
                  rilevanti e personalizzati
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Tipi di cookie utilizzati</h2>

            <div className="space-y-6">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-2">Cookie di prima parte</h3>
                <p className="text-muted-foreground">
                  Questi cookie sono impostati direttamente da Passione Sport e sono utilizzati per fornire funzionalità
                  essenziali del sito e migliorare la tua esperienza.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-2">Cookie di terze parti</h3>
                <p className="text-muted-foreground">
                  Alcuni cookie sono impostati da servizi di terze parti che appaiono sulle nostre pagine, come Google
                  Analytics per l'analisi del traffico.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Gestione dei cookie</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Puoi controllare e gestire i cookie in diversi modi:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Impostazioni del browser:</strong> La maggior parte dei browser ti
                  permette di rifiutare o accettare i cookie
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Banner dei cookie:</strong> Puoi modificare le tue preferenze
                  tramite il nostro banner dei cookie
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Opt-out di terze parti:</strong> Puoi disattivare i cookie di
                  terze parti visitando i loro siti web
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Durata dei cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              I cookie possono essere temporanei (cookie di sessione) che vengono eliminati quando chiudi il browser, o
              permanenti (cookie persistenti) che rimangono sul tuo dispositivo per un periodo di tempo specificato o
              fino a quando non li elimini manualmente.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Modifiche a questa policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Potremmo aggiornare questa Cookie Policy periodicamente per riflettere cambiamenti nelle nostre pratiche o
              per altri motivi operativi, legali o normativi. Ti invitiamo a consultare regolarmente questa pagina per
              rimanere informato.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Contatti</h2>
            <p className="text-muted-foreground leading-relaxed">
              Per domande o dubbi riguardo questa Cookie Policy, puoi contattarci a:{" "}
              <a href="mailto:privacy@passionesportluxuryit.com" className="text-gold hover:text-gold/80 underline">
                privacy@passionesportluxuryit.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
