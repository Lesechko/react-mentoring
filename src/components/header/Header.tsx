import { ReactElement, useContext, useState } from 'react'
import { Modal } from '../common'
import { Button, BUTTON_TYPES } from '../common/button'
import { Logo } from '../common/logo'
import { Search } from '../common/search'
import { IMovie } from '../movieList/movie/Movie'
import { MovieContext } from '../../contexts/movieContext'
import styles from './Header.module.css'
import { addMovies, setActiveMovie } from '../../state/actions'
import { MovieInfo } from '../movieInfo/MovieInfo'

const Header = (): ReactElement => {
  const [formOpen, setFormOpen] = useState(false)
  const [state, dispatch] = useContext(MovieContext)

  const onSearch = (searchTxt: string) => {
    console.log(searchTxt)
  }

  const onAddClick = () => setFormOpen(true)

  const onAddMovie = (movie: IMovie) => {
    setFormOpen(false)
    dispatch(addMovies(movie))}

  return state.activeMovie ? (
    <>
      <MovieInfo
        movie={state.activeMovie}
        onClose={() => dispatch(setActiveMovie(null))}
      ></MovieInfo>
    </>
  ) : (
    <>
      <Modal
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={onAddMovie}
      />
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <Logo />
            <Button type={BUTTON_TYPES.TRANSPARENT} onClick={onAddClick}>
              + Add movie
            </Button>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>Find your movie</div>
            <Search
              placeholder="What do you want to watch ?"
              actionName="Search"
              onSearch={onSearch}
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
