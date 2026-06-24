'use client'

import { useState, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { Check, ChevronRight, Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react'
import { services, serviceCategories, timeSlots } from '@/lib/data'
import toast from 'react-hot-toast'

const categoryImages: Record<string, string> = {
  'hair':      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  'skin':      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80',
  'bridal':    'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  'nails':     'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
  'makeup':    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
  'threading': 'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=600&q=80',
}

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80'

type Step = 1 | 2 | 3 | 4 | 5

interface BookingData {
  categoryId: string
  serviceId: string
  date: string
  timeSlot: string
  name: string
  phone: string
  email: string
  notes: string
}

const STEPS = [
  { num: 1, label: 'Category' },
  { num: 2, label: 'Service' },
  { num: 3, label: 'Date & Time' },
  { num: 4, label: 'Your Info' },
  { num: 5, label: 'Confirm' },
]

function StepIndicator({ current }: { current: Step }) {
  return (
    <div className="flex items-center justify-center mb-8 overflow-x-auto">
      {STEPS.map((step, i) => (
        <div key={step.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
              current > step.num
                ? 'bg-rose-gold text-white'
                : current === step.num
                ? 'bg-rose-gold text-white ring-4 ring-rose-gold/20'
                : 'bg-blush/30 text-warm-gray'
            }`}>
              {current > step.num ? <Check size={16} /> : step.num}
            </div>
            <span className={`text-[10px] font-poppins mt-1 hidden sm:block ${
              current >= step.num ? 'text-rose-gold' : 'text-warm-gray'
            }`}>{step.label}</span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`h-0.5 w-8 sm:w-14 mx-1 transition-all ${
              current > step.num ? 'bg-rose-gold' : 'bg-blush/30'
            }`} />
          )}
        </div>
      ))}
    </div>
  )
}

function BookingContent() {
  const searchParams = useSearchParams()
  const [step, setStep] = useState<Step>(1)
  const [data, setData] = useState<BookingData>({
    categoryId: '',
    serviceId: searchParams.get('serviceId') || '',
    date: '',
    timeSlot: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  const selectedService = services.find(s => s.id === data.serviceId)
  const selectedCategory = serviceCategories.find(c => c.id === data.categoryId)
  const filteredServices = services.filter(s => s.categoryId === data.categoryId)

  if (searchParams.get('serviceId') && !data.categoryId && selectedService) {
    setData(d => ({ ...d, categoryId: selectedService.categoryId }))
  }

  const today = new Date().toISOString().split('T')[0]

  const getWhatsAppMessage = () => {
    const svc = selectedService
    return encodeURIComponent(
      `Hi GIA's Beauty Salon! 🌸\n\nNew Booking Request:\n` +
      `👤 Name: ${data.name}\n` +
      `📱 Phone: +92${data.phone}\n` +
      `💅 Service: ${svc?.name}\n` +
      `📅 Date: ${data.date}\n` +
      `🕐 Time: ${data.timeSlot}\n` +
      `💰 Price: PKR ${svc?.price.toLocaleString()}\n` +
      (data.notes ? `📝 Notes: ${data.notes}\n` : '') +
      `\nPlease confirm my appointment. Thank you!`
    )
  }

  const handleConfirm = () => {
    toast.success("Booking sent! We'll confirm via WhatsApp shortly.")
    window.open(`https://wa.me/923155072704?text=${getWhatsAppMessage()}`, '_blank')
  }

  const serviceImg = selectedService
    ? (categoryImages[selectedService.categoryId] || FALLBACK_IMG)
    : FALLBACK_IMG

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Book Appointment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent" />
        <div className="relative z-10 text-center px-4">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 mb-4 text-white/80 text-sm font-poppins">
            Online Booking
          </span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-2">
            Book Your <span className="gradient-text">Appointment</span>
          </h1>
          <p className="font-poppins text-white/60 text-sm">5 easy steps to your beauty experience</p>
        </div>
      </section>

      <div className="py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <StepIndicator current={step} />

          <div className="bg-white rounded-3xl shadow-card p-6 md:p-8">
            <AnimatePresence mode="wait">

              {/* ── Step 1: Category ── */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  <h2 className="font-playfair text-2xl font-bold text-charcoal mb-6">Choose a Category</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceCategories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => { setData(d => ({ ...d, categoryId: cat.id, serviceId: '' })); setStep(2) }}
                        className={`rounded-2xl border-2 text-left transition-all hover:shadow-lg overflow-hidden group ${
                          data.categoryId === cat.id ? 'border-rose-gold' : 'border-blush/30 hover:border-rose-gold/50'
                        }`}
                      >
                        {/* Category image */}
                        <div className="relative h-28 overflow-hidden">
                          <img
                            src={categoryImages[cat.id] || FALLBACK_IMG}
                            alt={cat.label}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                          <span className="absolute bottom-2 left-2 text-2xl">{cat.emoji}</span>
                          {data.categoryId === cat.id && (
                            <div className="absolute top-2 right-2 w-6 h-6 bg-rose-gold rounded-full flex items-center justify-center">
                              <Check size={13} className="text-white" />
                            </div>
                          )}
                        </div>
                        <div className="p-3 bg-white">
                          <p className="font-playfair text-sm font-bold text-charcoal">{cat.label}</p>
                          <p className="font-poppins text-xs text-warm-gray mt-0.5">
                            {services.filter(s => s.categoryId === cat.id).length} services
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── Step 2: Service ── */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  {/* Selected category banner */}
                  {selectedCategory && (
                    <div className="relative h-24 rounded-2xl overflow-hidden mb-5">
                      <img
                        src={categoryImages[selectedCategory.id] || FALLBACK_IMG}
                        alt={selectedCategory.label}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-charcoal/30" />
                      <div className="absolute inset-0 flex items-center px-5 gap-3">
                        <span className="text-3xl">{selectedCategory.emoji}</span>
                        <div>
                          <p className="font-playfair text-white font-bold text-lg">{selectedCategory.label}</p>
                          <p className="font-poppins text-white/70 text-xs">{filteredServices.length} services available</p>
                        </div>
                        <button onClick={() => setStep(1)} className="ml-auto text-white/70 hover:text-white font-poppins text-xs border border-white/30 px-3 py-1.5 rounded-full transition-colors">
                          Change
                        </button>
                      </div>
                    </div>
                  )}

                  <h2 className="font-playfair text-xl font-bold text-charcoal mb-4">Select a Service</h2>
                  <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
                    {filteredServices.map(svc => (
                      <button
                        key={svc.id}
                        onClick={() => { setData(d => ({ ...d, serviceId: svc.id })); setStep(3) }}
                        className={`w-full rounded-2xl border-2 text-left transition-all hover:shadow-md overflow-hidden flex items-stretch ${
                          data.serviceId === svc.id ? 'border-rose-gold bg-blush/5' : 'border-blush/30 hover:border-rose-gold/40'
                        }`}
                      >
                        {/* Thumbnail */}
                        <div className="w-20 h-20 shrink-0 relative overflow-hidden">
                          <img
                            src={categoryImages[svc.categoryId] || FALLBACK_IMG}
                            alt={svc.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                        </div>
                        {/* Info */}
                        <div className="flex-1 px-4 py-3 flex items-center justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="font-playfair text-sm font-bold text-charcoal truncate">{svc.name}</p>
                            <p className="font-poppins text-xs text-warm-gray mt-0.5 line-clamp-1">{svc.description}</p>
                            <div className="flex items-center gap-3 mt-1.5">
                              <span className="text-xs font-poppins text-rose-gold font-semibold">PKR {svc.price.toLocaleString()}</span>
                              <span className="text-xs text-warm-gray flex items-center gap-1">
                                <Clock size={10} /> {svc.duration} min
                              </span>
                            </div>
                          </div>
                          <ChevronRight size={16} className="text-rose-gold shrink-0" />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── Step 3: Date & Time ── */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  {/* Selected service reminder */}
                  {selectedService && (
                    <div className="flex items-center gap-3 bg-blush/10 rounded-2xl p-3 mb-6 border border-blush/30">
                      <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                        <img src={serviceImg} alt={selectedService.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-playfair text-sm font-bold text-charcoal truncate">{selectedService.name}</p>
                        <p className="font-poppins text-xs text-rose-gold font-semibold">PKR {selectedService.price.toLocaleString()}</p>
                      </div>
                      <button onClick={() => setStep(2)} className="text-xs text-warm-gray hover:text-rose-gold font-poppins shrink-0">Change</button>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-6">
                    <button onClick={() => setStep(2)} className="text-warm-gray hover:text-rose-gold text-sm font-poppins">← Back</button>
                    <h2 className="font-playfair text-xl font-bold text-charcoal">Select Date & Time</h2>
                  </div>

                  <div className="mb-6">
                    <label className="font-poppins text-sm font-medium text-charcoal mb-2 flex items-center gap-2">
                      <Calendar size={16} className="text-rose-gold" /> Appointment Date
                    </label>
                    <input type="date" min={today} value={data.date}
                      onChange={e => setData(d => ({ ...d, date: e.target.value }))}
                      className="input-luxury" />
                  </div>

                  <div>
                    <label className="font-poppins text-sm font-medium text-charcoal mb-3 flex items-center gap-2">
                      <Clock size={16} className="text-rose-gold" /> Available Time Slots
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map(slot => (
                        <button key={slot} onClick={() => setData(d => ({ ...d, timeSlot: slot }))}
                          className={`py-2 px-3 rounded-xl text-xs font-poppins font-medium transition-all border ${
                            data.timeSlot === slot
                              ? 'bg-rose-gold text-white border-rose-gold'
                              : 'bg-blush/10 text-charcoal border-blush/30 hover:border-rose-gold/50'
                          }`}>
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button onClick={() => setStep(4)} disabled={!data.date || !data.timeSlot}
                    className="btn-luxury w-full mt-8 disabled:opacity-40 disabled:cursor-not-allowed">
                    Continue
                  </button>
                </motion.div>
              )}

              {/* ── Step 4: Personal Info ── */}
              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}>
                  {/* Mini service + date reminder */}
                  {selectedService && (
                    <div className="flex items-center gap-3 bg-blush/10 rounded-2xl p-3 mb-6 border border-blush/30">
                      <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                        <img src={serviceImg} alt={selectedService.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-playfair text-sm font-bold text-charcoal truncate">{selectedService.name}</p>
                        <p className="font-poppins text-xs text-warm-gray">{data.date} · {data.timeSlot}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-5">
                    <button onClick={() => setStep(3)} className="text-warm-gray hover:text-rose-gold text-sm font-poppins">← Back</button>
                    <h2 className="font-playfair text-xl font-bold text-charcoal">Your Details</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="font-poppins text-sm font-medium text-charcoal mb-1 flex items-center gap-2">
                        <User size={14} className="text-rose-gold" /> Full Name *
                      </label>
                      <input type="text" placeholder="e.g. Ayesha Khan" value={data.name}
                        onChange={e => setData(d => ({ ...d, name: e.target.value }))} className="input-luxury" />
                    </div>

                    <div>
                      <label className="font-poppins text-sm font-medium text-charcoal mb-1 flex items-center gap-2">
                        <Phone size={14} className="text-rose-gold" /> Phone Number *
                      </label>
                      <div className="flex gap-2">
                        <div className="input-luxury w-20 shrink-0 text-center text-warm-gray text-sm flex items-center justify-center">+92</div>
                        <input type="tel" placeholder="3XX XXXXXXX" value={data.phone}
                          onChange={e => { const val = e.target.value.replace(/\D/g, '').slice(0, 10); setData(d => ({ ...d, phone: val })) }}
                          className="input-luxury flex-1" maxLength={10} />
                      </div>
                    </div>

                    <div>
                      <label className="font-poppins text-sm font-medium text-charcoal mb-1 flex items-center gap-2">
                        <Mail size={14} className="text-rose-gold" /> Email (optional)
                      </label>
                      <input type="email" placeholder="you@example.com" value={data.email}
                        onChange={e => setData(d => ({ ...d, email: e.target.value }))} className="input-luxury" />
                    </div>

                    <div>
                      <label className="font-poppins text-sm font-medium text-charcoal mb-1 flex items-center gap-2">
                        <MessageSquare size={14} className="text-rose-gold" /> Special Requests
                      </label>
                      <textarea placeholder="Any allergies, preferences or special requests..." value={data.notes}
                        onChange={e => setData(d => ({ ...d, notes: e.target.value }))}
                        rows={3} className="input-luxury resize-none" />
                    </div>
                  </div>

                  <button onClick={() => setStep(5)} disabled={!data.name || data.phone.length < 10}
                    className="btn-luxury w-full mt-6 disabled:opacity-40 disabled:cursor-not-allowed">
                    Review Booking
                  </button>
                </motion.div>
              )}

              {/* ── Step 5: Confirmation ── */}
              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}>
                  <div className="text-center mb-5">
                    <h2 className="font-playfair text-2xl font-bold text-charcoal">Booking Summary</h2>
                    <p className="font-poppins text-sm text-warm-gray mt-1">Review your appointment before confirming</p>
                  </div>

                  {/* ★ SERVICE IMAGE BANNER ★ */}
                  {selectedService && (
                    <div className="relative rounded-2xl overflow-hidden mb-5" style={{ height: '160px' }}>
                      <img
                        src={serviceImg}
                        alt={selectedService.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <p className="font-poppins text-white/70 text-xs uppercase tracking-wide mb-0.5">Selected Service</p>
                          <p className="font-playfair text-white font-bold text-xl leading-tight truncate">{selectedService.name}</p>
                          <p className="font-poppins text-white/60 text-xs mt-0.5">{selectedService.duration} min · {selectedCategory?.label}</p>
                        </div>
                        <div className="bg-rose-gold text-white font-poppins font-bold text-base px-4 py-2 rounded-xl shrink-0">
                          PKR {selectedService.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Appointment details */}
                  <div className="rounded-2xl border border-blush/30 overflow-hidden mb-5">
                    <div className="bg-blush/20 px-5 py-3 border-b border-blush/30">
                      <p className="font-poppins text-xs font-semibold text-rose-gold uppercase tracking-wider">Appointment Details</p>
                    </div>
                    <div className="bg-white px-5 py-4 space-y-3 font-poppins text-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-6 text-base">👤</span>
                        <div><span className="text-warm-gray text-xs">Name</span><p className="font-semibold text-charcoal">{data.name}</p></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 text-base">📱</span>
                        <div><span className="text-warm-gray text-xs">Phone</span><p className="font-semibold text-charcoal">+92 {data.phone}</p></div>
                      </div>
                      {data.email && (
                        <div className="flex items-center gap-3">
                          <span className="w-6 text-base">📧</span>
                          <div><span className="text-warm-gray text-xs">Email</span><p className="font-semibold text-charcoal">{data.email}</p></div>
                        </div>
                      )}
                      <div className="border-t border-blush/20 pt-3 flex items-center gap-3">
                        <span className="w-6 text-base">📅</span>
                        <div><span className="text-warm-gray text-xs">Date</span><p className="font-semibold text-charcoal">{data.date}</p></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 text-base">🕐</span>
                        <div><span className="text-warm-gray text-xs">Time</span><p className="font-semibold text-charcoal">{data.timeSlot}</p></div>
                      </div>
                      {data.notes && (
                        <div className="flex items-start gap-3">
                          <span className="w-6 text-base mt-0.5">📝</span>
                          <div><span className="text-warm-gray text-xs">Notes</span><p className="text-charcoal">{data.notes}</p></div>
                        </div>
                      )}
                      <div className="flex items-center gap-3 border-t border-blush/20 pt-3">
                        <span className="w-6 text-base">📍</span>
                        <div><span className="text-warm-gray text-xs">Location</span><p className="text-charcoal text-xs">St 9, Sector 4, Airport Housing Society, Rawalpindi</p></div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-center text-warm-gray font-poppins mb-4">
                    Tapping below will open WhatsApp to send your booking request.
                  </p>

                  <div className="flex flex-col gap-3">
                    <button onClick={handleConfirm}
                      className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-poppins font-semibold py-4 rounded-2xl transition-all shadow-md hover:shadow-lg">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Confirm via WhatsApp
                    </button>
                    <button onClick={() => setStep(4)}
                      className="text-sm text-warm-gray hover:text-rose-gold font-poppins py-2 transition-colors">
                      ← Edit Details
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          <div className="text-center mt-6 text-xs text-warm-gray font-poppins">
            🔒 Your information is safe & secure · No payment required online
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-rose-gold font-playfair text-xl">Loading...</div>
      </div>
    }>
      <BookingContent />
    </Suspense>
  )
}
