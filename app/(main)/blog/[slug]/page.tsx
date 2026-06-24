'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { blogPosts } from '@/lib/data'
import { notFound } from 'next/navigation'

const blogContent: Record<string, string> = {
  'bridal-prep-guide-3-months': `
**3 Months Before:**
Start your pre-bridal skin treatment regimen. Schedule a consultation with our skin therapist to assess your skin type and create a personalized plan. Begin monthly brightening facials.

**2 Months Before:**
Book your bridal package trial. This is essential — you must see how the makeup looks in photos and ensure it's exactly what you want. Try different dupatta draping styles.

**1 Month Before:**
Intensify your skincare routine. Do weekly facials, start a hydration protocol, and avoid introducing new products to your skin. Finalize your bridal look with your makeup artist.

**2 Weeks Before:**
Hair spa treatment for shine and strength. Eyebrow threading and shaping (not too close to the date). Nail care and conditioning treatment.

**1 Week Before:**
Body waxing, final facial, and full body scrub. Relax and keep stress minimal — your mental state shows on your skin! Final consultation with your GIA's team.

**Day Before:**
Mehndi moisturizing treatment. Sleep early! Stay hydrated and eat nourishing food. Lay out all accessories.

**Day Of:**
Arrive on time with clean, moisturized skin. Bring your accessories and jewelry. Trust your GIA's team — you're going to be stunning!
  `,
  'hair-care-tips-pakistan': `
Living in Pakistan means dealing with heat, dust, and high humidity — a combination that can seriously damage your hair without the right care routine.

**1. Oil Your Hair Weekly**
Coconut oil, almond oil, or castor oil massaged into your scalp twice a week strengthens follicles and prevents breakage. Leave for 2-3 hours before shampooing.

**2. Use a Sulfate-Free Shampoo**
Harsh sulfates strip natural oils, making hair dry and frizzy. Choose gentle, moisturizing formulas.

**3. Deep Condition Monthly**
A professional deep conditioning treatment at GIA's every month restores moisture and protein balance.

**4. Protect from Heat**
Always apply a heat protectant before blow drying or straightening. Limit heat styling to 2-3 times per week.

**5. Trim Regularly**
Split ends travel up the hair shaft. Trim every 6-8 weeks to maintain health and length.

**6. Stay Hydrated**
Drink at least 8 glasses of water daily. Hair health starts from within!
  `,
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) notFound()

  const content = blogContent[post.slug] || `Full article coming soon. In the meantime, contact GIA's Beauty Salon for personalized advice: +92 315 5072704`
  const related = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 2)

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blush/30 via-cream to-ivory py-16 px-4">
        <div className="container-luxury max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-warm-gray hover:text-rose-gold font-poppins text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge-luxury mb-4 inline-block">{post.category}</span>
            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-charcoal mb-4 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-4 text-warm-gray text-sm font-poppins">
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime} read</span>
              <span>By GIA's Team</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover */}
      <div className="container-luxury max-w-3xl px-4">
        <div className="w-full h-64 md:h-80 rounded-3xl bg-gradient-to-br from-blush via-rose-gold/20 to-champagne/20 flex items-center justify-center -mt-4 shadow-luxury">
          <span className="text-8xl">{post.emoji}</span>
        </div>
      </div>

      {/* Content */}
      <article className="container-luxury max-w-3xl px-4 py-12">
        <div className="bg-white rounded-3xl shadow-card p-6 md:p-10">
          <p className="font-poppins text-warm-gray text-base leading-relaxed mb-6 italic">{post.excerpt}</p>
          <div className="h-px bg-blush/30 mb-6" />
          <div className="font-poppins text-charcoal leading-relaxed space-y-4 text-sm md:text-base">
            {content.split('\n').map((line, i) => {
              if (line.startsWith('**') && line.endsWith('**')) {
                return <h3 key={i} className="font-playfair text-xl font-bold text-charcoal mt-6 mb-2">{line.replace(/\*\*/g, '')}</h3>
              }
              if (line.trim()) {
                return <p key={i} className="text-warm-gray leading-loose">{line}</p>
              }
              return null
            })}
          </div>

          <div className="mt-8 p-5 bg-blush/20 rounded-2xl border border-blush/30">
            <p className="font-playfair text-lg font-bold text-charcoal mb-2">Ready to transform your look?</p>
            <p className="font-poppins text-sm text-warm-gray mb-4">Book an appointment at GIA's Beauty Salon and let our experts take care of you.</p>
            <Link href="/booking" className="btn-luxury text-sm inline-block">Book Appointment</Link>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-luxury max-w-3xl">
            <h2 className="font-playfair text-2xl font-bold text-charcoal mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map(p => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="card-luxury p-5 flex items-start gap-4 group">
                  <span className="text-3xl">{p.emoji}</span>
                  <div>
                    <h3 className="font-playfair text-base font-bold text-charcoal group-hover:text-rose-gold transition-colors leading-tight">{p.title}</h3>
                    <p className="font-poppins text-xs text-warm-gray mt-1">{p.readTime} read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
