import { mapDeezerPlaylist } from '@/entities/playlist/model/mapper'
import { Playlist } from '@/entities/playlist/model/type'
import { api, DeezerPlaylist } from '@/shared/api'

const getPlaylist = async (id: string): Promise<Playlist> => {
    try {
        const { data } = await api.get<DeezerPlaylist>(`/playlist/${id}`)
        return mapDeezerPlaylist(data)
    } catch (e) {
        console.log(e)
        throw new Error('Failed to fetch playlist')
    }
}

export default getPlaylist
