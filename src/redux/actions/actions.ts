import { IMovie } from '../../components/movieList/movie/Movie'
import { SortingType } from '../../utils/sortingUtils'
import { ActionType } from '../action-type/actionType'

export interface AddMovieAction {
  type: ActionType.ADD_MOVIE
  payload: IMovie
}

export interface SetMoviesAction {
  type: ActionType.SET_MOVIES
  payload: IMovie[]
}

export interface SetActiveMovie {
  type: ActionType.SET_ACTIVE_MOVIE
  payload: number
}

export interface SortMovies {
  type: ActionType.SORT_MOVIES
  payload: {
    id: number
    direction: SortingType
  }
}

export interface FilterMovies {
  type: ActionType.FILTER_MOVIES
  payload: any
}

export type Action =
  | AddMovieAction
  | SetMoviesAction
  | SetActiveMovie
  | SortMovies
  | FilterMovies
