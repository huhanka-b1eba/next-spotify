import React from 'react'
import { Sidebar } from '@/widgets/sidebar'
import { PlayerBar } from '@/widgets/player-bar'
import styles from './AppLayout.module.scss'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <main className={styles.main}>{children}</main>
      <div className={styles.player}>
        <PlayerBar />
      </div>
    </div>
  )
}

export default AppLayout
