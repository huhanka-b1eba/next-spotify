import { PlaylistPage } from '@/pages/playlist'
import { Metadata } from 'next'

interface PageProps {
    params: { id: string }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    return {
        title: `Плейлист ${params.id} | Spotify`,
        description: `Прослушивание плейлиста ${params.id}`,
    }
}

export default async function Page({ params }: PageProps) {
    const { id } = await params

    return <PlaylistPage id={id} />
}
