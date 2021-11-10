import { ReactElement, useMemo, useState } from 'react'
import { connect } from 'react-redux'
import { Navbar } from './navbar'
import MovieList from '../movieList/MovieList'
import { IMovie } from '../movieList/movie/Movie'
import { GenreItems } from './navbar/genres/GenresConstants'
import { RootState } from '../../redux/reducers'
import { useMovieQueryParams } from '../../hooks'

import styles from './Main.module.css'
import { SortingType } from '../common/sorting/Sorting.constants'
import { MovieParam } from '../../hooks/useMovieQueryParams'
interface IMain {
  movies: IMovie[]
  onDelete: (id: number) => void
  onEdit: (id: number) => void
}

const Main = ({ movies = [], onDelete, onEdit }: IMain): ReactElement => {
  const [genres, setGenres] = useState(GenreItems)
  const [, queryService] = useMovieQueryParams()

  const onGenreClick = (id: number) => {
    const updateGenres = genres.map((item) => ({
      ...item,
      active: item.id === id,
    }))

    setGenres(updateGenres)
  }

  const onMovieSelect = (id: number) =>
    queryService.addParams({ [MovieParam.Movie]: String(id) })

  const onSortChange = (sortBy: string, sortOrder: SortingType) =>
    queryService.addParams({
      [MovieParam.SortBy]: sortBy,
      [MovieParam.SortOrder]: sortOrder,
    })
  const moviesCount = useMemo(() => movies.length, [movies.length])

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Navbar
          genres={genres}
          onGenreClick={onGenreClick}
          onSortChange={onSortChange}
        />
        <div className={styles['movies-counter']}>
          <span className={styles['number']}>{moviesCount}</span> movies found
        </div>
        <MovieList
          onEdit={onEdit}
          onDelete={onDelete}
          onSelect={onMovieSelect}
          list={movies}
        ></MovieList>
      </div>
    </div>
  )
}

function mapStateToProps(state: RootState) {
  return {
    movies: state.movies.movieList,
  }
}

export default connect(mapStateToProps)(Main)
