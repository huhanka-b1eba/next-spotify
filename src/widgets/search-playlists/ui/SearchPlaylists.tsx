import React from 'react'
import Link from 'next/link'
import styles from './SearchPlaylists.module.scss'
import { PlaylistCard } from '@/entities/playlist/model/type'
import Image from 'next/image'

const SearchPlaylists = ({ playlists }: { playlists: PlaylistCard[] }) => {
    return (
        <div className={styles.grid}>
            {playlists.map((playlist) => (
                <Link key={playlist.id} className={styles.card} href={`/playlist/${playlist.id}`}>
                    <div className={styles.cover}>
                        {playlist.cover && (
                            <Image
                                className={styles['playlist-image']}
                                src={playlist.cover}
                                alt={playlist.title ?? 'Обложка плейлиста'}
                                width={250}
                                height={250}
                            />
                        )}
                    </div>
                    <h3>{playlist.title}</h3>
                    <p>{playlist.author}</p>
                </Link>
            ))}
        </div>
    )
}

export default SearchPlaylists
