export const SALON_PHONE = '+923155072704'
export const SALON_WHATSAPP = 'https://wa.me/923155072704'
export const SALON_INSTAGRAM = 'https://www.instagram.com/gia_malik_salon'
export const SALON_ADDRESS = 'St 9, Sector 4, Airport Housing Society, Rawalpindi, Pakistan'

export const serviceCategories = [
  { id: 'hair', label: 'Hair Care', emoji: '💇‍♀️' },
  { id: 'skin', label: 'Skin Treatments', emoji: '✨' },
  { id: 'bridal', label: 'Bridal Packages', emoji: '👰' },
  { id: 'nails', label: 'Nail Art', emoji: '💅' },
  { id: 'makeup', label: 'Makeup', emoji: '💄' },
  { id: 'threading', label: 'Threading & Waxing', emoji: '🌸' },
]

export const services = [
  // Hair Care
  { id: 's1', categoryId: 'hair', name: 'Haircut & Style', description: 'Precision cut, wash & blowout by expert stylist', duration: 60, price: 800 },
  { id: 's2', categoryId: 'hair', name: 'Keratin Treatment', description: 'Professional keratin smoothing for frizz-free silky hair', duration: 120, price: 5000 },
  { id: 's3', categoryId: 'hair', name: 'Hair Color (Full)', description: 'Global color with premium international brands', duration: 150, price: 4500 },
  { id: 's4', categoryId: 'hair', name: 'Balayage / Highlights', description: 'Sun-kissed, natural-looking balayage or foil highlights', duration: 180, price: 7000 },
  { id: 's5', categoryId: 'hair', name: 'Blowout & Styling', description: 'Professional blow-dry and styling for any occasion', duration: 45, price: 1200 },
  { id: 's6', categoryId: 'hair', name: 'Deep Conditioning', description: 'Intensive hair mask and conditioning treatment', duration: 60, price: 2000 },
  { id: 's7', categoryId: 'hair', name: 'Hair Extensions', description: 'Clip-in or tape-in hair extension application', duration: 120, price: 8000 },
  { id: 's8', categoryId: 'hair', name: 'Scalp Treatment', description: 'Targeted scalp detox and nourishment therapy', duration: 60, price: 2500 },

  // Skin Treatments
  { id: 's9', categoryId: 'skin', name: 'Classic Facial', description: 'Deep cleanse, exfoliation, mask & moisturization', duration: 60, price: 1500 },
  { id: 's10', categoryId: 'skin', name: 'Hydration Facial', description: 'Intense hydration boost for dry and dull skin', duration: 75, price: 2500 },
  { id: 's11', categoryId: 'skin', name: 'Anti-Aging Facial', description: 'Firming & lifting treatment with collagen infusion', duration: 90, price: 3500 },
  { id: 's12', categoryId: 'skin', name: 'Brightening Facial', description: 'Glow-boosting treatment for uneven skin tone', duration: 75, price: 2800 },
  { id: 's13', categoryId: 'skin', name: 'Acne Treatment', description: 'Targeted acne-clearing treatment with salicylic acid', duration: 60, price: 2000 },
  { id: 's14', categoryId: 'skin', name: 'Chemical Peel', description: 'Professional grade peel for skin renewal', duration: 45, price: 3000 },
  { id: 's15', categoryId: 'skin', name: 'Microdermabrasion', description: 'Crystal microdermabrasion for smooth, refined skin', duration: 60, price: 4000 },
  { id: 's16', categoryId: 'skin', name: 'Gold Facial', description: 'Luxury 24K gold leaf facial for radiant glow', duration: 90, price: 5000 },

  // Bridal Packages
  { id: 's17', categoryId: 'bridal', name: 'Basic Bridal Package', description: 'Bridal makeup, hair styling & basic dupatta draping', duration: 180, price: 15000 },
  { id: 's18', categoryId: 'bridal', name: 'Deluxe Bridal Package', description: 'Airbrush makeup, hair, dupatta + party look for next day', duration: 240, price: 25000 },
  { id: 's19', categoryId: 'bridal', name: 'Royal Bridal Package', description: 'Full bridal makeover, mehendi hands, pre-bridal treatments + 2 event looks', duration: 300, price: 50000 },
  { id: 's20', categoryId: 'bridal', name: 'Engagement Makeup', description: 'Flawless engagement glam with long-lasting formula', duration: 120, price: 8000 },
  { id: 's21', categoryId: 'bridal', name: 'Pre-Bridal Package', description: '3-session pre-bridal skin + hair prep regimen', duration: 180, price: 12000 },

  // Nail Art
  { id: 's22', categoryId: 'nails', name: 'Manicure (Classic)', description: 'Nail shaping, cuticle care & polish application', duration: 45, price: 500 },
  { id: 's23', categoryId: 'nails', name: 'Gel Manicure', description: 'Long-lasting gel polish with UV cure', duration: 60, price: 1200 },
  { id: 's24', categoryId: 'nails', name: 'Pedicure (Classic)', description: 'Foot soak, exfoliation, massage & polish', duration: 60, price: 800 },
  { id: 's25', categoryId: 'nails', name: 'Gel Pedicure', description: 'Gel polish pedicure with extended wear', duration: 75, price: 1500 },
  { id: 's26', categoryId: 'nails', name: 'Nail Extensions (Acrylic)', description: 'Full set acrylic nail extensions with your choice of length', duration: 90, price: 2500 },
  { id: 's27', categoryId: 'nails', name: 'Nail Art Design', description: 'Custom nail art — from simple to intricate designs', duration: 60, price: 1500 },
  { id: 's28', categoryId: 'nails', name: 'Mani + Pedi Combo', description: 'Classic manicure and pedicure together', duration: 90, price: 1200 },

  // Makeup
  { id: 's29', categoryId: 'makeup', name: 'Party Makeup', description: 'Glamorous party look for weddings & events', duration: 90, price: 2500 },
  { id: 's30', categoryId: 'makeup', name: 'Eid Makeup', description: 'Festive glam for Eid celebrations', duration: 75, price: 2000 },
  { id: 's31', categoryId: 'makeup', name: 'Natural Day Makeup', description: 'Light, fresh everyday makeup look', duration: 45, price: 1500 },
  { id: 's32', categoryId: 'makeup', name: 'Airbrush Makeup', description: 'Flawless, photogenic airbrush finish', duration: 90, price: 4000 },
  { id: 's33', categoryId: 'makeup', name: 'Makeup Lesson', description: 'One-on-one makeup tutorial — learn the basics', duration: 120, price: 3000 },

  // Threading & Waxing
  { id: 's34', categoryId: 'threading', name: 'Eyebrow Threading', description: 'Precision brow shaping by expert threader', duration: 15, price: 200 },
  { id: 's35', categoryId: 'threading', name: 'Full Face Threading', description: 'Complete face threading — brows, upper lip, sides', duration: 30, price: 500 },
  { id: 's36', categoryId: 'threading', name: 'Upper Lip Wax', description: 'Quick & gentle upper lip hair removal', duration: 10, price: 150 },
  { id: 's37', categoryId: 'threading', name: 'Full Arms Waxing', description: 'Smooth arm waxing with calming lotion', duration: 40, price: 1000 },
  { id: 's38', categoryId: 'threading', name: 'Full Legs Waxing', description: 'Complete leg waxing for silky smooth skin', duration: 60, price: 1500 },
  { id: 's39', categoryId: 'threading', name: 'Underarms Waxing', description: 'Gentle underarm waxing', duration: 15, price: 300 },
  { id: 's40', categoryId: 'threading', name: 'Full Body Wax', description: 'Complete full body waxing session', duration: 120, price: 4000 },
]

