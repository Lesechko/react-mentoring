import { IMovie } from '../../components/movieList/movie/Movie'
import { getSortedMovies } from '../../utils/sortingUtils'
import { ActionType } from '../action-type/actionType'
import { Action } from '../actions/actions'

export interface IMovieState {
  movieList: IMovie[]
  filteredMovie: IMovie[] | null
  activeMovie: IMovie | null
}

const initialState: IMovieState = {
  movieList: [],
  filteredMovie: null,
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
    case ActionType.FILTER_MOVIES:
      return {
        ...state,
        filteredMovie: action.payload
          ? state.movieList.filter((movie) =>
              movie.genres.includes(action.payload),
            )
          : null,
      }
    case ActionType.SORT_MOVIES:
      return {
        ...state,
        movieList: getSortedMovies(
          state.movieList,
          action.payload.id,
          action.payload.direction,
        ),
      }
    default:
      return state
  }
}
