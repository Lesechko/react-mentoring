import { ReactElement, useContext, useState } from 'react'
import { Modal } from '../common'
import { Button, BUTTON_TYPES } from '../common/button'
import { Logo } from '../common/logo'
import { Search } from '../common/search'
import { IMovie } from '../movieList/movie/Movie'
import styles from './Header.module.css'
import { MovieInfo } from '../movieInfo/MovieInfo'
import { connect } from 'react-redux'
import {
  addMovie,
  setActiveMovie,
} from '../../redux/action-creators/actionCreators'
import { RootState } from '../../redux/reducers'

interface IHeader {
  activeMovie: IMovie
  addMovie: (movie: IMovie) => void
  setActiveMovie: (id: number | null) => void
}

const Header = ({
  activeMovie,
  addMovie,
  setActiveMovie,
}: IHeader): ReactElement => {
  const [formOpen, setFormOpen] = useState(false)

  const onSearch = (searchTxt: string) => {
    console.log(searchTxt)
  }

  const onAddClick = () => setFormOpen(true)

  const onAddMovie = (movie: IMovie) => {
    setFormOpen(false)
    addMovie(movie)
  }

  return activeMovie ? (
    <>
      <MovieInfo
        movie={activeMovie}
        onClose={() => setActiveMovie(null)}
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

function mapStateToProps(state: RootState) {
  return {
    activeMovie: state.movies.activeMovie,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    addMovie: (movie: IMovie) => dispatch(addMovie(movie)),
    setActiveMovie: (id: number | null) => dispatch(setActiveMovie(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
