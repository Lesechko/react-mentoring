import { useEffect, useRef } from 'react'
import { dataURL } from '../components/App.constants'
import { useFetch } from './'
import { useDispatch } from 'react-redux'
import {
  addMovie,
  setMovies,
  deleteMovie,
  editMovie,
} from '../redux/action-creators/actionCreators'
import { IMovieForm } from '../components/common/modal/Modal'

type UseMovieApi = [
  Record<string, any>,
  Record<QueryType, (payload?: any) => void>,
]

enum QueryType {
  GET = 'GET',
  ADD = 'ADD',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}

const apiDispatcher = {
  [QueryType.GET]: setMovies,
  [QueryType.ADD]: addMovie,
  [QueryType.DELETE]: deleteMovie,
  [QueryType.EDIT]: editMovie,
}

const useMovieApi = (): UseMovieApi => {
  const queryType = useRef<QueryType>(null)
  const [{ response }, doFetch] = useFetch(dataURL.MOVIES)
  const dispatch = useDispatch()

  useEffect(() => {
    queryType &&
      response &&
      dispatch(apiDispatcher[queryType.current](response.data))
  }, [response])

  const getMovies = () => {
    queryType.current = QueryType.GET
    doFetch()
  }

  const addMovie = (movie: IMovieForm) => {
    queryType.current = QueryType.ADD
    doFetch({ method: 'POST', data: movie })
  }

  const editMovie = (movie: IMovieForm) => {
    queryType.current = QueryType.EDIT
    doFetch({ method: 'PUT', data: movie })
  }

  const deleteMovie = (id: number) => {
    queryType.current = QueryType.DELETE
    doFetch({ method: 'DELETE' }, String(id))
  }

  const action = {
    [QueryType.GET]: getMovies,
    [QueryType.ADD]: addMovie,
    [QueryType.EDIT]: editMovie,
    [QueryType.DELETE]: deleteMovie,
  }

  return [response, action]
}

export default useMovieApi
