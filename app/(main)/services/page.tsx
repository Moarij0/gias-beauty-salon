'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Clock, ArrowRight, Filter } from 'lucide-react'
import { services, serviceCategories } from '@/lib/data'
import PageHero from '@/components/ui/PageHero'

const categoryImages: Record<string, string> = {
  'hair-care': 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
  'skin-treatments': 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80',
  'bridal-packages': 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80',
  'nail-art': 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80',
  'makeup': 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80',
  'threading-waxing': 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=400&q=80',
}

function formatPrice(price: number) {
  return `PKR ${price.toLocaleString()}`
}

function formatDuration(mins: number) {
  if (mins < 60) return `${mins} min`
  const h = Math.floor(mins / 60)
  const m = mins % 60
  return m ? `${h}h ${m}m` : `${h}h`
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? services
    : services.filter(s => s.categoryId === activeCategory)

  return (
    <div className="min-h-screen bg-ivory">
      <PageHero
        badge="What We Offer"
        title="Our"
        highlight="Services"
        subtitle="A complete menu of luxury beauty services — from everyday glam to full bridal transformations. All prices in PKR."
        image="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
      />

      {/* Filter tabs */}
      <section className="sticky top-[68px] z-40 bg-white/95 backdrop-blur border-b border-blush/20 shadow-sm">
        <div className="container-luxury">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            <button
              onClick={() => setActiveCategory('all')}
              className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-poppins font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-rose-gold text-white shadow-sm'
                  : 'bg-blush/20 text-charcoal hover:bg-blush/40'
              }`}
            >
              <Filter size={14} />
              All Services
            </button>
            {serviceCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-poppins font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-rose-gold text-white shadow-sm'
                    : 'bg-blush/20 text-charcoal hover:bg-blush/40'
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((service, i) => {
                const cat = serviceCategories.find(c => c.id === service.categoryId)
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="card-luxury group flex flex-col"
                  >
                    {/* Image header */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={categoryImages[service.categoryId] || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80'}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                      <span className="absolute top-3 right-3 badge-luxury bg-white/90 text-xs">{cat?.label}</span>
                      <span className="absolute bottom-3 left-3 text-2xl">{cat?.emoji}</span>
                    </div>
                    <div className="p-5 bg-white flex-1">
                      <h3 className="font-playfair text-lg font-bold text-charcoal mb-1">{service.name}</h3>
                      <p className="font-poppins text-xs text-warm-gray leading-relaxed">{service.description}</p>
                    </div>

                    {/* Footer */}
                    <div className="p-5 flex items-center justify-between mt-auto bg-white">
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="font-playfair text-xl font-bold text-rose-gold">
                            {formatPrice(service.price)}
                          </p>
                          <div className="flex items-center gap-1 text-warm-gray">
                            <Clock size={12} />
                            <span className="text-xs font-poppins">{formatDuration(service.duration)}</span>
                          </div>
                        </div>
                      </div>
                      <Link
                        href={`/booking?serviceId=${service.id}`}
                        className="btn-luxury text-xs px-4 py-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        Book <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-warm-gray">
              <p className="font-playfair text-2xl mb-2">No services found</p>
              <button onClick={() => setActiveCategory('all')} className="btn-luxury mt-4">
                View All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-charcoal py-16 px-4">
        <div className="container-luxury text-center">
          <h2 className="font-playfair text-3xl font-bold text-cream mb-3">
            Can't decide? Let us help!
          </h2>
          <p className="font-poppins text-warm-gray mb-6 max-w-md mx-auto">
            Message us on WhatsApp and our team will recommend the best services for your needs and budget.
          </p>
          <a
            href="https://wa.me/923155072704?text=Hi!%20I'd%20like%20help%20choosing%20a%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
