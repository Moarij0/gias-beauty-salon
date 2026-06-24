'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, ArrowLeft, Check } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
      <div className="bg-white rounded-3xl shadow-luxury p-8">
        <Link href="/login" className="inline-flex items-center gap-2 text-warm-gray hover:text-rose-gold font-poppins text-sm mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Login
        </Link>

        {!sent ? (
          <>
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-blush/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-rose-gold" />
              </div>
              <h1 className="font-playfair text-2xl font-bold text-charcoal">Reset Password</h1>
              <p className="font-poppins text-sm text-warm-gray mt-2">
                Enter your email and we'll send you a reset link.
              </p>
            </div>
            <div className="space-y-4">
              <input type="email" placeholder="your@email.com" value={email}
                onChange={e => setEmail(e.target.value)} className="input-luxury" />
              <button onClick={() => setSent(true)} className="btn-luxury w-full">
                Send Reset Link
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={24} className="text-green-500" />
            </div>
            <h2 className="font-playfair text-xl font-bold text-charcoal mb-2">Email Sent!</h2>
            <p className="font-poppins text-sm text-warm-gray mb-6">
              Check your inbox at <strong>{email}</strong> for the reset link.
            </p>
            <Link href="/login" className="btn-outline-luxury">Back to Login</Link>
          </div>
        )}
      </div>
    </motion.div>
  )
}
