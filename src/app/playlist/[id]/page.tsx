import { PlaylistPage } from '@/pages/playlist'

interface PageProps {
    params: { id: string }
}

export default async function Page({ params }: PageProps) {
    const { id } = await params

    return <PlaylistPage id={id} />
}
