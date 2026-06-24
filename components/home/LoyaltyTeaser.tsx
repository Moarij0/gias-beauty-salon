'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Gift, Star, Crown, Sparkles } from 'lucide-react'

export default function LoyaltyTeaser() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative overflow-hidden py-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(28,28,28,0.95) 0%, rgba(44,44,44,0.90) 100%)' }} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #C9956C, transparent)' }} />

      <div className="relative z-10 container-luxury">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 border border-champagne/40 rounded-full px-5 py-2.5 mb-7"
              style={{ background: 'rgba(212,175,55,0.1)' }}>
              <Crown size={16} className="text-champagne" />
              <span className="text-champagne text-sm font-poppins font-medium">GIA's Loyalty Club — Coming Soon</span>
            </div>

            <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
              Earn Rewards<br />
              <span className="gradient-text">Every Visit</span>
            </h2>
            <div className="divider-gold max-w-xs mx-auto mb-7" />
            <p className="font-poppins text-white/60 max-w-xl mx-auto mb-12 leading-relaxed text-base">
              Join GIA's exclusive loyalty program and earn beauty points with every appointment.
              Redeem for free services, discounts & VIP perks.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Star, label: 'Earn Points', desc: 'On every service' },
              { icon: Gift, label: 'Free Services', desc: 'Redeem rewards' },
              { icon: Crown, label: 'VIP Access', desc: 'Priority bookings' },
              { icon: Sparkles, label: 'Exclusive Offers', desc: 'Member-only deals' },
            ].map((b, i) => (
              <motion.div key={b.label}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 cursor-default"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(212,175,55,0.2)' }}>
                <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: 'rgba(212,175,55,0.15)' }}>
                  <b.icon size={22} className="text-champagne" />
                </div>
                <p className="font-playfair text-base font-bold text-white mb-1">{b.label}</p>
                <p className="font-poppins text-xs text-white/50">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
            <Link href="/booking"
              className="inline-flex items-center gap-2 text-charcoal font-poppins font-bold px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] text-base"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #F0D060, #D4AF37)' }}>
              <Sparkles size={18} />
              Book Your First Visit
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
