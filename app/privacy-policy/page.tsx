import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Passione Sport",
  description: "Informativa sulla privacy di Passione Sport",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Ultimo aggiornamento: 25 Ottobre 2025</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Introduzione</h2>
            <p className="text-muted-foreground leading-relaxed">
              Passione Sport ("noi", "nostro" o "ci") si impegna a proteggere la privacy dei propri utenti. Questa
              Privacy Policy descrive come raccogliamo, utilizziamo, condividiamo e proteggiamo le informazioni
              personali quando utilizzi il nostro sito web e i nostri servizi.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Informazioni che raccogliamo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Raccogliamo diversi tipi di informazioni:</p>

            <div className="space-y-6">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-2">Informazioni fornite direttamente</h3>
                <ul className="space-y-2 text-muted-foreground mt-3">
                  <li className="flex gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Nome e cognome</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Indirizzo email</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Numero di telefono</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Informazioni di contatto e preferenze</span>
                  </li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-2">Informazioni raccolte automaticamente</h3>
                <ul className="space-y-2 text-muted-foreground mt-3">
                  <li className="flex gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Indirizzo IP e dati di geolocalizzazione</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Tipo di browser e dispositivo</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Pagine visitate e tempo di permanenza</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold mt-1">•</span>
                    <span>Cookie e tecnologie simili</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Come utilizziamo le tue informazioni</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Utilizziamo le informazioni raccolte per:</p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Fornire e migliorare i nostri servizi</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Rispondere alle tue richieste e comunicazioni</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Personalizzare la tua esperienza sul sito</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Inviare comunicazioni di marketing (con il tuo consenso)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Analizzare l'utilizzo del sito e migliorare le nostre offerte</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Proteggere la sicurezza e prevenire frodi</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>Rispettare obblighi legali e normativi</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Condivisione delle informazioni</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Potremmo condividere le tue informazioni con:</p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Fornitori di servizi:</strong> Partner che ci aiutano a fornire i
                  nostri servizi
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Partner commerciali:</strong> Con il tuo consenso esplicito
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Autorità legali:</strong> Quando richiesto dalla legge o per
                  proteggere i nostri diritti
                </span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Non vendiamo mai le tue informazioni personali a terze parti.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">I tuoi diritti</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In conformità con il GDPR, hai i seguenti diritti:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Diritto di accesso:</strong> Richiedere una copia dei tuoi dati
                  personali
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Diritto di rettifica:</strong> Correggere dati inesatti o
                  incompleti
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Diritto alla cancellazione:</strong> Richiedere l'eliminazione dei
                  tuoi dati
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Diritto di limitazione:</strong> Limitare il trattamento dei tuoi
                  dati
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Diritto alla portabilità:</strong> Ricevere i tuoi dati in un
                  formato strutturato
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Diritto di opposizione:</strong> Opponerti al trattamento dei tuoi
                  dati
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Sicurezza dei dati</h2>
            <p className="text-muted-foreground leading-relaxed">
              Implementiamo misure di sicurezza tecniche e organizzative appropriate per proteggere le tue informazioni
              personali da accesso non autorizzato, perdita, distruzione o alterazione. Tuttavia, nessun metodo di
              trasmissione su Internet o di archiviazione elettronica è completamente sicuro.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Conservazione dei dati</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conserviamo le tue informazioni personali solo per il tempo necessario a soddisfare gli scopi per cui sono
              state raccolte, inclusi eventuali requisiti legali, contabili o di reporting.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Modifiche a questa policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Potremmo aggiornare questa Privacy Policy periodicamente. Ti informeremo di eventuali modifiche
              pubblicando la nuova Privacy Policy su questa pagina e aggiornando la data di "Ultimo aggiornamento".
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-4">Contatti</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Per esercitare i tuoi diritti o per qualsiasi domanda riguardo questa Privacy Policy, puoi contattarci:
            </p>
            <div className="border border-border rounded-lg p-6 bg-card">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Email:</strong>{" "}
                <a href="mailto:privacy@passionesportluxuryit.com" className="text-gold hover:text-gold/80 underline">
                  privacy@passionesportluxuryit.com
                </a>
              </p>
              <p className="text-muted-foreground mt-2">
                <strong className="text-foreground">Sito web:</strong> passionesportluxuryit.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
