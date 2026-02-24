import { PlaylistCard } from '@/entities/playlist/model/type'

export const getTrending = async (): Promise<PlaylistCard[]> => {
    const resp = await fetch('/api/deezer/chart?limit=4')

    if (!resp.ok) {
        throw new Error('Ошибка получения трендов')
    }

    return resp.json()
}
