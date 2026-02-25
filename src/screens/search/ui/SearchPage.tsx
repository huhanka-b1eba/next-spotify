'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import Kicker from '@/shared/ui/kicker/ui/Kicker'
import styles from './SearchPage.module.scss'
import { InputSearch } from '@/shared/input-search'

type SearchType = 'all' | 'playlist' | 'track'
type Genre = 'all' | 'pop' | 'rock' | 'electro' | 'hiphop' | 'indie'

interface SearchPlaylist {
    id: number
    title: string
    author: string
    cover: string
    genre: Genre
}

interface SearchTrack {
    id: string
    title: string
    artist: string
    duration: string
    genre: Genre
}

const playlistsMock: SearchPlaylist[] = [
    {
        id: 101,
        title: 'Night Drive',
        author: 'Neon Atlas',
        cover: 'linear-gradient(145deg, #2f3f63 0%, #111728 100%)',
        genre: 'electro',
    },
    {
        id: 102,
        title: 'Pop Radar',
        author: 'Daily Hits',
        cover: 'linear-gradient(145deg, #5a2f45 0%, #261521 100%)',
        genre: 'pop',
    },
    {
        id: 103,
        title: 'Garage Hearts',
        author: 'Noise Club',
        cover: 'linear-gradient(145deg, #503c22 0%, #1f1710 100%)',
        genre: 'rock',
    },
    {
        id: 104,
        title: 'Low Light Indie',
        author: 'Paper Sky',
        cover: 'linear-gradient(145deg, #2c4b47 0%, #122220 100%)',
        genre: 'indie',
    },
    {
        id: 105,
        title: 'Street Pulse',
        author: 'Block Session',
        cover: 'linear-gradient(145deg, #4d3938 0%, #1b1414 100%)',
        genre: 'hiphop',
    },
    {
        id: 106,
        title: 'Soft Sunday',
        author: 'Ease Collection',
        cover: 'linear-gradient(145deg, #5b5231 0%, #231f12 100%)',
        genre: 'pop',
    },
]

const tracksMock: SearchTrack[] = [
    {
        id: 's-01',
        title: 'After Midnight',
        artist: 'Nova Bloom',
        duration: '3:18',
        genre: 'electro',
    },
    { id: 's-02', title: 'Invisible Ink', artist: 'Lunar Youth', duration: '2:59', genre: 'indie' },
    { id: 's-03', title: 'Day One', artist: 'Mira Vale', duration: '3:45', genre: 'pop' },
    { id: 's-04', title: 'Broken Radio', artist: 'Noise Club', duration: '4:05', genre: 'rock' },
    { id: 's-05', title: 'Slow Burn', artist: 'Roux', duration: '3:12', genre: 'hiphop' },
    {
        id: 's-06',
        title: 'Static Lane',
        artist: 'Neon District',
        duration: '3:29',
        genre: 'electro',
    },
]

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

    const normalizedQuery = query.trim().toLowerCase()

    const filteredPlaylists = useMemo(() => {
        return playlistsMock.filter((item) => {
            const byGenre = activeGenre === 'all' || item.genre === activeGenre
            const byQuery =
                normalizedQuery.length === 0 ||
                item.title.toLowerCase().includes(normalizedQuery) ||
                item.author.toLowerCase().includes(normalizedQuery)

            return byGenre && byQuery
        })
    }, [activeGenre, normalizedQuery])

    const filteredTracks = useMemo(() => {
        return tracksMock.filter((item) => {
            const byGenre = activeGenre === 'all' || item.genre === activeGenre
            const byQuery =
                normalizedQuery.length === 0 ||
                item.title.toLowerCase().includes(normalizedQuery) ||
                item.artist.toLowerCase().includes(normalizedQuery)

            return byGenre && byQuery
        })
    }, [activeGenre, normalizedQuery])

    const showPlaylists = activeType === 'all' || activeType === 'playlist'
    const showTracks = activeType === 'all' || activeType === 'track'
    const hasResults =
        (showPlaylists && filteredPlaylists.length > 0) || (showTracks && filteredTracks.length > 0)

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

            {showPlaylists && filteredPlaylists.length > 0 && (
                <section className={styles.section} aria-labelledby="playlist-search-title">
                    <div className={styles['section-head']}>
                        <h2 id="playlist-search-title">Плейлисты</h2>
                    </div>

                    <div className={styles.grid}>
                        {filteredPlaylists.map((playlist) => (
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

            {showTracks && filteredTracks.length > 0 && (
                <section className={styles.section} aria-labelledby="track-search-title">
                    <div className={styles['section-head']}>
                        <h2 id="track-search-title">Треки</h2>
                    </div>

                    <div className={styles['track-list']}>
                        {filteredTracks.map((track, index) => (
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
