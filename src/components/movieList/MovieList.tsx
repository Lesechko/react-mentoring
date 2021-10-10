import { ReactElement } from 'react'
import Movie, { IMovie } from './movie/Movie'
import styles from './MovieList.module.css'

interface IMovieList {
  list: IMovie[]
  onMovieClick: (movie: IMovie) => void
}

const MovieList = ({ list, onMovieClick }: IMovieList): ReactElement => {
  if (!list) {
    return null
  }

  return (
    <div className={styles['movie-list']}>
      {list.map((movie) => (
        <Movie movie={movie} onClick={onMovieClick} key={movie.id} />
      ))}
    </div>
  )
}

export default MovieList
