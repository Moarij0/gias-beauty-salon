'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    emoji: '💇‍♀️',
    title: 'Hair Care',
    desc: 'Cuts, coloring, keratin, balayage & blowouts by expert stylists',
    price: 'From PKR 800',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    slug: 'hair-care',
    color: '#C9956C',
  },
  {
    emoji: '✨',
    title: 'Skin Treatments',
    desc: 'Facials, hydration therapy, brightening & anti-aging treatments',
    price: 'From PKR 1,500',
    img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80',
    slug: 'skin-treatments',
    color: '#F2C4CE',
  },
  {
    emoji: '👰',
    title: 'Bridal Packages',
    desc: 'Complete bridal transformation — makeup, hair & more for your big day',
    price: 'From PKR 15,000',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    slug: 'bridal-packages',
    color: '#D4AF37',
  },
  {
    emoji: '💅',
    title: 'Nail Art',
    desc: 'Gel, acrylic, extensions & intricate nail art designs',
    price: 'From PKR 500',
    img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
    slug: 'nail-art',
    color: '#E91E8C',
  },
  {
    emoji: '💄',
    title: 'Makeup',
    desc: 'Party, engagement, Eid & everyday glam looks',
    price: 'From PKR 2,000',
    img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
    slug: 'makeup',
    color: '#C9956C',
  },
  {
    emoji: '🌸',
    title: 'Threading & Waxing',
    desc: 'Eyebrows, face, arms & full body waxing',
    price: 'From PKR 200',
    img: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=600&q=80',
    slug: 'threading-waxing',
    color: '#9C6B98',
  },
]

export default function ServicesCarousel() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blush/10 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rose-gold/10 translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container-luxury relative">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="badge-luxury mb-4 inline-block">Our Specialties</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-5">
            Premium Beauty <span className="gradient-text">Services</span>
          </h2>
          <div className="divider-gold max-w-xs mx-auto mb-5" />
          <p className="text-warm-gray font-poppins max-w-lg mx-auto">
            From everyday glam to show-stopping bridal looks — every service crafted with precision & love.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <motion.div key={s.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img src={s.img} alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                {/* Price badge */}
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-rose-gold text-xs font-poppins font-semibold px-3 py-1.5 rounded-full">
                  {s.price}
                </span>
                {/* Emoji */}
                <span className="absolute bottom-4 left-4 text-3xl">{s.emoji}</span>
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">{s.title}</h3>
                <p className="font-poppins text-sm text-warm-gray leading-relaxed mb-5">{s.desc}</p>
                <Link href={`/booking?service=${s.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-poppins font-semibold rounded-full px-5 py-2.5 transition-all duration-300 group-hover:gap-3"
                  style={{ background: `${s.color}15`, color: s.color }}>
                  Book Now <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Hover glow border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-rose-gold/30 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }} className="text-center mt-14">
          <Link href="/services" className="btn-luxury inline-flex items-center gap-2 text-base">
            View All 40+ Services <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
