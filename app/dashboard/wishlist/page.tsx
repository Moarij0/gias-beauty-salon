'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, ArrowLeft, Trash2, ArrowRight } from 'lucide-react'
import { services, serviceCategories } from '@/lib/data'

const initialWishlist = ['s2', 's16', 's18', 's26', 's32']

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(initialWishlist)
  const wishlistServices = services.filter(s => wishlist.includes(s.id))

  const remove = (id: string) => setWishlist(w => w.filter(x => x !== id))

  return (
    <div className="min-h-screen bg-ivory py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/dashboard" className="text-warm-gray hover:text-rose-gold transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="font-playfair text-3xl font-bold text-charcoal flex items-center gap-2">
              <Heart size={24} className="text-rose-gold" /> My Wishlist
            </h1>
            <p className="font-poppins text-sm text-warm-gray">{wishlist.length} saved services</p>
          </div>
        </div>

        {wishlistServices.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-card">
            <Heart size={48} className="text-blush mx-auto mb-4" />
            <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">Wishlist is empty</h3>
            <p className="font-poppins text-sm text-warm-gray mb-4">Save services you love for easy booking.</p>
            <Link href="/services" className="btn-luxury">Browse Services</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {wishlistServices.map((svc, i) => {
              const cat = serviceCategories.find(c => c.id === svc.categoryId)
              return (
                <motion.div key={svc.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl shadow-card p-5 flex items-center gap-4">
                  <span className="text-3xl shrink-0">{cat?.emoji}</span>
                  <div className="flex-1">
                    <p className="font-playfair text-base font-bold text-charcoal">{svc.name}</p>
                    <p className="font-poppins text-xs text-warm-gray">{svc.description}</p>
                    <p className="font-poppins text-sm font-semibold text-rose-gold mt-1">PKR {svc.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Link href={`/booking?serviceId=${svc.id}`} className="btn-luxury text-xs px-3 py-2 inline-flex items-center gap-1">
                      Book <ArrowRight size={12} />
                    </Link>
                    <button onClick={() => remove(svc.id)} className="p-2 rounded-full hover:bg-red-50 text-warm-gray hover:text-red-400 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
