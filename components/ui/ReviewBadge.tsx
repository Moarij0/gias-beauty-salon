'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function ReviewBadge() {
  return (
    <motion.div
      className="review-badge fixed left-4 bottom-24 md:bottom-8 z-40 hidden sm:block"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2, type: 'spring' }}
    >
      <div className="bg-white rounded-2xl shadow-luxury p-3 border border-blush/30 flex items-center gap-2.5 max-w-[160px]">
        <div className="flex -space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-gold to-blush border-2 border-white flex items-center justify-center text-white text-xs font-bold"
            >
              {['A', 'S', 'F'][i]}
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill="#D4AF37" className="text-champagne" />
            ))}
          </div>
          <p className="text-[10px] font-poppins font-semibold text-charcoal leading-tight">
            4.7 · 387 reviews
          </p>
        </div>
      </div>
    </motion.div>
  )
}
