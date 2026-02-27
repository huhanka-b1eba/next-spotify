'use client'

import React, { useEffect, useRef } from 'react'
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
    const currentTrack = usePlayerStore((s) => s.currentTrack)
    const isPlaying = usePlayerStore((s) => s.isPlaying)
    const currentTime = usePlayerStore((s) => s.currentTime)
    const duration = usePlayerStore((s) => s.duration)

    const togglePlay = usePlayerStore((s) => s.togglePlay)
    const setCurrentTime = usePlayerStore((s) => s.setCurrentTime)
    const setDuration = usePlayerStore((s) => s.setDuration)

    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        const audio = audioRef.current
        if (!audio || !currentTrack?.preview) return

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime)
        }

        const handleLoaded = () => {
            if (!Number.isNaN(audio.duration)) {
                setDuration(audio.duration)
            }
        }

        const handleEnded = () => {
            // nextTrack()
        }

        audio.addEventListener('timeupdate', handleTimeUpdate)
        audio.addEventListener('loadedmetadata', handleLoaded)
        audio.addEventListener('ended', handleEnded)

        audio.src = currentTrack.preview
        audio.currentTime = 0
        audio.load()
        setCurrentTime(0)

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate)
            audio.removeEventListener('loadedmetadata', handleLoaded)
            audio.removeEventListener('ended', handleEnded)
        }
    }, [currentTrack, setCurrentTime, setDuration])

    useEffect(() => {
        if (audioRef.current === null || !currentTrack?.preview) return

        if (isPlaying) {
            void audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying, currentTrack])

    const progress = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0

    const formatTime = (time: number) => {
        if (!Number.isFinite(time) || time < 0) return '0:00'
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    if (currentTrack) {
        return (
            <aside className={styles['player-bar']}>
                <audio ref={audioRef} />
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
                        <button
                            className={styles['control-button']}
                            type="button"
                            aria-label="Повтор"
                        >
                            <Repeat />
                        </button>
                    </div>
                    <div className={styles['progress-row']}>
                        <span className={styles['time-label']}>{formatTime(currentTime)}</span>
                        <div className={styles['progress-bar']}>
                            <span
                                style={{
                                    width: `${progress}%`,
                                }}
                                className={styles['progress-fill']}
                            />
                        </div>
                        <span className={styles['time-label']}>{formatTime(duration)}</span>
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
                        <button
                            className={styles['icon-button']}
                            type="button"
                            aria-label="Громкость"
                        >
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
}

export default PlayerBar
