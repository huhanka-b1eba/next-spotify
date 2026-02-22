import { Play } from 'lucide-react'
import styles from './HomePage.module.scss'
import { getDayPhrase } from '@/shared/lib/dayPhrase'
import { quickMixes, trending } from '@/entities/playlist/model/mock'
import Link from 'next/link'

export const HomePage = () => {
    const phrase = getDayPhrase()

    return (
        <div className={styles.home}>
            <p className={styles.kicker}>Главная</p>
            <section className={styles.hero}>
                <h1 className={styles.title}>{phrase}</h1>
                <p className={styles.subtitle}>
                    Собрали персональную подборку на основе твоих прослушиваний.
                </p>
                <button className={styles['button-primary']} type="button">
                    <Play size={16} />
                    Слушать
                </button>
            </section>

            <section className={styles.section} aria-labelledby="quick-mixes-title">
                <div className={styles['section-head']}>
                    <h2 id="quick-mixes-title">Быстрые миксы</h2>
                </div>
                <div className={styles['quick-grid']}>
                    {quickMixes.map((mix) => (
                        <Link
                            className={styles['quick-card']}
                            key={mix.id}
                            href={`/playlist/${mix.id}`}
                            passHref
                        >
                            <div>
                                <h3>{mix.title}</h3>
                                <p>{mix.subtitle}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className={styles.section} aria-labelledby="trending-title">
                <div className={styles['section-head']}>
                    <h2 id="trending-title">Тренды недели</h2>
                </div>
                <div className={styles['trending-list']}>
                    {trending.map((item, index) => (
                        <Link
                            key={item.id}
                            className={styles['trend-item']}
                            href={`/playlist/${item.id}`}
                            passHref
                        >
                            <span className={styles.rank}>
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.listeners}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}
