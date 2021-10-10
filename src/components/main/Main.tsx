import { ReactElement, useContext, useEffect, useState } from 'react'
import { Navbar } from './navbar'
import { GenresToggle } from '../../state/state'
import MovieList from '../movieList/MovieList'

import styles from './Main.module.css'
import { getSortedMovies, SortingType } from '../../utils/sortingUtils'
import { IMovie } from '../movieList/movie/Movie'
import { MovieContext } from '../../contexts/movieContext'
import { setActiveMovie } from '../../state/actions'

const Main = (): ReactElement => {
  const [{ movieList }, dispatch] = useContext(MovieContext)
  const [genres, setGenres] = useState(GenresToggle)
  const [activeGenresId, setActiveGenresId] = useState(null)
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    const activeMovieList = activeGenresId
      ? movieList.filter((movie: IMovie) =>
          movie.genreId.includes(activeGenresId),
        )
      : movieList
    setMovies(activeMovieList)
  }, [movieList, activeGenresId])

  const onGenreClick = (id: number) => {
    const updateGenres = genres.map((item) => ({
      ...item,
      active: item.id === id,
    }))

    setGenres(updateGenres)
    setActiveGenresId(updateGenres.find((genre) => genre.active)?.id)
  }

  const onSortChange = (id: number, sortingType: SortingType) => {
    setMovies((movies) => getSortedMovies(movies, id, sortingType))
  }

  const onOpenMovieDetail = (movie: IMovie) => {
    dispatch(setActiveMovie(movie))
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Navbar
          genres={genres}
          onGenreClick={onGenreClick}
          onSortChange={onSortChange}
        />
        <div className={styles['movies-counter']}>
          <span className={styles['number']}>{movies.length}</span> movies found
        </div>
        <MovieList list={movies} onMovieClick={onOpenMovieDetail}></MovieList>
      </div>
    </div>
  )
}

export default Main
