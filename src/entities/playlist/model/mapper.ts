import { Playlist } from '@/entities/playlist/model/type'
import { mapDeezerTrack } from '@/entities/track/model/mapper'
import { DeezerPlaylist } from '@/shared/api'
import { getPlaylistAuthor } from '@/features/ home-playlists/api/getPlaylistAuthor'

export const mapDeezerPlaylist = (playlist: DeezerPlaylist): Playlist => ({
    id: playlist.id,
    title: playlist.title,
    description: playlist.description ?? '',
    cover: playlist.picture_medium ?? '',
    tracks: playlist.tracks?.data.map(mapDeezerTrack) ?? [],
    author: getPlaylistAuthor(playlist),
})
