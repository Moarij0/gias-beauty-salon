import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { serviceId, date, timeSlot, guestName, guestPhone, guestEmail, notes } = body

    // Validate Pakistan phone number format
    const phoneRegex = /^(\+92|92|0)?3[0-9]{9}$/
    if (guestPhone && !phoneRegex.test(guestPhone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid Pakistani phone number format' },
        { status: 400 }
      )
    }

    // TODO: Save to database with Prisma
    // const booking = await prisma.booking.create({ data: { ... } })

    // Build WhatsApp message
    const message = encodeURIComponent(
      `New Booking Request from Website!\n\n` +
      `👤 Name: ${guestName}\n` +
      `📱 Phone: ${guestPhone}\n` +
      `💅 Service ID: ${serviceId}\n` +
      `📅 Date: ${date}\n` +
      `🕐 Time: ${timeSlot}\n` +
      (notes ? `📝 Notes: ${notes}` : '')
    )

    return NextResponse.json({
      success: true,
      message: 'Booking request received!',
      whatsappUrl: `https://wa.me/923155072704?text=${message}`,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  // TODO: Fetch bookings from database
  return NextResponse.json({ bookings: [] })
}
