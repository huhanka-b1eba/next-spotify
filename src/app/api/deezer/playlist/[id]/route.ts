import { NextResponse } from 'next/server'
import { getPlaylistService } from '@/shared/server/deezer'

export async function GET(_: Request, { params }: { params: { id: string } }) {
    try {
        const data = await getPlaylistService(params.id)

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch playlist' }, { status: 500 })
    }
}
