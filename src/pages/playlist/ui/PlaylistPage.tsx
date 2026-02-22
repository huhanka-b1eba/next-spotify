import { notFound } from 'next/navigation'

interface PlaylistPageProps {
  params: { id: string }
}

const PlaylistPage = ({ params }: PlaylistPageProps) => {
  const { id } = params

  if (!id) {
    notFound()
  }

  return (
    <div>
      <h1>Плейлист: {id}</h1>
      <p>Здесь список треков</p>
    </div>
  )
}

export default PlaylistPage
