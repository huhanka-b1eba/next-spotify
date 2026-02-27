import { NextResponse } from 'next/server'
import { getTrendingService } from '@/shared/api/server/deezer'

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const limit = Number(searchParams.get('limit') ?? 4)

        const data = await getTrendingService(limit)

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch chart ' + error }, { status: 500 })
    }
}
