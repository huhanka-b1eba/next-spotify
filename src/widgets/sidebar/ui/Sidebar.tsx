import React from 'react'
import styles from './Sidebar.module.scss'
import Link from 'next/link'
import { Home, Library, Search } from 'lucide-react'
import { ProfileSidebar } from '@/widgets/profile-sidebar'
import { Logo } from '@/shared/ui/logo'

const Sidebar = () => {
  const sidebarLinks = [
    {
      name: 'Поиск',
      icon: Search,
      href: '/',
    },
    {
      name: 'Главная',
      icon: Home,
      href: '/search',
    },
    {
      name: 'Библиотека',
      icon: Library,
      href: '/library',
    },
  ]

  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <Logo />
      </div>
      <nav className={styles.nav} aria-label="Основная навигация">
        <ul className={styles['nav-list']}>
          {sidebarLinks.map((elem, index) => (
            <li key={index} className={styles['nav-item']}>
              <Link className={styles['nav-link']} href={elem.href}>
                <span className={styles['nav-icon']} aria-hidden>
                  <elem.icon size={22} />
                </span>
                {elem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ProfileSidebar />
    </aside>
  )
}

export default Sidebar
