import { Play } from 'lucide-react'
import styles from './HomePage.module.scss'

const quickMixes = [
  { title: 'На повторе', subtitle: 'Твои любимые треки за неделю' },
  { title: 'Вечерний поток', subtitle: 'Мягкая электроника и инди' },
  { title: 'Новые релизы', subtitle: 'Свежие треки от любимых артистов' },
  { title: 'Спокойный фокус', subtitle: 'Музыка для работы и концентрации' },
]

const trending = [
  { title: 'Инди сегодня', listeners: '2.3M слушателей' },
  { title: 'Поп-волна', listeners: '1.8M слушателей' },
  { title: 'Хип-хоп поток', listeners: '1.5M слушателей' },
  { title: 'Lo-Fi утро', listeners: '980K слушателей' },
]

const dayPhrase = {
  morning: [
    'Доброе утро, начнём с хорошего трека',
    'Утро звучит лучше с музыкой',
    'Самое время включить что-то бодрое',
    'Пусть день начнётся с ритма',
    'Немного энергии к утреннему кофе',
    'Включаем настроение на максимум',
  ],
  day: [
    'Отличное время для фонового саунда',
    'Добавим немного ритма в рабочий день',
    'Что сегодня играет у вас в наушниках',
    'Плейлист для продуктивности',
    'Днём музыка звучит особенно хорошо',
    'Поймаем темп',
  ],
  evening: [
    'Вечер создан для атмосферных треков',
    'Самое время расслабиться',
    'Пусть играет что-то любимое',
    'Добавим немного вайба',
    'Музыка для плавного завершения дня',
    'Вечерний плейлист готов',
  ],
  night: [
    'Ночной режим включён',
    'Тише, но глубже',
    'Музыка, которая звучит лучше ночью',
    'Время для атмосферных треков',
    'Ночной саундтрек',
    'Пусть играет что-то спокойное',
  ],
}

type DayPhrase = keyof typeof dayPhrase

function getPhraseByHour(hour: number): DayPhrase {
  if (hour >= 6 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 18) return 'day'
  if (hour >= 18 && hour < 24) return 'evening'
  return 'night'
}

export function getDayPhrase(): string {
  const now = new Date()
  const phase = getPhraseByHour(now.getHours())
  const phrases = dayPhrase[phase]

  return phrases[Math.floor(Math.random() * phrases.length)]
}

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
            <article key={mix.title} className={styles['quick-card']}>
              <div>
                <h3>{mix.title}</h3>
                <p>{mix.subtitle}</p>
              </div>
              <button
                className={styles['mini-play']}
                type="button"
                aria-label={`Слушать ${mix.title}`}
              >
                <Play size={14} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="trending-title">
        <div className={styles['section-head']}>
          <h2 id="trending-title">Тренды недели</h2>
        </div>
        <div className={styles['trending-list']}>
          {trending.map((item, index) => (
            <article key={item.title} className={styles['trend-item']}>
              <span className={styles.rank}>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.listeners}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
