import React from 'react'
import { Clock3 } from 'lucide-react'
import { Track } from '@/entities/track/model/type'
import styles from './TrackList.module.scss'

const TrackList = ({ trackData }: { trackData: Track[] }) => {
    return (
        <div className={styles.table}>
            <div className={styles.head} role="row">
                <span>#</span>
                <span>Название</span>
                <span>Альбом</span>
                <span className={styles['duration-icon']} aria-label="Длительность">
                    <Clock3 size={14} />
                </span>
            </div>

            {trackData.map((track, index) => (
                <article key={track.id} className={styles.row}>
                    <span className={styles.index}>{index + 1}</span>
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
