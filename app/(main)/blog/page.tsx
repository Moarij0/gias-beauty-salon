'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/data'

const blogImages: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  2: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  3: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80',
  4: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
  5: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
  6: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=600&q=80',
}

const categoryColors: Record<string, string> = {
  Bridal: 'bg-champagne/20 text-champagne',
  Hair: 'bg-rose-gold/20 text-rose-gold',
  Skin: 'bg-blush/30 text-rose-gold',
  Nails: 'bg-light-blush text-rose-gold',
  Makeup: 'bg-blush/20 text-rose-gold',
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80" alt="Blog" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 mb-5 text-white/80 text-sm font-poppins">Beauty Tips & Guides</span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-3">The GIA's <span className="gradient-text">Beauty Blog</span></h1>
          <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-champagne to-transparent mb-3" />
          <p className="font-poppins text-white/70 max-w-md mx-auto">Expert tips, beauty guides, skincare routines, bridal prep & more.</p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-luxury mb-10 overflow-hidden group"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-full overflow-hidden img-zoom">
                <img src={blogImages[featured.id]} alt={featured.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-poppins font-medium px-3 py-1 rounded-full ${categoryColors[featured.category] || 'badge-luxury'}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-warm-gray font-poppins flex items-center gap-1">
                    <Clock size={11} /> {featured.readTime} read
                  </span>
                </div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal mb-3 group-hover:text-rose-gold transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="font-poppins text-sm text-warm-gray leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="font-poppins text-xs text-warm-gray">{featured.date}</span>
                  <Link href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 text-rose-gold font-poppins text-sm font-medium hover:gap-3 transition-all">
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-luxury overflow-hidden group"
              >
                <div className="relative h-44 overflow-hidden img-zoom">
                  <img src={blogImages[post.id]} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-poppins font-medium px-2.5 py-0.5 rounded-full ${categoryColors[post.category] || 'badge-luxury'}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-warm-gray font-poppins flex items-center gap-1">
                      <Clock size={10} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-playfair text-base font-bold text-charcoal mb-2 group-hover:text-rose-gold transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="font-poppins text-xs text-warm-gray leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-poppins text-xs text-warm-gray">{post.date}</span>
                    <Link href={`/blog/${post.slug}`} className="text-xs text-rose-gold font-poppins font-medium hover:underline inline-flex items-center gap-1">
                      Read <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-cream">
        <div className="container-luxury max-w-2xl text-center">
          <h2 className="font-playfair text-3xl font-bold text-charcoal mb-3">Beauty Tips in Your Inbox</h2>
          <p className="font-poppins text-warm-gray mb-6">Subscribe for the latest beauty tips, offers & seasonal guides from GIA's team.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="input-luxury flex-1"
            />
            <button className="btn-luxury shrink-0">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}
