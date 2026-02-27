'use client'

import React from 'react'
import {
    Bookmark,
    Cast,
    ListMusic,
    Pause,
    Play,
    Repeat,
    Shuffle,
    SkipBack,
    SkipForward,
    Volume2,
} from 'lucide-react'
import styles from './PlayerBar.module.scss'
import { usePlayerStore } from '@/entities/player/model/player.store'
import Image from 'next/image'

const PlayerBar = () => {
    const { currentTrack, togglePlay, isPlaying } = usePlayerStore()

    console.log(currentTrack)

    return (
        <aside className={styles['player-bar']}>
            <div className={styles.section}>
                <div className={styles['track-cover']}>
                    {currentTrack?.cover && (
                        <Image
                            className={styles['track-image']}
                            src={currentTrack.cover}
                            alt={currentTrack.title ?? 'Обложка трека'}
                            width={52}
                            height={52}
                            unoptimized
                        />
                    )}
                </div>
                <div className={styles['track-meta']}>
                    <span className={styles['track-title']}>{currentTrack?.title}</span>
                    <span className={styles['track-artist']}>{currentTrack?.artist}</span>
                </div>
                <button
                    className={styles['icon-button']}
                    type="button"
                    aria-label="Сохранить в медиатеку"
                >
                    <Bookmark />
                </button>
            </div>
            <div className={styles.controls}>
                <div className={styles['controls-row']}>
                    <button
                        className={styles['control-button']}
                        type="button"
                        aria-label="Случайный порядок"
                    >
                        <Shuffle />
                    </button>
                    <button
                        className={styles['control-button']}
                        type="button"
                        aria-label="Предыдущий трек"
                    >
                        <SkipBack />
                    </button>
                    <button
                        className={styles['play-button']}
                        type="button"
                        aria-label="Воспроизвести"
                        onClick={() => togglePlay()}
                    >
                        {isPlaying ? <Pause /> : <Play />}
                    </button>
                    <button
                        className={styles['control-button']}
                        type="button"
                        aria-label="Следующий трек"
                    >
                        <SkipForward />
                    </button>
                    <button className={styles['control-button']} type="button" aria-label="Повтор">
                        <Repeat />
                    </button>
                </div>
                <div className={styles['progress-row']}>
                    <span className={styles['time-label']}>1:12</span>
                    <div className={styles['progress-bar']}>
                        <span className={styles['progress-fill']} />
                    </div>
                    <span className={styles['time-label']}>{currentTrack?.duration}</span>
                </div>
            </div>
            <div className={styles.extras}>
                <button
                    className={styles['icon-button']}
                    type="button"
                    aria-label="Устройство вывода"
                >
                    <Cast />
                </button>
                <button className={styles['icon-button']} type="button" aria-label="Очередь">
                    <ListMusic />
                </button>
                <div className={styles['volume-row']}>
                    <button className={styles['icon-button']} type="button" aria-label="Громкость">
                        <Volume2 />
                    </button>
                    <div className={styles['volume-bar']}>
                        <span className={styles['volume-fill']} />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default PlayerBar
