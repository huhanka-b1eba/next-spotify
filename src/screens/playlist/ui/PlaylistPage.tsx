'use client'

import { notFound } from 'next/navigation'
import styles from './PlaylistPage.module.scss'
import ButtonListen from '@/shared/ui/button-listen/ui/ButtonListen'
import Kicker from '@/shared/ui/kicker/ui/Kicker'
import { TrackList } from '@/widgets/track-list'
import { useQuery } from '@tanstack/react-query'
import getPlaylist from '@/entities/playlist/api/getPlaylist'
import Image from 'next/image'

interface PlaylistPageProps {
    id: string
}

const PlaylistPage = ({ id }: PlaylistPageProps) => {
    const {
        data: playlist,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['playlist', id],
        queryFn: () => getPlaylist(id),
    })

    if (isLoading) return <div>Loading...</div>
    if (!id || isError || !playlist) return notFound()

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.cover} aria-hidden>
                    {playlist?.cover && (
                        <Image
                            className={styles['playlist-image']}
                            src={playlist?.cover}
                            alt={playlist?.description ?? 'Обложка плейлиста'}
                            width={200}
                            height={200}
                        />
                    )}
                </div>
                <div className={styles.meta}>
                    <Kicker text="Плейлист" />
                    <h1>{playlist?.title}</h1>
                    <p className={styles.description}>{playlist?.description}</p>
                    <div className={styles.actions}>
                        <ButtonListen text="Слушать" />
                        <span className={styles.stats}>{playlist?.tracks.length} треков</span>
                    </div>
                </div>
            </section>

            <section className={styles.section} aria-labelledby="track-list-title">
                <h2 id="track-list-title">Список треков</h2>
                <TrackList trackData={playlist?.tracks} />
            </section>
        </div>
    )
}

export default PlaylistPage
