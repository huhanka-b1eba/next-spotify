import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    title: `Плейлист ${params.id} | Spotify`,
    description: `Прослушивание плейлиста ${params.id}`,
  }
}
