import { PlaylistPage } from '@/pages/playlist'

interface PageProps {
  params: { id: string }
}

export default function Page({ params }: PageProps) {
  return <PlaylistPage params={params} />
}
