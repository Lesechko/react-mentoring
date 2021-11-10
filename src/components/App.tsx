import { ReactElement, useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import { useMovieApi, useMovieQueryParams } from '../hooks'
import { IMovie } from './movieList/movie/Movie'
import Modal, { IMovieForm } from './common/modal/Modal'
import { getNewMovieTemplate } from './movieList/Movie.utils'
import { RootState } from '../redux/reducers'
import { MovieInfo } from './movieInfo/MovieInfo'
import { MovieParam } from '../hooks/useMovieQueryParams'

import styles from './App.module.css'

interface IApp {
  movies: IMovie[]
}

function App({ movies }: IApp): ReactElement {
  const [, service] = useMovieApi()
  const [params, queryService] = useMovieQueryParams()
  const [formOpen, setFormOpen] = useState(false)
  const formInitialData = useRef({})
  const selectMovie = queryService.getParam(MovieParam.Movie)

  useEffect(() => {
    service.GET()
  }, [])

  useEffect(() => {
    service.GET(params)
  }, [params])

  const onAddMovie = () => {
    formInitialData.current = {}
    setFormOpen(true)
  }

  const onEdit = (movieId: number) => {
    const editedMovie = movies.find((m) => m.id === movieId)
    formInitialData.current = editedMovie

    setFormOpen(true)
  }

  const onDelete = (id: number) => {
    service.DELETE(id)
  }

  const onSubmitModal = (movie: IMovieForm) => {
    setFormOpen(false)
    const updatedMovie = getNewMovieTemplate(movie)
    movie.id ? service.EDIT(updatedMovie) : service.ADD(updatedMovie)
  }

  return (
    <>
      <Modal
        open={formOpen}
        initialData={formInitialData.current}
        onClose={() => setFormOpen(false)}
        onSubmit={onSubmitModal}
      />
      <div className={styles.app}>
        {!selectMovie ? <Header addMovie={onAddMovie} /> : <MovieInfo />}
        <div className={styles.separator} />
        <Main onEdit={onEdit} onDelete={onDelete} />
        <Footer />
      </div>
    </>
  )
}

function mapStateToProps(state: RootState) {
  return {
    movies: state.movies.movieList,
  }
}

export default connect(mapStateToProps)(App)
