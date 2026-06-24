import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { authorName, rating, comment, service } = body

    if (!authorName || !rating || !comment) {
      return NextResponse.json({ error: 'Name, rating and comment are required' }, { status: 400 })
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Rating must be between 1 and 5' }, { status: 400 })
    }

    // TODO: await prisma.review.create({ data: { authorName, rating, comment, service, isApproved: false } })

    return NextResponse.json({ success: true, message: 'Review submitted! It will appear after moderation.' })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  // TODO: return approved reviews from DB
  return NextResponse.json({ reviews: [] })
}