export const timeSlots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
  '08:00 PM',
]

export const reviews = [
  { id: 1, name: 'Ayesha Khan', service: 'Royal Bridal Package', rating: 5, date: '2024-10-15', comment: 'I looked absolutely stunning on my wedding day! GIA\'s team worked magic. The makeup lasted 12+ hours and everyone kept asking who did it. 100% recommend!' },
  { id: 2, name: 'Sana Riaz', service: 'Keratin Treatment', rating: 5, date: '2024-09-22', comment: 'Best keratin in Rawalpindi! My hair is so silky and manageable now. The staff is professional and the salon is so clean and luxurious.' },
  { id: 3, name: 'Fatima Noor', service: 'Gold Facial', rating: 5, date: '2024-11-08', comment: 'The gold facial left my skin glowing for weeks. Very relaxing experience and affordable prices for the quality.' },
  { id: 4, name: 'Nadia Sheikh', service: 'Nail Extensions', rating: 5, date: '2024-10-03', comment: 'Love my nails! The acrylic extensions look so natural and the nail art design was exactly what I wanted.' },
  { id: 5, name: 'Hira Ahmed', service: 'Party Makeup', rating: 5, date: '2024-11-20', comment: 'Went for Eid and the makeup was flawless. Natural, long-lasting and so beautiful. Will be coming back!' },
  { id: 6, name: 'Zara Malik', service: 'Balayage', rating: 5, date: '2024-08-14', comment: 'Finally found someone who can do balayage properly in Rawalpindi! The color is perfect and blends beautifully.' },
  { id: 7, name: 'Maryam Butt', service: 'Engagement Makeup', rating: 5, date: '2024-09-30', comment: 'My engagement photos look like a dream because of GIA\'s. The makeup was so fresh and photogenic. Thank you!' },
  { id: 8, name: 'Sara Hussain', service: 'Brightening Facial', rating: 4, date: '2024-11-12', comment: 'Great facial, visible results after one session. Will take a full package next time.' },
  { id: 9, name: 'Amna Qureshi', service: 'Deluxe Bridal Package', rating: 5, date: '2024-07-19', comment: 'The bridal package was worth every penny. I felt like royalty on my wedding day. Professional, warm and talented team.' },
  { id: 10, name: 'Layla Shahid', service: 'Gel Manicure', rating: 5, date: '2024-11-25', comment: 'Love the gel manicure — lasted 3 weeks without chipping! The salon ambiance is so relaxing too.' },
  { id: 11, name: 'Rida Tariq', service: 'Airbrush Makeup', rating: 5, date: '2024-10-28', comment: 'First time trying airbrush makeup and WOW. So light on the skin but full coverage. My photos looked amazing!' },
  { id: 12, name: 'Mehwish Ali', service: 'Anti-Aging Facial', rating: 4, date: '2024-09-05', comment: 'Good treatment, professional staff. Noticed a visible improvement in my skin firmness after 2 sessions.' },
]

