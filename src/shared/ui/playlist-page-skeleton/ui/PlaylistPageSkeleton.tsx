import React from 'react'
import styles from './PlaylistPageSkeleton.module.scss'
import { Skeleton } from '@/shared/ui/skeleton'
import { TrackListSkeleton } from '@/widgets/track-list'

const PlaylistPageSkeleton = () => {
    return (
        <div className={styles.page} aria-hidden>
            <section className={styles.hero}>
                <div className={styles.cover}>
                    <Skeleton className={styles['skeleton-cover']} />
                </div>
                <div className={styles.meta}>
                    <Skeleton className={styles['skeleton-kicker']} />
                    <Skeleton className={styles['skeleton-title']} />
                    <Skeleton className={styles['skeleton-description']} />
                    <Skeleton className={styles['skeleton-description']} />
                    <div className={styles.actions}>
                        <Skeleton className={styles['skeleton-button']} />
                        <Skeleton className={styles['skeleton-stats']} />
                    </div>
                </div>
            </section>

            <section className={styles.section} aria-label="loading tracks">
                <Skeleton className={styles['skeleton-section-title']} />
                <TrackListSkeleton rows={6} />
            </section>
        </div>
    )
}

export default PlaylistPageSkeleton
