import { notFound } from 'next/navigation'
import { Clock3 } from 'lucide-react'
import styles from './PlaylistPage.module.scss'
import ButtonListen from '@/shared/ui/buttonListen/ui/ButtonListen'
import { tracksMock } from '@/entities/track/model/mock'
import Kicker from '@/shared/ui/kicker/ui/Kicker'

interface PlaylistPageProps {
    id: string
}

const PlaylistPage = ({ id }: PlaylistPageProps) => {
    if (!id) return notFound()

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.cover} aria-hidden />
                <div className={styles.meta}>
                    <Kicker text="Плейлист" />
                    <h1>{id.replaceAll('-', ' ')}</h1>
                    <p className={styles.description}>
                        Подборка треков для длинных поездок, работы и спокойного вечера.
                    </p>
                    <div className={styles.actions}>
                        <ButtonListen text="Слушать" />
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
                        <span className={styles['duration-icon']} aria-label="Длительность">
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
