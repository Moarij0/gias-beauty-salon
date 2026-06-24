'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, Heart, ExternalLink } from 'lucide-react'

const posts = [
  { id: 1, img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80', likes: 342, cat: 'Hair' },
  { id: 2, img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80', likes: 891, cat: 'Bridal' },
  { id: 3, img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80', likes: 213, cat: 'Nails' },
  { id: 4, img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80', likes: 567, cat: 'Makeup' },
  { id: 5, img: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80', likes: 445, cat: 'Skin' },
  { id: 6, img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80', likes: 189, cat: 'Salon' },
  { id: 7, img: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=400&q=80', likes: 732, cat: 'Spa' },
  { id: 8, img: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80', likes: 298, cat: 'Interior' },
  { id: 9, img: 'https://images.unsplash.com/photo-1617938806820-2c3fd10a71dc?w=400&q=80', likes: 411, cat: 'Nail Art' },
]

export default function InstagramGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding bg-ivory">
      <div className="container-luxury">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-12">
          <span className="badge-luxury mb-4 inline-block">Follow Along</span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Beauty in <span className="gradient-text">Every Post</span>
          </h2>
          <div className="divider-gold max-w-xs mx-auto mb-5" />
          <a href="https://www.instagram.com/gia_malik_salon" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-poppins text-warm-gray hover:text-rose-gold transition-colors text-base font-medium">
            <Instagram size={20} className="text-rose-gold" />
            @gia_malik_salon
          </a>
        </motion.div>

        {/* Grid — 3 equal columns, perfect squares on all screen sizes */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-3">
          {posts.map((p, i) => (
            <motion.div key={p.id}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl group"
            >
              <a href="https://www.instagram.com/gia_malik_salon" target="_blank" rel="noopener noreferrer"
                className="absolute inset-0 block">
                <img
                  src={p.img}
                  alt={p.cat}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient always on */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Category label */}
                <div className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2">
                  <span className="font-poppins text-white font-medium text-[9px] sm:text-[11px] bg-black/40 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
                    {p.cat}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center gap-1.5 text-white">
                    <Heart size={16} fill="white" />
                    <span className="font-poppins text-sm font-bold">{p.likes}</span>
                  </div>
                  <ExternalLink size={13} className="text-white/70" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }} className="text-center mt-10">
          <a href="https://www.instagram.com/gia_malik_salon" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-poppins font-semibold text-white px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}>
            <Instagram size={20} />
            Follow on Instagram
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
