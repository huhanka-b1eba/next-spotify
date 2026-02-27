import React from 'react'
import styles from './TrackList.module.scss'
import { Skeleton } from '@/shared/ui/skeleton'

const TrackListSkeleton = ({ rows = 6 }: { rows?: number }) => {
    return (
        <div className={styles.table} aria-hidden>
            {Array.from({ length: rows }).map((_, index) => (
                <div key={index} className={styles['row-skeleton']}>
                    <div className={styles.cover}>
                        <Skeleton className={styles['skeleton-cover']} />
                    </div>
                    <div className={styles.track}>
                        <Skeleton className={styles['skeleton-line']} />
                        <Skeleton className={styles['skeleton-line']} />
                    </div>
                    <Skeleton className={styles['skeleton-album']} />
                    <Skeleton className={styles['skeleton-duration']} />
                </div>
            ))}
        </div>
    )
}

export default TrackListSkeleton
