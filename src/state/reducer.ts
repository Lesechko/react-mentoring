import { IState } from './state'
export enum ActionType {
  ADD,
  DELETE,
  SET_ACTIVE,
}

export const reducer = (
  initialState: IState,
  action: { type: ActionType; payload: any },
) => {
  switch (action.type) {
    case ActionType.ADD:
      return {
        ...initialState,
        movieList: [...initialState.movieList, action.payload.movie],
      }
    case ActionType.DELETE:
      return {
        ...initialState,
        movieList: initialState.movieList.filter(
          (m) => m.id === action.payload.id,
        ),
      }
    case ActionType.SET_ACTIVE:
      return {
        ...initialState,
        activeMovie: action.payload.movie,
      }
    default:
      return initialState.movieList
  }
}
