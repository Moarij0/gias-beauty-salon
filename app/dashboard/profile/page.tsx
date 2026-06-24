'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Save, User, Mail, Phone, Camera } from 'lucide-react'
import toast from 'react-hot-toast'

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: 'Ayesha Khan', email: 'ayesha@email.com', phone: '3155072704',
    city: 'Rawalpindi', birthday: '1995-05-15'
  })

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Profile updated successfully!')
  }

  return (
    <div className="min-h-screen bg-ivory py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/dashboard" className="text-warm-gray hover:text-rose-gold transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="font-playfair text-3xl font-bold text-charcoal">Profile Settings</h1>
        </div>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-card p-6 md:p-8">
          {/* Avatar */}
          <div className="flex items-center gap-5 mb-8 pb-6 border-b border-blush/20">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-gold to-blush flex items-center justify-center text-white font-playfair text-3xl font-bold">
                A
              </div>
              <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-rose-gold rounded-full flex items-center justify-center text-white shadow-md hover:bg-deep-rose transition-colors">
                <Camera size={12} />
              </button>
            </div>
            <div>
              <p className="font-playfair text-xl font-bold text-charcoal">{form.name}</p>
              <p className="font-poppins text-sm text-warm-gray">{form.email}</p>
              <span className="badge-luxury text-xs mt-1">GIA's Member</span>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 flex items-center gap-2">
                  <User size={14} className="text-rose-gold" /> Full Name
                </label>
                <input type="text" value={form.name} onChange={e => setForm(d => ({ ...d, name: e.target.value }))}
                  className="input-luxury" />
              </div>
              <div>
                <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 flex items-center gap-2">
                  <Mail size={14} className="text-rose-gold" /> Email
                </label>
                <input type="email" value={form.email} onChange={e => setForm(d => ({ ...d, email: e.target.value }))}
                  className="input-luxury" />
              </div>
            </div>

            <div>
              <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 flex items-center gap-2">
                <Phone size={14} className="text-rose-gold" /> Phone Number
              </label>
              <div className="flex gap-2">
                <div className="input-luxury w-16 text-center text-warm-gray text-sm shrink-0">+92</div>
                <input type="tel" value={form.phone} onChange={e => setForm(d => ({ ...d, phone: e.target.value }))}
                  className="input-luxury flex-1" maxLength={10} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">City</label>
                <input type="text" value={form.city} onChange={e => setForm(d => ({ ...d, city: e.target.value }))}
                  className="input-luxury" placeholder="e.g. Rawalpindi" />
              </div>
              <div>
                <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">Birthday</label>
                <input type="date" value={form.birthday} onChange={e => setForm(d => ({ ...d, birthday: e.target.value }))}
                  className="input-luxury" />
              </div>
            </div>

            <button type="submit" className="btn-luxury w-full inline-flex items-center justify-center gap-2">
              <Save size={16} /> Save Changes
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
