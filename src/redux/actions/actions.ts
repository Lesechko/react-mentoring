import { IMovie } from '../../components/movieList/movie/Movie'
import { SortingType } from '../../utils/sortingUtils'
import { ActionType } from '../action-type/actionType'

export interface AddMovieAction {
  type: ActionType.ADD_MOVIE
  payload: IMovie[]
}

export interface SetMoviesAction {
  type: ActionType.SET_MOVIES
  payload: IMovie[]
}

export interface SetActiveMovieAction {
  type: ActionType.SET_ACTIVE_MOVIE
  payload: number
}

export interface SortMoviesAction {
  type: ActionType.SORT_MOVIES
  payload: {
    id: number
    direction: SortingType
  }
}

export interface FilterMoviesAction {
  type: ActionType.FILTER_MOVIES
  payload: any
}

export interface DeleteMovieAction {
  type: ActionType.DELETE_MOVIE
  payload: IMovie[]
}
export interface EditMovieAction {
  type: ActionType.EDIT_MOVIE
  payload: IMovie
}

export type Action =
  | AddMovieAction
  | SetMoviesAction
  | DeleteMovieAction
  | SetActiveMovieAction
  | SortMoviesAction
  | FilterMoviesAction
  | EditMovieAction
