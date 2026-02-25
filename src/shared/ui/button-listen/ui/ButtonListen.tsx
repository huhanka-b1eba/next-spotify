import React from 'react'
import { Play } from 'lucide-react'
import styles from './ButtonListen.module.scss'

interface ButtonListenProps {
    text: string
}

const ButtonListen = ({ text }: ButtonListenProps) => {
    return (
        <button className={styles['button-listen']} type="button">
            <Play size={16} />
            {text}
        </button>
    )
}

export default ButtonListen
