import { NextResponse } from 'next/server'
import { getQuickMixesService } from '@/shared/server/deezer'

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)

        const query = searchParams.get('q') ?? 'pop'
        const limit = Number(searchParams.get('limit') ?? 4)

        const data = await getQuickMixesService(query, limit)

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch playlists ' + error }, { status: 500 })
    }
}
