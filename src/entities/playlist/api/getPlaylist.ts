import { Playlist } from '@/entities/playlist/model/type'

const getPlaylist = async (id: string): Promise<Playlist> => {
    const resp = await fetch(`/api/deezer/playlist/${id}`)

    if (!resp.ok) {
        throw new Error('Ошибка получения плейлиста')
    }

    return resp.json()
}

export default getPlaylist
