import styles from './Genres.module.css'
import { ReactElement, useEffect, useState } from 'react'
import { GenreItems } from './GenresConstants'
import { useSearchParams } from 'react-router-dom'
interface IGenres {
  genreList: typeof GenreItems
  onGenreClick: (id: number) => void
}

function Genres({ genreList }: IGenres): ReactElement {
  const [activeGenre, setActiveGenre] = useState<string>('All')
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    searchParams.has('genre')
      ? searchParams.set('genre', activeGenre.toLowerCase())
      : searchParams.append('genre', activeGenre.toLowerCase())
    setSearchParams(searchParams)
  }, [activeGenre])

  return (
    <ul className={styles.genreList}>
      {genreList.map((item) => (
        <li
          key={item.id}
          onClick={() => setActiveGenre(item.title)}
          className={`${styles.genre} ${
            item.title === activeGenre ? styles.active : ''
          }`}
        >
          {item.title}
        </li>
      ))}
    </ul>
  )
}

export default Genres
