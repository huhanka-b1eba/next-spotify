'use client'

import React from 'react'
import styles from './Sidebar.module.scss'
import Link from 'next/link'
import { Home, Search } from 'lucide-react'
import { Logo } from '@/shared/ui/logo'
import { usePathname } from 'next/navigation'

const sidebarLinks = [
    {
        name: 'Поиск',
        icon: Search,
        href: '/search',
    },
    {
        name: 'Главная',
        icon: Home,
        href: '/',
    },
]

const Sidebar = () => {
    const path = usePathname()

    return (
        <aside className={styles.sidebar}>
            <Link className={styles.brand} href="/">
                <Logo />
            </Link>
            <nav className={styles.nav} aria-label="Основная навигация">
                <ul className={styles['nav-list']}>
                    {sidebarLinks.map((elem, index) => (
                        <li key={index} className={styles['nav-item']}>
                            <Link
                                className={`${styles[`nav-link`]} ${path === elem.href ? styles.active : ''}`}
                                href={elem.href}
                            >
                                <span className={styles['nav-icon']} aria-hidden>
                                    <elem.icon size={22} />
                                </span>
                                {elem.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
