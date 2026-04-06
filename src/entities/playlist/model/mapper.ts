import { Playlist, PlaylistCard } from '@/entities/playlist/model/type'
import { mapDeezerTrack } from '@/entities/track/model/mapper'
import { DeezerPlaylist } from '@/shared/api'
import { DeezerPlaylistSearchItem } from '@/shared/api/deezer/types'

export const mapDeezerPlaylist = (playlist: DeezerPlaylist): Playlist => ({
    id: playlist.id,
    title: playlist.title,
    description: playlist.description ?? '',
    cover: playlist.picture_medium ?? '',
    tracks: playlist.tracks?.data.map(mapDeezerTrack) ?? [],
    author: playlist.creator?.name ?? 'Неизвестный автор',
})

export const mapDeezerPlaylistCard = (playlist: DeezerPlaylistSearchItem): PlaylistCard => ({
    id: playlist.id,
    title: playlist.title,
    cover: playlist.picture_medium,
    author: playlist.user?.name ?? 'Unknown',
})
