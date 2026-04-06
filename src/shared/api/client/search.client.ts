import { SearchResult } from '@/entities/search/model/type'

export const search = async (query: string): Promise<SearchResult> => {
    const res = await fetch(`/api/deezer/search?q=${encodeURIComponent(query)}&limit=5`)

    if (!res.ok) {
        throw new Error('Ошибка поиска')
    }

    return res.json()
}
