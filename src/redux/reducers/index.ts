import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'

const reducers = combineReducers({
  movies: moviesReducer,
})

export type RootState = ReturnType<typeof reducers>

export default reducers
