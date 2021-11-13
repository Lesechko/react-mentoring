import { ReactElement, useMemo, useRef } from 'react'
import styles from './Movie.module.css'
export interface IMovie {
  genres: string[]
  overview: string
  poster_path: string
  release_date: string
  runtime: number
  title: string
  vote_average: number
  vote_count?: number
  tagline?: string
  revenue?: number
  budget?: number
  id?: number
}

export interface IMovieProps {
  movie: IMovie
  onClick: () => void
}

const Movie = ({ movie, onClick }: IMovieProps): ReactElement => {
  const year = useMemo(
    () => new Date(movie.release_date).getFullYear(),
    [movie.release_date],
  )

  return (
    <div data-movie={movie.id} className={styles.movie} onClick={onClick}>
      <div className={styles.imgWrapper}>
        <img
          src={movie.poster_path}
          alt={movie.title}
          className={styles.img}
          data-movie={movie.id}
        ></img>
      </div>
      <div className={styles.content}>
        <div className={styles.discription} data-movie={movie.id}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.genre}>{movie.genres.join(' ')}</div>
        </div>
        <div className={styles.year}>{year}</div>
      </div>
    </div>
  )
}

export default Movie
