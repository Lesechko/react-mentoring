import { ReactElement, useContext, useReducer } from 'react'
import styles from './App.module.css'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import { reducer } from '../state/reducer'
import MovieList from './movieList/MovieList'
import { initialState } from '../state/state'
import { addMovies} from '../state/actions'
import { IMovie } from './movieList/movie/Movie'
import {MovieProvider} from '../contexts/movieContext'


function App(): ReactElement {  
  return (
    <ErrorBoundary>
      <MovieProvider>
          <div className={styles.app}>
        <Header/>
        <div className={styles.separator} />
        <Main />
        <Footer />
      </div>
      </MovieProvider>
    
    </ErrorBoundary>
  )
}

export default App
