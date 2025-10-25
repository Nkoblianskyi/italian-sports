import type { Metadata } from "next"
import ClientEventiPage from "./client-eventi-page"

export const metadata: Metadata = {
  title: "Eventi Sportivi | Passione Sport",
  description:
    "Esplora tutti gli eventi sportivi premium disponibili - Serie A, Formula 1, Tennis, Basket e molto altro",
}

export default function EventiPage() {
  return <ClientEventiPage />
}
