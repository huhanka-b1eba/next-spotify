import React from 'react'
import { Metadata } from 'next'
import { SearchPage } from '@/screens/search'

export const metadata: Metadata = {
    title: 'Spotify InputSearch',
    description: 'Поиск трека | плейлиста',
}

const Page = () => {
    return <SearchPage />
}

export default Page
