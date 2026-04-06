import { ChangeEvent } from 'react'
import styles from './InputSearch.module.scss'
import { Search } from 'lucide-react'

interface InputSearchProps {
    value: string
    onChange: (value: string) => void
}

const InputSearch = ({ value, onChange }: InputSearchProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <label className={styles.search} htmlFor="search">
            <Search size={18} />
            <input
                id="search"
                placeholder="Трек, артист, плейлист"
                type="text"
                value={value}
                onChange={handleChange}
            />
        </label>
    )
}

export default InputSearch
