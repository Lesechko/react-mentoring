import { IMovie } from '../components/movieList/movie/Movie'
import { ActionType } from './reducer'

export const addMovies = (movie: IMovie) => ({
  type: ActionType.ADD,
  payload: { movie },
})

export const deleteMovies = (id: string) => ({
  type: ActionType.DELETE,
  payload: { id },
})

export const setActiveMovie = (movie: IMovie | null) => ({
  type: ActionType.SET_ACTIVE,
  payload: { movie },
})
