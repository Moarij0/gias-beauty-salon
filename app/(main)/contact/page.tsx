'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Instagram, Send, Check } from 'lucide-react'

const hours = [
  { day: 'Monday – Friday', time: '10:00 AM – 9:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 9:00 PM' },
  { day: 'Sunday', time: '11:00 AM – 7:00 PM' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hi GIA's Beauty Salon!\n\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n` +
      `Subject: ${form.subject}\n\n${form.message}`
    )
    window.open(`https://wa.me/923155072704?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=80" alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-4">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 mb-5 text-white/80 text-sm font-poppins">Get In Touch</span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-3">Contact <span className="gradient-text">Us</span></h1>
          <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-champagne to-transparent mb-3" />
          <p className="font-poppins text-white/70 max-w-md mx-auto">We'd love to hear from you. Book an appointment, ask a question, or just say hello!</p>
        </motion.div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact info — left */}
            <div className="lg:col-span-2 space-y-6">
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-card border border-blush/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blush/30 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-rose-gold" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-base font-bold text-charcoal mb-1">Our Location</h3>
                    <p className="font-poppins text-sm text-warm-gray leading-relaxed">
                      St 9, Sector 4, Airport Housing Society,<br />Rawalpindi, Pakistan
                    </p>
                    <a
                      href="https://maps.google.com/?q=Airport+Housing+Society+Rawalpindi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-rose-gold font-poppins hover:underline mt-1 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card border border-blush/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blush/30 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-rose-gold" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-base font-bold text-charcoal mb-1">Call / WhatsApp</h3>
                    <a href="tel:+923155072704" className="font-poppins text-sm text-charcoal hover:text-rose-gold transition-colors block">
                      +92 315 5072704
                    </a>
                    <a
                      href="https://wa.me/923155072704"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-green-600 font-poppins hover:underline mt-0.5 inline-block"
                    >
                      💬 Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Instagram */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-white rounded-2xl p-6 shadow-card border border-blush/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shrink-0">
                    <Instagram size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-base font-bold text-charcoal mb-1">Follow Us</h3>
                    <a
                      href="https://www.instagram.com/gia_malik_salon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-poppins text-sm text-charcoal hover:text-rose-gold transition-colors"
                    >
                      @gia_malik_salon
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-card border border-blush/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blush/30 rounded-full flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-rose-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-base font-bold text-charcoal mb-3">Business Hours</h3>
                    <div className="space-y-2">
                      {hours.map(h => (
                        <div key={h.day} className="flex justify-between items-center">
                          <span className="font-poppins text-xs text-warm-gray">{h.day}</span>
                          <span className="font-poppins text-xs font-medium text-charcoal">{h.time}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-poppins text-xs text-green-600 font-medium">Open Now</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact form — right */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-card p-6 md:p-8"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check size={28} className="text-green-500" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">Message Sent! 🌸</h3>
                    <p className="font-poppins text-warm-gray mb-4">
                      Your message has been sent via WhatsApp. We'll respond within a few hours.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn-outline-luxury">Send Another</button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-playfair text-2xl font-bold text-charcoal mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">Full Name *</label>
                          <input type="text" required value={form.name}
                            onChange={e => setForm(d => ({ ...d, name: e.target.value }))}
                            placeholder="Your name" className="input-luxury" />
                        </div>
                        <div>
                          <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">Phone Number</label>
                          <input type="tel" value={form.phone}
                            onChange={e => setForm(d => ({ ...d, phone: e.target.value }))}
                            placeholder="+92 3XX XXXXXXX" className="input-luxury" />
                        </div>
                      </div>
                      <div>
                        <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">Email Address</label>
                        <input type="email" value={form.email}
                          onChange={e => setForm(d => ({ ...d, email: e.target.value }))}
                          placeholder="you@email.com" className="input-luxury" />
                      </div>
                      <div>
                        <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">Subject *</label>
                        <input type="text" required value={form.subject}
                          onChange={e => setForm(d => ({ ...d, subject: e.target.value }))}
                          placeholder="e.g. Bridal Package Inquiry" className="input-luxury" />
                      </div>
                      <div>
                        <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">Message *</label>
                        <textarea required rows={5} value={form.message}
                          onChange={e => setForm(d => ({ ...d, message: e.target.value }))}
                          placeholder="How can we help you?" className="input-luxury resize-none" />
                      </div>
                      <button type="submit" className="btn-luxury w-full inline-flex items-center justify-center gap-2">
                        <Send size={16} /> Send Message via WhatsApp
                      </button>
                    </form>
                  </>
                )}
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 rounded-3xl overflow-hidden shadow-card h-64"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.6!2d73.0679!3d33.6007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM2JzAyLjUiTiA3M8KwMDQnMDQuNCJF!5e0!3m2!1sen!2spk!4v1620000000000!5m2!1sen!2spk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GIA's Beauty Salon Location"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
