"use client"

import { Button } from "@/components/ui/button"
import { NavLinks } from "./nav-links"
import Link from "next/link"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="lg:hidden border-t border-border bg-background">
      <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
        <NavLinks mobile onLinkClick={onClose} />
        <Button asChild className="bg-accent hover:bg-accent/90 mt-4">
          <Link href="/contatto" onClick={onClose}>
            Richiedi Informazioni
          </Link>
        </Button>
      </nav>
    </div>
  )
}
