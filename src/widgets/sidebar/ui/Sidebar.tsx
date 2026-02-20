import React from 'react'
import styles from './Sidebar.module.scss'
import Link from 'next/link'
import { Home, Library, Search } from 'lucide-react'
import { Logo } from '@/shared/Logo'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <Logo />
      </div>
      <nav className={styles.nav} aria-label="Основная навигация">
        <ul className={styles['nav-list']}>
          <li className={styles['nav-item']}>
            <Link className={styles['nav-link']} href="#">
              <span className={styles['nav-icon']} aria-hidden>
                <Search className={styles['nav-icon-svg']} />
              </span>
              Поиск
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link className={styles['nav-link']} href="#">
              <span className={styles['nav-icon']} aria-hidden>
                <Home className={styles['nav-icon-svg']} />
              </span>
              Главная
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link className={styles['nav-link']} href="#">
              <span className={styles['nav-icon']} aria-hidden>
                <Library className={styles['nav-icon-svg']} />
              </span>
              Библиотека
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.profile}>Profile</div>
    </aside>
  )
}

export default Sidebar
