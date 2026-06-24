'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Star, Heart, Bell, User, Clock, ChevronRight } from 'lucide-react'

const mockAppointments = [
  { id: 1, service: 'Keratin Treatment', date: '2024-12-05', time: '11:00 AM', status: 'CONFIRMED', price: 5000 },
  { id: 2, service: 'Gel Manicure', date: '2024-11-20', time: '3:00 PM', status: 'COMPLETED', price: 1200 },
  { id: 3, service: 'Brightening Facial', date: '2024-11-10', time: '12:30 PM', status: 'COMPLETED', price: 2800 },
]

const statusColors: Record<string, string> = {
  CONFIRMED: 'bg-green-100 text-green-700',
  PENDING: 'bg-yellow-100 text-yellow-700',
  COMPLETED: 'bg-blue-100 text-blue-700',
  CANCELLED: 'bg-red-100 text-red-700',
}

const navItems = [
  { href: '/dashboard', icon: User, label: 'Overview' },
  { href: '/dashboard/appointments', icon: Calendar, label: 'Appointments' },
  { href: '/dashboard/reviews', icon: Star, label: 'My Reviews' },
  { href: '/dashboard/wishlist', icon: Heart, label: 'Wishlist' },
  { href: '/dashboard/profile', icon: User, label: 'Profile' },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-card p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-gold to-blush flex items-center justify-center mx-auto mb-3 text-2xl text-white font-bold font-playfair">
                  A
                </div>
                <p className="font-playfair text-lg font-bold text-charcoal">Ayesha Khan</p>
                <p className="font-poppins text-xs text-warm-gray">Member since 2023</p>
              </div>
              <nav className="space-y-1">
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-poppins text-warm-gray hover:text-rose-gold hover:bg-blush/10 transition-all"
                  >
                    <item.icon size={16} />
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 pt-4 border-t border-blush/20">
                <Link href="/" className="font-poppins text-xs text-warm-gray hover:text-rose-gold transition-colors">
                  ← Back to Website
                </Link>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="lg:col-span-3 space-y-6">
            {/* Welcome */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-rose-gold/20 to-blush/20 rounded-2xl p-6 border border-blush/30"
            >
              <h1 className="font-playfair text-2xl font-bold text-charcoal mb-1">
                Welcome back, Ayesha! ✨
              </h1>
              <p className="font-poppins text-sm text-warm-gray">
                You have 1 upcoming appointment. Your last visit was on Nov 20.
              </p>
              <Link href="/booking" className="btn-luxury text-sm mt-4 inline-block">
                Book New Appointment
              </Link>
            </motion.div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Total Visits', value: '8', icon: Calendar, color: 'text-rose-gold' },
                { label: 'Upcoming', value: '1', icon: Clock, color: 'text-champagne' },
                { label: 'Reviews Given', value: '3', icon: Star, color: 'text-rose-gold' },
                { label: 'Wishlist', value: '5', icon: Heart, color: 'text-rose-gold' },
              ].map(stat => (
                <div key={stat.label} className="bg-white rounded-2xl p-4 shadow-sm border border-blush/20 text-center">
                  <stat.icon size={20} className={`${stat.color} mx-auto mb-1`} />
                  <p className="font-playfair text-2xl font-bold text-charcoal">{stat.value}</p>
                  <p className="font-poppins text-xs text-warm-gray">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Recent appointments */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-playfair text-xl font-bold text-charcoal">Recent Appointments</h2>
                <Link href="/dashboard/appointments" className="text-xs text-rose-gold font-poppins hover:underline flex items-center gap-1">
                  View All <ChevronRight size={12} />
                </Link>
              </div>
              <div className="space-y-3">
                {mockAppointments.map((apt, i) => (
                  <motion.div
                    key={apt.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-blush/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blush/30 flex items-center justify-center">
                        <Calendar size={16} className="text-rose-gold" />
                      </div>
                      <div>
                        <p className="font-poppins text-sm font-semibold text-charcoal">{apt.service}</p>
                        <p className="font-poppins text-xs text-warm-gray">{apt.date} · {apt.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-poppins font-medium px-2 py-0.5 rounded-full ${statusColors[apt.status]}`}>
                        {apt.status}
                      </span>
                      <p className="font-poppins text-xs text-warm-gray mt-1">PKR {apt.price.toLocaleString()}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-2xl shadow-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Bell size={18} className="text-rose-gold" />
                <h2 className="font-playfair text-xl font-bold text-charcoal">Notifications</h2>
              </div>
              <div className="space-y-3">
                {[
                  { msg: 'Your appointment on Dec 5 has been confirmed! 🎉', time: '2 hours ago', unread: true },
                  { msg: 'Winter Eid special — 20% off all facials this week!', time: '1 day ago', unread: false },
                  { msg: 'Don\'t forget: Your Keratin appointment is tomorrow at 11 AM.', time: '3 days ago', unread: false },
                ].map((n, i) => (
                  <div key={i} className={`p-4 rounded-xl text-sm font-poppins flex gap-3 items-start ${n.unread ? 'bg-blush/10 border border-blush/30' : 'bg-gray-50'}`}>
                    {n.unread && <div className="w-2 h-2 rounded-full bg-rose-gold mt-1 shrink-0" />}
                    <div>
                      <p className={`text-sm ${n.unread ? 'text-charcoal font-medium' : 'text-warm-gray'}`}>{n.msg}</p>
                      <p className="text-xs text-warm-gray mt-0.5">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
