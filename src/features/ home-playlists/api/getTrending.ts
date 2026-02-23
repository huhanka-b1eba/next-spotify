import { api } from '@/shared/api'
import { Playlist } from '@/entities/playlist/model/type'
import { mapDeezerPlaylist } from '@/entities/playlist/model/mapper'
import type { DeezerPlaylist } from '@/shared/api/deezer/types'

export const getTrending = async (): Promise<Playlist[]> => {
    const { data } = await api.get('/chart')

    const topPlaylists = data.playlists.data.slice(0, 4)
    const playlistDetails = await Promise.all(
        topPlaylists.map(({ id }: { id: number }) => api.get<DeezerPlaylist>(`/playlist/${id}`)),
    )

    return playlistDetails.map(({ data: playlist }) => mapDeezerPlaylist(playlist))
}
