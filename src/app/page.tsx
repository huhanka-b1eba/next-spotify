import { HomePage } from '@/pages/home'
import { Metadata } from 'next'
import { getQuickMixes } from '@/features/ home-playlists/api/getQuickMixes'
import { getTrending } from '@/features/ home-playlists/api/getTrending'

export const metadata: Metadata = {
    title: 'Spotify',
    description: 'Сервис для прослушивания музыки',
}

export default async function Home() {
    const [quickMixes, trending] = await Promise.all([getQuickMixes(), getTrending()])

    return <HomePage quickMixes={quickMixes} trending={trending} />
}
