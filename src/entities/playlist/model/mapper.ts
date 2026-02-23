import { Playlist } from '@/entities/playlist/model/type'
import { mapDeezerTrack } from '@/entities/track/model/mapper'
import { DeezerPlaylist } from '@/shared/api'

export const mapDeezerPlaylist = (playlist: DeezerPlaylist): Playlist => ({
    id: playlist.id,
    title: playlist.title,
    description: playlist.description,
    cover: playlist.picture_medium,
    tracks: playlist.tracks.data.map(mapDeezerTrack),
})
