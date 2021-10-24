import { IMovie } from '../../components/movieList/movie/Movie'
import { SortingType } from '../../utils/sortingUtils'
import { ActionType } from '../action-type/actionType'
import {
  SetMoviesAction,
  SetActiveMovie,
  AddMovieAction,
  FilterMovies,
  SortMovies,
} from '../actions/actions'

export function setMovies(payload: any): SetMoviesAction {
  return { type: ActionType.SET_MOVIES, payload }
}

export function setActiveMovie(id: number): SetActiveMovie {
  return { type: ActionType.SET_ACTIVE_MOVIE, payload: id }
}

export function addMovie(movie: IMovie): AddMovieAction {
  return { type: ActionType.ADD_MOVIE, payload: movie }
}

export function filterMovie(genre: string): FilterMovies {
  return { type: ActionType.FILTER_MOVIES, payload: genre }
}

export function sortMovies(id: number, direction: SortingType): SortMovies {
  return { type: ActionType.SORT_MOVIES, payload: { id, direction } }
}
