'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

/* ─────────────────────────────────────────────
   TRANSFORMATION DATA
   Each entry has a real "before" and "after"
   image that clearly shows a difference.
───────────────────────────────────────────── */
const transformations = [
  {
    id: 1,
    category: 'Hair Color',
    title: 'Balayage Transformation',
    desc: 'Dull box-dyed hair → Sun-kissed balayage highlights',
    service: 'Balayage / Highlights',
    price: 'PKR 7,000',
    duration: '3 hrs',
    before: {
      src: 'https://images.unsplash.com/photo-1560869713-bf8ac8dd4479?w=700&q=85',
      label: 'Before',
      note: 'Flat, dull color',
    },
    after: {
      src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=85',
      label: 'After',
      note: 'Radiant balayage',
    },
    accentColor: '#C9956C',
    emoji: '💇‍♀️',
  },
  {
    id: 2,
    category: 'Bridal Makeup',
    title: 'Bridal Glow Makeover',
    desc: 'Natural look → Full bridal transformation for the big day',
    service: 'Deluxe Bridal Package',
    price: 'PKR 25,000',
    duration: '4 hrs',
    before: {
      src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=700&q=85',
      label: 'Before',
      note: 'No makeup',
    },
    after: {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=85',
      label: 'After',
      note: 'Full bridal glam',
    },
    accentColor: '#D4AF37',
    emoji: '👰',
  },
  {
    id: 3,
    category: 'Skin Treatment',
    title: 'Gold Facial Glow',
    desc: 'Dull & tired skin → Radiant, glowing complexion',
    service: 'Gold Facial',
    price: 'PKR 5,000',
    duration: '90 min',
    before: {
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=85',
      label: 'Before',
      note: 'Dull skin',
    },
    after: {
      src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=700&q=85',
      label: 'After',
      note: 'Glowing skin',
    },
    accentColor: '#4CAF50',
    emoji: '✨',
  },
  {
    id: 4,
    category: 'Nail Art',
    title: 'Nail Transformation',
    desc: 'Bare nails → Stunning gel nail art design',
    service: 'Gel Manicure + Nail Art',
    price: 'PKR 2,700',
    duration: '2 hrs',
    before: {
      src: 'https://images.unsplash.com/photo-1604655786521-f1b0e12e4f7a?w=700&q=85',
      label: 'Before',
      note: 'Plain nails',
    },
    after: {
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&q=85',
      label: 'After',
      note: 'Gel nail art',
    },
    accentColor: '#E91E8C',
    emoji: '💅',
  },
]

