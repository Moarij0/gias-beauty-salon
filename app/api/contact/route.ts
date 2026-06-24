import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!name || !subject || !message) {
      return NextResponse.json({ error: 'Name, subject and message are required' }, { status: 400 })
    }

    // TODO: Save to database & send notification
    // await prisma.contactMessage.create({ data: { name, email, phone, subject, message } })

    return NextResponse.json({ success: true, message: 'Message received! We\'ll respond within 24 hours.' })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
