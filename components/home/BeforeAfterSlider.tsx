'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const transformations = [
  { label: 'Hair Transformation', category: 'Hair' },
  { label: 'Bridal Glow', category: 'Bridal' },
  { label: 'Skin Revival', category: 'Skin' },
]

function BeforeAfterCard({ label, category }: { label: string; category: string }) {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pos = ((clientX - rect.left) / rect.width) * 100
    setSliderPos(Math.min(Math.max(pos, 5), 95))
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) handleMove(e.clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div className="card-luxury overflow-hidden">
      {/* Before/After container */}
      <div
        ref={containerRef}
        className="before-after-container h-72 select-none"
        onMouseDown={() => { isDragging.current = true }}
        onMouseUp={() => { isDragging.current = false }}
        onMouseLeave={() => { isDragging.current = false }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Before (right side - gray) */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div className="text-center">
            <p className="font-poppins text-gray-500 text-xs uppercase tracking-wider mb-1">Before</p>
            <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto" />
          </div>
        </div>

        {/* After (left side - color) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blush to-rose-gold/40 flex items-center justify-center overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="text-center">
            <p className="font-poppins text-rose-gold text-xs uppercase tracking-wider mb-1">After</p>
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-gold to-champagne mx-auto" />
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg cursor-col-resize"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-rose-gold">
            <svg viewBox="0 0 24 24" fill="none" stroke="#C9956C" strokeWidth="2" className="w-5 h-5">
              <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-3 left-3 bg-black/40 text-white text-xs px-2 py-1 rounded-full font-poppins backdrop-blur-sm">
          BEFORE
        </div>
        <div className="absolute bottom-3 right-3 bg-rose-gold/80 text-white text-xs px-2 py-1 rounded-full font-poppins backdrop-blur-sm">
          AFTER
        </div>
      </div>

      {/* Card info */}
      <div className="p-4">
        <span className="badge-luxury text-xs mb-1">{category}</span>
        <h4 className="font-playfair text-base font-bold text-charcoal">{label}</h4>
        <p className="text-xs text-warm-gray font-poppins mt-1">Drag to compare</p>
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
          className="text-center mb-12"
        >
          <span className="badge-luxury mb-3 inline-block">Real Results</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Before & After
          </h2>
          <div className="divider-gold max-w-xs mx-auto mb-4" />
          <p className="text-warm-gray font-poppins max-w-md mx-auto">
            See the stunning transformations our expert team creates every day. Drag the slider to reveal the magic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <BeforeAfterCard label={t.label} category={t.category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
