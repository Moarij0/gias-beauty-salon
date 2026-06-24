'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Send, Check } from 'lucide-react'
import { reviews } from '@/lib/data'

function StarRating({ rating, interactive = false, onRate }: {
  rating: number; interactive?: boolean; onRate?: (r: number) => void
}) {
  const [hover, setHover] = useState(0)
  return (
    <div className="flex items-center gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star
          key={i}
          size={interactive ? 24 : 14}
          fill={i <= (hover || rating) ? '#D4AF37' : 'none'}
          className={`transition-colors ${i <= (hover || rating) ? 'text-champagne' : 'text-gray-300'} ${interactive ? 'cursor-pointer' : ''}`}
          onMouseEnter={() => interactive && setHover(i)}
          onMouseLeave={() => interactive && setHover(0)}
          onClick={() => interactive && onRate?.(i)}
        />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const [formData, setFormData] = useState({ name: '', service: '', rating: 0, comment: '' })
  const [submitted, setSubmitted] = useState(false)
  const [filter, setFilter] = useState(0)

  const filtered = filter ? reviews.filter(r => r.rating === filter) : reviews

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.rating) return
    setSubmitted(true)
  }

  const ratingDist = [5,4,3,2,1].map(r => ({
    r,
    count: reviews.filter(rv => rv.rating === r).length,
    pct: Math.round((reviews.filter(rv => rv.rating === r).length / reviews.length) * 100),
  }))

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80" alt="Reviews" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent" />
        <div className="relative z-10 container-luxury">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 mb-5 text-white/80 text-sm font-poppins">Client Reviews</span>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-3">What Our Clients <span className="gradient-text">Say</span></h1>
            <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-champagne to-transparent mb-4" />
            <div className="flex items-center justify-center gap-2 text-white/70 font-poppins text-sm">
              <span>⭐⭐⭐⭐⭐</span>
              <span><strong className="text-white">4.7/5</strong> based on <strong className="text-white">387</strong> verified reviews</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-luxury">
          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto bg-white rounded-3xl shadow-card p-8 mb-12"
          >
            <div className="flex items-center gap-8 flex-wrap justify-center">
              <div className="text-center">
                <p className="font-playfair text-7xl font-bold text-charcoal">4.7</p>
                <StarRating rating={5} />
                <p className="font-poppins text-sm text-warm-gray mt-1">Based on {reviews.length}+ reviews</p>
              </div>
              <div className="flex-1 min-w-[200px] space-y-2">
                {ratingDist.map(({ r, count, pct }) => (
                  <button
                    key={r}
                    onClick={() => setFilter(filter === r ? 0 : r)}
                    className={`flex items-center gap-3 w-full group hover:bg-blush/10 rounded-lg px-2 py-0.5 transition-colors ${filter === r ? 'bg-blush/20' : ''}`}
                  >
                    <span className="font-poppins text-xs text-warm-gray w-4">{r}</span>
                    <Star size={12} fill="#D4AF37" className="text-champagne" />
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-champagne rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="font-poppins text-xs text-warm-gray w-4">{count}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      {filter > 0 && (
        <div className="bg-white border-b border-blush/20 py-3 px-4 text-center">
          <span className="font-poppins text-sm text-warm-gray">
            Showing {filter}-star reviews ·{' '}
            <button onClick={() => setFilter(0)} className="text-rose-gold underline">Show all</button>
          </span>
        </div>
      )}

      {/* Reviews grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="card-luxury p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-gold to-blush flex items-center justify-center text-white font-bold font-playfair">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-poppins text-sm font-semibold text-charcoal">{review.name}</p>
                      <p className="font-poppins text-xs text-warm-gray">{review.service}</p>
                    </div>
                  </div>
                  <span className="text-xs text-warm-gray font-poppins">{review.date}</span>
                </div>
                <StarRating rating={review.rating} />
                <p className="font-poppins text-sm text-warm-gray leading-relaxed mt-3 line-clamp-4">
                  "{review.comment}"
                </p>
                <div className="mt-3 flex items-center gap-1">
                  <Check size={12} className="text-green-500" />
                  <span className="text-xs text-green-600 font-poppins">Verified Visit</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Review */}
      <section className="section-padding bg-cream">
        <div className="container-luxury max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold text-charcoal mb-2">Share Your Experience</h2>
            <p className="font-poppins text-warm-gray">Your review helps other clients find us — and means the world to our team.</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-10 text-center shadow-card"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={28} className="text-green-500" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">Thank You! 🌸</h3>
              <p className="font-poppins text-warm-gray">Your review has been submitted and will appear after moderation.</p>
              <button onClick={() => { setSubmitted(false); setFormData({ name: '', service: '', rating: 0, comment: '' }) }}
                className="btn-outline-luxury mt-6">Write Another Review</button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-card space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">Your Name *</label>
                  <input type="text" required value={formData.name}
                    onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                    placeholder="e.g. Ayesha Khan" className="input-luxury" />
                </div>
                <div>
                  <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">Service Used *</label>
                  <input type="text" required value={formData.service}
                    onChange={e => setFormData(d => ({ ...d, service: e.target.value }))}
                    placeholder="e.g. Bridal Makeup" className="input-luxury" />
                </div>
              </div>

              <div>
                <label className="font-poppins text-sm font-medium text-charcoal mb-2 block">Your Rating *</label>
                <StarRating rating={formData.rating} interactive onRate={r => setFormData(d => ({ ...d, rating: r }))} />
                {!formData.rating && <p className="text-xs text-rose-gold font-poppins mt-1">Please select a rating</p>}
              </div>

              <div>
                <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">Your Review *</label>
                <textarea required rows={4} value={formData.comment}
                  onChange={e => setFormData(d => ({ ...d, comment: e.target.value }))}
                  placeholder="Tell us about your experience at GIA's Beauty Salon..."
                  className="input-luxury resize-none" />
              </div>

              <button
                type="submit"
                disabled={!formData.rating}
                className="btn-luxury w-full inline-flex items-center justify-center gap-2 disabled:opacity-40"
              >
                <Send size={16} /> Submit Review
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
