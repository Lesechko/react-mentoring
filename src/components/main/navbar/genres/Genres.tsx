import styles from './Genres.module.css'
import { ReactElement } from 'react'
import { GenreItems } from './GenresConstants'
interface IGenres {
  genreList: typeof GenreItems
  onGenreClick: (id: number) => void
}

function Genres({ genreList, onGenreClick }: IGenres): ReactElement {
  return (
    <ul className={styles.genreList}>
      {genreList.map((item) => (
        <li
          key={item.id}
          onClick={onGenreClick.bind(this, item.id)}
          className={`${styles.genre} ${item.active ? styles.active : ''}`}
        >
          {item.title}
        </li>
      ))}
    </ul>
  )
}

export default Genres
