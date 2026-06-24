'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Instagram, ExternalLink } from 'lucide-react'

const categories = ['All', 'Hair', 'Skin', 'Bridal', 'Nails', 'Makeup']

const galleryItems = [
  { id: 1, cat: 'Bridal', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', label: 'Baraat Bridal Glam', span: true },
  { id: 2, cat: 'Hair', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80', label: 'Balayage Result' },
  { id: 3, cat: 'Nails', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', label: 'French Tip Art' },
  { id: 4, cat: 'Makeup', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', label: 'Eid Glam Look', span: true },
  { id: 5, cat: 'Skin', img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80', label: 'Glow Facial Result' },
  { id: 6, cat: 'Hair', img: 'https://images.unsplash.com/photo-1560869713-bf8ac8dd4479?w=600&q=80', label: 'Keratin Smoothing' },
  { id: 7, cat: 'Bridal', img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', label: 'Engagement Makeup' },
  { id: 8, cat: 'Nails', img: 'https://images.unsplash.com/photo-1617938806820-2c3fd10a71dc?w=600&q=80', label: 'Nail Art Design', span: true },
  { id: 9, cat: 'Makeup', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', label: 'Party Glam' },
  { id: 10, cat: 'Skin', img: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=600&q=80', label: 'Gold Facial' },
  { id: 11, cat: 'Hair', img: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80', label: 'Hair Coloring' },
  { id: 12, cat: 'Bridal', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', label: 'Valima Look' },
  { id: 13, cat: 'Nails', img: 'https://images.unsplash.com/photo-1604655786521-f1b0e12e4f7a?w=600&q=80', label: 'Gel Extensions' },
  { id: 14, cat: 'Makeup', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', label: 'Bridal Makeup', span: true },
  { id: 15, cat: 'Hair', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', label: 'Salon Interior' },
  { id: 16, cat: 'Skin', img: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80', label: 'Anti-Aging Treatment' },
]

function LightboxModal({ item, onClose }: { item: typeof galleryItems[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="relative max-w-sm w-full"
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="w-full aspect-square rounded-3xl overflow-hidden">
          <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
        </div>

        <div className="bg-white rounded-2xl p-4 mt-3 text-center">
          <p className="font-playfair text-lg font-bold text-charcoal mb-2">{item.label}</p>
          <a
            href="https://www.instagram.com/gia_malik_salon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-rose-gold font-poppins hover:underline"
          >
            <Instagram size={14} /> View on Instagram
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
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-4 gap-0">
          {['https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80','https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80','https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80','https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80'].map((img, i) => (
            <img key={i} src={img} alt="" className="w-full h-full object-cover" />
          ))}
          <div className="absolute inset-0 bg-charcoal/75 backdrop-blur-sm" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 mb-5 text-white/80 text-sm font-poppins">Portfolio</span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-3">Our <span className="gradient-text">Gallery</span></h1>
          <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-champagne to-transparent mb-4" />
          <p className="font-poppins text-white/70 max-w-md mx-auto mb-6">A glimpse into the magic we create every day — click any image to explore.</p>
          <a href="https://www.instagram.com/gia_malik_salon" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white font-poppins text-sm px-6 py-2.5 rounded-full hover:bg-white/20 transition-all">
            <Instagram size={16} /> @gia_malik_salon <ExternalLink size={12} />
          </a>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="sticky top-[68px] z-30 bg-white/95 backdrop-blur border-b border-blush/20 shadow-sm py-3 px-4">
        <div className="container-luxury flex gap-2 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-poppins font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-rose-gold text-white'
                  : 'bg-blush/20 text-charcoal hover:bg-blush/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="section-padding">
        <div className="container-luxury">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="masonry-grid"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="masonry-item"
                >
                  <button onClick={() => setLightboxItem(item)}
                    className="w-full rounded-2xl overflow-hidden group relative shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
                    style={{ aspectRatio: item.span ? '3/4' : '1/1' }}>
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="badge-luxury text-xs block mb-1">{item.cat}</span>
                      <p className="font-playfair text-xs text-white font-semibold">{item.label}</p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <LightboxModal item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
