import { Track } from '@/entities/track/model/type'
import { DeezerTrack } from '@/shared/api'

const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const restSeconds = seconds % 60

    return `${minutes}:${String(restSeconds).padStart(2, '0')}`
}

export const mapDeezerTrack = (track: DeezerTrack): Track => ({
    id: String(track.id),
    title: track.title,
    artist: track.artist.name,
    album: track.album.title,
    cover: track.album.cover_medium,
    duration: formatDuration(track.duration),
    preview: track.preview,
})
