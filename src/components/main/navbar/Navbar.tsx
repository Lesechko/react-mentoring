import styles from './Navbar.module.css'
import { Genres } from './genres'
import { ReactElement } from 'react'
import { Sorting } from '../../common'
import { GenreItems } from './genres/GenresConstants'
import { sortingItem, SortingType } from '../../common/sorting/Sorting.constants'

interface INavbar {
  genres: typeof GenreItems
  onGenreClick: (id: number) => void
  onSortChange: (id: string, sortType: SortingType) => void
}

const Navbar = ({
  genres,
  onGenreClick,
  onSortChange,
}: INavbar): ReactElement => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <Genres genreList={genres} onGenreClick={onGenreClick}></Genres>
        <Sorting
          sortingItem={sortingItem}
          onItemTriggered={onSortChange}
        ></Sorting>
      </div>
      <div className={styles.line} />
    </div>
  )
}

export default Navbar
