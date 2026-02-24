import { HomePage } from '@/pages/home'
import { Metadata } from 'next'
import { getQuickMixesClient } from '@/features/ home-playlists/api/getQuickMixes.client'
import { getTrendingClient } from '@/features/ home-playlists/api/getTrending.client'

export const metadata: Metadata = {
    title: 'Spotify',
    description: 'Сервис для прослушивания музыки',
}

export default async function Home() {
    const [quickMixes, trending] = await Promise.all([getQuickMixesClient(), getTrendingClient()])

    return <HomePage quickMixes={quickMixes} trending={trending} />
}
