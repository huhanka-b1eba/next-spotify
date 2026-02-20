import React from 'react'
import { Sidebar } from '@/widgets/sidebar'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  )
}

export default AppLayout
