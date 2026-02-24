import { NextResponse } from 'next/server'
import { mapDeezerPlaylistCard } from '@/entities/playlist/model/mapper'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)

    const query = searchParams.get('q') ?? 'pop'
    const limit = Number(searchParams.get('limit') ?? 4)

    const res = await fetch(`https://api.deezer.com/search/playlist?q=${query}&limit=${limit}`)

    if (!res.ok) {
        return NextResponse.json({ error: 'Failed to fetch playlists' }, { status: 500 })
    }

    const data = await res.json()

    const playlists = data.data.map(mapDeezerPlaylistCard)

    return NextResponse.json(playlists)
}
