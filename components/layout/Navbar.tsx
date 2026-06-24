'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Instagram, Sparkles } from 'lucide-react'

const promos = [
  '✨ Limited Slots Available This Week — Book Now Before They Fill Up!',
  '💍 Bridal Season Special — Get a Free Consultation with Every Package',
  '⭐ 4.7/5 Rating · 387+ Happy Clients in Rawalpindi',
  '💅 New: Gel Nail Extensions Starting from PKR 1,200 — Book Today!',
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/bridal', label: 'Bridal' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [promoIndex, setPromoIndex] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const t = setInterval(() => setPromoIndex(i => (i + 1) % promos.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {/* ── Promo announcement bar ── */}
      <div className="relative overflow-hidden py-2 px-4 text-center"
        style={{ background: 'linear-gradient(90deg, #C9956C, #D4AF37, #C9956C)' }}>
        <AnimatePresence mode="wait">
          <motion.p key={promoIndex}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="font-poppins text-xs font-medium text-white tracking-wide">
            {promos[promoIndex]}
            <Link href="/booking" className="ml-3 underline underline-offset-2 font-semibold hover:text-white/80 transition-colors">
              Book Now →
            </Link>
          </motion.p>
        </AnimatePresence>
      </div>

      {/* ── Top info bar (desktop) ── */}
      <div className="bg-charcoal text-cream text-xs font-poppins py-2 px-4 text-center hidden md:block">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <span className="flex items-center gap-2">
            <Phone size={12} className="text-rose-gold" />
            <a href="tel:+923155072704" className="hover:text-rose-gold transition-colors">
              +92 315 5072704
            </a>
          </span>
          <span className="text-warm-gray flex items-center gap-1">
            <Sparkles size={11} className="text-champagne" />
            Mon–Sat: 10am–9pm · Sun: 11am–7pm · Airport Housing Society, Rawalpindi
          </span>
          <a
            href="https://www.instagram.com/gia_malik_salon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-rose-gold transition-colors"
          >
            <Instagram size={12} />
            @gia_malik_salon
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white/90 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-tight">
              <span className="font-playfair text-2xl font-bold text-rose-gold tracking-wide">
                GIA's
              </span>
              <span className="font-playfair text-sm text-charcoal tracking-[0.2em] uppercase">
                Beauty Salon
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-poppins text-sm px-4 py-2 rounded-full transition-all duration-200 ${
                    pathname === link.href
                      ? 'text-rose-gold font-semibold bg-blush/20'
                      : 'text-charcoal hover:text-rose-gold hover:bg-blush/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/booking"
                className="btn-luxury text-sm"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-blush/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-charcoal" />
              ) : (
                <Menu size={24} className="text-charcoal" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-blush/20 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block font-poppins text-sm px-4 py-3 rounded-xl transition-colors ${
                      pathname === link.href
                        ? 'text-rose-gold font-semibold bg-blush/20'
                        : 'text-charcoal hover:text-rose-gold hover:bg-blush/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 border-t border-blush/20">
                  <Link
                    href="/booking"
                    className="block text-center btn-luxury text-sm"
                  >
                    Book Appointment
                  </Link>
                  <div className="flex items-center justify-center gap-4 mt-3 text-sm text-warm-gray">
                    <a href="tel:+923155072704" className="flex items-center gap-1 hover:text-rose-gold">
                      <Phone size={14} /> +92 315 5072704
                    </a>
                    <a
                      href="https://www.instagram.com/gia_malik_salon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-rose-gold"
                    >
                      <Instagram size={14} /> Instagram
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
