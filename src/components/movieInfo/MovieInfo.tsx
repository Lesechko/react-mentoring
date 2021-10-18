import { Button, BUTTON_TYPES, Logo } from '../common'
import { IMovie } from '../movieList/movie/Movie'
import styles from './MovieInfo.css'

interface IMovieInfo {
  movie: IMovie
  onClose: () => void
}

export const MovieInfo = ({ movie, onClose }: IMovieInfo) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(movie.release_date).toLocaleDateString('en-US', options)

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <Logo />
          <Button type={BUTTON_TYPES.NONE} onClick={onClose}>
            --O
          </Button>
        </div>
        <div className={styles.movieInfo}>
          <div className={styles.img}>
            <img src={movie.poster_path} />
          </div>
          <div className={styles.content}>
            <div className={styles.name}>{movie.title}</div>
            <div className={styles.rating}>{movie.vote_average}</div>
            <div className={styles.genre}>{movie.genres.join(' ')}</div>
            <div className={styles.aditionalInfo}>
              <span>{date}</span>
              <span>{movie.runtime}</span>
            </div>
            <div className={styles.description}>{movie.overview}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
