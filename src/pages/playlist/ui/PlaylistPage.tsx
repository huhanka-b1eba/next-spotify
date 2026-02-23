import { notFound } from 'next/navigation'
import styles from './PlaylistPage.module.scss'
import ButtonListen from '@/shared/ui/buttonListen/ui/ButtonListen'
import { tracksMock } from '@/entities/track/model/mock'
import Kicker from '@/shared/ui/kicker/ui/Kicker'
import { TrackList } from '@/widgets/track-list'

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
                <TrackList trackData={tracksMock} />
            </section>
        </div>
    )
}

export default PlaylistPage
