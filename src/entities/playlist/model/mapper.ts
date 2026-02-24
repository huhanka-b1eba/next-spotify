import { Playlist, PlaylistCard } from '@/entities/playlist/model/type'
import { mapDeezerTrack } from '@/entities/track/model/mapper'
import { DeezerPlaylist } from '@/shared/api'
import { getPlaylistAuthor } from '@/features/ home-playlists/api/getPlaylistAuthor'
import { DeezerPlaylistSearchItem } from '@/shared/api/deezer/types'

export const mapDeezerPlaylist = (playlist: DeezerPlaylist): Playlist => ({
    id: playlist.id,
    title: playlist.title,
    description: playlist.description ?? '',
    cover: playlist.picture_medium ?? '',
    tracks: playlist.tracks?.data.map(mapDeezerTrack) ?? [],
    author: getPlaylistAuthor(playlist),
})

export const mapDeezerPlaylistCard = (playlist: DeezerPlaylistSearchItem): PlaylistCard => ({
    id: playlist.id,
    title: playlist.title,
    cover: playlist.picture_medium,
    author: playlist.user?.name ?? 'Unknown',
})
