import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import StickyCTA from '@/components/ui/StickyCTA'
import ReviewBadge from '@/components/ui/ReviewBadge'

export const metadata: Metadata = {
  title: "GIA's Beauty Salon Rawalpindi | Premium Salon in Airport Housing Society",
  description:
    "GIA's Beauty Salon in Airport Housing Society, Rawalpindi — your destination for premium bridal makeup, hair care, skin treatments, nail art & more. Rated ⭐ 4.7/5 by 387+ clients. Book your appointment today!",
  keywords: [
    "beauty salon Rawalpindi",
    "bridal salon Airport Housing Society",
    "hair salon Rawalpindi",
    "skin treatment Rawalpindi",
    "nail art Rawalpindi",
    "makeup artist Rawalpindi",
    "GIA salon",
    "premium salon Pakistan",
  ],
  openGraph: {
    title: "GIA's Beauty Salon | Where Beauty Meets Elegance",
    description:
      "Premium beauty salon in Airport Housing Society, Rawalpindi. Bridal, hair, skin, nails & makeup. Rated 4.7/5.",
    url: "https://giasbeautysalon.com",
    siteName: "GIA's Beauty Salon",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GIA's Beauty Salon Rawalpindi",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIA's Beauty Salon Rawalpindi",
    description: "Premium beauty salon in Airport Housing Society, Rawalpindi.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "GIA's Beauty Salon",
  description:
    "Premium beauty salon offering bridal makeup, hair care, skin treatments, nail art and more.",
  url: "https://giasbeautysalon.com",
  telephone: "+923155072704",
  address: {
    "@type": "PostalAddress",
    streetAddress: "St 9, Sector 4, Airport Housing Society",
    addressLocality: "Rawalpindi",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.6007,
    longitude: 73.0679,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "387",
  },
  sameAs: ["https://www.instagram.com/gia_malik_salon"],
  image: "/images/salon-exterior.jpg",
  priceRange: "PKR 500 - PKR 50,000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#C9956C" />
      </head>
      <body className="font-poppins bg-ivory">
        {children}
        <WhatsAppButton />
        <StickyCTA />
        <ReviewBadge />
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontFamily: 'Poppins, sans-serif',
              borderRadius: '12px',
              background: '#2C2C2C',
              color: '#FDFAF6',
            },
          }}
        />
      </body>
    </html>
  )
}
