import { IMovie } from '../../components/movieList/movie/Movie'
import { SortingType } from '../../utils/sortingUtils'
import { ActionType } from '../action-type/actionType'
import {
  SetMoviesAction,
  SetActiveMovieAction,
  AddMovieAction,
  FilterMoviesAction,
  SortMoviesAction,
  DeleteMovieAction,
  EditMovieAction,
} from '../actions/actions'

export function setMovies(payload: IMovie[]): SetMoviesAction {
  return { type: ActionType.SET_MOVIES, payload }
}

export function setActiveMovie(id: number): SetActiveMovieAction {
  return { type: ActionType.SET_ACTIVE_MOVIE, payload: id }
}

export function addMovie(movies: IMovie[]): AddMovieAction {
  return { type: ActionType.ADD_MOVIE, payload: movies }
}

export function filterMovie(genre: string): FilterMoviesAction {
  return { type: ActionType.FILTER_MOVIES, payload: genre }
}

export function sortMovies(
  id: number,
  direction: SortingType,
): SortMoviesAction {
  return { type: ActionType.SORT_MOVIES, payload: { id, direction } }
}

export function deleteMovie(payload: IMovie[]): DeleteMovieAction {
  return { type: ActionType.DELETE_MOVIE, payload }
}

export function editMovie(payload: IMovie): EditMovieAction {
  return { type: ActionType.EDIT_MOVIE, payload }
}
