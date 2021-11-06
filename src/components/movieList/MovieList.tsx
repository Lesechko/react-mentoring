import { ReactElement } from 'react'
import ContextMenuProvider from '../../providers/ContextMenuProvider'
import Movie, { IMovie } from './movie/Movie'
import { getContextMenuMovieData } from './Movie.utils'

import styles from './MovieList.module.css'

interface IMovieList {
  list: IMovie[]
  onEdit: (movieId: number) => void
  onDelete: (movieId: number) => void
  onMovieClick: (movieId: number) => void
}

const MovieList = ({
  list,
  onMovieClick,
  onDelete,
  onEdit,
}: IMovieList): ReactElement => {
  const contextMenuData = getContextMenuMovieData(onEdit, onDelete)

  return (
    list && (
      <ContextMenuProvider contextMenuData={contextMenuData}>
        <div className={styles['movie-list']}>
          {list.map((movie) => (
            <Movie movie={movie} onClick={onMovieClick} key={movie.id} />
          ))}
        </div>
      </ContextMenuProvider>
    )
  )
}

export default MovieList
