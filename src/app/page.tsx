import { HomePage } from '@/pages/home'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Spotify',
    description: 'Сервис для прослушивания музыки',
}

export default function Home() {
    return <HomePage />
}
