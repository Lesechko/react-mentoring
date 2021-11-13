import { ReactElement, useState } from 'react'
import { Button, BUTTON_STYLE } from '../button'

import styles from './Search.css'
import { useMovieQueryParams } from '../../../hooks'
import { MovieParam } from '../../../hooks/useMovieQueryParams'

interface ISearch {
  placeholder: string
  actionName: string
  value: string
}

const Search = ({
  placeholder,
  actionName,
  value: initialValue = '',
}: ISearch): ReactElement => {
  const [value, setValue] = useState(initialValue)
  const [_, queryService] = useMovieQueryParams()
  const onActionClick = () => {
    queryService.addParams({ [MovieParam.Search] : value })
  }

  return (
    <div className={styles.search}>
      <input
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button style={BUTTON_STYLE.COMPLETE} onClick={onActionClick}>
        {actionName}
      </Button>
    </div>
  )
}

export default Search
