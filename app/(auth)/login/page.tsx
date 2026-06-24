'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock, Phone } from 'lucide-react'

export default function LoginPage() {
  const [mode, setMode] = useState<'email' | 'phone'>('email')
  const [showPw, setShowPw] = useState(false)
  const [form, setForm] = useState({ email: '', phone: '', password: '', otp: '' })
  const [otpSent, setOtpSent] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-md"
    >
      <div className="bg-white rounded-3xl shadow-luxury p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-rose-gold to-blush rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-playfair text-2xl font-bold">G</span>
          </div>
          <h1 className="font-playfair text-2xl font-bold text-charcoal">Welcome Back</h1>
          <p className="font-poppins text-sm text-warm-gray mt-1">Sign in to your GIA's account</p>
        </div>

        {/* Google button */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3 font-poppins text-sm text-charcoal hover:bg-gray-50 transition-colors mb-4">
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Continue with Google
        </button>

        <div className="divider-gold my-4">
          <span className="font-poppins text-xs text-warm-gray px-3">or sign in with</span>
        </div>

        {/* Mode toggle */}
        <div className="flex bg-blush/20 rounded-xl p-1 mb-5">
          <button
            onClick={() => setMode('email')}
            className={`flex-1 py-2 rounded-lg text-sm font-poppins font-medium transition-all flex items-center justify-center gap-2 ${
              mode === 'email' ? 'bg-white text-charcoal shadow-sm' : 'text-warm-gray'
            }`}
          >
            <Mail size={14} /> Email
          </button>
          <button
            onClick={() => setMode('phone')}
            className={`flex-1 py-2 rounded-lg text-sm font-poppins font-medium transition-all flex items-center justify-center gap-2 ${
              mode === 'phone' ? 'bg-white text-charcoal shadow-sm' : 'text-warm-gray'
            }`}
          >
            <Phone size={14} /> Phone (OTP)
          </button>
        </div>

        {/* Email form */}
        {mode === 'email' && (
          <div className="space-y-4">
            <div>
              <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-warm-gray" />
                <input type="email" placeholder="you@email.com" value={form.email}
                  onChange={e => setForm(d => ({ ...d, email: e.target.value }))}
                  className="input-luxury pl-10" />
              </div>
            </div>
            <div>
              <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-warm-gray" />
                <input type={showPw ? 'text' : 'password'} placeholder="Your password" value={form.password}
                  onChange={e => setForm(d => ({ ...d, password: e.target.value }))}
                  className="input-luxury pl-10 pr-10" />
                <button type="button" onClick={() => setShowPw(!showPw)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-warm-gray hover:text-charcoal transition-colors">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-xs text-rose-gold hover:underline font-poppins">Forgot password?</Link>
            </div>
            <button className="btn-luxury w-full">Sign In</button>
          </div>
        )}

        {/* Phone OTP form */}
        {mode === 'phone' && (
          <div className="space-y-4">
            <div>
              <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">Phone Number</label>
              <div className="flex gap-2">
                <div className="input-luxury w-16 text-center text-warm-gray text-sm shrink-0">+92</div>
                <input type="tel" placeholder="3XX XXXXXXX" value={form.phone}
                  onChange={e => setForm(d => ({ ...d, phone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                  className="input-luxury flex-1" />
              </div>
            </div>
            {!otpSent ? (
              <button onClick={() => setOtpSent(true)} className="btn-luxury w-full">Send OTP</button>
            ) : (
              <>
                <div>
                  <label className="font-poppins text-sm font-medium text-charcoal mb-1.5 block">Enter OTP</label>
                  <input type="text" placeholder="6-digit code" maxLength={6} value={form.otp}
                    onChange={e => setForm(d => ({ ...d, otp: e.target.value.replace(/\D/g, '').slice(0, 6) }))}
                    className="input-luxury text-center text-2xl tracking-[1em] font-bold" />
                  <p className="text-xs text-warm-gray font-poppins mt-1 text-center">
                    OTP sent to +92 {form.phone} ·{' '}
                    <button onClick={() => setOtpSent(false)} className="text-rose-gold hover:underline">Resend</button>
                  </p>
                </div>
                <button className="btn-luxury w-full">Verify & Sign In</button>
              </>
            )}
          </div>
        )}

        <p className="font-poppins text-xs text-center text-warm-gray mt-6">
          Don't have an account?{' '}
          <Link href="/signup" className="text-rose-gold font-medium hover:underline">Create Account</Link>
        </p>
      </div>
    </motion.div>
  )
}
