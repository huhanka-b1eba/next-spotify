import { PlaylistPage } from '@/screens/playlist'
import { Metadata } from 'next'

interface PageProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params
    return {
        title: `Плейлист ${id} | Spotify`,
        description: `Прослушивание плейлиста ${id}`,
    }
}

export default async function Page({ params }: PageProps) {
    const { id } = await params

    return <PlaylistPage id={id} />
}
