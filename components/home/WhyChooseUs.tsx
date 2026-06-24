'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Crown, Leaf, Sparkles, Heart, Clock, Star } from 'lucide-react'

const reasons = [
  { icon: Crown, title: 'Expert Stylists', desc: 'Certified professionals with years of training and passion.', color: '#D4AF37' },
  { icon: Leaf, title: 'Premium Products', desc: 'International-grade products safe for skin, hair & nails.', color: '#4CAF50' },
  { icon: Sparkles, title: 'Luxury Experience', desc: 'Spa-like atmosphere from the moment you arrive.', color: '#C9956C' },
  { icon: Heart, title: 'Personalized Care', desc: 'Tailored consultations for every unique client.', color: '#E91E8C' },
  { icon: Clock, title: 'On-Time Service', desc: 'We respect your time — zero delays guaranteed.', color: '#9C6B98' },
  { icon: Star, title: '387+ Reviews', desc: '4.7★ rating — happiness guaranteed every visit.', color: '#D4AF37' },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FAF0E6 0%, #FDFAF6 100%)' }}>
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blush/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-rose-gold/10 blur-3xl" />

      <div className="container-luxury relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <span className="badge-luxury mb-4 inline-block">Why GIA's?</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-5 leading-tight">
              The GIA's Difference —<br />
              <span className="gradient-text">Feel It On Day One</span>
            </h2>
            <div className="divider-gold max-w-[200px] mb-7" />
            <p className="font-poppins text-warm-gray leading-relaxed mb-8 text-base">
              We don't just do beauty — we craft experiences. Every visit to GIA's is a journey
              into luxury, confidence, and self-love. Trusted by hundreds of brides, professionals,
              and beauty enthusiasts across Rawalpindi.
            </p>

            {/* Salon image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl mb-8 img-zoom">
              <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=80"
                alt="GIA's Beauty Salon interior" className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-playfair text-lg font-bold">GIA's Beauty Salon</p>
                <p className="text-xs font-poppins text-white/70">Airport Housing Society, Rawalpindi</p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white rounded-3xl p-6 border border-blush/30 shadow-md relative">
              <div className="absolute -top-3 left-6 text-4xl text-blush">"</div>
              <p className="font-playfair text-lg italic text-rose-gold mb-2 pt-2">
                Best salon experience in Rawalpindi — hands down!
              </p>
              <p className="font-poppins text-sm text-warm-gray">— Ayesha M. · Bridal Client</p>
              <div className="flex gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#D4AF37" className="text-champagne" />)}
              </div>
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="grid grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <motion.div key={r.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                className="group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-rose-gold/30 hover:shadow-[0_10px_40px_rgba(201,149,108,0.15)] transition-all duration-400 cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${r.color}15` }}>
                  <r.icon size={22} style={{ color: r.color }} />
                </div>
                <h3 className="font-playfair text-base font-bold text-charcoal mb-2">{r.title}</h3>
                <p className="font-poppins text-xs text-warm-gray leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
