import { DeezerPlaylist } from '@/shared/api'

export const getPlaylistAuthor = (playlist: DeezerPlaylist): string => {
    const artists = playlist.tracks?.data?.map((track) => track.artist.name).filter(Boolean) ?? []

    const uniqueArtists = Array.from(new Set(artists)).slice(0, 3)

    if (uniqueArtists.length > 0) {
        return uniqueArtists.join(', ')
    }

    return playlist.creator?.name ?? 'Неизвестный автор'
}
