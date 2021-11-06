import { ReactElement, useEffect, useRef, useState } from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import { useMovieApi } from '../hooks'
import { connect } from 'react-redux'
import { IMovie } from './movieList/movie/Movie'
import Modal, { IMovieForm } from './common/modal/Modal'
import { getNewMovieTemplate } from './movieList/Movie.utils'
import { RootState } from '../redux/reducers'

import styles from './App.module.css'

interface IApp {
  movies: IMovie[]
}

function App({ movies }: IApp): ReactElement {
  const [data, service] = useMovieApi()
  const [formOpen, setFormOpen] = useState(false)
  const formInitialData = useRef({})

  useEffect(() => {
    service.GET()
  }, [])

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
    <ErrorBoundary>
      <>
        <Modal
          open={formOpen}
          initialData={formInitialData.current}
          onClose={() => setFormOpen(false)}
          onSubmit={onSubmitModal}
        />
        <div className={styles.app}>
          <Header addMovie={onAddMovie} />
          <div className={styles.separator} />
          <Main onEdit={onEdit} onDelete={onDelete} />
          <Footer />
        </div>
      </>
    </ErrorBoundary>
  )
}

function mapStateToProps(state: RootState) {
  return {
    movies: state.movies.movieList,
  }
}

export default connect(mapStateToProps)(App)
