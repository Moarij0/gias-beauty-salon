import Link from 'next/link'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* Left side — background image (hidden on mobile) */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80" alt="GIA's Beauty Salon" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-charcoal/60 to-rose-gold/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12">
          <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6 border border-white/20">
            <span className="font-playfair text-4xl font-bold text-white">G</span>
          </div>
          <h1 className="font-playfair text-5xl font-bold text-white mb-2">GIA's</h1>
          <p className="font-playfair text-xl text-white/70 tracking-widest uppercase mb-4">Beauty Salon</p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-champagne to-transparent mb-5" />
          <p className="font-poppins text-white/60 text-sm italic max-w-xs">"Where Beauty Meets Elegance"</p>
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-white/40 text-xs font-poppins">⭐ 4.7/5 · 387 Reviews · Rawalpindi</p>
          </div>
        </div>
      </div>

      {/* Right side — form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-ivory">
        <div className="p-6">
          <Link href="/" className="flex flex-col leading-tight w-fit">
            <span className="font-playfair text-2xl font-bold text-rose-gold">GIA's</span>
            <span className="font-playfair text-xs text-charcoal tracking-[0.2em] uppercase">Beauty Salon</span>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center px-4 pb-12">
          {children}
        </div>
      </div>
    </div>
  )
}
