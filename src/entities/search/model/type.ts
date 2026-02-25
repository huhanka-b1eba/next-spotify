import { PlaylistCard } from '@/entities/playlist/model/type'
import { Track } from '@/entities/track/model/type'

export interface SearchResult {
    tracks: Track[]
    playlists: PlaylistCard[]
}
