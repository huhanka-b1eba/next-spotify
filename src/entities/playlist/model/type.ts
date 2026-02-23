import { Track } from '@/entities/track/model/type'

export interface Playlist {
    id: number
    title: string
    cover: string
    description: string
    tracks: Track[]
}
