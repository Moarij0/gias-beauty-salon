'use client'

import HeroSection from '@/components/home/HeroSection'
import ServicesCarousel from '@/components/home/ServicesCarousel'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import TestimonialsMarquee from '@/components/home/TestimonialsMarquee'
import InstagramGrid from '@/components/home/InstagramGrid'
import LoyaltyTeaser from '@/components/home/LoyaltyTeaser'
import StatsBar from '@/components/home/StatsBar'

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StatsBar />
      <ServicesCarousel />
      <WhyChooseUs />
      <TestimonialsMarquee />
      <LoyaltyTeaser />
      <InstagramGrid />
    </div>
  )
}
