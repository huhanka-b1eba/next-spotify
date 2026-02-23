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
    description: string
    picture_medium: string
    tracks: {
        data: DeezerTrack[]
    }
}
