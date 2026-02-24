import { NextResponse } from 'next/server'
import { getPlaylistService } from '@/shared/server/deezer'

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params
        const data = await getPlaylistService(id)

        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch playlist' }, { status: 500 })
    }
}
