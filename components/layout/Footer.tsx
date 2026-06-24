import Link from 'next/link'
import { Instagram, Phone, MapPin, Clock, Heart, Star } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-rose-gold via-champagne to-rose-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="font-playfair text-3xl font-bold text-rose-gold">GIA's</h2>
              <p className="font-playfair text-sm tracking-[0.3em] uppercase text-blush/70">
                Beauty Salon
              </p>
            </div>
            <p className="text-warm-gray text-sm leading-relaxed mb-4">
              Where Beauty Meets Elegance. Pakistan's premium destination for bridal, hair, skin, nails & total beauty transformation.
            </p>
            <div className="flex items-center gap-1 text-champagne mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < 5 ? '#D4AF37' : 'none'} />
              ))}
              <span className="text-sm text-warm-gray ml-1">4.7/5 · 387 Reviews</span>
            </div>
            <a
              href="https://www.instagram.com/gia_malik_salon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blush hover:text-rose-gold transition-colors"
            >
              <Instagram size={18} />
              @gia_malik_salon
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-cream mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/services', label: 'Our Services' },
                { href: '/bridal', label: 'Bridal Packages' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/reviews', label: 'Reviews' },
                { href: '/booking', label: 'Book Appointment' },
                { href: '/about', label: 'About Us' },
                { href: '/blog', label: 'Beauty Blog' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-gray text-sm hover:text-rose-gold transition-colors hover:pl-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-cream mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Hair Care & Styling',
                'Bridal Makeup',
                'Skin Treatments',
                'Nail Art',
                'Party Makeup',
                'Threading & Waxing',
                'Facials',
                'Keratin Treatment',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-warm-gray text-sm hover:text-rose-gold transition-colors hover:pl-1 inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-cream mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-rose-gold mt-0.5 shrink-0" />
                <p className="text-warm-gray text-sm">
                  St 9, Sector 4, Airport Housing Society,<br />Rawalpindi, Pakistan
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-rose-gold shrink-0" />
                <a href="tel:+923155072704" className="text-warm-gray text-sm hover:text-rose-gold transition-colors">
                  +92 315 5072704
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-rose-gold mt-0.5 shrink-0" />
                <div className="text-warm-gray text-sm">
                  <p>Mon – Sat: 10:00 AM – 9:00 PM</p>
                  <p>Sunday: 11:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923155072704"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium px-4 py-2.5 rounded-full transition-colors w-fit"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-warm-gray text-xs text-center md:text-left">
            © {new Date().getFullYear()} GIA's Beauty Salon. All rights reserved.
          </p>
          <p className="text-warm-gray text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-rose-gold fill-rose-gold" /> in Rawalpindi, Pakistan
          </p>
          <div className="flex items-center gap-4 text-xs text-warm-gray">
            <Link href="/privacy" className="hover:text-rose-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-rose-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
