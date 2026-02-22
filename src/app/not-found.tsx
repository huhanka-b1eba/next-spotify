import styles from './not-found.module.scss'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.title}>Страница не найдена</h1>
        <p className={styles.description}>Возможно, она была удалена или не существует.</p>
        <Link className={styles.link} href="/">
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}
