import { NextResponse } from 'next/server'

export async function GET(_: Request, { params }: { params: { id: string } }) {
    const res = await fetch(`https://api.deezer.com/playlist/${params.id}`)

    if (!res.ok) {
        return NextResponse.json({ error: 'Failed to fetch playlist' }, { status: 500 })
    }

    const data = await res.json()

    return NextResponse.json(data)
}
