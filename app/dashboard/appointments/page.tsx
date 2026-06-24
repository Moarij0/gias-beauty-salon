'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Plus } from 'lucide-react'

const appointments = [
  { id: 1, service: 'Keratin Treatment', date: '2024-12-05', time: '11:00 AM', status: 'CONFIRMED', price: 5000, duration: '2h' },
  { id: 2, service: 'Gel Manicure', date: '2024-11-20', time: '3:00 PM', status: 'COMPLETED', price: 1200, duration: '1h' },
  { id: 3, service: 'Brightening Facial', date: '2024-11-10', time: '12:30 PM', status: 'COMPLETED', price: 2800, duration: '1h 15m' },
  { id: 4, service: 'Party Makeup', date: '2024-10-28', time: '5:00 PM', status: 'COMPLETED', price: 2500, duration: '1h 30m' },
  { id: 5, service: 'Eyebrow Threading', date: '2024-10-15', time: '2:00 PM', status: 'COMPLETED', price: 200, duration: '15m' },
]

const statusBadge: Record<string, string> = {
  CONFIRMED: 'bg-green-100 text-green-700 border-green-200',
  PENDING: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  COMPLETED: 'bg-blue-100 text-blue-700 border-blue-200',
  CANCELLED: 'bg-red-100 text-red-700 border-red-200',
}

export default function AppointmentsPage() {
  const upcoming = appointments.filter(a => a.status === 'CONFIRMED' || a.status === 'PENDING')
  const past = appointments.filter(a => a.status === 'COMPLETED' || a.status === 'CANCELLED')

  return (
    <div className="min-h-screen bg-ivory py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/dashboard" className="inline-flex items-center gap-1 text-warm-gray hover:text-rose-gold font-poppins text-sm mb-2 transition-colors">
              <ArrowLeft size={14} /> Dashboard
            </Link>
            <h1 className="font-playfair text-3xl font-bold text-charcoal">My Appointments</h1>
          </div>
          <Link href="/booking" className="btn-luxury text-sm inline-flex items-center gap-2">
            <Plus size={16} /> Book New
          </Link>
        </div>

        {upcoming.length > 0 && (
          <section className="mb-8">
            <h2 className="font-playfair text-xl font-bold text-charcoal mb-4">Upcoming</h2>
            <div className="space-y-3">
              {upcoming.map((apt, i) => (
                <motion.div key={apt.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 shadow-card border border-blush/20 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blush to-light-blush flex items-center justify-center">
                      <Calendar size={20} className="text-rose-gold" />
                    </div>
                    <div>
                      <p className="font-playfair text-base font-bold text-charcoal">{apt.service}</p>
                      <p className="font-poppins text-sm text-warm-gray">{apt.date} · {apt.time}</p>
                      <div className="flex items-center gap-1 mt-1 text-warm-gray">
                        <Clock size={12} /><span className="text-xs font-poppins">{apt.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`text-xs font-poppins font-medium px-2.5 py-1 rounded-full border ${statusBadge[apt.status]}`}>{apt.status}</span>
                    <p className="font-poppins text-sm font-semibold text-charcoal mt-1">PKR {apt.price.toLocaleString()}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="font-playfair text-xl font-bold text-charcoal mb-4">Past Appointments</h2>
          <div className="space-y-3">
            {past.map((apt, i) => (
              <motion.div key={apt.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center justify-between gap-4 opacity-80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Calendar size={20} className="text-warm-gray" />
                  </div>
                  <div>
                    <p className="font-playfair text-base font-bold text-charcoal">{apt.service}</p>
                    <p className="font-poppins text-sm text-warm-gray">{apt.date} · {apt.time}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className={`text-xs font-poppins font-medium px-2.5 py-1 rounded-full border ${statusBadge[apt.status]}`}>{apt.status}</span>
                  <p className="font-poppins text-sm text-warm-gray mt-1">PKR {apt.price.toLocaleString()}</p>
                  <Link href="/reviews" className="text-xs text-rose-gold font-poppins hover:underline mt-0.5 inline-block">Leave Review</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
