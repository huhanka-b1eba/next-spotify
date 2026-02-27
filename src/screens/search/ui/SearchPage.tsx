'use client'

import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import Kicker from '@/shared/ui/kicker/ui/Kicker'
import styles from './SearchPage.module.scss'
import { InputSearch } from '@/shared/ui/input-search'
import { useQuery } from '@tanstack/react-query'
import { search } from '@/shared/api/client/search.client'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { TrackList } from '@/widgets/track-list'
import { SearchFilters } from '@/features/search-filters'
import { Genre, SearchType } from '@/features/search-filters/model/types'
import { SearchPlaylists } from '@/widgets/search-playlists'

const SearchPage = () => {
    const [query, setQuery] = useState('')
    const [activeGenre, setActiveGenre] = useState<Genre>('all')
    const [activeType, setActiveType] = useState<SearchType>('all')
    const debouncedQuery = useDebounce(query, 300)

    const { data, isLoading } = useQuery({
        queryKey: ['search', debouncedQuery],
        queryFn: () => search(debouncedQuery),
        enabled: debouncedQuery.length > 1,
    })

    const playlists = data?.playlists || []
    const tracks = data?.tracks || []

    const showPlaylists = activeType === 'all' || activeType === 'playlist'
    const showTracks = activeType === 'all' || activeType === 'track'

    const hasResults = (showPlaylists && playlists.length > 0) || (showTracks && tracks.length > 0)

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className={styles.page}>
            <div className={styles.backdrop} aria-hidden />

            <section className={styles.hero}>
                <Kicker text="Поиск" />
                <h1 className={styles['hero-title']}>Найди музыку по настроению</h1>
                <InputSearch value={query} onChange={setQuery} />
            </section>

            <SearchFilters
                activeGenre={activeGenre}
                activeType={activeType}
                onGenreChange={setActiveGenre}
                onTypeChange={setActiveType}
            />

            {!hasResults && (
                <section className={styles.empty}>
                    <Sparkles size={16} />
                    По текущему фильтру ничего не найдено
                </section>
            )}

            {showPlaylists && playlists.length > 0 && (
                <section className={styles.section} aria-labelledby="playlist-search-title">
                    <div className={styles['section-head']}>
                        <h2 id="playlist-search-title">Плейлисты</h2>
                    </div>

                    <SearchPlaylists playlists={playlists} />
                </section>
            )}

            {showTracks && tracks.length > 0 && (
                <section className={styles.section} aria-labelledby="track-search-title">
                    <div className={styles['section-head']}>
                        <h2 id="track-search-title">Треки</h2>
                    </div>

                    <TrackList trackData={tracks} />
                </section>
            )}
        </div>
    )
}

export default SearchPage
