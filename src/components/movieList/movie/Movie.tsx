import { ReactElement } from 'react'
import styles from './Movie.module.css'
export interface IMovie {
  budget: number
  genres: string[]
  id: number
  overview: string
  poster_path: string
  release_date: string
  revenue: number
  runtime: number
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}

export interface IMovieProps {
  movie: IMovie
  onClick: (movieId: number) => void
}

const Movie = ({ movie, onClick }: IMovieProps): ReactElement => {
  const year = new Date(movie.release_date).getFullYear()
  return (
    <div className={styles.movie} onClick={() => onClick(movie.id)}>
      <div className={styles.imgWrapper}>
        <img
          src={movie.poster_path}
          alt={movie.title}
          className={styles.img}
        ></img>
      </div>
      <div className={styles.content}>
        <div className={styles.discription}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.genre}>{movie.genres.join(' ')}</div>
        </div>
        <div className={styles.year}>{year}</div>
      </div>
    </div>
  )
}

export default Movie
