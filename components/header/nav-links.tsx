"use client"

import Link from "next/link"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/eventi", label: "Eventi" },
  { href: "/sport", label: "Sport" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/contatto", label: "Contatto" },
]

export function NavLinks({ mobile = false, onLinkClick }: { mobile?: boolean; onLinkClick?: () => void }) {
  const linkClass = mobile
    ? "text-sm font-medium hover:text-burgundy transition-colors py-2"
    : "text-sm font-medium hover:text-burgundy transition-colors"

  return (
    <>
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className={linkClass} onClick={onLinkClick}>
          {item.label}
        </Link>
      ))}
    </>
  )
}
