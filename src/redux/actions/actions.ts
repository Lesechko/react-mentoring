import { IMovie } from '../../components/movieList/movie/Movie'
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

export interface GetMovieByIdAction {
  type: ActionType.GET_BY_ID
  payload: IMovie
}

export type Action =
  | AddMovieAction
  | SetMoviesAction
  | DeleteMovieAction
  | SetActiveMovieAction
  | FilterMoviesAction
  | EditMovieAction
  | GetMovieByIdAction
