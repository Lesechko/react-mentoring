import { useEffect } from 'react'
import { useMovieApi, useMovieQueryParams } from '../../hooks'
import { MovieParam } from '../../hooks/useMovieQueryParams'
import { Button, BUTTON_STYLE, Logo } from '../common'

import styles from './MovieInfo.css'

export const MovieInfo = () => {
  const [, queryService] = useMovieQueryParams()
  const [movie, action] = useMovieApi()
  const id = queryService.getParam(MovieParam.Movie)

  useEffect(() => {
    action.GET_BY_ID(id)
    window.scrollTo(0, 0)
  }, [id])

  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const getStringDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', options as any)

  const onClose = () => queryService.deleteParam(MovieParam.Movie)

  return (
    movie && (
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <Logo />
            <Button style={BUTTON_STYLE.NONE} onClick={onClose}>
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
                <span>{getStringDate(movie.release_date)}</span>
                <span>{movie.runtime}</span>
              </div>
              <div className={styles.description}>{movie.overview}</div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
