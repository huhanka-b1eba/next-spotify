import { NextResponse } from 'next/server'
import { mapDeezerPlaylist } from '@/entities/playlist/model/mapper'

export async function GET(_: Request, { params }: { params: { id: string } }) {
    const id = params.id

    const res = await fetch(`https://api.deezer.com/playlist/${id}`)

    if (!res.ok) {
        return NextResponse.json({ error: 'Failed to fetch playlist' }, { status: 500 })
    }

    const data = await res.json()

    return NextResponse.json(mapDeezerPlaylist(data))
}
