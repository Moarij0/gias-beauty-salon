'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Check, Crown, Star, ArrowRight, X } from 'lucide-react'

const packages = [
  {
    id: 'basic',
    name: 'Basic Bridal',
    subtitle: 'Elegant & Beautiful',
    price: 15000,
    emoji: '💍',
    gradient: 'from-blush/40 to-light-blush',
    border: 'border-blush',
    features: [
      'Full Bridal Makeup',
      'Bridal Hair Styling',
      'Dupatta Draping',
      'Basic Eye & Lip Glam',
      'Moisturizing Skin Prep',
      'Touch-Up Kit',
    ],
    popular: false,
  },
  {
    id: 'deluxe',
    name: 'Deluxe Bridal',
    subtitle: 'Radiant & Unforgettable',
    price: 25000,
    emoji: '👑',
    gradient: 'from-rose-gold/20 to-blush/30',
    border: 'border-rose-gold',
    features: [
      'Everything in Basic',
      'Airbrush Foundation',
      'HD Bridal Makeup',
      'Premium Hair Extensions',
      'Dupatta & Veil Draping',
      'Next Day Party Look',
      'Complimentary Eyebrow Shape',
      'Lash Application',
    ],
    popular: true,
  },
  {
    id: 'royal',
    name: 'Royal Bridal',
    subtitle: 'The Ultimate Experience',
    price: 50000,
    emoji: '✨',
    gradient: 'from-champagne/30 to-gold-light/20',
    border: 'border-champagne',
    features: [
      'Everything in Deluxe',
      '3-Session Pre-Bridal Facial',
      'Bridal Hair Spa Treatment',
      'Mehendi Hands Moisturizing',
      '2 Event Looks (Baraat + Valima)',
      'Hairstyle for Both Events',
      'Airbrush for Both Events',
      'Personal Makeup Artist on Call',
      'Touch-Up Kit (Full)',
    ],
    popular: false,
  },
]

