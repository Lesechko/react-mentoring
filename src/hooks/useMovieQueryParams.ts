import { useSearchParams } from 'react-router-dom'
import { getMoviesSearhQuery } from '../utils'

interface IQueryService {
  addParams: (params: Record<string, string>) => void
  getParam: (name: MovieParam) => string | null
  deleteParam: (name: MovieParam) => void
}

export enum MovieParam {
  Search = 'search',
  Genre = 'genre',
  SortBy = 'sortBy',
  SortOrder = 'sortOrder',
  Movie = 'movie',
}

const useMovieQueryParams = (): [params: string, service: IQueryService] => {
  const [params, nextInit] = useSearchParams()

  const search = params.get(MovieParam.Search)
  const genreValue = params.get(MovieParam.Genre)
  const sortBy = params.get(MovieParam.SortBy)
  const sortOrder = params.get(MovieParam.SortOrder)

  const filter = genreValue === 'all' ? '' : genreValue

  const movieParams = getMoviesSearhQuery({
    filter,
    search,
    sortBy,
    sortOrder,
  })

  const addParams = (movieParams: Record<MovieParam, string>) => {
    const newParams = new URLSearchParams(params)
    Object.entries(movieParams).forEach(([name, value]) => {
      if (!value) {
        newParams.has(name) && newParams.delete(name)
        return
      }

      newParams.has(name)
        ? newParams.set(name, value.toLowerCase())
        : newParams.append(name, value.toLowerCase())
    })

    nextInit(newParams)
  }

  const getParam = (name: MovieParam) =>
    params.has(name) ? params.get(name) : null

  const deleteParam = (name: MovieParam) => {
    if (!params.has(name)) {
      return
    }
    const newParams = new URLSearchParams(params)
    newParams.delete(name)

    nextInit(newParams)
  }

  const queryService: IQueryService = { addParams, getParam, deleteParam }

  return [movieParams, queryService]
}

export default useMovieQueryParams
