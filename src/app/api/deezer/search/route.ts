import { NextResponse } from 'next/server'
import { searchTracksService, searchPlaylistsService } from '@/shared/api/server/deezer'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)

    const query = searchParams.get('q') ?? ''
    const limit = Number(searchParams.get('limit') ?? 5)

    if (!query.trim()) {
        return NextResponse.json({
            tracks: [],
            playlists: [],
        })
    }

    try {
        const [tracks, playlists] = await Promise.all([
            searchTracksService(query, limit),
            searchPlaylistsService(query, limit),
        ])

        return NextResponse.json({
            tracks,
            playlists,
        })
    } catch {
        return NextResponse.json({ error: 'Search failed' }, { status: 500 })
    }
}
