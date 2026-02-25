'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import Kicker from '@/shared/ui/kicker/ui/Kicker'
import styles from './SearchPage.module.scss'
import { InputSearch } from '@/shared/ui/input-search'
import { useQuery } from '@tanstack/react-query'
import { search } from '@/entities/search/api/search.client'
import { useDebounce } from '@/shared/hooks/useDebounce'

type SearchType = 'all' | 'playlist' | 'track'
type Genre = 'all' | 'pop' | 'rock' | 'electro' | 'hiphop' | 'indie'

const genres: { id: Genre; label: string }[] = [
    { id: 'all', label: 'Все' },
    { id: 'pop', label: 'Pop' },
    { id: 'rock', label: 'Rock' },
    { id: 'electro', label: 'Electronic' },
    { id: 'hiphop', label: 'Hip-Hop' },
    { id: 'indie', label: 'Indie' },
]

const searchTypes: { id: SearchType; label: string }[] = [
    { id: 'all', label: 'Все' },
    { id: 'playlist', label: 'Плейлисты' },
    { id: 'track', label: 'Треки' },
]

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

    return (
        <div className={styles.page}>
            <div className={styles.backdrop} aria-hidden />

            <section className={styles.hero}>
                <Kicker text="Поиск" />
                <h1 className={styles['hero-title']}>Найди музыку по настроению</h1>
                <InputSearch value={query} onChange={setQuery} />
            </section>

            <section className={styles.panel} aria-label="search controls">
                <div className={styles.chips} role="tablist" aria-label="Filter by type">
                    {searchTypes.map((type) => (
                        <button
                            key={type.id}
                            className={styles.chip}
                            data-active={activeType === type.id}
                            onClick={() => setActiveType(type.id)}
                            type="button"
                        >
                            {type.label}
                        </button>
                    ))}
                </div>

                <div className={styles.chips} role="tablist" aria-label="Filter by genre">
                    {genres.map((genre) => (
                        <button
                            key={genre.id}
                            className={styles.chip}
                            data-active={activeGenre === genre.id}
                            onClick={() => setActiveGenre(genre.id)}
                            type="button"
                        >
                            {genre.label}
                        </button>
                    ))}
                </div>
            </section>

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

                    <div className={styles.grid}>
                        {playlists.map((playlist) => (
                            <Link
                                key={playlist.id}
                                className={styles.card}
                                href={`/playlist/${playlist.id}`}
                            >
                                <div
                                    className={styles.cover}
                                    style={{ background: playlist.cover }}
                                />
                                <h3>{playlist.title}</h3>
                                <p>{playlist.author}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {showTracks && tracks.length > 0 && (
                <section className={styles.section} aria-labelledby="track-search-title">
                    <div className={styles['section-head']}>
                        <h2 id="track-search-title">Треки</h2>
                    </div>

                    <div className={styles['track-list']}>
                        {tracks.map((track, index) => (
                            <article key={track.id} className={styles.track}>
                                <span className={styles.rank}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className={styles['track-meta']}>
                                    <h3>{track.title}</h3>
                                    <p>{track.artist}</p>
                                </div>
                                <span className={styles.duration}>{track.duration}</span>
                            </article>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}

export default SearchPage
