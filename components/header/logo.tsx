import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative">
        <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
      </div>
      <div>
        <div className="font-serif text-2xl font-bold tracking-tight">PASSIONE SPORT</div>
        <div className="text-xs text-muted-foreground tracking-widest">LUXURY SPORTS</div>
      </div>
    </Link>
  )
}
