import { mapDeezerPlaylist } from '@/entities/playlist/model/mapper'
import { mapDeezerPlaylistCard } from '@/entities/playlist/model/mapper'
import type {
    DeezerPlaylist,
    DeezerPlaylistSearchItem,
    DeezerSearchResponse,
} from '@/shared/api/deezer/types'
import type { Playlist, PlaylistCard } from '@/entities/playlist/model/type'

interface DeezerChartResponse {
    playlists: {
        data: DeezerPlaylistSearchItem[]
        total: number
    }
}

export const getPlaylistService = async (id: string): Promise<Playlist> => {
    const res = await fetch(`https://api.deezer.com/playlist/${id}`, { next: { revalidate: 60 } })

    if (!res.ok) {
        throw new Error('Failed to fetch playlist')
    }

    const data: DeezerPlaylist = await res.json()

    return mapDeezerPlaylist(data)
}

export const getTrendingService = async (limit: number): Promise<PlaylistCard[]> => {
    const res = await fetch(`https://api.deezer.com/chart?limit=${limit}`, {
        next: { revalidate: 60 },
    })

    if (!res.ok) {
        throw new Error('Failed to fetch chart')
    }

    const data: DeezerChartResponse = await res.json()

    return data.playlists.data.slice(0, limit).map(mapDeezerPlaylistCard)
}

export const getQuickMixesService = async (
    query: string,
    limit: number,
): Promise<PlaylistCard[]> => {
    const res = await fetch(`https://api.deezer.com/search/playlist?q=${query}&limit=${limit}`, {
        next: { revalidate: 60 },
    })

    if (!res.ok) {
        throw new Error('Failed to fetch mixes')
    }

    const data: DeezerSearchResponse<DeezerPlaylistSearchItem> = await res.json()

    return data.data.slice(0, limit).map(mapDeezerPlaylistCard)
}
