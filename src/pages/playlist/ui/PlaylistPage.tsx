import { notFound } from 'next/navigation'
import { Clock3, Play } from 'lucide-react'
import styles from './PlaylistPage.module.scss'

interface PlaylistPageProps {
    id: string
}

interface Track {
    id: string
    title: string
    artist: string
    album: string
    duration: string
}

const tracksMock: Track[] = [
    {
        id: 'tr-01',
        title: 'Afterglow',
        artist: 'Neon District',
        album: 'City Lights',
        duration: '3:24',
    },
    {
        id: 'tr-02',
        title: 'Slow Motion',
        artist: 'Mira Vale',
        album: 'Open Roads',
        duration: '4:11',
    },
    {
        id: 'tr-03',
        title: 'Satellite Heart',
        artist: 'Kite Theory',
        album: 'Orbit',
        duration: '2:58',
    },
    {
        id: 'tr-04',
        title: 'Glass Night',
        artist: 'Nova Bloom',
        album: 'Late Hours',
        duration: '3:46',
    },
    {
        id: 'tr-05',
        title: 'Blue Static',
        artist: 'Polar Waves',
        album: 'Monochrome',
        duration: '3:32',
    },
    {
        id: 'tr-06',
        title: 'Drive South',
        artist: 'Riverline',
        album: 'Shoreline',
        duration: '4:03',
    },
    { id: 'tr-07', title: 'Hazy Room', artist: 'Aria K.', album: 'Velvet Tape', duration: '3:17' },
    {
        id: 'tr-08',
        title: 'Echoes in Rain',
        artist: 'Lunar Youth',
        album: 'Fragments',
        duration: '3:51',
    },
    {
        id: 'tr-09',
        title: 'Paper Planes',
        artist: 'Cloud Motel',
        album: 'Postcards',
        duration: '2:49',
    },
    { id: 'tr-10', title: 'Heatline', artist: 'Roux', album: 'Signals', duration: '3:29' },
]

const PlaylistPage = ({ id }: PlaylistPageProps) => {
    if (!id) return notFound()

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.cover} aria-hidden />
                <div className={styles.meta}>
                    <p className={styles.kicker}>Плейлист</p>
                    <h1>{id.replaceAll('-', ' ')}</h1>
                    <p className={styles.description}>
                        Подборка треков для длинных поездок, работы и спокойного вечера.
                    </p>
                    <div className={styles.actions}>
                        <button type="button" className={styles['play-button']}>
                            <Play size={16} />
                            Слушать
                        </button>
                        <span className={styles.stats}>{tracksMock.length} треков</span>
                    </div>
                </div>
            </section>

            <section className={styles.section} aria-labelledby="track-list-title">
                <h2 id="track-list-title">Список треков</h2>
                <div className={styles.table}>
                    <div className={styles.head} role="row">
                        <span>#</span>
                        <span>Название</span>
                        <span>Альбом</span>
                        <span className={styles.durationIcon} aria-label="Длительность">
                            <Clock3 size={14} />
                        </span>
                    </div>

                    {tracksMock.map((track, index) => (
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
            </section>
        </div>
    )
}

export default PlaylistPage
