import { PlaylistCard } from '@/entities/playlist/model/type'

export const getTrendingClient = async (limit: number = 4): Promise<PlaylistCard[]> => {
    const resp = await fetch(`/api/deezer/chart?limit=${limit}`)

    if (!resp.ok) {
        throw new Error('Ошибка получения трендов')
    }

    return resp.json()
}
