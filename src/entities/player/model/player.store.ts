import { Track } from '@/entities/track/model/type'
import { create } from 'zustand/react'

interface PlayerStore {
    currentTrack: Track | null
    isPlaying: boolean

    currentTime: number
    duration: number

    setTrack: (track: Track) => void
    setCurrentTime: (time: number) => void
    setDuration: (duration: number) => void
    togglePlay: () => void
    pause: () => void
    play: () => void
}

export const usePlayerStore = create<PlayerStore>((set) => ({
    currentTrack: null,
    isPlaying: false,

    currentTime: 0,
    duration: 0,

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

    setCurrentTime: (time) => set({ currentTime: time }),
    setDuration: (duration) => set({ duration }),
}))
