export interface DeezerTrack {
    id: number
    title: string
    duration: number
    preview: string
    artist: {
        name: string
    }
    album: {
        title: string
        cover_medium: string
    }
}

export interface DeezerPlaylist {
    id: number
    title: string
    description?: string
    picture_medium?: string
    creator?: {
        name: string
    }
    user?: {
        name: string
    }
    tracks?: {
        data: DeezerTrack[]
    }
}

export interface DeezerSearchResponse<T> {
    data: T[]
    total: number
    next?: string
}

export interface DeezerPlaylistSearchItem {
    id: number
    title: string
    picture_medium: string
    user: {
        name: string
    }
}
