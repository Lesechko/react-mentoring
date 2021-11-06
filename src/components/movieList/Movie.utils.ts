import { IContextMenuData } from '../common/context-menu/ContextMenu'
import { IMovieForm } from '../common/modal/Modal'
import { IMovie } from './movie/Movie'

export const getContextMenuMovieData = (
  onEdit: (id: number) => void,
  onDelete: (id: number) => void,
): IContextMenuData[] => [
  {
    label: 'Edit',
    onClick: onEdit,
  },
  {
    label: 'Delete',
    onClick: onDelete,
  },
]

export const getNewMovieTemplate = (movie: IMovieForm) => {
  const movieForm: IMovie = {
    overview: movie.overview,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    runtime: +movie.runtime,
    title: movie.title,
    vote_average: +movie.vote_average,
    genres: [movie.genre],
  }

  movie.id && (movieForm.id = movie.id)

  return movieForm
}
