import React from 'react'
import styles from './SearchPage.module.scss'
import { Skeleton } from '@/shared/ui/skeleton'
import { TrackListSkeleton } from '@/widgets/track-list'
import { SearchPlaylistsSkeleton } from '@/widgets/search-playlists'

const SearchPageSkeleton = () => {
    return (
        <div className={styles.page} aria-hidden>
            <div className={styles.backdrop} aria-hidden />

            <section className={styles.hero}>
                <Skeleton className={styles['skeleton-kicker']} />
                <Skeleton className={styles['skeleton-title']} />
                <Skeleton className={styles['skeleton-input']} />
            </section>

            <section className={styles['skeleton-filters']}>
                <div className={styles['skeleton-chip-row']}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Skeleton key={`type-${index}`} className={styles['skeleton-chip']} />
                    ))}
                </div>
                <div className={styles['skeleton-chip-row']}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={`genre-${index}`} className={styles['skeleton-chip']} />
                    ))}
                </div>
            </section>

            <section className={styles.section} aria-label="loading playlists">
                <div className={styles['section-head']}>
                    <Skeleton className={styles['skeleton-section-title']} />
                </div>
                <SearchPlaylistsSkeleton items={7} />
            </section>

            <section className={styles.section} aria-label="loading tracks">
                <div className={styles['section-head']}>
                    <Skeleton className={styles['skeleton-section-title']} />
                </div>
                <TrackListSkeleton rows={6} />
            </section>
        </div>
    )
}

export default SearchPageSkeleton
