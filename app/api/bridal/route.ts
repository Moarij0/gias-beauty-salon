import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, weddingDate, package: pkg, message } = body

    if (!name || !phone || !weddingDate) {
      return NextResponse.json({ error: 'Name, phone and wedding date are required' }, { status: 400 })
    }

    // TODO: await prisma.bridalInquiry.create({ data: { ... } })

    const waMsg = encodeURIComponent(
      `🌸 New Bridal Inquiry!\n\n` +
      `Name: ${name}\nPhone: ${phone}\n` +
      (email ? `Email: ${email}\n` : '') +
      `Wedding Date: ${weddingDate}\n` +
      `Package: ${pkg || 'Not specified'}\n` +
      (message ? `Message: ${message}` : '')
    )

    return NextResponse.json({
      success: true,
      message: 'Bridal inquiry received!',
      whatsappUrl: `https://wa.me/923155072704?text=${waMsg}`,
    })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
