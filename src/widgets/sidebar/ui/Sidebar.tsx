import React from 'react'
import styles from './Sidebar.module.scss'
import { Logo } from '@/shared/Logo'
import Link from 'next/link'

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
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M12 3a9 9 0 1 0 5.65 15.99l4.18 4.18 1.41-1.41-4.18-4.18A9 9 0 0 0 12 3Zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z" />
                </svg>
              </span>
              Поиск
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link className={styles['nav-link']} href="#">
              <span className={styles['nav-icon']} aria-hidden>
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M12 3.2 3 10v10h6v-6h6v6h6V10l-9-6.8Z" />
                </svg>
              </span>
              Главная
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link className={styles['nav-link']} href="#">
              <span className={styles['nav-icon']} aria-hidden>
                <svg viewBox="0 0 24 24" role="img">
                  <path d="M4 5h3v14H4V5Zm5 0h3v14H9V5Zm5 0h6v3h-6V5Zm0 5h6v3h-6v-3Zm0 5h6v4h-6v-4Z" />
                </svg>
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
