import { Button, BUTTON_TYPES, Logo } from '../common'
import { IMovie } from '../movieList/movie/Movie'
import styles from './MovieInfo.css'

interface IMovieInfo {
  movie: IMovie
  onClose: () => void
}

export const MovieInfo = ({ movie, onClose }: IMovieInfo) => {
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
            <img src={movie.img} />
          </div>
          <div className={styles.content}>
            <div className={styles.name}>{movie.name}</div>
            <div className={styles.rating}>{movie.rating}</div>
            <div className={styles.genre}>{movie.genre}</div>
            <div className={styles.aditionalInfo}>
              <span>{movie.release}</span>
              <span>{movie.runtime}</span>
            </div>
            <div className={styles.description}>{movie.overview}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
