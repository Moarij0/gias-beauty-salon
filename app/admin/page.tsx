'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Users, Calendar, Star, TrendingUp, Package, Image,
  Tag, BarChart2, ChevronRight, CheckCircle, Clock, XCircle
} from 'lucide-react'

const stats = [
  { label: 'Total Bookings', value: '1,247', change: '+12%', icon: Calendar, color: 'from-rose-gold/20 to-blush/20' },
  { label: 'Revenue (Nov)', value: 'PKR 8.4L', change: '+18%', icon: TrendingUp, color: 'from-champagne/20 to-gold-light/20' },
  { label: 'Total Clients', value: '387', change: '+8%', icon: Users, color: 'from-blush/30 to-light-blush' },
  { label: 'Avg Rating', value: '4.7 ⭐', change: '+0.2', icon: Star, color: 'from-champagne/15 to-blush/20' },
]

const recentBookings = [
  { name: 'Ayesha Khan', service: 'Royal Bridal Package', date: '2024-12-05', time: '10 AM', status: 'CONFIRMED', amount: 50000 },
  { name: 'Sara Ahmed', service: 'Keratin Treatment', date: '2024-12-05', time: '12 PM', status: 'PENDING', amount: 5000 },
  { name: 'Nadia Riaz', service: 'Gel Manicure', date: '2024-12-05', time: '2 PM', status: 'CONFIRMED', amount: 1200 },
  { name: 'Fatima Noor', service: 'Gold Facial', date: '2024-12-04', time: '3 PM', status: 'COMPLETED', amount: 5000 },
  { name: 'Hira Butt', service: 'Party Makeup', date: '2024-12-04', time: '5 PM', status: 'CANCELLED', amount: 2500 },
]

const navItems = [
  { href: '/admin', icon: BarChart2, label: 'Analytics' },
  { href: '/admin/bookings', icon: Calendar, label: 'Bookings' },
  { href: '/admin/services', icon: Package, label: 'Services' },
  { href: '/admin/gallery', icon: Image, label: 'Gallery' },
  { href: '/admin/reviews', icon: Star, label: 'Reviews' },
  { href: '/admin/customers', icon: Users, label: 'Customers' },
  { href: '/admin/staff', icon: Users, label: 'Staff' },
  { href: '/admin/coupons', icon: Tag, label: 'Coupons' },
]

const statusIcon = (s: string) => {
  if (s === 'CONFIRMED') return <CheckCircle size={14} className="text-green-500" />
  if (s === 'PENDING') return <Clock size={14} className="text-yellow-500" />
  if (s === 'CANCELLED') return <XCircle size={14} className="text-red-400" />
  return <CheckCircle size={14} className="text-blue-400" />
}

const popularServices = [
  { name: 'Bridal Packages', bookings: 82, pct: 90 },
  { name: 'Keratin Treatment', bookings: 67, pct: 74 },
  { name: 'Facials', bookings: 54, pct: 59 },
  { name: 'Nail Art', bookings: 48, pct: 53 },
  { name: 'Party Makeup', bookings: 41, pct: 45 },
]

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-60 min-h-screen bg-charcoal shrink-0 sticky top-0">
          <div className="p-6 border-b border-white/10">
            <div className="text-rose-gold font-playfair text-xl font-bold">GIA's Admin</div>
            <p className="text-warm-gray text-xs font-poppins mt-0.5">Management Portal</p>
          </div>
          <nav className="p-4 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-poppins text-warm-gray hover:text-cream hover:bg-white/10 transition-all"
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="p-4 mt-auto">
            <Link href="/" className="font-poppins text-xs text-warm-gray hover:text-cream transition-colors">
              ← View Website
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 overflow-x-hidden">
          <div className="mb-8">
            <h1 className="font-playfair text-3xl font-bold text-charcoal">Dashboard Overview</h1>
            <p className="font-poppins text-sm text-warm-gray mt-1">Welcome back! Here's what's happening at GIA's today.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-5 border border-white/50 shadow-sm`}
              >
                <div className="flex items-start justify-between mb-3">
                  <stat.icon size={20} className="text-rose-gold" />
                  <span className="text-xs font-poppins text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{stat.change}</span>
                </div>
                <p className="font-playfair text-2xl font-bold text-charcoal">{stat.value}</p>
                <p className="font-poppins text-xs text-warm-gray mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent bookings */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-playfair text-lg font-bold text-charcoal">Recent Bookings</h2>
                <Link href="/admin/bookings" className="text-xs text-rose-gold font-poppins hover:underline flex items-center gap-1">
                  View All <ChevronRight size={12} />
                </Link>
              </div>
              <div className="space-y-3">
                {recentBookings.map((b, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blush/30 flex items-center justify-center text-sm font-bold text-rose-gold font-playfair">
                        {b.name[0]}
                      </div>
                      <div>
                        <p className="font-poppins text-sm font-medium text-charcoal">{b.name}</p>
                        <p className="font-poppins text-xs text-warm-gray">{b.service} · {b.date} {b.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end mb-0.5">
                        {statusIcon(b.status)}
                        <span className="font-poppins text-xs text-warm-gray">{b.status}</span>
                      </div>
                      <p className="font-poppins text-xs font-semibold text-charcoal">PKR {b.amount.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular services */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="font-playfair text-lg font-bold text-charcoal mb-5">Popular Services</h2>
              <div className="space-y-4">
                {popularServices.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-poppins text-xs text-charcoal font-medium">{s.name}</span>
                      <span className="font-poppins text-xs text-warm-gray">{s.bookings}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${s.pct}%` }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                        className="h-full rounded-full bg-gradient-to-r from-rose-gold to-champagne"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick actions */}
              <div className="mt-6 pt-5 border-t border-gray-100 space-y-2">
                <p className="font-poppins text-xs font-medium text-charcoal mb-3">Quick Actions</p>
                {[
                  { href: '/admin/services', label: '+ Add Service' },
                  { href: '/admin/gallery', label: '+ Upload Photo' },
                  { href: '/admin/reviews', label: 'Moderate Reviews' },
                ].map(a => (
                  <Link key={a.href} href={a.href}
                    className="block text-xs font-poppins text-rose-gold hover:underline py-1">
                    {a.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
