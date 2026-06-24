'use client'

import { motion } from 'framer-motion'
import { Star, Award, Heart, Users } from 'lucide-react'
import { staffMembers } from '@/lib/data'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'

const values = [
  { icon: Heart, title: 'Passion for Beauty', desc: 'We celebrate beauty in every form. Every client deserves to feel extraordinary.', color: '#E91E8C' },
  { icon: Star, title: 'Uncompromising Quality', desc: 'From products to techniques, only the best for the best results.', color: '#D4AF37' },
  { icon: Users, title: 'Client First Always', desc: 'Your comfort, satisfaction and happiness are our top priority.', color: '#C9956C' },
  { icon: Award, title: 'Continuous Learning', desc: 'Our team trains on international trends to stay at the cutting edge.', color: '#9C6B98' },
]

const achievements = [
  { label: 'Years in Business', value: '5+' },
  { label: 'Happy Clients', value: '1000+' },
  { label: 'Average Rating', value: '4.7⭐' },
  { label: 'Services Offered', value: '40+' },
]

const teamImages = [
  'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80',
  'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&q=80',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80',
  'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&q=80',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory">
      <PageHero
        badge="Our Story"
        title="About"
        highlight="GIA's Salon"
        subtitle="Where passion meets expertise — Rawalpindi's most trusted beauty destination"
        image="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=80"
      />

      {/* Story Section */}
      <section className="section-padding bg-ivory">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <span className="badge-luxury mb-4 inline-block">Our Story</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-5 leading-tight">
                Born From a Dream —<br /><span className="gradient-text">Built With Love</span>
              </h2>
              <div className="divider-gold max-w-[200px] mb-7" />
              <div className="space-y-4 font-poppins text-warm-gray leading-relaxed text-base">
                <p>GIA's Beauty Salon was born from a dream — to bring world-class beauty services to the heart of Rawalpindi. Founded by GIA Malik, a passionate and professionally trained beauty artist, the salon opened its doors in Airport Housing Society with one vision: <em className="text-charcoal font-medium">make every woman feel like royalty</em>.</p>
                <p>What started as a small boutique studio has grown into one of Rawalpindi's most trusted and beloved beauty destinations. With over 387 glowing reviews and a 4.7-star rating, GIA's has become the go-to salon for brides, professionals, and beauty enthusiasts across the city.</p>
                <p>Our team of expert stylists, makeup artists, skin therapists and nail artists are united by one passion — bringing out the unique beauty in every woman who walks through our doors.</p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                {achievements.map((a, i) => (
                  <motion.div key={a.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="text-center bg-white rounded-2xl p-4 shadow-sm border border-blush/20">
                    <p className="font-playfair text-2xl font-bold gradient-text">{a.value}</p>
                    <p className="font-poppins text-xs text-warm-gray mt-1">{a.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Images grid */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="rounded-3xl overflow-hidden h-64 img-zoom shadow-lg">
                    <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80" alt="Salon" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-40 img-zoom shadow-lg">
                    <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" alt="Hair" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-3 mt-8">
                  <div className="rounded-3xl overflow-hidden h-40 img-zoom shadow-lg">
                    <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" alt="Bridal" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-3xl overflow-hidden h-64 img-zoom shadow-lg">
                    <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80" alt="Makeup" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 border border-blush/20 flex items-center gap-3 whitespace-nowrap">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#D4AF37" className="text-champagne" />)}</div>
                <span className="font-poppins text-sm font-semibold text-charcoal">4.7/5 · 387 Reviews</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FAF0E6, #FDFAF6)' }}>
        <div className="container-luxury">
          <div className="text-center mb-14">
            <span className="badge-luxury mb-4 inline-block">What We Stand For</span>
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">Our Mission & <span className="gradient-text">Values</span></h2>
            <div className="divider-gold max-w-xs mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl p-7 text-center shadow-sm border border-gray-100 hover:shadow-[0_15px_40px_rgba(201,149,108,0.15)] hover:-translate-y-2 transition-all duration-400">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${v.color}15` }}>
                  <v.icon size={24} style={{ color: v.color }} />
                </div>
                <h3 className="font-playfair text-lg font-bold text-charcoal mb-3">{v.title}</h3>
                <p className="font-poppins text-sm text-warm-gray leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Salon Interior Gallery */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <span className="badge-luxury mb-4 inline-block">Our Space</span>
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">Inside <span className="gradient-text">GIA's</span></h2>
            <div className="divider-gold max-w-xs mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80',
              'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
              'https://images.unsplash.com/photo-1470259078422-826894b933aa?w=600&q=80',
              'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80',
              'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
              'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
            ].map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden img-zoom shadow-md" style={{ height: i === 0 || i === 5 ? '280px' : '200px' }}>
                <img src={img} alt="GIA's Salon" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #FAF0E6, #FDFAF6)' }}>
        <div className="container-luxury">
          <div className="text-center mb-14">
            <span className="badge-luxury mb-4 inline-block">Meet the Team</span>
            <h2 className="font-playfair text-4xl font-bold text-charcoal mb-4">The <span className="gradient-text">Artists</span> Behind GIA's</h2>
            <div className="divider-gold max-w-xs mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {staffMembers.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-[0_20px_50px_rgba(201,149,108,0.2)] hover:-translate-y-2 transition-all duration-400">
                {/* Image */}
                <div className="relative h-52 img-zoom overflow-hidden">
                  <img src={teamImages[i % teamImages.length]} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="font-playfair text-lg font-bold text-white">{member.name}</p>
                    <p className="font-poppins text-xs text-white/70">{member.role}</p>
                  </div>
                  <span className="absolute top-4 right-4 text-3xl">{member.emoji}</span>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map(s => <span key={s} className="badge-luxury text-xs">{s}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a1a, #2C2C2C)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C9956C 0%, transparent 50%)' }} />
        </div>
        <div className="container-luxury relative text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-3">Certifications & <span className="gradient-text">Achievements</span></h2>
          <div className="divider-gold max-w-xs mx-auto mb-10" />
          <div className="flex flex-wrap justify-center gap-4">
            {['🏆 Top Rated Salon Rawalpindi', '🎓 Internationally Certified Stylists', '✅ Professional Makeup Artist Certified', '💎 Premium Product Partners', '🌸 5+ Years of Excellence', '👑 100+ Brides Served'].map(cert => (
              <div key={cert} className="bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-poppins text-white hover:bg-white/20 transition-all duration-300">
                {cert}
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/booking" className="btn-gold inline-flex items-center gap-2 text-base">
              Book with Our Expert Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
