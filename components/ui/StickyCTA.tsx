'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function StickyCTA() {
  const pathname = usePathname()
  if (pathname === '/booking') return null

  return (
    <div className="sticky-cta md:hidden">
      <Link
        href="/booking"
        className="block w-full text-center btn-luxury py-4 text-base font-semibold"
      >
        ✨ Book Your Appointment
      </Link>
    </div>
  )
}
