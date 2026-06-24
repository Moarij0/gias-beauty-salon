'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Users, Scissors, Award } from 'lucide-react'

const stats = [
  { icon: Star, value: '4.7/5', label: 'Average Rating', color: '#D4AF37' },
  { icon: Users, value: '387+', label: 'Happy Clients', color: '#C9956C' },
  { icon: Scissors, value: '40+', label: 'Beauty Services', color: '#F2C4CE' },
  { icon: Award, value: '5+', label: 'Years Experience', color: '#D4AF37' },
]

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-12 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2C2C2C 50%, #1a1a1a 100%)' }}>
      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center px-6 group cursor-default"
            >
              <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${s.color}20`, border: `1px solid ${s.color}40` }}>
                <s.icon size={20} style={{ color: s.color }} />
              </div>
              <p className="font-playfair text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</p>
              <p className="font-poppins text-xs text-white/50 tracking-wide uppercase">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
