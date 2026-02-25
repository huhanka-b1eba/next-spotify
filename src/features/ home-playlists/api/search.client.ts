import { PlaylistCard } from '@/entities/playlist/model/type'

export const searchPlaylists = async (query: string): Promise<PlaylistCard[]> => {
    const resp = await fetch(`/api/deezer/search/playlist?q=${query}&limit=10`)

    if (!resp.ok) {
        throw new Error('Ошибка поиска')
    }

    return resp.json()
}
