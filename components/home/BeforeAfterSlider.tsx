'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const transformations = [
  {
    label: 'Hair Color Transformation',
    category: 'Hair',
    before: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
    after:  'https://images.unsplash.com/photo-1560869713-bf8ac8dd4479?w=600&q=80',
    desc:   'Dull to stunning balayage in one session',
  },
  {
    label: 'Bridal Glow Makeup',
    category: 'Bridal',
    before: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80',
    after:  'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    desc:   'Complete bridal transformation for your big day',
  },
  {
    label: 'Skin Revival Facial',
    category: 'Skin',
    before: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
    after:  'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80',
    desc:   'Visible glow after just one gold facial',
  },
]

function BeforeAfterCard({ item }: { item: typeof transformations[0] }) {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pos = ((clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.min(Math.max(pos, 5), 95))
  }, [])

  return (
    <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-400 bg-white group">
      {/* Image container */}
      <div
        ref={containerRef}
        className="relative h-72 select-none cursor-col-resize overflow-hidden"
        onMouseDown={() => { isDragging.current = true }}
        onMouseUp={() => { isDragging.current = false }}
        onMouseLeave={() => { isDragging.current = false }}
        onMouseMove={e => { if (isDragging.current) handleMove(e.clientX) }}
        onTouchMove={e => handleMove(e.touches[0].clientX)}
        onTouchStart={() => { isDragging.current = true }}
        onTouchEnd={() => { isDragging.current = false }}
      >
        {/* BEFORE image (full width background) */}
        <img
          src={item.before}
          alt={`Before - ${item.label}`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* AFTER image (clipped by slider) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={item.after}
            alt={`After - ${item.label}`}
            className="absolute inset-0 h-full object-cover"
            style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: 'none' }}
          />
        </div>

        {/* BEFORE label */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-[10px] font-poppins font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm uppercase tracking-wider">
          Before
        </div>

        {/* AFTER label */}
        <div className="absolute bottom-3 left-3 bg-rose-gold/90 text-white text-[10px] font-poppins font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
          After ✨
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl z-10"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-rose-gold z-20">
            <svg viewBox="0 0 24 24" fill="none" stroke="#C9956C" strokeWidth="2.5" className="w-5 h-5">
              <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
            </svg>
          </div>
        </div>

        {/* Drag hint (fades after first drag) */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black/40 text-white text-[10px] font-poppins px-3 py-1 rounded-full backdrop-blur-sm opacity-80 group-hover:opacity-0 transition-opacity pointer-events-none whitespace-nowrap">
          ← Drag to compare →
        </div>
      </div>

      {/* Card info */}
      <div className="p-5 bg-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="inline-block text-[10px] font-poppins font-semibold bg-blush/30 text-rose-gold px-2.5 py-0.5 rounded-full mb-2 uppercase tracking-wide">
              {item.category}
            </span>
            <h4 className="font-playfair text-base font-bold text-charcoal leading-tight">{item.label}</h4>
            <p className="font-poppins text-xs text-warm-gray mt-1">{item.desc}</p>
          </div>
          <Link href="/booking"
            className="shrink-0 text-xs font-poppins font-semibold text-rose-gold bg-blush/20 hover:bg-rose-gold hover:text-white px-3 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfterSlider() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-ivory">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-luxury mb-4 inline-block">Real Results</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Before & <span className="gradient-text">After</span>
          </h2>
          <div className="divider-gold max-w-xs mx-auto mb-5" />
          <p className="text-warm-gray font-poppins max-w-lg mx-auto text-base">
            See the real transformations our expert team delivers every day.
            Drag the slider to reveal the magic ✨
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((t, i) => (
            <motion.div key={t.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}>
              <BeforeAfterCard item={t} />
            </motion.div>
          ))}
        </div>

        {/* Trust strip below */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 text-center">
          {[
            { n: '500+', l: 'Transformations done' },
            { n: '100%', l: 'Natural ingredients' },
            { n: '4.7★', l: 'Average result rating' },
          ].map(s => (
            <div key={s.l} className="flex items-center gap-2">
              <span className="font-playfair text-2xl font-bold text-rose-gold">{s.n}</span>
              <span className="font-poppins text-xs text-warm-gray">{s.l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