export const blogPosts = [
  {
    id: 1,
    title: 'Complete Bridal Prep Guide: 3 Months Before Your Wedding',
    slug: 'bridal-prep-guide-3-months',
    excerpt: 'Everything you need to do from skin care routines to trial sessions to look your absolute best on your big day.',
    category: 'Bridal',
    date: '2024-11-15',
    readTime: '8 min',
    emoji: '👰',
  },
  {
    id: 2,
    title: 'Top 5 Hair Care Tips for Pakistani Climate',
    slug: 'hair-care-tips-pakistan',
    excerpt: 'The heat and humidity in Pakistan can wreak havoc on your hair. Here are expert tips to keep it healthy.',
    category: 'Hair',
    date: '2024-11-01',
    readTime: '5 min',
    emoji: '💇‍♀️',
  },
  {
    id: 3,
    title: 'Your 7-Step Skincare Routine for Glowing Skin',
    slug: 'skincare-routine-glowing-skin',
    excerpt: 'Build a simple yet effective skincare routine that gives you that glass-skin glow all year round.',
    category: 'Skin',
    date: '2024-10-20',
    readTime: '6 min',
    emoji: '✨',
  },
  {
    id: 4,
    title: 'Nail Art Trends for Eid 2025',
    slug: 'nail-art-trends-eid-2025',
    excerpt: 'From intricate mehndi-inspired designs to glittery festive looks — the hottest nail trends for Eid.',
    category: 'Nails',
    date: '2024-10-08',
    readTime: '4 min',
    emoji: '💅',
  },
  {
    id: 5,
    title: 'How to Choose the Right Foundation for Your Skin Tone',
    slug: 'choose-right-foundation-skin-tone',
    excerpt: 'Pakistani skin tones are diverse and beautiful. Here\'s how to find your perfect foundation match.',
    category: 'Makeup',
    date: '2024-09-25',
    readTime: '7 min',
    emoji: '💄',
  },
  {
    id: 6,
    title: 'The Benefits of Regular Facial Treatments',
    slug: 'benefits-regular-facial-treatments',
    excerpt: 'Why getting a professional facial every month is the best investment you can make for your skin.',
    category: 'Skin',
    date: '2024-09-10',
    readTime: '5 min',
    emoji: '🧖‍♀️',
  },
]

export const staffMembers = [
  { name: 'GIA Malik', role: 'Founder & Master Stylist', specialties: ['Bridal Makeup', 'Hair Styling', 'Color Specialist'], emoji: '👑' },
  { name: 'Sara Ahmed', role: 'Senior Makeup Artist', specialties: ['Airbrush Makeup', 'Party Glam', 'Engagement Looks'], emoji: '💄' },
  { name: 'Nida Hussain', role: 'Hair Specialist', specialties: ['Keratin', 'Balayage', 'Extensions'], emoji: '💇‍♀️' },
  { name: 'Amna Khan', role: 'Skin Therapist', specialties: ['Facials', 'Chemical Peels', 'Anti-Aging'], emoji: '✨' },
  { name: 'Zara Iqbal', role: 'Nail Artist', specialties: ['Nail Art', 'Gel Extensions', 'Nail Design'], emoji: '💅' },
  { name: 'Rida Ali', role: 'Threading Expert', specialties: ['Eyebrow Shaping', 'Face Threading', 'Waxing'], emoji: '🌸' },
]
