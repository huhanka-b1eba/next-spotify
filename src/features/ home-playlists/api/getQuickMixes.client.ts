import { PlaylistCard } from '@/entities/playlist/model/type'

export const getQuickMixesClient = async (
    query: string = 'pop',
    limit: number = 4,
): Promise<PlaylistCard[]> => {
    const resp = await fetch(`/api/deezer/search/playlist?q=${query}&limit=${limit}`)

    if (!resp.ok) {
        throw new Error('Ошибка получения миксов')
    }

    return resp.json()
}
