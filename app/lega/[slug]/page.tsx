import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, MapPin, Calendar, Star, Shield, Award, Crown } from "lucide-react"

const leagues = {
  "serie-a": {
    id: "serie-a",
    name: "Serie A",
    sport: "Calcio",
    description:
      "Il campionato di calcio italiano di massima divisione, dove le squadre più prestigiose d'Italia competono per il titolo di campione.",
    longDescription:
      "La Serie A rappresenta l'eccellenza del calcio italiano, con una storia ricca di tradizione, passione e talento. Ogni stagione, 20 squadre si sfidano in un torneo avvincente che cattura l'attenzione di milioni di tifosi in tutto il mondo. Dalle storiche rivalità come il Derby della Madonnina tra Inter e Milan, al Derby della Capitale tra Roma e Lazio, la Serie A offre emozioni uniche e momenti indimenticabili.",
    image: "/serie-a-italian-football-stadium.jpg",
    teams: [
      "Inter Milano",
      "AC Milan",
      "Juventus",
      "Napoli",
      "Roma",
      "Lazio",
      "Atalanta",
      "Fiorentina",
      "Bologna",
      "Torino",
      "Udinese",
      "Sassuolo",
      "Empoli",
      "Monza",
      "Verona",
      "Lecce",
      "Frosinone",
      "Genoa",
      "Cagliari",
      "Salernitana",
    ],
    venues: [
      "San Siro (Milano)",
      "Allianz Stadium (Torino)",
      "Stadio Olimpico (Roma)",
      "Diego Armando Maradona (Napoli)",
      "Artemio Franchi (Firenze)",
    ],
    features: [
      "Accesso VIP alle partite più prestigiose",
      "Posti premium con vista ottimale",
      "Hospitality lounge esclusiva",
      "Meet & greet con leggende del calcio",
      "Pacchetti stagionali disponibili",
      "Servizio concierge dedicato",
    ],
    highlights: [
      { icon: Trophy, label: "Campionato Storico", value: "123 anni di storia" },
      { icon: Users, label: "Squadre", value: "20 club d'élite" },
      { icon: Calendar, label: "Partite", value: "380 match a stagione" },
      { icon: Star, label: "Tifosi", value: "Milioni in tutto il mondo" },
    ],
  },
  "champions-league": {
    id: "champions-league",
    name: "UEFA Champions League",
    sport: "Calcio",
    description:
      "La competizione calcistica per club più prestigiosa d'Europa, dove i migliori team del continente si sfidano per la gloria.",
    longDescription:
      "La UEFA Champions League è il torneo per club più importante al mondo, un palcoscenico dove le migliori squadre europee competono per conquistare il trofeo più ambito. Con la sua iconica musica d'ingresso e le notti magiche sotto i riflettori, la Champions League offre calcio del più alto livello, con stelle internazionali e partite che entrano nella storia. Dalle fasi a gironi alle emozionanti notti di finale, ogni match è un'esperienza indimenticabile.",
    image: "/uefa-champions-league-stadium-night.jpg",
    teams: [
      "Real Madrid",
      "Manchester City",
      "Bayern Monaco",
      "Paris Saint-Germain",
      "Inter Milano",
      "AC Milan",
      "Barcelona",
      "Liverpool",
      "Juventus",
      "Atletico Madrid",
      "Borussia Dortmund",
      "Chelsea",
      "Arsenal",
      "Napoli",
    ],
    venues: [
      "Santiago Bernabéu (Madrid)",
      "Camp Nou (Barcelona)",
      "Allianz Arena (Monaco)",
      "Old Trafford (Manchester)",
      "San Siro (Milano)",
      "Parc des Princes (Parigi)",
    ],
    features: [
      "Biglietti per le notti di Champions",
      "Accesso alle fasi finali e alla finale",
      "Hospitality premium con catering gourmet",
      "Tour dello stadio pre-partita",
      "Pacchetti viaggio completi",
      "Esperienze VIP esclusive",
    ],
    highlights: [
      { icon: Trophy, label: "Trofeo Prestigioso", value: "Il più ambito d'Europa" },
      { icon: Shield, label: "Club d'élite", value: "32 squadre top" },
      { icon: Star, label: "Stelle Mondiali", value: "I migliori giocatori" },
      { icon: Crown, label: "Finale Epica", value: "L'evento dell'anno" },
    ],
  },
  "formula-1": {
    id: "formula-1",
    name: "Formula 1",
    sport: "Motorsport",
    description:
      "Il campionato mondiale di automobilismo più prestigioso, dove velocità, tecnologia e abilità si fondono in uno spettacolo mozzafiato.",
    longDescription:
      "La Formula 1 rappresenta l'apice del motorsport mondiale, combinando tecnologia all'avanguardia, piloti eccezionali e circuiti leggendari. Ogni Gran Premio è un'esperienza unica, dal rombo dei motori al profumo della gomma bruciata, dall'adrenalina delle partenze alle strategie di gara. Con il Gran Premio d'Italia a Monza e il Gran Premio di Monaco, la F1 offre momenti di pura emozione e spettacolo, dove ogni millisecondo conta e la gloria eterna attende i vincitori.",
    image: "/formula-1-racing-monza-italy.jpg",
    teams: [
      "Red Bull Racing",
      "Ferrari",
      "Mercedes",
      "McLaren",
      "Aston Martin",
      "Alpine",
      "Williams",
      "AlphaTauri",
      "Alfa Romeo",
      "Haas",
    ],
    venues: [
      "Autodromo di Monza (Italia)",
      "Circuit de Monaco (Monaco)",
      "Silverstone (Regno Unito)",
      "Spa-Francorchamps (Belgio)",
      "Suzuka (Giappone)",
      "Circuit of the Americas (USA)",
    ],
    features: [
      "Paddock Club con vista sulla pit lane",
      "Accesso esclusivo al paddock",
      "Incontri con team e piloti",
      "Hospitality di lusso con chef stellati",
      "Tour dei box e delle auto",
      "Pacchetti weekend completi",
    ],
    highlights: [
      { icon: Trophy, label: "Gran Premi", value: "23 gare mondiali" },
      { icon: Users, label: "Team", value: "10 scuderie d'élite" },
      { icon: MapPin, label: "Circuiti", value: "I più iconici al mondo" },
      { icon: Star, label: "Velocità", value: "Oltre 350 km/h" },
    ],
  },
  "tennis-grand-slam": {
    id: "tennis-grand-slam",
    name: "Tennis Grand Slam",
    sport: "Tennis",
    description:
      "I quattro tornei più prestigiosi del tennis mondiale: Australian Open, Roland Garros, Wimbledon e US Open.",
    longDescription:
      "I tornei del Grande Slam rappresentano l'apice del tennis professionistico, eventi dove i migliori giocatori del mondo competono per i titoli più ambiti. Dagli Australian Open sotto il sole di Melbourne, al Roland Garros sulla terra rossa parigina, dalla tradizione sull'erba di Wimbledon all'energia elettrica degli US Open a New York, ogni torneo offre un'atmosfera unica e indimenticabile. Assistere a un match del Grande Slam significa vivere la storia del tennis, vedere leggende in azione e sentire l'emozione di ogni punto decisivo.",
    image: "/tennis-grand-slam-wimbledon-court.jpg",
    teams: ["Australian Open (Melbourne)", "Roland Garros (Parigi)", "Wimbledon (Londra)", "US Open (New York)"],
    venues: [
      "Rod Laver Arena (Melbourne)",
      "Court Philippe-Chatrier (Parigi)",
      "Centre Court (Wimbledon)",
      "Arthur Ashe Stadium (New York)",
    ],
    features: [
      "Posti centrali con vista perfetta",
      "Accesso ai Royal Box e suite VIP",
      "Hospitality con champagne e gastronomia",
      "Incontri esclusivi con campioni",
      "Tour dei campi storici",
      "Pacchetti multi-torneo disponibili",
    ],
    highlights: [
      { icon: Trophy, label: "Tornei", value: "4 Grand Slam annuali" },
      { icon: Star, label: "Campioni", value: "Le leggende del tennis" },
      { icon: MapPin, label: "Sedi Iconiche", value: "I templi del tennis" },
      { icon: Award, label: "Tradizione", value: "Oltre 100 anni di storia" },
    ],
  },
  motogp: {
    id: "motogp",
    name: "MotoGP",
    sport: "Motorsport",
    description:
      "Il campionato mondiale di motociclismo più prestigioso, dove i piloti più coraggiosi sfidano i limiti su due ruote.",
    longDescription:
      "La MotoGP è l'essenza pura del motociclismo da competizione, dove abilità, coraggio e tecnologia si fondono in uno spettacolo adrenalinico. Con il Gran Premio d'Italia al Mugello e altre gare leggendarie, la MotoGP offre sorpassi mozzafiato, duelli ruota a ruota e momenti di pura magia sportiva. I piloti raggiungono velocità estreme inclinando le moto fino a sfiorare l'asfalto, regalando emozioni uniche a milioni di appassionati. Ogni gara è una battaglia epica dove solo i migliori trionfano.",
    image: "/motogp-racing-mugello-italy.jpg",
    teams: [
      "Ducati Lenovo Team",
      "Repsol Honda Team",
      "Monster Energy Yamaha",
      "Aprilia Racing",
      "Red Bull KTM Factory Racing",
      "Suzuki Ecstar",
      "LCR Honda",
      "Pramac Racing",
      "Gresini Racing",
      "VR46 Racing Team",
    ],
    venues: [
      "Mugello Circuit (Italia)",
      "Circuit de Barcelona-Catalunya (Spagna)",
      "Silverstone Circuit (Regno Unito)",
      "Phillip Island (Australia)",
      "Circuit of the Americas (USA)",
      "Sepang International Circuit (Malesia)",
    ],
    features: [
      "Paddock pass con accesso ai box",
      "Hospitality premium con vista sulla pista",
      "Incontri con piloti e team",
      "Tour del paddock e delle moto",
      "Esperienze VIP esclusive",
      "Pacchetti weekend completi con hotel",
    ],
    highlights: [
      { icon: Trophy, label: "Gran Premi", value: "20 gare mondiali" },
      { icon: Users, label: "Team", value: "Le migliori scuderie" },
      { icon: Star, label: "Piloti", value: "I più coraggiosi al mondo" },
      { icon: MapPin, label: "Circuiti", value: "Piste leggendarie" },
    ],
  },
  "serie-a-basket": {
    id: "serie-a-basket",
    name: "Serie A Basket",
    sport: "Basket",
    description:
      "Il massimo campionato italiano di pallacanestro, dove le migliori squadre si sfidano per il titolo nazionale.",
    longDescription:
      "La Serie A di basket rappresenta l'eccellenza della pallacanestro italiana, con squadre storiche e talenti emergenti che si sfidano in un campionato avvincente. Dalle atmosfere elettrizzanti dei palazzetti alle giocate spettacolari, ogni partita offre emozioni pure e basket di altissimo livello. Con una tradizione ricca e una passione travolgente, la Serie A Basket è il palcoscenico dove nascono le leggende del basket italiano.",
    image: "/italian-basketball-arena-luxury.jpg",
    teams: [
      "Olimpia Milano",
      "Virtus Bologna",
      "Reyer Venezia",
      "Dinamo Sassari",
      "Germani Brescia",
      "Umana Venezia",
      "Fortitudo Bologna",
      "Vanoli Cremona",
      "Openjobmetis Varese",
      "Pallacanestro Trieste",
      "Derthona Basket",
      "Bertram Tortona",
      "Napoli Basket",
      "Pallacanestro Reggiana",
      "Carpegna Prosciutto Pesaro",
      "Tezenis Verona",
    ],
    venues: [
      "Mediolanum Forum (Milano)",
      "Virtus Segafredo Arena (Bologna)",
      "Taliercio (Venezia)",
      "PalaSerradimigni (Sassari)",
      "PalaLeonessa (Brescia)",
    ],
    features: [
      "Posti premium a bordo campo",
      "Accesso VIP alle lounge esclusive",
      "Meet & greet con giocatori",
      "Hospitality con catering gourmet",
      "Pacchetti stagionali disponibili",
      "Esperienze pre-partita esclusive",
    ],
    highlights: [
      { icon: Trophy, label: "Campionato", value: "16 squadre d'élite" },
      { icon: Users, label: "Giocatori", value: "Talenti nazionali e internazionali" },
      { icon: Calendar, label: "Partite", value: "240 match a stagione" },
      { icon: Star, label: "Atmosfera", value: "Palazzetti sold-out" },
    ],
  },
  "superliga-volley": {
    id: "superliga-volley",
    name: "SuperLega Volley",
    sport: "Pallavolo",
    description:
      "Il campionato maschile di pallavolo più prestigioso d'Italia, con le migliori squadre e i campioni mondiali.",
    longDescription:
      "La SuperLega rappresenta l'apice della pallavolo maschile italiana, un campionato che attrae i migliori giocatori del mondo e offre spettacolo puro ad ogni partita. Con squadre storiche e una competizione serrata, ogni match è una battaglia di tecnica, potenza e strategia. Dai servizi devastanti alle schiacciate spettacolari, la SuperLega offre emozioni uniche in palazzetti che vibrano di passione. È il palcoscenico dove si scrive la storia della pallavolo italiana.",
    image: "/italian-volleyball-superliga.jpg",
    teams: [
      "Itas Trentino",
      "Sir Safety Perugia",
      "Cucine Lube Civitanova",
      "Allianz Milano",
      "Gas Sales Piacenza",
      "Vero Volley Monza",
      "Valsa Group Modena",
      "Rana Verona",
      "Gioiella Prisma Taranto",
      "Cisterna Volley",
      "Pallavolo Padova",
      "Emma Villas Siena",
      "Yuasa Grottazzolina",
      "Sonepar Padova",
    ],
    venues: [
      "BLM Group Arena (Trento)",
      "PalaBarton (Perugia)",
      "Eurosuole Forum (Civitanova)",
      "Allianz Cloud (Milano)",
      "PalaBanca (Piacenza)",
    ],
    features: [
      "Posti premium con vista ottimale",
      "Accesso alle lounge VIP",
      "Incontri con campioni olimpici",
      "Hospitality esclusiva",
      "Pacchetti playoff e finali",
      "Esperienze dietro le quinte",
    ],
    highlights: [
      { icon: Trophy, label: "Squadre", value: "14 club d'élite" },
      { icon: Star, label: "Campioni", value: "Medagliati olimpici" },
      { icon: Users, label: "Livello", value: "Top mondiale" },
      { icon: Award, label: "Tradizione", value: "Eccellenza italiana" },
    ],
  },
  "serie-a1-volley-femminile": {
    id: "serie-a1-volley-femminile",
    name: "Serie A1 Femminile",
    sport: "Pallavolo",
    description:
      "Il massimo campionato femminile di pallavolo italiano, dove le migliori atlete si sfidano per la gloria.",
    longDescription:
      "La Serie A1 Femminile è il cuore pulsante della pallavolo femminile italiana, un campionato che combina tecnica raffinata, atletismo e passione pura. Con squadre che hanno fatto la storia della pallavolo mondiale e atlete che rappresentano l'eccellenza del movimento italiano, ogni partita è uno spettacolo di talento e determinazione. Dalle alzate millimetriche ai muri spettacolari, la Serie A1 Femminile offre pallavolo di altissimo livello in un'atmosfera unica.",
    image: "/italian-volleyball-women.jpg",
    teams: [
      "Imoco Volley Conegliano",
      "Prosecco DOC Imoco",
      "Savino Del Bene Scandicci",
      "Vero Volley Milano",
      "Igor Gorgonzola Novara",
      "Reale Mutua Fenera Chieri",
      "Wash4green Pinerolo",
      "Megabox Ondulati del Savio Vallefoglia",
      "Bartoccini-Mc Restauri Perugia",
      "Cuneo Granda Volley",
      "Honda Olivero Cuneo",
      "Bergamo",
    ],
    venues: [
      "Palaverde (Conegliano)",
      "Mandela Forum (Scandicci)",
      "Allianz Cloud (Milano)",
      "PalaIgor (Novara)",
      "PalaBianchini (Chieri)",
    ],
    features: [
      "Posti premium a bordo campo",
      "Accesso VIP alle aree esclusive",
      "Meet & greet con le campionesse",
      "Hospitality di lusso",
      "Pacchetti stagionali e playoff",
      "Esperienze uniche pre-partita",
    ],
    highlights: [
      { icon: Trophy, label: "Squadre", value: "12 club d'élite" },
      { icon: Star, label: "Campionesse", value: "Stelle mondiali" },
      { icon: Award, label: "Titoli", value: "Campioni d'Europa" },
      { icon: Users, label: "Talento", value: "Eccellenza femminile" },
    ],
  },
  "serie-a-pallamano": {
    id: "serie-a-pallamano",
    name: "Serie A Pallamano",
    sport: "Pallamano",
    description:
      "Il campionato nazionale di pallamano, dove velocità, tecnica e strategia si fondono in uno spettacolo dinamico.",
    longDescription:
      "La Serie A di pallamano rappresenta il vertice della pallamano italiana, un campionato che combina l'intensità del gioco veloce con la strategia tattica e l'abilità tecnica. Con azioni fulminee, tiri potenti e difese impenetrabili, ogni partita è un concentrato di adrenalina e spettacolo. Le squadre si sfidano in palazzetti che vibrano di passione, dove ogni secondo può cambiare le sorti del match. È il palcoscenico dove nascono i campioni della pallamano italiana.",
    image: "/italian-handball-championship.jpg",
    teams: [
      "Conversano",
      "Bolzano",
      "Fasano",
      "Pressano",
      "Cassano Magnago",
      "Brixen",
      "Trieste",
      "Merano",
      "Fondi",
      "Siracusa",
      "Carpi",
      "Secchia Rubiera",
      "Eppan",
      "Chiaravalle",
    ],
    venues: [
      "PalaSan Giacomo (Conversano)",
      "PalaResia (Bolzano)",
      "PalaZizzi (Fasano)",
      "Palazzetto dello Sport (Pressano)",
      "PalaMaggiò (Cassano Magnago)",
    ],
    features: [
      "Posti premium con vista ottimale",
      "Accesso alle aree VIP",
      "Incontri con giocatori e staff",
      "Hospitality esclusiva",
      "Pacchetti playoff disponibili",
      "Esperienze dietro le quinte",
    ],
    highlights: [
      { icon: Trophy, label: "Squadre", value: "14 club nazionali" },
      { icon: Users, label: "Giocatori", value: "Talenti italiani e internazionali" },
      { icon: Star, label: "Velocità", value: "Azione continua" },
      { icon: Award, label: "Intensità", value: "Spettacolo puro" },
    ],
  },
  "campionato-italiano-scherma": {
    id: "campionato-italiano-scherma",
    name: "Campionato Italiano Scherma",
    sport: "Scherma",
    description:
      "La competizione nazionale di scherma più prestigiosa, dove eleganza, precisione e velocità si incontrano.",
    longDescription:
      "Il Campionato Italiano di Scherma è il palcoscenico dove si esprime l'eccellenza della scherma italiana, una disciplina che combina tradizione secolare con atletismo moderno. Nelle tre armi - fioretto, spada e sciabola - gli schermidori italiani dimostrano tecnica raffinata, velocità fulminea e strategia tattica. Ogni assalto è un duello di intelligenza e abilità, dove frazioni di secondo decidono la vittoria. È qui che nascono i campioni olimpici e mondiali che portano alto il nome dell'Italia.",
    image: "/italian-fencing-championship.jpg",
    teams: [
      "Aeronautica Militare",
      "Fiamme Oro",
      "Carabinieri",
      "Fiamme Gialle",
      "Club Scherma Roma",
      "Mangiarotti Milano",
      "Pro Vercelli",
      "Frascati Scherma",
    ],
    venues: [
      "Sala d'Armi Mangiarotti (Milano)",
      "Centro Olimpico Giulio Onesti (Roma)",
      "PalaFlorio (Bari)",
      "Palazzetto dello Sport (Torino)",
      "Sala Scherma Nazionale (Bologna)",
    ],
    features: [
      "Posti premium con vista sulle pedane",
      "Accesso alle aree VIP",
      "Incontri con campioni olimpici",
      "Hospitality esclusiva",
      "Tour delle sale d'armi storiche",
      "Esperienze dietro le quinte",
    ],
    highlights: [
      { icon: Trophy, label: "Tradizione", value: "Eccellenza secolare" },
      { icon: Star, label: "Campioni", value: "Medagliati olimpici" },
      { icon: Award, label: "Armi", value: "Fioretto, Spada, Sciabola" },
      { icon: Users, label: "Elite", value: "I migliori schermidori" },
    ],
  },
  "coppa-del-mondo-scherma": {
    id: "coppa-del-mondo-scherma",
    name: "Coppa del Mondo Scherma",
    sport: "Scherma",
    description:
      "Le tappe italiane della Coppa del Mondo FIE, dove i migliori schermidori del pianeta si sfidano per la gloria.",
    longDescription:
      "La Coppa del Mondo di Scherma rappresenta il vertice della competizione internazionale, dove i migliori schermidori del mondo si riuniscono per conquistare punti preziosi nel ranking mondiale. Le tappe italiane sono eventi di prestigio assoluto, che attirano campioni olimpici e mondiali in sale d'armi storiche. Ogni assalto è uno spettacolo di tecnica sublime, velocità impressionante e tattica raffinata. È il palcoscenico dove si scrive la storia della scherma mondiale, con l'Italia protagonista indiscussa.",
    image: "/fencing-world-cup-italy.jpg",
    teams: [
      "Italia",
      "Francia",
      "Corea del Sud",
      "Stati Uniti",
      "Russia",
      "Germania",
      "Ungheria",
      "Cina",
      "Giappone",
      "Polonia",
    ],
    venues: [
      "PalaFlorio (Bari)",
      "Centro Olimpico Giulio Onesti (Roma)",
      "Sala d'Armi Mangiarotti (Milano)",
      "Palazzetto dello Sport (Torino)",
      "Fiera di Padova (Padova)",
    ],
    features: [
      "Posti premium con vista sulle pedane finali",
      "Accesso VIP alle aree esclusive",
      "Incontri con campioni mondiali",
      "Hospitality internazionale",
      "Tour delle competizioni",
      "Esperienze uniche con gli atleti",
    ],
    highlights: [
      { icon: Trophy, label: "Livello", value: "Elite mondiale" },
      { icon: Star, label: "Campioni", value: "Medagliati olimpici" },
      { icon: Award, label: "Prestigio", value: "Coppa del Mondo FIE" },
      { icon: Users, label: "Nazioni", value: "I migliori del mondo" },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(leagues).map((slug) => ({
    slug: slug,
  }))
}

export default async function LeaguePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const league = leagues[slug as keyof typeof leagues]

  if (!league) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={league.image || "/placeholder.svg"} alt={league.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-accent text-accent-foreground">{league.sport}</Badge>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance">{league.name}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            {league.description}
          </p>
          <Button asChild size="lg" className="bg-burgundy hover:bg-burgundy/90 text-cream">
            <Link href="/contatto">Richiedi Informazioni</Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {league.highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="font-serif text-2xl font-bold mb-2">{highlight.value}</div>
                  <div className="text-sm text-muted-foreground">{highlight.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-6 text-center">L'Esperienza</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{league.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">Cosa Include</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {league.features.map((feature, index) => (
              <Card key={index} className="border-border/50 hover:border-accent/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-sm leading-relaxed">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teams/Tournaments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">
            {league.sport === "Tennis"
              ? "Tornei"
              : league.sport === "Motorsport"
                ? "Team"
                : league.sport === "Basket"
                  ? "Squadre"
                  : "Club"}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {league.teams.map((team, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors text-center text-sm"
                >
                  {team}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold mb-12 text-center">Sedi Prestigiose</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {league.venues.map((venue, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{venue}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-accent/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-12 text-center">
              <h2 className="font-serif text-4xl font-bold mb-4">Prenota la Tua Esperienza</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
                Contattaci per ricevere informazioni dettagliate sui pacchetti disponibili e creare un'esperienza su
                misura per te.
              </p>
              <Button asChild size="lg" className="bg-burgundy hover:bg-burgundy/90 text-cream">
                <Link href="/contatto">Richiedi Informazioni</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
