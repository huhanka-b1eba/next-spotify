import { Track } from '@/entities/track/model/type'
import { create } from 'zustand/react'

interface PlayerStore {
    currentTrack: Track | null
    isPlaying: boolean

    setTrack: (track: Track) => void
    togglePlay: () => void
    pause: () => void
    play: () => void
}

export const usePlayerStore = create<PlayerStore>((set) => ({
    currentTrack: null,
    isPlaying: false,

    setTrack: (track) =>
        set({
            currentTrack: track,
            isPlaying: true,
        }),

    togglePlay: () =>
        set((state) => ({
            isPlaying: !state.isPlaying,
        })),

    pause: () => set({ isPlaying: false }),
    play: () => set({ isPlaying: true }),
}))
