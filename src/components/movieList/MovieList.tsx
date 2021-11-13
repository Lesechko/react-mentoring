import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import ContextMenuProvider from '../../providers/ContextMenuProvider'
import Movie, { IMovie } from './movie/Movie'
import { getContextMenuMovieData } from './Movie.utils'

import styles from './MovieList.module.css'

interface IMovieList {
  list: IMovie[]
  onSelect : (movieId: number) => void
  onEdit: (movieId: number) => void
  onDelete: (movieId: number) => void
}

const MovieList = ({ list, onSelect,onDelete, onEdit }: IMovieList): ReactElement => {
  const contextMenuData = getContextMenuMovieData(onEdit, onDelete)


  return (
    list && (
      <ContextMenuProvider contextMenuData={contextMenuData}>
        <div className={styles['movie-list']}>
          {list.map((movie) => (
            <Movie movie={movie} onClick={() => onSelect(movie.id)} key={movie.id}/>
          ))}
        </div>
      </ContextMenuProvider>
    )
  )
}

export default MovieList
