import { ReactElement, useMemo, useState } from 'react'
import { Navbar } from './navbar'
import MovieList from '../movieList/MovieList'
import { SortingType } from '../../utils/sortingUtils'
import { IMovie } from '../movieList/movie/Movie'
import { connect } from 'react-redux'
import {
  filterMovie,
  setActiveMovie,
  sortMovies,
} from '../../redux/action-creators/actionCreators'
import { GenreItems } from './navbar/genres/GenresConstants'
import { RootState } from '../../redux/reducers'

import styles from './Main.module.css'
interface IMain {
  movies: IMovie[]
  filteredMovie: IMovie[] | null
  onDelete: (id: number) => void
  onEdit: (id: number) => void
  showMovieInfo: (id: number) => void
  filterMovie: (genre: string) => void
  sortMovies: (id: number, direction: SortingType) => void
}

const Main = ({
  movies = [],
  filteredMovie,
  showMovieInfo,
  filterMovie,
  sortMovies,
  onDelete,
  onEdit,
}: IMain): ReactElement => {
  const [genres, setGenres] = useState(GenreItems)

  const onGenreClick = (id: number) => {
    const updateGenres = genres.map((item) => ({
      ...item,
      active: item.id === id,
    }))

    setGenres(updateGenres)
    filterMovie(updateGenres.find((genre) => genre.active)?.value)
  }

  const onSortChange = (id: number, sortingType: SortingType) => {
    sortMovies(id, sortingType)
  }

  const moviesCount = useMemo(
    () => (filteredMovie ? filteredMovie.length : movies.length),
    [movies.length, filteredMovie],
  )

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Navbar
          genres={genres}
          onGenreClick={onGenreClick}
          onSortChange={onSortChange}
        />
        <div className={styles['movies-counter']}>
          <span className={styles['number']}>{moviesCount}</span> movies found
        </div>
        <MovieList
          onEdit={onEdit}
          onDelete={onDelete}
          list={filteredMovie || movies}
          onMovieClick={showMovieInfo}
        ></MovieList>
      </div>
    </div>
  )
}

function mapStateToProps(state: RootState) {
  return {
    movies: state.movies.movieList,
    filteredMovie: state.movies.filteredMovie,
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    showMovieInfo: (id: number) => dispatch(setActiveMovie(id)),
    filterMovie: (genre: string) => dispatch(filterMovie(genre)),
    sortMovies: (id: number, direction: SortingType) =>
      dispatch(sortMovies(id, direction)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