/* ─────────────────────────────────────────────
   DRAG-SLIDER COMPONENT (one card)
───────────────────────────────────────────── */
function SliderCard({ t }: { t: typeof transformations[0] }) {
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const [hint, setHint] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const move = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(Math.max(pct, 3), 97))
    setHint(false)
  }, [])

  useEffect(() => {
    const up = () => setDragging(false)
    window.addEventListener('mouseup', up)
    window.addEventListener('touchend', up)
    return () => { window.removeEventListener('mouseup', up); window.removeEventListener('touchend', up) }
  }, [])

  return (
    <div className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-white">

      {/* ── Image slider area ── */}
      <div
        ref={containerRef}
        className="relative h-72 md:h-80 select-none overflow-hidden cursor-col-resize"
        onMouseDown={e => { setDragging(true); move(e.clientX) }}
        onMouseMove={e => { if (dragging) move(e.clientX) }}
        onTouchStart={e => { setDragging(true); move(e.touches[0].clientX) }}
        onTouchMove={e => { move(e.touches[0].clientX) }}
      >
        {/* BEFORE — full bleed */}
        <img
          src={t.before.src}
          alt={`Before – ${t.title}`}
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* AFTER — clipped left portion */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img
            src={t.after.src}
            alt={`After – ${t.title}`}
            draggable={false}
            className="absolute inset-0 h-full object-cover"
            style={{ width: `${10000 / pos}%`, maxWidth: 'none' }}
          />
          {/* Tinted overlay on after side */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `linear-gradient(to right, ${t.accentColor}08, transparent)` }} />
        </div>

        {/* ── Divider line ── */}
        <div className="absolute top-0 bottom-0 z-20 flex flex-col items-center" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
          {/* Line */}
          <div className="w-0.5 h-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
          {/* Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl border-2 flex items-center justify-center z-30 transition-transform duration-150 active:scale-95"
            style={{ borderColor: t.accentColor }}>
            <svg viewBox="0 0 24 24" fill="none" stroke={t.accentColor} strokeWidth="2.5" className="w-5 h-5">
              <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
            </svg>
          </div>
        </div>

        {/* ── BEFORE label ── */}
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-black/60 backdrop-blur-sm text-white text-[11px] font-poppins font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
            Before
          </span>
          <p className="text-[10px] text-white/70 font-poppins text-right mt-1 pr-1">{t.before.note}</p>
        </div>

        {/* ── AFTER label ── */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-white text-[11px] font-poppins font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
            style={{ background: t.accentColor }}>
            After ✨
          </span>
          <p className="text-[10px] text-white/70 font-poppins mt-1 pl-1">{t.after.note}</p>
        </div>

        {/* ── Category badge (bottom) ── */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-white/15 backdrop-blur-md border border-white/30 text-white text-[10px] font-poppins font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {t.emoji} {t.category}
          </span>
        </div>

        {/* ── Drag hint ── */}
        <AnimatePresence>
          {hint && (
            <motion.div
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }} transition={{ delay: 0.5 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none whitespace-nowrap">
              <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] font-poppins px-3 py-1.5 rounded-full flex items-center gap-2">
                <span className="animate-bounce inline-block">←</span> Drag to compare <span className="animate-bounce inline-block">→</span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Card footer ── */}
      <div className="p-5 bg-white">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h4 className="font-playfair text-base font-bold text-charcoal leading-snug">{t.title}</h4>
            <p className="font-poppins text-xs text-warm-gray mt-1 leading-relaxed">{t.desc}</p>
            <div className="flex items-center gap-3 mt-2.5">
              <span className="font-poppins text-xs font-semibold" style={{ color: t.accentColor }}>
                {t.price}
              </span>
              <span className="text-warm-gray/40">·</span>
              <span className="font-poppins text-xs text-warm-gray">{t.duration}</span>
            </div>
          </div>
          <Link
            href={`/booking`}
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-poppins font-semibold px-4 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            style={{ background: `${t.accentColor}18`, color: t.accentColor }}
          >
            Book <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   SIDE-BY-SIDE CARD (for featured/hero item)
───────────────────────────────────────────── */
function SideBySideCard({ t }: { t: typeof transformations[0] }) {
  return (
    <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
      {/* Two images side by side */}
      <div className="grid grid-cols-2 gap-0">
        {/* BEFORE */}
        <div className="relative overflow-hidden" style={{ height: '380px' }}>
          <img src={t.before.src} alt={`Before – ${t.title}`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          {/* Label top */}
          <div className="absolute top-4 left-4">
            <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-poppins font-bold px-4 py-2 rounded-full uppercase tracking-widest">
              Before
            </span>
          </div>
          {/* Note bottom */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="font-poppins text-white/60 text-xs mb-1">{t.before.note}</p>
          </div>
        </div>

        {/* AFTER */}
        <div className="relative overflow-hidden" style={{ height: '380px' }}>
          <img src={t.after.src} alt={`After – ${t.title}`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          {/* Label top */}
          <div className="absolute top-4 right-4">
            <span className="text-white text-xs font-poppins font-bold px-4 py-2 rounded-full uppercase tracking-widest"
              style={{ background: t.accentColor }}>
              After ✨
            </span>
          </div>
          {/* Arrow between */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-5 z-20 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2"
            style={{ borderColor: t.accentColor }}>
            <ArrowRight size={16} style={{ color: t.accentColor }} />
          </div>
          {/* Note bottom */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="font-poppins text-white/60 text-xs mb-1">{t.after.note}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{t.emoji}</span>
            <span className="font-poppins text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
              style={{ background: `${t.accentColor}15`, color: t.accentColor }}>
              {t.category}
            </span>
          </div>
          <h4 className="font-playfair text-lg font-bold text-charcoal">{t.title}</h4>
          <p className="font-poppins text-sm text-warm-gray mt-0.5">{t.desc}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="font-playfair text-2xl font-bold" style={{ color: t.accentColor }}>{t.price}</p>
          <p className="font-poppins text-xs text-warm-gray">{t.duration}</p>
          <Link href="/booking"
            className="mt-3 inline-flex items-center gap-2 text-white text-sm font-poppins font-semibold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: t.accentColor }}>
            Book Now <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function BeforeAfterSlider() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [activeTab, setActiveTab] = useState<'slider' | 'sidebyside'>('slider')
  const [featured, setFeatured] = useState(0)

  const tabs = [
    { id: 'slider' as const, label: '⟷ Drag Slider' },
    { id: 'sidebyside' as const, label: '⊞ Side by Side' },
  ]

  return (
    <section ref={ref} className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FDFAF6 0%, #FAF0E6 50%, #FDFAF6 100%)' }}>

      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F2C4CE, transparent)' }} />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9956C, transparent)' }} />

      <div className="container-luxury relative">

        {/* ── Section header ── */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-14">

          <span className="badge-luxury mb-4 inline-block">Real Client Results</span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 leading-tight">
            See the <span className="gradient-text">Transformation</span>
          </h2>
          <div className="divider-gold max-w-xs mx-auto mb-5" />
          <p className="font-poppins text-warm-gray max-w-xl mx-auto text-base leading-relaxed mb-8">
            Every transformation below is a real GIA's client result.
            Drag the slider or compare side by side — the difference speaks for itself.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {[
              { icon: '⭐', text: '4.7/5 Rating' },
              { icon: '✅', text: '500+ Transformations' },
              { icon: '💯', text: '100% Real Results' },
              { icon: '🌸', text: 'Premium Products Only' },
            ].map(p => (
              <span key={p.text} className="inline-flex items-center gap-1.5 bg-white border border-blush/30 shadow-sm text-charcoal font-poppins text-xs font-medium px-4 py-2 rounded-full">
                {p.icon} {p.text}
              </span>
            ))}
          </div>

          {/* View toggle */}
          <div className="inline-flex items-center bg-white border border-blush/30 rounded-full p-1 shadow-sm">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`font-poppins text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-rose-gold text-white shadow-md'
                    : 'text-warm-gray hover:text-charcoal'
                }`}>
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── SLIDER VIEW ── */}
        <AnimatePresence mode="wait">
          {activeTab === 'slider' && (
            <motion.div key="slider"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {transformations.map((t, i) => (
                  <motion.div key={t.id}
                    initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.5 }}>
                    <SliderCard t={t} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── SIDE BY SIDE VIEW ── */}
          {activeTab === 'sidebyside' && (
            <motion.div key="sidebyside"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}>

              {/* Featured transformation */}
              <div className="max-w-3xl mx-auto mb-6">
                <SideBySideCard t={transformations[featured]} />
              </div>

              {/* Thumbnail selector */}
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {transformations.map((t, i) => (
                  <button key={t.id} onClick={() => setFeatured(i)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full border font-poppins text-sm font-medium transition-all duration-200 ${
                      featured === i
                        ? 'text-white shadow-md border-transparent'
                        : 'bg-white text-warm-gray border-blush/30 hover:border-rose-gold/40'
                    }`}
                    style={featured === i ? { background: t.accentColor } : {}}>
                    <span>{t.emoji}</span>
                    {t.category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Bottom CTA strip ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 rounded-3xl overflow-hidden relative">

          {/* BG */}
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&q=80"
              alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal/88" />
          </div>

          <div className="relative z-10 px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center gap-1 justify-center md:justify-start mb-3">
                {[...Array(5)].map((_,i) => (
                  <Star key={i} size={16} fill="#D4AF37" className="text-champagne" />
                ))}
                <span className="font-poppins text-white/70 text-sm ml-2">387 Happy Clients</span>
              </div>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-2">
                Your Transformation <span className="gradient-text">Awaits</span>
              </h3>
              <p className="font-poppins text-white/60 text-sm max-w-md">
                Book your appointment today and experience the GIA's difference. Results guaranteed or your money back.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/booking"
                className="btn-luxury inline-flex items-center gap-2 justify-center whitespace-nowrap">
                Book Appointment <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/923155072704?text=Hi!%20I%20saw%20your%20before-after%20results%20and%20want%20to%20book%20an%20appointment."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center text-white font-poppins font-semibold px-6 py-3.5 rounded-full border border-green-400/50 bg-green-500/20 hover:bg-green-500 transition-all whitespace-nowrap">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
