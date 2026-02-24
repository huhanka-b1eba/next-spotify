import { PlaylistCard } from '@/entities/playlist/model/type'

export const getQuickMixes = async (): Promise<PlaylistCard[]> => {
    const resp = await fetch('/api/deezer/search/playlist?q=pop&limit=4')

    if (!resp.ok) {
        throw new Error('Ошибка получения миксов')
    }

    return resp.json()
}
