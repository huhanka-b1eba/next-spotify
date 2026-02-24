import { NextResponse } from 'next/server'
import { mapDeezerPlaylistCard } from '@/entities/playlist/model/mapper'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const limit = Number(searchParams.get('limit') ?? 4)

    const res = await fetch('https://api.deezer.com/chart')

    if (!res.ok) {
        return NextResponse.json({ error: 'Failed to fetch chart' }, { status: 500 })
    }

    const data = await res.json()

    const playlists = data.playlists.data.slice(0, limit).map(mapDeezerPlaylistCard)

    return NextResponse.json(playlists)
}
