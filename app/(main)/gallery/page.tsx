'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Instagram, ExternalLink, Heart } from 'lucide-react'

const categories = ['All', 'Hair', 'Skin', 'Bridal', 'Nails', 'Makeup']

const galleryItems = [
  { id: 1,  cat: 'Bridal', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', label: 'Baraat Bridal Glam',      tall: true  },
  { id: 2,  cat: 'Hair',   img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80', label: 'Balayage Result',         tall: false },
  { id: 3,  cat: 'Nails',  img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80', label: 'French Tip Art',          tall: false },
  { id: 4,  cat: 'Makeup', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80', label: 'Eid Glam Look',           tall: true  },
  { id: 5,  cat: 'Skin',   img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80', label: 'Glow Facial Result',      tall: false },
  { id: 6,  cat: 'Hair',   img: 'https://images.unsplash.com/photo-1560869713-bf8ac8dd4479?w=800&q=80', label: 'Keratin Smoothing',        tall: false },
  { id: 7,  cat: 'Bridal', img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80', label: 'Engagement Makeup',       tall: false },
  { id: 8,  cat: 'Nails',  img: 'https://images.unsplash.com/photo-1604655786521-f1b0e12e4f7a?w=800&q=80', label: 'Nail Art Design',         tall: true  },
  { id: 9,  cat: 'Makeup', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', label: 'Party Glam',             tall: false },
  { id: 10, cat: 'Skin',   img: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=800&q=80', label: 'Gold Facial',            tall: false },
  { id: 11, cat: 'Hair',   img: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80', label: 'Hair Coloring',          tall: false },
  { id: 12, cat: 'Bridal', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', label: 'Valima Look',            tall: true  },
  { id: 13, cat: 'Nails',  img: 'https://images.unsplash.com/photo-1617938806820-2c3fd10a71dc?w=800&q=80', label: 'Gel Extensions',         tall: false },
  { id: 14, cat: 'Makeup', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', label: 'Bridal Makeup',          tall: false },
  { id: 15, cat: 'Hair',   img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80', label: 'Salon Interior',          tall: false },
  { id: 16, cat: 'Skin',   img: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80', label: 'Anti-Aging Treatment',    tall: false },
]

const catColors: Record<string, string> = {
  Hair: '#C9956C', Skin: '#4CAF50', Bridal: '#D4AF37',
  Nails: '#E91E8C', Makeup: '#9C6B98',
}

function LightboxModal({ item, onClose }: { item: typeof galleryItems[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-lg"
      >
        <button onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors z-10 flex items-center gap-2 font-poppins text-sm">
          <X size={20} /> Close
        </button>

        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ height: '70vh', maxHeight: '600px' }}>
          <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
        </div>

        {/* Info card */}
        <div className="bg-white rounded-2xl p-5 mt-3 flex items-center justify-between gap-4">
          <div>
            <span className="inline-block text-xs font-poppins font-semibold px-3 py-1 rounded-full mb-2"
              style={{ background: `${catColors[item.cat]}18`, color: catColors[item.cat] }}>
              {item.cat}
            </span>
            <p className="font-playfair text-lg font-bold text-charcoal">{item.label}</p>
          </div>
          <a href="https://www.instagram.com/gia_malik_salon" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white font-poppins font-medium px-4 py-2.5 rounded-full shrink-0 transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}>
            <Instagram size={14} /> View
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxItem, setLightboxItem] = useState<typeof galleryItems[0] | null>(null)

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(g => g.cat === activeFilter)

  return (
    <div className="min-h-screen bg-ivory">

      {/* ── Hero ── */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-4 gap-0">
          {[
            'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80',
            'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80',
            'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80',
            'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80',
          ].map((img, i) => (
            <img key={i} src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
          ))}
        </div>
        <div className="absolute inset-0 bg-charcoal/78 backdrop-blur-sm" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 mb-5 text-white/80 text-sm font-poppins">
            ✦ Our Portfolio
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-3">
            Our <span className="gradient-text">Gallery</span>
          </h1>
          <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-champagne to-transparent mb-4" />
          <p className="font-poppins text-white/70 max-w-md mx-auto mb-6">
            Real transformations by GIA's team — click any image to explore
          </p>
          <a href="https://www.instagram.com/gia_malik_salon" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-poppins text-sm font-medium px-6 py-2.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition-all">
            <Instagram size={16} /> @gia_malik_salon <ExternalLink size={12} />
          </a>
        </motion.div>
      </section>

      {/* ── Filter bar ── */}
      <div className="sticky top-[68px] z-30 bg-white/96 backdrop-blur border-b border-blush/20 shadow-sm">
        <div className="container-luxury py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-poppins font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-rose-gold text-white shadow-md'
                  : 'bg-blush/20 text-charcoal hover:bg-blush/40'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <section className="section-padding">
        <div className="container-luxury">
          <AnimatePresence mode="wait">
            <motion.div key={activeFilter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}>

              {/* Proper CSS grid — 2 cols mobile, 3 cols tablet, 4 cols desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {filtered.map((item, i) => (
                  <motion.div key={item.id}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className={item.tall ? 'row-span-2' : 'row-span-1'}
                  >
                    <button onClick={() => setLightboxItem(item)}
                      className="relative w-full overflow-hidden rounded-2xl group block shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
                      style={{ height: item.tall ? '100%' : 'auto', minHeight: item.tall ? '360px' : '180px' }}>

                      {/* Image — explicit height so it always shows */}
                      <div className="w-full overflow-hidden" style={{ height: item.tall ? '100%' : '180px', minHeight: item.tall ? '360px' : '180px' }}>
                        <img
                          src={item.img}
                          alt={item.label}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Always-visible gradient + label */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <span className="text-[10px] font-poppins font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full"
                          style={{ background: `${catColors[item.cat]}30`, color: 'white' }}>
                          {item.cat}
                        </span>
                        <p className="font-playfair text-white text-xs font-semibold mt-1 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {item.label}
                        </p>
                      </div>

                      {/* Heart icon on hover */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Heart size={14} className="text-white" />
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Instagram CTA */}
          <div className="text-center mt-12">
            <p className="font-poppins text-warm-gray text-sm mb-4">See more of our work on Instagram</p>
            <a href="https://www.instagram.com/gia_malik_salon" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-poppins font-semibold text-white px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}>
              <Instagram size={20} /> Follow @gia_malik_salon <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxItem && <LightboxModal item={lightboxItem} onClose={() => setLightboxItem(null)} />}
      </AnimatePresence>
    </div>
  )
}
