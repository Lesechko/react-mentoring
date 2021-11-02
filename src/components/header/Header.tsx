import { ReactElement } from 'react'
import { Button, BUTTON_STYLE } from '../common/button'
import { Logo } from '../common/logo'
import { Search } from '../common/search'
import { IMovie } from '../movieList/movie/Movie'
import { MovieInfo } from '../movieInfo/MovieInfo'
import { connect } from 'react-redux'
import { setActiveMovie } from '../../redux/action-creators/actionCreators'
import { RootState } from '../../redux/reducers'

import styles from './Header.module.css'

interface IHeader {
  activeMovie: IMovie
  addMovie: () => void
  setActiveMovie: (id: number | null) => void
}

const Header = ({
  activeMovie,
  addMovie,
  setActiveMovie,
}: IHeader): ReactElement => {
  const onSearch = (searchTxt: string) => {
    console.log(searchTxt)
  }

  return activeMovie ? (
    <>
      <MovieInfo
        movie={activeMovie}
        onClose={() => setActiveMovie(null)}
      ></MovieInfo>
    </>
  ) : (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Logo />
          <Button style={BUTTON_STYLE.TRANSPARENT} onClick={addMovie}>
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
  )
}

function mapStateToProps(state: RootState) {
  return {
    activeMovie: state.movies.activeMovie,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    setActiveMovie: (id: number | null) => dispatch(setActiveMovie(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
