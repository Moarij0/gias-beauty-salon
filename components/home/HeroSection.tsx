'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Star, ArrowRight, Sparkles, Phone, MapPin, Instagram } from 'lucide-react'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Real salon background via Unsplash */}
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Luxury salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${4 + (i % 3) * 4}px`,
            height: `${4 + (i % 3) * 4}px`,
            background: i % 2 === 0 ? '#D4AF37' : '#F2C4CE',
            top: `${10 + i * 10}%`,
            left: `${5 + (i % 4) * 20}%`,
            opacity: 0.6,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      {/* Gold sparkles */}
      {['✦', '✧', '✦', '✧', '✦'].map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-champagne pointer-events-none"
          style={{ top: `${20 + i * 15}%`, right: `${8 + (i % 3) * 12}%`, fontSize: `${12 + i * 3}px` }}
          animate={{ opacity: [0.1, 1, 0.1], scale: [0.8, 1.3, 0.8], rotate: [0, 180, 360] }}
          transition={{ duration: 3 + i * 0.6, repeat: Infinity, delay: i * 0.5 }}
        >
          {s}
        </motion.span>
      ))}

      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <div>
            {/* Trust badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#D4AF37" className="text-champagne" />)}
              </div>
              <span className="text-white/90 text-sm font-poppins">
                <span className="font-bold text-white">4.7/5</span> · 387 Verified Reviews
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            {/* Heading */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" className="mb-6">
              <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white">
                GIA's
                <br />
                <span className="gradient-text">Beauty</span>
                <br />
                Salon
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="font-playfair italic text-2xl text-blush mb-5">
              "Where Beauty Meets Elegance"
            </motion.p>

            {/* Description */}
            <motion.p custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="font-poppins text-white/75 text-base leading-relaxed mb-10 max-w-lg">
              Rawalpindi's premier destination for bridal makeovers, luxurious hair treatments,
              glowing skin care & flawless nail art — in Airport Housing Society.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/booking"
                className="btn-luxury inline-flex items-center gap-2 justify-center text-base group">
                <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                Book Appointment
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 justify-center text-base font-poppins font-medium
                           text-white border-2 border-white/30 px-8 py-3.5 rounded-full
                           hover:bg-white hover:text-charcoal transition-all duration-300 group backdrop-blur-sm">
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap gap-8">
              {[
                { n: '387+', l: 'Happy Clients' },
                { n: '5+', l: 'Years Experience' },
                { n: '40+', l: 'Services' },
                { n: '100%', l: 'Satisfaction' },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="font-playfair text-3xl font-bold gradient-text">{s.n}</p>
                  <p className="font-poppins text-xs text-white/60 mt-1">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Info Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:flex flex-col gap-5"
          >
            {/* Big review card */}
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }}
              className="card-glass p-6 border border-white/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-gold to-blush flex items-center justify-center text-white font-bold text-lg font-playfair">
                  A
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm font-poppins">Ayesha Khan</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#D4AF37" className="text-champagne" />)}
                  </div>
                </div>
                <span className="ml-auto text-xs text-warm-gray font-poppins">2 days ago</span>
              </div>
              <p className="text-sm text-warm-gray font-poppins leading-relaxed italic">
                "Absolutely stunning bridal makeup! GIA made me feel like a queen on my special day. The entire team is so professional."
              </p>
            </motion.div>

            {/* Two small cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 3.5, repeat: Infinity }}
                className="card-glass p-5 border border-white/30 text-center">
                <div className="text-3xl mb-2">👑</div>
                <p className="font-playfair font-bold text-charcoal text-sm">Bridal Special</p>
                <p className="text-xs text-warm-gray font-poppins mt-1">Royal Package from PKR 50K</p>
              </motion.div>
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4.5, repeat: Infinity }}
                className="card-glass p-5 border border-white/30 text-center">
                <div className="text-3xl mb-2">💅</div>
                <p className="font-playfair font-bold text-charcoal text-sm">Nail Art</p>
                <p className="text-xs text-warm-gray font-poppins mt-1">50+ Designs Available</p>
              </motion.div>
            </div>

            {/* Contact info */}
            <div className="card-glass p-5 border border-white/30 space-y-3">
              {[
                { icon: <Phone size={14} />, text: '0315 5072704' },
                { icon: <MapPin size={14} />, text: 'St 9, Sector 4, Airport Housing Society' },
                { icon: <Instagram size={14} />, text: '@gia_malik_salon' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-rose-gold">{item.icon}</span>
                  <span className="text-sm text-charcoal font-poppins">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}>
        <p className="text-white/50 text-xs font-poppins tracking-widest uppercase">Scroll</p>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
