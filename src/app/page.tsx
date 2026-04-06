import { HomePage } from '@/screens/home'
import { Metadata } from 'next'
import { getQuickMixesService, getTrendingService } from '@/shared/api/server/deezer'

export const metadata: Metadata = {
    title: 'Spotify',
    description: 'Сервис для прослушивания музыки',
}

export default async function Home() {
    const [quickMixes, trending] = await Promise.all([
        getQuickMixesService('pop', 4),
        getTrendingService(4),
    ])

    return <HomePage quickMixes={quickMixes} trending={trending} />
}
