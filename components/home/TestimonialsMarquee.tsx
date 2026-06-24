'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Ayesha Khan', service: 'Bridal Makeup', text: "I looked like a queen on my wedding day! GIA's team is absolutely magical. Every detail was perfect.", stars: 5, avatar: 'A' },
  { name: 'Sana Malik', service: 'Keratin Treatment', text: "Best keratin treatment in Rawalpindi. My hair has never felt this silky and smooth!", stars: 5, avatar: 'S' },
  { name: 'Fatima Riaz', service: 'Brightening Facial', text: "My skin is literally glowing after the hydration facial. People kept asking what I did!", stars: 5, avatar: 'F' },
  { name: 'Nadia Ahmed', service: 'Gel Nail Art', text: "The nail art designs are absolutely stunning! Got so many compliments at the wedding.", stars: 5, avatar: 'N' },
  { name: 'Sara Hussain', service: 'Eid Makeup', text: "Loved my eid look! Natural, flawless and long-lasting. Exactly what I wanted.", stars: 5, avatar: 'S' },
  { name: 'Hira Baig', service: 'Balayage Color', text: "The balayage turned out exactly how I showed in the picture. True color experts!", stars: 5, avatar: 'H' },
  { name: 'Zara Ali', service: 'Threading', text: "Perfect brow shaping every single time — they really understand face structure!", stars: 5, avatar: 'Z' },
  { name: 'Maryam Iqbal', service: 'Engagement Makeup', text: "Made my engagement day unforgettable. I cried happy tears seeing myself in the mirror!", stars: 5, avatar: 'M' },
]

const colors = ['#C9956C', '#D4AF37', '#F2C4CE', '#9C6B98', '#C9956C', '#D4AF37', '#F2C4CE', '#9C6B98']

function Card({ t, i }: { t: typeof testimonials[0]; i: number }) {
  return (
    <div className="relative bg-white rounded-3xl p-6 mx-3 w-80 shrink-0 border border-gray-100 hover:border-rose-gold/30 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(201,149,108,0.15)] group">
      <Quote size={32} className="text-blush mb-3 opacity-60" />
      <div className="flex items-center gap-1 mb-3">
        {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} fill="#D4AF37" className="text-champagne" />)}
      </div>
      <p className="font-poppins text-sm text-warm-gray leading-relaxed mb-5 italic">
        "{t.text}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm font-poppins shrink-0"
          style={{ background: `linear-gradient(135deg, ${colors[i % colors.length]}, ${colors[(i + 2) % colors.length]})` }}>
          {t.avatar}
        </div>
        <div>
          <p className="font-poppins text-sm font-semibold text-charcoal">{t.name}</p>
          <p className="font-poppins text-xs text-warm-gray">{t.service}</p>
        </div>
        <div className="ml-auto w-2 h-2 rounded-full bg-green-400 shrink-0" title="Verified" />
      </div>
    </div>
  )
}

export default function TestimonialsMarquee() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const doubled = [...testimonials, ...testimonials]

  return (
    <section ref={ref} className="section-padding overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #2C2C2C 0%, #1a1a1a 100%)' }}>
      {/* BG decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #C9956C, transparent)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />

      {/* Header */}
      <div className="container-luxury mb-14 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-poppins text-white/80 mb-5">
            ✨ Client Love
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
          <div className="divider-gold max-w-xs mx-auto mb-5" />
          <div className="flex items-center justify-center gap-2">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#D4AF37" className="text-champagne" />)}</div>
            <p className="text-white/70 font-poppins text-sm ml-1">
              <strong className="text-white">4.7/5</strong> based on <strong className="text-white">387</strong> verified reviews
            </p>
          </div>
        </motion.div>
      </div>

      {/* Marquee row 1 */}
      <div className="marquee-wrapper mb-5 py-2">
        <div className="marquee-content flex">
          {doubled.map((t, i) => <Card key={i} t={t} i={i} />)}
        </div>
      </div>

      {/* Marquee row 2 reverse */}
      <div className="marquee-wrapper py-2">
        <div className="marquee-content-reverse flex">
          {doubled.slice().reverse().map((t, i) => <Card key={i} t={t} i={i} />)}
        </div>
      </div>
    </section>
  )
}
