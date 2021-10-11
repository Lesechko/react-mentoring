import { Button, BUTTON_TYPES } from '../button'
import { ReactElement, useState } from 'react'

import styles from './Search.css'

interface ISearch {
  onSearch(string: string): void
  placeholder: string
  actionName: string
}

const Search = ({
  onSearch,
  placeholder,
  actionName,
}: ISearch): ReactElement => {
  const [value, setValue] = useState('')

  return (
    <div className={styles.search}>
      <input
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type={BUTTON_TYPES.COMPLETE} onClick={() => onSearch(value)}>
        {actionName}
      </Button>
    </div>
  )
}

export default Search
