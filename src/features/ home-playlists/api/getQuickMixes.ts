import { api, DeezerPlaylist } from '@/shared/api'
import type { DeezerSearchResponse } from '@/shared/api/deezer/types'
import { mapDeezerPlaylist } from '@/entities/playlist/model/mapper'
import { Playlist } from '@/entities/playlist/model/type'

export const getQuickMixes = async (): Promise<Playlist[]> => {
    const { data } = await api.get<DeezerSearchResponse<DeezerPlaylist>>(
        '/search/playlist?q=pop&limit=4',
    )

    const playlistDetails = await Promise.all(
        data.data.map(({ id }) => api.get<DeezerPlaylist>(`/playlist/${id}`)),
    )

    return playlistDetails.map(({ data: playlist }) => mapDeezerPlaylist(playlist))
}
