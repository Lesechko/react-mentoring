import { IMovie } from '../../components/movieList/movie/Movie'
import { ActionType } from '../action-type/actionType'
import { Action } from '../actions/actions'

export interface IMovieState {
  movieList: IMovie[]
  activeMovie: IMovie | null
}

const initialState: IMovieState = {
  movieList: [],
  activeMovie: null,
}

export default function moviesReducer(
  state: IMovieState = initialState,
  action: Action,
) {
  switch (action.type) {
    case ActionType.SET_MOVIES:
    case ActionType.ADD_MOVIE:
    case ActionType.DELETE_MOVIE:
      return {
        ...state,
        movieList: action.payload,
      }
    case ActionType.SET_ACTIVE_MOVIE:
      return {
        ...state,
        activeMovie: state.movieList.find((m) => m.id === action.payload),
      }
    case ActionType.EDIT_MOVIE:
      return {
        ...state,
        movieList: state.movieList.map((m) =>
          m.id === action.payload.id ? action.payload : m,
        ),
      }
    default:
      return state
  }
}
