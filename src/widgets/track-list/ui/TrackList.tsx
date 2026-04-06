'use client'

import React from 'react'
import { Track } from '@/entities/track/model/type'
import styles from './TrackList.module.scss'
import { usePlayerStore } from '@/entities/player/model/player.store'
import Image from 'next/image'

const TrackList = ({ trackData }: { trackData: Track[] }) => {
    const setTrack = usePlayerStore((s) => s.setTrack)

    return (
        <div className={styles.table}>
            {trackData.map((track) => (
                <article key={track.id} className={styles.row} onClick={() => setTrack(track)}>
                    <div className={styles.cover}>
                        <div className={styles['image-fallback']} aria-hidden />
                        {track?.cover && (
                            <Image
                                className={styles['track-image']}
                                src={track.cover}
                                alt={track.title ?? 'Обложка'}
                                width={50}
                                height={50}
                                onError={(event) => {
                                    event.currentTarget.style.display = 'none'
                                }}
                            />
                        )}
                    </div>
                    <div className={styles.track}>
                        <h3>{track.title}</h3>
                        <p>{track.artist}</p>
                    </div>
                    <p className={styles.album}>{track.album}</p>
                    <span className={styles.duration}>{track.duration}</span>
                </article>
            ))}
        </div>
    )
}

export default TrackList
