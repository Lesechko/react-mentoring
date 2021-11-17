import { mockMovieState, newMovie } from '../../../__mocks__/mockData'
import moviesReducer from './moviesReducer'
import {
  addMovie,
  deleteMovie,
  editMovie,
  setActiveMovie,
  setMovies,
} from '../action-creators/actionCreators'

test('addMovie action should return new state with updated movieList', () => {
  const addAction = addMovie([newMovie])
  const newState = moviesReducer(mockMovieState, addAction)

  expect(newState.movieList).toContain(newMovie)
})

test(' setMovie action should return new state with updated movieList', () => {
  const setAction = setMovies([newMovie])
  const newState = moviesReducer(mockMovieState, setAction)

  expect(newState.movieList).toContain(newMovie)
})

test('deleteMovie action should return new state with updated movieList', () => {
  const deleteAction = deleteMovie([newMovie])
  const newState = moviesReducer(mockMovieState, deleteAction)

  expect(newState.movieList).toContain(newMovie)
})

test('setActiveMovie action should return new state with updated movieList', () => {
  const activeMovie = mockMovieState.movieList[0]
  const setActiveAction = setActiveMovie(activeMovie.id)
  const newState = moviesReducer(mockMovieState, setActiveAction)

  expect(newState.activeMovie).toBe(activeMovie)
})

test('editMovie action should return new state with updated movieList', () => {
  const newTitle = 'Mock new title'
  const updatedMovie = { ...mockMovieState.movieList[0], title: newTitle }
  const editAction = editMovie(updatedMovie)
  const newState = moviesReducer(mockMovieState, editAction)

  expect(newState.movieList[0].title).toBe(newTitle)
})
