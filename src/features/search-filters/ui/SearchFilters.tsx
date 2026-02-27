import React from 'react'
import { Genre, SearchType } from '@/features/search-filters/model/types'
import styles from './SearchFilters.module.scss'

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

interface SearchFiltersProps {
    activeType: SearchType
    activeGenre: Genre
    onTypeChange: (t: SearchType) => void
    onGenreChange: (g: Genre) => void
}

const SearchFilters = ({
    activeType,
    activeGenre,
    onTypeChange,
    onGenreChange,
}: SearchFiltersProps) => {
    return (
        <section className={styles.panel} aria-label="search controls">
            <div className={styles.chips} role="tablist" aria-label="Filter by type">
                {searchTypes.map((type) => (
                    <button
                        key={type.id}
                        className={styles.chip}
                        data-active={activeType === type.id}
                        onClick={() => onTypeChange(type.id)}
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
                        onClick={() => onGenreChange(genre.id)}
                        type="button"
                    >
                        {genre.label}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default SearchFilters
