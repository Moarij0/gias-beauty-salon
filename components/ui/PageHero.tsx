'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  badge?: string
  title: string
  highlight?: string
  subtitle?: string
  image: string
  overlay?: string
}

export default function PageHero({ badge, title, highlight, subtitle, image, overlay = 'rgba(28,28,28,0.65)' }: PageHeroProps) {
  return (
    <section className="relative h-[420px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${overlay} 0%, rgba(28,28,28,0.4) 100%)` }} />
      </div>

      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent" />

      {/* Sparkles */}
      {['✦','✧','✦'].map((s, i) => (
        <motion.span key={i} className="absolute text-champagne/60 pointer-events-none"
          style={{ top: `${25 + i * 20}%`, left: `${10 + i * 30}%`, fontSize: `${10 + i * 4}px` }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}>
          {s}
        </motion.span>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {badge && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 mb-5">
            <span className="text-white/80 text-sm font-poppins">{badge}</span>
          </motion.div>
        )}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          {title}{highlight && <><br /><span className="gradient-text">{highlight}</span></>}
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="h-px max-w-xs mx-auto mb-4 bg-gradient-to-r from-transparent via-champagne to-transparent" />
        {subtitle && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="font-poppins text-white/70 max-w-lg mx-auto text-base">
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
