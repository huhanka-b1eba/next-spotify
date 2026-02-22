import React from 'react'
import styles from './Kicker.module.scss'

interface KickerProps {
    text: string
}

const Kicker = ({ text }: KickerProps) => {
    return <div className={styles.kicker}>{text}</div>
}

export default Kicker