const galleryItems = [
  { img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', label: 'Traditional Bridal' },
  { img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80', label: 'Engagement Look' },
  { img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', label: 'Valima Glam' },
  { img: 'https://images.unsplash.com/photo-1594552072238-b8a33785b6cd?w=600&q=80', label: 'Mehndi Bride' },
  { img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', label: 'Royal Bridal' },
  { img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', label: 'Modern Bride' },
]

export default function BridalPage() {
  const [showInquiry, setShowInquiry] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('')
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', weddingDate: '', package: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInquiry = (pkg: string) => {
    setSelectedPackage(pkg)
    setFormData(d => ({ ...d, package: pkg }))
    setShowInquiry(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hi GIA's Bridal Team! 💍\n\n` +
      `I'd like to inquire about the ${formData.package} Package:\n` +
      `👤 Name: ${formData.name}\n` +
      `📱 Phone: ${formData.phone}\n` +
      `📅 Wedding Date: ${formData.weddingDate}\n` +
      `📧 Email: ${formData.email}\n` +
      `📝 Message: ${formData.message || 'No additional notes.'}\n\n` +
      `Please share more details. Thank you!`
    )
    window.open(`https://wa.me/923155072704?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80" alt="Bridal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent" />

        <div className="container-luxury relative z-10 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 mb-6 text-white/80 text-sm font-poppins">
              💍 Bridal Collection
            </span>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Your Dream<br />
              <span className="gradient-text">Wedding Look</span>
            </h1>
            <div className="divider-gold max-w-xs mb-6" />
            <p className="font-poppins text-white/70 max-w-xl text-base leading-relaxed mb-10">
              Every bride deserves to feel like royalty. GIA's expert bridal team creates timeless,
              breathtaking looks that last all day and photograph beautifully.
            </p>
            <button
              onClick={() => setShowInquiry(true)}
              className="btn-gold inline-flex items-center gap-2"
            >
              <Crown size={18} /> Inquire About Bridal Packages
            </button>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-ivory">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <span className="badge-luxury mb-3 inline-block">Bridal Packages</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Choose Your Package
            </h2>
            <div className="divider-gold max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative rounded-3xl border-2 ${pkg.border} overflow-hidden shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-rose-gold text-white text-xs font-poppins font-bold px-3 py-1 rounded-full">
                    ⭐ Most Popular
                  </div>
                )}

                <div className={`bg-gradient-to-br ${pkg.gradient} p-7`}>
                  <span className="text-4xl mb-3 block">{pkg.emoji}</span>
                  <h3 className="font-playfair text-2xl font-bold text-charcoal">{pkg.name}</h3>
                  <p className="font-poppins text-sm text-warm-gray italic mb-4">{pkg.subtitle}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-poppins text-xs text-warm-gray">PKR</span>
                    <span className="font-playfair text-4xl font-bold text-charcoal">
                      {pkg.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="bg-white p-6">
                  <ul className="space-y-2.5 mb-6">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2">
                        <Check size={15} className="text-rose-gold shrink-0 mt-0.5" />
                        <span className="font-poppins text-sm text-charcoal">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleInquiry(pkg.name)}
                      className="btn-luxury w-full text-sm"
                    >
                      Book This Package
                    </button>
                    <Link
                      href={`/booking?serviceId=${pkg.id === 'basic' ? 's17' : pkg.id === 'deluxe' ? 's18' : 's19'}`}
                      className="text-center text-xs text-warm-gray hover:text-rose-gold font-poppins transition-colors py-1"
                    >
                      Or book online →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-3">Bridal Gallery</h2>
            <p className="text-warm-gray font-poppins">Real brides, real transformations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-400">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="font-playfair text-white font-semibold text-sm">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/gallery?category=bridal" className="btn-outline-luxury inline-flex items-center gap-2">
              View Full Bridal Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showInquiry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={e => { if (e.target === e.currentTarget) setShowInquiry(false) }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowInquiry(false)}
                className="absolute top-4 right-4 text-warm-gray hover:text-charcoal transition-colors"
              >
                <X size={20} />
              </button>

              {!submitted ? (
                <>
                  <div className="mb-6">
                    <span className="text-3xl mb-2 block">💍</span>
                    <h3 className="font-playfair text-2xl font-bold text-charcoal">Bridal Inquiry</h3>
                    <p className="font-poppins text-sm text-warm-gray mt-1">
                      {selectedPackage ? `Package: ${selectedPackage}` : 'Tell us about your big day'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Your Name *" required value={formData.name}
                      onChange={e => setFormData(d => ({ ...d, name: e.target.value }))}
                      className="input-luxury" />
                    <input type="tel" placeholder="Phone Number (03XX XXXXXXX) *" required value={formData.phone}
                      onChange={e => setFormData(d => ({ ...d, phone: e.target.value }))}
                      className="input-luxury" />
                    <input type="email" placeholder="Email Address" value={formData.email}
                      onChange={e => setFormData(d => ({ ...d, email: e.target.value }))}
                      className="input-luxury" />
                    <div>
                      <label className="font-poppins text-xs text-warm-gray mb-1 block">Wedding Date *</label>
                      <input type="date" required value={formData.weddingDate}
                        onChange={e => setFormData(d => ({ ...d, weddingDate: e.target.value }))}
                        className="input-luxury" />
                    </div>
                    <select value={formData.package}
                      onChange={e => setFormData(d => ({ ...d, package: e.target.value }))}
                      className="input-luxury">
                      <option value="">Select Package</option>
                      {packages.map(p => <option key={p.id} value={p.name}>{p.name} — PKR {p.price.toLocaleString()}</option>)}
                    </select>
                    <textarea placeholder="Any special requests or questions..." rows={3} value={formData.message}
                      onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                      className="input-luxury resize-none" />
                    <button type="submit" className="btn-luxury w-full">
                      Send Inquiry via WhatsApp
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={28} className="text-green-500" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">Inquiry Sent!</h3>
                  <p className="font-poppins text-sm text-warm-gray mb-4">
                    Your bridal inquiry has been sent via WhatsApp. Our team will respond within 2 hours.
                  </p>
                  <button onClick={() => { setShowInquiry(false); setSubmitted(false) }} className="btn-luxury">
                    Done
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
