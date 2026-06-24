# GIA's Beauty Salon — Full-Stack Website

> **"Where Beauty Meets Elegance"**  
> Premium beauty salon website for GIA's Beauty Salon, Rawalpindi, Pakistan.

---

## 🌸 Overview

A complete, production-ready luxury beauty salon website built with:

- **Next.js 14** (App Router + TypeScript)
- **Tailwind CSS** — custom luxury design system
- **Framer Motion** — smooth entrance animations
- **Prisma + PostgreSQL** — database layer
- **NextAuth.js** — Google + Credentials + Phone OTP auth
- **Cloudinary** — image/gallery storage
- **WhatsApp Integration** — booking confirmations via WhatsApp

---

## 🚀 Quick Start

### 1. Install Node.js
Download from https://nodejs.org (LTS version)

### 2. Install dependencies
```bash
cd gias-beauty-salon
npm install
```

### 3. Set up environment variables
```bash
cp .env.local.example .env.local
# Fill in your values in .env.local
```

### 4. Set up database
```bash
# Create a PostgreSQL database named "gias_salon"
npx prisma generate
npx prisma db push
```

### 5. Run development server
```bash
npm run dev
# Visit http://localhost:3000
```

---

## 📁 Project Structure

```
gias-beauty-salon/
├── app/
│   ├── (main)/           # Public pages with Navbar + Footer
│   │   ├── page.tsx      # Home page
│   │   ├── services/     # Services with filter tabs
│   │   ├── bridal/       # Bridal packages + inquiry popup
│   │   ├── gallery/      # Masonry gallery with lightbox
│   │   ├── reviews/      # Reviews + submission form
│   │   ├── booking/      # 5-step booking wizard
│   │   ├── about/        # About + team + values
│   │   ├── contact/      # Contact + Google Maps
│   │   └── blog/         # Beauty blog + article pages
│   ├── (auth)/           # Auth pages (no navbar)
│   │   ├── login/        # Email + Phone OTP + Google
│   │   ├── signup/       # Registration
│   │   └── forgot-password/
│   ├── dashboard/        # User dashboard
│   ├── admin/            # Admin panel
│   └── api/              # API routes
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── home/             # Hero, Services carousel, etc.
│   └── ui/               # WhatsApp button, ReviewBadge, etc.
├── lib/
│   └── data.ts           # All services, reviews, blog data
├── prisma/
│   └── schema.prisma     # Full database schema
└── tailwind.config.ts    # Custom luxury color system
```

---

## 🎨 Pages Built

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services carousel, before/after, testimonials, Instagram grid |
| Services | `/services` | Filter by category, 40+ services with PKR pricing |
| Bridal | `/bridal` | 3 package tiers + inquiry popup |
| Gallery | `/gallery` | Masonry grid with lightbox filter |
| Reviews | `/reviews` | Star ratings + submission form |
| Booking | `/booking` | 5-step wizard + WhatsApp confirmation |
| About | `/about` | Story, team, values, certifications |
| Contact | `/contact` | Form + Google Maps + hours |
| Blog | `/blog` | Beauty tips articles |
| Login | `/login` | Email + Phone OTP + Google |
| Signup | `/signup` | Registration |
| Dashboard | `/dashboard` | User appointments, reviews, wishlist |
| Admin | `/admin` | Analytics, bookings, management |

---

## ✨ Special Features

- **WhatsApp Floating Button** — `wa.me/923155072704`
- **Booking via WhatsApp** — auto-generates pre-filled message
- **Sticky "Book Now" CTA** — fixed bottom bar on mobile
- **Floating Review Badge** — shows 4.7 ⭐ / 387 reviews
- **Before/After Slider** — draggable comparison
- **Testimonials Marquee** — dual-row auto-scroll
- **Bridal Inquiry Popup** — with package selection
- **Pakistan Phone Validation** — `+92` format enforcement
- **Masonry Gallery** — with category filter + lightbox
- **SEO** — Schema markup, Open Graph, meta tags

---

## 🎨 Design System

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `rose-gold` | `#C9956C` | Primary CTA, accents |
| `blush` | `#F2C4CE` | Backgrounds, hover states |
| `ivory` | `#FDFAF6` | Page backgrounds |
| `cream` | `#FAF0E6` | Section backgrounds |
| `champagne` | `#D4AF37` | Gold accents, stars |
| `charcoal` | `#2C2C2C` | Headings, dark sections |
| `warm-gray` | `#6B6B6B` | Body text |

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

---

## 🚢 Deployment (Vercel)

1. Push to GitHub
2. Connect repo on vercel.com
3. Add environment variables in Vercel dashboard
4. Deploy!

---

## 📞 Business Info

- **Name**: GIA's Beauty Salon
- **Phone**: +92 315 5072704
- **Address**: St 9, Sector 4, Airport Housing Society, Rawalpindi
- **Instagram**: [@gia_malik_salon](https://www.instagram.com/gia_malik_salon)
- **Rating**: ⭐ 4.7/5 (387 reviews)

---

*Built with ❤️ for GIA's Beauty Salon, Rawalpindi*
